setTimeout(() => console.log('timeout'));

Promise.resolve()
    .then(() => console.log('propmise'));

queueMicrotask(() => console.log('wow'));

Promise.resolve()
    .then(() => console.log('propmise_2'));

console.log('code');


// () => {}
// microtasks: then/cathc/finally/await
//render
// () => {}
// microtasks: then/cathc/finally/await
//render
// () => {}