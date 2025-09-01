const contact1: Contact = {
    id: 23,
    name: "Lars-Ingvar",
    email: "ingan@hemvarnet.se",
    phone: "78754",
};
let contact2: Contact = {
    id: 5,
    name: "Cat",
    email: "nyan@nekoneko.com",
    phone: "889",
};
let contact3: Contact = {
    id: 7,
    name: "Signe Monica Rosaline Margret Hellman Sinclair",
    email: "rosaline@hemnet.dk",
    tags: ["mom"],
};

let contact4: Contact = {
    id: 99,
    name: "Catniss Mondios",
    phone: "9904484823",
    tags: ["neighbour", "the Mondios", "work"]
}

interface Contact {
    id: number;
    name: string;
    email?: string;
    phone?: string;
    tags?: string[];
};

let contactBook: Contact[] = []

const addContact = (contact: Contact): void => {
    contact.email !== undefined && !contact.email.includes("@") ? console.log("Email requires an @ to be valid, please try again."):  
    contact.phone !==undefined && isNaN(Number(contact.phone)) ? console.log("Phone must only contain digits.") : 
    contactBook.push(contact);
};

addContact(contact1);
addContact(contact2);
addContact(contact3);
addContact(contact4);


const listContacts = (): void => {
    console.log(contactBook);
};

//listContacts();

const findByName = (search: string) => {
    const contactInfo : Contact[] = contactBook.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
    contactInfo.length !== 0 ? console.log(contactInfo) : console.log("Unknown user");
};

//findByName("Sinc");

const removeById = (id: number) => {
    let filterContactBook : Contact[] = contactBook.filter(c => c.id !== id);
    if (filterContactBook !== contactBook) {
         contactBook = filterContactBook
        };
    console.log(contactBook);
};

//removeById(7);

const search = (term : string)  => {
    const searchOutput = contactBook.filter(c=> c.name.toLowerCase().includes(term.toLowerCase()) ||
    (c.email && c.email.toLowerCase().includes(term.toLowerCase()))||
    (c.phone && c.phone.includes(term))
);
    console.log(searchOutput);
}

// search("k");

const updateContact = (id: number , patch :Partial<Contact> ) => {
    const objectByID = contactBook.filter(c => c.id === id);
    const updateContact = objectByID.map(o => ({...o, ...patch
    }));
    console.log(updateContact);
}

//updateContact(99, {phone:"22"});