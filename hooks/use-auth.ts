import { authApi } from '@/api-client';
import * as React from 'react';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';
export interface useAuthProps {}

export function useAuth(options?: Partial<PublicConfiguration>) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR('profile', {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
    ...options,
  });

  async function login() {
    await authApi.login({
      username: 'html',
      password: '123456',
    });
    await mutate();
  }
  async function logout() {
    await authApi.logout();
    mutate({}, false);
  }
  return {
    profile,
    login,
    logout,
  };
}
