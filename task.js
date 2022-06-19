function compareArrays(arr1, arr2) {
    let result;
    if (arr1.length === arr2.length && arr1.every((elemArr1, elemArr2) => elemArr1 === arr2[elemArr2])) {
        result = true;
    } else {
        result = false;
    }
    return result; // boolean
}

function advancedFilter(arr) {
    let resultArr = arr.filter(val => val > 0 && val % 3 === 0).map(val => val * 10);
    return resultArr; // array
}