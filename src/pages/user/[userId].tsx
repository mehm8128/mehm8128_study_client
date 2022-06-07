import { Box, Flex, Heading } from "@chakra-ui/react"
import axios from "axios"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import UserIntro from "src/components/UserIntro"
import { UserContext } from "src/components/UserProvider"
import GoalList from "src/components/goal/GoalList"
import TimeLine from "src/components/record/TimeLine"
import { User } from "src/types/user"

const User: NextPage = () => {
	const { me, getUsers } = useContext(UserContext)
	const router = useRouter()
	const id =
		router.query.userId!.toString() !== "me"
			? router.query.userId!.toString()
			: me.id
	if (router.isReady) {
		if (!me.auth) router.replace("/login")
	}
	const [user, setUser] = useState<User>()

	useEffect(() => {
		if (!router.isReady) {
			return
		}
		getUsers()
		axios
			.get(process.env.NEXT_PUBLIC_URL + "/api/users/" + id)
			.then((res) => setUser(res.data))
			.catch((err) => alert(err))
	}, [router.query])

	return (
		<>
			<Box h="hull">
				{user !== undefined ? <UserIntro user={user} /> : null}
				<Flex>
					<Box width="50%" h={500}>
						<Heading textAlign="center" mb={4}>
							勉強の記録
						</Heading>
						<TimeLine overflowY="scroll" h="full" p={2} userid={id} />
					</Box>
					<Box width="50%" h={500}>
						<Heading textAlign="center" mb={4}>
							目標
						</Heading>
						<GoalList overflowY="scroll" h="full" p={2} userid={id} />
					</Box>
				</Flex>
			</Box>
		</>
	)
}

export default User
