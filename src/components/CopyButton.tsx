type Props = {
  onClick: () => void;
  disabled: boolean;
};

export const CopyButton = (props: Props) => {
  const { onClick, disabled } = props;
  return disabled ? (
    <button className="btn mx-auto" disabled={disabled}>
      クリップボードにコピー
    </button>
  ) : (
    <button className="btn btn-outline btn-success mx-auto" onClick={onClick} disabled={disabled}>
      クリップボードにコピー
    </button>
  );
};
