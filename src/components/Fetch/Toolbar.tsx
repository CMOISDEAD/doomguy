import { useEffect, useRef } from "react";
import { Button, ButtonGroup } from "@nextui-org/react";
import useDoomStore from "../../store/store";

export const Toolbar = () => {
  const { activeRequest, requestList, updateActiveRequest } = useDoomStore((state) => state);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current || !activeRequest) return;
    inputRef.current.value = activeRequest.title;
  }, [activeRequest]);

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    if (!activeRequest) return;
    const newReq = {
      ...activeRequest,
      title: value,
    };
    const idx = requestList.findIndex((req) => req.id === activeRequest.id);
    requestList[idx] = newReq;
    updateActiveRequest(newReq);
  }

  return (
    <div className="flex gap-2 justify-between items-center px-3 my-2 w-full h-10 text-sm border-divider">
      <input
        ref={inputRef}
        type="text"
        className="py-2 px-4 w-1/5 h-9 rounded-lg focus:outline-none bg-content2 text-foreground hover:bg-content3 focus:bg-content3"
        onChange={handleUpdate}
      />
      <ButtonGroup size="sm" variant="ghost">
        <Button>Headers</Button>
        <Button>Body</Button>
      </ButtonGroup>
    </div>
  );
};
