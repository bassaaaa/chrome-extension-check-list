import { CheckListItem } from "../Types";

export const ToggleWithLabel = (props: CheckListItem) => {
  const { label, tip } = props;
  return (
    <div className="tooltip tooltip-bottom tooltip-success" data-tip={tip}>
      <div className="form-control">
        <label className="cursor-pointer label">
          <span className="label-text">{label}</span>
          <input type="checkbox" className="toggle toggle-success" />
        </label>
      </div>
    </div>
  );
};
