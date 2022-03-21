import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react'

import type { NextPage } from "next"

const GoalSettingForm: NextPage = () => {
	return (
		<>
			<Box borderWidth={2} p={8} w="30%" h={400}>
				<Heading>目標の設定</Heading>
				<Flex flexDirection="column" justifyContent="space-around" h="80%">
					<Input placeholder="タイトル"></Input>
					<Input placeholder="期限"></Input>
					<Input placeholder="コメント"></Input>
					<Button>設定</Button>
				</Flex>
			</Box>
		</>
	)
}

export default GoalSettingForm
