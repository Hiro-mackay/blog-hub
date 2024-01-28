import { Member } from "@src/types";

export const members: Member[] = [
  {
    id: "catnose",
    name: "CatNose",
    role: "CTO",
    bio: "デザインが好きなプログラマー。開発者向けの情報共有プラットフォームzenn.devを開発しています。",
    avatarSrc: "/avatars/catnose.jpg",
    sources: [
      "https://zenn.dev/catnose99/feed",
      "https://catnose.medium.com/feed",
    ],
  },
  {
    id: "mackay",
    name: "マッケイ",
    role: "エンジニアリングマネージャー",
    bio: "エンジニアリングマネージャー。プログラミングと読書が趣味。",
    avatarSrc: "/avatars/mackay.jpg",
    sources: [
      "https://zenn.dev/mackay/feed",
      "https://qiita.com/johnmackay150/feed",
      "https://note.com/mackay150/rss",
    ],
    githubUsername: "Hiro-mackay",
  },
];
