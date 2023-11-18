import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form className="w-3/12 absolute p-12 my-36 mx-auto left-0 right-0 bg-black text-white bg-opacity-80  rounded-md">
        <h1 className="text-4xl py-4 font-medium">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Name"
          className="p-4 my-3 w-full rounded-md bg-zinc-700"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-3 w-full rounded-md bg-zinc-700"
        />
        <input
          type="password"
          placeholder="password"
          className="p-4 my-3 w-full rounded-md bg-zinc-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-md text-xl font-medium">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-2xl py-4 font-medium cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm ? (
            <span>
              <span className="text-zinc-500">New to Netflix?</span> Sign up
              now.
            </span>
          ) : (
            <span>
              <span className="text-zinc-500">Already registered?</span> Login
              now.
            </span>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
