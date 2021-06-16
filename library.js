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
        separateByString: ([...arr]) => (str) => {
            let buildArr = [
                arr.filter((item) => item.includes(str)),
                arr.filter((item) => !item.includes(str))
            ];

            return buildArr;
        },
        union: (arr1) => (arr2) => {
            return Array.from(new Set([...arr1, ...arr2]))
        },
    },
    debug: {
        type: (item1) => {
            return typeof item1
        },
        compareType: (item1) => (item2) => {
            return typeof item1 === typeof item2
        },
        tap: (f) => (x) => {
            f(x);
            return x;
        },
    },
}

export { mini }