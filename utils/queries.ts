export const allServicesQuery = () =>{
    const query = `*[_type == "service"]{
        _id,
        serviceId,
        serviceName,
        brandFor,
        phModelFor
    }`;     
    return query;
}; 