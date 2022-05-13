import { LayoutProps } from '@/models/index';
import Link from 'next/link';
import * as React from 'react';
import { Auth } from '@/components/common';

export function AdminLayout({ children }: LayoutProps) {
  return (
    <Auth>
      <div>
        <h1>Admin Layout</h1>
        <div>Sidebar</div>
        <Link href='/'>
          <a> Home</a>
        </Link>
        <Link href='/about'>
          <a> About</a>
        </Link>
        <div>{children}</div>
      </div>
    </Auth>
  );
}
