import { ReactNode } from 'react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@src/components/common/DropdownMenu/DropdownMenu'

import { signOut } from 'next-auth/react'

type ProfileDropDownProps = {
	children: ReactNode
}

export function ProfileDropdown({ children }: ProfileDropDownProps) {
	function handleSignOut() {
		signOut({ callbackUrl: `${window.location.origin}/auth/signin` })
	}
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent
				sideOffset={5}
				collisionTolerance={24}
				style={{ minWidth: '120px' }}
			>
				<DropdownMenuItem>Account Settings</DropdownMenuItem>
				<DropdownMenuItem onClick={handleSignOut}>Logout</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
