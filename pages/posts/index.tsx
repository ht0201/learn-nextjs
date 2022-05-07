import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import * as React from 'react';

export interface PostListPageProps {
  posts: any[];
}

export default function PostListPage({ posts }: PostListPageProps) {
  // console.log('posts', posts);
  return (
    <div>
      <h2>Post List Page</h2>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  // server-side
  //build time
  console.log('static props');
  const res = await fetch(
    'https://js-post-api.herokuapp.com/api/posts?_page=1'
  );
  const data = await res.json();

  return {
    props: {
      posts: data.data.map((post: any) => ({
        id: post.id,
        title: post.title,
      })),
    },
  };
};
