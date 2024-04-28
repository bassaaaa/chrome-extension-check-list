type CheckList = {
  checkListTitle: string;
  confirmedStatus: string;
  categories: {
    title: string;
    items: {
      id: number;
      label: string;
      tip: string;
    }[];
  }[];
  outputText: string;
};

export const checkList: CheckList = {
  checkListTitle: "チェックリスト",
  confirmedStatus: "✓",
  categories: [
    {
      title: "カテゴリ1",
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
    },
    {
      title: "カテゴリ2",
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
    },
  ],
  outputText: "以下のとおりチェック完了しました。",
};
