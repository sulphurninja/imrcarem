export default{
name: "order",
type: "document",
title: "Order",
fields:[
    {
        name: "name",
        type: "string",
    },
    {
        name: "mobno",
        type: "string",
    },
    {
        name: "service",
        type: "string",
    },
    {
        name: "product",
        type: "reference",
        to:[{ type: "product" }],
    },
],
};