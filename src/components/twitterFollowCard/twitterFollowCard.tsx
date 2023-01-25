import { useState } from "react";
import "./twitterFollowCard.css";

interface FollowCardProps {
  name: string;
  userName: string;
  initialIsFollowing: boolean;
}

export function TwitterFollowCard(props: FollowCardProps) {
  const [isFollowing, setIsFollow] = useState(props.initialIsFollowing);
  const text = isFollowing ? "Following" : "Follow";
  const buttonClass = isFollowing
    ? "py-1 px-4 roundButton following"
    : "py-1 px-4 roundButton follow";
  const buttonClick = () => setIsFollow(!isFollowing);
  return (
    <>
      <article className="tw-followCard d-flex justify-content-between w-100 align-items-center">
        <header className="d-flex me-4">
          <img
            className="me-2"
            src={`https://unavatar.io/${props.userName}`}
            alt="El avatar del usuario"
          />
          <div className="d-flex flex-column">
            <strong>{props.name}</strong>
            <span className="tw-followCard-userName">@{props.userName}</span>
          </div>
        </header>
        <aside>
          <button className={buttonClass} onClick={buttonClick}>
            <span className="tw-followCard-action">{text}</span>
            <span className="tw-followCard-unfollow">Unfollow</span>
          </button>
        </aside>
      </article>
    </>
  );
}
