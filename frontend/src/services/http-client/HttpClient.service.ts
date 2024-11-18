import axios, { AxiosRequestConfig } from 'axios';

class HttpClientService {
	/**
	 * GET
	 * @param url
	 * @param config
	 */
	get = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
		try {
			const resp = await axios.get(url, config);
			return resp.data as T;
		} catch (error) {
			console.error(error);
			return null as T;
		}
	};

	/**
	 * POST
	 * @param url
	 * @param data
	 * @param config
	 */
	post = async <T, K>(url: string, data?: T, config?: AxiosRequestConfig): Promise<K> => {
		try {
			const resp = await axios.post(url, data, config);
			return resp.data as K;
		} catch (error) {
			console.error(error);
			return null as K;
		}
	};

	/**
	 * PUT
	 * @param url
	 * @param data
	 * @param config
	 */
	put = async <T, K>(url: string, data?: T, config?: AxiosRequestConfig): Promise<K> => {
		try {
			const resp = await axios.put(url, data, config);
			return resp.data as K;
		} catch (error) {
			console.error(error);
			return null as K;
		}
	};

	/**
	 * PATCH
	 * @param url
	 * @param data
	 * @param config
	 */
	patch = async <T, K>(url: string, data: T, config?: AxiosRequestConfig): Promise<K> => {
		try {
			const resp = await axios.patch(url, data, config);
			return resp.data as K;
		} catch (error) {
			console.error(error);
			return null as K;
		}
	};

	/**
	 * DELETE
	 * @param url
	 * @param config
	 */
	delete = async (url: string, config?: AxiosRequestConfig) => {
		try {
			const resp = await axios.delete(url, config);
			return resp.data;
		} catch (error) {
			console.error(error);
		}
	};
}
const instance = new HttpClientService();
export default instance;
