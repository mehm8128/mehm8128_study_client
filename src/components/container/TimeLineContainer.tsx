import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react'

import RecordForm from '../RecordForm'
import TimeLine from '../TimeLine'

import type { NextPage } from "next"
const TimeLineContainer: NextPage = () => {
	return (
		<>
			<Flex justifyContent="space-around">
				<TimeLine />
				<RecordForm />
			</Flex>
		</>
	)
}

export default TimeLineContainer
