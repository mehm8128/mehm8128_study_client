import { ListItem, UnorderedList } from "@chakra-ui/react"
import axios from "axios"

import type { NextPage } from "next"
import { useState, useEffect } from "react"
import type { MemorizeType } from "../../types/memorize"
import LinkComponent from "src/components/common/LinkComponent"

const MemorizePortal: NextPage = () => {
	const [memorizes, setMemorizes] = useState<MemorizeType[]>()
	useEffect(() => {
		axios
			.get(process.env.NEXT_PUBLIC_URL + "/api/memorizes")
			.then((res) => {
				setMemorizes(res.data)
			})
			.catch((err) => alert(err))
	}, [])

	return (
		<>
			<UnorderedList p="12">
				{memorizes &&
					memorizes.map((memorize) => (
						<ListItem key={memorize.id} mb="4">
							<LinkComponent href={`/memorize/${memorize.id}`}>
								{memorize.name}の暗記へ
							</LinkComponent>
						</ListItem>
					))}
			</UnorderedList>
		</>
	)
}

export default MemorizePortal
