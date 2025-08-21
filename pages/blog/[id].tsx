import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPostIds, getPostData } from '@/lib/posts';
import Head from 'next/head';
import Navigation from '@/components/Navigation';

type PostProps = {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
};

const Post = ({ postData }: PostProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <article className="prose prose-invert lg:prose-xl">
          <h1>{postData.title}</h1>
          <div className="text-slate-400 mb-8">{postData.date}</div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </main>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.id) {
    return {
      notFound: true,
    };
  }
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};

export default Post;
