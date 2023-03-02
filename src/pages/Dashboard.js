import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import DashboardTable from "./DashboardTable";
import HighscoreListe from "./HighscoreListe";

export default function DashBoard({ user, setUser, setAuthState }) {
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setAuthState("login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <nav className="nav flex justify-between items-stretch gap-8 pt-7 pl-7 pr-7 xs:text-xs sm:text-sm lg:text-sm md:text-base xl:text-base 2xl:text-lg">
        <p className="uppercase text-2xl bold px-2 py-2">GoSpin</p>
        <ul className="semibold">
          <button
            onClick={signOutHandler}
            className="bg-yellow-400 hover:bg-yellow-500 rounded-full px-4 py-2"
          >
            Abmelden
          </button>
        </ul>
      </nav>

      <div className="flex min-h-full py-12 px-4 sm:px-6 lg:px-8">
        <DashboardTable />
        <div className="mt-12 ml-5">
          <HighscoreListe />
        </div>
        <div>
          <button className="ml-5 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mb-6 mt-72">
            Einträge entfernen
          </button>
        </div>
      </div>
    </div>
  );
}
