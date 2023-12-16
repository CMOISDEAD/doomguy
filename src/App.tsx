import { useEffect } from "react";
import { FetchList } from "./components/FetchList";
import { Layout } from "./components/Layout";
import { Preview } from "./components/Preview/Preview";
import { UrlFetch } from "./components/UrlFetch";
import { useDisclosure } from "@nextui-org/react";
import { Advertisement } from "./components/Advertisement";

function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <Layout>
      <div className="flex gap-2 justify-between mr-2 h-full">
        <FetchList />
        <div className="flex flex-col flex-grow gap-2">
          <UrlFetch />
          <Preview />
        </div>
      </div>
      <Advertisement isOpen={isOpen} onOpenChange={onOpenChange} />
    </Layout>
  );
}

export default App;
