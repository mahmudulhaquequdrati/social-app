"use server";

import { connectToDB } from "../mongoose";

export async function UpdateUser(): Promise<void> {
  connectToDB();
}
