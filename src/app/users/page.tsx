import React from 'react';
import Link from "next/link";
import {getAllUsers} from "@/app/services/api.service";
import {IUser} from "@/app/models/IUser";

const Page = async () => {
    const users: IUser[] = await getAllUsers();
    return (
        <div>
            <ul>
                {users.map(user => (<li key={user.id}><Link href={`/users`}>{user.name}</Link></li>))}
            </ul>
        </div>
    );
};

export default Page;