import { Box, Flex, Heading } from "@chakra-ui/react"

import type { NextPage } from "next"
import RecordForm from "../record/RecordForm"
import TimeLine from "../record/TimeLine"

const TimeLineContainer: NextPage = () => {
	return (
		<>
			<Flex
				justifyContent="space-around"
				direction={{ base: "column-reverse", md: "row" }}
			>
				<TimeLine w={{ base: "100%", md: "60%" }} />
				<Box w={{ base: "100%", md: "30%" }} borderWidth={2} p={8} h={580}>
					<Heading>勉強の記録</Heading>
					<RecordForm />
				</Box>
			</Flex>
		</>
	)
}

export default TimeLineContainer
