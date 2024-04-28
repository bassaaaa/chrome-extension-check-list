type CheckList = {
  checkListTitle: string;
  confirmedStatus: string;
  categories: {
    categoryName: string;
    items: {
      label: string;
      tip: string;
    }[];
  }[];
  outputText: string;
};

export const checkList: CheckList = {
  checkListTitle: "Check List Generator",
  confirmedStatus: "✓",
  categories: [
    {
      categoryName: "カテゴリ1",
      items: [
        {
          label: "チェック項目1",
          tip: "補足事項1",
        },
        {
          label: "チェック項目2",
          tip: "補足事項2",
        },
        {
          label: "チェック項目3",
          tip: "補足事項3",
        },
      ],
    },
    {
      categoryName: "カテゴリ2",
      items: [
        {
          label: "チェック項目1",
          tip: "補足事項1",
        },
        {
          label: "チェック項目2",
          tip: "補足事項2",
        },
      ],
    },
  ],
  outputText: "以下のとおりチェック完了しました。",
};
