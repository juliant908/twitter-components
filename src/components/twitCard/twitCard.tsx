import "./twitCard.css";
import { useState } from "react";
import { FaComment, FaRetweet, FaHeart, FaShare } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
interface TwitterCardProps {
  name: string;
  userName: string;
}
export function TwitCard(props: TwitterCardProps) {
  const formatDate = () => {
    return new Date().toLocaleDateString("en-US");
  };
  const [isActive, setIsActive] = useState(false);
  const activeInteraction = () => setIsActive(!isActive);
  return (
    <>
      <div className="twit-container">
        <article className="tw-followCard px-3 py-2 d-flex flex-column align-items-start">
          <header className="d-flex">
            <img
              className="me-2"
              src={`https://unavatar.io/${props.userName}`}
              alt="El avatar del usuario"
            />
            <div className="d-flex flex-row gap-2">
              <strong>{props.name}</strong>
              <span className="tw-followCard-userName">
                @{props.userName} ·
              </span>
              <span className="tw-followCard-date">{formatDate()}</span>
            </div>
          </header>
          <aside>
            <div className="twit-contents">
              <p className="twit">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                est quis ab, repellat voluptatem dolor mollitia! Nam, nihil
                voluptatum nesciunt amet cupiditate modi accusantium voluptas
                provident ad quo magni neque, ratione eaque molestiae error
                pariatur, impedit non consequuntur! Odio est adipisci quisquam
                pariatur eos quod tempore, cupiditate beatae incidunt impedit?
              </p>
            </div>
          </aside>
          <section className="w-100">
            <div className="interactions d-flex px-3 py-1 justify-content-around align-items-center ">
              <div className="tw-interaction comment">
                <FaComment
                  color={isActive ? "white" : "#4478A0"}
                  onClick={activeInteraction}
                />
              </div>
              <div className="tw-interaction retweet">
                <FaRetweet
                  color={isActive ? "white" : "green"}
                  onClick={activeInteraction}
                />
              </div>
              <div className="tw-interaction like">
                <FaHeart
                  color={isActive ? "white" : "red"}
                  onClick={activeInteraction}
                />
              </div>
              <div className="tw-interaction analytics">
                <MdAnalytics
                  color={isActive ? "white" : "lightblue"}
                  onClick={activeInteraction}
                />
              </div>
              <div className="tw-interaction share">
                <FaShare
                  color={isActive ? "white" : "yellow"}
                  onClick={activeInteraction}
                />
              </div>
            </div>
          </section>
        </article>
      </div>
      <div className="separator"></div>
    </>
  );
}
