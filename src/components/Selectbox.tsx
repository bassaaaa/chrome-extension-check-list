export const SelectBox = () => {
  return (
    <div className="mx-auto my-2 w-full">
      <select className="select select-bordered w-full" defaultValue="">
        <option disabled value="">
          選択してください
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
    </div>
  );
};
