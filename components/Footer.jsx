import logo from '@/assets/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer class='bg-gray-200 py-4 mt-auto'>
			<div class='container mx-auto flex flex-col md:flex-row items-center justify-between px-4'>
				<div class='mb-4 md:mb-0'>
					<Image src={logo} alt='Logo' class='h-8 w-auto' />
				</div>
				<div class='flex flex-wrap justify-center md:justify-start mb-4 md:mb-0'>
					<ul class='flex space-x-4'>
						<li>
							<Link href='/properties'>Properties</Link>
						</li>
						<li>
							<Link href='/terms'>Terms of Service</Link>
						</li>
					</ul>
				</div>
				<div>
					<p class='text-sm text-gray-500 mt-2 md:mt-0'>
						&copy; 2024 PropertyPulse. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}
export default Footer
