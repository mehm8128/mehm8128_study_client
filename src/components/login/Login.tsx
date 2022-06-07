import {
	Box,
	Button,
	Flex,
	FormControl,
	Heading,
	Input,
} from "@chakra-ui/react"
import axios from "axios"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useContext, useState } from "react"
import { UserContext } from "src/components/UserProvider"

const Login: NextPage = () => {
	const router = useRouter()
	const { login } = useContext(UserContext)
	const [userName, setUserName] = useState("")
	const [password, setPassword] = useState("")
	function handleLogin(e: any) {
		e.preventDefault()
		axios
			.post(process.env.NEXT_PUBLIC_URL + "/api/users/login", {
				name: userName,
				password: password,
			})
			.then((res) => {
				login({
					id: res.data.id,
					name: res.data.name,
					auth: true,
				})
				router.push("/")
			})
			.catch((err) => alert(err))
		return false
	}
	return (
		<>
			<Box
				borderWidth={4}
				borderColor="gray.200"
				h="70%"
				w={{ base: "100%", md: "40%" }}
			>
				<Heading textAlign="center" mt={2}>
					ログイン
				</Heading>
				<Box as="form" h="80%" onSubmit={handleLogin}>
					<Flex flexDirection="column" justifyContent="space-around" h="100%">
						<Input
							placeholder="ユーザー名"
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
						/>
						<Input
							placeholder="パスワード"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Button type="submit">ログイン</Button>
					</Flex>
				</Box>
			</Box>
		</>
	)
}

export default Login
