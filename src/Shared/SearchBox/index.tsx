import { Search } from "lucide-react";
import { Container, Field, Icon } from "./styles";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
  disabled?: boolean;
}

function SearchBox({
  value,
  onChange,
  placeholder,
  label,
  disabled = false,
}: SearchBoxProps) {
  return (
    <Container>
      <Field
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label={label}
        disabled={disabled}
      />

      <Icon>
        <Search size={18} />
      </Icon>
    </Container>
  );
}

export default SearchBox;
