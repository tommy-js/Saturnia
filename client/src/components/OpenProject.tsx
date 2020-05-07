import React, { useEffect, useState } from "react";
import { ProjectListing } from "./ProjectListing";
import { flowRight as compose } from "lodash";
import { graphql } from "react-apollo";
import { useLazyQuery } from "@apollo/react-hooks";
import { getOpenProjectsQuery } from "../queries/queries";

interface Props {
  searchSettings: any;
}

const OpenProject: React.FC<Props> = props => {
  const [projects, setProjects] = useState([{ id: 0 }]);
  const [placeholder, setPlaceholder] = useState();
  const [callProjects, { loading, data }] = useLazyQuery(getOpenProjectsQuery, {
    pollInterval: 500
  });

  useEffect(() => {
    setPlaceholder(props.searchSettings);
  }, [props.searchSettings]);

  useEffect(() => {
    if (props.searchSettings) {
      callProjects({
        variables: {
          stack: placeholder.stack.toUpperCase()
        }
      });
    }
  }, [placeholder]);

  useEffect(() => {
    if (data) {
      setProjects(data.projects);
      console.log(data);
    }
  }, [data]);

  if (!loading) {
    return (
      <div className="project_opening">
        {projects.map((el: any) => (
          <p key={el.id}>{el.title}</p>
        ))}
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
};

export default compose(
  graphql(getOpenProjectsQuery, { name: "getOpenProjectsQuery" })
)(OpenProject);
