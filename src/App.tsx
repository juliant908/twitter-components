import { TwitterFollowCard } from "./components/twitterFollowCard/twitterFollowCard";
import { TwitCard } from "./components/twitCard/twitCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const users: any[] = [
  {
    name: "Miguel Ángel Durán",
    userName: "midudev",
    isFollowing: true,
  },
  {
    name: "Fireship",
    userName: "fireship.io",
    isFollowing: false,
  },
  {
    name: "Tiif In Tech",
    userName: "tiffintech",
    isFollowing: false,
  },
];

export function App() {
  return (
    <>
      <div className="container-full">
        <div className="twitBox">
          {users.map(({ name, userName }) => (
            <TwitCard key={name} name={name} userName={userName} />
          ))}
        </div>
        <div className="d-grid gap-3 p-4 ">
          {users.map(({ name, userName, isFollowing }) => (
            <TwitterFollowCard
              key={name}
              name={name}
              userName={userName}
              initialIsFollowing={isFollowing}
            />
          ))}
        </div>
      </div>
    </>
  );
}
