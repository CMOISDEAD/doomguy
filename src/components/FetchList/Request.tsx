import { Button, ButtonGroup, Tooltip } from "@nextui-org/react";
import { RxTrash } from "react-icons/rx";
import useDoomStore from "../../store/store";
import notify from "../../utils/notify";

interface Props {
  request: any;
}

export const Request = ({ request }: Props) => {
  const { id, method, title } = request;
  const { requestList, activeRequest, updateActiveRequest, removeRequestList } =
    useDoomStore();

  const handleSelect = () => {
    const request = requestList.find((request) => request.id === id);
    if (!request) return;
    updateActiveRequest(request);
  };

  const handleDelete = () => {
    removeRequestList(id);
    notify("Request deleted", { type: "error" });
  };

  return (
    <ButtonGroup>
      <Button
        fullWidth
        variant="ghost"
        size="sm"
        onPress={handleSelect}
        color={activeRequest?.id === id ? "success" : "default"}
      >
        <p className="text-clip truncate">
          <span className="text-success">{method}</span>{" "}
          <span className="text-foreground">{title}</span>
        </p>
      </Button>
      <Tooltip content="Delete request" placement="bottom">
        <Button size="sm" variant="ghost" onPress={handleDelete}>
          <RxTrash />
        </Button>
      </Tooltip>
    </ButtonGroup>
  );
};
