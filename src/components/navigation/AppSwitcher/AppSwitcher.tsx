import {
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	DropdownMenu,
} from '@src/components/common/DropdownMenu'

import { GroupTitle, StyledMenuGridIcon } from './AppSwitcher.styles'

export function AppSwitcher() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<StyledMenuGridIcon data-testid="app-navigation-app-switcher" />
			</DropdownMenuTrigger>
			<DropdownMenuContent sideOffset={5}>
				<GroupTitle>Switch to</GroupTitle>
				<DropdownMenuItem>Application 1</DropdownMenuItem>
				<DropdownMenuItem>Application 2</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
