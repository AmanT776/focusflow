import { NavLink } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TaskIcon from '@mui/icons-material/Task';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function Sidebar() {
  return (
    <nav className="w-[200px] border border-gray-200 dark:bg-slate-950 dark:border-slate-800">
      <ul className="flex flex-col p-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-1.5 mb-3 w-full text-center rounded-sm hover:cursor-pointer hover:text-blue-600 hover:bg-teal-100 text-zinc-800 dark:text-zinc-300 ${
              isActive ? "bg-teal-200" : ""
            }`
          }
        >
          <li className="flex items-center justify-center gap-2">
            <AccessTimeIcon />
            Timer
          </li>
        </NavLink>

        <NavLink
          to="/tasks"
          className={({ isActive }) =>
            `p-1.5 mb-3 w-full text-center rounded-sm hover:cursor-pointer hover:text-blue-600 hover:bg-teal-100 text-zinc-800 dark:text-zinc-300 ${
              isActive ? "bg-teal-200" : ""
            }`
          }
        >
          <li className="flex items-center justify-center gap-2">
            <TaskIcon />
            Tasks
          </li>
        </NavLink>

        <NavLink
          to="/quotes"
          className={({ isActive }) =>
            `p-1.5 mb-3 w-full text-center rounded-sm hover:cursor-pointer hover:text-blue-600 hover:bg-teal-100 text-zinc-800 dark:text-zinc-300 ${
              isActive ? "bg-teal-200" : ""
            }`
          }
        >
          <li className="flex items-center justify-center gap-2">
            <FormatQuoteIcon />
            Quotes
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Sidebar;
