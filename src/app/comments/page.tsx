import React from 'react';
import Link from "next/link";
import {IComment} from "@/app/models/IComment";

const Page = async () => {
    const comments: IComment[] = await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())

    return (
        <div>
            <ul>
                {comments.map(comment => (<li key={comment.id}><Link href={`/comments/${comment.id}`}>{comment.name}</Link></li>))}
            </ul>
        </div>
    );
};

export default Page;