type Props = {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ToggleWithLabel = (props: Props) => {
  const { label, checked, onChange } = props;

  return (
    <div className="form-control inline-block">
      <label className="cursor-pointer label" htmlFor={label}>
        <span className="label-text text-left mr-2">{label}</span>
        <input type="checkbox" id={label} className="toggle toggle-success" checked={checked} onChange={onChange} />
      </label>
    </div>
  );
};
