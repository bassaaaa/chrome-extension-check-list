type Props = {
  id: string;
};

export const Textarea = (props: Props) => {
  return <textarea id={props.id} className="textarea textarea-bordered w-full" placeholder="output"></textarea>;
};
