import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";
import { Database } from "~~/lib/database.types";
import { DbThread, DbThreadCreate } from "~~/types/dbTypes";

export default defineEventHandler(async (event) => {
  const client = serverSupabaseClient<Database>(event);
  try {
    const user = await serverSupabaseUser(event);
    if (!user) {
      throw new Error("No logged in user");
    }
    const body = await readBody(event);
    const thread: DbThreadCreate = {
      created_by: user.id,
      title: body.title,
      body: body.body,
    };
    const result = await client
      .from("threads")
      .insert(thread as any)
      .select();
    if (!result.data) {
      throw new Error(`Post creation failed ${result.error?.message}`);
    }
    return {
      id: result.data[0].id,
    };
  } catch (error) {
    throw new Error(`You must be signed in to create a thread. [${error}]`);
  }
});
