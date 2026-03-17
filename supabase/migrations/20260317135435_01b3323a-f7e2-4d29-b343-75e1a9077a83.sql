
-- Enable pg_net for HTTP calls from triggers
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Create function to call the newsletter edge function
CREATE OR REPLACE FUNCTION public.notify_new_blog_post()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  supabase_url TEXT;
  service_role_key TEXT;
BEGIN
  -- Only trigger for new posts that haven't had newsletter sent
  IF NEW.newsletter_sent = false THEN
    SELECT decrypted_secret INTO supabase_url FROM vault.decrypted_secrets WHERE name = 'SUPABASE_URL' LIMIT 1;
    SELECT decrypted_secret INTO service_role_key FROM vault.decrypted_secrets WHERE name = 'SUPABASE_SERVICE_ROLE_KEY' LIMIT 1;
    
    PERFORM extensions.http_post(
      url := supabase_url || '/functions/v1/send-blog-newsletter',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || service_role_key
      ),
      body := '{}'::jsonb
    );
  END IF;
  RETURN NEW;
END;
$$;

-- Create trigger on blog_posts table
CREATE TRIGGER on_new_blog_post
  AFTER INSERT ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_new_blog_post();
