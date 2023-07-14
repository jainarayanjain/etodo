import { useNavigate } from "react-router-dom";

import { API, Browser } from "../../constants";
import { useUser } from "../../hooks";
import axios from "../../services/axios";

export default function Navbar() {
  const navigate = useNavigate();
  const [user, loading] = useUser();

  const performLogout = async (e) => {
    e.preventDefault();
    await axios.delete(API.V1.USER_LOGOUT);
    localStorage.clear();
    navigate(Browser.ROOT);
  };

  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <div className="bg-black h-10 text-white">
        <p>
          {user.first_name} {user.last_name}
        </p>
        <div>
          <button
            onClick={performLogout}
            type="button"
            className="float-right mr-6"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
