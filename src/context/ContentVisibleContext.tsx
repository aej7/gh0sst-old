import { createContext, Dispatch, SetStateAction } from 'react'

interface ContentVisibleContextType {
	isContentVisible: boolean
	setIsContentVisible: Dispatch<SetStateAction<boolean>>
}

export const ContentVisibleContext = createContext<ContentVisibleContextType | null>(
	null
)

