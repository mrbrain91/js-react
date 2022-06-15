const data = [{
        id: 'box',
        tag: 'div'
    },
    {
        id: 'asas',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: ''
    }
];

try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);

        if (!blockObj.id) throw new SyntaxError(`V dannx pod nomeram ${i + 1} net id`);


        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });


} catch (e) {

    if (err.name === "SyntaxError") {
        console.log(e.message);
    } else throw e;

    console.log(e.message);

}


// const err = new SyntaxError('asdasdas');

// console.log(err.name, err.message, err.stack);