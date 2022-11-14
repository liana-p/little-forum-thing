export interface DbThread {
  id: string;
  created_at: Date;
  created_by: string;
  title: string;
  body: string;
}
export type DbThreadCreate = Omit<DbThread, "id" | "created_at">;

export interface DbReply {
  id: string;
  created_at: Date;
  created_by: string;
  post: string;
  body: string;
}
export type DbReplyCreate = Omit<DbReply, "id" | "created_at">;
