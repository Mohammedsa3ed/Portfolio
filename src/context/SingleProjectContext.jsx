import { useState, createContext } from "react";
import { singleProjectData as singleProjectDataJson } from "../data/singleProjectData";
import { useParams } from "react-router-dom";
import { projectsData } from "../data/projects";

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
  const param = useParams();
  const [singleProjectData, setSingleProjectData] = useState(
    projectsData[param.id - 1]
  );
  console.log(projectsData[param.id - 1], param);
  return (
    <SingleProjectContext.Provider
      value={{ singleProjectData, setSingleProjectData }}
    >
      {children}
    </SingleProjectContext.Provider>
  );
};

export default SingleProjectContext;
