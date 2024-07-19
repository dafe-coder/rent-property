import '@/assets/styles/globals.css'
import AuthProvider from '@/components/AuthProvider'
import { Metadata } from 'next'
import { FC, PropsWithChildren } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export const metadata: Metadata = {
	title: 'Rent Property | Find The Perfect Rental',
	description: 'Find your Dream rental property',
	keywords: 'property, hourly, monthly, find rentals',
}

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<AuthProvider>
			<html lang='eng'>
				<body>
					<Navbar />
					<main className='min-h-[calc(100vh_-_9rem)]'>{children}</main>
					<Footer />
				</body>
			</html>
		</AuthProvider>
	)
}

export default MainLayout
