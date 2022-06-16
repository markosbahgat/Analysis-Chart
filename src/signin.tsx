import SignInForm from "components/signInForm";
import {Link} from "react-router-dom";
import { FormData } from "models";
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useState } from 'react';

export default function SignIn() {
  const [isLoading, setLoading] = useState<boolean>(false);
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ mode: 'all', criteriaMode: 'all' })
  const onSubmit = handleSubmit((data: FormData) => {
    setLoading(true);
    reset()
    console.log(data)
    localStorage.setItem('token', data.email);
    setTimeout(() => {
      setLoading(false);
      nav('/');
    }, 3000)
  })
  if (isLoading) {
    return (
    <>
      <div className="min-h-screen pt-16 pb-12 flex flex-col items-center bg-white">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 flex justify-center">
            <a href="/" className="inline-flex">
              <img
                className="h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Loading....</p>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Be patient we are coming.!</h1>
              
            </div>
          </div>
        </main>
        
      </div>
    </>
  )
}

  return (
    <>
      <div className="h-screen	 bg-gray-100">
        <div className="flex min-h-full items-center justify-center">
          <div className="w-[750px] flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="flex flex-col w-full lg:w-[100%] p-10 rounded-3xl shadow-lg bg-white h-[80vh] ">
              <div>
                <Link to='/'>
                    <img className="h-40 w-auto m-auto mb-20" src="/logo.png" alt="Markos" />
                </Link>
                <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                  Sign in to your account
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  New User ?{' '}
                  <Link to='/signup' className="font-medium text-blue-600 hover:text-black">
                      Create New Account
                  </Link>
                </p>
              </div>

              <div className="mt-8">
                <div className="mt-6">
                  <SignInForm onSubmit={onSubmit} register={register} errors={errors} />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}
