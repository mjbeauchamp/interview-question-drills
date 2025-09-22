// Input
// A variable depth object with a variety of values.

// Expected Output
// An object that shows key paths to values. Here are some examples:

// // Input
// const input = {
//  "a": {
//    "b": {
//      "c": 1,
//      "e": {
//        "f": 2
//      }
//    },
//    "g":  3
//  },
//  "d": "hello"
// }


// // Output
// { 'a.b.c': 1, 'a.b.e.f': 2, 'a.g': 3, d: 'hello' }


// Or you can have an empty object:
// // Input
// {}  

// // Output
// {}

import { useEffect } from "react"

type NestedObject = {
  [key: string]: number | string | NestedObject;
};

const input = {
    "a": {
        "b": {
            "c": 1,
            "e": {
                "f": 2
            }
        },
        "g":  3
    },
    "d": "hello"
}

const getValuePaths = (obj: NestedObject, keyPath = '', result: Record<string, any> = {}) => {
    for (let key in obj) {
        const newKeyPath: string = keyPath ? `${keyPath}.${key}` : key;
        const value = obj[key];

        if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
            getValuePaths(value, newKeyPath, result);
        } else {
            result[newKeyPath] = value;
        }
    }

    return result;
}

export default function RecursivePathRecord() {
    useEffect(() => {
       const flattenedObject =  getValuePaths(input);

       console.log(flattenedObject);
    }, [])

    return (
        <>
        
        </>
    )
}