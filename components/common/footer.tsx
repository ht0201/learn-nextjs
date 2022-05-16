import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { Box, Icon, Stack, Typography } from '@mui/material'
import * as React from 'react'

export interface FooterProps {}

export function Footer(props: FooterProps) {
	const socialLinks = [
		{ icon: Facebook, url: 'https://google.com' },
		{ icon: Instagram, url: 'https://google.com' },
		{ icon: Twitter, url: 'https://google.com' },
		{ icon: LinkedIn, url: 'https://google.com' },
	]
	return (
		<Box component="footer" py={2} textAlign="center">
			<Stack direction="row" justifyContent="center">
				{socialLinks.map((social, index) => (
					<Box
						key={index}
						component="a"
						p={2}
						href={social.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Icon component={social.icon} sx={{ fontSize: 48 }} />
					</Box>
				))}
			</Stack>

			<Typography>
				Copyright ©{new Date().getFullYear()} All rights reserved{' '}
			</Typography>
		</Box>
	)
}
