import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostIdPageProps {}

export default function PostIdPageProps(props: PostIdPageProps) {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>PostIdPageProps</h1>
      <p>Query : {JSON.stringify(router.query)}</p>
    </div>
  );
}
