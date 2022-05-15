import { Box, Container, Stack, Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import * as React from 'react'
import { ROUTE_LIST } from './routes'
import clsx from 'clsx'
import { useRouter } from 'next/router'

export interface HeaderDesktopProps {}

export function HeaderDesktop(props: HeaderDesktopProps) {
	const router = useRouter()
	return (
		<Box display={{ xs: 'none', md: 'block' }} py={2}>
			<Container>
				<Stack direction="row" justifyContent="flex-end">
					{ROUTE_LIST.map((route, index) => (
						<Link key={route.path} href={route.path} passHref>
							<MuiLink
								sx={{ ml: 2, fontWeight: 'medium' }}
								className={clsx({ active: router.pathname === route.path })}
							>
								{' '}
								{route.label}
							</MuiLink>
						</Link>
					))}
				</Stack>
			</Container>
		</Box>
	)
}
