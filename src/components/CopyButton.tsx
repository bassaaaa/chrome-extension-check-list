type Prop = {
  onClick: () => void;
};

export const CopyButton = (props: Prop) => {
  return (
    <button onClick={props.onClick} className="btn btn-outline btn-success mx-auto">
      コピー
    </button>
  );
};
