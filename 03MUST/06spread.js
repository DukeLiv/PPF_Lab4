const languages = ['javescript', 'c++', 'python', 'java'];
const dsl = ['SQL', 'HTML', 'CSS', 'NoSQL'];

const allLanguages = [...languages, ...dsl];

console.log(languages);
console.log(dsl);
console.log(allLanguages);

const courseDataForYear = {
    name: 'Projektowanie i programowanie front-end',
    shortcut: 'PPFront',
    year: '2',
    content: {
        rok_rozpoczęcia: 2021,
        rok_zakończenia: 2022
    }
}