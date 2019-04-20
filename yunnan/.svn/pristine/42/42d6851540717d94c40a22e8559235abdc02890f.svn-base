import fetch from '../../utils/fetch'
import CDNTypeEnum from '../js/CDNTypeEnum'

export function getUploadToken(isAuth) {
	let url = '/cdn/token';

	let params = ({
		isAuth: isAuth
	});
	return fetch({
		url: url,
		method: 'post',
		params: params,
		headers: {
			'C-App-Id': 'GSP_APP_001',
			'C-Dynamic-Password-Foruser': window.sessionStorage.getItem("usertoken") != 'null' ? window.sessionStorage.getItem("usertoken") : '1234567890',
		}
	}).then(function(response) {
		return response
	}, function(error) {
		return 'error'
	})
}

/**
 * 适配CDN路径
 * @param cdnPath CDN路径
 * @param vendorType CDN类型
 */
export function cdnPathAdapter(cdnPath, vendorType) {
	console.log(vendorType,cdnPath)
	if(vendorType === CDNTypeEnum.CCBCDN) {
		let downloadURL = "image-service/downloadImage?bucketId=dangqun&ObjNm=";
		return downloadURL.concat(cdnPath);
	} else {
		return cdnPath;
	}
}

/**
 * 重新请求上传，不使用上传组件自带的上传（适配建行CDN）
 * @param file 文件
 * @param cdnParams cdn参数
 */
export function adapterCCBUpload(file, cdnParams) {
	let formData = new FormData();
	formData.append('file', file);

	var headers = {}
	if (window.sessionStorage.getItem("CHNL_ID") === 'CC03C004') {
		headers = { 'C-App-Id': 'ccbynt#ynzwAppId', 'C-Dynamic-Password-Foruser':window.sessionStorage.getItem("usertoken") != 'null' ? window.sessionStorage.getItem("usertoken") : '1234567890' }
	} else {
		headers = { 'C-App-Id': 'GSP_APP_001', 'C-Dynamic-Password-Foruser':window.sessionStorage.getItem("usertoken") != 'null' ? window.sessionStorage.getItem("usertoken") : '1234567890' }
	}
	return fetch({
		method: 'post',
		url: cdnParams["uploadURL"] + '&ObjNm=' + cdnParams["ObjNm"],
		data: formData,
		headers: headers
	})
}