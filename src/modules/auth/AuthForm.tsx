"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";

import { useToast } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { login, register, validateAuthForm } from "@/modules/auth/service";
import type { AuthErrors, AuthFormValues, AuthMode } from "@/modules/auth/types";

type AuthFormProps = {
  mode: AuthMode;
  redirectTo?: string;
};

export function AuthForm({ mode, redirectTo = "/dashboard" }: AuthFormProps) {
  const router = useRouter();
  const { showToast } = useToast();

  const [values, setValues] = useState<AuthFormValues>({
    name: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState<AuthErrors>({});
  const [loading, setLoading] = useState(false);

  const isRegister = useMemo(() => mode === "register", [mode]);

  function setField<K extends keyof AuthFormValues>(key: K, value: AuthFormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});

    const validationErrors = validateAuthForm(values, mode);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      showToast("Please fix form errors", "error");
      return;
    }

    setLoading(true);

    try {
      if (mode === "login") {
        await login({ email: values.email, password: values.password });
        showToast("Login successful", "success");
      } else {
        await register(values);
        showToast("Registration successful", "success");
      }

      router.push(redirectTo);
      router.refresh();
    } catch (submitError) {
      const message = submitError instanceof Error ? submitError.message : "Something went wrong";
      setErrors({ form: message });
      showToast(message, "error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="form">
      <form onSubmit={onSubmit} className="form" noValidate>
        <h1>{isRegister ? "Register" : "Login"}</h1>

        {isRegister ? (
          <>
            <Input
              id="name"
              name="name"
              placeholder="Full name"
              value={values.name}
              onChange={(event) => setField("name", event.target.value)}
              error={errors.name}
              required
            />
            {errors.name ? <p id="name-error" className="error">{errors.name}</p> : null}
          </>
        ) : null}

        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={(event) => setField("email", event.target.value)}
          error={errors.email}
          required
        />
        {errors.email ? <p id="email-error" className="error">{errors.email}</p> : null}

        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={(event) => setField("password", event.target.value)}
          error={errors.password}
          required
        />
        {errors.password ? <p id="password-error" className="error">{errors.password}</p> : null}

        {errors.form ? <p className="error">{errors.form}</p> : null}

        <Button disabled={loading} type="submit">
          {loading ? "Please wait..." : isRegister ? "Create account" : "Login"}
        </Button>

        <p>
          {isRegister ? "Already have an account?" : "Need an account?"}{" "}
          <Link href={isRegister ? "/login" : "/register"}>{isRegister ? "Login" : "Register"}</Link>
        </p>
      </form>
    </Card>
  );
}
