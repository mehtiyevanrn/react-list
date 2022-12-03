import React, { useEffect, useState } from 'react';
import { dataGetir } from "./api"
import { Link } from "react-router-dom"

const List = () => {

    const [data, setData] = useState("")

    useEffect(() => {
        test()
    }, [])
    
    const test = async () => {
        let result = await dataGetir();
        setData(result)
    }

    return (
        <div>
            <div className='container pt-5'>
                <ul className="list-group mt-4">
                    {
                        data &&
                        data.map(item => {
                            return (
                                <li key={item.id} className="list-group-item"><Link to={`/detail/${item.completed}/${item.id}`}>{item.title}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
export default List