import React from "react";

interface TextInputProps {
  label: string;
  name: string;
  id: string;
}

export const TextInput = ({ label, id, name }: TextInputProps) => (
  <div>
    <label htmlFor={id} className="sr-only">
      {label}
    </label>
    <input
      type="text"
      name={name}
      id={id}
      className="block w-full rounded border-2 border-green-300 px-4 py-4 text-sm text-green-500 placeholder:text-green-500 focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-400"
      placeholder={label}
    />
  </div>
);
