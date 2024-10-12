import RemoveBtnComponent from '@/components/__dashboard/SitemapComponents/RemoveButtonComponent';
import Link from 'next/link';
import { HiPencilAlt } from 'react-icons/hi';

export async function getData() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const res = await fetch(`${apiUrl}/api/siteMap`, {
        cache: "no-store",
    });
    const { data } = await res.json();
    return data;
}


const page = async () => {
    const data = await getData() ?? {}

    return (
        <div>
            {data?.length > 0 ? (
                <div className="relative mt-4 overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Change Frequency
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Sitemap URL
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Priority
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((item) => (
                                <tr
                                    key={item._id}
                                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {item?.changefreq}
                                    </th>
                                    <td className="px-6 py-4">{item?.loc}</td>
                                    <td className="px-6 py-4">{item?.priority}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex gap-2">
                                            <Link
                                                href={`/dashboard/siteMap/${item?._id}`}
                                            >
                                                <HiPencilAlt size={24} />
                                            </Link>
                                            <RemoveBtnComponent id={item._id} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>) : <div className="mt-40 text-center">
                <p className='text-3xl text-center'>No Data Found!</p>
                <Link href="/dashboard/siteMap" className="mt-5 px-5 py-3 bg-primary-700  text-white">Add Sitemaps</Link>
            </div>}
        </div>
    );
};

export default page;