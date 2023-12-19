import { useState } from "react";
import { RxPlus } from "react-icons/rx";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tab,
  Tabs,
  Textarea,
} from "@nextui-org/react";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

export const Details = ({ isOpen, onOpenChange }: Props) => {
  const [headers, setHeaders] = useState<string[]>([
    "Accept: application/json",
    "Content-Type: application/json",
  ]);

  const handleAdd = () => {
    setHeaders([...headers, ""]);
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>Request information</ModalHeader>
            <ModalBody>
              <Tabs>
                <Tab key="headers" title="Headers">
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
                </Tab>
                <Tab key="body" title="Body">
                  <Textarea label="Body" placeholder="{}" defaultValue="{}" />
                </Tab>
              </Tabs>
            </ModalBody>
            <ModalFooter>
              <Button variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary">Save</Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
