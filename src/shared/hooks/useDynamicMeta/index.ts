import { DynamicMetaContext, DynamicMetaContextType } from '@app/providers/dynamicMetaProvider'
import { useContext } from 'react'

export const useDynamicMeta = (): DynamicMetaContextType => {
	const context = useContext(DynamicMetaContext)
	if (!context) {
		throw new Error('useDynamicMeta must be used within a DynamicMetaProvider')
	}
	return context
}
