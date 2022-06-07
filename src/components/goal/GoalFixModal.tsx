import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
} from "@chakra-ui/react"

import { GoalType } from "../../types/goal"
import GoalFixForm from "./GoalFixForm"

type Props = {
	goal: GoalType
	isOpen: boolean
	onClose: () => void
}
const GoalFixModal: React.FC<Props> = (props) => {
	return (
		<>
			<Modal isOpen={props.isOpen} size="xl" onClose={props.onClose}>
				<ModalOverlay />
				<ModalContent h="60%">
					<ModalHeader>目標の編集</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<GoalFixForm
							defaultComment={props.goal.comment}
							defaultGoalDate={props.goal.goalDate}
							defaultTitle={props.goal.title}
							id={props.goal.id}
							isCompleted={props.goal.isCompleted}
							onClose={props.onClose}
						/>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}

export default GoalFixModal
