import { Card, CardBody, Divider } from "@nextui-org/react";
import { Toolbar } from "./Toolbar";
import { Request } from "./Request";
import useDoomStore from "../../store/store";

export const FetchList = () => {
  const { requestList } = useDoomStore.getState();

  return (
    <Card className="w-1/5 border border-divider">
      <CardBody className="flex flex-col gap-2 justify-between">
        <div className="top">
          <Toolbar />
          <Divider />
          <div className="flex flex-col gap-2 my-2">
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
