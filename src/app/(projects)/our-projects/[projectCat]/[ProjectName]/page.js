import SingleProject from "@/components/Projects/CategoryWiseProject/SingleProject";

export default async function Page({ params }) {
    const projectname = params?.ProjectName?.split("-").join(" ")

    const data = await getData(projectname)


    return <div>
        <SingleProject singleproject={data} />
    </div>
}

async function getData(query) {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/projects/${query}`,
        { cache: 'no-store' }
    )

    if (!res.ok) {
        console.log('Failed to fetch data')
    }

    const data = await res.json()


    return data?.data;
}