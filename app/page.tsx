'use client';

import RangeSlider from "../components/BrightnessSlider";
import OnOffButton from "@/components/OnOffButton";
import Dropdown from "@/components/AnimationSelector";
import MyColorPicker from "@/components/ColorPicker";

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-center overflow-auto h-full">
            <div className="grid grid-cols-1 gap-5">
                <h1 className="text-4xl  font-bold text-center">
                    Welcome to{" "}
                    <a
                        className="text-blue-600 dark:text-blue-400"
                    >
                        Lights LED Test!
                    </a>
                </h1>
                <OnOffButton/>
                <RangeSlider/>
                <Dropdown/>
                <MyColorPicker/>
            </div>
        </main>
    );
}
