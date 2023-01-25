import "bootstrap/dist/css/bootstrap.min.css";
import { TwitterFollowCard } from "./components/twitterFollowCard/twitterFollowCard";
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
      <div className="container d-grid gap-2 p-3 rounded-4">
        {users.map(({ name, userName, isFollowing }) => (
          <TwitterFollowCard
            key={name}
            name={name}
            userName={userName}
            initialIsFollowing={isFollowing}
          />
        ))}
      </div>
    </>
  );
}
