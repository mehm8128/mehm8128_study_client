import type { NextPage } from "next"
import { useRouter } from 'next/router'

const User: NextPage = () => {
	const router = useRouter()
	const { userId } = router.query
	return (
		<>
			<h1>User</h1>
			id:{userId}
		</>
	)
}

export default User
