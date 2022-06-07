import { Box, Flex, Heading } from "@chakra-ui/react"

import RecordForm from "../record/RecordForm"
import TimeLine from "../record/TimeLine"

const TimeLineContainer: React.FC = () => {
	return (
		<>
			<Flex
				direction={{ base: "column-reverse", md: "row" }}
				justifyContent="space-around"
			>
				<TimeLine w={{ base: "100%", md: "60%" }} />
				<Box borderWidth={2} h={580} p={8} w={{ base: "100%", md: "30%" }}>
					<Heading>勉強の記録</Heading>
					<RecordForm />
				</Box>
			</Flex>
		</>
	)
}

export default TimeLineContainer
