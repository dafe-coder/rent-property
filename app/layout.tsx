import '@/assets/styles/globals.css'
import { Metadata } from 'next'
import { FC, PropsWithChildren } from 'react'
import Navbar from '../components/Navbar'
type Props = {}

export const metadata: Metadata = {
	title: 'Rent Property | Find The Perfect Rental',
	description: 'Find your Dream rental property',
	keywords: 'property, hourly, monthly, find rentals',
}

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html lang='eng'>
			<body>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	)
}

export default MainLayout
