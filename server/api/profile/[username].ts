import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";
import {
  selectThreadFields,
  selectUserFields,
} from "~~/composables/selectFields";
import { Database } from "~~/lib/database.types";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient<Database>(event);
  const result = await client
    .from("profiles")
    .select(selectUserFields)
    .eq("username", event.context.params.username);
  if (!result.data) {
    throw new Error(`No data found ${result.error?.message}`);
  }
  if (result.data.length === 0) {
    throw new Error(`Post not found`);
  }
  return result.data[0];
});
