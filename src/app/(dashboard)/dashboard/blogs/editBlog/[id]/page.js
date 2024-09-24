import CreateBlog from "@/components/__dashboard/BlogComponents/CreateBlog/CreateBlog";

const getBlogDataById = async (id) => {
  const baseAPIUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    const res = await fetch(`${baseAPIUrl}/api/blogContent/${id}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function page({ params }) {
  const { id } = params ?? {};
  const data = await getBlogDataById(id);

  const blog = data?.blogDetailsData;


  return <CreateBlog id={id} data={blog} />;
};
