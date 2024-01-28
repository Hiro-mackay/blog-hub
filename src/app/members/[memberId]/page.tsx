import { FaTwitter, FaGithub } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";

import { members } from "@members";
import { PostItem, Member, PageProps } from "@src/types";
import { PostList } from "@src/components/PostList";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { PageSEO } from "@src/components/PageSEO";
import {
  getMemberById,
  getMemberPostsById,
  getMemberPath,
} from "@src/utils/helper";
import { MemberAvatar } from "@src/components/MemberAvatar";

export async function generateStaticParams() {
  return members
    .map((member) => encodeURIComponent(member.id))
    .map((memberId) => ({
      memberId,
    }));
}

async function getMemberData(memberId: string): Promise<
  Member & {
    posts: PostItem[];
  }
> {
  const member = getMemberById(memberId);
  const postItems = getMemberPostsById(memberId);

  if (!member) throw "User not found";

  return {
    ...member,
    posts: postItems,
  };
}

export default async function Page({
  params,
}: PageProps<{ memberId: string }>) {
  const { id, name, bio, twitterUsername, githubUsername, websiteUrl, posts } =
    await getMemberData(params.memberId);

  return (
    <>
      <PageSEO title={name} path={getMemberPath(id)} />
      <section className="member">
        <ContentWrapper>
          <header className="member-header">
            <div className="member-header__avatar">
              <MemberAvatar
                memberId={id}
                width={100}
                height={100}
                className="member-header__avatar-img"
              />
            </div>
            <h1 className="member-header__name">{name}</h1>
            <p className="member-header__bio">{bio}</p>
            <div className="member-header__links">
              {twitterUsername && (
                <a
                  href={`https://twitter.com/${twitterUsername}`}
                  className="member-header__link"
                >
                  <FaTwitter
                    className="member-header__link-icon"
                    aria-label={`Follow @${twitterUsername} on Twitter`}
                  />
                </a>
              )}
              {githubUsername && (
                <a
                  href={`https://github.com/${githubUsername}`}
                  className="member-header__link"
                >
                  <FaGithub
                    className="member-header__link-icon"
                    aria-label={`@${githubUsername} on GitHub`}
                  />
                </a>
              )}
              {websiteUrl && (
                <a href={websiteUrl} className="member-header__link">
                  <AiOutlineLink
                    className="member-header__link-icon"
                    aria-label={`Link to website`}
                  />
                </a>
              )}
            </div>
          </header>

          <div className="member-posts-container">
            <PostList items={posts} />
          </div>
        </ContentWrapper>
      </section>
    </>
  );
}
