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
| Opór drutu | $\color{royalblue}{R = \rho\dfrac{l}{S}}$ | $R$ – opór [Ω], $\rho$ – rezystywność [Ω·m], $l$ – długość [m], $S$ – przekrój [m²] |
| Przewodność | $\color{royalblue}{\sigma = \dfrac{1}{\rho}}$ | $\sigma$ – przewodność [S/m], odwrotność rezystywności $\rho$ |
| Przewodność przez nośniki | $\color{royalblue}{\sigma = ne\mu}$ | $n$ – koncentracja nośników [m⁻³], $e$ – ładunek elementarny [C], $\mu$ – ruchliwość [m²/(V·s)] |
| Prąd a nośniki | $\color{royalblue}{I = nevS}$ | $I$ – prąd [A], $n$ – koncentracja, $e$ – ładunek, $v$ – prędkość dryfu [m/s], $S$ – przekrój |
| Gęstość prądu | $\color{royalblue}{j = \dfrac{I}{S}}$ | $j$ – gęstość prądu, czyli prąd na 1 m² przekroju [A/m²] |
| Gęstość prądu przez nośniki | $\color{royalblue}{j = nev}$ | $n$ – koncentracja, $e$ – ładunek, $v$ – prędkość dryfu |
| Prawo Ohma lokalnie | $\color{royalblue}{j = \sigma E}$ | $\sigma$ – przewodność, $E$ – pole elektryczne w przewodniku [V/m] |
| Pole w drucie | $\color{royalblue}{E = \dfrac{U}{l}}$ | $E$ – pole elektryczne [V/m], $U$ – napięcie [V], $l$ – długość [m] |
| Prędkość dryfu | $\color{royalblue}{v = \mu E}$ | $v$ – prędkość dryfu [m/s], $\mu$ – ruchliwość, $E$ – pole elektryczne |
| Koncentracja elektronów | $\color{royalblue}{n = \dfrac{\rho_m N_A}{M}}$ | $\rho_m$ – gęstość [kg/m³], $N_A$ – liczba Avogadra, $M$ – masa molowa [kg/mol] (1 elektron na atom) |
| Prawo Ohma | $\color{royalblue}{U = IR}$ | $U$ – napięcie [V], $I$ – prąd [A], $R$ – opór [Ω] |
| Napięcie źródła z oporem wewn. | $\color{royalblue}{V = \varepsilon - Ir}$ | $V$ – napięcie na obciążeniu [V], $\varepsilon$ – SEM [V], $I$ – prąd, $r$ – opór wewnętrzny [Ω] |
| Prąd w obwodzie ze źródłem | $\color{royalblue}{I = \dfrac{\varepsilon}{R + r}}$ | $R$ – opór obciążenia, $r$ – opór wewnętrzny, $\varepsilon$ – SEM |
| Moc na obciążeniu | $\color{royalblue}{P = \dfrac{\varepsilon^2 R}{(R + r)^2}}$ | $P$ – moc [W], $R$ – opór obciążenia, $r$ – opór wewnętrzny |
| Moc maksymalna (gdy $R = r$) | $\color{royalblue}{P_{max} = \dfrac{\varepsilon^2}{4r}}$ | $P_{max}$ – największa moc, jaką da źródło [W] |
| Moc (ogólnie) | $\color{royalblue}{P = UI}$ | $P$ – moc [W], $U$ – napięcie [V], $I$ – prąd [A] |
| Moc przez prąd i opór | $\color{royalblue}{P = I^2 R}$ | $I$ – prąd, $R$ – opór |
| Moc przez napięcie i opór | $\color{royalblue}{P = \dfrac{U^2}{R}}$ | $U$ – napięcie, $R$ – opór |
| Amplituda a wartość skuteczna | $\color{royalblue}{U_0 = \sqrt2\,U_{sk}}$ | $U_0$ – amplituda (wartość szczytowa), $U_{sk}$ – wartość skuteczna (np. 230 V w gniazdku) |
| Częstość kołowa | $\color{royalblue}{\omega = 2\pi f}$ | $\omega$ – częstość kołowa [rad/s], $f$ – częstotliwość [Hz] |

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
| Siła Lorentza | $\color{purple}{F = qvB}$ | $F$ – siła [N], $q$ – ładunek [C], $v$ – prędkość [m/s], $B$ – indukcja [T] |
| Napięcie Halla | $\color{purple}{U_H = \dfrac{IB}{ned}}$ | $U_H$ – napięcie Halla [V], $I$ – prąd, $B$ – indukcja, $n$ – koncentracja, $d$ – grubość płytki (wzdłuż $B$) |
| Prawo Biota–Savarta | $\color{purple}{dB = \dfrac{\mu_0 I}{4\pi}\dfrac{dl\,\sin\alpha}{r^2}}$ | $dB$ – pole od kawałka drutu, $dl$ – kawałek drutu, $r$ – odległość, $\alpha$ – kąt, $\mu_0$ – stała |
| Pole w środku pętli | $\color{purple}{B = \dfrac{\mu_0 I}{2R}}$ | $B$ – indukcja [T], $I$ – prąd [A], $R$ – promień pętli [m] |
| Pole prostego drutu | $\color{purple}{B = \dfrac{\mu_0 I}{2\pi r}}$ | $r$ – odległość od drutu [m], $I$ – prąd |
| Prawo Ampère’a | $\color{purple}{\oint \vec B\cdot d\vec l = \mu_0 I}$ | suma pola wzdłuż zamkniętej pętli; $I$ – prąd przechodzący przez pętlę |
| Pole w solenoidzie | $\color{purple}{B = \dfrac{\mu_0 N I}{l}}$ | $N$ – liczba zwojów, $l$ – długość cewki [m], $I$ – prąd |
| Strumień | $\color{purple}{\Phi = BS\cos\alpha}$ | $\Phi$ – strumień [Wb], $S$ – pole powierzchni, $\alpha$ – kąt między $\vec B$ a prostopadłą do powierzchni |
| Strumień przez N zwojów | $\color{purple}{\Phi = NBS}$ | $N$ – liczba zwojów (każdy zwój „łapie” ten sam strumień) |
| Indukcyjność solenoidu | $\color{purple}{L = \dfrac{\mu_0 N^2 S}{l}}$ | $L$ – indukcyjność [H], $N$ – zwoje, $S$ – przekrój, $l$ – długość |
| Strumień a indukcyjność | $\color{purple}{\Phi = LI}$ | $L$ – indukcyjność, $I$ – prąd w cewce |
| Prawo Faradaya | $\color{purple}{\varepsilon = -\dfrac{d\Phi}{dt}}$ | $\varepsilon$ – SEM indukowana [V]: zmiana strumienia w czasie daje napięcie |
| SEM wirującej ramki | $\color{purple}{\varepsilon = BA\omega\sin(\omega t)}$ | $A$ – pole ramki [m²], $\omega$ – prędkość kątowa [rad/s], $t$ – czas |
| Amplituda SEM ramki | $\color{purple}{\varepsilon_0 = BA\omega}$ | $\varepsilon_0$ – największa wartość SEM |
| Napięcie na cewce | $\color{purple}{U = -L\dfrac{dI}{dt}}$ | $U$ – napięcie [V], $\dfrac{dI}{dt}$ – jak szybko zmienia się prąd |
| Energia cewki | $\color{purple}{E = \tfrac12 L I^2}$ | $E$ – energia pola magnetycznego [J] |

## Kondensator

> [!note] Oznaczenia
> - $C$ – pojemność [F], $q$ – ładunek [C], $U$ – napięcie [V]
> - $\varepsilon_0$ – przenikalność próżni, $\varepsilon_r$ – przenikalność względna izolatora
> - $S$ – pole okładki [m²], $d$ – odległość okładek [m], $E$ – energia [J]

| Co | Wzór | Oznaczenia |
|---|---|---|
| Pojemność kondensatora płaskiego | $\color{teal}{C = \dfrac{\varepsilon_0\varepsilon_r S}{d}}$ | $C$ – pojemność [F], $S$ – pole okładki [m²], $d$ – odległość okładek [m], $\varepsilon_r$ – przenikalność względna izolatora |
| Napięcie na kondensatorze | $\color{teal}{U = \dfrac{q}{C}}$ | $U$ – napięcie [V], $q$ – ładunek [C] |
| Energia (przez ładunek) | $\color{teal}{E = \dfrac{q^2}{2C}}$ | $E$ – energia [J], $q$ – ładunek |
| Energia (przez napięcie) | $\color{teal}{E = \tfrac12 CU^2}$ | $U$ – napięcie |

## Obwody (II prawo Kirchhoffa: suma napięć w oczku = 0)

> [!note] Oznaczenia
> - $q$ – ładunek [C], $\dot q$ – prąd, $\ddot q$ – druga pochodna ładunku
> - $R$ – opór [Ω], $L$ – indukcyjność [H], $C$ – pojemność [F]
> - $\tau$ – stała czasowa [s], $\beta$ – współczynnik tłumienia [1/s]
> - $\omega_0$ – częstość własna [rad/s], $\omega$ – częstość drgań tłumionych
> - $\Omega$ – częstość źródła [rad/s], $U_0$ – amplituda napięcia źródła [V]
> - $Z$ – impedancja [Ω], $\varphi$ – przesunięcie fazowe, $X_L, X_C$ – reaktancje cewki i kondensatora [Ω]

| Co | Wzór | Oznaczenia |
|---|---|---|
| RL – równanie | $\color{green}{\varepsilon = IR + L\dfrac{dI}{dt}}$ | $\varepsilon$ – SEM, $I$ – prąd, $R$ – opór, $L$ – indukcyjność |
| RL – prąd w czasie | $\color{green}{I = \dfrac{\varepsilon}{R}\left(1 - e^{-t/\tau}\right)}$ | prąd rośnie od 0 do $\varepsilon/R$, $t$ – czas |
| Stała czasowa RL | $\color{green}{\tau = \dfrac{L}{R}}$ | $\tau$ – po tym czasie prąd ma 63% maksimum [s] |
| RC – rozładowanie | $\color{green}{q = q_0 e^{-t/RC}}$ | $q_0$ – ładunek początkowy, $RC$ – stała czasowa [s] |
| LC – równanie | $\color{green}{\ddot q + \dfrac{q}{LC} = 0}$ | $q$ – ładunek, $\ddot q$ – druga pochodna ładunku po czasie |
| LC – ładunek w czasie | $\color{green}{q = q_0\cos(\omega_0 t)}$ | $q_0$ – ładunek na początku, $\omega_0$ – częstość własna |
| Częstość własna | $\color{green}{\omega_0 = \dfrac{1}{\sqrt{LC}}}$ | $\omega_0$ – częstość drgań bez oporu [rad/s] |
| RLC – równanie | $\color{green}{\ddot q + 2\beta\dot q + \omega_0^2 q = 0}$ | $\dot q$ – prąd, $\beta$ – tłumienie |
| Tłumienie | $\color{green}{\beta = \dfrac{R}{2L}}$ | $\beta$ – jak szybko gasną drgania [1/s] |
| RLC, małe $R$ – drgania gasnące | $\color{green}{q = q_0 e^{-\beta t}\cos(\omega t)}$ | amplituda maleje jak $e^{-\beta t}$ |
| Częstość drgań tłumionych | $\color{green}{\omega = \sqrt{\omega_0^2 - \beta^2}}$ | $\omega$ – trochę mniejsza niż $\omega_0$ |
| Opór krytyczny | $\color{green}{R_{kr} = 2\sqrt{\dfrac{L}{C}}}$ | $R > R_{kr}$: brak drgań, $R = R_{kr}$: tłumienie krytyczne |
| RLC wymuszony – równanie | $\color{green}{L\dot I + RI + \dfrac{q}{C} = U_0\sin\Omega t}$ | $U_0$ – amplituda napięcia źródła, $\Omega$ – częstość źródła |
| Amplituda prądu | $\color{green}{I_0 = \dfrac{U_0}{Z}}$ | $I_0$ – amplituda prądu, $Z$ – impedancja [Ω] |
| Impedancja | $\color{green}{Z = \sqrt{R^2 + \left(\Omega L - \dfrac{1}{\Omega C}\right)^2}}$ | $Z$ – „opór zastępczy” obwodu RLC |
| Przesunięcie fazowe | $\color{green}{\operatorname{tg}\varphi = \dfrac{\Omega L - \frac{1}{\Omega C}}{R}}$ | $\varphi$ – o ile prąd spóźnia się względem napięcia |
| Rezonans | $\color{green}{\Omega = \dfrac{1}{\sqrt{LC}}}$ | wtedy $Z = R$, prąd największy, $\varphi = 0$ |
| Reaktancja cewki | $\color{green}{X_L = \omega L}$ | $X_L$ – „opór” cewki dla prądu zmiennego [Ω] |
| Reaktancja kondensatora | $\color{green}{X_C = \dfrac{1}{\omega C}}$ | $X_C$ – „opór” kondensatora dla prądu zmiennego [Ω] |



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
| Fala | $\color{crimson}{E = E_0\sin(kx - \omega t)}$ | $E_0$ – amplituda [V/m], $k$ – liczba falowa [m⁻¹], $x$ – położenie, $\omega$ – częstość, $t$ – czas |
| Długość fali | $\color{crimson}{\lambda = \dfrac{2\pi}{k}}$ | $\lambda$ – długość fali [m] |
| Częstość kołowa | $\color{crimson}{\omega = 2\pi f}$ | $f$ – częstotliwość [Hz] |
| Okres | $\color{crimson}{T = \dfrac{2\pi}{\omega}}$ | $T$ – okres [s] |
| Prędkość fali | $\color{crimson}{v = \dfrac{\omega}{k}}$ | $v$ – prędkość fali [m/s] |
| Prędkość przez długość fali | $\color{crimson}{v = \lambda f}$ | $\lambda$ – długość fali, $f$ – częstotliwość |
| Częstość fali EM w próżni | $\color{crimson}{\omega = ck}$ | $c$ – prędkość światła [m/s] |
| Przesunięcie dla zmiany fazy | $\color{crimson}{\Delta x = \dfrac{\Delta\varphi}{k}}$ | $\Delta\varphi$ – zmiana fazy; dla $90^\circ$ wychodzi $\lambda/4$ |
| Prędkość światła | $\color{crimson}{c = \dfrac{1}{\sqrt{\mu_0\varepsilon_0}}}$ | $\mu_0, \varepsilon_0$ – stałe próżni |
| Prędkość w ośrodku | $\color{crimson}{v = \dfrac{c}{\sqrt{\varepsilon_r\mu_r}}}$ | $\varepsilon_r, \mu_r$ – przenikalności względne ośrodka |
| Równanie falowe | $\color{crimson}{\nabla^2\vec E = \mu_0\varepsilon_0\dfrac{\partial^2\vec E}{\partial t^2}}$ | $\nabla^2$ – laplasjan (druga pochodna po położeniu) |
| Pole B fali | $\color{crimson}{B_0 = \dfrac{E_0}{c}}$ | $B_0$ – amplituda pola B; $\vec B \perp \vec E \perp$ kierunek ruchu |
| Wektor Poyntinga | $\color{crimson}{\vec S = \dfrac{1}{\mu_0}\vec E\times\vec B}$ | $\vec S$ – energia niesiona przez 1 m² w 1 s [W/m²], kierunek ruchu fali |

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
