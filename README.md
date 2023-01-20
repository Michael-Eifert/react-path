# React path

## Arbeitsmodus
* Download und installiere Visual Studio Code [code.visualstudio.com](https://code.visualstudio.com) oder einen Editor deiner Wahl
* Investiere pro Abschnitt 1 bis maximal 2 Tage um dich in das Thema einzuarbeiten
* Der Abschnitt/die Aufgabenstellung wird **vorher** mit deine:r Mentor:in durchgesprochen
* Erstelle im Firmeneigenen [gitlabci.exxeta.com](https://gitlabci.exxeta.com) ein privates Repository und stelle einen Pull Request mit den Code Änderungen für jeden Abschnitt
* Nach jedem Abschnitt wird der Code und das gelernte Wissen von dem/der Mentor:in gechallenged und alle Fragen geklärt

## Beispielprojekt
Während du die Kapitel durcharbeitest, kannst du ein Beispiel-Projekt erstellen und dieses nach und nach um das neu gelernete Wissen anreichern und als Playground nutzen
* Das Beispielprojekt ist eine Webapp zu Kostenteilung einer Gruppe von Personen
* Beispiele siehe [splitwise.com](https://www.splitwise.com), [splid.app](https://splid.app) oder [costsplitapp.com](http://www.costsplitapp.com)

Die Webapp hat folgende Features:
* `Expenses` - Eigene Zahlungen innerhalb einer Gruppe
* `Benefits from` - Alle Zahlungen, bei der eine Person beteiligt ist (entweder selbst gezahlt oder von einer anderen Person bezahlt)
* `Group`
    * Hat einen `title`
    * Hat eien Währung (Standard €)
    * Hat einen 10-stelligen Code, der geteilt werden kann
    * `1-n` Personen können einer Gruppe zugeordnet sein
    * Eine Gruppe beinhaltet `0-n` Zahlungen und Ausgaben
    * `Balance` Der Saldo über alle `expenses` aller Personen
* `Person`
    * Hat einen `name`
    * `0-n` expensed
    * `Benefits from` expensed
    * `Balance` Der Saldo über alle `expenses` einer Person
* `Expense`
    * Hat einen `title`
    * Hat einen `amount` (in der Währung der Gruppe)
    * `1` Person, die den Betrag bezahlt hat
        * Nur Person erlaubt, die der Gruppe zugeordnet sind 
    * `1-n` Personen, für die der betrag gezahlt wurde
        * Nur Person erlaubt, die der Gruppe zugeordnet sind
    * Den Timestamp der Zahlung
    * Ist einer `Group` zugeordnet
* `Settle up`
    * `Suggested payments`
        * Verrechnung aller `Expenses` zwischen allen Personen innerhalb einer Gruppe
    * `Summary`
        * Auflistung aller `Expenses` innerhalb einer Gruppe

## 1. Typescript
* Aufgabe
    * Starte mit dem Typescript Kurs - https://youtube.com/playlist?list=PLNqp92_EXZBJYFrpEzdO2EapvU0GOJ09n
    * Ergänze dein gelerntes Wissen mit den offiziellen Typescript Docs
        * Utility Types - https://www.typescriptlang.org/docs/handbook/utility-types.html
        * Weitere interessante Links
            * Typescript Handbook - https://www.typescriptlang.org/docs/handbook/intro.html
            * Cheat Sheet - https://www.typescriptlang.org/cheatsheets
    * Was sind die Unterschiede zwischen `type` und `interface`?
        * Siehe https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
* Ziele
    * Festige dein Typescript Wissen
    * Arbeite 7 _eigene_ Beispiele für Typescript Utility Types https://www.typescriptlang.org/docs/handbook/utility-types.html (Bspw. Record, Omit, Exclude, Readonly, etc.) aus und stelle diese vor
 
## 2. Important Javascript features
Wenn du dein JavaScript-Wissen noch vertiefen oder auffrischen möchtest, dann schaue dir die Aufgaben in der Datei [JavaScript.md](JavaScript.md) an.

## 3. React
* Aufgabe
    * React und Typescript
        * Create a React app with typescript
            * In dem Artikel siehst du, wie du ein neues React Projekt mit Typescript erstellen kannst oder ein bestehendes um Typescript erweitern kannst: https://create-react-app.dev/docs/adding-typescript
        * https://kentcdodds.com/blog/how-to-write-a-react-component-in-typescript
            * Wie kannst du auf `type` und `interface` in Komponenten verweisen?
    * Arbeite die offiziellen React Docs durch
        * Main concepts - https://reactjs.org/docs/getting-started.html
        * Thinking in react - https://reactjs.org/docs/thinking-in-react.html
        * Advanced (Accessibility bis Web Components) - https://reactjs.org/docs/accessibility.html
        * Hooks - https://reactjs.org/docs/hooks-intro.html
    * Arbeite für folgende Hooks **eigene** Beispiele aus
        * `useEffect`
            * Bei welchen Szenarien biete sich der Einsatz von `useEffect` an?
            * Was ist der Unteschied im Verhalten zwischen einem leeren Array und einem Array mit props und state
            * Warum wird der Einsatz mehrerer Effects empfohlen?
            * Wie kann ein clean up für einen Effect umgesetzt werden? Für welche Szenarien ist ein clean up wichtig?
                * Erstelle ein Beispiel, bei dem du das Verhalten mit und ohne clean up demonstrierst
        * `useMemo`
            * Bei welchen Szenarien biete sich der Einsatz von `useMemo` an?
        * `useCallback`
            * Bei welchen Szenarien biete sich der Einsatz von `useCallback` an?
        * `useContext` und `useReducer`
            * Bei welchen Szenarien biete sich der Einsatz von `useContext` und `useReducer` an?
        * `useRef`
            * Bei welchen Szenarien biete sich der Einsatz von `useRef` an?
    * Naming Conventions in Javascript/React
        * https://www.robinwieruch.de/javascript-naming-conventions
            * Warum wird _kebab-case_ beim Naming von Dateien im Zusammenhang mit Betriebssystemen empfohlen? 
* Ziele
    * Festige dein Wissen über die React API
    * Verstehe, wie du Advanced React APIs wie bspw. Hooks richtig einsetzen kannst
    * Arbeite für die oben vorgestellten Hooks jeweils ein Beispiel aus
    * Wende dein Wissen zu logischen Operatoren an, um bedingtes Rendering umzusetzen (<https://reactjs.org/docs/conditional-rendering.html>)

## 4. Formatting und Linting
* Aufgabe
    * Wenn du mit Formatting und Linting noch nicht gearbeitet hast, bietet dir dieses https://www.youtube.com/watch?v=ZXW6Jn6or1w Video einen guten Startpunkt
    * Formatting
        * [prettier.io](https://prettier.io/docs/en/install.html)
            * Installiere Prettier und erstelle die Konfigurationsdatei `.prettierrc.json`
                * Hier https://prettier.io/docs/en/options.html findest du alle Konfigurationsmöglichkeiten
            * Führe Formatting über den Terminalbefehl `npx prettier --write .` manuell aus
            * Automatisiere das Formatting
                * Installiere das passende Editor Plugins https://prettier.io/docs/en/editors.html
            * Erstelle jeweils ein Beispiel für manuelles und automatisiertes formatting
    * Linting
        * [eslint.org](https://eslint.org/docs/latest/user-guide/getting-started)
            * Installiere ESLint und erstelle die Konfigurationsdatei `.eslintrc.js`
                * Hier https://eslint.org/docs/latest/user-guide/configuring/configuration-files#configuration-file-formats findest du mehr über die Konfigurationsdatei
                * Hier https://eslint.org/docs/latest/user-guide/configuring/ findest du Konfigurationsmöglichkeiten
        * Installiere das passende Editor Plugin https://eslint.org/docs/latest/user-guide/integrations
        * [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
        * Force Linter Warnings und Errors für Typescript-Code
        * Force Linter Warnings und Errors für Reactjs-Code
* Ziele
    * Festige dein Wissen zu Formatting und Linting Tools
    * Welche Vorteile bieten beide Tools beim kollaborativen Arbeiten in Teams?

## 5. Debugging
* Aufgabe
    * React Debugging Guide
        * https://reactjs.org/blog/2014/01/02/react-chrome-developer-tools.html
        * https://raygun.com/blog/react-debugging-guide
    * Debugging mit dem Chrome Browser
        * https://developer.chrome.com/docs/devtools/javascript
    * React DevTools
        * https://kentcdodds.com/blog/react-devtools
        * Lerne wie du die React DevTools einsetzen kannst
* Ziele
    * Wie kannst du eine React Anwendung debuggen?
    * Wie kannst du https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger einsetzen?
    * Wie kann unterstützen [`console.count()`](https://developer.mozilla.org/en-US/docs/Web/API/console/count), [`console.table()`](https://developer.mozilla.org/en-US/docs/Web/API/console/table) und `console.info({someVariable})` beim debuggen?

## 6. Testing
* Aufgabe
    * Arbeite die Tutorials rund ums Testing durch
        * Testing und die Testpyramide
            * https://reactjs.org/docs/testing.html
            * https://reactjs.org/docs/testing-recipes.html
            * https://kentcdodds.com/blog/static-vs-unit-vs-integration-vs-e2e-tests
        * How to
            * https://kentcdodds.com/blog/how-to-add-testing-to-an-existing-project
            * https://kentcdodds.com/blog/testing-components-using-render-props
            * https://kentcdodds.com/blog/testing-implementation-details
            * https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
        * React Testing Library
            * https://testing-library.com/docs/react-testing-library/intro
            * https://testing-library.com/docs/react-testing-library/cheatsheet
        * E2E with Cypress
            * https://docs.cypress.io/guides/component-testing/quickstart-react#Configuring-Component-Testing
            * Arbeite das Tutorial in "React Component Testing" durch
            * Welche Vorteile bringt E2E Testing?
* Ziele
    * Arbeite die Tutorials durch und lerne, wie du deine Reactjs Anwendung testen kannst

## 7. Routing
* Aufgabe
    * Einführung - https://reactrouter.com/en/main/getting-started/tutorial
    * Fortgeschritten - https://reactrouter.com/en/main/getting-started/overview
    * Erstelle eine Listen- und Detailseite und füge einen Router hinzu um zwischen beiden Seiten zu navigieren
        * Die Übersichtsseite enthält eine Liste von Film-Titeln
            * Bei Klick auf ein Listenelement wird man auf die Detailseite navigiert
        * Die Detailseite zeigt einen Film mit Detail-Informationen an
            Die Detailseite enthätl einen Back-Button über den man auf die Liste zurück navigieren kann
        * Daten, Bilder können hardcoded sein
* Ziele
    * Welche Anwendungsfälle gibt es für die unterschiedlichen Router (Routers, BrowserRouter, HashRouter, HistoryRouter, etc.)?
    * Was ist der Unterschied zwischen [`Link`](https://reactrouter.com/en/main/components/link) und [`NavLink`](https://reactrouter.com/en/main/components/nav-link)
        * Erstelle jeweils ein Beispiel in der React App
    * Was ist der Unterschied zwischen [`Navigate`](https://reactrouter.com/en/main/components/navigate) und [`useNavigate`](https://reactrouter.com/en/main/hooks/use-navigate)
        * Erstelle jeweils ein Beispiel in der React App

## 8. Styling- und Komponenten-Bibliotheken
* Aufgabe
    * Lerne unterschiedliche Styling-Möglichkeiten kennen und für Styles für das in "5. Routing" erstellte Beispiel hinzu (Da für jede Lösung das Projekt-Setup angepasst werden muss, kannst du das Projekt am Besten für jede Styling-Möglichkeiten duplizieren)
        * Utility-first CSS framework
            * [tailwindcss.com](https://tailwindcss.com/docs/installation)
                * Reichere deine Komponenten mit Tailwind CSS Klassen an
        * CSS-in-JS
            * [styled-components.com](https://styled-components.com/docs/basics)
                * Reichere deine Komponenten um styled-components an
        * UI Komponenten Bibliotheken
            * Verwende nur eines der aufgeführten Komponenten Bibliotheken. Vergleiche im Anschluss, wie sich die Umsetzung mit den anderen Komponenten Bibliotheken unterscheidet
            * Füge Standardkomponenten aus der Bibliothek hinzu
            * Individualisiere das Styling der verwendeten Komponenten
            * [chakra-ui.com](https://chakra-ui.com/getting-started)
            * [mantine.dev](https://mantine.dev/pages/getting-started)
            * [mui.com](https://mui.com/material-ui/getting-started/overview)
            * [ant.design](https://ant.design/docs/react/introduce)
        * Headless UI Komponenten Bibliotheken
            * Verwende nur eines der aufgeführten Komponenten Bibliotheken. Vergleiche im Anschluss, wie sich die Umsetzung mit den anderen Komponenten Bibliotheken unterscheidet
            * Füge Standardkomponenten aus der Bibliothek hinzu
            * Individualisiere das Styling der verwendeten Komponenten
            * [headlessui](https://headlessui.com)
            * [Reach UI](https://reach.tech)
            * [Radix UI](https://www.radix-ui.com)
* Ziele
    * Lerne wichige Styling- und Komponenten-Bibliotheken kennen
    * Welche Vor-/Nachteile siehst du bei der Verwendung eines Utility-first CSS framework, CSS-in-JS, UI Komponenten und Headless UI?
    * Welche Vor-/Nachteile siehst du bei der Verwendung in Bezug auf Accessibility Standards?
        * Siehe [Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility) und [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
    * Was ist der genaue Unterschied zwischen einem Headlesss UI gegenüber einem UI Komponenten-Frameworks?

## 9.1 REST Mock Backend
* Aufgabe
  * https://blog.bitsrc.io/mock-apis-different-techniques-for-react-and-angular-156284b757f4
  * https://egghead.io/lessons/javascript-creating-demo-apis-with-json-server
* Ziele:
    * Erstelle in deinem Projekt mit json-server ein Mock Backend
    * Füge benutzerdefinierten Routen hinzu
    * Füge ein `middleware.js`-File hinzu, um auch POST-Requests zu unterstützen

## 9.2 Data fetching with REST
* Aufgabe
    * Erstelle ein Beispiel für Fetch API, Axios und Tanstack Query
    * Fetch API
        * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    * Axios
        * https://axios-http.com/docs/intro
    * Tanstack Query
        * https://tanstack.com/query/v4/docs/overview
* Ziele:
    * Fetche Daten mit Hilfe deines Mock-Backends (oder einer vorhandene öffentliche API, bspw. hier https://github.com/public-apis/public-apis)
    * Erweitere dein Beispiel (Liste und eine Detail-Ansicht) um Data-Fetching
        * Du kannst Vom Film-Beispiel auch gerne auf andere Informationen (bspw. Pokemon, etc. wechseln)
    * Welche Vorteile hat die build in Fetch API?
    * Welche Vorteile bringen Axios und Tanstack Query mit?
        * Wie unterscheiden sich beide Bibliotheken voneinander?

## 9.3 Data fetching with GraphQL
* Aufgabe
    * https://www.apollographql.com/tutorials
        * Lift-off I: Basics - https://www.apollographql.com/tutorials/lift-off-part1
        * Lift-off II: Resolvers - https://www.apollographql.com/tutorials/lift-off-part2
        * Lift-off III: Arguments - https://www.apollographql.com/tutorials/lift-off-part3
        * Lift-off IV: Mutations - https://www.apollographql.com/tutorials/lift-off-part4
        * Lift-off V: Production & the Schema Registry - https://www.apollographql.com/tutorials/lift-off-part5
        * Side Quest: Authentication & Authorization - https://www.apollographql.com/tutorials/side-quest-auth
        * Side Quest: Intermediate Schema Design - https://www.apollographql.com/tutorials/side-quest-intermediate-schema-design
* Ziele
    * Lerne GraphQL und den Apollo Client kennen
    * Welche Vorteile und Nachteile hat GraphQL gegenüber REST und umgekehrt?

## 10. Nextjs
* Aufgabe
    * Erstelle eine Nextjs App (Baue die bestehende um, oder verwende eine neue Anwendung. Siehe auch https://github.com/public-apis/public-apis)
        * https://nextjs.org/learn/basics/create-nextjs-app
        * Typescript (Siehe https://nextjs.org/learn/excel/typescript/setup)
        * Verwende [pnpm.io](https://pnpm.io)
    * Lerne alle Data Fetching Möglichkeiten kennen
        * https://nextjs.org/docs/basic-features/data-fetching/overview
        * Für welche Anwendungsfälle verwendest du CSR, SSR, SSG oder ISR?
* Ziele
    * Kombiniere das vorher gelernte (Debugging, Styling, Data Fetching, Error handling) in einer App
    * Was sind die Unterschiede zu einer reinen React.js app?
    * Welche Vor-/Nachteile hat React
    * Welche Vor-/Nachteile hat Nextjs

## 11. Deployment
* Aufgabe
    * Intro to Vercel - https://vercel.com/docs/concepts/get-started
* Ziele
    * Erstelle einen Vercel account und deploye die Nextjs app


# Optional Content

## 9.4 Data fetching with Websockets
* Aufgabe
  * https://github.com/websockets/ws
  * https://socket.io/
  * https://github.com/robtaussig/react-use-websocket
  * https://blog.postman.com/postman-supports-websocket-apis/
* Ziele
  * Erstelle einen kleinen WebSocket-Server mit `ws`, der von verbundenen Clients eine Nachricht mit dem Inhalt "hello" erwartet und anschließend im Sekundentakt Nachrichten versendet
  * Integriere WebSockets in eine bestehende Komponenten deiner Anwendung mit und verbinde dich mit dem Server. Visualisiere die empfangenen Nachrichten in deiner Anwendung.
  * Wie unterscheidet sich `ws` von [`Socket.IO`](https://socket.io/)?

## 9.5 Data fetching with tRPC
* Aufgabe
    * https://trpc.io/docs
    * https://trpc.io/docs/v9/nextjs
* Ziele
    * Wie funktioniert tRPC
    * Was sind die Vor-/Nachteile zu REST und GraphQL
    * Wann würdest du tRPC, REST, GraphQL einsetzen?

## 13. Database client
* Aufgabe
    * Introduction - https://www.prisma.io/docs/concepts/overview/what-is-prisma
    * https://www.prisma.io/nextjs
* Ziele
    * Verbinde eine Datenbank (Bspw. Postgres) mit der Nextjs Projekt
    * Query Daten von der Middleware (Bspw. GetServerSideProps)
    * Query Daten vom Client (Bspw. UseEffect)
    * Was ist beim Zugriff vom Client zu beachten?
