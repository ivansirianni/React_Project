import { PROJECTS_LIST, PROJECTS_DETAILS } from "../Utilities/project"

export function getAllProjects() { 
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(PROJECTS_LIST);
        },3000);
    })
} 

export function getProject(projectId) {
    return new Promise ((resolve, reject) => {
        const targetProject = PROJECTS_DETAILS.find(
            (project) => project.id === projectId
        );
        setTimeout(() => resolve(targetProject),2000)
    });
}