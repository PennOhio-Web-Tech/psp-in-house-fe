import { SearchIcon } from '@src/components/icons'
import { Input } from '@src/styles/components'
import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

type SearchBarProps = { searchQuery: string; setSearchQuery: Dispatch<SetStateAction<string>> }
export function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
	return (
		<SearchInputContainer>
			<Input
				placeholder="Search "
				type="text"
				name="searchQuery"
				onChange={e => setSearchQuery(e.target.value)}
				value={searchQuery}
			/>
			<SearchIcon />
		</SearchInputContainer>
	)
}

const SearchInputContainer = styled.div`
	position: relative;
	svg {
		position: absolute;
		left: 1rem;
		top: 50%;
		transform: translateY(-50%);
	}

	input {
		padding-left: 3rem;
		min-width: 10rem;
	}
`
