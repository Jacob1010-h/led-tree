import type { NextApiRequest, NextApiResponse } from "next";
import { set, ref, query, onValue } from "firebase/database";
import { db } from "../../firebase/initFirebase";

export function setData(path: string, value: any) {
    set(ref(db, path), value);
}

/**
 * @param path Some valid params of this may be: "inputs"
 * @returns the JSON data of all of the data in the path
 */
export async function getData(path = "/") {
    let data
    await onValue(ref(db, path),
        (snapshot) => {
            data = snapshot.val()
            console.log(snapshot.val());
        },
        (errorObject) => {
            console.log("The read failed: " + errorObject.name);
        }
    );
    return data
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = await getData()
    res.status(200).json(data);
}
