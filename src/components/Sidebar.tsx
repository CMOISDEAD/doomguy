import { Tooltip } from "@nextui-org/react";
import { useTheme } from "next-themes";

export const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex sticky top-0 flex-col justify-between p-3 h-screen border border-divider bg-content1">
      <div className="flex flex-col gap-1">
        <Tooltip content="Settings" placement="right">
          <button className="w-3 h-3 rounded-full bg-success hover:bg-success-300" />
        </Tooltip>
        <Tooltip content="Settings" placement="right">
          <button className="w-3 h-3 rounded-full bg-warning-500 hover:bg-warning-300" />
        </Tooltip>
        <Tooltip content="Toggle Theme" placement="right">
          <button
            className="w-3 h-3 rounded-full bg-primary hover:bg-primary-300"
            onClick={handleTheme}
          />
        </Tooltip>
      </div>
      <Tooltip content="Github" placement="right">
        <a
          className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-700"
          href="https://github.com/CMOISDEAD/doomguy"
          target="_blank"
        />
      </Tooltip>
    </div>
  );
};
