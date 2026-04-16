import { apiPost } from "@/services/apiClient";

import type { AuthErrors, AuthFormValues, AuthMode, AuthUser } from "@/modules/auth/types";

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function validateAuthForm(values: AuthFormValues, mode: AuthMode): AuthErrors {
  const errors: AuthErrors = {};

  if (mode === "register" && values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!isValidEmail(values.email.trim())) {
    errors.email = "Please enter a valid email address";
  }

  if (values.password.trim().length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
}

export async function login(values: Pick<AuthFormValues, "email" | "password">): Promise<AuthUser> {
  return apiPost<AuthUser, Pick<AuthFormValues, "email" | "password">>("/api/v1/auth/login", values);
}

export async function register(values: AuthFormValues): Promise<AuthUser> {
  return apiPost<AuthUser, AuthFormValues>("/api/v1/auth/register", values);
}
