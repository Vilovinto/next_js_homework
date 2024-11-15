import React from 'react';

type Params = {id: number}

const PostPage = async ({params}: { params: Params }) => {
    const post = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id).then(res => res.json());

    return (
        <div>
            {JSON.stringify(post)}
        </div>
    );
};

export default PostPage;