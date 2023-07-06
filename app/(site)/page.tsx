import Image from "next/image";
import AuthForm from "./components/AuthForm";

const page = () => {
  return (
    <div className="flex flex-col min-h-full py-12 sm:px-6 lg:px-8 justify-center bg-gray-100">

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          src="/images/logo2.png"
          className="mx-auto w-auto"
          alt="logo"
          height="64"
          width='64'
          priority={true}
        />
        <h2 className="text-center text-3xl font-bold text-gray-900 tracking-tight mt-6">
          Sign in to your account
        </h2>
      </div>
      
      <AuthForm />

    </div>
  );
};

export default page;
