import React from "react";

interface PhoneInputProps {
  label?: string;
  id: string;
}

export const PhoneInput = ({ id, label }: PhoneInputProps) => (
  <div>
    <label htmlFor={id} className="sr-only">
      {label}
    </label>
    <input
      type="tel"
      name="hs-phone-number"
      id={id}
      className="block w-full rounded border-2 border-green-300 px-4 py-4 text-sm text-green-500 placeholder:text-green-500 focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-400"
      placeholder={label}
    />
  </div>
);
