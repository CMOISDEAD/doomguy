import { Button, Card, CardBody } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useRef } from "react";
import useDoomStore from "../../store/store";
import { errorMap, parseRequest, responseMap } from "../../utils/utils";
import { Toolbar } from "./Toolbar";
import { URLInput } from "./URLInput";
import { requestError } from "../../utils/requestError";

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
      // TODO: this variable should have another name
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
          <Button color="success" type="submit" variant="flat">
            Make Request
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};
