import React from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

function MiniProfile() {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <div className="relative w-16 h-16  flex-shrink-0 cursor-pointer">
        <Image
          src="/images/person-unknown.jpg"
          alt="insta"
          fill
          object-fit="contain"
          className="h-10 rounded-full cursor-pointer"
        />
      </div>
      <div className="flex-1 mx-4 ">
        <h2 className="font-bold">Mehrad</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      {session ? (
        <button
          onClick={() => signOut()}
          className="text-blue-400 text-sm font-semibold"
        >
          SIGN-OUT
        </button>
      ) : (
        <button
          onClick={() => signIn()}
          className="text-blue-400 text-sm font-semibold"
        >
          SIGN-IN
        </button>
      )}
    </div>
  );
}

export default MiniProfile;
