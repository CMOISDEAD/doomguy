import { useDisclosure } from "@nextui-org/react";
import { useEffect } from "react";

import { Advertisement } from "./components/Advertisement";
import { Fetch } from "./components/Fetch/Fetch";
import { Layout } from "./components/Layout";
import { Placeholder } from "./components/Placeholder";
import { Preview } from "./components/Preview/Preview";
import { RequestTree } from "./components/RequestTree/RequestTree";
import useDoomStore from "./store/store";

function App() {
  const { activeRequest } = useDoomStore((state) => state);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <Layout>
      <div className="flex gap-2 justify-between mr-2 h-full">
        <RequestTree />
        <div className="flex flex-col flex-grow gap-2 max-w-5xl">
          {activeRequest ? (
            <>
              <Fetch />
              <Preview />
            </>
          ) : (
            <Placeholder />
          )}
        </div>
      </div>
      <Advertisement isOpen={isOpen} onOpenChange={onOpenChange} />
    </Layout>
  );
}

export default App;
