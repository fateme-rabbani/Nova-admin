import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { X } from "lucide-react";
import { Container, Header, Title, CloseButton, Content } from "./styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog || !isOpen) {
      return;
    }

    dialog.showModal();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <Container
      ref={dialogRef}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;

        const rect = event.currentTarget.getBoundingClientRect();

        const outside =
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom;

        if (outside) onClose();
      }}
    >
      <Header>
        <Title>{title}</Title>
        <CloseButton type="button" onClick={onClose}>
          <X size={20} />
        </CloseButton>
      </Header>

      <Content>{children}</Content>
    </Container>
  );
}

export default Modal;
