import SiteVerificationComponent from "@/components/__dashboard/siteVerificationComponent/SiteVerificationComponent";



export async function getData() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${apiUrl}/api/verificationUrl`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}


export default async function SeoSiteVerification() {
  const data = await getData()
  const verification = data?.verificationUrl;

  return (
    <>
      <SiteVerificationComponent data={verification} />
    </>
  );
}

