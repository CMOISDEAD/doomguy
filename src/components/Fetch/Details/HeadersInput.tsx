import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { RxPlus } from "react-icons/rx";

// TODO: Implement all the logic of the headers
export const HeadersInput = () => {
  const [headers, setHeaders] = useState<string[]>([
    "Accept: application/json",
    "Content-Type: application/json",
  ]);

  const handleAdd = () => {
    setHeaders([...headers, ""]);
  };

  return (
    <form className="flex flex-col gap-2">
      {headers.map((header, i) => (
        <Input
          label="Header"
          placeholder="Accept: application/json"
          defaultValue={header}
          key={i}
        />
      ))}
      <Button variant="ghost" onPress={handleAdd} type="button">
        <RxPlus />
      </Button>
    </form>
  );
};
