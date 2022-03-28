import React from "react"
import { User } from "./serrch-panel"

interface projects{
    id:string,
    name:string,
    personId:string,
    organization:string,

}

interface ListProps{
    users:User[],
    list:projects[]
}
export const List=({users,list}:ListProps)=>{
        return <table>
            <thead>
                <tr>
                    <th>名称</th>
                    <th>负责人</th>
                </tr>
            </thead>
            <tbody>
                {
                list.map(project=><tr key={project.personId}>
                    <td>{project.name}</td>
                    
                    <td>
                    {
                        users.find(user=>user.id===project.personId)?.name||'未知'
                    }
                    </td>
                    </tr>
                    )
                }
            </tbody>
        </table>
}