import React from 'react';
import { IconButton } from '@material-ui/core';
import { CardMenuDisplayNav } from '../../Modal/Home/MenuModal';

export const DisplayMenuModal = ({ setShowListPesanan, orderDetails }) => {
    const handleCloseMenu = () => {
        setShowListPesanan(false);
    };

    return (
        <div className="modal fixed w-full h-[100vh] top-0 left-0 flex flex-col items-center justify-center border-none p-6">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" onClick={handleCloseMenu}></div>
            <div className="modal-container bg-white w-96 md:w-2/3 mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 px-6 ">
                    <div className="flex justify-between items-center">
                        <p className="text-xl font-bold text-gray-800">Detail Pesanan</p>
                        <IconButton onClick={handleCloseMenu} className="modal-close cursor-pointer z-50">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-x"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </IconButton>
                    </div>
                    <div className="flex w-full h-auto mt-4">
                        <div className="rounded-sm p-2 w-full">
                            <div className="flex flex-col items-center justify-center">
                                {orderDetails && orderDetails.length > 0 ? (
                                    orderDetails.map((detail, index) => (
                                        <div key={index} className="border-b border-gray-300 py-2 w-full">
                                            <p className="text-xl font-semibold text-gray-800">Nama Menu: {detail.namaMenu}</p>
                                            <p className="font-semibold text-gray-800 text-xl">Porsi: {detail.quantity}</p>
                                            <p className="font-semibold text-gray-800 text-xl">Total Harga: {detail.totalPrice}</p>
                                        </div>
                                    ))
                                ) : (
                                    <div>No details available</div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const DisplayMenuModalDineIn = ({ setShowListPesanan, orderDetails }) => {
    const handleCloseMenu = () => {
        setShowListPesanan(false);
    };

    return (
        <div className="modal fixed w-full h-[100vh] top-0 left-0 flex flex-col items-center justify-center border-none p-6">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" onClick={handleCloseMenu}></div>
            <div className="modal-container bg-white w-96 md:w-2/3 mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 px-6 ">
                    <div className="flex justify-between items-center">
                        <p className="text-xl font-bold text-gray-800">Detail Pesanan Dine In</p>
                        <IconButton onClick={handleCloseMenu} className="modal-close cursor-pointer z-50">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-x"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </IconButton>
                    </div>
                    <div className="flex w-full h-auto mt-4">
                        <div className="rounded-sm p-2 w-full">
                            <div className="flex flex-col justify-center">
                                {orderDetails && orderDetails.length > 0 ? (
                                    orderDetails.map((detail, index) => (
                                        <div key={index} className="border-b border-gray-300 py-2 w-full">
                                            <p className="text-xl font-semibold text-gray-800">Nama Menu: {detail.namaMenu}</p>
                                            <p className="font-semibold text-gray-800 text-xl">Porsi: {detail.quantity}</p>
                                            <p className="font-semibold text-gray-800 text-xl">Waktu: {detail.waktuPesanan}</p>
                                            <p className="font-semibold text-gray-800 text-xl">Total Harga: {detail.totalPrice}</p>
                                        </div>
                                    ))
                                ) : (
                                    <div>No details available</div>
                                )}
                                <div className="py-2 w-full">
                                    <p className="font-semibold text-gray-800 text-xl">Total Harga: {orderDetails.totalPrice}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export const DisplayMenuModalNav = ({ setShowListPesanan }) => {

    const handleCloseMenu = () => {
        setShowListPesanan(false);
    };

    return (
        <>
            <div className="modal fixed w-full h-[100vh] top-0 left-0 flex flex-col items-center justify-center border-none p-6 z-20">
                <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                <div className="modal-container bg-white w-96 md:w-2/3 mx-auto rounded shadow-lg z-50 overflow-y-auto">
                    <div className="modal-content py-4 px-6 ">
                        <div className="flex justify-between items-center">
                            <p className="text-xl font-bold text-gray-800">Detail Pesanan</p>
                            <IconButton onClick={handleCloseMenu} className="modal-close cursor-pointer z-50">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-x"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </IconButton>
                        </div>
                        <div className="flex w-full h-auto mt-4">
                            <CardMenuDisplayNav />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


