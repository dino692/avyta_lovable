
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  category TEXT NOT NULL,
  category_gradient TEXT NOT NULL DEFAULT 'from-blue-500 to-indigo-600',
  date TEXT NOT NULL,
  published_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  read_time TEXT NOT NULL DEFAULT '5 Min.',
  author TEXT NOT NULL DEFAULT 'AVYTA Team',
  slug TEXT NOT NULL UNIQUE,
  image TEXT NOT NULL,
  newsletter_sent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Blog posts are publicly readable"
  ON public.blog_posts
  FOR SELECT
  TO anon, authenticated
  USING (true);
