import { Box, Button, Flex, Heading, Input, Select } from "@chakra-ui/react"
import type { NextPage } from "next"
import { useState } from "react"

const Admin: NextPage = () => {
	const [newWord, setNewWord] = useState<string>()
	//memorizeDataを持ってきてnameをselectに入れる
	return (
		<>
			<Box p="4" w={{ base: "", md: "20%" }}>
				<Heading as="h1" size="lg" pb="2" px="2">
					新しい単語を追加
				</Heading>
				<Flex direction="column" gap="4">
					<Select placeholder="追加先" />
					<Input value={newWord} placeholder="追加する単語(英語)" />
					<Input value={newWord} placeholder="追加する単語(日本語)" />
					<Button>追加</Button>
				</Flex>
			</Box>
		</>
	)
}

export default Admin
