import {IUser} from "@/app/models/IUser";


const getAllUsers = async ():Promise<IUser[]> =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())

    return response
}

const getALlPosts = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())

    return response
}
const getALlComments = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())

    return response
}

export {getAllUsers, getALlPosts, getALlComments}