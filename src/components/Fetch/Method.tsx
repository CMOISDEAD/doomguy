import { Select, SelectItem } from "@nextui-org/react"
import useDoomStore from "../../store/store"
import { useEffect, useState } from "react";

export const Method = () => {
  const methods = ["GET", "POST", "PUT", "PATCH", "DELETE"];
  const [value, setValue] = useState(new Set<string>([]));
  const { activeRequest, updateActiveRequest } = useDoomStore((state) => ({
    activeRequest: state.activeRequest!,
    updateActiveRequest: state.updateActiveRequest,
  }));

  useEffect(() => {
    setValue(new Set([activeRequest.method]));
  }, [activeRequest])

  const handleUpdate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    updateActiveRequest({ ...activeRequest, method: value });
  }

  return (
    <Select
      required
      color="success"
      className="w-1/6"
      placeholder="Select a method"
      name="method"
      aria-label="Select a method"
      selectedKeys={value}
      onChange={handleUpdate}
    >
      {methods.map((method) => (
        <SelectItem value={method} key={method}>
          {method}
        </SelectItem>
      ))}
    </Select>
  )
}
