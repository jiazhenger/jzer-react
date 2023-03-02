import CryptoJS from 'crypto-js'

const Index = {
	encode: (aseKey, data) => {
		return CryptoJS.AES.encrypt(
			data, 
			CryptoJS.enc.Utf8.parse(aseKey),
			{
				mode: CryptoJS.mode.ECB,
				padding: CryptoJS.pad.Pkcs7
			},
		).toString()
	},
	decode: (aseKey, data) => {
		return CryptoJS.AES.decrypt(
			data, 
			CryptoJS.enc.Utf8.parse(aseKey),
			{
				mode: CryptoJS.mode.ECB,
				padding: CryptoJS.pad.Pkcs7
			}
		).toString(CryptoJS.enc.Utf8)
	}
}

export default Index