import { LoaderCircle } from "lucide-react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled(LoaderCircle)`
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.colors.info500};
  animation: ${rotate} 0.8s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export default Spinner;
