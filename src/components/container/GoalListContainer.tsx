import { Box, Flex, Heading } from '@chakra-ui/react'

import GoalList from '../goal/GoalList'
import GoalSettingForm from '../goal/GoalSettingForm'

import type { NextPage } from "next"

const GoalListContainer: NextPage = () => {
	return (
		<>
			<Flex
				justifyContent="space-around"
				direction={{ base: "column-reverse", md: "row" }}
			>
				<GoalList w={{ base: "100%", md: "60%" }} />
				<Box w={{ base: "100%", md: "30%" }} borderWidth={2} p={8} h={500}>
					<Heading>目標の設定</Heading>
					<GoalSettingForm type="post" isCompleted={false} />
				</Box>
			</Flex>
		</>
	)
}

export default GoalListContainer
