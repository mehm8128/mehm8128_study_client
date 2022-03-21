import { Button, Flex, Heading } from '@chakra-ui/react'

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
				<Button bg="gray.100">ユーザー名</Button>
			</Flex>
		</>
	)
}

export default Header
