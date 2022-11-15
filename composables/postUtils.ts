import { DbReplyJoined, DbThreadJoined } from "~~/types/dbTypes";

export type Post = DbThreadJoined | DbReplyJoined;

export function isThread(
  post: DbThreadJoined | DbReplyJoined
): post is DbThreadJoined {
  return post.hasOwnProperty("title");
}
