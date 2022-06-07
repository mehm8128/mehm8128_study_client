import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useContext, useEffect } from "react"

import GoalListContainer from "../components/container/GoalListContainer"
import TimeLineContainer from "../components/container/TimeLineContainer"
import { UserContext } from "src/components/UserProvider"

const Index: NextPage = () => {
	const { me, getUsers } = useContext(UserContext)
	const router = useRouter()
	if (router.isReady) {
		if (!me.auth) router.replace("/login")
	}
	useEffect(() => getUsers(), [])
	return (
		<>
			<Tabs mt="8">
				<TabList justifyContent="center">
					<Tab fontSize={20} w="40%">
						タイムライン
					</Tab>
					<Tab fontSize={20} w="40%">
						みんなの目標
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
