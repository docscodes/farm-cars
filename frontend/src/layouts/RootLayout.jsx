import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useAuth } from "../hooks/useAuth";

const RootLayout = () => {
  const { user, message, logout } = useAuth();

  return (
    <div className="max-w-3xl min-h-screen mx-auto p-2">
      <Header user={user} logout={logout} />
      <main className="p-4 flex flex-col flex-1">
        <p className="text-red-500 p-2 border mb-8">{message}</p>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
