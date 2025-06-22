import { Input } from "./ui/input"
import {Button} from './ui/button'
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";

function AddTask({onAdd}){
    const [formValue,setFormValue] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!formValue.trim()) return;
        onAdd(formValue)
        setText("")
    }
    console.log(formValue)
    return(
        <form onSubmit={handleSubmit} className="flex p-1 justify-center">
            <Input onChange={(e)=>setFormValue((prev)=>prev=e.target.value)} placeholder='write your task here' className='w-1/2 bg-zinc-100 mx-2 border-1 border-slate-400'/>
            <Button><AddIcon/></Button>
        </form>
    )
}
export default AddTask