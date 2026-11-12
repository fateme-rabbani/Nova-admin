import { useState } from "react";
import type { ChangeEvent, FocusEvent } from "react";
import { Eye, EyeOff } from "lucide-react";
import {
  Container,
  Label,
  InputWrapper,
  Field,
  PasswordButton,
  ErrorText,
} from "./styles";

interface InputProps {
  id?: string;
  name?: string;
  type?: "text" | "password" | "email" | "tel" | "url";
  value?: string;
  placeholder?: string;
  autoComplete?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  dir?: "rtl" | "ltr" | "auto";

  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;

  showPasswordLabel?: string;
  hidePasswordLabel?: string;
  formatNumber?: boolean;
  numericValue?: string;
  onValueChange?: (value: string) => void;
}

function Input({
  formatNumber = false,
  numericValue = "",
  onValueChange,
  label,
  error,
  id,
  type = "text",
  disabled,
  ...props
}: InputProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [focused, setFocused] = useState(false);

  const [integer, decimal] = numericValue.split(".");
  const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const formattedValue =
    decimal === undefined
      ? formattedInteger
      : `${formattedInteger || "0"}.${decimal}`;
  const isPassword = type === "password";
  const fieldType = isPassword && passwordVisible ? "text" : type;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (!formatNumber) {
      props.onChange?.(event);
      return;
    }

    const nextValue = event.target.value
      .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
      .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)))
      .replace(/[,٬]/g, "")
      .replace(/٫/g, ".");

    if (/^\d*\.?\d*$/.test(nextValue)) {
      onValueChange?.(nextValue);
    }
  }

  function handleFocus(event: FocusEvent<HTMLInputElement>) {
    setFocused(true);
    props.onFocus?.(event);
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    setFocused(false);
    props.onBlur?.(event);
  }

  let inputValue = props.value;

  if (formatNumber) {
    inputValue = focused ? numericValue : formattedValue;
  }
  const inputId = id ?? props.name;
  return (
    <Container>
      {label && <Label htmlFor={inputId}>{label}</Label>}

      <InputWrapper>
        <Field
          {...props}
          value={inputValue}
          inputMode={formatNumber ? "decimal" : undefined}
          dir={formatNumber ? "ltr" : props.dir}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          id={inputId}
          type={fieldType}
          disabled={disabled}
          $hasPasswordButton={isPassword}
        />

        {isPassword && (
          <PasswordButton
            type="button"
            disabled={disabled}
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
          </PasswordButton>
        )}
      </InputWrapper>

      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
}

export default Input;
