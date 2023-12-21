import type { NextApiRequest, NextApiResponse } from "next";
import { get, set, ref, query, onValue } from "firebase/database";
import { db } from "../../firebase/initFirebase";

type ResponseData = {
    toggle: boolean;
    slider: number;
};

export function setData(path : string, value : any){
    set(ref(db, path), value);
}

/**
 * @param path Some valid params of this may be: "inputs"
 * @returns the JSON data of all of the data in the path
 */
export function getData(path = "/"){
    let data; // Declare the 'data' variable
    const rawData = query(ref(db, path));
    onValue(rawData, snapshot => {
        data = snapshot.toJSON()
    });
    return data;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json(
        getData('inputs')
    );
}
