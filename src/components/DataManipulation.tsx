import { useEffect, useState } from "react"

const classEnrollments = [
 ["58", "Linear Algebra"],
 ["94", "Art History"],
 ["94", "Operating Systems"],
 ["17", "Software Design"],
 ["58", "Mechanics"],
 ["58", "Economics"],
 ["17", "Linear Algebra"],
 ["17", "Political Science"],
 ["94", "Economics"],
 ["25", "Economics"],
 ["58", "Software Design"],
]

// Expect getStudentSharedClasses output (doesn't have to be this exact format, but something like this): 

// {
//     "58,17": ["Software Design", "Linear Algebra"]
//      "58,94": ["Economics"]
//      "58,25": ["Economics"]
//      "94,25": ["Economics"]
//      "17,94": []
//      "17,25": []
// }
const getStudentSharedClasses = (enrollments: Array<Array<string>>) => {
    

    // WRITE YOUR CODE HERE!!!!!







}

export default function DataManipulation() {
    useEffect(() => {
        getStudentSharedClasses(classEnrollments);
    }, [])

    return (
        <>
        </>
    )
}