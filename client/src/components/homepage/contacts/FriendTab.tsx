import React, { useContext, useEffect, useState } from "react";
import { Friend } from "./Friend";
import { userContext } from "../../../App";
import { Link } from "react-router-dom";
import "../../../App.scss";

interface Props {
  searchingForFriends: (searching: boolean) => void;
  passFriends: (friends: any) => void;
}

export const FriendTab: React.FC<Props> = props => {
  const { userVal, setUserVal } = useContext(userContext);
  const [userFriends, setUserFriends] = useState(userVal.friends);

  if (userVal.friends) {
    return (
      <div className="friend_class_container">
        {userVal.friends.map((person: any) => (
          <Link to={`/home/${person.id}`}>
            <Friend
              key={Math.floor(Math.random() * 10000)}
              id={person.id}
              name={person.name}
              userId={userVal.id}
              searchingForFriends={props.searchingForFriends}
            />
          </Link>
        ))}
      </div>
    );
  } else {
    return (
      <div className="friend_class_container task_box">
        <p className="load_if_empty">Add friends to start...</p>
      </div>
    );
  }
};
