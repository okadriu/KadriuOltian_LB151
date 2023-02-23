import gluecksrad from "./images/Gluecksrad.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Home() {
  return (
    <section>
      <div class="grid w-screen px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="herotxt p-7 max-w-3xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl xs:text-3xl">
            Errate die Wörter oder Redewendungen, drehe am Glücksrad und steige
            in der Highscore-Liste auf
          </h1>
          <div className="max-w-3xl">
            <Link
              to="/Spiel"
              className="ml-7 rounded-full bg-yellow-500 px-3 py-3 medium hover:bg-yellow-600"
            >
              Jetzt kostenlos spielen
            </Link>
            <Link
              to="/HighscoreListe"
              className="highscoretxt inline-flex items-center justify-center px-2 py-3 mr-3 ml-3 text-center hover:bg-gray-100 hover:rounded-full"
            >
              <span>🏆</span>
              <span className="underline">Highscoreliste</span>
            </Link>
            <Link
              to="/AdminLogin"
              className="adminlogintxt inline-flex items-center justify-center py-3 text-center underline xs:bg-violet-600 hover:bg-gray-100 hover:rounded-full p-2"
            >
              Als Admin anmelden
            </Link>
          </div>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center">
          <img src={gluecksrad} alt="Glücksrad" className="gluecksrad" />
        </div>
      </div>
    </section>
  );
}
