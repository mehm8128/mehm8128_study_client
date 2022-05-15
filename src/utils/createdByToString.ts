import { User } from 'src/types/user'

export const createdByToString = (createdBy: string, users: User[]) => {
	return users.find((user) => user.id === createdBy)?.name ?? "unknown"
}
