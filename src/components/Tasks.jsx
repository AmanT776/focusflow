import {Button} from "./ui/button"
import DeleteIcon from '@mui/icons-material/Delete';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import{
    Card,
    CardHeader,
    CardTitle
} from './ui/card'
function Tasks({id,title,completed,onToggle,onDelete}){
    return(
        <div className="mt-5 flex justify-center gap-2 items-center">
            <Card  className="w-1/2 h-18 dark:bg-slate-700 ">
                <CardHeader>
                     <CardTitle className={completed ? 'line-through decoration-red-400 decoration-3' : ''}>{title}</CardTitle>
                </CardHeader>
            </Card>
            <div className="flex items-center gap-2">
                <Button onClick={()=>onToggle(id)}>{completed ? "Undo" : "Done"}</Button>
                <Button className="size-6 hover:cursor-pointer" onClick={()=>onDelete(id)}><DeleteIcon/></Button>
            </div>
        </div>
    )
}
export default Tasks;