import { useAuth } from '@/hooks';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export interface AuthProps {
  children: any;
}

export function Auth({ children }: AuthProps) {
  const { profile, firstLoading } = useAuth();
  const router = useRouter();
  useEffect((): void => {
    if (!firstLoading && !profile?.data?.username) {
      router.push('./login');
    }
  }, [router, profile, firstLoading]);
  if (!profile?.data?.username) {
    return <p>Loading...</p>;
  }
  return <div>{children}</div>;
}
