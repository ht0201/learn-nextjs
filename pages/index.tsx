import { HeroSection, RecentPostsSection } from '@/components/home'
import { MainLayout } from '@/components/layout'
import type { NextPageWithLayout } from '@/models/index'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

const Home: NextPageWithLayout = () => {
	const router = useRouter()
	function goToDetailPage() {
		router.push({
			pathname: '/posts/[postId]',
			query: {
				postId: '123',
				ref: 'social',
			},
		})
	}
	return (
		<Box>
			<HeroSection />
			<RecentPostsSection />
		</Box>
	)
}

Home.Layout = MainLayout

export default Home
