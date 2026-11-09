/* Interaktywne wykresy liczone wprost ze wzorów.
   Każdy wykres: suwaki (params) + funkcja draw(p) zwracająca opis osi i serii. */

function cssVar(n){return getComputedStyle(document.documentElement).getPropertyValue(n).trim()}

/* Rysuje wykres na canvasie. o = {x:[min,max], y:[min,max], xl, yl, series:[{f, color, label, dash}], marks:[{x,y,label}], vlines:[{x,label}]} */
function plot(cv,o){
  const dpr=window.devicePixelRatio||1, W=cv.clientWidth, H=cv.clientHeight;
  cv.width=W*dpr; cv.height=H*dpr;
  const g=cv.getContext("2d"); g.setTransform(dpr,0,0,dpr,0,0); g.clearRect(0,0,W,H);
  const fg=cssVar("--fg"), mu=cssVar("--muted"), ln=cssVar("--line");
  const L=56,R=14,T=14,B=40, w=W-L-R, h=H-T-B;
  const [x0,x1]=o.x,[y0,y1]=o.y;
  const X=x=>L+(x-x0)/(x1-x0)*w, Y=y=>T+(1-(y-y0)/(y1-y0))*h;
  g.font="12px "+cssVar("--mono"); g.lineWidth=1;
  // siatka + podziałka
  const ticks=(a,b)=>{const span=b-a, step=Math.pow(10,Math.floor(Math.log10(span/5)));
    const s=[1,2,5,10].map(m=>m*step).find(v=>span/v<=6); const r=[];
    for(let v=Math.ceil(a/s)*s; v<=b+1e-9; v+=s) r.push(+v.toPrecision(10)); return r};
  const fmt=v=>Math.abs(v)>=1e4||(Math.abs(v)<1e-2&&v!==0)?v.toExponential(0):(+v.toFixed(3)).toString().replace(".",",");
  g.strokeStyle=ln; g.fillStyle=mu; g.textAlign="center"; g.textBaseline="top";
  ticks(x0,x1).forEach(v=>{g.beginPath();g.moveTo(X(v),T);g.lineTo(X(v),T+h);g.stroke();g.fillText(fmt(v),X(v),T+h+6)});
  g.textAlign="right"; g.textBaseline="middle";
  ticks(y0,y1).forEach(v=>{g.beginPath();g.moveTo(L,Y(v));g.lineTo(L+w,Y(v));g.stroke();g.fillText(fmt(v),L-6,Y(v))});
  // osie zerowe
  g.strokeStyle=mu; g.lineWidth=1.2;
  if(y0<0&&y1>0){g.beginPath();g.moveTo(L,Y(0));g.lineTo(L+w,Y(0));g.stroke()}
  g.beginPath();g.moveTo(L,T);g.lineTo(L,T+h);g.lineTo(L+w,T+h);g.stroke();
  // podpisy osi
  g.fillStyle=mu; g.textAlign="right"; g.textBaseline="bottom"; g.fillText(o.xl,L+w,H-2);
  g.save(); g.translate(12,T); g.rotate(-Math.PI/2); g.textAlign="right"; g.textBaseline="top"; g.fillText(o.yl,0,0); g.restore();
  // linie pionowe (np. R, rezonans)
  (o.vlines||[]).forEach(v=>{if(v.x<x0||v.x>x1)return;g.save();g.setLineDash([4,4]);g.strokeStyle=mu;g.beginPath();g.moveTo(X(v.x),T);g.lineTo(X(v.x),T+h);g.stroke();g.restore();
    g.fillStyle=mu;g.textAlign="left";g.textBaseline="top";g.fillText(v.label,X(v.x)+4,T+2)});
  // serie
  g.save(); g.beginPath(); g.rect(L,T,w,h); g.clip();
  o.series.forEach(s=>{g.strokeStyle=s.color; g.lineWidth=2.2; g.setLineDash(s.dash||[]); g.beginPath(); let pen=false;
    for(let px=0;px<=w;px++){const x=x0+(x1-x0)*px/w, y=s.f(x);
      if(!isFinite(y)){pen=false;continue} const yy=Math.max(-1e5,Math.min(1e5,Y(y)));
      pen?g.lineTo(L+px,yy):g.moveTo(L+px,yy); pen=true}
    g.stroke()});
  g.restore(); g.setLineDash([]);
  // punkty
  (o.marks||[]).forEach(m=>{g.fillStyle=m.color||fg;g.beginPath();g.arc(X(m.x),Y(m.y),4.5,0,7);g.fill();
    g.textAlign="left";g.textBaseline="bottom";g.fillText(m.label,X(m.x)+8,Y(m.y)-4)});
  // legenda
  const leg=o.series.filter(s=>s.label); g.textBaseline="middle"; g.textAlign="left";
  let lx=L+10; leg.forEach(s=>{g.strokeStyle=s.color;g.lineWidth=2.2;g.setLineDash(s.dash||[]);g.beginPath();g.moveTo(lx,T+12);g.lineTo(lx+18,T+12);g.stroke();g.setLineDash([]);
    g.fillStyle=fg;g.fillText(s.label,lx+24,T+12);lx+=g.measureText(s.label).width+52});
}

const C1="--c-info", C2="--c-warn", C3="--c-ok", C4="--c-ex";
const SUP={"-":"⁻","0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹"};
const f2=v=>{if(v!==0&&(Math.abs(v)>=1e5||Math.abs(v)<1e-3)){const [m,e]=v.toExponential(2).split("e");
  return (+m).toString().replace(".",",")+"·10"+String(+e).split("").map(c=>SUP[c]).join("")}
  return (+v.toPrecision(3)).toString().replace(".",",")};

const CHARTS=[
{ id:"zrodlo", title:"Źródło z oporem wewnętrznym: moc P(Rz)",
  note:"Moc na obciążeniu jest największa, gdy $R_z = r$. Wtedy $P_{max} = \\dfrac{\\varepsilon^2}{4r}$.",
  params:[["eps","\\varepsilon\\ [\\text{V}]",1,24,0.5,12],["r","r\\ [\\Omega]",0.2,5,0.1,1]],
  draw:p=>{const P=R=>p.eps*p.eps*R/((R+p.r)**2), Pm=p.eps*p.eps/(4*p.r);
    return {x:[0,6*p.r+2],y:[0,Pm*1.25],xl:"Rz [Ω]",yl:"P [W]",
      series:[{f:P,color:cssVar(C1),label:"P(Rz)"}],
      marks:[{x:p.r,y:Pm,label:"max: "+f2(Pm)+" W",color:cssVar(C2)}],vlines:[{x:p.r,label:"Rz = r"}]}},
  info:p=>`P_max = ${f2(p.eps*p.eps/(4*p.r))} W przy Rz = ${f2(p.r)} Ω`},

{ id:"vi", title:"Źródło z oporem wewnętrznym: napięcie V(I)",
  note:"Prosta $V = \\varepsilon - Ir$. Przecina oś $V$ w $\\varepsilon$, oś $I$ w prądzie zwarcia $\\varepsilon/r$.",
  params:[["eps","\\varepsilon\\ [\\text{V}]",1,24,0.5,12],["r","r\\ [\\Omega]",0.2,5,0.1,1]],
  draw:p=>({x:[0,p.eps/p.r*1.1],y:[0,p.eps*1.15],xl:"I [A]",yl:"V [V]",
    series:[{f:I=>p.eps-I*p.r,color:cssVar(C1),label:"V(I)"}],
    marks:[{x:0,y:p.eps,label:"ε",color:cssVar(C2)},{x:p.eps/p.r,y:0,label:"zwarcie ε/r",color:cssVar(C2)}]}),
  info:p=>`prąd zwarcia ε/r = ${f2(p.eps/p.r)} A`},

{ id:"rl", title:"Cewka RL podłączona do źródła: I(t)",
  note:"$I(t) = \\dfrac{\\varepsilon}{R}\\left(1 - e^{-t/\\tau}\\right)$, $\\tau = L/R$. Po czasie $\\tau$ prąd ma 63% maksimum.",
  params:[["eps","\\varepsilon\\ [\\text{V}]",1,24,0.5,12],["R","R\\ [\\Omega]",1,50,0.5,10],["L","L\\ [\\text{mH}]",1,500,1,100]],
  draw:p=>{const L=p.L/1000,tau=L/p.R,Imax=p.eps/p.R;
    return {x:[0,tau*6*1000],y:[0,Imax*1.2],xl:"t [ms]",yl:"I [A]",
      series:[{f:t=>Imax*(1-Math.exp(-t/1000/tau)),color:cssVar(C1),label:"I(t)"},{f:()=>Imax,color:cssVar("--muted"),dash:[5,5],label:"ε/R"}],
      marks:[{x:tau*1000,y:Imax*(1-Math.exp(-1)),label:"t = τ (63%)",color:cssVar(C2)}],vlines:[{x:tau*1000,label:"τ"}]}},
  info:p=>`τ = L/R = ${f2(p.L/p.R)} ms, I_max = ε/R = ${f2(p.eps/p.R)} A`},

{ id:"rlc", title:"Obwód RLC: rozładowanie kondensatora q(t)",
  note:"Przesuń $R$: przy małym $R$ są drgania gasnące, przy $R = 2\\sqrt{L/C}$ tłumienie krytyczne, przy większym brak drgań.",
  params:[["R","R\\ [\\Omega]",0,400,1,20],["L","L\\ [\\text{mH}]",1,200,1,50],["C","C\\ [\\mu\\text{F}]",0.5,50,0.5,5]],
  draw:p=>{const L=p.L/1e3,C=p.C/1e6,b=p.R/(2*L),w0=1/Math.sqrt(L*C);let f,kind;
    if(b<w0*0.999){const w=Math.sqrt(w0*w0-b*b);f=t=>Math.exp(-b*t)*(Math.cos(w*t)+b/w*Math.sin(w*t));kind="drgania gasnące"}
    else if(b>w0*1.001){const s=Math.sqrt(b*b-w0*w0),l1=-b+s,l2=-b-s;f=t=>(l2*Math.exp(l1*t)-l1*Math.exp(l2*t))/(l2-l1);kind="przetłumienie (brak drgań)"}
    else{f=t=>(1+b*t)*Math.exp(-b*t);kind="tłumienie krytyczne"}
    const T=2*Math.PI/w0*5;
    return {x:[0,T*1000],y:[-1.1,1.1],xl:"t [ms]",yl:"q / q₀",
      series:[{f:t=>f(t/1000),color:cssVar(C1),label:kind},{f:t=>Math.exp(-b*t/1000),color:cssVar("--muted"),dash:[5,5],label:"obwiednia e^(−βt)"}]}},
  info:p=>{const L=p.L/1e3,C=p.C/1e6;return `β = ${f2(p.R/(2*L))} 1/s, ω₀ = ${f2(1/Math.sqrt(L*C))} rad/s, R_kryt = 2√(L/C) = ${f2(2*Math.sqrt(L/C))} Ω`}},

{ id:"rez", title:"RLC z wymuszeniem: krzywa rezonansowa I₀(f)",
  note:"$I_0 = \\dfrac{U_0}{Z}$, $Z = \\sqrt{R^2 + (\\omega L - \\frac{1}{\\omega C})^2}$. Pik przy $f_0 = \\dfrac{1}{2\\pi\\sqrt{LC}}$. Mniejsze $R$ daje wyższy i węższy pik.",
  params:[["U","U_0\\ [\\text{V}]",1,20,0.5,10],["R","R\\ [\\Omega]",1,200,1,20],["L","L\\ [\\text{mH}]",1,200,1,50],["C","C\\ [\\mu\\text{F}]",0.5,50,0.5,5]],
  draw:p=>{const L=p.L/1e3,C=p.C/1e6,f0=1/(2*Math.PI*Math.sqrt(L*C));
    const I=f=>{const w=2*Math.PI*f;return p.U/Math.sqrt(p.R*p.R+(w*L-1/(w*C))**2)};
    return {x:[0,f0*3],y:[0,p.U/p.R*1.2],xl:"f [Hz]",yl:"I₀ [A]",
      series:[{f:I,color:cssVar(C1),label:"I₀(f)"}],
      marks:[{x:f0,y:p.U/p.R,label:"rezonans: "+f2(p.U/p.R)+" A",color:cssVar(C2)}],vlines:[{x:f0,label:"f₀"}]}},
  info:p=>{const L=p.L/1e3,C=p.C/1e6;return `f₀ = ${f2(1/(2*Math.PI*Math.sqrt(L*C)))} Hz, I₀ max = U₀/R = ${f2(p.U/p.R)} A`}},

{ id:"faza", title:"RLC z wymuszeniem: przesunięcie fazowe φ(f)",
  note:"$\\operatorname{tg}\\varphi = \\dfrac{\\omega L - 1/(\\omega C)}{R}$. Poniżej $f_0$ prąd wyprzedza napięcie ($\\varphi < 0$), powyżej się spóźnia.",
  params:[["R","R\\ [\\Omega]",1,200,1,20],["L","L\\ [\\text{mH}]",1,200,1,50],["C","C\\ [\\mu\\text{F}]",0.5,50,0.5,5]],
  draw:p=>{const L=p.L/1e3,C=p.C/1e6,f0=1/(2*Math.PI*Math.sqrt(L*C));
    return {x:[0,f0*3],y:[-95,95],xl:"f [Hz]",yl:"φ [°]",
      series:[{f:f=>{const w=2*Math.PI*f;return Math.atan((w*L-1/(w*C))/p.R)*180/Math.PI},color:cssVar(C4),label:"φ(f)"}],
      vlines:[{x:f0,label:"f₀ (φ = 0)"}]}},
  info:p=>`f₀ = ${f2(1/(2*Math.PI*Math.sqrt(p.L/1e3*p.C/1e6)))} Hz`},

{ id:"kula", title:"Pole naładowanej kuli E(r)",
  note:"Wewnątrz $E = \\dfrac{\\rho r}{3\\varepsilon_0}$ (rośnie liniowo), na zewnątrz $E = \\dfrac{\\rho R^3}{3\\varepsilon_0 r^2}$ (maleje jak $1/r^2$).",
  params:[["R","R\\ [\\text{cm}]",1,10,0.5,4],["rho","\\rho\\ [\\text{nC/m}^3]",1,100,1,50]],
  draw:p=>{const R=p.R/100,rho=p.rho*1e-9,e0=8.854e-12,E=r=>{r/=100;return r<R?rho*r/(3*e0):rho*R**3/(3*e0*r*r)},Em=E(p.R);
    return {x:[0,p.R*4],y:[0,Em*1.2],xl:"r [cm]",yl:"E [V/m]",series:[{f:E,color:cssVar(C1),label:"E(r)"}],
      marks:[{x:p.R,y:Em,label:"max na powierzchni: "+f2(Em)+" V/m",color:cssVar(C2)}],vlines:[{x:p.R,label:"R"}]}},
  info:p=>`E(R) = ρR/(3ε₀) = ${f2(p.rho*1e-9*p.R/100/(3*8.854e-12))} V/m`},

{ id:"fala", title:"Fala EM: E i B w chwili t",
  note:"$E_y = E_0\\sin(\\omega t - kx)$, $B_z = \\dfrac{E_0}{c}\\sin(\\omega t - kx)$. Pola drgają w fazie, a fala biegnie w stronę $+x$. Przesuń $t$, żeby zobaczyć ruch.",
  params:[["lam","\\lambda\\ [\\text{nm}]",100,1000,10,500],["t","t\\ [\\text{okresy } T]",0,2,0.02,0]],
  draw:p=>{const k=2*Math.PI/p.lam, ph=2*Math.PI*p.t;
    return {x:[0,p.lam*2],y:[-1.2,1.2],xl:"x [nm]",yl:"E/E₀, cB/E₀",
      series:[{f:x=>Math.sin(ph-k*x),color:cssVar(C1),label:"E_y"},{f:x=>Math.sin(ph-k*x)*0.6,color:cssVar(C3),dash:[6,4],label:"B_z (skala ×c, zmniejszone)"}],
      vlines:[{x:p.lam,label:"λ"}]}},
  info:p=>`λ = ${p.lam} nm, f = c/λ = ${f2(3e8/(p.lam*1e-9))} Hz`}
];

/* Jeden interaktywny wykres – używany w panelu Wykresy i w notatkach */
let chartSeq=0;
function makeChart(ch,texLine){
    const uid=ch.id+"-"+(chartSeq++);
    const box=document.createElement("div"); box.className="chart";
    box.innerHTML=`<h3>${ch.title}</h3><p class="cnote">${texLine(ch.note)}</p>
      <div class="sliders"></div><canvas aria-label="${ch.title}"></canvas><p class="cinfo"></p>`;
    const vals={}, sl=box.querySelector(".sliders"), cv=box.querySelector("canvas"), info=box.querySelector(".cinfo");
    const redraw=()=>{if(!cv.clientWidth)return;plot(cv,ch.draw(vals));info.textContent=ch.info(vals)};
    ch.params.forEach(([key,lab,min,max,step,def])=>{
      vals[key]=def; const id=`s-${uid}-${key}`;
      const row=document.createElement("label"); row.className="srow"; row.htmlFor=id;
      row.innerHTML=`<span class="slab">${texLine("$"+lab+"$")}</span><input type="range" id="${id}" min="${min}" max="${max}" step="${step}" value="${def}"><output>${f2(def)}</output>`;
      sl.appendChild(row);
      const inp=row.querySelector("input"), out=row.querySelector("output");
      inp.addEventListener("input",()=>{vals[key]=+inp.value;out.textContent=f2(vals[key]);redraw()});
    });
    box._redraw=redraw;
    return box;
}
function redrawAllCharts(){document.querySelectorAll(".chart").forEach(b=>b._redraw&&b._redraw())}
addEventListener("resize",redrawAllCharts);
matchMedia("(prefers-color-scheme: dark)").addEventListener("change",redrawAllCharts);

/* Panel Wykresy */
function buildCharts(host,texLine){
  CHARTS.forEach(ch=>host.appendChild(makeChart(ch,texLine)));
  return redrawAllCharts;
}

/* Który interaktywny wykres zastępuje wykres z notatek (dopasowanie po tytule) */
const NOTE_CHART={"I(t)":"rl","P(Rz)":"zrodlo","V(I)":"vi","gasnące":"rlc","E(r)":"kula"};
function chartForTitle(t){const k=Object.keys(NOTE_CHART).find(k=>t.includes(k));return k?CHARTS.find(c=>c.id===NOTE_CHART[k]):null}
