import { Box, Button, Heading, List, ListItem, Text } from "@chakra-ui/react"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useState } from "react"
import { memorizeData } from "src/mock/memorize"
import { MemorizeType, WordType } from "src/types/memorize"
import { getRandomInt } from "src/utils/getRandomInt"

const Memorize: NextPage = () => {
	const router = useRouter()
	const name = router.query.name!.toString()
	const [data, setData] = useState<MemorizeType>(memorizeData)
	const [questionWord, setQuestionWord] = useState<WordType>()
	const [choices, setChoices] = useState<WordType[]>()

	// useEffect(() => {
	// 	if (!router.isReady) {
	// 		return
	// 	}
	// 	axios
	// 		.get(process.env.NEXT_PUBLIC_URL + "/api/memorize/" + name)
	// 		.then((res) => setData(res.data))
	// 		.catch((err) => alert(err))
	// }, [router.query])
	function selectWord() {
		const randomInt = getRandomInt(0, data.words.length)
		setQuestionWord(data.words[randomInt])
	}

	/*
	1.nameでfetch、dataに入れる
	2.ランダムに単語を選択してオブジェクトで保存(暗記済みは除外)追記：並び替えて配列に入れた方がよさそう
	3.ランダムに選択肢を選択してオブジェクトで保存(ここには暗記済みも含む)
	4.idが一致したら正解
	5.暗記済みにするかの選択と次の問題へボタン
	*/
	return (
		<>
			<Box p="8">
				<Heading as="h1" size="lg" pb="8">
					{data.name}
				</Heading>
				<Box w={{ base: "", md: "20%" }}>
					<Text fontSize="xl" pb="2">
						{data.words[0].name}の意味を選んでください
					</Text>
					<List spacing={2}>
						{choices &&
							choices.map((word) => (
								<ListItem key={word.id}>
									<Button w="100%">{word.nameJp}</Button>
								</ListItem>
							))}
					</List>
				</Box>
			</Box>
		</>
	)
}

export default Memorize
