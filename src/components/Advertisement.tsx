import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

export const Advertisement = ({ isOpen, onOpenChange }: any) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>Advertisement, but not really</ModalHeader>
            <ModalBody>
              <p>
                This project is under development, so there may be some{" "}
                <span className="font-bold">(a lot)</span> bugs. If you find any
                bugs, please report them to the developer.
                <br />
                And if you want to contribute to this project, you can do so by
                forking this project on{" "}
                <Link
                  href="https://github.com/CMOISDEAD/doomguy"
                  target="_blank"
                >
                  GitHub.
                </Link>
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" variant="light" onPress={onClose}>
                Accept
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
