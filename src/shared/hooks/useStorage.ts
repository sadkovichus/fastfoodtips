import { useState } from "react"
import CryptoJS from "crypto-js"

type StorageType = "localStorage" | "sessionStorage"

const useStorage = <T>(key: string, storageType: StorageType = "localStorage"): { data: T; setData: (data: T) => void; clearStorage: () => void } => {
	const storage = storageType === "localStorage" ? localStorage : sessionStorage
	const secretKey = import.meta.env.VITE_USER_SECRET // Используйте свой ключ для шифрования

	// Функция для расшифровки данных
	const decryptData = (encryptedData: string | null): any => {
		if (!encryptedData) return null
		try {
			const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey)
			const decrypted = bytes.toString(CryptoJS.enc.Utf8)
			return JSON.parse(decrypted)
		} catch {
			return null
		}
	}

	// Функция для шифрования данных
	const encryptData = (data: any): string => {
		const stringifiedData = JSON.stringify(data)
		return CryptoJS.AES.encrypt(stringifiedData, secretKey).toString()
	}

	// Читаем данные из хранилища при инициализации
	const [data, setData] = useState(() => {
		const storedData = storage.getItem(key)
		return decryptData(storedData)
	})

	// Обновляем данные в хранилище при изменении state
	const updateStorage = (newData: any) => {
		setData(newData)
		const encryptedData = encryptData(newData)
		storage.setItem(key, encryptedData)
	}

	// Удаление данных из хранилища
	const clearStorage = () => {
		setData(null)
		storage.removeItem(key)
	}

	return { data, setData: updateStorage, clearStorage }
}

export default useStorage