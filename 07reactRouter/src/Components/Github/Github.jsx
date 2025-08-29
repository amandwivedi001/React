import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data, setdata] = useState({})
    // useEffect(() => {
    //     fetch("https://api.github.com/users/amandwivedi001")
    //     .then(res => res.json())
    //     .then(data => setdata(data))
    // }, [])
    return (
        <h1 className='text-white m-3 p-5 bg-gray-700 text-3xl'>Github followers: {data.followers}
        <img className='' src={data.avatar_url} alt="image of user" width={300}/>
        </h1>
    )
}

export default Github

export const githubInfoloader = async() => {
    const response = await fetch("https://api.github.com/users/amandwivedi001")
    return response.json()
}
