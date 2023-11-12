import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { useRouter } from "next/router";
import withAuth from "@/components/HOC/withAuth";
import Link from "next/link";
import useUser from "@/contexts/userContext";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Please enter password"),
});

async function performLogin(userData) {
  return await fetch("/api/login", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(userData),
  });
}

export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    clearErrors,
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });
  const router = useRouter();
  const { loginUser } = useUser();
  return (
    <div className="w-screen h-screen bg-white">
      <div className="w-full h-full flex justify-center items-center">
        <div className="max-w-xl flex-1 border border-gray-300 rounded p-8 shadow-lg">
          <form
            onSubmit={handleSubmit(async (data) => {
              clearErrors();
              const res = await performLogin(data);
              if (!res.ok) {
                const errors = await res.json();
                setError("customError", {
                  type: "custom",
                  message: errors.message,
                });
              } else {
                loginUser();
                router.push("/hello-world");
              }
            })}
          >
            <div className="flex flex-col gap-y-4">
              <h2 className="font-bold text-2xl text-center">Login!</h2>
              <label htmlFor="email">Email</label>
              <input
                className="border-gray-300 rounded border p-1"
                type="email"
                {...register("email")}
                id="email"
              />
              <span className="text-red-500">
                <ErrorMessage name="email" errors={errors} />
              </span>
              <label htmlFor="password">Password</label>
              <input
                className="border-gray-300 rounded border p-1"
                type="password"
                {...register("password")}
                id="password"
              />
              <span className="text-red-500">
                <ErrorMessage name="password" errors={errors} />
              </span>
              <span className="text-red-500">
                <ErrorMessage name="customError" errors={errors} />
              </span>
              <button className="bg-blue-400 p-1 rounded text-white">
                Login
              </button>
              <p className="text-center">
                Don't have an account?{" "}
                <span className="text-blue-400">
                  <Link href="/signup">Sign Up</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
