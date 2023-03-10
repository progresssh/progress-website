interface OasisPost {
  key: string;
  content: [{ type: "paragraph"; children: [{ text: string }] }];
  name: string;
  time: number;
}
