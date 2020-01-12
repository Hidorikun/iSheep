export class Company {
    id?: string;
    name: string;
    email: string; 
    username: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;

    constructor(name: string) {
        this.name = name;
    }
}
