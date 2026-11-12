import type { ChangeEvent, FocusEvent } from "react";
import { ChevronDown } from "lucide-react";
import {
  Container,
  Label,
  SelectWrapper,
  Select,
  Arrow,
  ErrorText,
} from "./styles";

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  label?: string;
  placeholder?: string;
  error?: string;
  id?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (event: FocusEvent<HTMLSelectElement>) => void;
}

function Dropdown({
  options,
  label,
  placeholder,
  error,
  id,
  disabled,
  ...props
}: DropdownProps) {
  return (
    <Container>
      {label && <Label htmlFor={id}>{label}</Label>}

      <SelectWrapper>
        <Select {...props} id={id} disabled={disabled}>
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>

        <Arrow>
          <ChevronDown size={16} />
        </Arrow>
      </SelectWrapper>

      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
}

export default Dropdown;
