import React, {useEffect, useState} from 'react'
import { Get } from '../../services/Get';
import './container.css'
import Table from '../table/Table';

function Container() {

    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const responseData = await Get.getAppData();
            if (responseData) {
            console.log('Received data:', responseData);
            setData(responseData)
            } else {
            console.log('No data received');
            }
        };

    fetchData();
    }, []);

    return (
        <div className='container'>
            <div className='table_row'></div>
            {data && data.slice(0, 30).map((item, index) => (
                <Table
                    key={item.id}
                    id={item.id}
                    symbol={item.symbol}
                    name={item.name}
                    index={index}
                />
            ))}
        </div>
    )
}

export default Container