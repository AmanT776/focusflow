import DarkModeIcon  from '@mui/icons-material/DarkMode';
import WbSunnyIcon  from '@mui/icons-material/WbSunny';
import { useTheme } from '@/context/ThemeContext';
function NavBar(){
    const {theme,toggleTheme} = useTheme()
    return(
            <div className={`flex justify-between gap-2 p-5  dark:bg-slate-950 border-1 border-gray-200 dark:border-slate-800`}>
                <h1 className='text-teal-400 text-xl '>FocusFlow</h1>
                <span className='hover:cursor-pointer' onClick={toggleTheme}>{theme ==='dark' ? <WbSunnyIcon/>:<DarkModeIcon/>}</span>
            </div>
    )
}
export default NavBar