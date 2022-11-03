import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		fonts: {
			header: string
			body: string
		}
		colors: {
			neutral: {
				100: string
				90: string
				80: string
				70: string
				60: string
				50: string
				40: string
				30: string
				20: string
				10: string
			}
			pageUi: {
				pageBg: string
				sectionDivider: string
				componentHighlight: string
				newSubmissionBg: string
			}
			navigation: {
				bg: {
					primary: string
					secondary: string
				}
			}
			text: {
				primary: string
				secondary: string
				offset: string
			}
			button: {
				fill: string
				hoverFill: string
				disabledFill: string
			}
			status: {
				error: string
				success: string
				draft: string
			}
		}
		shadows: {
			small: string
			large: string
		}
	}
}

export const theme: DefaultTheme = {
	fonts: {
		header: '"Poppins", sans-serif',
		body: '"Source Sans Pro", sans-serif',
	},
	colors: {
		neutral: {
			100: '#0A0A0A',
			90: '#424242',
			80: '#616161',
			70: '#757575',
			60: '#9E9E9E',
			50: '#C2C2C2',
			40: '#E0E0E0',
			30: '#EDEDED',
			20: '#F5F5F5',
			10: '#FFFFFF',
		},
		pageUi: {
			pageBg: '#F5F4FA',
			sectionDivider: '#CECECE',
			componentHighlight: '#648DE5',
			newSubmissionBg: '#CA4053',
		},
		navigation: {
			bg: {
				primary: '#252525',
				secondary: '#F5BA00',
			},
		},
		text: {
			primary: '#252525',
			secondary: '#757575',
			offset: '#FFFFFF',
		},
		button: {
			fill: '#648DE5',
			hoverFill: '#2860B2',
			disabledFill: '#757575',
		},
		status: {
			error: '#E64141',
			success: '#4eac56',
			draft: '#8F838D',
		},
	},
	shadows: {
		small: '0px 4px 16px rgba(106, 106, 106, 0.1)',
		large: '0px 16px 40px rgba(106, 106, 106, 0.1)',
	},
}
