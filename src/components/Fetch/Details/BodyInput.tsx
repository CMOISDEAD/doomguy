import { ChangeEvent, useState } from "react";
import { Textarea } from "@nextui-org/react";
import useDoomStore from "../../../store/store";

// TODO: Implement a JSON checker
export const BodyInput = () => {
  const { activeRequest, updateActiveRequest } = useDoomStore((state) => state);
  const [error, setError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!activeRequest) return;
    try {
      const body = JSON.parse(value);
      updateActiveRequest({
        ...activeRequest,
        body,
      });
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <Textarea
      isInvalid={error}
      label="Body"
      placeholder="{}"
      onChange={handleChange}
      defaultValue={JSON.stringify(activeRequest?.body) || "{}"}
      errorMessage="Please check your syntax, remember remove the comma at the end of the last property."
    />
  );
};
