import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignIn
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
  );
}
