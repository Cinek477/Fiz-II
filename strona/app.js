/* ---------- Fiszki ---------- */

const DECKS=[["all","Wszystkie"],["k1","Kolos 1"],["z2","Zestaw 2"],["todo","Do powtórki"]];
const store={get(k,d){try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}},
  set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
let known=store.get("fiszki-known",{}), deck="all", order=[], i=0, flipped=false;
const $=id=>document.getElementById(id);
function build(){order=CARDS.map((c,x)=>x).filter(x=>deck==="all"||(deck==="todo"?!known[x]:CARDS[x][0]===deck));i=0;render()}
function render(){
  document.querySelectorAll("#decks .chip").forEach(b=>b.setAttribute("aria-pressed",b.dataset.d===deck));
  const done=order.filter(x=>known[x]).length;
  $("known").textContent=`umiem ${done}/${order.length}`;
  $("prog").style.width=order.length?(done/order.length*100)+"%":"0";
  if(!order.length){$("tag").textContent="";$("q").textContent="Brak kart – wszystko umiesz 🎉";$("a").hidden=true;$("hint").hidden=true;$("pos").textContent="";return}
  const c=CARDS[order[i]];
  $("pos").textContent=`karta ${i+1} z ${order.length}`;
  $("tag").textContent=(c[0]==="k1"?"Kolos 1":"Zestaw 2")+" · "+c[1]+(known[order[i]]?" · ✓":"");
  $("q").innerHTML=texLine(c[2]);$("a").innerHTML=c[3].split("\n").map(l=>'<div class="ln">'+texLine(l)+"</div>").join("")
    +(LEGEND[order[i]]?'<div class="legend"><span class="lg-t">Oznaczenia</span><ul>'+LEGEND[order[i]].split(" · ").map(x=>"<li>"+texLine(x)+"</li>").join("")+"</ul></div>":"");
  $("a").hidden=!flipped;$("hint").hidden=flipped;
}
/* Zamienia tekst z $..$ / $$..$$ / **..** na HTML z wzorami KaTeX */
function esc(s){return s.replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]))}
function k(t,d){try{return window.katex?katex.renderToString(t,{displayMode:d,throwOnError:false}):esc(t)}catch(e){return esc(t)}}
function texLine(s){
  const out=[];let last=0;const re=/\$\$([\s\S]+?)\$\$|\$([^$]+?)\$/g;let m;
  while((m=re.exec(s))){out.push(esc(s.slice(last,m.index)).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"));
    out.push(m[1]!==undefined?k(m[1],true):k(m[2],false));last=re.lastIndex}
  out.push(esc(s.slice(last)).replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"));return out.join("");
}
function go(d){if(!order.length)return;i=(i+d+order.length)%order.length;flipped=false;render()}
function mark(v){if(!order.length)return;const id=order[i];if(v)known[id]=1;else delete known[id];store.set("fiszki-known",known);
  if(deck==="todo"&&v){order.splice(i,1);if(i>=order.length)i=0;flipped=false;render()}else go(1)}
DECKS.forEach(([d,l])=>{const b=document.createElement("button");b.className="chip";b.type="button";b.dataset.d=d;b.textContent=l;
  b.onclick=()=>{deck=d;flipped=false;build()};$("decks").appendChild(b)});
$("card").onclick=()=>{flipped=!flipped;render()};
$("next").onclick=()=>go(1);$("prev").onclick=()=>go(-1);
let resetArmed=null;
$("reset").onclick=()=>{const b=$("reset");
  if(!resetArmed){b.textContent="Na pewno? Kliknij jeszcze raz";b.classList.add("armed");
    resetArmed=setTimeout(()=>{resetArmed=null;b.textContent="↺ Resetuj postęp";b.classList.remove("armed")},4000);return}
  clearTimeout(resetArmed);resetArmed=null;known={};store.set("fiszki-known",known);
  b.textContent="Postęp wyzerowany";b.classList.remove("armed");setTimeout(()=>b.textContent="↺ Resetuj postęp",2000);
  flipped=false;build()};
$("good").onclick=()=>mark(true);$("again").onclick=()=>mark(false);
$("shuffle").onclick=()=>{for(let k=order.length-1;k>0;k--){const j=Math.floor(Math.random()*(k+1));[order[k],order[j]]=[order[j],order[k]]}i=0;flipped=false;render()};
document.addEventListener("keydown",e=>{if(view!=="fiszki")return;if(e.target.closest&&e.target.closest("button")&&e.key===" ")return;
  if(e.key===" "){e.preventDefault();flipped=!flipped;render()}else if(e.key==="ArrowRight")go(1);else if(e.key==="ArrowLeft")go(-1);
  else if(e.key==="1")mark(false);else if(e.key==="2")mark(true)});
build();

/* ---------- Notatki (markdown + KaTeX + callouty + wykresy) ---------- */
const SOFT={orange:"#c08a4e",darkorange:"#b97a3f",royalblue:"#5b7fa6",teal:"#4f8a85",crimson:"#b5605a",purple:"#8a6b9c",green:"#5f8a5e",mediumvioletred:"#a65f86",gray:"#8a867d"};
const NOTES=[["k1","Ściąga – kolos 1"],["k2","Ściąga – kolos 2"],["z1","Zestaw 1 – rozwiązania"],["z2","Zestaw 2 – rozwiązania"]];
let notesData=null, noteSel=store.get("fiszki-note","k1"), mermaidReady=false, chartId=0;
function mdToHtml(src){
  src=src.replace(/\\color\{([a-z]+)\}/g,(m,c)=>SOFT[c]?"\\color{"+SOFT[c]+"}":m);
  const math=[];
  // chroń bloki kodu przed wycinaniem matmy
  const code=[];src=src.replace(/```[\s\S]*?```/g,m=>{code.push(m);return "\u0000C"+(code.length-1)+"\u0000"});
  src=src.replace(/\$\$([\s\S]+?)\$\$/g,(m,t)=>{math.push([t,true]);return "\u0000M"+(math.length-1)+"\u0000"});
  src=src.replace(/\$([^$\n]+?)\$/g,(m,t)=>{math.push([t,false]);return "\u0000M"+(math.length-1)+"\u0000"});
  src=src.replace(/\u0000C(\d+)\u0000/g,(m,n)=>code[n]);
  let html=marked.parse(src,{gfm:true,breaks:false});
  html=html.replace(/\u0000M(\d+)\u0000/g,(m,n)=>{const[t,d]=math[n];
    try{return katex.renderToString(t,{displayMode:d,throwOnError:false})}catch(e){return t}});
  return html;
}
function enhance(root){
  root.querySelectorAll("table").forEach(t=>{const w=document.createElement("div");w.className="tbl";t.replaceWith(w);w.appendChild(t)});
  root.querySelectorAll("blockquote").forEach(bq=>{const p=bq.querySelector("p");if(!p)return;
    const m=p.innerHTML.match(/^\[!(\w+)\]([^\n<]*)(?:\n|<br>)?/);if(!m)return;
    const type=m[1].toLowerCase(), label=m[2].trim()||({tip:"Wskazówka",info:"Info",warning:"Uwaga",success:"Sprawdzenie",example:"Przykład"}[type]||type);
    p.innerHTML=p.innerHTML.slice(m[0].length);if(!p.textContent.trim()&&!p.querySelector(".katex"))p.remove();
    bq.classList.add("callout",type);const t=document.createElement("div");t.className="ct";t.textContent=label;bq.prepend(t)});
  const charts=[...root.querySelectorAll("pre code.language-mermaid")];
  let live=0;
  charts.forEach(c=>{
    const title=(c.textContent.match(/title "([^"]*)"/)||[])[1]||"", ch=window.chartForTitle&&chartForTitle(title);
    if(ch){c.parentElement.replaceWith(makeChart(ch,texLine));live++;return}
    const d=document.createElement("div");d.className="mermaid";d.textContent=c.textContent.replace(/^%%\{.*\}%%\n/m,"");c.parentElement.replaceWith(d)});
  if(live)requestAnimationFrame(redrawAllCharts);
  charts.splice(0,charts.length,...root.querySelectorAll(".mermaid"));
  if(charts.length&&window.mermaid){
    if(!mermaidReady){const v=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim();
      mermaid.initialize({startOnLoad:false,theme:"base",themeVariables:{fontFamily:v("--serif"),
        xyChart:{backgroundColor:v("--surface"),titleColor:v("--fg"),xAxisLabelColor:v("--muted"),yAxisLabelColor:v("--muted"),
          xAxisTitleColor:v("--muted"),yAxisTitleColor:v("--muted"),xAxisLineColor:v("--line"),yAxisLineColor:v("--line"),
          xAxisTickColor:v("--line"),yAxisTickColor:v("--line"),plotColorPalette:v("--accent")}}});mermaidReady=true}
    try{mermaid.run({nodes:root.querySelectorAll(".mermaid")})}catch(e){}
  }
}
async function loadNotes(){
  if(notesData)return notesData;
  try{const r=await fetch("notes.json");notesData=await r.json()}catch(e){notesData={}}
  return notesData;
}
async function showNote(k){
  noteSel=k;store.set("fiszki-note",k);
  document.querySelectorAll("#notesel .chip").forEach(b=>b.setAttribute("aria-pressed",b.dataset.d===k));
  const d=await loadNotes(), el=$("notes");
  if(!d[k]){el.innerHTML='<p class="loading">Nie udało się wczytać notatek. Odśwież stronę.</p>';return}
  el.innerHTML=mdToHtml(d[k]);enhance(el);
}
NOTES.forEach(([d,l])=>{const b=document.createElement("button");b.className="chip";b.type="button";b.dataset.d=d;b.textContent=l;
  b.onclick=()=>{showNote(d);window.scrollTo(0,0)};$("notesel").appendChild(b)});
let wzoryDone=false;
async function showWzory(){if(wzoryDone)return;const d=await loadNotes(),el=$("wzory");
  if(!d.wz){el.innerHTML='<p class="loading">Nie udało się wczytać karty wzorów. Odśwież stronę.</p>';return}
  el.innerHTML=mdToHtml(d.wz);enhance(el);wzoryDone=true}

/* ---------- Panele ---------- */
let view="fiszki", notesShown=false, redrawCharts=null;
const VIEWS=["fiszki","notatki","wzory","wykresy"];
function route(){
  const h=location.hash.slice(1);view=VIEWS.includes(h)?h:"fiszki";
  document.querySelectorAll(".tab").forEach(t=>t.setAttribute("aria-selected",t.dataset.v===view));
  VIEWS.forEach(v=>$("v-"+v).hidden=v!==view);
  if(view==="notatki"&&!notesShown){notesShown=true;showNote(noteSel)}
  if(view==="wzory")showWzory();
  if(view==="wykresy"&&!redrawCharts)redrawCharts=buildCharts($("charts"),texLine);
  requestAnimationFrame(redrawAllCharts);
}
addEventListener("hashchange",route);route();
