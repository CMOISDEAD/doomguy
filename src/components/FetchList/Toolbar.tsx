import { RxPlus, RxQuestionMarkCircled } from "react-icons/rx";
import { Button } from "@nextui-org/react";
import useDoomStore from "../../store/store";

export const Toolbar = () => {
  const { requestList, appendRequestList } = useDoomStore((state) => state);
  const handleAdd = () => {
    appendRequestList({
      id: requestList.length + 1,
      title: "New Request",
      method: "GET",
      url: "",
      headers: {},
      data: {},
      timeout: 0,
      response: null,
    });
  };

  return (
    <div className="flex justify-between content-center items-center pb-2 text-xs">
      <Button
        className="flex gap-2 content-center items-center"
        size="sm"
        onPress={handleAdd}
      >
        <RxPlus /> Add new
      </Button>
      <Button size="sm">
        <RxQuestionMarkCircled />
      </Button>
    </div>
  );
};
