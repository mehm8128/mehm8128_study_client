import axios from 'axios'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import GoalList from 'src/components/goal/GoalList'
import TimeLine from 'src/components/record/TimeLine'
import UserIntro from 'src/components/UserIntro'
import { UserContext } from 'src/components/UserProvider'
import { User } from 'src/types/User'

import { Box, Flex, Heading } from '@chakra-ui/react'

import type { NextPage } from "next"
const User: NextPage = () => {
	const { me, getUsers } = useContext(UserContext)
	const router = useRouter()
	const id =
		(router.query.userId as string) !== "me"
			? (router.query.userId as string)
			: me.id
	if (router.isReady) {
		if (!me.auth) router.replace("/login")
	}
	const [user, setUser] = useState<User>({} as User)

	useEffect(() => {
		if (!router.isReady) {
			return
		}
		getUsers()
		axios
			.get("http://localhost:8000/api/users/" + id)
			.then((res) => setUser(res.data))
			.catch((err) => alert(err))
	}, [router.query])

	return (
		<>
			<Box h="hull">
				<UserIntro user={user} />
				<Flex>
					<Box width="50%" h={500}>
						<Heading textAlign="center" mb={4}>
							勉強の記録
						</Heading>
						<TimeLine overflowY="scroll" h="full" p={2} userId={id} />
					</Box>
					<Box width="50%" h={500}>
						<Heading textAlign="center" mb={4}>
							目標
						</Heading>
						<GoalList overflowY="scroll" h="full" p={2} userId={id} />
					</Box>
				</Flex>
			</Box>
		</>
	)
}

export default User
