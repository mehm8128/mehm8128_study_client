import {
    Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay
} from '@chakra-ui/react'

import { GoalType } from '../../types/Goal'
import GoalSettingForm from './GoalSettingForm'

import type { NextPage } from "next"

type Props = {
	goal: GoalType
	isOpen: boolean
	onClose: () => void
}
const GoalFixModal: NextPage<Props> = (props) => {
	return (
		<>
			<Modal size="xl" isOpen={props.isOpen} onClose={props.onClose}>
				<ModalOverlay />
				<ModalContent h="60%">
					<ModalHeader>目標の編集</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<GoalSettingForm
							type="put"
							isCompleted={props.goal.isCompleted}
							defaultTitle={props.goal.title}
							defaultGoalDate={props.goal.goalDate}
							defaultComment={props.goal.comment}
						/>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="blue" mr={3}>
							決定
						</Button>
						<Button onClick={props.onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}

export default GoalFixModal
