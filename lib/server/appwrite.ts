// src/lib/server/appwrite.js
"use server";
import { Client, Account } from "node-appwrite";
import { cookies } from "next/headers";

export async function createSessionClient() {
  if (!process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || !process.env.NEXT_PUBLIC_APPWRITE_PROJECT) {
    throw new Error('Missing required environment variables');
  }
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT);

  const session = cookies().get("appwrite-session");
  
  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}

export async function createAdminClient() {
  if (!process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || !process.env.NEXT_PUBLIC_APPWRITE_PROJECT || !process.env.NEXT_APPWRITE_KEY) {
    throw new Error('Missing required environment variables');
  }
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)
    .setKey(process.env.NEXT_APPWRITE_KEY);

  return {
    get account() {
      return new Account(client);
    },
  };
}
