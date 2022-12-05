import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "../../components/Services/index";
import "./Store.css"

export default function Store(props){
    const [projectData, setProjectData] = useState(null);
    const { project } = useParams();

    useEffect (() => {
        getProject(project).then((projectData) =>{
            setProjectData(projectData);
        });
    }, [project]);

    return(
        <>
        {projectData ? (
            <div className="store-container">
                <div className="project-name">{projectData.name}</div>
                <div className="project-details">{projectData.detail}</div>
                <div className="project-link">
                    <a href={projectData.repo.link}>{projectData.repo.link}</a>
                </div>
            </div>
        ) : (
            <h3>Loading Content...</h3>
        )}
        </>
    );
}