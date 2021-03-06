import { Button, Flex, Heading } from "@chakra-ui/react"
import { useContext } from "react"

import { UserContext } from "../UserProvider"
import LinkComponent from "./LinkComponent"

const Header: React.FC = () => {
	const { me, logout } = useContext(UserContext)

	function handleLogout() {
		logout()
	}
	return (
		<>
			<Flex
				alignItems="center"
				bg="gray.200"
				height="16"
				justifyContent="space-between"
				px="4"
			>
				<Heading>
					<LinkComponent href="/">タイトル</LinkComponent>
				</Heading>
				<Flex gap="4" justifyContent="space-around">
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
