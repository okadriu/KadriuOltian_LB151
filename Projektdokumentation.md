# Projekt-Dokumentation

✍️ Ihr Nachname

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|       | 0.0.1   | ✍️ Jedes Mal, wenn Sie an dem Projekt arbeiten, fügen Sie hier eine neue Zeile ein und beschreiben in *einem* Satz, was Sie erreicht haben. |
|       | 0.0.2   |                                                              |
|       | 0.0.3   |                                                              |
|       | 0.0.4   |                                                              |
|       | 0.0.5   |                                                              |
|       | 0.0.6   |                                                              |
|       | 1.0.0   |                                                              |

# 0 Ihr Projekt

✍️ Beschreiben Sie Ihr Projekt in einem griffigen Satz.

# 1 Analyse

✍️ Beschreiben Sie, auf welchem Tier Sie die dynamischen Elemente der Anwendung unterbringen möchten:

* Tier 1 (Presentation): ...
* Tier 2 (Webserver):
* Tier 3 (Application Server):
* Tier 4 (Dataserver):

# 2 Technologie

✍️ Beschreiben Sie für dieselben Tiers, welche Programmiersprache bzw. Technologie Sie verwenden möchten.

# 3 Datenbank

✍️ Wie steuern Sie Ihre Datenbank an? Wie ist das Interface aufgebaut? 

# 4.1 User Stories

✍️ Formulieren Sie klare Anforderungen in der Form von User Stories (*„als … möchte ich … damit …“*) und zu jeder Anforderung mindestens einen dazugehörigen Testfall (in Kapitel 4.2). 

✍️ Formulieren Sie weitere, eigene Anforderungen und Testfälle, wie Sie Ihre Applikation erweitern möchten. Geben Sie diesen statt einer Nummer einen Buchstaben (`A`, `B`, etc.)

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


✍️ Jede User Story hat eine ganzzahlige Nummer (1, 2, 3 etc. oder Zahl), eine Verbindlichkeit (Muss oder Kann?), und einen Typ (Funktional, Qualität, Rand). 

# 4.2 Testfälle

| TC-№ | Vorbereitung | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  |              |         |                   |
| ...  |              |         |                   |

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, die der Testfall abdeckt, und `m` von `1` an nach oben gezählt. Beispiel: Der dritte Testfall, der die zweite User Story abdeckt, hat also die Nummer `2.3`.

# 5 Prototyp

✍️ Erstellen Sie Prototypen für das GUI (Admin-Interface und Quiz-Seite).

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
