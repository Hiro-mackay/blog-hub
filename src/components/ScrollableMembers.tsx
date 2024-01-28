import { members } from "@members";
import { getMemberPath } from "@src/utils/helper";
import Link from "next/link";
import { MemberAvatar } from "./MemberAvatar";

export const ScrollableMembers: React.FC = () => {
  return (
    <div className="scrollable-members">
      {members.map((member, i) => (
        <Link
          key={`scrollable-member-${i}`}
          href={getMemberPath(member.id)}
          className="scrollable-member__link"
          passHref
        >
          <span className="scrollable-member__image">
            <MemberAvatar
              memberId={member.id}
              className="scrollable-member__img"
              width={80}
              height={80}
            />
          </span>
          <span className="scrollable-member__name">{member.name}</span>
          <span className="scrollable-member__role">{member.role}</span>
        </Link>
      ))}
    </div>
  );
};
