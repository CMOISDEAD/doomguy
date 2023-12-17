import { Card, CardBody, Button } from "@nextui-org/react";
import axios from "axios";
import useDoomStore from "../../store/store";
import { useEffect, useRef } from "react";
import { Toolbar } from "./Toolbar";
import { Method } from "./Method";

export const UrlFetch = () => {
  const { activeRequest, requestList } = useDoomStore((state) => ({ activeRequest: state.activeRequest!, requestList: state.requestList }));
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.value = activeRequest.url;
  }, [activeRequest]);

  // FIX: This is a mess, need to clean up :)
  const handleFetch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!activeRequest) return;
    //@ts-ignore
    const method = e.currentTarget.method.value;
    const url = e.currentTarget.url.value;
    try {
      const data = await axios({
        url,
        method,
        timeout: 5000,
      });
      const response = {
        data: JSON.stringify(data.data, null, 2),
        status: data.status,
        headers: data.headers,
        timeout: data.config.timeout!,
        method: data.config.method!,
      };
      const newReq = {
        ...activeRequest,
        url,
        method,
        response,
      };
      useDoomStore.setState({
        activeRequest: newReq,
      });
    } catch (error: any) {
      console.error(error);
      const response = {
        data: JSON.stringify(error.message, null, 2),
        status: error.response.status,
        headers: error.response.headers,
        timeout: error.response.config.timeout!,
        method: error.response.config.method!,
      };
      const newReq = {
        ...activeRequest,
        url,
        method,
        response,
      };
      useDoomStore.setState({
        activeRequest: newReq,
      });
    }
  };


  return (
    <Card radius="md" className="flex-grow w-full border border-divider">
      <CardBody>
        <form
          onSubmit={handleFetch}
          className="flex flex-col gap-2 justify-between h-full"
        >
          <Toolbar />
          <div className="flex gap-2">
            <Method />
            <input
              required
              ref={inputRef}
              spellCheck={false}
              type="text"
              name="url"
              label="URL"
              className="flex-grow p-4 w-full rounded-lg focus:outline-none bg-content2 text-foreground hover:bg-content3 focus:bg-content3"
              placeholder="https://jsonplaceholder.typicode.com/todos/1"
            />
          </div>
          <Button color="success" type="submit">
            Make Request
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};
