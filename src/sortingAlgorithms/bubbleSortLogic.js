export function getBubbleSortAnimations(array) {
    const animations = [];
    let isSorted = false;
    let counter = 0;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < array.length - 1 - counter; i++) {
            // // These are the values that we're comparing; we push them once
            // // to change their color.
            // animations.push([i, i+1]);

            // // These are the values that we're comparing; we push them once
            // // to change their color.
            // animations.push([i, i+1]);
            if (array[i] > array[i + 1]) {
                swap(i, i + 1, array, animations);
                isSorted = false;
            }
        }
        counter++;
    }
    return array;
}

function swap(i, j, array, animations) {
    const temp = array[j];
    // we overwrite the value at index j with value from array at index i
    // we overwrite the value at index i with value from array at index j
    animations.push([j, array[i]],[i, array[j]]);

    array[j] = array[i];
    array[i] = temp;
}
