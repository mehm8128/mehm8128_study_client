import { RecordFavorite } from './favorite'

export type RecordType = {
	id: string
	title: string
	page: number
	time: number
	comment: string
	favorites: RecordFavorite[]
	favoriteNum: number
	createdBy: string
	createdAt: string
	updatedAt: string
}
