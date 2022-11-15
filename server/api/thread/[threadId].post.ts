import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";
import { Database } from "~~/lib/database.types";
import { selectReplyFields } from "~~/composables/selectFields";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient<Database>(event);
  try {
    const user = await serverSupabaseUser(event);
    if (!user) {
      throw new Error("No logged in user");
    }
    const body = await readBody(event);
    const reply: Database["public"]["Tables"]["replies"]["Insert"] = {
      created_by: user.id,
      thread_id: event.context.params.threadId,
      body: body.body,
    };
    console.log(reply);
    const result = await client
      .from("replies")
      .insert(reply)
      .select(selectReplyFields);
    console.log(result);
    if (!result.data) {
      throw new Error(`Post creation failed ${result.error?.message}`);
    }
    return result.data[0];
  } catch (error) {
    throw new Error(`You must be signed in to create a thread. [${error}]`);
  }
});
