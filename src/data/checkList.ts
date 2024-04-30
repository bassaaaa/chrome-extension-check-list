type CheckList = {
  checkListTitle: string;
  confirmed: string;
  outputText: string;
  common: string;
  commonItems: {
    label: string;
    tip: string;
  }[];
  categories: {
    primary: string;
    primaryItem: {
      secondary: string;
      secondaryItems: {
        label: string;
        tip: string;
      }[];
    };
  }[];
};

export const checkList: CheckList = {
  checkListTitle: "Check List Generator",
  confirmed: "✔",
  outputText: "以下のとおりチェック完了しました。",
  common: "共通項目",
  commonItems: [
    {
      label: "共通アイテム1",
      tip: "補足事項",
    },
    {
      label: "共通アイテム2",
      tip: "補足事項",
    },
    {
      label: "共通アイテム3",
      tip: "補足事項",
    },
  ],
  categories: [
    {
      primary: "カテゴリ1",
      primaryItem: {
        secondary: "チェック項目1",
        secondaryItems: [
          {
            label: "アイテム1",
            tip: "補足事項",
          },
          {
            label: "アイテム2",
            tip: "補足事項",
          },
          {
            label: "アイテム3",
            tip: "補足事項",
          },
        ],
      },
    },
    {
      primary: "カテゴリ2",
      primaryItem: {
        secondary: "チェック項目2",
        secondaryItems: [
          {
            label: "アイテム1",
            tip: "補足事項",
          },
          {
            label: "アイテム2",
            tip: "補足事項",
          },
          {
            label: "アイテム3",
            tip: "補足事項",
          },
        ],
      },
    },
  ],
};
