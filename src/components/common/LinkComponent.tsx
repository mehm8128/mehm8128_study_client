import { Link } from "@chakra-ui/react"

import NextLink from "next/link"

type Props = {
	children: React.ReactNode
	href: string
}

const LinkComponent: React.FC<Props> = (props) => {
	return (
		<NextLink href={props.href} passHref>
			<Link>{props.children}</Link>
		</NextLink>
	)
}

export default LinkComponent
