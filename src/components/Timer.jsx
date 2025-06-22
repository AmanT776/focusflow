import { Button } from "./ui/button";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseIcon from '@mui/icons-material/Pause';
import ReplayIcon from '@mui/icons-material/Replay';
import { useRef, useEffect, useState } from "react";

export default function Timer() {
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isPlaying, setIsPlaying] = useState(false);
    const intervalRef = useRef(null);
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    useEffect(()=>{
        if(!isPlaying) return;
        intervalRef.current = setInterval(()=>{
            setTimeLeft((prev)=>{
                if(prev<=1){
                    clearInterval(intervalRef.current)
                    setIsPlaying(false)
                }
                return prev-1                
            })
        },1000)
        return ()=>clearInterval(intervalRef.current)
    },[isPlaying])
    const toggleTimer =()=>{
        setIsPlaying(prev=>!prev)
    }
    const resetTimer = () =>{
        clearInterval(intervalRef.current)
        setIsPlaying(false)
        setTimeLeft(25*60)
    }
    return (
        <div className="max-sm:size-50 max-sm:translate-x-5 max-sm:translate-y-10 text-center">
            <h1 className="text-2xl font-bold mb-4">Focus Session</h1>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex justify-center items-center mb-6">
                    <h1 className="
                    text-5xl font-mono font-bold
                    max-sm:text-lg">
                        {String(minutes).padStart(2, "0")}:
                        {String(seconds).padStart(2, "0")}
                    </h1>
                </div>
                <div className="flex justify-center space-x-4">
                    <Button 
                        onClick={toggleTimer} 
                        size='lg' 
                        className="
                        rounded-full bg-cyan-500 hover:bg-cyan-600
                        max-sm:w-1/4 max-sm:h-1/4
                        "
                    >
                        {isPlaying ? (
                            <PauseIcon className="text-white" />
                        ) : (
                            <PlayCircleFilledWhiteIcon className="text-white"  />
                        )}
                    </Button>
                    <Button 
                        onClick={resetTimer} 
                        size='lg' 
                        className="
                        rounded-full bg-cyan-500 hover:bg-cyan-600
                        max-sm:w-1/4 max-sm:h-1/4
                        "
                    >
                        <ReplayIcon className="text-white" />
                    </Button>
                </div>
            </div>
        </div>
    );
}