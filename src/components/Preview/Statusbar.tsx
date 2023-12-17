import { Button, ButtonGroup } from "@nextui-org/react";
import useDoomStore from "../../store/store";

export const Statusbar = () => {
  const { activeRequest } = useDoomStore((state) => state);

  const response = activeRequest?.response || {
    status: 100,
    timeout: 0,
    method: "N/A",
  };

  const statusColor = (status: number) =>
    status === 200 ? "success" : status === 404 ? "danger" : "warning";

  return (
    <div className="flex gap-2 justify-between items-center px-3 w-full h-10 text-sm border-divider">
      <div className="flex gap-2">
        <div className="flex gap-2 pr-2 border-r border-divider">
          Response:
          <div className="flex gap-2 content-center items-center">
            <div
              className={`w-2 h-2 bg-${statusColor(
                response.status
              )} rounded-full`}
            />
            <span className={`text-${statusColor(response.status)}`}>
              {response.status}
            </span>
          </div>
        </div>
        <div className="pr-2 border-r border-divider">
          Time: <span className="text-primary">{response.timeout}ms</span>
        </div>
        <div className="pr-2 border-r border-divider">
          Size: <span className="text-warning">1.2KB</span>
        </div>
        <div>
          method:{" "}
          <span className="uppercase text-primary">{response.method}</span>
        </div>
      </div>
      <ButtonGroup size="sm" variant="light">
        <Button>JSON</Button>
        <Button>RAW</Button>
      </ButtonGroup>
    </div>
  );
};
