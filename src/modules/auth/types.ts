export type AuthMode = "login" | "register";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
};

export type AuthFormValues = {
  name: string;
  email: string;
  password: string;
};

export type AuthErrors = {
  name?: string;
  email?: string;
  password?: string;
  form?: string;
};
