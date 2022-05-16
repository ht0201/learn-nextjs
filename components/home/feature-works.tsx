import { Work } from '@/models'
import {
	Box,
	Container,
	Link as MuiLink,
	Stack,
	Typography,
} from '@mui/material'
import Link from 'next/link'
import * as React from 'react'
import { WorkList } from '../works'

export interface FeatureWorksProps {}

export function FeatureWorksSection(props: FeatureWorksProps) {
	const works: Work[] = [
		{
			id: 1,
			title: 'Making a design system from scratch',
			tagList: ['Design', 'Pattern'],
			shortDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			fullDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			createdAt: '1652640295637',
			updatedAt: '1652640295637',
			thumbnailsUrl:
				'https://res.cloudinary.com/dwcpiwvfr/image/upload/v1652643246/learn-nextjs/feature-item-1_vdhgaw.jpg',
		},
		{
			id: 2,
			title: 'Making a design system from scratch',
			tagList: ['Design', 'Pattern'],
			shortDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			fullDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			createdAt: '1652640295637',
			updatedAt: '1652640295637',
			thumbnailsUrl:
				'https://res.cloudinary.com/dwcpiwvfr/image/upload/v1652643246/learn-nextjs/feature-item-2_roi0p0.jpg',
		},
		{
			id: 3,
			title: 'Making a design system from scratch',
			tagList: ['Design', 'Pattern'],
			shortDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			fullDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			createdAt: '1652640295637',
			updatedAt: '1652640295637',
			thumbnailsUrl:
				'https://res.cloudinary.com/dwcpiwvfr/image/upload/v1652643246/learn-nextjs/feature-item-3_zhbdhz.jpg',
		},
	]
	return (
		<Box component="section" pt={1} pb={4}>
			<Container>
				<Typography
					variant="h5"
					mb={3}
					textAlign={{ xs: 'center', md: 'left' }}
				>
					Feature works
				</Typography>

				<WorkList works={works} />
				{/* {works.map((post) => (
						<Box key={post.id}>
							<PostCard post={post} />
						</Box>
					))} */}

				{/* <Stack
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
				></Stack> */}
			</Container>
		</Box>
	)
}
