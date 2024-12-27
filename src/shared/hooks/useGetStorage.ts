import { decryptData } from '@shared/utils'
import { useEffect, useState } from 'react'

export function useGetStorage<T>(data: string): [T, boolean] {
	const [storage, setState] = useState<T>();
	const [isLoading, setIsLoading] = useState(true);

	const decryptDataAsync = async () => {
		setIsLoading(true);
		try {
			const decrData = await decryptData(data);
			setState(decrData);
			setIsLoading(false);
		} catch (err) {
			return null;
		}
	}

	useEffect(() => {
		decryptDataAsync();
	}, [])

	return [(storage as T), isLoading]
}