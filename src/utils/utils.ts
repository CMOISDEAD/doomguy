import { AxiosResponse } from "axios";

export const responseMap = (request: AxiosResponse) => ({
  data: JSON.stringify(request.data, null, 2),
  status: request.status,
  headers: request.headers,
  timeout: request.config.timeout!,
  method: request.config.method!,
});

export const errorMap = (error: any) => ({
  data: JSON.stringify(error.message, null, 2),
  status: error.response.status,
  headers: error.response.headers,
  timeout: error.response.config.timeout!,
  method: error.response.config.method!,
});

export const parseRequest = (
  activeRequest: RequestInterface,
  url: string,
  method: string,
  response: ResponseInterface,
) => ({
  ...activeRequest,
  url,
  method,
  response,
});
