type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const Textarea = (props: Props) => {
  const { value, onChange } = props;
  return <textarea className="textarea textarea-bordered w-full h-36" value={value} onChange={onChange} />;
};
