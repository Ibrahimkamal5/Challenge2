function MinimumValue(arr) {
    if (arr.length === 0) return undefined; // التعامل مع المصفوفة الفارغة

    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}
console.log(MinimumValue([3, 5, 1, 8, -2])); // Output: -2