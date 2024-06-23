export default function CryptoTableRow({ cryptoItem }) {
    return (
        <tr className="bg-white border-b">
            <td className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                {cryptoItem?.name}
            </td>
            <td className="px-6 py-3">
                {`$${(Math.round(cryptoItem?.quote?.USD?.price * 100) / 100).toFixed(1)}`}
            </td>
            <td className={`px-6 py-3 ${Math.sign(cryptoItem?.quote?.USD?.percent_change_24h) === -1 ? 'text-red-500' : 'text-green-500'}`}>
                {`${(Math.round(cryptoItem?.quote?.USD?.percent_change_24h * 100) / 100).toFixed(2)}%`}
            </td>
            <td className={`px-6 py-3 ${Math.sign(cryptoItem?.quote?.USD?.percent_change_7d) === -1 ? 'text-red-500' : 'text-green-500'}`}>
                {`${(Math.round(cryptoItem?.quote?.USD?.percent_change_7d * 100) / 100).toFixed(2)}%`}
            </td>
        </tr>
    )
}