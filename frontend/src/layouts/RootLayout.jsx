import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className=" bg-blue-200 min-h-screen p-2">
      <h2>RootLayout</h2>

      <header className="p-3 w-full">
        <nav className="flex flex-row justify-between mx-auto">
          <div className="flex flex-row space-x-3">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cars">Cars</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/new-car">New Car</NavLink>
          </div>
        </nav>
      </header>
      <main className="p-8 flex flex-col flex-1 bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
