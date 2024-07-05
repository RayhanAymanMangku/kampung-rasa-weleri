import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import axios from 'axios';

export const CheckoutModal = ({ setShowCheckout, orderData }) => {
    const handlePayment = async () => {
        try {
            console.log("Order data being sent:", {
                idPesanan: orderData.idPesanan, // Ensure idPesanan is sent
                grossAmount: orderData.totalHarga,
                customerDetails: {
                    namaCustomer: orderData.namaCustomer,
                },
            });

            const response = await axios.post('http://localhost:3060/api/create-transaction', {
                idPesanan: orderData.idPesanan, // Ensure idPesanan is sent
                grossAmount: orderData.totalHarga,
                customerDetails: {
                    namaCustomer: orderData.namaCustomer,
                },
            });

            console.log("Response from server:", response); // Log full response

            const { token } = response.data;

            window.snap.pay(token, {
                onSuccess: (result) => {
                    console.log('Payment Success:', result);
                    // Handle success scenario
                },
                onPending: (result) => {
                    console.log('Payment Pending:', result);
                    // Handle pending scenario
                },
                onError: (result) => {
                    console.log('Payment Error:', result);
                    // Handle error scenario
                },
                onClose: () => {
                    console.log('Payment Popup Closed');
                    // Handle close scenario
                },
            });
        } catch (error) {
            console.error('Payment Error:', error); // Log error details
        }
    };

    const handleCloseCheckout = () => {
        setShowCheckout(false);
        window.location.href = '/';
    };

    const { waktuPesanan, totalHarga, orderDetails, idPesanan } = orderData; // Destructure idPesanan

    return (
        <div className="modal fixed w-full h-full top-0 left-0 flex flex-col items-center justify-center">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
            <div className="modal-container bg-white w-96 md:w-2/3 mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 px-6">
                    <div className="flex justify-between items-center">
                        <p className="text-2xl font-bold">Checkout</p>
                        <IconButton onClick={handleCloseCheckout} className="modal-close cursor-pointer z-50">
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

                    <div className="flex flex-col gap-4 mt-4">
                        <h4 className='text-xl font-semibold'>Pesanan</h4>
                        <div className="flex justify-between items-center">
                            <p className="text-lg">ID Customer</p>
                            <p className="text-lg">{orderData.idCustomer}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-lg">Nama Customer</p>
                            <p className="text-lg">{orderData.namaCustomer}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-lg">Waktu Pesanan</p>
                            <p className="text-lg">{new Date(waktuPesanan).toLocaleString()}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-lg">Total Harga</p>
                            <p className="text-lg">Rp. {totalHarga}</p>
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                            <h4 className='text-lg font-semibold'>Detail Pesanan</h4>
                            {orderDetails.map((detail, index) => (
                                <div key={index} className="flex justify-between items-center">
                                    <p className="text-lg">Menu: {detail.namaMenu}</p>
                                    <p className="text-lg">Quantity: {detail.quantity}</p>
                                </div>
                            ))}
                        </div>
                        <p className='text-gray-600'>Apabila anda sudah selesai melakukan pembayaran, silakan klik tombol selesai maka anda akan diarahkan ke whatsapp untuk mengirim bukti pembayaran.</p>
                        <button onClick={handlePayment} className="bg-blue-500 text-white py-2 rounded-md">Bayar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export const CheckoutModalDineIn = ({ setShowCheckout, orderData }) => {
    const handlePayment = async () => {
        try {
            console.log("Order data being sent:", {
                idOrder: orderData.idPesanan, // Ensure idOrder is sent
                grossAmount: orderData.totalPrice,
                customerDetails: {
                    namaCustomer: orderData.namaCustomer,
                },
            });

            const response = await axios.post('http://localhost:3060/api/create-transaction-dinein', {
                idOrder: orderData.idPesanan, // Ensure idOrder is sent
                grossAmount: orderData.totalPrice,
                customerDetails: {
                    namaCustomer: orderData.namaCustomer,
                },
            });

            console.log("Response from server:", response); // Log full response

            const { token } = response.data;

            window.snap.pay(token, {
                onSuccess: (result) => {
                    console.log('Payment Success:', result);
                    // Handle success scenario
                },
                onPending: (result) => {
                    console.log('Payment Pending:', result);
                    // Handle pending scenario
                },
                onError: (result) => {
                    console.log('Payment Error:', result);
                    // Handle error scenario
                },
                onClose: () => {
                    console.log('Payment Popup Closed');
                    // Handle close scenario
                },
            });
        } catch (error) {
            console.error('Payment Error:', error); // Log error details
        }
    };

    const handleCloseCheckout = () => {
        setShowCheckout(false);
        window.location.href = '/';
    };

    const { waktuPesanan, totalPrice, orderDetails, idPesanan } = orderData;

    return (
        <div className="modal fixed w-full h-full top-0 left-0 flex flex-col items-center justify-center">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
            <div className="modal-container bg-white w-96 md:w-2/3 mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 px-6">
                    <div className="flex justify-between items-center">
                        <p className="text-2xl font-bold">Checkout</p>
                        <IconButton onClick={handleCloseCheckout} className="modal-close cursor-pointer z-50">
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

                    <div className="flex flex-col gap-4 mt-4">
                        <h4 className='text-xl font-semibold'>Pesanan</h4>
                        <div className="flex justify-between items-center">
                            <p className="text-lg">ID Customer</p>
                            <p className="text-lg">{orderData.idCustomer}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-lg">Nama Customer</p>
                            <p className="text-lg">{orderData.namaCustomer}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-lg">Waktu Pesanan</p>
                            <p className="text-lg">{new Date(waktuPesanan).toLocaleString()}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-lg">Total Harga</p>
                            <p className="text-lg">Rp. {totalPrice}</p>
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                            <h4 className='text-lg font-semibold'>Detail Pesanan</h4>
                            {orderDetails.map((detail, index) => (
                                <div key={index} className="flex justify-between items-center">
                                    <p className="text-lg">Menu: {detail.namaMenu}</p>
                                    <p className="text-lg">Quantity: {detail.quantity}</p>
                                </div>
                            ))}
                        </div>
                        <p className='text-gray-600'>Apabila anda sudah selesai melakukan pembayaran, silakan klik tombol selesai maka anda akan diarahkan ke whatsapp untuk mengirim bukti pembayaran.</p>
                        <button onClick={handlePayment} className="bg-blue-500 text-white py-2 rounded-md">Bayar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};