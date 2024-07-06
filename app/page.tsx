type Props = {}
import Hero from '@/components/Hero'
import InfoBoxes from '../components/InfoBoxes'

const Home = (props: Props) => {
	return (
		<div>
			<Hero />
			<InfoBoxes />
		</div>
	)
}

export default Home
