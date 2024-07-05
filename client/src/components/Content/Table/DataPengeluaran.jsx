import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CurrencyDollarIcon } from '@heroicons/react/24/outline';

const DataPengeluaran = () => {
    const [outcomeList, setOutcomeList] = useState([]);
    const [newOutcome, setNewOutcome] = useState(null); // Initialize as null
    const [totalPengeluaran, setTotalPengeluaran] = useState(0);
    const [selectedYear, setSelectedYear] = useState("2024");

    useEffect(() => {
        fetchOutcomeData();
    }, []);

    useEffect(() => {
        const fetchPengeluaran = async () => {
            try {
                const response = await fetch(`http://localhost:3060/api/v1/outcomes`);
                const data = await response.json();
                console.log("Total pengeluaran fetched from server:", data.totalPengeluaran);
                setTotalPengeluaran(data.totalPengeluaran);
            } catch (error) {
                console.error('Error fetching total pengeluaran:', error);
            }
        };

        fetchPengeluaran();
    }, []);

    const fetchOutcomeData = async () => {
        try {
            const response = await fetch('http://localhost:3060/api/v1/outcomes');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            if (Array.isArray(data.data)) {
                setOutcomeList(data.data);
            } else {
                setOutcomeList([]);
            }
        } catch (error) {
            console.error('Error fetching outcome data:', error);
            setOutcomeList([]); // Set as empty array in case of error
        }
    };

    const handleSave = async () => {
        try {
            const response = await axios.post('http://localhost:3060/api/v1/outcome', newOutcome);
            console.log(response.data);
            setOutcomeList([...outcomeList, newOutcome]);
            setNewOutcome(null); // Reset newOutcome after saving
        } catch (error) {
            console.error('Error saving outcome:', error);
        }
    };

    const handleDelete = async (idPengeluaran, index) => {
        try {
            if (!idPengeluaran) {
                setOutcomeList(outcomeList.filter((_, i) => i !== index));
            } else {
                const response = await fetch('http://localhost:3060/api-v1/outcome', {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ idPengeluaran }),
                });
                const data = await response.json();
                if (data.message) {
                    setOutcomeList(outcomeList.filter(outcome => outcome.idPengeluaran !== idPengeluaran));
                } else {
                    alert(data.error || 'Failed to delete outcome');
                }
            }
        } catch (error) {
            console.error('Error deleting outcome:', error);
        }
    };

    const handleChange = (value, field) => {
        setNewOutcome({
            ...newOutcome,
            [field]: value,
        });
    };

    const handleAddRow = () => {
        setNewOutcome({
            namaPengeluaran: '',
            jumlahPengeluaran: '',
            tanggalPengeluaran: '',
            keterangan: '',
        });
    };

    const formatRupiah = (number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(number);
    };

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    const dummyData = {
        '2022': 10000000, // Example data for 2022
        '2023': 15000000, // Example data for 2023
    };
    const totalPengeluaranTahunan = selectedYear === '2024' ? totalPengeluaran : dummyData[selectedYear];

    return (
        <div className="bg-white relative overflow-x-auto shadow-sm sm:rounded-lg mt-12 me-12 p-4">
            <div className="flex w-full">
                <div className="w-80 h-36 rounded-md shadow-md bg-red-500">
                    <div className="w-full p-4">
                        <div className="w-full flex items-center">
                            <label htmlFor="#" className="text-xl font-semibold text-white">Pengeluaran (Tahun)</label>
                            <select
                                className="py-1 px-2 border rounded-md text-white bg-transparent ml-auto"
                                value={selectedYear}
                                onChange={handleYearChange}
                            >
                                {["2022", "2023", "2024"].map((year) => (
                                    <option key={year} value={year} className="text-sm">
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="w-full mt-3 flex items-center">
                            <CurrencyDollarIcon className="h-6 w-6 text-white mr-2" />
                            <label htmlFor="#" className="text-white text-lg">{formatRupiah(totalPengeluaranTahunan)}</label>
                        </div>
                    </div>

                </div>
            </div>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mt-8">Data Pengeluaran</h2>
            <button
                onClick={handleAddRow}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded mb-4 mt-4 text-xs"
            >
                TAMBAH
            </button>
            <div className="flex justify-between items-center mb-4">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nama Pengeluaran
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Jumlah Pengeluaran
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tanggal Pengeluaran
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Keterangan
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(outcomeList) && outcomeList.map((outcome, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-4 whitespace-nowrap">{outcome.namaPengeluaran}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{formatRupiah(outcome.jumlahPengeluaran)}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{outcome.tanggalPengeluaran}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{outcome.keterangan}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button
                                        onClick={() => handleDelete(outcome.idPengeluaran, index)}
                                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-3 rounded text-xs"
                                    >
                                        HAPUS
                                    </button>
                                </td>
                            </tr>
                        ))}

                        {/* Baris baru untuk menambahkan data */}
                        {newOutcome && (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input
                                        type="text"
                                        value={newOutcome.namaPengeluaran}
                                        onChange={(e) => handleChange(e.target.value, 'namaPengeluaran')}
                                        className="border border-gray-300 rounded-sm p-1 w-full h-full"
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input
                                        type="number"
                                        value={newOutcome.jumlahPengeluaran}
                                        onChange={(e) => handleChange(e.target.value, 'jumlahPengeluaran')}
                                        className="border border-gray-300 rounded-sm p-1 w-full h-full"
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input
                                        type="date"
                                        value={newOutcome.tanggalPengeluaran}
                                        onChange={(e) => handleChange(e.target.value, 'tanggalPengeluaran')}
                                        className="border border-gray-300 rounded-sm p-1 w-full h-full"
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input
                                        type="text"
                                        value={newOutcome.keterangan}
                                        onChange={(e) => handleChange(e.target.value, 'keterangan')}
                                        className="border border-gray-300 rounded-sm p-1 w-full h-full"
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button
                                        onClick={handleSave}
                                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-3 rounded text-xs"
                                    >
                                        SIMPAN
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataPengeluaran;
