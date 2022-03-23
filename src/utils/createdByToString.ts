import { User } from 'src/types/User'

export const createdByToString = (createdBy: string, users: User[]) => {
	return users.find((user) => user.id === createdBy)?.name ?? "unknown"
}
