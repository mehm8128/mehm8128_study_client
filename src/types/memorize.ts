export type MemorizeType = {
	id: string
	name: string
	words: WordType[]
	createdAt: string
	updatedAt: string
}

export type WordType = {
	id: string
	word: string
	wordJp: string
	createdAt: string
}
