import {
	Box,
	Button,
	Flex,
	Heading,
	Input,
	Textarea,
} from "@chakra-ui/react"
import axios from "axios"
import { useRouter } from "next/router"
import { useContext, useState } from "react"

import { UserContext } from "../UserProvider"

const SignUp: React.FC = () => {
	const router = useRouter()
	const { login } = useContext(UserContext)
	const [userName, setUserName] = useState("")
	const [password, setPassword] = useState("")
	const [passwordConfirm, setPasswordConfirm] = useState("")
	const [description, setDescription] = useState("")

	function handleRegister(e: any) {
		e.preventDefault()
		if (
			password !== passwordConfirm ||
			userName.length === 0 ||
			password.length === 0
		) {
			alert(
				"ユーザー名とパスワードは1文字以上必要です。パスワードを確認用パスワードが一致していない可能性があります。"
			)
			return
		}
		axios
			.post(process.env.NEXT_PUBLIC_URL + "/api/users/signup", {
				name: userName,
				password: password,
				description: description,
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
	}

	return (
		<>
			<Box
				borderColor="gray.200"
				borderWidth={4}
				mb={{ base: 12 }}
				w={{ base: "100%", md: "40%" }}
			>
				<Heading mt={2} textAlign="center">
					新規登録
				</Heading>
				<Box as="form" h="90%" onSubmit={handleRegister}>
					<Flex flexDirection="column" h="100%" justifyContent="space-around">
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
						<Input
							placeholder="パスワード(確認)"
							value={passwordConfirm}
							onChange={(e) => setPasswordConfirm(e.target.value)}
						/>
						<Textarea
							h={32}
							placeholder="自己紹介"
							resize="none"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
						<Button type="submit">登録</Button>
					</Flex>
				</Box>
			</Box>
		</>
	)
}

export default SignUp
