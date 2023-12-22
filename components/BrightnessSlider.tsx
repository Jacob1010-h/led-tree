'use client'

import { setData } from "@/pages/api/lights";
import { useState } from "react";

const RangeSlider = () => {
    const [rangeVal, setRangeval] = useState<number>(50)

    // update the values on component render
    setData('inputs/brightness', rangeVal)

    const sliderChange = (event: { target: { value: any; }; }) => {
        setRangeval(event.target.value)
        setData('inputs/brightness', rangeVal)
    }

    return(
        <div>
            <input 
            type="range"
            className="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"
            onChange={sliderChange}
            />
        </div>
    )

};

export default RangeSlider;