import { GoalFavorite } from './Favorite'

export type GoalType = {
	id: string
	title: string
	comment: string
	goalDate: string
	isCompleted: boolean
	favorites: GoalFavorite[]
	favoriteNum: number
	createdBy: string
	createdAt: string
	updatedAt: string
}
