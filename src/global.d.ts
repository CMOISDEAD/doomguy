// TODO: Add a better types for the request and response
interface RequestInterface {
  id?: string;
  title: string;
  url: string;
  method: string;
  headers: any;
  data: any;
  body?: any;
  timeout: number;
  response: ResponseInterface | null;
}

interface ResponseInterface {
  data: any;
  status: number;
  headers: any;
  timeout: number;
  method: string;
}
