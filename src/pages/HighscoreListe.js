import React from "react";
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { orderBy } from "lodash";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function HighscoreListe() {
  /* Daten aus der Datenbank rauslesen und in der Tabelle einsetzen (sollte gehen wenn Verbindung erfolgreich)
  
  const [highscores, setHighscores] = useState([]);

  useEffect(() => {
    const getHighscores = async () => {
      const highscoresSnapshot = await getDocs(collection(db, "highscores"));
      const highscoresData = highscoresSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setHighscores(highscoresData);
    };
    getHighscores();
  }, []);

  return (
    <div>
      {highscores.map((highscore, index) => (
        <div key={highscore.id}>
          <span>{index + 1}.</span>
          <span>{highscore.playerName}</span>
          <span>{new Date(highscore.timestamp).toLocaleString()}</span>
          <span>{highscore.money}</span>
          <span>{highscore.rounds}</span>
        </div>
      ))}
    </div>
  ); */

  const [scores, setScores] = useState([
    {
      name: "Oltian",
      timestamp: "2023-02-28 12:30",
      amount: 500,
      rounds: 10,
    },
    {
      name: "Nedim",
      timestamp: "2023-02-27 14:00",
      amount: 300,
      rounds: 8,
    },
    {
      name: "Flynn",
      timestamp: "2023-02-26 16:15",
      amount: 250,
      rounds: 12,
    },
    {
      name: "Joel",
      timestamp: "2023-02-25 10:45",
      amount: 200,
      rounds: 5,
    },
  ]);

  const rankedScores = scores.map((score, index) => ({
    ...score,
    rank: index + 1,
  }));

  return (
    <div className="-mt-20 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-200">
          <h1 className="font-bold text-lg">HighScores</h1>
        </div>
        <div className="px-4 py-2">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Rang</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Zeitstempel</th>
                <th className="px-4 py-2">Betrag</th>
                <th className="px-4 py-2">Runden</th>
              </tr>
            </thead>
            <tbody>
              {rankedScores.map((score, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{score.rank}</td>
                  <td className="px-4 py-2">{score.name}</td>
                  <td className="px-4 py-2">{score.timestamp}</td>
                  <td className="px-4 py-2">{score.amount}</td>
                  <td className="px-4 py-2">{score.rounds}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* Hier ist der Teil, wo der Admin Einträge von der Datenbank löschen kann:

 const handleDelete = async (id) => {
    await deleteDoc(collection(db, "highscores", id));
    setHighscores((prevHighscores) =>
      prevHighscores.filter((highscore) => highscore.id !== id)
    );
  };
 */
