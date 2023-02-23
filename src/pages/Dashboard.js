import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import Navbar from "../Navbar";
import { Route, Routes } from "react-router-dom";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

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

      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className=" text-5xl font-bold text-center">
            Hier kommt die Adminübersicht
          </div>
          <p className="text-center">
            Hier kommen zwei Tabellen, eins um die Wörter zu ändern, löschen,
            hinzufügen und eine Tabelle für die Highscoreliste
          </p>

          <div>
            <p className="text-center">Angemeldet als {user}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
