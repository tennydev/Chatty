"use client";

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/Button";
import AuthSocialButton from "./AuthSocialButton";

import { PiGithubLogoBold } from "react-icons/pi";
import { PiGoogleLogoBold } from "react-icons/pi";

type Variant = "login" | "register";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("login");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "login") {
      setVariant("register");
    } else {
      setVariant("login");
    }
  }, [variant]);
  // memoized, watch for changes in dependency array

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "register") {
      // await fetch register post
    }
    if (variant === "login") {
      // next auth sign in
    }
  };

  const socialAuthEvent = (event: string) => {
    setIsLoading(true);
    // next auth sign in
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">

      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "register" && (
            <Input id="name" label="Name" register={register} errors={errors} />
          )}
          <Input
            id="email"
            label="Email"
            type="email"
            register={register}
            errors={errors}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {variant === "login" ? "Sign in" : "Register"}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-2">
          <AuthSocialButton
            icon={PiGithubLogoBold}
            onClick={() => socialAuthEvent("github")}
          />
          <AuthSocialButton
            icon={PiGoogleLogoBold}
            onClick={() => socialAuthEvent("google")}
          />
        </div>

        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          {variant === "login"
            ? "New to Chattty ?"
            : "Already have an account ?"}
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "login" ? "Create an account" : "Login"}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AuthForm;