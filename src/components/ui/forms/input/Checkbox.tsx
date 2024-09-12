import React from "react";

interface CheckboxProps {
  label?: string;
  id: string;
}

export const Checkbox = ({ id, label }: CheckboxProps) => (
  <div className="my-5 flex items-center justify-center">
    <div className="p-4">
      <input
        id={id}
        name="remember-me"
        type="checkbox"
        className="h-4 w-4 appearance-none rounded-sm border-2 border-green-400 checked:border-green-500 checked:bg-green-500 focus:ring-0"
      />
    </div>
    <div className="px-3">
      <label htmlFor={id} className="text-xs text-black">
        {label} <slot />{" "}
      </label>
    </div>
  </div>
);
