interface CheckboxProps {
  id: string;
  label: string;
  onChange: () => void;
  onBlur: () => void;
}

export const Checkbox = ({ id, label, onChange, onBlur }: CheckboxProps) => (
  <div className="flex items-center justify-center lg:justify-start">
    <div className="p-3">
      <input
        id={id}
        type="checkbox"
        className="h-4 w-4 cursor-pointer appearance-none rounded-sm border-2 border-green-400 text-green-500 checked:border-green-500 checked:bg-green-500 focus:ring-0"
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
    <div className="px-3">
      <label htmlFor={id} className="text-xs text-black">
        {label} <slot />
      </label>
    </div>
  </div>
);
