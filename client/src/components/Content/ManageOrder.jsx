import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DisplayMenuModal } from '../Modal/Home/DisplayMenuModal';
import { DisplayMenuModalDineIn } from '../Modal/Home/DisplayMenuModal';
import { TakeAwayTable } from './Table/TakeAwayTable';
import { DineInTable } from '../Content/Table/DineInTable';

export const ManageOrder = () => {
    const [takeAwayOrders, setTakeAwayOrders] = useState([]);
    const [dineInOrders, setDineInOrders] = useState([]);
    const [showListPesanan, setShowListPesanan] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Take Away");
    const [orderDetails, setOrderDetails] = useState([]);

    useEffect(() => {
        if (selectedOption === "Take Away") {
            axios.get('http://localhost:3060/api/v1/data-orders')
                .then(response => {
                    console.log('Fetched takeaway orders:', response.data);
                    setTakeAwayOrders(Array.isArray(response.data) ? response.data : []);
                })
                .catch(error => {
                    console.error('Error fetching takeaway orders:', error);
                    setTakeAwayOrders([]);
                });
        } else if (selectedOption === "Dine In") {
            axios.get('http://localhost:3060/api/v1/dinein-orders')
                .then(response => {
                    console.log('Fetched dine-in orders:', response.data);
                    setDineInOrders(Array.isArray(response.data) ? response.data : []);
                })
                .catch(error => {
                    console.error('Error fetching dine-in orders:', error);
                    setDineInOrders([]);
                });
        }
    }, [selectedOption]);

    const handleShowMenuModal = (idPesanan) => {
        console.log('idPesanan:', idPesanan);
        if (idPesanan) {
            const endpoint = `http://localhost:3060/api/v1/data-orders/pesanan/${idPesanan}`;

            axios.get(endpoint)
                .then(response => {
                    if (response.status === 200) {
                        console.log('Order details:', response.data);
                        setOrderDetails(response.data);
                        setShowListPesanan(true);
                    } else {
                        console.error('Error fetching order details:', response.data.message);
                    }
                })
                .catch(error => {
                    console.error('Error fetching order details:', error);
                });
        } else {
            console.error('Invalid idPesanan:', idPesanan);
        }
    };

    const handleShowMenuModalDineIn = (details) => {
        console.log('details:', details);
        if (details) {
            setOrderDetails(details);
            setShowListPesanan(true);
        } else {
            console.error('Invalid details:', details);
        }
    };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleDeleteOrder = (idPesanan) => {
        axios.delete(``)
            .then(response => {
                if (response.data.status === 'success') {
                    if (selectedOption === "Take Away") {
                        setTakeAwayOrders(prevOrders => prevOrders.filter(order => order.idPesanan !== idPesanan));
                    } else {
                        setDineInOrders(prevOrders => prevOrders.filter(order => order.idPesanan !== idPesanan));
                    }
                } else {
                    console.error('Error deleting order:', response.data.message);
                }
            })
            .catch(error => {
                console.error('Error deleting order:', error);
            });
    };

    return (
        <div className="bg-white relative overflow-x-auto shadow-sm sm:rounded-lg mt-12 me-12 p-4">
            <div className="flex w-full">
                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Data Pesanan</h2>
                <select
                    name="orderType"
                    id="orderType"
                    className='border rounded-md bg-gray-50 p-2 ms-auto'
                    value={selectedOption}
                    onChange={handleOptionChange}
                >
                    <option value="Take Away">Take Away</option>
                    <option value="Dine In">Dine In</option>
                </select>
            </div>

            <div className="flex justify-between items-center mb-4 mt-4 ">
                {selectedOption === "Take Away" ? (
                    <TakeAwayTable orders={takeAwayOrders} handleShowMenuModal={handleShowMenuModal} handleDeleteOrder={handleDeleteOrder} />
                ) : (
                    <DineInTable
                        orders={dineInOrders}
                        handleShowMenuModal={handleShowMenuModalDineIn}
                        handleDeleteOrder={handleDeleteOrder}
                    />
                )}
            </div>

            {showListPesanan && (
                selectedOption === "Take Away" ? (
                    <DisplayMenuModal
                        setShowListPesanan={setShowListPesanan}
                        orderDetails={orderDetails}
                    />
                ) : (
                    <DisplayMenuModalDineIn
                        setShowListPesanan={setShowListPesanan}
                        orderDetails={orderDetails}
                    />
                )
            )}
        </div>
    );
};
