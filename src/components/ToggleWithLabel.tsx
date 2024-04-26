type Props = {
  id: number;
  label: string;
  tip: string;
};

export const ToggleWithLabel = (props: Props) => {
  const { label, tip } = props;
  return (
    <div className="tooltip tooltip-bottom tooltip-accent mx-auto" data-tip={tip}>
      <div className="form-control w-64">
        <label className="cursor-pointer label">
          <span className="label-text">{label}</span>
          <input type="checkbox" className="toggle toggle-accent" />
        </label>
      </div>
    </div>
  );
};
