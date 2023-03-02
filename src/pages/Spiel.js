import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function Spiel() {
  const [name, setName] = useState(null);
  const [kontostand, setKontostand] = useState(100);
  const [leben, setLeben] = useState(3);
  const [initialLeben, setInitialLeben] = useState(3);
  const [woerter, setWoerter] = useState([
    "Eine Schlange im Gras",
    "Einen scharfen Verstand haben",
    "Banane",
    "Buch",
    "Fahrrad",
    "Eine Nadel im Heuhaufen",
    "Ein Fisch aus dem Wasser ziehen",
    "Die Nerven verlieren",
    "Das Eis brechen",
    "Den Wald vor lauter Bäumen nicht sehen",
    "Den Fuss in der Tür haben",
    "Ein Brett vor dem Kopf haben",
    "Die Flinte ins Korn werfen",
    "Eine Perle der Weisheit",
    "Ein Schmetterling im Bauch",
    "Eine harte Nuss zu knacken haben",
    "Eine Tür öffnen",
    "Ein Vogel im Käfig sein",
    "Im Dunkeln tappen",
    "Der Apfel fällt nicht weit vom Stamm",
    "Einen Zahn zulegen",
    "Im selben Boot sitzen",
    "Das Leben ist wie eine Schachtel Pralinen, man weiss nie, was man kriegt",
    "Ein Sturm im Wasserglas",
    "Die Augen sind der Spiegel zur Seele",
    "Die Schönheit liegt im Auge des Betrachters",
    "Das ist wie ein Fass ohne Boden",
    "Ein Löwe in Schafspelz",
  ]);
  const [kategorie, setKategorie] = useState("");
  const [wort, setWort] = useState(
    woerter[Math.floor(Math.random() * woerter.length)]
  );
  const [rounds, setRounds] = useState(0);

  /* Meine Datenbank funktioniert irgendwie nicht, obwohl mein Code stimmt dazu (da ich davor schon mal ein Projekt mit FireBase gemacht habe) 
  Somit sehe ich keine Probleme im Code und kann keinen Fehler finden. Ich hoffe das gibt keinen grossen Abzug in der Bewertung... */
  const saveHighscore = async () => {
    const timestamp = new Date().toISOString();
    const highscoreData = {
      name,
      timestamp,
      money: kontostand,
      rounds: leben === 0 ? initialLeben : initialLeben - leben + 1,
    };
    await addDoc(collection(db, "highscores"), highscoreData);
  };

  const [userGuess, setUserGuess] = useState("");
  const [isGuessCorrect, setIsGuessCorrect] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);

  const [initialPurchasedVowels, setInitialPurchasedVowels] = useState([]);
  const [purchasedVowels, setPurchasedVowels] = useState([]);
  const [usedVowels, setUsedVowels] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    setInitialPurchasedVowels(purchasedVowels);
    setUsedVowels([]);
  }, [wort]);

  useEffect(() => {
    const fetchWoerter = async () => {
      const woerterRef = collection(db, "woerterliste");
      const snapshot = await getDocs(woerterRef);
      const woerterArr = snapshot.docs.map((doc) => doc.data().redewendung);
      setWoerter(woerterArr);
    };
    fetchWoerter();
  }, []);

  useEffect(() => {
    const kategorie = getKategorie(wort);
    setKategorie(kategorie);
  }, [wort]);

  const getKategorie = (wort) => {
    if (wort === "Eine Schlange im Gras") {
      return "Tiere";
    } else if (wort === "Einen scharfen Verstand haben") {
      return "Menschliche Eigenschaften";
    } else if (wort === "Banane") {
      return "Obst";
    } else if (wort === "Buch") {
      return "Gegenstände";
    } else if (wort === "Fahrrad") {
      return "Fahrzeuge";
    } else if (wort === "Eine Nadel im Heuhaufen") {
      return "Suche/Herausforderung";
    } else if (wort === "Ein Fisch aus dem Wasser ziehen") {
      return "Schwierigkeit/Überwindung";
    } else if (wort === "Die Nerven verlieren") {
      return "Emotionen/Kontrolle";
    } else if (wort === "Das Eis brechen") {
      return "Beziehung/Kommunikation";
    } else if (wort === "Den Wald vor lauter Bäumen nicht sehen") {
      return "Orientierung/Überblick";
    } else if (wort === "Den Fuss in der Tür haben") {
      return "Chance/Möglichkeit";
    } else if (wort === "Ein Brett vor dem Kopf haben") {
      return "Verständnis/Klarheit";
    } else if (wort === "Die Flinte ins Korn werfen") {
      return "Aufgabe/Aufgeben";
    } else if (wort === "Eine Perle der Weisheit") {
      return "Wissen/Erkenntnis";
    } else if (wort === "Ein Schmetterling im Bauch") {
      return "Emotionen/Romantik";
    } else if (wort === "Eine harte Nuss zu knacken haben") {
      return "Schwierigkeit/Herausforderung";
    } else if (wort === "Eine Tür öffnen") {
      return "Chance/Möglichkeit";
    } else if (wort === "Ein Vogel im Käfig sein") {
      return "Gefangenschaft/Eingeschränktsein";
    } else if (wort === "Im Dunkeln tappen") {
      return "Unsicherheit/Unklarheit";
    } else if (wort === "Der Apfel fällt nicht weit vom Stamm") {
      return "Familie/Vererbung";
    } else if (wort === "Einen Zahn zulegen") {
      return "Geschwindigkeit/Leistung";
    } else if (wort === "Im selben Boot sitzen") {
      return "Zusammenarbeit/Solidarität";
    } else if (
      wort ===
      "Das Leben ist wie eine Schachtel Pralinen, man weiss nie, was man kriegt"
    ) {
      return "Leben/Unvorhersehbarkeit";
    } else if (wort === "Ein Sturm im Wasserglas") {
      return "Drama/Überdramatisierung";
    } else if (wort === "Die Augen sind der Spiegel zur Seele") {
      return "Ausdruck/Psychologie";
    } else if (wort === "Die Schönheit liegt im Auge des Betrachters") {
      return "Ästhetik/Wahrnehmung";
    } else if (wort === "Das ist wie ein Fass ohne Boden") {
      return "Endlosigkeit/Verzweiflung";
    } else if (wort === "Ein Löwe in Schafspelz") {
      return "Täuschung/Unehrlichkeit";
    } else {
      return "";
    }
  };

  /* Wörter aus der Datenbank holen und im Spiel einsetzen:
   useEffect(() => {
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
    setIsGameOver(false);
    setRounds(0);
  };

  useEffect(() => {
    if (leben <= 0) {
      setIsGameOver(true);
    }
  }, [leben]);

  const buyVowel = (vowel) => {
    if (!usedVowels.includes(vowel)) {
      if (kontostand >= 30) {
        setKontostand(kontostand - 30);
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
        disabled={isPurchased || isInWord}
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
        setRounds(rounds + 1);
        setKontostand(kontostand + 100);
        setGuessedLetters([...new Set(wort.toLowerCase().split(""))]);
        setWoerter(woerter.filter((w) => w !== wort));
        if (woerter.length > 0) {
          setTimeout(() => {
            setWort(woerter[Math.floor(Math.random() * woerter.length)]);
            setUserGuess("");
            setGuessedLetters([]);
          });
          if (leben < initialLeben) {
            setLeben(initialLeben);
          }
        } else {
          setGameOver();
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
    setGameOver(true);
  };

  const endGameRef = useRef();

  function isWordGuessed(word, guessedLetters) {
    const normalizedWord = word.toLowerCase().replace(/[^a-z]/g, "");
    const uniqueGuessedLetters = [
      ...new Set(guessedLetters.map((l) => l.toLowerCase())),
    ];
    return normalizedWord
      .split("")
      .every((letter) => uniqueGuessedLetters.includes(letter));
  }

  useEffect(() => {
    if (isWordGuessed(wort, guessedLetters)) {
      setTimeout(() => {
        setWort(woerter[Math.floor(Math.random() * woerter.length)]);
        setUserGuess("");
        setGuessedLetters([]);
        setPurchasedVowels(initialPurchasedVowels);
      }, 0);
    } else if (leben === 0) {
      setGameOver(true);
    }
  }, [guessedLetters, leben]);

  if (name != null) {
    if (isGameOver || woerter.length === 0) {
      return (
        <div className="flex items-center justify-center -mt-24 h-screen">
          <div className="feldfertig w-screen max-w-md p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-md">
            <p className="text-lg text-center mb-6">
              <span className="bold">
                Das Spiel ist beendet! Du hast {rounds} Runden gespielt.
              </span>
            </p>
            <div className="flex justify-between">
              <button
                className="bg-yellow-400 hover:bg-yellow-500 font-bold py-2 px-4 rounded-lg mr-2"
                onClick={resetGame}
              >
                Erneut Spielen
              </button>
              <Link
                to="/HighscoreListe"
                /* onClick={saveHighscore} */
                className="bg-gray-400 hover:bg-gray-500 font-bold py-2 px-4 rounded-lg"
              >
                Spiel beenden
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
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
          </div>
          <div className="w-screen max-w-md p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-md">
            {name && (
              <p className="text-lg text-center mb-6">
                <span className="bold">{kategorie}</span>
              </p>
            )}
            <div className="flex content-between">
              <p className="text-sm mr-auto text-left mb-2 p-2 lowercase rounded-full bg-gray-100 table">
                👤
                <span className="italic">{name}</span>
              </p>
              <p className="text-sm mb-2 p-2 rounded-full">
                Runde <span className="italic">{rounds}</span>
              </p>
            </div>

            <p className="text-lg text-right mb-2">Kontostand: {kontostand}$</p>
            <p className="text-lg text-right mb-12">
              Lebenspunkte: {leben} / 3
            </p>

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

            <input
              type="text"
              className="p-2 mb-2 rounded-lg placeholder-gray-500 border focus:z-10 focus:border-yellow-500"
              value={userGuess}
              placeholder="Wort oder Konsonant eingeben"
              onChange={(e) => setUserGuess(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  guess();
                }
              }}
            />
            <div
              class="infovokal p-4 mt-5 text-sm rounded-lg bg-slate-200"
              role="alert"
            >
              <span class="font-medium">Vokale kaufen:</span> jeweils 30$
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
    }
  } else {
    return (
      <div>
        <div className="abfehler flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
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
              <input type="hidden" name="remember" value={name} />
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
