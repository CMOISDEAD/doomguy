import { Button, ButtonGroup, useDisclosure } from "@nextui-org/react";
import { useEffect, useRef } from "react";
import { RxCode } from "react-icons/rx";

import useDoomStore from "../../store/store";
import { Details } from "./Details/Details";

export const Toolbar = () => {
  const { activeRequest, updateActiveRequest } = useDoomStore((state) => state);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
    updateActiveRequest(newReq);
  };

  return (
    <div className="flex gap-2 justify-between items-center w-full h-10 text-sm border-divider">
      <input
        ref={inputRef}
        type="text"
        onChange={handleUpdate}
        className="py-2 px-4 w-full h-9 rounded-lg focus:outline-none bg-content2 text-foreground hover:bg-content3 focus:bg-content3"
      />
      <ButtonGroup size="sm" variant="light">
        <Button onPress={onOpen}>
          <RxCode />
        </Button>
      </ButtonGroup>
      <Details isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
};
