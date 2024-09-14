export const dashboardConfig = {
    sidebarNav: [
        {
            title: "Project",
            href: "/dashboard",
            icon: "home",
        },
        {
            title: "My Profile",
            href: "/dashboard/admin/profile",
            icon: "users",
        },
        // {
        //     title: "Customers",
        //     href: "/dashboard/customers",
        //     icon: "users",
        //     submenu: true,
        //     submenus: [
        //         {
        //             title: "All Customers",
        //             href: "/dashboard/customers/all",
        //             icon: "dessert",
        //         },
        //         {
        //             title: "Add Customer",
        //             href: "/dashboard/customers/add",
        //             icon: "dessert",
        //         },
        //     ],
        // },
        {
            title: "Pages",
            href: "/dashboard/allpages/home",
            icon: "boxes",
            submenu: true,
            submenus: [
                {
                    title: "Create Metadata",
                    href: "/dashboard/allpages/create-all-pages-metadata",
                    icon: "dessert",
                },
                {
                    title: "Show All Metadata",
                    href: "/dashboard/allpages/see-all-page-metadata",
                    icon: "dessert",
                },

            ],
        },
        {
            title: "Seo",
            href: "/dashboard/siteVerification",
            icon: "boxes",
            submenu: true,
            submenus: [
                {
                    title: "Site Verification",
                    href: "/dashboard/siteVerification",
                    icon: "dessert",
                },
                {
                    title: "Sitemap",
                    href: "/dashboard/siteMap",
                    icon: "dessert",
                },
                {
                    title: "RobotTXT",
                    href: "/dashboard/robottxt",
                    icon: "dessert",
                },
            ],
        },
        {
            title: "Blogs",
            href: "/dashboard/blogs",
            icon: "boxes",
            submenu: true,
            submenus: [
                {
                    title: "All Blog",
                    href: "/dashboard/blogs",
                    icon: "dessert",
                },
                {
                    title: "Add New",
                    href: "/dashboard/blogs/addNew",
                    icon: "dessert",
                },
                {
                    title: "Categories",
                    href: "/dashboard/blogs/categories",
                    icon: "dessert",
                },
                {
                    title: "Tags",
                    href: "/dashboard/blogs/tags",
                    icon: "dessert",
                },
            ],
        },
    ],
};
