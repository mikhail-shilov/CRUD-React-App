import React from 'react';

function Test(props) {

    const dataSet = {
        as: 'ffff',
        ft: 4,
        f3: 4,
        RT: false,
        fyy: 'eeewfgwg',
        ryy: 'eet11111fgwg',
        r4yy: 'sfаппываы',
        tgg: 'true',
        fl: 67
    };

    let listOfKeys = Object.keys(dataSet);
    console.log(listOfKeys);

    let newArray = {};

 /*   newArray = listOfKeys.reduce((accumulator, currentValue, index) => {

        if (typeof dataSet[currentValue] === "string") {
            let elem = {};
            elem[currentValue] = dataSet[currentValue];
            accumulator = {...accumulator, ...elem};
        }
        return accumulator;

    }, newArray);
*/
    newArray = Object.keys(dataSet).reduce((accumulator, currentValue, index) => {

        if (typeof dataSet[currentValue] === "string") {
            accumulator[currentValue] = dataSet[currentValue];
        }
        return accumulator;

    }, newArray);

    console.log('Output:');
    console.log(newArray);


    return (
        <span>{listOfKeys}</span>
    );
}

export default Test;
