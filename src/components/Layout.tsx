import { Toaster } from "react-hot-toast";
import { Sidebar } from "./Sidebar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-2">
      <Sidebar />
      <div className="container py-2 mx-auto">{children}</div>
      <Toaster />
    </div>
  );
};
