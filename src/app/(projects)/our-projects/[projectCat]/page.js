import CategoryWiseProject from "@/components/Projects/CategoryWiseProject/CategoryWiseProject";

async function getData(query) {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/projects?projectCat=${query}`,
        { cache: 'no-store' }
    )

    if (!res.ok) {
        console.log('Failed to fetch data')
    }

    const result = await res.json()
    return result?.data;
}

export default async function Page({ params }) {
    const data = await getData(params?.projectCat)

    return <div>
        <CategoryWiseProject cateGoryWiseProjects={data} category={params?.projectCat} />
    </div>
}

