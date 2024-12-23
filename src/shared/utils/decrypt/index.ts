import CryptoJS from 'crypto-js'

export const decryptData = (encryptedData: string): any => {
	try {
		const bytes = CryptoJS.AES.decrypt(encryptedData, import.meta.env.VITE_USER_SECRET)
		const decrypted = bytes.toString(CryptoJS.enc.Utf8)
		return JSON.parse(decrypted)
	} catch (error) {
		console.log('Failed to decrypt data:', error)
		return null
	}
}