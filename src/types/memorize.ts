export type MemorizeType = {
	id: string
	name: string
	words: Word[]
	createdAt: string
	updatedAt: string
}

export type Word = {
	id: string
	name: string
	nameJp: string
	createdAt: string
}
