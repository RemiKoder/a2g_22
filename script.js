// setTimeout(
//     function () {
//         console.log("Done loading")
//     },
//     10000
// )

// function delay(ms) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, ms)
//     })
// }

// async function timeout () {
//     console.log("Somethings gonna happen")
//     await delay (10000)
//     console.log("Something happend!")
// }

// timeout()

// 
// 

const myCatFacts = ["Cats = Good", "Cats = Cute", "Cats = Clumsy"];

console.log(myCatFacts[0]);

for (let index = 0; index < myCatFacts.length; index++) {
    console.log(myCatFacts[index]);
};

async function getApiData () {
    // A variable that is waiting for a response from the URL-adress.
    const response = await fetch("https://catfact.ninja/facts");
    console.log(response);

    // A variable that is waiting fr the response to readable.
    const data = await response.json();
    console.log(data)
    console.log(data.data)
    console.log(data.data[3])
    console.log(data.data[3].fact);

    const catFact = data.data;

    for (let index = 0; index < catFact.length; index++) {
        console.log(catFact[index].fact);

    const p = document.createElement("p");
    p.textContent = catFact[index].fact;

    const main = document.querySelector("main");
    main.appendChild(p)
    };
}

getApiData();