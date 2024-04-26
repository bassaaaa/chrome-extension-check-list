type Props = {
  id: number;
  label: string;
};

export const ToggleWithLabel = (props: Props) => {
  return (
    <div className="form-control w-52">
      <label className="cursor-pointer label">
        <span className="label-text">{props.label}</span>
        <input type="checkbox" className="toggle toggle-accent" />
      </label>
    </div>
  );
};
