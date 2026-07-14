-- Contact form messages
-- Anonymous visitors may only INSERT. Reading requires the service role
-- (or the Supabase dashboard), so the anon key in the client is safe.

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 1 and 200),
  email text not null check (char_length(email) between 3 and 320),
  company text check (char_length(company) <= 200),
  phone text check (char_length(phone) <= 50),
  message text not null check (char_length(message) between 1 and 5000)
);

alter table public.contact_messages enable row level security;

drop policy if exists "anon can insert messages" on public.contact_messages;
create policy "anon can insert messages"
  on public.contact_messages
  for insert
  to anon
  with check (true);

-- no select/update/delete policies: anon cannot read anything back
