import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface ParamsCachePageProps {
  post: any;
  query: any;
}

export default function ParamsCachePage({ post, query }: ParamsCachePageProps) {
  const router = useRouter();
  console.log('post', post);

  return (
    <div>
      <h1>ParamsCache Page</h1>
      <p>Query : {JSON.stringify(router.query)}</p>

      <h3>Post detail</h3>
      <p>{post?.id}</p>
      <p>{post?.title}</p>
      <p>{post?.author}</p>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  //cache 5s: <5s get cache, after 5s getServerSideProps
  context.res.setHeader('Cache-Control', 's-maxage=5');

  //cache 5s: <5s get cache, after 5s get cache get old data && trigger getServerSideProps, load more one get new data

  context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate');

  //cache 5s: <5s get cache, after 5-10s get cache && trigger getServerSideProps

  context.res.setHeader(
    'Cache-Control',
    's-maxage=5, stale-while-revalidate=5'
  );

  await new Promise((res) => setTimeout(res, 3000));
  const postId = context.query?.postId;
  if (!postId) return { props: { query: context.query } };
  const resp = await fetch(
    `https://js-post-api.herokuapp.com/api/posts/${postId}`
  );

  const data = await resp.json();

  return {
    props: {
      post: data,
      query: context.query,
    },
  };
}
