type Props = {
  text: string;
};

export const Modal = (props: Props) => {
  const { text } = props;

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">クリップボードにコピーしました</h3>
        <p className="py-4 whitespace-pre-wrap">{text}</p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button type="button">close</button>
      </form>
    </dialog>
  );
};
