'use client'
type Props = {}
import properties from '@/properties.json'
import { useRouter } from 'next/navigation'
import PropertyCard from '../../components/PropertyCard'

const Property = (props: Props) => {
	const router = useRouter()

	return (
		<section className='px-4 py-6'>
			<div className='container-xl lg:container m-auto px-4 py-6'>
				{properties.length === 0 ? (
					<p>No properties found</p>
				) : (
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
						{properties.map(property => (
							<PropertyCard />
						))}
					</div>
				)}
			</div>
		</section>
	)
}

export default Property
