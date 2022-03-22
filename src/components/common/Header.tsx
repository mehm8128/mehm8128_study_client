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
					<LinkComponent href="/login">
						<Button bg="gray.400" mr={4}>
							ログイン画面へ
						</Button>
					</LinkComponent>
					<LinkComponent href="/user/me">
						<Button bg="gray.400">ユーザー名</Button>
					</LinkComponent>
				</Box>
			</Flex>
		</>
	)
}

export default Header
