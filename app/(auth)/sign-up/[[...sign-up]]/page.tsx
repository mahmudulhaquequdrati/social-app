import { SignUp, SignUpButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignUp
      appearance={{
        elements: {
          formButtonPrimary: "bg-primary-600 hover:bg-primary-700",
          rootBox: "mx-auto pt-4",
          //   form: "flex justify-center items-center",
          //   logoBox: "justify-center -m-1",
          //   formHeaderTitle: "items-center",
        },
      }}
    />
    // <SignUpButton mode="modal">
    //   <button className="btn">Sign up</button>
    // </SignUpButton>
  );
}
