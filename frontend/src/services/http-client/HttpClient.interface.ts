export interface HttpClientResponseStatusInterface {
	response: {
		messageCode: string;
		status: string;
		resultSize: number;
		pageNumber: number;
		errorCode: string;
		errorMessage: string;
		hasMore: boolean;
	};
}
