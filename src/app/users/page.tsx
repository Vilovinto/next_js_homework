import React from 'react';
import Link from "next/link";
import {IUser} from "@/app/models/IUser";

const Page = async () => {
    const users: IUser[] = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())

    return (
        <div>
            <ul>
                {users.map(user => (<li key={user.id}><Link href={`/users/${user.id}`}>{user.name}</Link></li>))}
            </ul>
        </div>
    );
};

export default Page;