import { PropsWithChildren } from "react";

export type Member = {
  id: string;
  name: string;
  avatarSrc?: string;
  role?: string;
  bio?: string;
  sources?: string[];
  includeUrlRegex?: string;
  excludeUrlRegex?: string;
  githubUsername?: string;
  twitterUsername?: string;
  websiteUrl?: string;
};

export type PostItem = {
  authorId: string;
  authorName: string;
  title: string;
  link: string;
  contentSnippet?: string;
  isoDate?: string;
  dateMiliSeconds: number;
};

export type PageProps<
  TParams extends { [param: string]: string } = {},
  TSearchParams extends { [key: string]: string | string[] | undefined } = {}
> = {
  params: TParams;
  searchParams: TSearchParams;
};

export type LayoutProps<TParams extends { [param: string]: string } = {}> =
  PropsWithChildren<{
    params: TParams;
  }>;
