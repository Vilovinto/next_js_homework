import {IAddress} from "@/app/models/IAddress";

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: string;
    website: string;
    company: Company;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}