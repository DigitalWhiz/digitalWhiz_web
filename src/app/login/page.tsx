"use client";
import { FormEvent, useState } from "react";
import { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function LoginPage() {

    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const res = await signIn("credentials", {
          email: formData.get("email"),
          password: formData.get("password"),
          redirect: false,
        });
    
        if (res?.error) setError(res.error as string);
    
        if (res?.ok) return router.push("/dashboard/profile");
      };
    

    
    return (
        <div className="justify-center h-[calc(100vh-4rem)] flex items-center">
        <form
          onSubmit={handleSubmit}
          className="gradient-bg-form px-8 py-10 w-3/12 rounded-2xl"
        >
          {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}
          <h1 className="text-4xl font-bold mb-7 text-white">Signin</h1>
  
          <label className="text-slate-300">Email:</label>
          <input
            type="email"
            placeholder="Email"
            className="bg-amber-50 px-4 py-2 block mb-2 w-full rounded"
            name="email"
          />
  
          <label className="text-slate-300">Password:</label>
          <input
            type="password"
            placeholder="Password"
            className="bg-amber-50 px-4 py-2 block mb-2 w-full rounded"
            name="password"
          />
  
          <button className="bg-blue-500 text-white px-4 py-2 block w-full mt-4 rounded">
            Signup
          </button>
        </form>
      </div>
    )
}


