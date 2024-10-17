import CreateBlog from "@/components/__dashboard/BlogComponents/CreateBlog/CreateBlog";
import Link from "next/link";

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


  return <>
    <>
      {
        blog?.customLink && <p className="text-4xl ml-3">
          <span className="font-extrabold">Link:</span>
          <Link href={blog?.customLink} className="text-primary-50 text-2xl underline"> {blog?.customLink}</Link>
        </p>
      }
    </>

    <CreateBlog id={id} data={blog} />

  </>
};
