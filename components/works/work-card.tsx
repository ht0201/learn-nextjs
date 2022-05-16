import { Work } from '@/models'
import { Box, Chip, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import * as React from 'react'
import { format } from 'date-fns'

export interface WorkCardProps {
	work: Work
}

export function WorkCard({ work }: WorkCardProps) {
	return (
		<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
			<Box width={{ xs: '100%', sm: '246px' }} flexShrink={0}>
				<Image
					src={work.thumbnailsUrl}
					width={246}
					height={180}
					alt="img"
					layout="responsive"
				/>
			</Box>
			<Box>
				<Typography variant="h4" fontWeight="bold">
					{work.title}
				</Typography>
				<Stack direction="row" my={2.5}>
					<Chip
						color="secondary"
						size="small"
						label={format(Number(work.createdAt), 'yyyy')}
					/>
					<Typography ml={3} color="GrayText">
						{work.tagList.join(', ')}
					</Typography>
				</Stack>
				<Typography>{work.shortDescription}</Typography>
			</Box>
		</Stack>
	)
}
