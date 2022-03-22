import { Flex } from '@chakra-ui/react'

import GoalList from '../GoalList'
import GoalSettingForm from '../GoalSettingForm'

import type { NextPage } from "next"

const GoalListContainer: NextPage = () => {
	return (
		<>
			<Flex justifyContent="space-around">
				<GoalList w="60%" />
				<GoalSettingForm w="30%" />
			</Flex>
		</>
	)
}

export default GoalListContainer
