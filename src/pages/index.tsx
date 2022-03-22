import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

import GoalListContainer from '../components/container/GoalListContainer'
import TimeLineContainer from '../components/container/TimeLineContainer'

import type { NextPage } from "next"

const Index: NextPage = () => {
	return (
		<>
			<Tabs mt="8">
				<TabList justifyContent="center">
					<Tab w="40%" fontSize={20}>
						タイムライン
					</Tab>
					<Tab w="40%" fontSize={20}>
						目標
					</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<TimeLineContainer />
					</TabPanel>
					<TabPanel>
						<GoalListContainer />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</>
	)
}

export default Index
