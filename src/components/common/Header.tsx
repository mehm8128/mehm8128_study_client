import { Button, Flex, Heading } from "@chakra-ui/react"
import type { NextPage } from "next"
import { useContext } from "react"

import { UserContext } from "../UserProvider"
import LinkComponent from "./LinkComponent"

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
				<Flex justifyContent="space-around" gap="4">
					<LinkComponent href="/memorize">
						<Button bg="gray.400">単語暗記へ</Button>
					</LinkComponent>
					{me.auth ? (
						<>
							<Button bg="gray.400" onClick={handleLogout}>
								ログアウト
							</Button>
							<LinkComponent href="/user/me">
								<Button bg="gray.400">{me.name}</Button>
							</LinkComponent>
						</>
					) : (
						<LinkComponent href="/login">
							<Button bg="gray.400">ログイン画面へ</Button>
						</LinkComponent>
					)}
				</Flex>
			</Flex>
		</>
	)
}

export default Header
