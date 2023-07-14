import { useRef } from "react";
import { useNavigate } from 'react-router-dom';

import { API, Browser, LOCAL_STORAGE_KEY } from '../../constants';
import axios from '../../services/axios';

export default function Login() {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const performLogin = async (e) => {
    e.preventDefault();
    const payload = {username: usernameRef.current.value, password: passwordRef.current.value};
    const response = await axios.post(API.V1.USER_LOGIN, payload);
    if (response.status !== 201) {
      if (response.status === 400) {
        alert("Invalid credentials!");
        return;
      }
      alert("Something went wrong!");
      return;
    }
    const data = await response.data;
    localStorage.setItem(LOCAL_STORAGE_KEY, data.token);
    navigate(Browser.DASHBOARD);
  };

  return (
    <>
      <section className="flex h-screen items-center justify-center bg-gradient-to via-orange-500 to-green-500">
        <form onSubmit={performLogin}>
          <div>
            <input
              className="border rounded-3xl bg-gray-50 p-3 mb-4 border-black"
              type="text"
              placeholder="Username"
              ref={usernameRef}
              required
            />
          </div>
          <div>
            <input
              className="border rounded-3xl bg-gray-50 p-3 mb-4 border-black"
              type="password"
              placeholder="Password"
              autoComplete="off"
              ref={passwordRef}
              required
            />
          </div>
          <div className="text-center">
            <button
              className="bg-green-400 rounded-3xl w-20 py-2"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
