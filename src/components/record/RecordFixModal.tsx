import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react"

import type { NextPage } from "next"
import { RecordType } from "../../types/record"
import RecordFixForm from "./RecordFixForm"

type Props = {
	record: RecordType
	isOpen: boolean
	onClose: () => void
}
const RecordFixModal: NextPage<Props> = (props) => {
	return (
		<>
			<Modal size="xl" isOpen={props.isOpen} onClose={props.onClose}>
				<ModalOverlay />
				<ModalContent h="70%">
					<ModalHeader>目標の編集</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<RecordFixForm
							defaultTitle={props.record.title}
							defaultPage={props.record.page.toString()}
							defaultTime={props.record.time.toString()}
							defaultComment={props.record.comment}
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
