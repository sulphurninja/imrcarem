export const fetchServices = async () => {
  const res = await fetch(
    `http://localhost:3000/api/getServices`
  );

  const data = await res.json();
  const services: Service[] = data.services;

  return services;
};
