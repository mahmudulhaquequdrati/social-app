"use server";

import { revalidatePath } from "next/cache";
import User from "../model/user.model";
import { connectToDB } from "../mongoose";
// import { User } from "@clerk/nextjs/server";

interface UserPropType {
  userId: string;
  username: string;
  name: string;
  image: string;
  bio: string;
  path: string;
}

interface UserParams {
  id: string;
}

export async function UpdateUser({
  userId,
  username,
  name,
  image,
  bio,
  path,
}: UserPropType): Promise<void> {
  connectToDB();

  try {
    await User.findOneAndUpdate(
      {
        id: userId,
      },
      {
        username: username.toLowerCase(),
        name,
        image,
        bio,
        onboarding: true,
      },
      {
        upsert: true,
      }
    );

    if (path == "/profile/edit") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Failed to create or update a user`, error.message);
  }

  // const user = await User();
}

export async function Getuser({ id }: UserParams) {
  try {
    connectToDB();
    return await User.findOne({ id: id });
  } catch (error: any) {
    throw new Error(`Failed to create or update a user`, error.message);
  }
}
