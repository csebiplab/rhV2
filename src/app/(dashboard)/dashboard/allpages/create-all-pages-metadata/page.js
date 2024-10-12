"use client";

import CreateAndUpdateFormForPageMeta from "@/components/__dashboard/shared/CreateAndUpdateFormForPageMeta";
import { useState } from "react";


const page = () => {
    const [isUpdateCreateLoading, setIsUpdateCreateLoading] = useState(false);


    return (
        <>
            <CreateAndUpdateFormForPageMeta
                isUpdateCreateLoading={isUpdateCreateLoading}
                setIsUpdateCreateLoading={setIsUpdateCreateLoading}
            />
        </>
    );
};

export default page;

