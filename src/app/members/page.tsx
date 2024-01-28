import { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

import { config } from "@site.config";
import { members } from "@members";
import { ContentWrapper } from "@src/components/ContentWrapper";
import { PageSEO } from "@src/components/PageSEO";
import { getMemberPath } from "@src/utils/helper";
import { Member } from "@src/types";
import { MemberAvatar } from "@src/components/MemberAvatar";

const MemberCard: React.FC<{ member: Member }> = ({ member }) => {
  return (
    <Link href={getMemberPath(member.id)} className="member-card" passHref>
      <div className="member-card__avatar">
        <MemberAvatar
          memberId={member.id}
          width={80}
          height={80}
          className="member-card__avatar-img"
        />
      </div>
      <h2 className="member-card__name"> {member.name}</h2>
      <p className="member-card__bio">{member.bio}</p>
    </Link>
  );
};

export default async function Page() {
  return (
    <>
      <PageSEO title="Members" path="/members" />
      <ContentWrapper>
        <section className="members">
          <h1 className="members__title">
            Members{" "}
            <span className="members__title-team">
              @ {config.siteMeta.teamName}
            </span>
          </h1>
          <div className="members__cards">
            {members.map((member, i) => (
              <MemberCard key={`member-card-${i}`} member={member} />
            ))}
          </div>
        </section>
      </ContentWrapper>
    </>
  );
}
