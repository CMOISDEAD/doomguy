import { Card, CardBody, Divider } from "@nextui-org/react";
import useDoomStore from "../../store/store";
import { Request } from "./Request";
import { Toolbar } from "./Toolbar";

export const FetchList = () => {
  const { requestList } = useDoomStore.getState();

  return (
    <Card className="w-1/5 border border-divider">
      <CardBody className="flex flex-col gap-2 justify-between">
        <div className="top">
          <Toolbar />
          <Divider />
          <div className="flex overflow-y-auto flex-col gap-2 my-2 max-h-[36rem]">
            {requestList.map((request, i) => (
              <Request request={request} key={i} />
            ))}
          </div>
        </div>
        <div>
          <Divider />
          <p className="pt-2 text-xs text-divider">
            CopyRight @ 2023, Doomguy Inc.
          </p>
        </div>
      </CardBody>
    </Card>
  );
};
