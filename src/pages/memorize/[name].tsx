import axios from 'axios'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import GoalList from 'src/components/goal/GoalList'
import TimeLine from 'src/components/record/TimeLine'
import UserIntro from 'src/components/UserIntro'
import { UserContext } from 'src/components/UserProvider'
import { memorizeData } from 'src/mock/memorize'
import { User } from 'src/types/user'

import { Box, Button, Flex, Heading, List, ListItem, Text } from '@chakra-ui/react'

import type { NextPage } from "next"

const Memorize: NextPage = () => {
	const router = useRouter()
	const name = router.query.name as string
	const [data, setData] = useState(memorizeData)

	// useEffect(() => {
	// 	if (!router.isReady) {
	// 		return
	// 	}
	// 	axios
	// 		.get(process.env.NEXT_PUBLIC_URL + "/api/memorize/" + name)
	// 		.then((res) => setData(res.data))
	// 		.catch((err) => alert(err))
	// }, [router.query])

	/*
	1.nameでfetch、dataに入れる
	2.ランダムに単語を選択してオブジェクトで保存(暗記済みは除外)
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
				<Box w="20%">
					<Text fontSize="xl" px="4" pb="2">
						{data.words[0].name}の意味を選んでください
					</Text>
					<List spacing={2}>
						{data.words.map((word) => (
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
