async function loadJSON(path){
  const r = await fetch(path);
  if(!r.ok) throw new Error("Load fail "+path);
  return r.json();
}
function $(sel, root=document){ return root.querySelector(sel); }
function h(tag, attrs={}, ...kids){
  const el = document.createElement(tag);
  for(const [k,v] of Object.entries(attrs)) (k==="class")? el.className=v : el.setAttribute(k,v);
  for(const k of kids) el.append(k);
  return el;
}
function getQueryParam(name){ return new URLSearchParams(location.search).get(name); }
function linkToGuide(id){ return `../field-guide/index.html?id=${encodeURIComponent(id)}`; }
function linkToMap(id){ return `../ascii-map/index.html?id=${encodeURIComponent(id)}`; }
function formatCoords([lat,lon]){ return `${lat.toFixed(2)}°, ${lon.toFixed(2)}°`; }
