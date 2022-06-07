import { Box, Button, Flex, Heading, Input, Select } from "@chakra-ui/react"
import axios from "axios"
import type { MemorizeType } from "../../types/memorize"
import type { NextPage } from "next"
import { useEffect, useState } from "react"

const Admin: NextPage = () => {
	const [newWord, setNewWord] = useState<string>("")
	const [newWordJp, setNewWordJp] = useState<string>("")
	const [memorizes, setMemorizes] = useState<MemorizeType[]>()
	const [targetMemorize, setTargetMemorize] = useState<string>()
	function handleRegister(e: any) {
		e.preventDefault()
		if (!/^[a-zA-Z]+$/.test(newWord)) {
			alert("英単語はアルファベットで入力してください")
			return
		}
		const data = {
			word: newWord,
			wordJp: newWordJp,
		}
		axios
			.post(
				process.env.NEXT_PUBLIC_URL + `/api/memorizes/${targetMemorize}/words`,
				data
			)
			.then(() => {
				console.log("added!")
				setNewWord("")
				setNewWordJp("")
			})
			.catch((err) => alert(err))
	}
	useEffect(() => {
		axios
			.get(process.env.NEXT_PUBLIC_URL + "/api/memorizes")
			.then((res) => {
				setMemorizes(res.data)
			})
			.catch((err) => alert(err))
	}, [])

	return (
		<>
			<Box p="4" w={{ base: "", md: "20%" }}>
				<Heading as="h1" size="lg" pb="2" px="2">
					新しい単語を追加
				</Heading>
				<Box as="form" onSubmit={handleRegister}>
					<Flex direction="column" gap="4">
						<Select
							placeholder="追加先"
							value={targetMemorize}
							onChange={(e) => setTargetMemorize(e.target.value)}
						>
							{memorizes !== undefined
								? memorizes.map((memorize) => (
										<option value={memorize.id} key={memorize.id}>
											{memorize.name}
										</option>
								  ))
								: null}
						</Select>
						<Input
							value={newWord}
							placeholder="追加する単語(英語)"
							onChange={(e) => setNewWord(e.target.value)}
						/>
						<Input
							value={newWordJp}
							placeholder="追加する単語(日本語)"
							onChange={(e) => setNewWordJp(e.target.value)}
						/>
						<Button type="submit">追加</Button>
					</Flex>
				</Box>
			</Box>
		</>
	)
}

export default Admin
