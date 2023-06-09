
import React from "react";

function Projects() {
    const projects = [
        {title: "sci-fi", url: "https://github.com/anst314/starwars-api"},
        {title: "stocks", url: "https://github.com/anst314/router-stock-app"},
    ]
    return (
    <div>
        {projects.map(project=>{
            return (
                <div>
                    <h5>{project.title}</h5>
                    <a target="_blank" href={project.url}>github repo</a>
                </div>
            )
        })}
    </div>
    )
}

export default Projects;