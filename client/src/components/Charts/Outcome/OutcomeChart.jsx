import React, { useEffect, useState, useMemo } from "react";
import Chart from "react-apexcharts";
import {
    Card,
    CardBody,
    Typography,
    Button,
    CardFooter,
} from "@material-tailwind/react";
import merge from "deepmerge";

// Function to format numbers in Rupiah
const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(number);
};

// Function to get month index from a date string
const getMonthIndex = (dateString) => {
    return new Date(dateString).getMonth();
};

// Bar chart component with configurable options
function BarChart({ height = 350, series, colors, options }) {
    // Memoize the chart options to prevent unnecessary re-renders
    const chartOptions = useMemo(
        () => ({
            colors,
            ...merge(
                {
                    chart: {
                        height: height,
                        type: "bar",
                        zoom: {
                            enabled: false,
                        },
                        toolbar: {
                            show: false,
                        },
                    },
                    title: {
                        show: "",
                    },
                    dataLabels: {
                        enabled: false,
                    },
                    legend: {
                        show: false,
                    },
                    markers: {
                        size: 0,
                        strokeWidth: 0,
                        strokeColors: "transparent",
                    },
                    stroke: {
                        curve: "smooth",
                        width: 2,
                    },
                    grid: {
                        show: true,
                        borderColor: "#EEEEEE",
                        strokeDashArray: 5,
                        xaxis: {
                            lines: {
                                show: true,
                            },
                        },
                        padding: {
                            top: 5,
                            right: 20,
                        },
                    },
                    tooltip: {
                        theme: "light",
                        y: {
                            formatter: function (val) {
                                return formatRupiah(val);
                            }
                        }
                    },
                    yaxis: {
                        labels: {
                            style: {
                                colors: "#757575",
                                fontSize: "12px",
                                fontFamily: "inherit",
                                fontWeight: 300,
                            },
                            formatter: (value) => formatRupiah(value)
                        },
                    },
                    xaxis: {
                        axisTicks: {
                            show: false,
                        },
                        axisBorder: {
                            show: false,
                        },
                        labels: {
                            style: {
                                colors: "#757575",
                                fontSize: "12px",
                                fontFamily: "inherit",
                                fontWeight: 300,
                            },
                        },
                    },
                    fill: {
                        type: "gradient",
                        gradient: {
                            shadeIntensity: 1,
                            opacityFrom: 0,
                            opacityTo: 0,
                            stops: [0, 100],
                        },
                    },
                },
                options ? options : {}
            ),
        }),
        [height, colors, options]
    );

    return <Chart type="bar" height={height} series={series} options={chartOptions} />;
}

// Main component to display the outcome chart bar
export function OutcomeChartBar() {
    const [selectedYear, setSelectedYear] = useState("2024");
    const [series, setSeries] = useState([]);

    const dummyData = {
        "2022": [
            { name: "2022 Sales", data: [1000000, 1500000, 1200000, 800000, 700000, 900000, 600000, 750000, 850000, 950000, 700000, 750000] },
        ],
        "2023": [
            { name: "2023 Sales", data: [1300000, 1200000, 1400000, 1100000, 1250000, 1000000, 1350000, 1450000, 1250000, 1400000, 1500000, 1200000] },
        ],
    };

    useEffect(() => {
        const fetchOutcomeData = async () => {
            if (selectedYear === "2024") {
                try {
                    const response = await fetch("http://localhost:3060/api/v1/outcomes");
                    const data = await response.json();
                    console.log(`Fetched ${selectedYear} data:`, data);
                    // Initialize an array with 12 zeros
                    const amounts = Array(12).fill(0);
                    // Populate the amounts array with the actual data
                    if (data && data.data && Array.isArray(data.data)) {
                        data.data.forEach(item => {
                            const monthIndex = getMonthIndex(item.tanggalPengeluaran);
                            amounts[monthIndex] += item.jumlahPengeluaran;
                        });
                        setSeries([{ name: "2024 Sales", data: amounts }]);
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            } else {
                setSeries(dummyData[selectedYear]);
            }
        };

        fetchOutcomeData();
    }, [selectedYear]);

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    return (
        <section className="w-full">
            <Card>
                <CardBody className="!p-2">
                    <div className="flex gap-2 flex-wrap justify-between px-4 !mt-4">
                        <Typography variant="h3" color="blue-gray">
                            {series.length > 0 && formatRupiah(series[0].data.reduce((a, b) => a + b, 0))}
                        </Typography>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-1">
                                <select
                                    value={selectedYear}
                                    onChange={handleYearChange}
                                    className="py-1 px-2 border rounded-md text-black bg-transparent ml-auto"
                                >
                                    {["2022", "2023", "2024"].map((year) => (
                                        <option key={year} value={year} className="text-sm">
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    {/** chart */}
                    <BarChart
                        colors={["#4CAF50", "#2196F3"]}
                        options={{
                            xaxis: {
                                categories: [
                                    "Jan",
                                    "Feb",
                                    "Mar",
                                    "Apr",
                                    "May",
                                    "Jun",
                                    "Jul",
                                    "Aug",
                                    "Sep",
                                    "Oct",
                                    "Nov",
                                    "Dec",
                                ],
                            },
                        }}
                        series={series}
                    />
                </CardBody>
            </Card>
        </section>
    );
}

export default OutcomeChartBar;
