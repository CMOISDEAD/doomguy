import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDarkReasonable,
  ascetic,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Card, CardBody, Kbd } from "@nextui-org/react";
import useDoomStore from "../../store/store";
import { Statusbar } from "./Statusbar";
import { useTheme } from "next-themes";

export const Preview = () => {
  const { activeRequest } = useDoomStore((state) => state);
  const { theme } = useTheme();

  return (
    <Card radius="md" className="w-full h-5/6 border border-divider">
      <CardBody>
        <div className="flex flex-col gap-1 h-full">
          <Statusbar />
          <SyntaxHighlighter
            language="json"
            style={theme === "dark" ? atomOneDarkReasonable : ascetic}
            className="overflow-auto p-3 h-full rounded-lg border max-h-[60vh] border-divider bg-background"
          >
            {activeRequest?.response?.data || "No response yet."}
          </SyntaxHighlighter>
          <div className="flex flex-grow gap-2 justify-center content-center items-center h-0 text-xs text-gray-600">
            <div className="flex gap-2 content-center items-center">
              <Kbd keys={["command"]}>K</Kbd> to open the launcher
            </div>
            <div className="flex gap-2 content-center items-center">
              <Kbd keys={["command", "shift"]}>F</Kbd> to find request
            </div>
            <div className="flex gap-2 content-center items-center">
              <Kbd keys={["command", "shift"]}>I</Kbd> to open the dev console
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
