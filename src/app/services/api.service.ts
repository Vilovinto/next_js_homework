

const getAllUsers = async ():Promise<any[]> =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())

    return response
}

const getALlPosts = async ():Promise<any[]> =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())

    return response
}
const getALlComments = async ():Promise<any[]> =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())

    return response
}

export {getAllUsers, getALlPosts, getALlComments}