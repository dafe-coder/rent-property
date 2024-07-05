'use client'
type Props = {}
import { useRouter } from 'next/navigation'

const Property = (props: Props) => {
	const router = useRouter()

	return (
		<div>
			Property
			<button onClick={() => router.push('/')} className='block bg-blue-500 p2'>
				Go Home
			</button>
		</div>
	)
}

export default Property
