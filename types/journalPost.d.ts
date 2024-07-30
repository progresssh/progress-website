export interface journalPost {
  mode: 'transmissions' | 'journal';
  body: JSONContent;
  key: string;
  time: number;
  title: string;
}
