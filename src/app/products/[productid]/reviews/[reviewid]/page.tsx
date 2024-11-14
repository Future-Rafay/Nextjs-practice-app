import React from "react";
import { notFound } from "next/navigation";
function ReviewDetails({
    params,
}: {
    params: {
        productid: string;
        reviewid: string;
    };
}) {
    if(parseInt(params.reviewid) > 1000){
        notFound();
    }
    return (
        <>
            <h1>
                Review No. {params.reviewid } of Product {params.productid}
            </h1>
        </>
    );
}

export default ReviewDetails;
