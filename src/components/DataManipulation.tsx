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
    const studentClassLists: { [key: string]: string[] } = {};

    enrollments.forEach(enrollment => {
        const [studentId, courseName] = enrollment;
        
        if (studentClassLists[studentId]) {
            studentClassLists[studentId].push(courseName)
        } else {
            studentClassLists[studentId] = [courseName]
        }
    })

    const studentIds = Object.keys(studentClassLists);

    const studentSharedClasses: {[key: string]: Array<string>} = {}

    for (let i = 0; i < studentIds.length; i++) {
        const studentId = studentIds[i];
        for (let j = i + 1; j < studentIds.length; j++ ) {
            const comparisonStudentId = studentIds[j];

            studentSharedClasses[`${studentId}-${comparisonStudentId}`] = studentClassLists[studentId].filter(courseName => {
                return studentClassLists[comparisonStudentId].includes(courseName);
            })
        }
    }


    console.log('STUDENT IDs', studentIds)

    return studentSharedClasses;
}

export default function DataManipulation() {
    const [studentSharedClasses, setStudentSharedClasses] = useState({});

    useEffect(() => {
        const sharedClasses = getStudentSharedClasses(classEnrollments);
        console.log('SHARED:', sharedClasses)
        setStudentSharedClasses(sharedClasses);
    }, [])

    const displayedMatches = [];

    for (let key in studentSharedClasses) {
        console.log(key)
        displayedMatches.push(
            <li>
                <span>{key}</span>
                <span>{studentSharedClasses[key].map((course: string) => course)}</span>
            </li>
        )
    }

    console.log(displayedMatches)


    

    // const sharedClassesByStudentMatch

    return (
        <>
            <h1>SHARED CLASS MATCHES:</h1>
            <ul>
                {
                    displayedMatches
                }
            </ul>
        </>
    )
}