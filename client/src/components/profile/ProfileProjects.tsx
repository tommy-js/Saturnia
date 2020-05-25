import React, { useState, useEffect, useContext } from "react";
import { AdminProjectListing } from "../projects/AdminProjectListing";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { useLazyQuery } from "@apollo/react-hooks";
import { userContext } from "../../App";
import Cookies from "universal-cookie";
import { useHistory, Link, Route } from "react-router-dom";
import { loggedInContext } from "../../App";
import { userQuery } from "../../queries/queries";
const aes256 = require("aes256");

interface Props {
  adminDriller: (userProjects: any) => void;
}

const ProfileProjects: React.FC<Props> = props => {
  const { userVal, setUserVal } = useContext(userContext);
  const [projects, setProjects] = useState(userVal.projects);
  const { loggedIn, setLoggedIn } = useContext(loggedInContext);
  const history = useHistory();
  const cookies = new Cookies();

  useEffect(() => {
    console.log(userVal);
  }, []);

  function currentProjects() {
    if (userVal.projects) {
      return (
        <div>
          {userVal.projects.map((el: any) => (
            <AdminProjectListing key={el.id} title={el.title} id={el.id} />
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <p className="center_join_project">Join a project to see it here</p>
        </div>
      );
    }
  }

  return (
    <div>
      <div className="start_project_block">
        <h3 className="start_project_header">Create a project</h3>
        <div className="new_project_button">
          <Link to={`/newproject`}>
            <span className="hide_on_swipe">New Project</span>
            <div className="swipe_right">
              <span className="show_on_swipe">New Project</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="current_projects">{currentProjects()}</div>
    </div>
  );
};

export default compose(graphql(userQuery, { name: "userQuery" }))(
  ProfileProjects
);
