import { useContext } from 'react'

import { Box, Button, Flex, Heading } from '@chakra-ui/react'

import { UserContext } from '../UserProvider'
import LinkComponent from './LinkComponent'

import type { NextPage } from "next"
const Header: NextPage = () => {
	const { me, logout } = useContext(UserContext)

	function handleLogout() {
		logout()
	}
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
					{me.auth ? (
						<>
							<Button bg="gray.400" mr={4} onClick={handleLogout}>
								ログアウト
							</Button>
							<LinkComponent href="/user/me">
								<Button bg="gray.400" width="32">
									{me.name}
								</Button>
							</LinkComponent>
						</>
					) : (
						<LinkComponent href="/login">
							<Button bg="gray.400" mr={4}>
								ログイン画面へ
							</Button>
						</LinkComponent>
					)}
				</Box>
			</Flex>
		</>
	)
}

export default Header
