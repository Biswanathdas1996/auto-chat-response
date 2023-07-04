import { mockFileMapping } from "../apiConfig/configureMockData";

export const mockResponse = (url, method) => {
  console.log("_____RESPONSE_FROM_MOCK_____");
  const file = mockFileMapping?.find(
    (data) => data?.url === url && data?.method === method
  );
  if (file?.mockFile) {
    return file?.mockFile;
  } else {
    console.log("____Mock foine not found___");
    return null;
  }
};
