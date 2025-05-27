import { useLoaderData } from "react-router-dom";
import CarCard from "../components/CarCard";

const Car = () => {
  const car = useLoaderData();

  return <CarCard car={car} />;
};

export default Car;
