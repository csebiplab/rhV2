import ProjectsComponent from "@/components/Projects/ProjectComponents/ProjectComponent";



export default async function Page() {
  const res = await getData();


  if (res?.statusCode !== 200) {
    return <p>Failed To Get Data!!!</p>;
  }

  const projects = res?.data || [];

  return (
    <main>
      <ProjectsComponent projects={projects} />
    </main>
  );
}

async function getData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, { cache: 'no-store' });

    if (!res.ok) {
      console.log('Failed to fetch data');
    }

    return await res.json();
  } catch (error) {
    console.error('Error fetching project details:', error.message);
  }
}
