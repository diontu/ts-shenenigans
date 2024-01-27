type Person = {
    name: string;
    id: string;
};

const printPersonInfo = (person: Person) => {
    console.log(person.name);
    console.log(person.id);
};

printPersonInfo({
    name: "dion",
    id: "id",
});
