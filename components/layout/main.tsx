import { Footer, Header } from '@/components/common'
import { LayoutProps } from '@/models'
import { Box, Stack } from '@mui/material'
import * as React from 'react'

export function MainLayout({ children }: LayoutProps) {
	return (
		<Stack minHeight="100vh">
			<Header />

			<Box component="main" flexGrow={1}>
				<div>{children}</div>
			</Box>

			<Footer />
		</Stack>
	)
}
