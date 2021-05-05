//
//
// mini library by celeste y
//
//

const mini = {
    pipe: (func1, func2) => (x) => {
        return func2(func1(x))
    },
    array: {
        map: ([...arr]) => (f) => {
            return arr.map(f);
        },
        filter: ([...arr]) => (m) => {
            return arr.filter(m);
        },
        separateByString: ([...arr]) => (str, caseSensitive = false) => {
            let buildArr = [[],[]];
            let tempArr = [...arr]

            if(caseSensitive != true) {
                str = str.toUpperCase()
                arr = arr.map(item => item.toUpperCase())
            }
            //if the item includes the string, grab the matching item from the temporary array (bc otherwise itll return case insensitive data as all uppercase! which is bad!) and put it in the build array
            arr.map((item, iterator) => item.includes(str) ? buildArr[0].push(tempArr[iterator]) : buildArr[1].push(tempArr[iterator]));

            return buildArr;
        },
        combine: (arr1) => (arr2) => {
            return Array.from(new Set([...arr1, ...arr2]))
        }
    },
    debug: {},
}

export { mini }