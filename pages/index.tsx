import { Seo } from '@/components/common'
import {
	HeroSection,
	RecentPostsSection,
	FeatureWorksSection,
} from '@/components/home'
import { MainLayout } from '@/components/layout'
import type { NextPageWithLayout } from '@/models'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

const Home: NextPageWithLayout = () => {
	// const router = useRouter()
	// function goToDetailPage() {
	// 	router.push({
	// 		pathname: '/posts/[postId]',
	// 		query: {
	// 			postId: '123',
	// 			ref: 'social',
	// 		},
	// 	})
	// }

	return (
		<Box>
			<Seo
				data={{
					title: 'NextJs',
					description: 'NextJs for begginers',
					url: 'https://learn-nextjs-pi-nine.vercel.app/',
					thumbnailUrl:
						'https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/11/nextjs.png',
				}}
			/>

			<HeroSection />
			<RecentPostsSection />
			<FeatureWorksSection />
		</Box>
	)
}

Home.Layout = MainLayout

export default Home
