import connectDB from '@/config/database'
import Property from '@/models/Property'

// GET /api/properties/:id
export const GET = async (request, { params }) => {
	try {
		await connectDB()
		const res = await Property.findById(params.id)
		console.log(res)
		if (!res) return new Response('Property not Found', { status: 404 })
		return new Response(res, {
			status: 200,
		})
	} catch (error) {
		return new Response('Something went wrong!', {
			status: 500,
		})
	}
}
