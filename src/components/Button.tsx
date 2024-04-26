import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const ButtonEnabled = (props: Props) => {
  const { children, onClick } = props;
  return (
    <button onClick={onClick} className="btn btn-outline btn-success mx-auto">
      {children}
    </button>
  );
};

export const ButtonDisabled = (props: Props) => {
  return (
    <button className="btn mx-auto" disabled={true}>
      {props.children}
    </button>
  );
};
