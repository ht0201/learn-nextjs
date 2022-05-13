import { LayoutProps } from '@/models/index';
import { Box, Stack } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';
import { Header, Footer } from '@/components/common';

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight='100vh'>
      <Header />

      <Box component='main' flexGrow={1}>
        <h1>Main Layout</h1>
        <Link href='/'>
          <a> Home</a>
        </Link>
        <Link href='/blog'>
          <a> Blog</a>
        </Link>
        <Link href='/works'>
          <a> Works</a>
        </Link>
        <div>{children}</div>
      </Box>

      <Footer />
    </Stack>
  );
}
