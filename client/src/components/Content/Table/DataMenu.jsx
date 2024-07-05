import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DataMenu = () => {
    const [menuList, setMenuList] = useState([]);
    const [newMenu, setNewMenu] = useState(null); // Initialize as null
    const [isAdding, setIsAdding] = useState(false); // State to control form visibility

    const handleAddRow = () => {
        setNewMenu({
            idMenu: "",
            namaMenu: "",
            harga: "",
            gambar: "",
        });
        setIsAdding(true); // Show the form when Add Row is clicked
    };

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await fetch("http://localhost:3060/api/v1/data-menu");
                const data = await response.json();
                console.log("data menu:", data);
                setMenuList(data); // Set the fetched data to menuList
            } catch (error) {
                console.log(error);
            }
        }
        fetchMenu();
    }, []);

    const handleSave = async () => {
        try {
            const response = await axios.post("http://localhost:3060/api/v1/data-menu", newMenu);
            const data = response.data; // Updated to access data from response correctly
            console.log("data menu dikirim:", data);
            setMenuList([...menuList, data]);
            setNewMenu(null); // Reset newMenu after saving
            setIsAdding(false); // Hide the form after saving
        } catch (err) {
            console.log("error :", err);
        }
    }

    const handleChange = (value, field) => {
        setNewMenu({
            ...newMenu,
            [field]: value,
        });
    }

    const handleDelete = async (idMenu) => {
        try {
            const response = await axios.delete(`http://localhost:3060/api/v1/data-menu/${idMenu}`);
            console.log("data menu dihapus:", response.data);
            setMenuList(menuList.filter((menu) => menu.idMenu !== idMenu));
        } catch (err) {
            console.log("error :", err);
        }
    }

    return (
        <div className="bg-white relative overflow-x-auto shadow-sm sm:rounded-lg mt-12 me-12 p-4">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Data Menu</h2>
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
                                ID Menu
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nama Menu
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Harga
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gambar
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(menuList) && menuList.map((menu) => (
                            <tr key={menu.idMenu} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {menu.idMenu}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {menu.namaMenu}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {menu.harga}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <img src={menu.gambar} alt={menu.namaMenu} className="h-10 w-10 object-cover" />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button
                                        onClick={() => handleDelete(menu.idMenu)}
                                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-3 rounded text-xs"
                                    >
                                        HAPUS
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {isAdding && newMenu && (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input
                                        type="text"
                                        onChange={(e) => handleChange(e.target.value, "idMenu")}
                                        value={newMenu.idMenu}
                                        className="border border-gray-300 rounded-sm p-1 w-full h-full"
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input
                                        type="text"
                                        onChange={(e) => handleChange(e.target.value, "namaMenu")}
                                        value={newMenu.namaMenu}
                                        className="border border-gray-300 rounded-sm p-1 w-full h-full"
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input
                                        type="text"
                                        onChange={(e) => handleChange(e.target.value, "harga")}
                                        value={newMenu.harga}
                                        className="border border-gray-300 rounded-sm p-1 w-full h-full"
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input
                                        type="text"
                                        onChange={(e) => handleChange(e.target.value, "gambar")}
                                        value={newMenu.gambar}
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
    )
}

export default DataMenu;
