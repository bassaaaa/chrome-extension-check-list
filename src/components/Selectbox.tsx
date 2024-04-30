import { checkList } from "../data/checkList";

type Props = {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const SelectBox = (props: Props) => {
  const { onChange } = props;
  return (
    <div className="mx-auto my-2 w-full">
      <select className="select select-bordered w-full" defaultValue="" onChange={onChange}>
        <option disabled value="">
          カテゴリを選択してください
        </option>
        {checkList.categories.map((category) => {
          return (
            <option key={category.primary} value={category.primary}>
              {category.primary}
            </option>
          );
        })}
      </select>
    </div>
  );
};
