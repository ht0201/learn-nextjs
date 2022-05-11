import { authApi } from '@/api-client';
import axiosClient from '@/api-client/axios-client';
import { useAuth } from '@/hooks';
import * as React from 'react';

export interface LoginProps {}

export default function LoginPage(props: LoginProps) {
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  });
  async function handleLogin() {
    try {
      // await authApi.login({
      //   username: 'html',
      //   password: '123456',
      // });
      await login();
      console.log('redirect to dashboard');
    } catch (error) {
      console.log('failed to login', error);
    }
  }
  // async function handleGetProfile() {
  //   try {
  //     await authApi.getProfile();
  //   } catch (error) {
  //     console.log('failed to getProfile', error);
  //   }
  // }
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
    <div>
      <h1>Login Page</h1>
      <h3>Profile : {JSON.stringify(profile || {}, null, 4)}</h3>
      <button onClick={handleLogin}> Login </button>
      {/* <button onClick={handleGetProfile}> Get profile </button> */}
      <button onClick={handleLogout}> Logout </button>
    </div>
  );
}
