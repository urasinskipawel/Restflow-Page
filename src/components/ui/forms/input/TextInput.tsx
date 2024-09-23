import type { FieldErrors } from "react-hook-form";

interface TextInputProps {
  placeholder: string;
  value: string;
  onChange: () => void;
  onBlur: () => void;
  error: FieldErrors<FormData>;
}

export const TextInput = ({
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}: TextInputProps) => (
  <>
    <label htmlFor={""} className="sr-only" />
    <input
      type="text"
      className={`${error ? "border-red-500" : "border-green-300"} block w-full rounded border-2 px-4 py-4 text-sm text-green-500 placeholder:text-green-500 focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-400`}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  </>
);
