import { setData } from "@/pages/api/hello";
import { useState } from "react";

const RangeSlider = () => {
    const [rangeVal, setRangeval] = useState<number>(50)

    // update the values on component render
    setData('inputs/slider', rangeVal)

    const sliderChange = (event: { target: { value: any; }; }) => {
        setRangeval(event.target.value)
        setData('inputs/slider', rangeVal)
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