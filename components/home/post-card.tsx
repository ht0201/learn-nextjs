import { Post } from '@/models'
import { Card, CardContent, Divider, Typography } from '@mui/material'
import * as React from 'react'
import { format } from 'date-fns'

export interface PostCardProps {
	post: Post
}

export function PostCard({ post }: PostCardProps) {
	return (
		<Card>
			<CardContent>
				<Typography variant="h5" fontWeight="bold">
					{post.title}
				</Typography>
				<Typography variant="body1" sx={{ display: 'flex' }} mt={2} mb={1.5}>
					{format(Number(post.publishedDate), 'dd MMM yyyy')}
					<Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
					{post.tagList.join(', ')}
				</Typography>
				<Typography variant="body2">{post.description}</Typography>
			</CardContent>
		</Card>
	)
}
