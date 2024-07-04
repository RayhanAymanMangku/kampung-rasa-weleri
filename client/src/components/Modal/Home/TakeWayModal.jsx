import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IconButton } from '@material-ui/core';
import { MenuListModal } from './MenuModal';
import './TakeAwayModal.css';

export const TakeWayModal = ({ setShowTakeWay }) => {
    const [namaCustomer, setNamaCustomer] = useState('');
    const [kontakCustomer, setKontakCustomer] = useState('');
    const [showMenuList, setShowMenuList] = useState(false);
    const [idCustomer, setIdCustomer] = useState('');

    useEffect(() => {
        const customerData = localStorage.getItem("customer");
        if (customerData) {
            const parsedCustomerData = JSON.parse(customerData);
            setNamaCustomer(parsedCustomerData.namaCustomer);
            setKontakCustomer(parsedCustomerData.kontakCustomer);
            setIdCustomer(parsedCustomerData.idCustomer);
        }
    }, []);

    const handleCloseTakeWay = () => {
        setShowTakeWay(false);
    }

    const handleLanjutClick = async () => {
        const url = "http://localhost:3060/api/v1/data-customer";
        const requestData = {
            namaCustomer: namaCustomer,
            kontakCustomer: kontakCustomer,
            action: "add_customer",
        };

        try {
            const response = await axios.post(url, requestData);
            console.log("Response from server:", response.data);

            const customerFromResponse = response.data;
            const idCustomerFromResponse = customerFromResponse.idCustomer;
            if (idCustomerFromResponse) {
                setIdCustomer(idCustomerFromResponse);

                const customerData = {
                    idCustomer: idCustomerFromResponse,
                    namaCustomer: namaCustomer,
                    kontakCustomer: kontakCustomer,
                };
                localStorage.setItem("customer", JSON.stringify(customerData));

                setShowMenuList(true);
                console.log("setShowMenuList is set to true");
            } else {
                console.error("idCustomer not found in response");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        console.log("showMenuList state changed:", showMenuList);
    }, [showMenuList]);

    return (
        <div className="modal fixed w-full h-full top-0 left-0 flex flex-col items-center justify-center overflow-y-auto p-4 z-50">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
            <div className="modal-container bg-white w-96 md:w-2/3 mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 px-6">
                    <div className="flex justify-between items-center">
                        <p className="text-2xl font-bold">Take Away</p>
                        <IconButton onClick={handleCloseTakeWay} className="modal-close cursor-pointer z-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </IconButton>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <label htmlFor="#" className='text-gray-600'>Isi form pemesan</label>
                        <input
                            type="text"
                            placeholder="Nama Pemesan"
                            className="border border-gray-300 rounded-sm p-2"
                            value={namaCustomer}
                            onChange={(e) => setNamaCustomer(e.target.value)}
                            name='namaCustomer'
                        />
                        <input
                            type="text"
                            placeholder="Telepon"
                            className="border border-gray-300 rounded-sm p-2"
                            value={kontakCustomer}
                            onChange={(e) => setKontakCustomer(e.target.value)}
                            name='kontakCustomer'
                        />
                    </div>
                    <div className="flex justify-end mt-4">
                        <button className="bg-gray-900 text-white py-2 font-extralight px-4 rounded-sm w-full" onClick={handleLanjutClick}>
                            Lanjut
                        </button>
                    </div>
                </div>
            </div>
            {showMenuList && (
                <MenuListModal
                    idCustomer={idCustomer}
                    namaCustomer={namaCustomer}
                    kontakCustomer={kontakCustomer}
                    setShowMenuList={setShowMenuList}
                />
            )}
        </div>
    );
};