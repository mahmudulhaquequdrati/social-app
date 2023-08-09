//app/page.tsx
import { UpdateUser } from "@/lib/actions/user.actions";
import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  // const res = await UpdateUser();
  return (
    <div>
      <h1 className="head-text text-left">Home</h1>
    </div>
  );
}
