import { Flex, Box, Heading } from "@chakra-ui/react"

import GoalList from "../goal/GoalList"
import GoalSettingForm from "../goal/GoalSettingForm"

const GoalListContainer: React.FC = () => {
	return (
		<>
			<Flex
				direction={{ base: "column-reverse", md: "row" }}
				justifyContent="space-around"
			>
				<GoalList w={{ base: "100%", md: "60%" }} />
				<Box borderWidth={2} h={500} p={8} w={{ base: "100%", md: "30%" }}>
					<Heading>目標の設定</Heading>
					<GoalSettingForm />
				</Box>
			</Flex>
		</>
	)
}

export default GoalListContainer
