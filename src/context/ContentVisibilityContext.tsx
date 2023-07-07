import { createContext, Dispatch, SetStateAction } from 'react'

interface ContentVisibilityContextType {
	isContentVisibility: boolean
	setIsContentVisibility: Dispatch<SetStateAction<boolean>>
}

export const ContentVisibilityContext =
	createContext<ContentVisibilityContextType | null>(null)

