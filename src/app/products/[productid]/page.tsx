import React from "react";

function productDetails({
    params,
}: {
    params: {
        productid: string;
    };
}) {
    return (
        <>
            <h1>Product details {params.productid}</h1>
        </>
    );
}

export default productDetails;
