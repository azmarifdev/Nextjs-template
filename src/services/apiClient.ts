type ApiSuccess<T> = {
  success: true;
  data: T;
};

type ApiFailure = {
  success: false;
  error?: {
    code?: string;
    message?: string;
  };
  message?: string;
};

export class ApiClientError extends Error {
  status: number;
  code?: string;

  constructor(message: string, status: number, code?: string) {
    super(message);
    this.name = "ApiClientError";
    this.status = status;
    this.code = code;
  }
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

function getUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${API_BASE_URL}${path}`;
}

async function parseResponse<T>(response: Response): Promise<T> {
  const payload = (await response.json().catch(() => null)) as ApiSuccess<T> | ApiFailure | null;

  if (!response.ok || !payload?.success) {
    const message =
      payload && "error" in payload ? payload.error?.message : payload && "message" in payload ? payload.message : undefined;
    const code = payload && "error" in payload ? payload.error?.code : undefined;
    throw new ApiClientError(message || "Request failed", response.status, code);
  }

  return payload.data;
}

type RequestOptions<TPayload> = {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  headers?: HeadersInit;
  body?: TPayload;
};

async function request<T, TPayload = unknown>(path: string, init: RequestOptions<TPayload>) {
  const response = await fetch(getUrl(path), {
    ...init,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(init.headers || {})
    },
    body: init.body ? JSON.stringify(init.body) : undefined
  });

  return parseResponse<T>(response);
}

export async function apiPost<T, TPayload = unknown>(path: string, body?: TPayload): Promise<T> {
  return request<T, TPayload>(path, { method: "POST", body });
}

export async function apiGet<T>(path: string): Promise<T> {
  return request<T>(path, { method: "GET" });
}
