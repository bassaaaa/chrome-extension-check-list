type CheckList = {
  checkListTitle: string;
  confirmed: string;
  outputText: string;
  common: string;
  commonItems: string[];
  categories: {
    primary: string;
    primaryItem: {
      secondary: string;
      secondaryItems: string[];
    };
  }[];
};

export const checkList: CheckList = {
  checkListTitle: "Check List Generator",
  confirmed: "✔",
  outputText: "以下のとおりチェック完了しました。",
  common: "共通項目",
  commonItems: ["共通アイテム1", "共通アイテム2", "共通アイテム3"],
  categories: [
    {
      primary: "カテゴリ1",
      primaryItem: {
        secondary: "チェック項目1",
        secondaryItems: ["アイテム1", "アイテム2", "アイテム3"],
      },
    },
    {
      primary: "カテゴリ2",
      primaryItem: {
        secondary: "チェック項目2",
        secondaryItems: ["アイテム1", "アイテム2", "アイテム3"],
      },
    },
  ],
};
