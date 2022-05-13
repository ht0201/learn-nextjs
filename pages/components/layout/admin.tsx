import { Auth } from '@/components/common';
import { useAuth } from '@/hooks';
import { LayoutProps } from '@/models/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

export function AdminLayout({ children }: LayoutProps) {
  const router = useRouter();
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  });
  async function handleLogout() {
    try {
      // await authApi.logout();
      await logout();
      console.log('redirect to login');
    } catch (error) {
      console.log('failed to logout', error);
    }
  }
  return (
    <Auth>
      <h1>Admin Layout</h1>
      <h3>Profile : {JSON.stringify(profile || {}, null, 4)}</h3>
      <button onClick={handleLogout}> Logout </button>

      <div>Sidebar</div>
      <Link href='/'>
        <a> Home</a>
      </Link>
      <Link href='/about'>
        <a> About</a>
      </Link>
      <div>{children}</div>
    </Auth>
  );
}
