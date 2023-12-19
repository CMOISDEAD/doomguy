import { Button, Card, CardBody } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useRef } from "react";
import useDoomStore from "../../store/store";
import { errorMap, parseRequest, responseMap } from "../../utils/utils";
import { Method } from "./Method";
import { Toolbar } from "./Toolbar";

export const Fetch = () => {
  const { activeRequest, updateActiveRequest } = useDoomStore((state) => ({
    activeRequest: state.activeRequest!,
    updateActiveRequest: state.updateActiveRequest,
  }));
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = activeRequest.url;
  }, [activeRequest]);

  const handleFetch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!activeRequest) return;
    // @ts-expect-error: Should be fine
    const method = e.currentTarget.method.value;
    const url = e.currentTarget.url.value;
    try {
      const data = await axios({
        url,
        method,
        timeout: 5000,
      });
      const response = responseMap(data);
      const newReq = parseRequest(activeRequest, url, method, response);
      updateActiveRequest(newReq);
    } catch (error) {
      console.error(error);
      const response = errorMap(error);
      const newReq = parseRequest(activeRequest, url, method, response);
      updateActiveRequest(newReq);
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
