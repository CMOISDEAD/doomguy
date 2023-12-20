import { Card, CardBody, Divider } from "@nextui-org/react";
import useDoomStore from "../../store/store";
import { RequestButton } from "./RequestButton";
import { Toolbar } from "./Toolbar";

export const RequestTree = () => {
  const { searchList } = useDoomStore.getState();

  return (
    <Card className="w-1/5 border border-divider">
      <CardBody className="flex flex-col gap-2 justify-between">
        <div>
          <Toolbar />
          <Divider />
          <div className="flex overflow-y-auto flex-col gap-2 my-2 max-h-[80vh]">
            {searchList.length ? (
              searchList.map((request, i) => (
                <RequestButton request={request} key={i} />
              ))
            ) : (
              <p className="text-xs text-gray-600">
                No requests found. Try adding a new request or check your
                filter.
              </p>
            )}
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
