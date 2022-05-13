import { authApi } from '@/api-client';
import * as React from 'react';
import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';
export interface useAuthProps {
  profile?: any;
  firstLoading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

export function useAuth(options?: Partial<PublicConfiguration>): useAuthProps {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR('profile', {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
    ...options,
  });

  const firstLoading = profile === undefined && error === undefined;
  console.log(profile, error);
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
    firstLoading,
  };
}
