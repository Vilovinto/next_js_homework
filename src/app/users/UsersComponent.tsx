import React from 'react';
import Link from "next/link";
import {getAllUsers} from "@/app/services/api.service";

const UsersComponent = async () => {
    const users = await getAllUsers();
    return (
        <div>
            <ul>
            {users.map(user =><li key={user.id}>{user.id} -
                <Link href={{pathname:'/users/'+user.id,query:{data:JSON.stringify(user)}}}> {user.name}</Link>
            </li>)}
            </ul>
        </div>
    );
};

export default UsersComponent;