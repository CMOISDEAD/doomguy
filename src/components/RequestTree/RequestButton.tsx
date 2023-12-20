import { Button, ButtonGroup, Tooltip } from "@nextui-org/react";
import { RxTrash } from "react-icons/rx";
import useDoomStore from "../../store/store";
import notify from "../../utils/notify";

interface Props {
  request: RequestInterface;
}

export const RequestButton = ({ request }: Props) => {
  const { requestList, activeRequest, updateActiveRequest, removeRequestList } =
    useDoomStore((state) => state);

  const handleSelect = () => {
    const matched = requestList.find((req) => req.id === request.id);
    if (!matched) return;
    updateActiveRequest(matched);
  };

  const handleDelete = () => {
    removeRequestList(request.id!);
    notify("Request deleted", { type: "error" });
  };

  return (
    <ButtonGroup>
      <Button
        fullWidth
        variant="ghost"
        size="sm"
        onPress={handleSelect}
        color={activeRequest?.id === request.id ? "success" : "default"}
        className="justify-start"
      >
        <p className="text-clip truncate">
          <span className="text-success">{request.method}</span>{" "}
          <span className="text-foreground">{request.title}</span>
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
