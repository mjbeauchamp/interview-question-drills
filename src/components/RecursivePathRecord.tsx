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
  [key: string]: number | boolean | string | NestedObject | Array<string | number | boolean | NestedObject>;
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

// // PART 2
// When processing the input, if you encounter an array:
// Flatten Objects within the Array
// If an array contains only primitive values, the output for that key should be the original array.

// Input
const input2 = {
  user: {
    name: "Sam",
    metadata: [{"is_admin": true }, true, "admin"]
  }
}

// Expected Output
// {
//   "user.name": "Sam",
//   "user.metadata.is_admin: true,
//   "user.metadata": [true, "admin"]
// }

// Input
const input3 = {
  "user": {
    "name": "Sam",
    "roles": ["admin", "editor"]
  }
}

// Output
// {
//   "user.name": "Sam",
//   "user.roles": ["admin", "editor"],
// }

// Input
const input4 = {
  "data": [
    10,
    { "id": 123, "tags": ["red", "blue"] },
    true
  ]
}

// Output
// {
//   "data": [10, true],
//   "data.id": 123,
//   "data.tags": ["red", "blue"],
// }






//  WRITE YOUR getValuePaths CODE HERE!!!!


function getValuePaths() {

}



export default function RecursivePathRecord() {
    useEffect(() => {


        // UNCOMMENT TO TEST
    //    const flattenedObject =  getValuePaths(input);
       

    //    console.log(flattenedObject);
    //    console.log(getValuePaths(input2))
    //           console.log(getValuePaths(input3))

    //                  console.log(getValuePaths(input4))

    //    console.log(getValuePaths({}))


    }, [])

    return (
        <>
        
        </>
    )
}