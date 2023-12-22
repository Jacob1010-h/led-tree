'use client'

import { setData } from "@/pages/api/hello";
import { useState } from "react";

const OnOffButton = () => {
    const [isOn, setIsOn] = useState(false);

    // update the value on component render
    setData('inputs/toggle', isOn)
    
    const toggleLights = () => {
        setIsOn(!isOn);
        setData('inputs/toggle', !isOn)
    };

    return(
        <div className="flex justify-center content-center">
            <button
                className={`${
                    isOn ? "bg-green-500" : "bg-red-500"
                } text-white font-bold m-10 text-center py-2 px-4 rounded-full w-5/6`}
                onClick={toggleLights}
            >
                {isOn ? "ON" : "OFF"}
            </button>
        </div>
    )
}

export default OnOffButton