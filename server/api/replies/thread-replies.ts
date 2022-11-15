import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";
import {
  selectReplyFields,
  selectThreadFields,
  selectUserFields,
} from "~~/composables/selectFields";
import { Database } from "~~/lib/database.types";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient<Database>(event);
  const query = getQuery(event);
  const result = await client
    .from("replies")
    .select(selectReplyFields)
    .eq("thread_id", query.threadId);
  if (!result.data) {
    throw new Error(`No data found ${result.error?.message}`);
  }
  return result.data;
});
