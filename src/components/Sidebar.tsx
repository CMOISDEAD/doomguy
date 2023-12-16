import { Tooltip } from "@nextui-org/react";
import { useTheme } from "next-themes";

export const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex flex-col justify-between p-3 h-screen border border-gray-600 bg-background">
      <div className="flex flex-col gap-1">
        <div className="w-3 h-3 rounded-full bg-success"></div>
        <div className="w-3 h-3 rounded-full bg-warning"></div>
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
      </div>
      <Tooltip content="Theme Switcher" placement="left">
        <button
          className="w-3 h-3 rounded-full hover:bg-blue-500 bg-primary"
          onClick={handleTheme}
        />
      </Tooltip>
    </div>
  );
};
