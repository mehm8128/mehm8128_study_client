import { Box, Flex, Heading } from '@chakra-ui/react'

import RecordForm from '../record/RecordForm'
import TimeLine from '../record/TimeLine'

import type { NextPage } from "next"

const TimeLineContainer: NextPage = () => {
	return (
		<>
			<Flex justifyContent="space-around">
				<TimeLine w="60%" />
				<Box w="30%" borderWidth={2} p={8} h={580}>
					<Heading>勉強の記録</Heading>
					<RecordForm type="post" />
				</Box>
			</Flex>
		</>
	)
}

export default TimeLineContainer
