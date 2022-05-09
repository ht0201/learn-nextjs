import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostPageProps {
  post: any;
}

export default function PostIdPage({ post }: PostPageProps) {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p>{post.author}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('GET STATIC PATHS');
  const res = await fetch(
    'https://js-post-api.herokuapp.com/api/posts?_page=1'
  );
  const data = await res.json();
  console.log('data', data);
  return {
    paths: data.data.map((post: any) => ({ params: { postId: post.id } })),
    fallback: false,
    // ISR
    // fallback: 'blocking',          chờ call api lấy data
    // fallback: true,          trong lúc chờ call api thì show component Loading...
  };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async (
  context: GetStaticPropsContext
) => {
  console.log('GET STATIC PROPS', context.params?.postId);
  const postId = context.params?.postId;
  if (!postId) return { notFound: true };
  const res = await fetch(
    `https://js-post-api.herokuapp.com/api/posts/${postId}`
  );
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
};
