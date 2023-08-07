import {
  SignedIn,
  SignOutButton,
  OrganizationSwitcher,
  SignInButton,
  UserProfile,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { dark } from "@clerk/themes";

const Topbar = () => {
  const isUserSignedIn = true;
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image alt="logo" src={"assets/logo.svg"} width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
      </Link>
      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          {/* {isUserSignedIn ? <SignedIn /> : <SignedOut />} */}
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src={"/assets/logout.svg"}
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        {/* <UserButton afterSignOutUrl="/" /> */}

        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        ></OrganizationSwitcher>
      </div>
    </nav>
  );
};

export default Topbar;
