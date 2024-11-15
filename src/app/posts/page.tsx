import React from 'react';
import Link from "next/link";
import {IPost} from "@/app/models/IPost";

const Page = async () => {
    const posts: IPost[] = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())

    return (
        <div>
            <ul>
                {posts.map(post => (<li key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li>))}
            </ul>
        </div>
    );
};

export default Page;