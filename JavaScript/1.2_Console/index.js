const superVar = "I am a Super Variable";

console.log(superVar);
console.info(superVar);
console.warn(superVar);
console.error(superVar);
console.debug(superVar);

console.log("%c Super Var", "color: white; background-color: blue;", "wow, it's a super variable!");

const a = 10;

console.log({ a }); // {a: 10}

const objArray = [
    {
        id: 1,
        title: "One",
    },
    {
        id: 2,
        title: "Two",
    },
    {
        id: 3,
        title: "Three",
    }
];

console.table(objArray);

console.group("Objects group");
console.table(objArray);
console.groupEnd();

let i = 0;

console.time("Функция выполняется: ");
while(i < 10000000) {
    i++;
}
console.timeEnd("Функция выполняется: ");