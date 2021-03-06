import React, { useEffect, useState, useContext } from "react";
import { Navbar } from "../navigation/Navbar";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { addProjectUserMutation } from "../../queries/queries";
import { userContext } from "../../App";
import { MenuItem, ContextMenu, ContextMenuTrigger } from "react-contextmenu";

interface Props {
  addProjectUserMutation: (variables: object) => void;
  id: number;
  title: string;
  content: string;
  leadId: number;
  leadName: string;
}

const ProjectPage: React.FC<Props> = props => {
  const { userVal, setUserVal } = useContext(userContext);
  const [member, setMember] = useState(false);
  const [randomInt] = useState(Math.floor(Math.random() * 100000));

  useEffect(() => {
    if (userVal.projects) {
      let findData = userVal.projects.find((el: any) => el.id === props.id);
      if (findData) {
        setMember(true);
      }
    }
  }, []);

  function addUserToProject() {
    let arr = userVal.projects;
    if (arr.length < 5) {
      let timestamp = Math.round(new Date().getTime() / 1000);
      setMember(true);
      props.addProjectUserMutation({
        variables: {
          timestamp: timestamp,
          id: props.id,
          title: props.title,
          content: props.content,
          userId: userVal.id,
          leadName: props.leadName,
          leadId: props.leadId
        }
      });
      arr.push({
        leadName: props.leadName,
        leadId: props.leadId,
        timestamp: timestamp,
        id: props.id,
        title: props.title,
        content: props.content
      });
      setUserVal({
        username: userVal.username,
        id: userVal.id,
        friends: userVal.friends,
        projects: arr
      });
    }
  }

  function checkMember() {
    if (member) {
      return (
        <div>
          <p>You're already a member of this group.</p>
          <button>Back to profile</button>
        </div>
      );
    } else {
      return <button onClick={() => addUserToProject()}>Join Project</button>;
    }
  }

  function contextMenu() {
    return (
      <div>
        <ContextMenu id={`project_context_menu${randomInt}`}>
          <MenuItem>Join</MenuItem>
          <MenuItem>Bookmark</MenuItem>
        </ContextMenu>
      </div>
    );
  }

  return (
    <div>
      <ContextMenuTrigger id={`project_context_menu${randomInt}`}>
        <div className="project_page">
          <p>{props.title}</p>
          <p>{props.content}</p>
          <p>
            Project Lead: {props.leadName} #{props.leadId}
          </p>
          {checkMember()}
        </div>
      </ContextMenuTrigger>
      {contextMenu()}
    </div>
  );
};

export default compose(
  graphql(addProjectUserMutation, { name: "addProjectUserMutation" })
)(ProjectPage);
