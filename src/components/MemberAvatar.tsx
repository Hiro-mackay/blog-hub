"use client";

import {
  getDefaultAvatarSrc,
  getGitHubIdenticons,
  getMemberAvatarSrc,
  getMemberById,
} from "@src/utils/helper";
import Image, { ImageProps } from "next/image";
import { ReactEventHandler } from "react";

export type MemberAvatarProps = {
  memberId: string;
} & Omit<ImageProps, "src" | "alt">;
export function MemberAvatar({ memberId, ...props }: MemberAvatarProps) {
  const member = getMemberById(memberId);

  if (!member) return <img alt="not-found" />;

  const onError: ReactEventHandler<HTMLImageElement> = (e) => {
    /**
     * GitHubアカウントの指定がなければ、デフォルトの画像を指定
     */
    if (!member.githubUsername) {
      e.currentTarget.src = getDefaultAvatarSrc();
      e.currentTarget.srcset = getDefaultAvatarSrc();
      return;
    }

    /**
     * 画像指定がなければ、GitHub Identiconsをアバター画像にする
     */
    const identicons = getGitHubIdenticons(member.githubUsername);
    if (e.currentTarget.src !== identicons) {
      e.currentTarget.src = identicons;
      e.currentTarget.srcset = identicons;
      return;
    }
  };

  return (
    <Image
      src={getMemberAvatarSrc(member)}
      alt={member.name}
      onError={onError}
      {...props}
    />
  );
}
