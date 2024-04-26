import { ReactNode } from "react";

type Prop = {
  children: ReactNode;
  onClick: () => void;
};

export const ButtonEnabled = (props: Prop) => {
  const { children, onClick } = props;
  return (
    <button onClick={onClick} className="btn btn-outline btn-success mx-auto">
      {children}
    </button>
  );
};
