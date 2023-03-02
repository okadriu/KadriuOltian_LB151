import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="nav flex justify-between items-stretch gap-8 pt-7 pl-7 pr-7 xs:text-xs sm:text-sm lg:text-sm md:text-base xl:text-base 2xl:text-lg">
      <Link to="/" className="uppercase text-2xl bold px-2 py-2">
        GoSpin
      </Link>
      <ul className="semibold">
        {location.pathname === "/AdminLogin" ? (
          <CustomLink
            className="hover:bg-gray-100 hover:rounded-full p-2"
            to="/"
          >
            Zurück
          </CustomLink>
        ) : (
          <CustomLink
            className="hover:bg-gray-100 hover:rounded-full p-2"
            to="/AdminLogin"
          >
            Als Admin anmelden
          </CustomLink>
        )}
        {location.pathname === "/Spiel" ? (
          <CustomLink
            className="bg-yellow-400 hover:bg-yellow-500 rounded-full px-4 py-2"
            to="/"
            /* to="/HighscoreListe" */
            /* onClick={saveHighscore} */
          >
            Spiel beenden
          </CustomLink>
        ) : (
          <CustomLink
            className="bg-yellow-400 hover:bg-yellow-500 rounded-full px-4 py-2"
            to="/Spiel"
          >
            Spielen
          </CustomLink>
        )}
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
