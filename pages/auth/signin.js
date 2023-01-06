import React from "react";
import Header from "../../components/Header";
import { signIn as signInProvider, getProviders } from "next-auth/react";

function signIn({ providers }) {
  return (
    <>
      <Header />
      <div className="flex flex-col mt-5 px-14 text-center items-center justify-center min-h-screen py-2 ">
        <img className="w-80" src="/images/text-logo.png" alt="" />
        <p>Instagram Clone</p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => {
            return (
              <div key={provider.name}>
                <button
                  className="p-3 bg-blue-500 rounded-lg text-white"
                  onClick={() =>
                    signInProvider(provider.id, { callbackUrl: "/" })
                  }
                >
                  SIGN-IN with {provider.name}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default signIn;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
