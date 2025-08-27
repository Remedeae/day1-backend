interface Contact {
    id: number;
    name: string;
    email?: string;
    phone?: string;
    tags?: string[]; // e.g. ['family','work'] 
};

let contactBook: Contact[] = []
let contact1: Contact = {
    id: 23,
    name: "Lars-Ingvar",
    email: "ingan@hemvarnet.se",
    phone: "78754",
};
let contact2: Contact = {
    id: 5,
    name: "Cat",
    phone: "889",
};
let contact3: Contact = {
    id: 7,
    name: "Signe Monica Rosaline Margret Hellman Sinclair",
    email: "rosaline@hemnet.dk",
    tags: ["mom"],
};

const addContact = (contact: Contact): void => {
    contactBook.push(contact);
};

addContact(contact1);
addContact(contact2);
addContact(contact3);

const listContacts = (): void => {
    console.log(contactBook);
};

//listContacts();

const findByName = (name: string) => {
    let contactInfo : Contact[] = contactBook.filter(c => c.name === name);
    let search: string[] = contactInfo.map(c => c.name);
    search[0] === name ? console.log(contactInfo) : console.log("Unknown user");
};

findByName("Si");

const removeById = (id: number) => {
    let newContactBook : Contact[] = contactBook.filter(c => c.id !== id);
    if (newContactBook !== contactBook) {
         contactBook = newContactBook
        };
    console.log(contactBook);
};

//removeById(1);
