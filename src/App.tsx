import { useEffect } from "react";
import { FetchList } from "./components/FetchList/FetchList";
import { Layout } from "./components/Layout";
import { Preview } from "./components/Preview/Preview";
import { UrlFetch } from "./components/Fetch/UrlFetch";
import { useDisclosure } from "@nextui-org/react";
import { Advertisement } from "./components/Advertisement";
import useDoomStore from "./store/store";
import { Placeholder } from "./components/Placeholder";

function App() {
  const { activeRequest } = useDoomStore((state) => state);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <Layout>
      <div className="flex gap-2 justify-between mr-2 h-full">
        <FetchList />
        <div className="flex flex-col flex-grow gap-2 max-w-5xl">
          {activeRequest ? (
            <>
              <UrlFetch />
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
