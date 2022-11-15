export const selectUserFields = `id,
  username,
  display_name,
  avatar_url,
  signature,
  website,
  description,
  updated_at` as const;

export const selectThreadFields = `
  id,
  created_at,
  updated_at,
  created_by (${selectUserFields}),
  title,
  body,
  categories
  ` as const;

export const selectReplyFields = `id,
    created_at,
    updated_at,
    created_by (${selectUserFields}),
    body,
    thread_id` as const;
