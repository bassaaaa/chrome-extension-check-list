export interface CheckListItem {
  id: number;
  label: string;
  tip: string;
}

export interface CheckList {
  title: string;
  items: CheckListItem[];
}
