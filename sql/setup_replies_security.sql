-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security for more details.
alter table replies
  enable row level security;

create policy "Replies are viewable by everyone." on replies
  for select using (true);

create policy "Users can create new replies." on replies
  for insert WITH CHECK (true);

create policy "Users can update their own threads." on replies
  for update using (auth.uid() = created_by);
