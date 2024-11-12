import React, {FC} from 'react';
import Link from "next/link";
import {IUser} from "@/app/models/IUser";

const UsersComponent: FC<IUser> = ({users}) => {
    return (
        <div>
            <Link href={'/users/' + users.id}>{users.name}</Link>
        </div>
    );
};

export default UsersComponent;