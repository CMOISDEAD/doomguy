import { RxPlus } from "react-icons/rx";
import { Button } from "@nextui-org/react";
import useDoomStore from "../../store/store";
import notify from "../../utils/notify";
import { SearchInput } from "./SearchInput";

export const Toolbar = () => {
  const { appendRequestList } = useDoomStore((state) => state);
  const handleAdd = () => {
    appendRequestList({
      url: "",
      title: "New Request",
      method: "GET",
      headers: {},
      data: {},
      timeout: 0,
      response: null,
    });
    notify("New request added", { type: "success" });
  };

  return (
    <div className="flex gap-1 justify-between content-center items-center pb-2 text-xs">
      <SearchInput />
      <Button size="sm" variant="light" onPress={handleAdd}>
        <RxPlus />
      </Button>
    </div>
  );
};
