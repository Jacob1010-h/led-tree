import { setData } from "@/pages/api/lights";
import { useState } from "react";
import { ChromePicker } from "react-color";

const MyColorPicker = () => {
    const [currentColor, setColor] = useState({
        hex: "#54E3FF",
        hsl: {
            a: 1,
            h: 190,
            s: 100,
            l: 67
        },
        hsv: {
            a: "1",
            h: "190",
            s: "67",
            v: "1"
        },
        rgb: {
            r: "84",
            g: "227",
            b: "255"
        }           
    });

    setData("inputs/color", currentColor);

    const colorChange = (color: any, event: any) => {
        setColor({
            hex: color.hex,
            hsl: color.hsl,
            hsv: color.hsv,
            rgb: color.rgb            
        });
        setData("inputs/color", {
            hex: color.hex,
            hsl: color.hsl,
            hsv: color.hsv,
            rgb: color.rgb            
        });
    };

    return (
        <div className="flex justify-center content-center">
            <ChromePicker color={currentColor.hex} onChange={colorChange} />
        </div>
    );
};

export default MyColorPicker;
