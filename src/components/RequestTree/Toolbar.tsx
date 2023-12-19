import { RxPlus, RxQuestionMarkCircled } from "react-icons/rx";
import { Button } from "@nextui-org/react";
import useDoomStore from "../../store/store";
import notify from "../../utils/notify";

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
