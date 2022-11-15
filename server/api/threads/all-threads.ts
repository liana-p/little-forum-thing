import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";
import { selectThreadFields } from "~~/composables/selectFields";
import { Database } from "~~/lib/database.types";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient<Database>(event);
  const result = await client.from("threads").select(selectThreadFields);
  if (!result.data) {
    throw new Error(`Post creation failed ${result.error?.message}`);
  }
  return result.data;
});
