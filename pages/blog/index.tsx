import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';

type PostData = {
  id: string;
  date: string;
  title: string;
  excerpt: string;
};

type BlogProps = {
  allPostsData: PostData[];
};

const Blog = ({ allPostsData }: BlogProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Blog
        </h1>
        <div className="grid gap-8">
          {allPostsData.map(({ id, date, title, excerpt }) => (
            <Link href={`/blog/${id}`} key={id}>
                <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-300">{title}</CardTitle>
                    <CardDescription className="text-slate-400">{date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">{excerpt}</p>
                  </CardContent>
                </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Blog;
