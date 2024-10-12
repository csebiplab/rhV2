import getCurrentUser from "@/lib/session";
import DynamicDashboardHeaderTitle from "./ui/__dashboard_ui/DynamicDashboardHeader";
import { cn } from "@/lib/utils";
import UserAccountNav from "./UserAccountNav";

export default async function DashboardHeader({ className, ...props }) {
  const user = await getCurrentUser();

  // console.log(user)

  return (
    <header
      className={cn(
        "w-full sticky top-0 z-50 px-5 py-4 bg-dark gap-2 backdrop-blur-sm flex flex-row justify-between items-center",
        className
      )}
      {...props}
    >
      <DynamicDashboardHeaderTitle />
      {user && <UserAccountNav user={user} />}
    </header>
  );
}
