import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { setData } from "@/pages/api/hello";

const people = [
    {
        id: 1,
        name: "Rainbow",
    },
    {
        id: 2,
        name: "Cycle",
    },
    {
        id: 3,
        name: "Bounce",
    },
    {
        id: 4,
        name: "Rainbow Cycle",
    },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

const Dropdown = () => {
    const [selected, setSelected] = useState(people[3]);

    setData("inputs/menu", selected.name);

    const menuChange = (event: any) => {
        setSelected({
            id: event.id,
            name: event.name,
        });
        setData("inputs/menu", selected.name);
    };

    return (
        <div className="">
            <Listbox value={selected} onChange={menuChange}>
                {({ open }) => (
                    <>
                        <Listbox.Label className="block text-sm font-medium leading-6 text-white">
                            Selected Animation:
                        </Listbox.Label>
                        <div className="relative mt-2">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-black/20 shadow-lg py-1 shadow-lg ring-1 ring-black ring-opacity-5 py-1.5 pl-3 pr-10 text-left text-white shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 sm:text-sm sm:leading-6">
                                <span className="flex items-center">
                                    <span className="ml-3 block truncate">
                                        {selected.name}
                                    </span>
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                    <ChevronUpDownIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>

                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md isolate aspect-auto bg-white/10 shadow-lg py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {people.map((person) => (
                                        <Listbox.Option
                                            key={person.id}
                                            className={({ active }) =>
                                                classNames(
                                                    active
                                                        ? "bg-blue-500 text-white"
                                                        : "text-slate-200",
                                                    "relative cursor-default select-none py-2 pl-3 pr-9"
                                                )
                                            }
                                            value={person}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <div className="flex items-center">
                                                        <span
                                                            className={classNames(
                                                                selected
                                                                    ? "font-semibold"
                                                                    : "font-normal",
                                                                "ml-3 block truncate"
                                                            )}
                                                        >
                                                            {person.name}
                                                        </span>
                                                    </div>

                                                    {selected ? (
                                                        <span
                                                            className={classNames(
                                                                active
                                                                    ? "text-white"
                                                                    : "text-slate-200",
                                                                "absolute inset-y-0 right-0 flex items-center pr-4"
                                                            )}
                                                        >
                                                            <CheckIcon
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </>
                )}
            </Listbox>
        </div>
    );
};

export default Dropdown;
