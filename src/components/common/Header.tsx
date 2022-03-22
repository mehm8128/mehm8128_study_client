import { Box, Button, Flex, Heading } from '@chakra-ui/react'

import LinkComponent from './LinkComponent'

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
				<Heading>
					<LinkComponent href="/">タイトル</LinkComponent>
				</Heading>
				<Box>
					<Button bg="gray.400" mr={4}>
						<LinkComponent href="/login">ログイン画面へ</LinkComponent>
					</Button>
					<Button bg="gray.400">
						<LinkComponent href="/user/me">ユーザー名</LinkComponent>
					</Button>
				</Box>
			</Flex>
		</>
	)
}

export default Header
