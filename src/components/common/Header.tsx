import { Box, Button, Flex, Heading } from '@chakra-ui/react'

import type { NextPage } from "next"

const Header: NextPage = () => {
	return (
		<>
			<Flex
				justifyContent="space-between"
				bg="gray.200"
				height="16"
				alignItems="center"
				px="4"
			>
				<Heading>タイトル</Heading>
				<Box>
					<Button bg="gray.400" mr={4}>
						ログイン画面へ
					</Button>
					<Button bg="gray.400">ユーザー名</Button>
				</Box>
			</Flex>
		</>
	)
}

export default Header
