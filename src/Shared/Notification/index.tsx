import { CircleCheck, X } from "lucide-react";
import { Container, Message, CloseButton } from "./styles";

interface NotificationProps {
  message: string;
  onClose: () => void;
}

function Notification({ message, onClose }: NotificationProps) {
  return (
    <Container>
      <CircleCheck size={22} />
      <Message>{message}</Message>
      <CloseButton type="button" onClick={onClose}>
        <X size={18} />
      </CloseButton>
    </Container>
  );
}

export default Notification;
