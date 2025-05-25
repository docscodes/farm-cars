import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Car from "./pages/Car";
import Cars from "./pages/Cars";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewCar from "./pages/NewCar";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="cars" element={<Cars />} />
      <Route path="cars/:id" element={<Car />} />
      <Route path="new-car" element={<NewCar />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
