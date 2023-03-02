# Erste Schritte mit Create React App

Dieses Projekt wurde mit [Create React App](https://github.com/facebook/create-react-app) gebootstrapped.

## Verfügbare Skripte

Im Projektverzeichnis können Sie folgendes ausführen:

### `npm install`

Bevor Sie den Befehl `npm start` ausführen, sollten Sie den Befehl `npm install` ausführen, damit alle Dependencies heruntergeladen werden.

### `npm start`

Startet die App im Entwicklungsmodus.\
Öffnen Sie [http://localhost:3000](http://localhost:3000), um sie in Ihrem Browser zu betrachten.

Die Seite wird neu geladen, wenn Sie Änderungen vornehmen.\
Sie können auch alle Lint-Fehler in der Konsole sehen.

### `npm test`

Startet den Test Runner im interaktiven Überwachungsmodus.\
Weitere Informationen finden Sie im Abschnitt über [Tests ausführen] (https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`

Baut die Anwendung für die Produktion in den `build` Ordner.\
Es bündelt React korrekt im Produktionsmodus und optimiert den Build für die beste Leistung.

Der Build ist minifiziert und die Dateinamen enthalten die Hashes.\
Ihre App ist bereit für das Deployment!

Siehe den Abschnitt über [deployment](https://facebook.github.io/create-react-app/docs/deployment) für weitere Informationen.

### `npm run eject`

**Hinweis: Dies ist ein einseitiger Vorgang. Sobald Sie `eject` ausführen, können Sie nicht mehr zurück!

Wenn Sie mit der Wahl des Build-Tools und der Konfiguration nicht zufrieden sind, können Sie jederzeit `eject` ausführen. Mit diesem Befehl wird die einzelne Build-Abhängigkeit aus Ihrem Projekt entfernt.

Stattdessen werden alle Konfigurationsdateien und die transitiven Abhängigkeiten (webpack, Babel, ESLint, etc.) direkt in Ihr Projekt kopiert, so dass Sie die volle Kontrolle über sie haben. Alle Befehle mit Ausnahme von "eject" funktionieren weiterhin, aber sie verweisen auf die kopierten Skripte, so dass Sie sie anpassen können. An diesem Punkt sind Sie auf sich allein gestellt.

Sie müssen `eject` nicht mehr verwenden. Der kuratierte Funktionssatz ist für kleine und mittlere Einsätze geeignet, und Sie sollten sich nicht verpflichtet fühlen, diese Funktion zu nutzen. Wir verstehen jedoch, dass dieses Tool nicht nützlich wäre, wenn Sie es nicht anpassen könnten, wenn Sie dazu bereit sind.

## Firebase Datenbank

Unter KadriuOltian_LB151 > src > firebase.js können Sie Ihre Firebase (Authentication und Firestore Database) initialisieren, indem Sie einmal die apiKey, authDomain, projectId, storageBucket, messagingSenderId und appId durch Ihre eigenen Werte ersetzen.
Danach können Sie in der "Authentication"-Section einen Benutzer erstellen (E-Mail und Passwort) und schon funktioniert das Loginformular.

## Mehr erfahren

Sie können mehr in der [Create React App Dokumentation](https://facebook.github.io/create-react-app/docs/getting-started) erfahren.

Um React zu lernen, schauen Sie sich die [React-Dokumentation](https://reactjs.org/) an.

### Code-Aufteilung

Dieser Abschnitt wurde hierher verschoben: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyse der Bundle-Größe

Dieser Abschnitt wurde hierher verschoben: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Erstellen einer progressiven Web-App

Dieser Abschnitt wurde hierher verschoben: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Erweiterte Konfiguration

Dieser Abschnitt wurde hierher verschoben: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Bereitstellung

Dieser Abschnitt wurde hierher verschoben: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` schlägt beim Minifizieren fehl

Dieser Abschnitt wurde hierher verschoben: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
