import { Box, BoxProps, ListItem, UnorderedList } from '@chakra-ui/react'

import { records } from '../../mock/records'
import Record from './Record'

import type { NextPage } from "next"

const TimeLine: NextPage<BoxProps> = (props) => {
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
