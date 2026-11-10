# Fizyka 2

Materiały do nauki na kolokwia z Fizyki II (Informatyka, AGH): rozwiązania zestawów zadań, ściągi, karta wzorów i strona z fiszkami.

**🌐 Strona: [cinek477.github.io/Fiz-II](https://cinek477.github.io/Fiz-II/)**

## Zawartość

| Plik / folder | Co to jest |
|---|---|
| `zestaw 1.md` | Prąd elektryczny i magnetyzm – rozwiązania krok po kroku |
| `zestaw 2.md` | Cewki, drgania i fale EM – rozwiązania krok po kroku |
| `do kolosa1.md` | Ściąga do kolosa 1 (z rozwiązanym zadaniem z płytki) |
| `do kolosa2.md` | Ściąga do kolosa 2 |
| `karta wzorów.md` | Wszystkie wzory w jednym miejscu, pogrupowane działami |
| `strona/` | Strona do nauki: fiszki, notatki, karta wzorów, interaktywne wykresy |

Pliki `.md` używają wzorów LaTeX, kolorowych ramek (`> [!tip]`) i wykresów Mermaid. Najlepiej wyglądają w **Obsidianie** albo na **GitHubie**.

## Strona

Panele:
- **Fiszki** – 35 kart z wzorami i legendą zmiennych, oznaczanie „Umiem / Powtórz”, talie (Kolos 1, Zestaw 2, Do powtórki), tasowanie, reset postępu. Skróty: spacja – odwróć, ← → – nawigacja, 1 – powtórz, 2 – umiem.
- **Notatki** – ściągi i rozwiązania zestawów z wzorami i interaktywnymi wykresami.
- **Karta wzorów**.
- **Wykresy** – 8 wykresów z suwakami (źródło z oporem wewnętrznym, RL, RLC, rezonans, faza, pole kuli, fala EM).

Pliki strony:

| Plik | Rola |
|---|---|
| `index.html` | układ strony |
| `style.css` | wygląd (kolory jak w portfolio, jasny i ciemny motyw) |
| `cards.js` | treść fiszek i legenda zmiennych |
| `charts.js` | interaktywne wykresy |
| `app.js` | logika: fiszki, panele, renderowanie notatek |
| `notes.json` | notatki zebrane z plików `.md` (generowany) |
| `build-notes.js` | buduje `notes.json` |
| `katex/` | style i czcionki do wzorów |

### Uruchomienie lokalnie

Strona wczytuje `notes.json`, więc trzeba ją otworzyć przez serwer, a nie bezpośrednio z pliku:

```bash
cd strona
npx http-server -p 8765
```

Potem wejdź na `http://localhost:8765`.

### Po zmianie notatek

Po edycji któregoś pliku `.md` odśwież `notes.json`:

```bash
cd strona
node build-notes.js
```

### Dodawanie fiszek

W `strona/cards.js` dopisz kartę do `CARDS` w postaci `[talia, dział, pytanie, odpowiedź]` (talia: `k1` albo `z2`, wzory w `$...$` lub `$$...$$`) oraz odpowiadający jej wpis w `LEGEND` w tej samej kolejności.
