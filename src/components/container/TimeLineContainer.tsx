import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react'

import RecordForm from '../RecordForm'
import TimeLine from '../TimeLine'

import type { NextPage } from "next"

const TimeLineContainer: NextPage = () => {
	return (
		<>
			<Flex justifyContent="space-around">
				<TimeLine w="60%" />
				<RecordForm w="30%" />
			</Flex>
		</>
	)
}

export default TimeLineContainer
