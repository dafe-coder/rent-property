const InfoBox = ({
	heading,
	bgColor = 'bg-gray-100',
	children,
	textColor = 'text-gray-800',
	buttonInfo,
}) => {
	return (
		<div className={`${bgColor} p-6 rounded-lg shadow-md`}>
			<h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
			<p className='mt-2 mb-4'>{children}</p>
			<a
				href={buttonInfo.link}
				className={`${buttonInfo.bgColor} inline-block bg-black text-white rounded-lg px-4 py-2 hover:opacity-80`}
			>
				{buttonInfo.text}
			</a>
		</div>
	)
}
export default InfoBox
