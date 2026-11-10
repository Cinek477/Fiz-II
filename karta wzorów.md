# Karta wzorów – Elektryczność, Magnetyzm, Drgania, Fale EM

## Stałe
| Stała | Wartość |
|---|---|
| $\color{gray}{e}$ (ładunek elementarny) | $\color{gray}{1{,}6\cdot10^{-19}\,\text{C}}$ |
| $\color{gray}{\varepsilon_0}$ | $\color{gray}{8{,}85\cdot10^{-12}\,\text{F/m}}$ |
| $\color{gray}{\mu_0}$ | $\color{gray}{4\pi\cdot10^{-7}\,\text{H/m} \approx 1{,}257\cdot10^{-6}\,\text{H/m}}$ |
| $\color{gray}{c = \dfrac{1}{\sqrt{\mu_0\varepsilon_0}}}$ | $\color{gray}{3\cdot10^{8}\,\text{m/s}}$ |
| $\color{gray}{N_A}$ | $\color{gray}{6{,}02\cdot10^{23}\,\text{mol}^{-1}}$ |
| $\color{gray}{n}$ (miedź) | $\color{gray}{\approx 8{,}5\cdot10^{28}\,\text{m}^{-3}}$ |
| $\color{gray}{B}$ Ziemi | $\color{gray}{\approx 50\,\mu\text{T}}$ |

**Przeliczenia:** $\color{gray}{1\,\text{mm}^2 = 10^{-6}\,\text{m}^2}$, $\color{gray}{1\,\mu\Omega\cdot\text{cm} = 10^{-8}\,\Omega\cdot\text{m}}$, $\color{gray}{1\,\text{cm} = 10^{-2}\,\text{m}}$

---

## Prąd elektryczny

> [!note] Oznaczenia
> - $R$ – opór [Ω], $\rho$ – rezystywność [Ω·m], $\sigma$ – przewodność [S/m]
> - $l$ – długość [m], $S$ – pole przekroju [m²]
> - $I$ – prąd [A], $j$ – gęstość prądu [A/m²], $U$ – napięcie [V]
> - $n$ – koncentracja nośników [m⁻³], $e$ – ładunek elementarny [C]
> - $v$ – prędkość dryfu [m/s], $\mu$ – ruchliwość [m²/(V·s)], $E$ – pole elektryczne [V/m]
> - $\varepsilon$ – SEM źródła [V], $r$ – opór wewnętrzny [Ω], $V$ – napięcie na obciążeniu [V]
> - $P$ – moc [W], $U_0$ – amplituda, $U_{sk}$ – wartość skuteczna, $f$ – częstotliwość [Hz]

| Co | Wzór | Oznaczenia |
|---|---|---|
| Opór drutu | $\color{royalblue}{R = \rho\dfrac{l}{S}}$ | $R$ – opór, $\rho$ – rezystywność, $l$ – długość, $S$ – przekrój |
| Przewodność | $\color{royalblue}{\sigma = \dfrac{1}{\rho} = ne\mu}$ | $\sigma$ – przewodność, $n$ – koncentracja nośników, $e$ – ładunek elementarny, $\mu$ – ruchliwość |
| Prąd a prędkość nośników | $\color{royalblue}{I = nevS,\quad j = nev}$ | $I$ – prąd, $j$ – gęstość prądu, $v$ – prędkość dryfu, $S$ – przekrój |
| Prędkość unoszenia | $\color{royalblue}{v = \mu E,\quad E = \dfrac{U}{l}}$ | $v$ – prędkość dryfu, $\mu$ – ruchliwość, $E$ – pole elektryczne, $U$ – napięcie, $l$ – długość |
| Źródło z oporem wewn. | $\color{royalblue}{V = \varepsilon - Ir,\quad I = \dfrac{\varepsilon}{R + r}}$ | $V$ – napięcie na obciążeniu, $\varepsilon$ – SEM, $r$ – opór wewnętrzny, $R$ – opór obciążenia |
| Moc na obciążeniu | $\color{royalblue}{P = \dfrac{\varepsilon^2 R}{(R + r)^2}}$, max dla $\color{royalblue}{R = r}$: $\color{royalblue}{P = \dfrac{\varepsilon^2}{4r}}$ | $P$ – moc, $R$ – opór obciążenia, $r$ – opór wewnętrzny, $\varepsilon$ – SEM |
| Moc | $\color{royalblue}{P = UI = I^2 R = \dfrac{U^2}{R}}$ | $P$ – moc, $U$ – napięcie, $I$ – prąd, $R$ – opór |
| Prąd przemienny | $\color{royalblue}{U_0 = \sqrt2\,U_{sk},\quad \omega = 2\pi f}$ | $U_0$ – amplituda, $U_{sk}$ – wartość skuteczna, $\omega$ – częstość kołowa, $f$ – częstotliwość |
| Średnia z $\color{royalblue}{\sin^2}$ | $\color{royalblue}{\tfrac12}$ | średnia wartość po pełnym okresie |

## Magnetyzm

> [!note] Oznaczenia
> - $F$ – siła [N], $q$ – ładunek [C], $v$ – prędkość [m/s], $B$ – indukcja [T]
> - $U_H$ – napięcie Halla [V], $d$ – grubość płytki [m]
> - $\mu_0$ – przenikalność magnetyczna próżni, $dl$ – kawałek drutu, $\alpha$ – kąt
> - $R$ – promień pętli [m], $r$ – odległość od drutu [m]
> - $N$ – liczba zwojów, $l$ – długość cewki [m], $S$ – przekrój [m²]
> - $\Phi$ – strumień [Wb], $L$ – indukcyjność [H], $\varepsilon$ – SEM [V]
> - $A$ – pole ramki [m²], $\omega$ – prędkość kątowa [rad/s]

| Co | Wzór | Oznaczenia |
|---|---|---|
| Siła Lorentza | $\color{purple}{\vec F = q\,\vec v\times\vec B\quad (F = qvB)}$ | $F$ – siła, $q$ – ładunek, $v$ – prędkość, $B$ – indukcja |
| Napięcie Halla | $\color{purple}{U_H = \dfrac{IB}{ned}}$ | $U_H$ – napięcie Halla, $I$ – prąd, $B$ – indukcja, $n$ – koncentracja nośników, $d$ – grubość płytki |
| Biot–Savart | $\color{purple}{dB = \dfrac{\mu_0 I}{4\pi}\dfrac{dl\,\sin\alpha}{r^2}}$ | $dB$ – pole od kawałka drutu, $dl$ – kawałek drutu, $r$ – odległość, $\alpha$ – kąt |
| Środek pętli | $\color{purple}{B = \dfrac{\mu_0 I}{2R}}$ | $B$ – pole w środku, $I$ – prąd, $R$ – promień pętli |
| Prosty drut | $\color{purple}{B = \dfrac{\mu_0 I}{2\pi r}}$ | $B$ – pole, $I$ – prąd, $r$ – odległość od drutu |
| Prawo Ampère'a | $\color{purple}{\oint \vec B\cdot d\vec l = \mu_0 I}$ | $d\vec l$ – kawałek pętli, $I$ – prąd przechodzący przez pętlę |
| Solenoid | $\color{purple}{B = \dfrac{\mu_0 N I}{l}}$ | $N$ – liczba zwojów, $l$ – długość cewki, $I$ – prąd |
| Strumień | $\color{purple}{\Phi = BS\cos\alpha}$ ($\color{purple}{N}$ zwojów: $\color{purple}{\times N}$) | $\Phi$ – strumień, $S$ – pole powierzchni, $\alpha$ – kąt między $\vec B$ a normalną |
| Indukcyjność solenoidu | $\color{purple}{L = \dfrac{\mu_0 N^2 S}{l}}$ | $L$ – indukcyjność, $N$ – liczba zwojów, $S$ – przekrój, $l$ – długość |
| Faraday | $\color{purple}{\varepsilon = -\dfrac{d\Phi}{dt}}$ | $\varepsilon$ – SEM indukowana, $\Phi$ – strumień, $t$ – czas |
| Wirująca ramka | $\color{purple}{\varepsilon = BA\omega\sin(\omega t)}$ | $A$ – pole ramki, $\omega$ – prędkość kątowa, $B$ – indukcja |
| Napięcie na cewce | $\color{purple}{U = -L\dfrac{dI}{dt}}$ | $U$ – napięcie, $L$ – indukcyjność, $\dfrac{dI}{dt}$ – szybkość zmiany prądu |
| Energia cewki | $\color{purple}{E = \tfrac12 L I^2}$ | $E$ – energia pola, $L$ – indukcyjność, $I$ – prąd |

## Kondensator

> [!note] Oznaczenia
> - $C$ – pojemność [F], $q$ – ładunek [C], $U$ – napięcie [V]
> - $\varepsilon_0$ – przenikalność próżni, $\varepsilon_r$ – przenikalność względna izolatora
> - $S$ – pole okładki [m²], $d$ – odległość okładek [m], $E$ – energia [J]

| Co | Wzór | Oznaczenia |
|---|---|---|
| Płaski | $\color{teal}{C = \dfrac{\varepsilon_0\varepsilon_r S}{d}}$ | $C$ – pojemność, $S$ – pole okładki, $d$ – odległość okładek, $\varepsilon_r$ – przenikalność względna |
| Napięcie | $\color{teal}{U = \dfrac{q}{C}}$ | $U$ – napięcie, $q$ – ładunek, $C$ – pojemność |
| Energia | $\color{teal}{E = \dfrac{q^2}{2C} = \tfrac12 CU^2}$ | $E$ – energia, $q$ – ładunek, $U$ – napięcie |

## Obwody (II prawo Kirchhoffa: suma napięć w oczku = 0)

> [!note] Oznaczenia
> - $q$ – ładunek [C], $\dot q$ – prąd, $\ddot q$ – druga pochodna ładunku
> - $R$ – opór [Ω], $L$ – indukcyjność [H], $C$ – pojemność [F]
> - $\tau$ – stała czasowa [s], $\beta$ – współczynnik tłumienia [1/s]
> - $\omega_0$ – częstość własna [rad/s], $\omega$ – częstość drgań tłumionych
> - $\Omega$ – częstość źródła [rad/s], $U_0$ – amplituda napięcia źródła [V]
> - $Z$ – impedancja [Ω], $\varphi$ – przesunięcie fazowe, $X_L, X_C$ – reaktancje cewki i kondensatora [Ω]

| Obwód | Równanie | Rozwiązanie | Oznaczenia |
|---|---|---|---|
| RL + $\color{green}{\varepsilon}$ | $\color{green}{\varepsilon = IR + L\dfrac{dI}{dt}}$ | $\color{green}{I = \dfrac{\varepsilon}{R}\left(1 - e^{-t/\tau}\right),\ \tau = \dfrac{L}{R}}$ | $\tau$ – stała czasowa, $\varepsilon$ – SEM |
| RC (rozład.) | $\color{green}{R\dfrac{dq}{dt} + \dfrac{q}{C} = 0}$ | $\color{green}{q = q_0 e^{-t/RC}}$ | $q_0$ – ładunek początkowy, $RC$ – stała czasowa |
| LC | $\color{green}{\ddot q + \dfrac{q}{LC} = 0}$ | $\color{green}{q = q_0\cos(\omega_0 t),\ \omega_0 = \dfrac{1}{\sqrt{LC}}}$ | $\omega_0$ – częstość drgań własnych |
| RLC | $\color{green}{\ddot q + 2\beta\dot q + \omega_0^2 q = 0,\ \beta = \dfrac{R}{2L}}$ | małe $\color{green}{R}$: $\color{green}{q = q_0 e^{-\beta t}\cos(\omega t),\ \omega = \sqrt{\omega_0^2 - \beta^2}}$ | $\beta$ – tłumienie, $\omega$ – częstość drgań tłumionych |
| | | duże $\color{green}{R}$ ($\color{green}{R > 2\sqrt{L/C}}$): $\color{green}{q = Ae^{\lambda_1 t} + Be^{\lambda_2 t}}$, bez drgań | $\lambda_1, \lambda_2$ – pierwiastki równania, $A, B$ – stałe |
| | | krytyczne: $\color{green}{q = q_0(1 + \beta t)e^{-\beta t}}$ | najszybszy powrót do zera bez drgań |
| RLC wymuszony | $\color{green}{L\dot I + RI + \dfrac{q}{C} = U_0\sin\Omega t}$ | $\color{green}{I_0 = \dfrac{U_0}{Z}}$ | $\Omega$ – częstość źródła, $U_0$ – amplituda napięcia, $Z$ – impedancja |

**Impedancja:**
$$\color{royalblue} Z = \sqrt{R^2 + \left(\Omega L - \frac{1}{\Omega C}\right)^2},\qquad \operatorname{tg}\varphi = \frac{\Omega L - \frac{1}{\Omega C}}{R},\qquad \text{rezonans: } \Omega = \frac{1}{\sqrt{LC}}$$

**Reaktancje:** $\color{green}{X_L = \omega L}$, $\color{green}{X_C = \dfrac{1}{\omega C}}$

**Euler (symulacja):** $\color{green}{I \mathrel{+}= \dfrac{U - RI - q/C}{L}\,dt}$, $\color{green}{\quad q \mathrel{+}= I\,dt}$

---

## Fale

> [!note] Oznaczenia
> - $E_0$ – amplituda [V/m], $k$ – liczba falowa [m⁻¹]
> - $\lambda$ – długość fali [m], $T$ – okres [s], $f$ – częstotliwość [Hz], $\omega$ – częstość kołowa
> - $v$ – prędkość fali, $c$ – prędkość światła [m/s]
> - $\varepsilon_r, \mu_r$ – przenikalności względne ośrodka
> - $\nabla^2$ – laplasjan, $\vec S$ – wektor Poyntinga [W/m²]

| Co | Wzór | Oznaczenia |
|---|---|---|
| Fala | $\color{crimson}{E = E_0\sin(kx - \omega t)}$ | $E_0$ – amplituda, $k$ – liczba falowa, $\omega$ – częstość, $x$ – położenie, $t$ – czas |
| Długość fali | $\color{crimson}{\lambda = \dfrac{2\pi}{k}}$ | $\lambda$ – długość fali, $k$ – liczba falowa |
| Częstość / okres | $\color{crimson}{\omega = 2\pi f = \dfrac{2\pi}{T}}$ | $\omega$ – częstość kołowa, $f$ – częstotliwość, $T$ – okres |
| Prędkość | $\color{crimson}{v = \dfrac{\omega}{k} = \lambda f}$ | $v$ – prędkość fali |
| Przesunięcie fazy $\color{crimson}{\Delta\varphi}$ | $\color{crimson}{\Delta x = \dfrac{\Delta\varphi}{k}}$ ($\color{crimson}{90^\circ \to \lambda/4}$) | $\Delta x$ – przesunięcie, $\Delta\varphi$ – zmiana fazy |
| Prędkość w ośrodku | $\color{crimson}{v = \dfrac{c}{\sqrt{\varepsilon_r\mu_r}}}$ | $\varepsilon_r, \mu_r$ – przenikalności względne ośrodka |
| Równanie falowe | $\color{crimson}{\nabla^2\vec E = \mu_0\varepsilon_0\dfrac{\partial^2\vec E}{\partial t^2}}$ | $\nabla^2$ – laplasjan, $\mu_0, \varepsilon_0$ – stałe próżni |
| $\color{crimson}{B}$ fali | $\color{crimson}{B_0 = \dfrac{E_0}{c}}$, $\color{crimson}{\vec B \perp \vec E \perp}$ kierunek ruchu | $B_0$ – amplituda pola $B$, $c$ – prędkość światła |
| Wektor Poyntinga | $\color{crimson}{\vec S = \dfrac{1}{\mu_0}\vec E\times\vec B}$ (w kierunku ruchu fali, $\color{crimson}{\sim E_0^2}$) | $\vec S$ – strumień energii fali [W/m²] |

## Pole kuli (Gauss), ładunek $\rho$, promień $R$

> [!note] Oznaczenia
> - $\rho$ – gęstość objętościowa ładunku [C/m³], $R$ – promień kuli [m]
> - $r$ – odległość od środka [m], $E_r$ – składowa radialna pola
> - $\nabla\cdot$ – dywergencja (źródła pola), $\nabla\times$ – rotacja (wiry pola)

| Gdzie | $\color{darkorange}{E(r)}$ | $\color{darkorange}{\nabla\cdot\vec E}$ | $\color{darkorange}{\nabla\times\vec E}$ |
|---|---|---|---|
| $\color{darkorange}{r < R}$ | $\color{darkorange}{\dfrac{\rho r}{3\varepsilon_0}}$ | $\color{darkorange}{\dfrac{\rho}{\varepsilon_0}}$ | $\color{darkorange}{0}$ |
| $\color{darkorange}{r > R}$ | $\color{darkorange}{\dfrac{\rho R^3}{3\varepsilon_0 r^2}}$ | $\color{darkorange}{0}$ | $\color{darkorange}{0}$ |

**Dywergencja w sferycznych (tylko $\color{darkorange}{E_r}$):**
$$\color{royalblue} \nabla\cdot\vec E = \frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2 E_r\right)$$

---

## Równania Maxwella

> [!note] Oznaczenia
> - $\vec E, \vec B$ – pole elektryczne [V/m] i magnetyczne [T]
> - $\rho$ – gęstość ładunku [C/m³], $\vec j$ – gęstość prądu [A/m²]
> - $\Phi_E, \Phi_B$ – strumienie pól, $I_p$ – prąd przesunięcia [A]
> - $d\vec S$ – kawałek powierzchni, $d\vec l$ – kawałek krzywej

| | Całkowa | Różniczkowa | Oznaczenia |
|---|---|---|---|
| I | $\color{mediumvioletred}{\oint \vec E\cdot d\vec S = \dfrac{Q}{\varepsilon_0}}$ | $\color{mediumvioletred}{\nabla\cdot\vec E = \dfrac{\rho}{\varepsilon_0}}$ | $Q$ – ładunek w środku powierzchni, $\rho$ – gęstość ładunku |
| II | $\color{mediumvioletred}{\oint \vec B\cdot d\vec S = 0}$ | $\color{mediumvioletred}{\nabla\cdot\vec B = 0}$ | brak „ładunków magnetycznych” |
| III | $\color{mediumvioletred}{\oint \vec E\cdot d\vec l = -\dfrac{d\Phi_B}{dt}}$ | $\color{mediumvioletred}{\nabla\times\vec E = -\dfrac{\partial\vec B}{\partial t}}$ | $\Phi_B$ – strumień pola magnetycznego |
| IV | $\color{mediumvioletred}{\oint \vec B\cdot d\vec l = \mu_0 I + \mu_0\varepsilon_0\dfrac{d\Phi_E}{dt}}$ | $\color{mediumvioletred}{\nabla\times\vec B = \mu_0\vec j + \mu_0\varepsilon_0\dfrac{\partial\vec E}{\partial t}}$ | $I$ – prąd, $\vec j$ – gęstość prądu, $\Phi_E$ – strumień pola elektrycznego |

**Prąd przesunięcia:** $\color{mediumvioletred}{I_p = \varepsilon_0\dfrac{d\Phi_E}{dt}}$

**Próżnia:** $\color{mediumvioletred}{\rho = 0}$, $\color{mediumvioletred}{\vec j = 0}$

**Tożsamość:** $\color{mediumvioletred}{\nabla\times(\nabla\times\vec A) = \nabla(\nabla\cdot\vec A) - \nabla^2\vec A}$
