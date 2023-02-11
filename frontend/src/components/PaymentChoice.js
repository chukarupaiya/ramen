import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";
import Pay from "./Pay";
import './Pay.css';
import { FaDollarSign } from "react-icons/fa";

const PaymentChoice = ({
  children,
  fetchAgain,
  setFetchAgain,
  fetchMessages,
  refAgain,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          d={{ base: "flex" }}
          icon={<FaDollarSign />}
          onClick={onOpen}
          colorScheme="grey"
          _hover={{ bg: "rgb(2, 163, 34);" }}
          bg="rgb(114,137,218)"
          borderRadius="50%"
          marginLeft="8px"
        />
      )}
      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h="410px" bg={"rgb(30,33,36)"} color="white">
          <ModalCloseButton />
          <ModalBody
            d="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
          >
            
              <div className="payment_choice">
                <Pay
                  fetchAgain={fetchAgain}
                  setFetchAgain={setFetchAgain}
                  fetchMessages={fetchMessages}
                  refAgain={refAgain}
                  toClose={onClose}
                ></Pay>
              </div>
              <div className="payment_choice">
               
                <Pay
                  fetchAgain={fetchAgain}
                  setFetchAgain={setFetchAgain}
                  fetchMessages={fetchMessages}
                  refAgain={refAgain}
                  toClose={onClose}
                ></Pay>
              </div>
            
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} bg="rgb(114,137,218)"
              marginRight={"10px"}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PaymentChoice;
