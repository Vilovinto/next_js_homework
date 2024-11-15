import React from 'react';

type Params = {id: number}

const CommentPage = async ({params}: { params: Params }) => {
    const comment = await fetch('https://jsonplaceholder.typicode.com/comments/' + params.id).then(res => res.json());

    return (
        <div>
            {JSON.stringify(comment)}
        </div>
    );
};

export default CommentPage;