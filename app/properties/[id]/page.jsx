'use client'
import { useEffect, useState } from 'react'
// import { useParams } from 'next/navigation'
import { fetchProperty } from '@/utils/requests'

const PropertyId = ({ params }) => {
	const [property, setProperty] = useState(null)
	const [loading, setLoading] = useState(true)
	const id = params.id

	useEffect(() => {
		const fetchPropertyData = async () => {
			if (!id) return
			try {
				const property = await fetchProperty(id)
				setProperty(property)
			} catch (error) {
				console.log('Error fetching property: ', error)
			} finally {
				setLoading(false)
			}
		}
		if (property === null) {
			fetchPropertyData()
		}
	}, [id, property])

	return <div>{}</div>
}

export default PropertyId
