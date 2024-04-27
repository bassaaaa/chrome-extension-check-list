type CheckList = {
  title: string;
  items: {
    id: number;
    label: string;
    tip: string;
  }[];
};

export const checkList: CheckList = {
  title: "チェックリスト",
  items: [
    {
      id: 1,
      label: "チェック項目1",
      tip: "補足事項1",
    },
    {
      id: 2,
      label: "チェック項目2",
      tip: "補足事項2",
    },
    {
      id: 3,
      label: "チェック項目3",
      tip: "補足事項3",
    },
  ],
};
