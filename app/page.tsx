'use client';
import RangeSlider from "../components/RangeSlider";
import OnOffButton from "@/components/OnOffButton";

export default function Home() {

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
                <OnOffButton/>
                <RangeSlider/>
            </div>
        </main>
    );
}
