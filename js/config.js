/* ===============================================================
   Supabase configuration for the contact form.
   Fill in after creating the Supabase project (see supabase/schema.sql).
   The anon key is safe to expose in the client as long as RLS only
   allows INSERT into contact_messages (which schema.sql enforces).
   =============================================================== */
window.SITE_CONFIG = {
  SUPABASE_URL: "",      // e.g. "https://xxxx.supabase.co"
  SUPABASE_ANON_KEY: ""  // the project's anon/public key
};
