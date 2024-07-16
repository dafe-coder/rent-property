import { model, models, Schema } from 'mongoose'

const UserSchema = new Schema(
	{
		email: {
			type: String,
			unique: [true, 'Email already exist!'],
			required: [true, 'Email is required!'],
		},
		userName: {
			type: String,
			required: [true, 'Username is required!'],
		},
		image: {
			type: String,
		},
		bookmarks: [{ type: Schema.Types.ObjectId, ref: 'Property' }],
	},
	{ timestamps: true }
)

const User = models.user || model('User', UserSchema)

export default User
