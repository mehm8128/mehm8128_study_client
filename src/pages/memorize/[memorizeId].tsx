import { Box, Button, Heading, List, ListItem, Text } from "@chakra-ui/react"
import axios from "axios"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { MemorizeType, WordType } from "src/types/memorize"
import { getRandomInt } from "src/utils/getRandomInt"

type Judge = 0 | 1 | 2 //0：まだ、1:正解、2:不正解

const Memorize: NextPage = () => {
	const router = useRouter()
	const id = router.query.memorizeId
	const [data, setData] = useState<MemorizeType>()
	const [questionWords, setQuestionWords] = useState<WordType[]>()
	const [choices, setChoices] = useState<WordType[]>()
	const [count, setCount] = useState(0)
	const [judge, setJudge] = useState(0)

	function shuffleData(array: any) {
		for (let i = 0; i < array.length - 1; i++) {
			const r = getRandomInt(0, i + 1)
			const tmp = array[i]
			array[i] = array[r]
			array[r] = tmp
		}
		return array
	}
	function handleAnswer(id: string) {
		if (id === questionWords![count].id) {
			setJudge(1)
		} else {
			setJudge(2)
		}
	}

	useEffect(() => {
		if (!router.isReady) {
			return
		}
		axios
			.get(process.env.NEXT_PUBLIC_URL + "/api/memorizes/" + id)
			.then((res) => {
				setData(res.data)
				setQuestionWords(shuffleData(res.data.words))
				console.log(res.data.words)
				const randomIntArray = shuffleData([
					...Array(res.data.words.length).keys(),
				])

				const preChoices = [
					res.data.words[randomIntArray[0]],
					res.data.words[randomIntArray[1]],
					res.data.words[randomIntArray[2]],
					res.data.words[randomIntArray[3]],
				]
				setChoices(preChoices)
			})
			.catch((err) => alert(err))
	}, [router.query])

	/*
	1.ifでfetch、dataに入れる
	2.ランダムに並び替えて配列に保存(todo:暗記済みを除外)
	3.ランダムに選択肢を選択してオブジェクトで保存(ここには暗記済みも含む)
	4.idが一致したら正解
	5.暗記済みにするかの選択と次の問題へボタン
	*/
	return (
		<>
			<Box p="8">
				<Heading as="h1" pb="8" size="lg">
					{data && data.name}
				</Heading>
				<Box w={{ base: "", md: "20%" }}>
					{questionWords && questionWords![count] ? (
						<Text fontSize="xl" pb="2">
							{questionWords[count].word}の意味を選んでください
						</Text>
					) : (
						"データがありません。"
					)}
					<List spacing={2}>
						{choices &&
							choices[0] &&
							choices.map((choice) => (
								<ListItem key={choice.id}>
									<Button w="100%" onClick={() => handleAnswer(choice.id)}>
										{choice.wordJp}
									</Button>
								</ListItem>
							))}
					</List>
				</Box>
			</Box>
		</>
	)
}

export default Memorize
