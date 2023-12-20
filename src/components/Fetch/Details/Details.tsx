import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { BodyInput } from "./BodyInput";
import { HeadersInput } from "./HeadersInput";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

export const Details = ({ isOpen, onOpenChange }: Props) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>Request information</ModalHeader>
            <ModalBody>
              <Tabs>
                <Tab key="headers" title="Headers">
                  <HeadersInput />
                </Tab>
                <Tab key="body" title="Body">
                  <BodyInput />
                </Tab>
              </Tabs>
            </ModalBody>
            <ModalFooter>
              <Button variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
