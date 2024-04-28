type Props = {
  title: string;
  children: React.ReactNode;
};

export const ListMenu = (props: Props) => {
  const { title, children } = props;

  return (
    <ul className="menu bg-base-200 rounded-box">
      <li className="menu-title items-center">{title}</li>
      {children}
    </ul>
  );
};
