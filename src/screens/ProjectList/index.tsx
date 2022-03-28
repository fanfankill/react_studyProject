import React from "react"
import { SearchPanle } from "./serrch-panel"
import {List} from './list'
import { useEffect,useState} from "react"
import {cleanObject,useDebounce} from '../../util'
import * as qs from "qs"
const  apiUrl=process.env.REACT_APP_API_URL
export const ProjectListScreen =()=>{

    const [param,setParam]=useState({
        name:'',
        personId:''
    })
    const debouncedParam=useDebounce(param,500)
    const [users,setusers]=useState([])
    const [list,setlist]=useState([])

    //当param改变的时候触发
    useEffect(()=>{
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async response=>{
            if(response.ok){
                setlist(await response.json())
            }
        })
    },[debouncedParam]) 

    //初始化users
    useEffect(()=>{
        fetch(`${apiUrl}/users`).then(async response=>{
            if(response.ok){
                setusers(await response.json())
            }
        })
    },[])
    
    return <div>
        <SearchPanle users={users} param={param} setParam={setParam}/>
        <List users={users} list={list}/>
    </div>
}