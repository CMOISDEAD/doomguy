interface ResponseInterface {
  data: any;
  status: number;
  headers: any;
  timeout: number;
  method: string;
}

interface RequestInterface {
  id: number;
  title: string;
  url: string;
  method: string;
  headers: any;
  data: any;
  timeout: number;
  response: ResponseInterface | null;
}
