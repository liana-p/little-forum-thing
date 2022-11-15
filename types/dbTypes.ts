import { Database } from "~~/lib/database.types";

export type DbProfileRow = Database["public"]["Tables"]["profiles"]["Row"];
export type DbReplyRow = Database["public"]["Tables"]["replies"]["Row"];
export type DbThreadRow = Database["public"]["Tables"]["threads"]["Row"];

export type DbThreadJoined = Omit<DbThreadRow, "created_by"> & {
  created_by: DbProfileRow;
};
