import Link from "next/link";

const algorithms = [
    "SIDH",
    "Kyber",
    "Dilithium",
    "Falcon",
]

export const Sidebar = () => {
    return (
        <div className="flex flex-col w-80 h-full bg-gray-100 px-8 py-12 text-center fixed top-0 bottom-0 left-0" style={
            {
                background: "linear-gradient(335deg,rgba(98,211,213,.576),rgba(235,164,244,.383) 51%,rgba(255,237,197,.865))",
            }
        }>
            {
                algorithms.map((algorithm, index) => (
                    <Link href={`/${algorithm.toLowerCase()}`} key={index} className="text-2xl font-bold text-gray-800 hover:text-gray-900 py-1 my-4 rounded-lg border border-gray-900 bg-white border-solid">
                        {algorithm}
                    </Link>
                ))
            }
        </div>
    )
}