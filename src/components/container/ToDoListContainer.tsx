import { Flex } from '@chakra-ui/react'

import GoalSettingForm from '../GoalSettingForm'
import ToDoList from '../ToDoList'

import type { NextPage } from "next"

const ToDoListContainer: NextPage = () => {
	return (
		<>
			<Flex justifyContent="space-around">
				<ToDoList />
				<GoalSettingForm />
			</Flex>
		</>
	)
}

export default ToDoListContainer
