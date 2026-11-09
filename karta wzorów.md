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
| Co | Wzór |
|---|---|
| Opór drutu | $\color{royalblue}{R = \rho\dfrac{l}{S}}$ |
| Przewodność | $\color{royalblue}{\sigma = \dfrac{1}{\rho} = ne\mu}$ |
| Prąd a prędkość nośników | $\color{royalblue}{I = nevS,\quad j = nev}$ |
| Prędkość unoszenia | $\color{royalblue}{v = \mu E,\quad E = \dfrac{U}{l}}$ |
| Źródło z oporem wewn. | $\color{royalblue}{V = \varepsilon - Ir,\quad I = \dfrac{\varepsilon}{R + r}}$ |
| Moc na obciążeniu | $\color{royalblue}{P = \dfrac{\varepsilon^2 R}{(R + r)^2}}$, max dla $\color{royalblue}{R = r}$: $\color{royalblue}{P = \dfrac{\varepsilon^2}{4r}}$ |
| Moc | $\color{royalblue}{P = UI = I^2 R = \dfrac{U^2}{R}}$ |
| Prąd przemienny | $\color{royalblue}{U_0 = \sqrt2\,U_{sk},\quad \omega = 2\pi f}$ |
| Średnia z $\color{royalblue}{\sin^2}$ | $\color{royalblue}{\tfrac12}$ |

## Magnetyzm
| Co | Wzór |
|---|---|
| Siła Lorentza | $\color{purple}{\vec F = q\,\vec v\times\vec B\quad (F = qvB)}$ |
| Napięcie Halla | $\color{purple}{U_H = \dfrac{IB}{ned}}$ |
| Biot–Savart | $\color{purple}{dB = \dfrac{\mu_0 I}{4\pi}\dfrac{dl\,\sin\alpha}{r^2}}$ |
| Środek pętli | $\color{purple}{B = \dfrac{\mu_0 I}{2R}}$ |
| Prosty drut | $\color{purple}{B = \dfrac{\mu_0 I}{2\pi r}}$ |
| Prawo Ampère'a | $\color{purple}{\oint \vec B\cdot d\vec l = \mu_0 I}$ |
| Solenoid | $\color{purple}{B = \dfrac{\mu_0 N I}{l}}$ |
| Strumień | $\color{purple}{\Phi = BS\cos\alpha}$ ($\color{purple}{N}$ zwojów: $\color{purple}{\times N}$) |
| Indukcyjność solenoidu | $\color{purple}{L = \dfrac{\mu_0 N^2 S}{l}}$ |
| Faraday | $\color{purple}{\varepsilon = -\dfrac{d\Phi}{dt}}$ |
| Wirująca ramka | $\color{purple}{\varepsilon = BA\omega\sin(\omega t)}$ |
| Napięcie na cewce | $\color{purple}{U = -L\dfrac{dI}{dt}}$ |
| Energia cewki | $\color{purple}{E = \tfrac12 L I^2}$ |

## Kondensator
| Co | Wzór |
|---|---|
| Płaski | $\color{teal}{C = \dfrac{\varepsilon_0\varepsilon_r S}{d}}$ |
| Napięcie | $\color{teal}{U = \dfrac{q}{C}}$ |
| Energia | $\color{teal}{E = \dfrac{q^2}{2C} = \tfrac12 CU^2}$ |

## Obwody (II prawo Kirchhoffa: suma napięć w oczku = 0)
| Obwód | Równanie | Rozwiązanie |
|---|---|---|
| RL + $\color{green}{\varepsilon}$ | $\color{green}{\varepsilon = IR + L\dfrac{dI}{dt}}$ | $\color{green}{I = \dfrac{\varepsilon}{R}\left(1 - e^{-t/\tau}\right),\ \tau = \dfrac{L}{R}}$ |
| RC (rozład.) | $\color{green}{R\dfrac{dq}{dt} + \dfrac{q}{C} = 0}$ | $\color{green}{q = q_0 e^{-t/RC}}$ |
| LC | $\color{green}{\ddot q + \dfrac{q}{LC} = 0}$ | $\color{green}{q = q_0\cos(\omega_0 t),\ \omega_0 = \dfrac{1}{\sqrt{LC}}}$ |
| RLC | $\color{green}{\ddot q + 2\beta\dot q + \omega_0^2 q = 0,\ \beta = \dfrac{R}{2L}}$ | małe $\color{green}{R}$: $\color{green}{q = q_0 e^{-\beta t}\cos(\omega t),\ \omega = \sqrt{\omega_0^2 - \beta^2}}$ |
| | | duże $\color{green}{R}$ ($\color{green}{R > 2\sqrt{L/C}}$): $\color{green}{q = Ae^{\lambda_1 t} + Be^{\lambda_2 t}}$, bez drgań |
| | | krytyczne: $\color{green}{q = q_0(1 + \beta t)e^{-\beta t}}$ |
| RLC wymuszony | $\color{green}{L\dot I + RI + \dfrac{q}{C} = U_0\sin\Omega t}$ | $\color{green}{I_0 = \dfrac{U_0}{Z}}$ |

**Impedancja:**
$$\color{royalblue} Z = \sqrt{R^2 + \left(\Omega L - \frac{1}{\Omega C}\right)^2},\qquad \operatorname{tg}\varphi = \frac{\Omega L - \frac{1}{\Omega C}}{R},\qquad \text{rezonans: } \Omega = \frac{1}{\sqrt{LC}}$$

**Reaktancje:** $\color{green}{X_L = \omega L}$, $\color{green}{X_C = \dfrac{1}{\omega C}}$

**Euler (symulacja):** $\color{green}{I \mathrel{+}= \dfrac{U - RI - q/C}{L}\,dt}$, $\color{green}{\quad q \mathrel{+}= I\,dt}$

---

## Fale
| Co | Wzór |
|---|---|
| Fala | $\color{crimson}{E = E_0\sin(kx - \omega t)}$ |
| Długość fali | $\color{crimson}{\lambda = \dfrac{2\pi}{k}}$ |
| Częstość / okres | $\color{crimson}{\omega = 2\pi f = \dfrac{2\pi}{T}}$ |
| Prędkość | $\color{crimson}{v = \dfrac{\omega}{k} = \lambda f}$ |
| Przesunięcie fazy $\color{crimson}{\Delta\varphi}$ | $\color{crimson}{\Delta x = \dfrac{\Delta\varphi}{k}}$ ($\color{crimson}{90^\circ \to \lambda/4}$) |
| Prędkość w ośrodku | $\color{crimson}{v = \dfrac{c}{\sqrt{\varepsilon_r\mu_r}}}$ |
| Równanie falowe | $\color{crimson}{\nabla^2\vec E = \mu_0\varepsilon_0\dfrac{\partial^2\vec E}{\partial t^2}}$ |
| $\color{crimson}{B}$ fali | $\color{crimson}{B_0 = \dfrac{E_0}{c}}$, $\color{crimson}{\vec B \perp \vec E \perp}$ kierunek ruchu |
| Wektor Poyntinga | $\color{crimson}{\vec S = \dfrac{1}{\mu_0}\vec E\times\vec B}$ (w kierunku ruchu fali, $\color{crimson}{\sim E_0^2}$) |

## Pole kuli (Gauss), ładunek $\rho$, promień $R$
| Gdzie | $\color{darkorange}{E(r)}$ | $\color{darkorange}{\nabla\cdot\vec E}$ | $\color{darkorange}{\nabla\times\vec E}$ |
|---|---|---|---|
| $\color{darkorange}{r < R}$ | $\color{darkorange}{\dfrac{\rho r}{3\varepsilon_0}}$ | $\color{darkorange}{\dfrac{\rho}{\varepsilon_0}}$ | $\color{darkorange}{0}$ |
| $\color{darkorange}{r > R}$ | $\color{darkorange}{\dfrac{\rho R^3}{3\varepsilon_0 r^2}}$ | $\color{darkorange}{0}$ | $\color{darkorange}{0}$ |

**Dywergencja w sferycznych (tylko $\color{darkorange}{E_r}$):**
$$\color{royalblue} \nabla\cdot\vec E = \frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2 E_r\right)$$

---

## Równania Maxwella
| | Całkowa | Różniczkowa |
|---|---|---|
| I | $\color{mediumvioletred}{\oint \vec E\cdot d\vec S = \dfrac{Q}{\varepsilon_0}}$ | $\color{mediumvioletred}{\nabla\cdot\vec E = \dfrac{\rho}{\varepsilon_0}}$ |
| II | $\color{mediumvioletred}{\oint \vec B\cdot d\vec S = 0}$ | $\color{mediumvioletred}{\nabla\cdot\vec B = 0}$ |
| III | $\color{mediumvioletred}{\oint \vec E\cdot d\vec l = -\dfrac{d\Phi_B}{dt}}$ | $\color{mediumvioletred}{\nabla\times\vec E = -\dfrac{\partial\vec B}{\partial t}}$ |
| IV | $\color{mediumvioletred}{\oint \vec B\cdot d\vec l = \mu_0 I + \mu_0\varepsilon_0\dfrac{d\Phi_E}{dt}}$ | $\color{mediumvioletred}{\nabla\times\vec B = \mu_0\vec j + \mu_0\varepsilon_0\dfrac{\partial\vec E}{\partial t}}$ |

**Prąd przesunięcia:** $\color{mediumvioletred}{I_p = \varepsilon_0\dfrac{d\Phi_E}{dt}}$

**Próżnia:** $\color{mediumvioletred}{\rho = 0}$, $\color{mediumvioletred}{\vec j = 0}$

**Tożsamość:** $\color{mediumvioletred}{\nabla\times(\nabla\times\vec A) = \nabla(\nabla\cdot\vec A) - \nabla^2\vec A}$
