import { DbProfileRow, DbThreadJoined, DbThreadRow } from "~~/types/dbTypes";

export function defaultUser(): DbProfileRow {
  return {
    id: "",
    username: "unknown",
    display_name: "Unknown User",
    avatar_url: "",
    signature: "",
    website: "",
    description: "",
    updated_at: new Date().toString(),
  };
}

export function defaultThread(): DbThreadJoined {
  return {
    id: "",
    created_at: new Date().toString(),
    updated_at: new Date().toString(),
    created_by: defaultUser(),
    title: "Thread not found",
    body: "Unknown",
    categories: [useConfig().categories[0].slug],
  };
}
