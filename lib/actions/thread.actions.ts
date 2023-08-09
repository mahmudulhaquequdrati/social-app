"use server";
import { revalidatePath } from "next/cache";
import Thread from "../model/thread.model";
import User from "../model/user.model";
import { connectToDB } from "../mongoose";

interface Params {
  text: string;
  author: string;
  communityId: string | null;
  path: string;
}

export async function createThread({
  text,
  author,
  communityId,
  path,
}: Params): Promise<void> {
  try {
    connectToDB();

    // console.log(text, author);

    const createdThread = await Thread.create({
      text,
      author,
      communityId: null,
    });

    // console.log(createThread);

    // update user model

    await User.findByIdAndUpdate(author, {
      $push: {
        threads: createdThread._id,
      },
    });

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to create or update a user`, error.message);
  }
}
