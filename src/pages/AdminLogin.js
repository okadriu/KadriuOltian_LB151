import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLogin({ setUser, setAuthState }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email !== null && password !== null) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setUser(email);
          setAuthState("dashboard");
          toast.success("Erfolgreich angemeldet", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((err) => {
          if (err.code === "auth/wrong-password") {
            setErrorMessage("Falsches Passwort");
            toast.error("Falsches Passwort", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else if (err.code === "auth/user-not-found") {
            setErrorMessage("Kein Konto mit diesen Daten gefunden");
            toast.error("Kein Konto mit diesen Daten gefunden", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else {
            setErrorMessage(err.message);
            toast.error(err.message, {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        });
    }
  };

  return (
    <div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Anmelden
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none mb-2 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
                  placeholder="E-Mail"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
                  placeholder="Passwort"
                />
              </div>
            </div>

            <div>
              <button
                onClick={handleLogin}
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-yellow-400 hover:bg-yellow-500 py-2 px-4 text-sm font-medium focus:outline-none focus:ring-offset-2"
              >
                Anmelden
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
