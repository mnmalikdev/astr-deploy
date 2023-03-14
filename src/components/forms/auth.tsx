import { useRouter } from "next/router";

export const LoginForm = () => {
  const router = useRouter();

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Sign In");
    router.push("auth/check-email");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex mb-8 items-center justify-center">
          <input
            type="text"
            placeholder="Email Address"
            className="w-72 h-10 bg-gray-100 rounded-md p-2"
          />
        </div>
        <div className="flex items-center justify-center mb-6">
          <button className="bg-yellow-400 text-white shadow-xl px-2 py-2 rounded-lg w-52">
            Sign In
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center mb-8">
        <button className="font-semibold">Continue as Guest</button>
      </div>
      <div className="w-72 px-8">
        <p className="text-xs text-center mb-20">
          By signing in, you are agreeing to our{" "}
          <span className="text-[#2CB673]">Terms of Service</span> and
          <span className="text-[#2CB673]"> Privacy Policy</span>
        </p>
      </div>
    </>
  );
};

export const SignupForm = () => {
  const router = useRouter();

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Sign Up");
    router.push("auth/check-email");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex mb-3 items-center justify-center">
          <input
            type="text"
            placeholder="First Name"
            className="w-72 h-9 bg-gray-100 rounded-md p-2"
          />
        </div>
        <div className="flex mb-3 items-center justify-center">
          <input
            type="text"
            placeholder="Last Name"
            className="w-72 h-9 bg-gray-100 rounded-md p-2"
          />
        </div>
        <div className="flex mb-5 items-center justify-center">
          <input
            type="text"
            placeholder="Email Address"
            className="w-72 h-9 bg-gray-100 rounded-md p-2"
          />
        </div>
        <div className="px-7">
          <div className="mb-1">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I accept your{" "}
              <span className="text-[#2CB673]">Terms of Service</span>
            </label>
          </div>
          <div className="mb-6">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I accept your{" "}
              <span className="text-[#2CB673]">Privacy Policy</span>
            </label>
          </div>
        </div>
        <div className="flex items-center justify-center mb-3">
          <button className="bg-yellow-400 text-white shadow-xl px-2 py-2 rounded-lg w-52">
            Sign Up
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center">
        <button className="font-semibold">Continue as Guest</button>
      </div>
    </>
  );
};
