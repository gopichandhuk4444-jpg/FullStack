import { useState } from "react"
import {MdExpandLess,MdExpandMore}from "react-icons/md"
export const Show=({text})=>{
    const [show,setShow] = useState(false)
    const Icon = show ? MdExpandLess : MdExpandMore;

    return(<>
    <p>{show?text:text.substring(0, 100)} <Icon onClick={()=>setShow(!show)}/></p>
    </>)
}
