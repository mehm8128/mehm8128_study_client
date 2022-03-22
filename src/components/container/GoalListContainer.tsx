import { Flex } from '@chakra-ui/react'

import GoalList from '../GoalList'
import GoalSettingForm from '../GoalSettingForm'

import type { NextPage } from "next"

const GoalListContainer: NextPage = () => {
	return (
		<>
			<Flex justifyContent="space-around">
				<GoalList />
				<GoalSettingForm />
			</Flex>
		</>
	)
}

export default GoalListContainer
