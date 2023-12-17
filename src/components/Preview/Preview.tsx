import { Card, CardBody } from "@nextui-org/react";
import useDoomStore from "../../store/store";
import { Statusbar } from "./Statusbar";

export const Preview = () => {
  const { activeRequest } = useDoomStore((state) => state);

  return (
    <Card radius="md" className="w-full h-5/6 border border-divider">
      <CardBody>
        <div className="flex flex-col gap-2 h-full max-h-[29rem]">
          <Statusbar />
          <pre className="overflow-auto p-3 h-full rounded-lg border border-divider bg-background">
            {activeRequest?.response?.data || "No response yet."}
          </pre>
        </div>
      </CardBody>
    </Card>
  );
};
