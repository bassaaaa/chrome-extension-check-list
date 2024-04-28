type Props = {
  onClick: () => void;
  disabled: boolean;
};

export const CopyButton = (props: Props) => {
  const { onClick, disabled } = props;
  return (
    <button className={`btn mx-auto ${disabled ? "" : "btn-outline btn-success"}`} onClick={onClick} disabled={disabled}>
      クリップボードにコピー
    </button>
  );
};
