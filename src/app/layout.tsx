import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { NavbarSheet } from '@/components/navbar-sheet'
import { ThemeProvider } from '@/components/theme/theme-provider'

export const metadata: Metadata = {
	title: 'RenderTypes-Test-task',
	description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ru' suppressHydrationWarning>
			<body>
				<ThemeProvider>
					<div className='min-h-dvh flex bg-plt-grey'>
						<Navbar />
						<main className='flex-1 m-5 ml-0 bg-background rounded-xl p-5 shadow max-[900px]:m-2'>
							<NavbarSheet />
							{children}
						</main>
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
