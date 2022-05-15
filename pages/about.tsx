// import dynamic from 'next/dynamic';
import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AdminLayout } from '@/components/layout'

// const Header = dynamic(() => import('./components/common/header'), {
//   ssr: false,
// });

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
	const router = useRouter()
	const [posts, setPosts] = useState([])

	console.log('About query', router.query)
	const page = router.query?.page

	useEffect(() => {
		if (!page) {
			router.push(`/about?page=1`)
			// return;
		}
		;(async () => {
			const res = await fetch(
				`https://js-post-api.herokuapp.com/api/posts?_page=${page}`
			)
			const data = await res.json()
			setPosts(data.data)
		})()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page])

	const handleNextPage = () => {
		router.push(
			{
				pathname: './about',
				query: {
					page: (Number(page) || 1) + 1,
				},
			},
			undefined,
			{ shallow: true } // ko render server
		)
	}
	return (
		<Box>
			<Typography component="h1" variant="h3" color="primary.main">
				About page
			</Typography>
			{/* <h1>About</h1> */}
			{/* <Header /> */}

			<ul>
				{posts.map((post: any) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
			<button onClick={handleNextPage}>Next page</button>
		</Box>
	)
}

AboutPage.Layout = AdminLayout

export async function getStaticProps() {
	console.log('GET STATIC PROPS')
	return {
		props: {},
	}
}
