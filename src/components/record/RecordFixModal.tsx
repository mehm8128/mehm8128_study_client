import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react"

import { RecordType } from "../../types/record"
import RecordFixForm from "./RecordFixForm"

type Props = {
	record: RecordType
	isOpen: boolean
	onClose: () => void
}
const RecordFixModal: React.FC<Props> = (props) => {
	return (
		<>
			<Modal isOpen={props.isOpen} size="xl" onClose={props.onClose}>
				<ModalOverlay />
				<ModalContent h="70%">
					<ModalHeader>目標の編集</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<RecordFixForm
							defaultComment={props.record.comment}
							defaultPage={props.record.page.toString()}
							defaultTime={props.record.time.toString()}
							defaultTitle={props.record.title}
							id={props.record.id}
							onClose={props.onClose}
						/>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}

export default RecordFixModal
