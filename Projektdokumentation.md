# Projekt-Dokumentation

Kadriu

| **Datum** | **Version** | **Zusammenfassung**                                              |
| :-----: | :-------: | :------------------------------------------------------------: |
|  12.01.2023     | 0.0.1   | Projektbeschreibung geschrieben, Analyse durchgeführt und Technologien ausgewählt, Datenbank ausgewählt und informiert, User Stories und Testfälle zu den Anforderungen geschrieben, GUI-Prototypen erstellt |
|       | 0.0.2   |                                                              |
|       | 0.0.3   |                                                              |
|       | 0.0.4   |                                                              |
|       | 0.0.5   |                                                              |
|       | 0.0.6   |                                                              |
|       | 1.0.0   |                                                              |

# 0 Ihr Projekt

Ich werde eine Online-Version des klassischen "Glücksrad"-Spiels mit Benutzerauthentifizierung, Rätsel-Verwaltung, Kategoriemanagement und Highscore-Liste, die sowohl auf Desktop- als auch auf Mobilgeräten benutzbar ist, implementieren und diese in einer 4-Tier-Architektur mit React.js, Node.js, MySQL und Transaktionsmanagement entwickeln.

# 1 Analyse

* Tier 1 (Presentation): Im Tier 1 werde ich die Benutzeroberfläche und die dynamischen Elemente von React.js unterbringen, die für den Benutzer sichtbar sind, wie z.B. das Glücksrad, die Rätsel-Wörter und -Phrasen, die Kategorien, die Schaltflächen zum Drehen des Rades und zum Kauf von Buchstaben, die Highscore-Liste etc. Hier werde ich auch Formulare für die Eingabe von Namen, Konsonanten und Vokalen sowie für das Lösen des Rätsels einbinden.
* Tier 2 (Webserver): Im Tier 2 werde ich Skripte und Programme unterbringen, die HTTP-Anfragen von Benutzern empfangen und verarbeiten, wie z.B. Anfragen zum Drehen des Rades, zum Kauf von Buchstaben, zum Lösen des Rätsels etc. Diese Skripte kann ich z.B. in Node.js schreiben und diese dienen dazu, die Benutzeranfragen an das Backend weiterzuleiten und die Antworten an den Benutzer zurückzusenden. Hier werde ich auch die Eingaben von Benutzern auf Client- und Serverseite auf ihre Vollständigkeit und Richtigkeit überprüfen.
* Tier 3 (Application Server): Im Tier 3 werde ich die Business Logic der Anwendung unterbringen, wie z.B. Algorithmen und Funktionen zur Verwaltung des Spielverlaufs, zur Überprüfung der Rätsel-Lösungen, zur Verwaltung des Kontostands und der Lebenspunkte, zur Überprüfung, ob Rätsel-Wörter oder -Phrasen schon einem Spieler gestellt wurden etc.
* Tier 4 (Dataserver): Im Tier 4 werde ich Firebase als Datenbank verwenden. Hier werde ich die Rätsel-Wörter und -Phrasen, Kategorien, Highscores etc. speichern. Ich werde auch das Transaktionsmanagement implementieren, um sicherzustellen, dass die Datenbank immer in einem konsistenten Zustand ist.

# 2 Technologie

* Tier 1 (Presentation): React.js, HTML, CSS
* Tier 2 (Webserver): Node.js
* Tier 3 (Application Server): Node.js
* Tier 4 (Dataserver): Firebase

# 3 Datenbank

Firebase bietet sowohl eine REST-API als auch eine JavaScript-Bibliothek (Firebase SDK) um die Datenbank zu steuern. Mit diesen Methoden kann man Daten aus der Datenbank abrufen und speichern. Die Firebase-Datenbank ist in verschiedene Funktionen wie Realtime Database, Authentication, Cloud Firestore, Cloud Storage, Hosting und Cloud Functions unterteilt. Um diese Funktionen zu verwalten und zugreifen, kann man die Firebase-Konsole benutzen.

# 4.1 User Stories

| US-№ | Verbindlichkeit | Typ        | Beschreibung                                                                                                                                                                                                    |
|:----:|:---------------:|:----------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| 1    | Muss            | Funktional | Als Administrator möchte ich mich durch Benutzername und Passwort authentifizieren, damit ich Zugriff auf die Administrationsfunktionen habe                                                                    |
| 2    | Muss            | Funktional | Als Administrator möchte ich Phrasen und Rätselwörter anlegen, ändern und löschen können, damit ich das Quiz aktualisieren und anpassen kann                                                                    |
| 3    | Muss            | Funktional | Als Administrator möchte ich Kategorien anlegen und jedes Wort bzw. jede Frage einer Kategorie zuordnen können, damit ich die Fragen in verschiedene Kategorien einteilen kann                                  |
| 4    | Kann            | Funktional | Als Administrator möchte ich einzelne Einträge der Highscore-Liste löschen können, damit ich ungültige oder unerwünschte Einträge entfernen kann                                                                |
| 5    | Muss            | Qualität   | Als Client möchte ich einen Webbrowser nutzen, damit ich das Quiz spielen kann                                                                                                                                  |
| 6    | Muss            | Funktional | Als Kandidat möchte ich meinen Namen eingeben können, der auf der Highscore-Liste erscheint, damit ich mich im Spiel identifizieren kann                                                                        |
| 7    | Muss            | Funktional | Als Kandidat möchte ich zu jeder Zeit meinen Kontostand sehen, damit ich den Fortschritt meines Spiels verfolgen kann                                                                                           |
| 8    | Muss            | Funktional | Als Kandidat möchte ich zu jeder Zeit meine Lebenspunkte sehen, damit ich weiß, wie viele Versuche ich noch habe                                                                                                |
| 9    | Muss            | Funktional | Als Kandidat möchte ich wissen, ob meine gewählte Antwort richtig oder falsch war, damit ich meine Strategie anpassen kann                                                                                      |
| 10   | Muss            | Funktional | In der Highscore-Liste möchte ich folgende Daten sehen: Rang, Name des Spielers, Zeitpunkt des Spiels, Geldbetrag und Anzahl Spielrunden, damit ich meine Leistung im Vergleich zu anderen Spielern sehen kann  |
| 11   | Muss            | Funktional | Die Highscore-Liste möchte ich nach Rang sortiert sehen, der durch die Höhe des Geldbetrags bestimmt wird, damit ich sehen kann, wer am erfolgreichsten war                                                     |
| 12   | Muss            | Funktional | Als Kandidat möchte ich sicherstellen, dass mir kein Rätsel-Wort oder keine Phrase mehr als einmal gestellt werden, damit ich immer neue Herausforderungen habe                                                 |
| 13   | Muss            | Funktional | Als Kandidat möchte ich jederzeit entweder spielen oder aufhören und meinen Gewinn in die Highscore-Liste übernehmen können, damit ich frei entscheiden kann, wie lange ich spiele                              |
| 14   | Muss            | Funktional | Als Kandidat möchte ich das Spiel mit einer spielbaren Anzahl Wörtern und Fragen gefüllt sehen, damit ich ausreichend Herausforderungen habe                                                                    |
| 15   | Muss            | Funktional | Als Kandidat möchte ich, dass die Anzahl der Spielrunden gezählt wird, damit ich sehen kann, wie oft ich gespielt habe                                                                                          |
| 16   | Muss            | Qualität   | Als Entwickler möchte ich, dass einfache Formulareingaben wie leere Textfelder etc. auf Client- und Serverseite geprüft werden, damit ich sicherstelle, dass alle Eingaben korrekt sind                         |
| 17   | Kann            | Rand       | Als Entwickler möchte ich die Wahl der Datenbank haben, damit ich das für meine Bedürfnisse am besten geeignete Produkt auswählen kann                                                                          |
| 18   | Muss            | Qualität   | Als Entwickler möchte ich eine Datenbankanbindung verwenden, die möglichst unabhängig vom tatsächlich eingesetzten Produkt ist, damit ich die Flexibilität habe, das Produkt in Zukunft zu wechseln             |
| 19   | Muss            | Qualität   | Als Entwickler möchte ich Transaktionsmanagement einsetzen, damit ich sicherstellen kann, dass alle Datenbankoperationen erfolgreich abgeschlossen werden oder im Falle eines Fehlers rückgängig gemacht werden |
| 20   | Muss            | Qualität   | Als Entwickler möchte ich Sicherheitsaspekte umsetzen, damit ich sicherstelle, dass die Applikation sicher ist und Daten vor unbefugtem Zugriff geschützt sind                                                 |
| 21   | Muss            | Qualität   | Als Entwickler möchte ich die Applikation mit einer Session-basierten, professionellen 4-Tier Architektur implementieren, damit ich eine modulare und skalierbare Struktur habe                               |
| A    | Kann            | Funktional | Als Kandidat möchte ich während des Spiels eine Hilfe-Funktion nutzen können, die mir einen Buchstaben des Rätselworts oder der Phrase anzeigt, damit ich bei Schwierigkeiten Unterstützung bekomme            |
| B    | Kann            | Qualität   | Die Anwendung soll responsive gestaltet werden, damit sie auf mobilen Geräten gut angezeigt wird und auf kleineren Bildschirmen benutzerfreundlich ist                                                         |


# 4.2 Testfälle

| **TC-№** | **Vorbereitung**                           | **Eingabe**                                                                          | **Erwartete Ausgabe**                                                                                                |
|:--------:|:------------------------------------------:|:------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------:|
| 1.1      | Administrator hat bereits ein Konto        | Benutzername und Passwort eingeben                                                   | Erfolgreiche Anmeldung und Zugriff auf Administrationsfunktionen                                                     |
| 2.1      | Administrator hat eine Sitzung gestartet   | Anlegen, ändern oder löschen von Phrasen und Rätselwörtern                           | Erfolgreiche Aktualisierung des Quiz                                                                                 |
| 3.1      | Administrator hat Kategorien angelegt      | Zuordnung von Phrasen und Rätselwörtern zu Kategorien                                | Erfolgreiche Einteilung der Fragen in Kategorien                                                                     |
| 4.1      | Administrator hat Highscore-Liste geöffnet | Löschen eines einzelnen Eintrags                                                     | Erfolgreiche Entfernung des Eintrags                                                                                 |
| 5.1      | Client hat Zugang zum Internet             | Nutzung eines Webbrowsers                                                            | Erfolgreiches Spielen des Quiz                                                                                       |
| 6.1      | Kandidat hat eine Sitzung gestartet        | Eingabe des Namens                                                                   | Name des Kandidaten erscheint auf der Highscore-Liste                                                                |
| 7.1      | Kandidat hat eine Sitzung gestartet        | Keine Eingabe                                                                        | Anzeige des aktuellen Kontostands                                                                                    |
| 8.1      | Kandidat hat eine Sitzung gestartet        | Keine Eingabe                                                                        | Anzeige der aktuellen Lebenspunkte                                                                                   |
| 9.1      | Kandidat hat eine Antwort ausgewählt       | Keine Eingabe                                                                        | Anzeige, ob die Antwort richtig oder falsch war                                                                      |
| 10.1     | Highscore-Liste wurde geöffnet             | Keine Eingabe                                                                        | Anzeige von Rang, Name des Spielers, Zeitpunkt des Spiels, Geldbetrag und Anzahl der Spielrunden                     |
| 11.1     | Highscore-Liste wurde geöffnet             | Keine Eingabe                                                                        | Highscore-Liste sortiert nach Rang, bestimmt durch Höhe des Geldbetrags                                              |
| 12.1     | Kandidat hat eine Sitzung gestartet        | Keine Eingabe                                                                        | Keine Wiederholung von Rätsel-Wörtern oder Phrasen                                                                   |
| 13.1     | Kandidat hat eine Sitzung gestartet        | Entscheidung zum Spielen oder Aufhören und Übernehmen des Gewinns in Highscore-Liste | Möglichkeit, jederzeit das Spiel zu beenden und den Gewinn in die Highscore-Liste zu übernehmen                      |
| 14.1     | Kandidat hat eine Sitzung gestartet        | Keine Eingabe                                                                        | Anzeige einer ausreichenden Anzahl von Wörtern und Fragen im Spiel                                                   |
| 15.1     | Kandidat hat eine Sitzung gestartet        | Auswahl einer Kategorie                                                              | Anzeige von Fragen und Wörtern nur aus der ausgewählten Kategorie                                                    |
| 16.1     | Kandidat hat eine Sitzung gestartet        | Eingabe einer Antwort                                                                | Anzeige, ob die Antwort richtig oder falsch war und Anpassung des Kontostands und der Lebenspunkte                   |
| 17.1     | Kandidat hat eine Sitzung gestartet        | Erreichen der maximalen Anzahl von Lebenspunkten                                     | Anzeige einer Nachricht, dass das Spiel beendet ist und Möglichkeit, den Gewinn in die Highscore-Liste zu übernehmen |
| 18.1     | Kandidat hat eine Sitzung gestartet        | Erreichen eines bestimmten Kontostands                                               | Anzeige einer Nachricht, dass ein bestimmter Preis gewonnen wurde und Möglichkeit, das Spiel fortzusetzen            |


# 5 Prototyp
![GoSpin - Homepage](https://user-images.githubusercontent.com/69577043/212044614-8c3f867a-db4b-4a1a-963e-2aff18d7d7ca.png)
![GoSpin - Anmelden](https://user-images.githubusercontent.com/69577043/212476870-3905aa1a-08cb-42c2-863f-941041545854.png)
![GoSpin - Registrieren](https://user-images.githubusercontent.com/69577043/212044659-ee74be50-be06-4baa-a4cf-a73f58464965.png)
![Spielseite](https://user-images.githubusercontent.com/69577043/212044687-1fd7d325-166d-45c6-8864-d314fa88eaa8.jpg)
![GoSpin - Administrationsverwaltung](https://user-images.githubusercontent.com/69577043/212045350-f8bd2989-dacb-42f5-b94c-1a1c1ae77c9a.png)


# 6 Implementation

✍️ Halten Sie fest, wann Sie welche User Story bearbeitet haben

| User Story | Datum | Beschreibung |
| ---------- | ----- | ------------ |
| ...        |       |              |

# 7 Projektdokumentation

| US-№ | Erledigt? | Entsprechende Code-Dateien oder Erklärung |
| ---- | --------- | ----------------------------------------- |
| 1    | ja / nein |                                           |
| ...  |           |                                           |

# 8 Testprotokoll

✍️ Fügen Sie hier den Link zu dem Video ein, welches den Testdurchlauf dokumentiert.

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

# 9 `README.md`

✍️ Beschreiben Sie ausführlich in einer README.md, wie Ihre Applikation gestartet und ausgeführt wird. Legen Sie eine geeignete Möglichkeit (Skript, Export, …) bei, Ihre Datenbank wiederherzustellen.

# 10 Allgemeines

- [ ] Ich habe die Rechtschreibung überprüft
- [ ] Ich habe überprüft, dass die Nummerierung von Testfällen und User Stories übereinstimmen
- [ ] Ich habe alle mit ✍️ markierten Teile ersetzt
