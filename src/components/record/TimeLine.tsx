import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

import { Box, BoxProps, ListItem, UnorderedList } from '@chakra-ui/react'

import { UserContext } from '../UserProvider'
//import { records } from '../../mock/records'
import Record from './Record'

import type { NextPage } from "next"
type Props = {
	userId?: string
} & BoxProps

const TimeLine: NextPage<Props> = (props) => {
	const router = useRouter()
	const { records, getRecords } = useContext(UserContext)
	useEffect(() => {
		getRecords(props.userId ? props.userId : "")
	}, [router.pathname])
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
