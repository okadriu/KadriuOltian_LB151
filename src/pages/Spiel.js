import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useHistory } from "react-router-dom";

export default function Spiel() {
  function EndScreen({ resetGame, setName, setShowGame }) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p>
          Du hast das Spiel verloren. Möchtest du erneut spielen oder beenden?
        </p>
        <button
          className="bg-yellow-400 hover:bg-yellow-500 font-bold py-2 px-4 rounded-lg m-2"
          onClick={() => {
            resetGame();
            setShowGame(true);
          }}
        >
          Erneut spielen
        </button>
        <button
          className="bg-red-400 hover:bg-red-500 font-bold py-2 px-4 rounded-lg m-2"
          onClick={() => {
            setName(null);
            setShowGame(false);
          }}
        >
          Spiel beenden
        </button>
      </div>
    );
  }

  const [name, setName] = useState(null);
  const [kontostand, setKontostand] = useState(100);
  const [leben, setLeben] = useState(3);
  const [initialLeben, setInitialLeben] = useState(3);
  const [isDelaying, setIsDelaying] = useState(false);
  const [woerter, setWoerter] = useState([
    "Eine Schlange im Gras",
    "Einen scharfen Verstand haben",
    "Banane",
    "Buch",
    "Fahrrad",
  ]);
  const [wort, setWort] = useState(
    woerter[Math.floor(Math.random() * woerter.length)]
  );

  /* Datenbank */
  /*  const [woerter, setWoerter] = useState([]);
  const [wort, setWort] = useState("dummy"); */

  /* console.log(wort); */ // Aktuelle Redewendung ausgeben

  const [userGuess, setUserGuess] = useState("");
  const [isGuessCorrect, setIsGuessCorrect] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);

  const [initialPurchasedVowels, setInitialPurchasedVowels] = useState([]);
  const [purchasedVowels, setPurchasedVowels] = useState([]);
  const [usedVowels, setUsedVowels] = useState([]);

  useEffect(() => {
    setInitialPurchasedVowels(purchasedVowels);
    setUsedVowels([]);
  }, [wort]);

  /*   useEffect(() => {
    async function getWoerter() {
      const woerter = [];
      const woerterSnapshot = await getDocs(collection(db, "woerterliste"));
      woerterSnapshot.forEach((doc) => {
        woerter.push(doc.data().redewendung);
      });
      setWoerter(woerter);
    }
    getWoerter();
  }, []); */

  const resetGame = () => {
    setWort(woerter[Math.floor(Math.random() * woerter.length)]);
    setUserGuess("");
    setGuessedLetters([]);
    setPurchasedVowels(initialPurchasedVowels);
    setLeben(initialLeben);
    setIsGuessCorrect("");
  };

  const buyVowel = (vowel) => {
    if (!usedVowels.includes(vowel)) {
      if (kontostand >= 20) {
        setKontostand(kontostand - 20);
        setPurchasedVowels([...purchasedVowels, vowel]);
        setUsedVowels([...usedVowels, vowel]);
        if (wort.toLowerCase().includes(vowel.toLowerCase())) {
          setGuessedLetters([...guessedLetters, vowel.toLowerCase()]);
          setIsGuessCorrect(`Der Vokal ${vowel} ist im Wort enthalten!`);
        } else {
          setIsGuessCorrect(`Der Vokal ${vowel} ist nicht im Wort enthalten!`);
          setLeben(leben - 1);
        }
      } else {
        setIsGuessCorrect(
          "Du hast nicht genug Geld, um einen Vokal zu kaufen!"
        );
      }
    } else {
      setIsGuessCorrect(`Der Vokal ${vowel} wurde bereits gekauft!`);
    }
  };

  const Vokal = ({ vokal }) => {
    const isPurchased = purchasedVowels.includes(vokal);
    const isInWord = wort.toLowerCase().includes(vokal.toLowerCase());

    return (
      <button
        className={`vokal ${isPurchased ? "vokal--purchased" : ""} ${
          isInWord ? "vokal--in-word" : ""
        }`}
        onClick={() => buyVowel(vokal)}
        disabled={isPurchased || isInWord || isDelaying}
      >
        {vokal}
      </button>
    );
  };

  const guess = () => {
    const input = userGuess.trim();
    if (input === "") {
      setIsGuessCorrect("Bitte geben Sie ein Wort oder einen Buchstaben ein");
      return;
    }
    if (userGuess.length > 1) {
      if (input.toLowerCase() === wort.toLowerCase()) {
        setIsGuessCorrect("Glückwunsch, du hast das Wort erraten!");
        setKontostand(kontostand + 100);
        setGuessedLetters([...new Set(wort.toLowerCase().split(""))]);
        setWoerter(woerter.filter((w) => w !== wort));
        if (woerter.length > 0) {
          setIsDelaying(true);
          setTimeout(() => {
            setWort(woerter[Math.floor(Math.random() * woerter.length)]);
            setUserGuess("");
            setGuessedLetters([]);
            setIsDelaying(false);
          }, 1000);
          if (leben < initialLeben) {
            setLeben(initialLeben);
          }
        } else {
          alert("Herzlichen Glückwunsch, du hast alle Wörter erraten!");
        }
      } else {
        setIsGuessCorrect("Leider falsch!");
        if (!guessedLetters.includes(userGuess.toLowerCase())) {
          setLeben(leben - 1);
          setGuessedLetters([...guessedLetters, userGuess.toLowerCase()]);
        }
      }
    } else if (userGuess.length === 1) {
      if (!/^[bcdfghjklmnpqrstvwxyz\s]+$/i.test(input)) {
        setIsGuessCorrect("Bitte geben Sie nur Konsonanten ein");
        return;
      }
      if (wort.toLowerCase().includes(userGuess.toLowerCase())) {
        if (guessedLetters.includes(userGuess.toLowerCase())) {
          setIsGuessCorrect(
            `Du hast "${userGuess.toLowerCase()}" bereits geraten`
          );
        } else {
          setIsGuessCorrect("Dieser Buchstabe ist enthalten");
          setKontostand(kontostand + 10);
          setGuessedLetters([...guessedLetters, userGuess.toLowerCase()]);
        }
      } else {
        setIsGuessCorrect("Leider falsch!");
        if (!guessedLetters.includes(userGuess.toLowerCase())) {
          setLeben(leben - 1);
          setGuessedLetters([...guessedLetters, userGuess.toLowerCase()]);
        }
      }
    } else {
      setIsGuessCorrect("Bitte geben Sie ein Wort oder einen Buchstaben ein");
    }
  };

  const endGame = () => {
    alert("Du hast kein Leben mehr, somit ist das Spiel beendet 🙁");
  };

  const endGameRef = useRef();

  useEffect(() => {
    if (leben === 0) {
      endGameRef.current.click();
    }
  }, [leben]);

  if (name != null) {
    return (
      <div className="spielfeld flex flex-col items-center justify-center h-screen">
        <div
          id="alert-1"
          className="flex p-4 mb-4 rounded-lg bg-slate-200"
          role="alert"
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Info</span>
          <div className="ml-3 text-sm font-medium">{isGuessCorrect} </div>
          <button
            type="button"
            className="ml-2 -my-1.5 rounded-lg p-1.5 bg-slate-300 hover:bg-slate-400 inline-flex h-8 w-8"
            data-dismiss-target="#alert-1"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="w-screen max-w-md p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-md">
          {name && (
            <p className="text-lg text-center mb-6">
              <span className="">👤{name}</span>
            </p>
          )}
          <p className="text-lg text-left mb-2">Kategorie:</p>
          <p className="text-lg text-right mb-2">Kontostand: {kontostand}$</p>
          <p className="text-lg text-right mb-12">Lebenspunkte: {leben} / 3</p>
          {isDelaying ? (
            <p>Warte auf das nächste Wort...</p>
          ) : (
            <p className="text-lg text-center mb-12">
              {wort.split("").map((letter, index) => (
                <span key={index}>
                  {letter === " "
                    ? " "
                    : guessedLetters.includes(letter.toLowerCase())
                    ? letter
                    : " _"}
                </span>
              ))}
            </p>
          )}

          <input
            type="text"
            className="p-2 mb-2 rounded-lg placeholder-gray-500 border focus:z-10 focus:border-yellow-500"
            value={userGuess}
            placeholder="Wort oder Konsonant eingeben"
            onChange={(e) => setUserGuess(e.target.value)}
          />
          <div
            class="infovokal p-4 mt-5 text-sm rounded-lg bg-slate-200"
            role="alert"
          >
            <span class="font-medium">Vokale kaufen:</span> jeweils 100$
          </div>
          <div className="vokalbuttons flex justify-between mt-3 mb-3">
            <button
              className="p-2 mr-2 rounded-lg bg-zinc-800 hover:bg-zinc-900 text-white font-bold focus:outline-none"
              onClick={() => buyVowel("a")}
            >
              A
            </button>
            <button
              className="p-2 mr-2 rounded-lg bg-zinc-800 hover:bg-zinc-900 text-white font-bold focus:outline-none"
              onClick={() => buyVowel("e")}
            >
              E
            </button>
            <button
              className="p-2 mr-2 rounded-lg bg-zinc-800 hover:bg-zinc-900 text-white font-bold focus:outline-none"
              onClick={() => buyVowel("i")}
            >
              I
            </button>
            <button
              className="p-2 mr-2 rounded-lg bg-zinc-800 hover:bg-zinc-900 text-white font-bold focus:outline-none"
              onClick={() => buyVowel("o")}
            >
              O
            </button>
            <button
              className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-900 text-white font-bold focus:outline-none"
              onClick={() => buyVowel("u")}
            >
              U
            </button>
            <button
              className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-900 text-white font-bold focus:outline-none"
              onClick={() => buyVowel("ä")}
            >
              Ä
            </button>
            <button
              className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-900 text-white font-bold focus:outline-none"
              onClick={() => buyVowel("ö")}
            >
              Ö
            </button>
            <button
              className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-900 text-white font-bold focus:outline-none"
              onClick={() => buyVowel("ü")}
            >
              Ü
            </button>
          </div>

          <button
            className="bg-yellow-400 hover:bg-yellow-500 font-bold py-2 px-4 rounded-lg"
            onClick={guess}
          >
            Raten
          </button>
          <Link to="/" ref={endGameRef} onClick={endGame} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Namen eingeben
              </h2>
            </div>
            <form
              className="mt-8 space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setName(e.target.name.value);
              }}
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="relative block w-full appearance-none mb-2 border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
                    placeholder="Name"
                    type="Text"
                  />
                </div>
              </div>

              <div>
                <button className="group relative flex w-full justify-center rounded-md border border-transparent bg-yellow-400 hover:bg-yellow-500 py-2 px-4 text-sm font-medium focus:outline-none focus:ring-offset-2">
                  Spielen
                </button>
              </div>
            </form>
          </div>
        </div>
        {name && (
          <>
            <p className="text-xl">Kontostand: {kontostand}</p>
            <p className="text-xl">Lebenspunkte: {leben} / 3</p>
            <p className="text-xl">
              {wort.split("").map((letter) => (
                <span className="px-2">
                  {guessedLetters.includes(letter.toLowerCase()) ? letter : "_"}
                </span>
              ))}
            </p>
            <p className="text-xl">Raten:</p>
            <input
              className="bg-gray-200 rounded p-2 m-2"
              type="text"
              value={userGuess}
              onChange={(e) => setUserGuess(e.target.value)}
            />
            <button
              className="bg-yellow-400 hover:bg-yellow-500 rounded p-2 m-2"
              onClick={guess}
            >
              Raten
            </button>
          </>
        )}
      </div>
    );
  }
}
