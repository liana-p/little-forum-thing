import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";
import { Database } from "~~/lib/database.types";
import { DbThread, DbThreadCreate } from "~~/types/dbTypes";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient<Database>(event);
  const result = await client.from("threads").select("*");
  if (!result.data) {
    throw new Error(`Post creation failed ${result.error?.message}`);
  }
  return result.data;
});
