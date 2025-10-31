import {useMemo} from 'react'

const nestedTarget = {
    a: 1,
    b: 2,
    c: {
        z: 7,
        y: 9,
        x: 12,
        w: {
            rawr: 234,
            boo: 432,
            asfasdf: {
                woo: 666
            }
        }
    },
    d: 6,
    e: {
        asfas: 4323,
        asfadf: {
            asfsd: 5
        },
        asdfasdf: 87,
        aaa: {
         boop: 666,
         hoooboy: {
            rawr: 666
         }
        }
        
    }
}

export default function RecursionDrills() {

    useMemo(() => {
        const recursiveFactorial = (num: number): any => {
            //Find the factorial of a given number (that number multiplied by every integer less than it and greater than 0)
         
        }
        // console.log(recursiveFactorial(5))

        const findTheValues = (): any => {
         
        }

        // console.log(findTheValues(nestedTarget, 666))




    }, [])


    return (
        <></>
    )
}