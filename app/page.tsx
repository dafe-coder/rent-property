type Props = {}
import Link from 'next/link'
const Home = (props: Props) => {
	return (
		<div>
			<h1 className='text-xxl'>Welcome</h1>
			<Link href='/properties'>Properties</Link>
		</div>
	)
}

export default Home
