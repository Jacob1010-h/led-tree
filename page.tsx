'use client';
import Image from "next/image";``
import {useState} from "react";


export default function Home() {
    const [isOn, setIsOn] = useState(false);

    const toggleLights = () => {
        setIsOn(!isOn);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <div className="grid gap-4 content-center">
                <h1 className="text-4xl font-bold text-center">
                    Welcome to{" "}
                    <a
                        className="text-blue-600 dark:text-blue-400"
                    >
                        Lights LED Test!
                    </a>
                </h1>
                <button
                    className={`${
                        isOn ? "bg-green-500" : "bg-red-500"
                    } text-white font-bold mb-32 grid text-center py-2 px-4 rounded-full`}
                    onClick={toggleLights}
                >
                    {isOn ? "ON" : "OFF"}
                </button>
                <input
                    type="range"
                    className="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"
                />
            </div>
        </main>
    );
}
