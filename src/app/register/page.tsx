"use client";
import { FormEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { AUTH_ROUTES } from "@/routes/routes";

function Signup() {
  const [error, setError] = useState();
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const signupResponse = await axios.post("/api/auth/signup", {
        email: formData.get("email"),
        password: formData.get("password"),
        name: formData.get("name"),
      });
      console.log(signupResponse);
      const res = await signIn("credentials", {
        email: signupResponse.data.email,
        password: formData.get("password"),
        redirect: false,
      });

    // CUANDO EL INICIO SE SESIÓN ES OK, REDIRECCIONAR A LA PAGINA DE PERFIL DE USUARIO
      if (res?.ok) return router.push(AUTH_ROUTES.PROFILE); 
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        setError(errorMessage);
      }
    }
  };

  return (
    <div className="justify-center h-[calc(100vh-4rem)] flex items-center">
      <form onSubmit={handleSubmit} className="gradient-bg-form px-8 py-10 w-3/12 rounded-2xl">

        {/* ACÁ DEBO MODIFICAR EL ERROR QUE ME APARECE EN EL NAVEGADOR, YA QUE ESTÁ CONFIGURADO MAS O MENOS, NO TIENE NADA EXTRABAGANTE */}
        
        {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}
        <h1 className="text-4xl font-bold mb-7 text-white">Register</h1>

        <label className="text-slate-300">Name:</label>
        <input
          type="text"
          placeholder="Name Lastname"
          className="bg-amber-50 px-4 py-2 block mb-2 w-full rounded"
          name="name"
        />

        <label className="text-slate-300">Email:</label>
        <input
          type="email"
          placeholder="example@gmail.com"
          className="bg-amber-50 px-4 py-2 block mb-2 w-full rounded"
          name="email"
        />

        <label className="text-slate-300">Password:</label>
        <input
          type="password"
          placeholder="******"
          className="bg-amber-50 px-4 py-2 block mb-2 w-full rounded"
          name="password"
        />

        <button className="bg-blue-500 text-white px-4 py-2 block w-full mt-4 rounded">
          Send
        </button>
      </form>
    </div>
  );
}

export default Signup;