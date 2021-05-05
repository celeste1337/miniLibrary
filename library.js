//
//
// mini library by celeste y
//
//

const mini = {
    pipe: (func1) => (func2) => {
        return func2(func1())
    },
    array: {
        map: (arr) => (f) => {
            return arr.map(f);
        },
        filter: (arr) => (m) => {
            return arr.filter(m);
        }
    },
    string: {},
    debug: {},
}

export { mini }