import React, { useState, useEffect } from 'react'
import '../App.css';
import '../components/Datatables.css';
import { Button } from './Button';
import $ from 'jquery';
import DataTable from 'datatables';
import axios from 'axios'



function Datatable() {

    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios.get('./data.json')
            .then(response => {
                console.log(response)
                setInfo(response.data.data)
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    })

    $(document).ready(function () {
        $("#table").DataTable();      
        $(".dataTables_empty").empty();
    });



    return (
        <div className="border shadow-lg" style={{ backgroundColor: 'rgba(150,150,150,0.8)', padding: 15 }}>


            <table id="table" style={{ color: 'black' }} className="display bg-dark">
                <thead style={{ color: 'white' }} >
                    <tr>
                        <th>Purchase Date</th>
                        <th>Sale Date</th>
                        <th>Number of Shares</th>
                        <th>Balance Shares Available</th>
                        <th>Price Per Share</th>
                        <th>Net Purchase Sale Price</th>
                        <th>Total Cost of Shares</th>
                        <th>Cost Per Share</th>
                        <th>Sale Cost including Brokerage</th>
                    </tr>
                </thead>

            
                <tbody>{info.map(info =><tr>
            
                        <td>{info.purchase_date}</td>
                        <td>{info.sale_date}</td>
                        <td>{info.num_shares}</td>
                        <td>{info.num_shares}</td>
                        <td>{info.share_price}</td>
                        <td>{info.share_price * 1.09} </td>
                        <td>{info.share_price * info.num_shares}</td>
                        <td>{info.share_price}</td>
                        <td>{info.share_price}</td>
                    </tr>
)}
                </tbody>

            </table>
            
        </div>
    )
}

export default Datatable
