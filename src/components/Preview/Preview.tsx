import { Card, CardBody } from "@nextui-org/react";
import useDoomStore from "../../store/store";
import { Statusbar } from "./Statusbar";

export const Preview = () => {
  const { response } = useDoomStore((state) => state);

  return (
    <Card radius="md" className="h-5/6 border border-gray-600">
      <CardBody>
        <div className="flex flex-col gap-2 h-full">
          <Statusbar />
          <pre className="overflow-y-scroll p-3 h-full rounded border border-gray-600 bg-background">
            {response.data}
          </pre>
        </div>
      </CardBody>
    </Card>
  );
};
