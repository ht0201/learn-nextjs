import { Post } from '@/models'
import {
	Box,
	Container,
	Link as MuiLink,
	Stack,
	Typography,
} from '@mui/material'
import Link from 'next/link'
import * as React from 'react'
import { PostCard } from './post-card'

export interface RecentPostsProps {}

export function RecentPostsSection(props: RecentPostsProps) {
	const posts: Post[] = [
		{
			id: 1,
			title: 'Making a design system from scratch',
			publishedDate: '1652640295637',
			tagList: ['Design', 'Pattern'],
			description:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		},
		{
			id: 2,
			title: 'Creating pixel perfect icons in Figma',
			publishedDate: '1652640295638',
			tagList: ['Figma', 'Icon design'],
			description:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
		},
	]
	return (
		<Box component="section" bgcolor="secondary.light" pt={1} pb={4}>
			<Container>
				<Stack
					direction="row"
					justifyContent={{ xs: 'center', md: 'space-between' }}
					mb={2}
				>
					<Typography variant="h5">Recent posts</Typography>
					<Link passHref href="/blog">
						<MuiLink
							color="secondary.main"
							display={{ xs: 'none', md: 'inline' }}
						>
							View all
						</MuiLink>
					</Link>
				</Stack>

				<Stack
					direction={{ xs: 'column', md: 'row' }}
					spacing={2.5}
					sx={{
						'& > div': {
							width: {
								xs: '100%',
								md: '50%',
							},
						},
					}}
				>
					{posts.map((post) => (
						<Box key={post.id}>
							<PostCard post={post} />
						</Box>
					))}
				</Stack>
			</Container>
		</Box>
	)
}
