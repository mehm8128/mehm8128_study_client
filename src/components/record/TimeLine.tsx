import { Box, ListItem, UnorderedList } from "@chakra-ui/react"
import type { BoxProps } from "@chakra-ui/react"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useContext, useEffect } from "react"

import { UserContext } from "../UserProvider"
import Record from "./Record"

type Props = {
	userid?: string
} & BoxProps

const TimeLine: NextPage<Props> = (props) => {
	const router = useRouter()
	const { records, getRecords } = useContext(UserContext)
	useEffect(() => {
		getRecords(props.userid ? props.userid : "")
	}, [router.asPath])
	return (
		<>
			<Box {...props}>
				<UnorderedList listStyleType="none">
					{records.map((record) => (
						<ListItem key={record.id} mb={4}>
							<Record record={record} />
						</ListItem>
					))}
				</UnorderedList>
			</Box>
		</>
	)
}

export default TimeLine
