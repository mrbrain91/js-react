console.log(NaN || 2 || undefined); //

console.log(NaN && 2 && undefined); // javob: NaN; VA operatori agar bitta false bolsa birinchi falseni qaytaradi

console.log(1 && 2 && 3); // javob 3  xammasi true bolsa oxirgi truni qaytaradi

console.log(!1 && 2 || !3); // false

console.log(25 || null && !3); // true

console.log(NaN || null || !3 || undefined || 5); // 5

console.log(NaN || null && !3 && undefined || 5); // 5

console.log(5 === 5 && 3 > 1 || 5); // true



// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//     console.log('Done!');
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }