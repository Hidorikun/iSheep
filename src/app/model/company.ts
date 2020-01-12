export class Company {
    id: string;
    name: string;
    username: string;
    password: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;

    constructor(name: string) {
        this.name = name;
    }
}
