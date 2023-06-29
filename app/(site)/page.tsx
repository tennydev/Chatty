import Image from "next/image";
import AuthForm from "./components/AuthForm";

const page = () => {
  return (
    <div className="flex flex-col min-h-full py-12 sm:px-6 lg:px-8 justify-center bg-gray-100">

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          src="/images/logo.png"
          className="mx-auto w-auo"
          alt="logo"
          height="96"
          width="96"
        />
        <h2 className="text-center text-3xl font-bold text-gray-900 tracking-tight">
          Sign in to your account
        </h2>
      </div>
      
      <AuthForm />

    </div>
  );
};

export default page;
