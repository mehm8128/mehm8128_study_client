import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import GoalList from 'src/components/goal/GoalList'
import TimeLine from 'src/components/record/TimeLine'
import UserIntro from 'src/components/UserIntro'
import { UserContext } from 'src/components/UserProvider'

import { Box, Flex, Heading } from '@chakra-ui/react'

import type { NextPage } from "next"
const User: NextPage = () => {
	const { user } = useContext(UserContext)
	const router = useRouter()
	if (router.isReady) {
		if (!user.auth) router.replace("/login")
	}
	const [userId, setUserId] = useState<string>("")

	useEffect(() => {
		if (!router.isReady) {
			return
		}
		setUserId(router.query.userId as string)
	}, [router.query])
	return (
		<>
			<Box h="hull">
				<UserIntro userId={userId} />
				<Flex>
					<Box width="50%" h={500}>
						<Heading textAlign="center" mb={4}>
							勉強の記録
						</Heading>
						<TimeLine overflowY="scroll" h="full" p={2} />
					</Box>
					<Box width="50%" h={500}>
						<Heading textAlign="center" mb={4}>
							目標
						</Heading>
						<GoalList overflowY="scroll" h="full" p={2} />
					</Box>
				</Flex>
			</Box>
		</>
	)
}

export default User
