type Props = {
  label: string;
  tip: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ToggleWithLabel = (props: Props) => {
  const { label, tip, checked, onChange } = props;

  return (
    <div className="tooltip tooltip-bottom tooltip-success" data-tip={tip}>
      <div className="form-control">
        <label className="cursor-pointer label">
          <span className="label-text">{label}</span>
          <input type="checkbox" className="toggle toggle-success" checked={checked} onChange={onChange} />
        </label>
      </div>
    </div>
  );
};
