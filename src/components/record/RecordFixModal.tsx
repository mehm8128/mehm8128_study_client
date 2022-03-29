import {
    Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay
} from '@chakra-ui/react'

import { RecordType } from '../../types/Record'
import RecordForm from './RecordForm'

import type { NextPage } from "next"

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
						<RecordForm
							type="put"
							defaultTitle={props.record.title}
							defaultPage={props.record.page.toString()}
							defaultTime={props.record.time.toString()}
							defaultComment={props.record.comment}
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

export default RecordFixModal
