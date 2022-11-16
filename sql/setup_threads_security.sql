-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security for more details.
alter table threads
  enable row level security;

create policy "Threads are viewable by everyone." on threads
  for select using (true);

create policy "Users can create new threads." on threads
  for insert WITH CHECK (true);

create policy "Users can update their own threads." on threads
  for update using (auth.uid() = created_by);
