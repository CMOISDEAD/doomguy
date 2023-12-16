import {
  Card,
  CardBody,
  Input,
  Button,
  Select,
  SelectItem,
} from "@nextui-org/react";
import axios from "axios";
import useDoomStore from "../store/store";

export const UrlFetch = () => {
  const handleFetch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await axios({
        url: e.currentTarget.url.value,
        method: e.currentTarget.method.value,
        timeout: 5000,
      });
      useDoomStore.setState({
        response: {
          data: JSON.stringify(data.data, null, 2),
          status: data.status,
          headers: data.headers,
          timeout: data.config.timeout!,
          method: data.config.method!,
        },
      });
    } catch (error: any) {
      console.error(error);
      useDoomStore.setState({
        response: {
          data: JSON.stringify(error.message, null, 2),
          status: error.response.status,
          headers: error.response.headers,
          timeout: error.response.config.timeout!,
          method: error.response.config.method!,
        },
      });
    }
  };

  const methods = ["GET", "POST", "PUT", "PATCH", "DELETE"];

  return (
    <Card radius="md" className="flex-grow w-full border border-gray-600">
      <CardBody>
        <form
          onSubmit={handleFetch}
          className="flex flex-col gap-2 justify-between h-full"
        >
          <div className="flex gap-2">
            <Select
              required
              color="success"
              className="w-1/6"
              placeholder="Select a method"
              name="method"
              aria-label="Select a method"
            >
              {methods.map((method, i) => (
                <SelectItem value={method} key={method}>
                  {method}
                </SelectItem>
              ))}
            </Select>
            <Input
              required
              spellCheck={false}
              type="text"
              name="url"
              label="URL"
              className="flex-grow"
              placeholder="https://jsonplaceholder.typicode.com/todos"
            />
          </div>
          <Button color="success" type="submit">
            Make Request
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

const Decoration = () => {
  return (
    <div className="flex justify-between items-center px-3 h-10 border-gray-600">
      <div className="flex gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <div className="flex gap-2">
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
      </div>
    </div>
  );
};
