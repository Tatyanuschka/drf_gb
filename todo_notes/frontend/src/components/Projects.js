import React from "react";

const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>
                {project.title}
            </td>
                {project.decription}
            <td>
                {project.project_manager}
            </td>
            <td>
                {project.created_at}
            </td>
        </tr>
    )
}

const ProjectList = ({projects}) => {

    return (
        <table className="table-info">
            <tbody className="table-bordered">
            <tr className="heading" align="center">
                <th>
                    Проект
                </th>
                <th>
                    Описание проекта
                </th>
                <th>
                    Руководитель проекта
                </th>
                <th>
                    Дата проекта
                </th>

            </tr>
            {
                projects.map((project) => <ProjectItem project={project}/>)
            }
            </tbody>

        </table>
        )
    }

    export default ProjectList;
