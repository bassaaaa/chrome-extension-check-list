import { ReactNode } from "react";

type Prop = {
  onClick: () => void;
  children: ReactNode;
};

export const ButtonEnabled = (props: Prop) => {
  return (
    <button onClick={props.onClick} className="btn btn-outline btn-success mx-auto">
      {props.children}
    </button>
  );
};
