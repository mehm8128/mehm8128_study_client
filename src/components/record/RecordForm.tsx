import { Box, BoxProps, Button, Flex, Heading, Input } from '@chakra-ui/react'

import type { NextPage } from "next"

const RecordForm: NextPage<BoxProps> = (props) => {
	return (
		<>
			<Box borderWidth={2} p={8} h={400} {...props}>
				<Heading>勉強の記録</Heading>
				<Flex flexDirection="column" justifyContent="space-around" h="80%">
					<Input placeholder="タイトル"></Input>
					<Input placeholder="ページ数"></Input>
					<Input placeholder="時間"></Input>
					<Input placeholder="コメント"></Input>
					<Button>記録</Button>
				</Flex>
			</Box>
		</>
	)
}

export default RecordForm
