import { RefObject, useEffect, useState } from "react";
import { Method } from "./Method";
import useDoomStore from "../../store/store";
import { useDebounce } from "../../hooks/useDebounce";

interface Props {
  inputRef: RefObject<HTMLInputElement>;
}

export const URLInput = ({ inputRef }: Props) => {
  const { activeRequest, updateActiveRequest } = useDoomStore((state) => state);
  const [url, setUrl] = useState(activeRequest?.url || "");
  const debounceUrl = useDebounce<string>(url, 500);

  useEffect(() => {
    if (!activeRequest) return;
    updateActiveRequest({
      ...activeRequest,
      url: debounceUrl,
    });
  }, [debounceUrl]);

  const handleChange = () => {
    if (!inputRef.current) return;
    setUrl(inputRef.current.value);
  };

  return (
    <div className="flex gap-2">
      <Method />
      <input
        required
        ref={inputRef}
        spellCheck={false}
        type="text"
        name="url"
        className="flex-grow p-4 w-full rounded-lg focus:outline-none bg-content2 text-foreground hover:bg-content3 focus:bg-content3"
        placeholder="https://jsonplaceholder.typicode.com/todos/1"
        onChange={handleChange}
      />
    </div>
  );
};
