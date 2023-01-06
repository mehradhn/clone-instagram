import React from "react";
import Image from "next/image";
import SearchIcon from "../public/icons/SearchIcon";
import Heart from "../public/icons/Heart";
import HomeIcon from "../public/icons/HomeIcon";
import MenuIcon from "../public/icons/MenuIcon";
import PaperAirPlane from "../public/icons/PaperAirPlane";
import PlusCircle from "../public/icons/PlusCircle";
import UserGroup from "../public/icons/UserGroup";
import { useSession, signIn } from "next-auth/react";
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between mx-5 xl:mx-auto max-w-5xl">
        {/* left: icon Instagrame */}
        <div className="relative hidden lg:inline-grid w-24 h-12 cursor-pointer">
          <Image
            src="/images/text-logo.png"
            alt="insta"
            fill
            object-fit="contain"
          />
        </div>
        <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image src="/images/logo.png" alt="insta" fill object-fit="contain" />
        </div>

        {/* middle  search*/}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon />
            </div>
            <input
              type="text"
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:border-black rounded-md focus:ring-black"
              placeholder="Search..."
            />
          </div>
        </div>

        {/* right icons */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="w-6 h-6 md:hidden cursor-pointer" />
          {session ? (
            <>
              <div className="navBtn relative">
                <PaperAirPlane className="navBtn -rotate-45" />
                <div
                  className="absolute -top-2 -right-2 text-sm
            bg-red-500 w-5 h-5 animate-pulse text-white rounded-full flex items-center justify-center"
                >
                  3
                </div>
              </div>
              <PlusCircle onClick={() => setOpen(true)} className="navBtn" />
              <UserGroup className="navBtn" />
              <Heart className="navBtn" />
              <div className="relative w-10 h-10  flex-shrink-0 cursor-pointer">
                {session && (
                  <Image
                    src={session?.user?.image}
                    alt="insta"
                    fill
                    object-fit="contain"
                    className="h-10 rounded-full cursor-pointer"
                  />
                )}
              </div>
            </>
          ) : (
            <button onClick={signIn}>SIGIN-IN</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
