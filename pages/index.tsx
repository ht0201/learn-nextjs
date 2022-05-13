import { MainLayout } from '@/components/layout';
import type { NextPageWithLayout } from '@/models/index';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

const Home: NextPageWithLayout = () => {
  const router = useRouter();
  function goToDetailPage() {
    router.push({
      pathname: '/posts/[postId]',
      query: {
        postId: '123',
        ref: 'social',
      },
    });
  }
  return <div className={styles.container}>Home page</div>;
};

Home.Layout = MainLayout;

export default Home;
