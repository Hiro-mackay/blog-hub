import { Member, PostItem } from "@src/types";
import { members } from "@members";
import posts from "@.contents/posts.json";

export function getMemberByName(name: string) {
  return members.find((member) => member.name === name);
}

export function getMemberById(id: string) {
  return members.find((member) => member.id === id);
}

export function getMemberPostsById(id: string) {
  return (posts as PostItem[]).filter((item) => item.authorId === id);
}

export function getFaviconSrcFromOrigin(hostname: string) {
  return `https://www.google.com/s2/favicons?sz=32&domain_url=${hostname}`;
}
export function getMemberPath(id: string) {
  return `/members/${encodeURIComponent(id)}`;
}

export function getMemberAvatarSrc(member: Member) {
  if (member.avatarSrc) {
    return member.avatarSrc;
  }

  return getGitHubIdenticons(member.githubUsername);
}

export function getGitHubIdenticons(githubUsername: string) {
  return `https://github.com/identicons/${githubUsername}.png`;
}
