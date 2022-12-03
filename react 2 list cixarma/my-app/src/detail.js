import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { GetirDetail } from './api'

const Detail = () => {

    const { slug, id } = useParams()
    const [detal, setDetal] = useState("")

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => response.json())
    //     .then(json => console.log(json))
    // },[])


    useEffect(() => {
        test()
    })
    const test = async () => {
        let result = await GetirDetail(id);
        setDetal(result)
    }

    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item">{detal.id}</li>
                <li className="list-group-item">{detal.title}</li>
                <li className="list-group-item">{detal.userId}</li>
                <li className="list-group-item">{`${detal.completed}`}</li>
            </ul>
        </div>
    )
}
export default Detail