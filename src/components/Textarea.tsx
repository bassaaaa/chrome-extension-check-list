type Props = {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const Textarea = (props: Props) => {
  const { id, value, onChange } = props;
  return <textarea id={id} className="textarea textarea-bordered w-full" value={value} onChange={onChange} />;
};
