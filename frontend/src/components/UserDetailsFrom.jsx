import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
export default function UserDetailsFrom({ onOpen, onClose, isOpen }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k36x048",
        "template_rt6mj0c",
        form.current,
        "U0VwhSUHjuBe7oxXc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Share your details</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form ref={form} onSubmit={sendEmail}>
              <FormControl>
                <FormLabel>Your name</FormLabel>
                <Input
                  name="user_name"
                  ref={initialRef}
                  placeholder="Enter your name"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Contact No.</FormLabel>
                <Input
                  name={"user_contact"}
                  type={"number"}
                  placeholder="Enter your contact number"
                />
              </FormControl>
              {/* <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  name={"from_email"}
                  type={"email"}
                  placeholder="Enter your email"
                />
              </FormControl> */}

              <ModalFooter>
                <Input
                  w="30%"
                  type="submit"
                  value={"submit"}
                  color={"white"}
                  cursor={"pointer"}
                  bg="blue"
                  mr={3}
                />

                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
