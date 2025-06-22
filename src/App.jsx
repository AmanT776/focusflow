import {Routes,Route} from 'react-router-dom'
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import Timer from "./components/Timer";
import TaskManager from "./components/TaskManager";
import Quotes from './components/Quote';
function App(){
    return(
         <div className="h-screen overflow-hidden">
              <NavBar/>
              <div className="flex h-full ">
                <Sidebar/>
                <main className="
                w-full  bg-teal-50 dark:bg-slate-950">
                    <Routes>
                      <Route path="/" element={<Timer/>}/>
                      <Route path="/tasks" element={<TaskManager/>}/>
                      <Route path='/quotes' element={<Quotes/>}/>
                    </Routes>
                </main>
              </div>
         </div>
    )
}
export default App;