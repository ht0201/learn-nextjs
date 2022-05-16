import { Work } from '@/models'
import { Divider } from '@mui/material'
import { Box } from '@mui/system'
import React, { Fragment } from 'react'
import { WorkCard } from './work-card'

export interface WorkListProps {
	works: Work[]
}

export function WorkList({ works }: WorkListProps) {
	if (works.length === 0) return null
	return (
		<Box>
			{works.map((work) => (
				<Fragment key={work.id}>
					<WorkCard work={work} />
					<Divider sx={{ mt: 2, mb: 4 }} />
				</Fragment>
			))}
		</Box>
	)
}
