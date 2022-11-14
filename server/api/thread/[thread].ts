import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";
import { Database } from "~~/lib/database.types";
import { DbThread, DbThreadCreate } from "~~/types/dbTypes";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient<Database>(event);
  const result = await client
    .from("threads")
    .select("*")
    .eq("id", event.context.params.thread);
  if (!result.data) {
    throw new Error(`No data found ${result.error?.message}`);
  }
  if (result.data.length === 0) {
    throw new Error(`Post not found`);
  }
  return result.data[0];
});
