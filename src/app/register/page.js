"use client";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setUser } = useAuth();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/register",
        data
      );
      if (res.status === 200) {
        alert("Usuario registrado correctamente");
        const { email, password } = data;
        const res = await axios.post("http://localhost:3000/api/auth/login", {
          email,
          password,
        });
        const { user } = res.data;
        setUser(user);
        router.push("/");
      } else {
        alert("Error al registrar usuario");
      }
    } catch (error) {
      alert("Error al registrar usuario");
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base/7 font-semibold text-gray-900">
                Información Personal
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Nombre
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("firstName", {
                        required: "El nombre es obligatorio",
                      })}
                      type="text"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                    {errors.firstName && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="last-name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Apellido Paterno
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("lastName", {
                        required: "El apellido paterno es obligatorio",
                      })}
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                    {errors.lastName && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="last-name"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Apellido Materno
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("maternalLastName", {
                        required: "El apellido materno es obligatorio",
                      })}
                      type="text"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                    {errors.maternalLastName && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.maternalLastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Correo Electronico
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("email", {
                        required: "El correo electrónico es obligatorio",
                      })}
                      type="email"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="password"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("password", {
                        required: "El password es obligatorio",
                      })}
                      type="password"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                    {errors.password && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    País
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      {...register("country", {
                        required: "El país es obligatorio",
                      })}
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                    {errors.country && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.country.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="street-address"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Dirección de envio
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("streetAddress", {
                        required: "La dirección es obligatoria",
                      })}
                      type="text"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                    {errors.streetAddress && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.streetAddress.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="city"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Ciudad
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("city", {
                        required: "La ciudad es obligatoria",
                      })}
                      type="text"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                    {errors.city && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.city.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="region"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Estado
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("region", {
                        required: "El estado es obligatorio",
                      })}
                      type="text"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                    {errors.region && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.region.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Codigo Postal
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("postalCode", {
                        required: "El código postal es obligatorio",
                      })}
                      type="text"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                    {errors.postalCode && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.postalCode.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm/6 font-semibold text-gray-900"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
