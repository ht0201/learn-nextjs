import { Box, Button, Container, Stack, Typography } from '@mui/material'
import * as React from 'react'
import avatar from '@/images/profile.jpg'
import Image from 'next/image'

export function HeroSection() {
	return (
		<Box component="section" pt={{ xs: 4, md: 18 }} pb={{ xs: 7.5, md: 9 }}>
			<Container>
				<Stack
					spacing={4}
					direction={{ xs: 'column-reverse', md: 'row' }}
					alignItems={{ xs: 'center', md: 'flex-start' }}
					textAlign={{ xs: 'center', md: 'left' }}
				>
					<Box>
						<Typography component="h1" variant="h3" fontWeight="bold">
							Hi, I am John, <br /> Creative Technologist
						</Typography>
						<Typography py={{ xs: 2.5, md: 5 }}>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint. Velit officia consequat duis enim velit mollit.
							Exercitation veniam consequat sunt nostrud amet.
						</Typography>
						<Button variant="contained">Download Resume</Button>
					</Box>
					<Box
						sx={{
							minWidth: '240px',
							boxShadow: '-5px 13px',
							color: 'secondary.light',
							borderRadius: '50%',
						}}
					>
						<Image src={avatar} alt="avatar" layout="responsive" />
					</Box>
				</Stack>
			</Container>
		</Box>
	)
}
