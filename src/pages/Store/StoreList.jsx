import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Card from "../../components/Cards/Card"
import { getAllProjects } from "../../components/Services/index"
import { isEmpty } from "../../components/Utilities/array"
import "./StoreList.css"

export default function ProjectList() {
    const [projects, setProjects] = useState ([]);

    useEffect(() => {
        getAllProjects().then((projects) => setProjects(projects));
    }, []);

    return (
        <div className="project-container" area="content">
            {isEmpty(projects) ? (
                <h3 className="loader">Loading, please wait ...</h3>
            ) : (
                <div className="store-list">
                    {projects.map ((project) =>(
                        <Card key={project.id}>
                            <Link to={`${project.id}`}></Link>
                            <div className="items">
                                {project.name.map((title) => (
                                    <h4 key={title}>{title}</h4>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            )            
        }
            <div className="detail">
                <Outlet />
            </div>
        </div>
    );
}
