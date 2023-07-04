import axios from "axios";
import { BASE_URL, USE_MOCK } from "../config";
import { mockResponse } from "../utils/mockMapper";

const api = axios.create({
  baseURL: BASE_URL,
});

export const get = async (url, params) => {
  if (USE_MOCK) {
    const mockFile = mockResponse(url, "GET");
    const mockData = await import(`../apiConfig/Mock/${mockFile}`);
    return mockData?.default;
  } else {
    try {
      const response = await api.get(url, { params });
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

export const post = async (url, data) => {
  if (USE_MOCK) {
    const mockFile = mockResponse(url, "POST");
    const mockData = await import(`../apiConfig/Mock/${mockFile}`);
    return mockData?.default;
  } else {
    try {
      const response = await api.post(url, data);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

export const put = async (url, data) => {
  if (USE_MOCK) {
    const mockFile = mockResponse(url, "PUT");
    const mockData = await import(`../apiConfig/Mock/${mockFile}`);
    return mockData?.default;
  } else {
    try {
      const response = await api.put(url, data);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

export const del = async (url) => {
  if (USE_MOCK) {
    const mockFile = mockResponse(url, "DELET");
    const mockData = await import(`../apiConfig/Mock/${mockFile}`);
    return mockData?.default;
  } else {
    try {
      const response = await api.delete(url);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
};
