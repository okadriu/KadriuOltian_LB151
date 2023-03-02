import React from "react";

const DashboardTable = () => {
  const data = [
    { word: "Eine Schlange im Gras", category: "Tiere" },
    {
      word: "Einen scharfen Verstand haben",
      category: "Menschliche Eigenschaften",
    },
    { word: "Banane", category: "Obst" },
    { word: "Buch", category: "Gegenstände" },
    { word: "Fahrrad", category: "Fahrzeuge" },
    { word: "Eine Nadel im Heuhaufen", category: "Suche/Herausforderung" },
    {
      word: "Ein Fisch aus dem Wasser ziehen",
      category: "Schwierigkeit/Überwindung",
    },
  ];

  return (
    <div>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-6">
        Neues Wort hinzufügen
      </button>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Wort</th>
            <th className="px-4 py-2">Kategorie</th>
            <th className="px-4 py-2"></th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.word}</td>
              <td className="border px-4 py-2">{item.category}</td>
              <td className="border px-4 py-2">
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                  Ändern
                </button>
              </td>
              <td className="border px-4 py-2">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Löschen
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardTable;

/* Hier ist der Code für die "CRUD"-Funktionen. Für Firebase, was aber leider nicht funktioniert, da die Verbindung nicht erfolgreich ist:

const handleNewWord = (e) => {
  e.preventDefault();
  const word = e.target.elements.word.value;
  const category = e.target.elements.category.value;

  firebase.database().ref("words").push({
    word,
    category,
  });
};

const handleEditWord = (id) => {
  const word = prompt("Neues Wort eingeben:");
  const category = prompt("Neue Kategorie eingeben:");

  firebase
    .database()
    .ref("words/" + id)
    .once("value", (snapshot) => {
      const data = snapshot.val();
      data.word = word;
      data.category = category;
      firebase.database().ref("words/" + id).update(data);
    });
};

const handleDeleteWord = (id) => {
  if (window.confirm("Wirklich löschen?")) {
    firebase.database().ref("words/" + id).remove();
  }
};


<button onClick={handleNewWord}>Neues Wort hinzufügen</button>
<button onClick={() => handleEditWord(id)}>Ändern</button>
<button onClick={() => handleDeleteWord(id)}>Löschen</button>

 */
