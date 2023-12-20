import { Button, Card, CardBody } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

import useDoomStore from "../../store/store";
import { requestError } from "../../utils/requestError";
import { errorMap, parseRequest, responseMap } from "../../utils/utils";
import { Toolbar } from "./Toolbar";
import { URLInput } from "./URLInput";

export const Fetch = () => {
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      const data = await axios({
        url,
        method,
        timeout: 5000,
        data: activeRequest.body || {},
      });
      const response = responseMap(data);
      const newReq = parseRequest(activeRequest, url, method, response);
      updateActiveRequest(newReq);
    } catch (error) {
      console.error(error);
      if (requestError(error)) {
        const response = errorMap(error);
        const newReq = parseRequest(activeRequest, url, method, response);
        updateActiveRequest(newReq);
      }
    } finally {
      setLoading(false);
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
          <URLInput inputRef={inputRef} />
          <Button
            type="submit"
            color="success"
            variant="flat"
            isLoading={loading}
          >
            Make Request
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};
