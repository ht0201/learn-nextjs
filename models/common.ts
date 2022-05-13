import { NextPage } from 'next';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { ReactElement, ReactNode } from 'react';
import { EmotionCache } from '@emotion/react';

export interface LayoutProps {
  children: ReactNode;
}

export type NextPageWithLayout = NextPage & {
  Layout?: (page: LayoutProps) => ReactElement;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};
