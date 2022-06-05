import { ListItem, UnorderedList } from "@chakra-ui/react"

import type { NextPage } from "next"
import LinkComponent from "src/components/common/LinkComponent"

const MemorizePortal: NextPage = () => {
	return (
		<>
			<UnorderedList p="12">
				<ListItem>
					<LinkComponent href="/memorize/kikutan-900">
						TOEIC キクタン990の暗記へ
					</LinkComponent>
				</ListItem>
			</UnorderedList>
		</>
	)
}

export default MemorizePortal
