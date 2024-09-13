interface CheckboxProps {
  label: string;
  onChange: () => void;
  onBlur: () => void;
}

export const Checkbox = ({ label, onChange, onBlur }: CheckboxProps) => (
  <div className="flex items-center justify-center">
    <div className="p-4">
      <input
        type="checkbox"
        className="h-4 w-4 appearance-none rounded-sm border-2 border-green-400 text-green-500 checked:border-green-500 checked:bg-green-500 focus:ring-0"
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
    <div className="px-3">
      <label htmlFor={""} className="text-xs text-black">
        {label} <slot />
      </label>
    </div>
  </div>
);
