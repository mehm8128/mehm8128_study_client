import NextLink from 'next/link'

import { Link } from '@chakra-ui/react'

import type { NextPage } from "next"

type Props = {
	children: React.ReactNode
	href: string
}

const LinkComponent: NextPage<Props> = (props) => {
	return (
		<NextLink href={props.href} passHref>
			<Link>
				<a>{props.children}</a>
			</Link>
		</NextLink>
	)
}

export default LinkComponent
