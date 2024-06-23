import { useEffect, useState } from "react"
import CryptoTableRow from "./CryptoTableRow"



export default function CryptoTable() {
    const [cryptoList, setCryptoList] = useState()
    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        const res = await fetch('/api/crypto-list')
        const data = await res.json()
        setCryptoList(data)
    }
    return (
        <div>
            <table class="w-full text-sm text-left text-gray-500 ">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            24h Change
                        </th>
                        <th scope="col" class="px-6 py-3">
                            7d Change
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {cryptoList?.data?.map((item) => (
                        <CryptoTableRow key={item?.id} cryptoItem={item} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}