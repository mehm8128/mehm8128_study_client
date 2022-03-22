import { useRouter } from 'next/router'
import GoalList from 'src/components/GoalList'
import TimeLine from 'src/components/TimeLine'
import UserIntro from 'src/components/UserIntro'

import { Box, Flex, Heading } from '@chakra-ui/react'

import type { NextPage } from "next"

const User: NextPage = () => {
	const router = useRouter()
	const userId = router.query.toString()
	return (
		<>
			<UserIntro userId={userId} />
			<Flex>
				<Box width="50%">
					<Heading textAlign="center">勉強の記録</Heading>
					<TimeLine />
				</Box>
				<Box width="50%">
					<Heading textAlign="center">目標</Heading>
					<GoalList />
				</Box>
			</Flex>
		</>
	)
}

export default User
