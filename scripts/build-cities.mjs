// Builds app/_data/cities.json: one photo per city, taken from the city's Wikipedia infobox
// image on Wikimedia Commons, with the photographer and license needed for attribution.
//
// The game used to fetch cities and photos from the Teleport API, which no longer exists.
// Run this script again to change the city list:  node scripts/build-cities.mjs
//
// Wikimedia asks API clients to identify themselves, so requests carry the User-Agent below.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const USER_AGENT = 'GuessThatCityDataBuilder/1.0 (https://github.com/ValueAchooMatthew/Guess-that-City)';
// Wikimedia only serves thumbnails at standard widths (250, 330, 500, 960, 1280 ...)
const THUMB_WIDTH = 960;
const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), '../app/_data/cities.json');

// [name shown in the game, English Wikipedia article title]
const CITIES = [
  // North America
  ['New York', 'New York City'], ['Los Angeles', 'Los Angeles'], ['Chicago', 'Chicago'],
  ['San Francisco', 'San Francisco'], ['Seattle', 'Seattle'], ['Boston', 'Boston'], ['Miami', 'Miami'],
  ['Washington, D.C.', 'Washington, D.C.'], ['Las Vegas', 'Las Vegas'], ['New Orleans', 'New Orleans'],
  ['Denver', 'Denver'], ['Austin', 'Austin, Texas'], ['Philadelphia', 'Philadelphia'], ['Toronto', 'Toronto'],
  ['Vancouver', 'Vancouver'], ['Montreal', 'Montreal'], ['Quebec City', 'Quebec City'], ['Ottawa', 'Ottawa'],
  ['Calgary', 'Calgary'], ['Mexico City', 'Mexico City'], ['Havana', 'Havana'], ['Honolulu', 'Honolulu'],
  ['San Diego', 'San Diego'], ['Nashville', 'Nashville, Tennessee'], ['Atlanta', 'Atlanta'], ['Houston', 'Houston'],
  ['Dallas', 'Dallas'], ['Phoenix', 'Phoenix, Arizona'], ['Portland', 'Portland, Oregon'], ['Minneapolis', 'Minneapolis'],
  ['Detroit', 'Detroit'],
  // South America
  ['Rio de Janeiro', 'Rio de Janeiro'], ['São Paulo', 'São Paulo'], ['Buenos Aires', 'Buenos Aires'], ['Lima', 'Lima'],
  ['Bogotá', 'Bogotá'], ['Santiago', 'Santiago'], ['Quito', 'Quito'], ['Cartagena', 'Cartagena, Colombia'],
  ['Montevideo', 'Montevideo'], ['La Paz', 'La Paz'], ['Medellín', 'Medellín'], ['Cusco', 'Cusco'],
  // Europe
  ['London', 'London'], ['Paris', 'Paris'], ['Rome', 'Rome'], ['Barcelona', 'Barcelona'], ['Madrid', 'Madrid'],
  ['Berlin', 'Berlin'], ['Amsterdam', 'Amsterdam'], ['Prague', 'Prague'], ['Vienna', 'Vienna'], ['Budapest', 'Budapest'],
  ['Lisbon', 'Lisbon'], ['Athens', 'Athens'], ['Istanbul', 'Istanbul'], ['Dublin', 'Dublin'], ['Edinburgh', 'Edinburgh'],
  ['Copenhagen', 'Copenhagen'], ['Stockholm', 'Stockholm'], ['Oslo', 'Oslo'], ['Helsinki', 'Helsinki'],
  ['Reykjavík', 'Reykjavík'], ['Brussels', 'Brussels'], ['Zürich', 'Zürich'], ['Munich', 'Munich'], ['Venice', 'Venice'],
  ['Florence', 'Florence'], ['Milan', 'Milan'], ['Naples', 'Naples'], ['Seville', 'Seville'], ['Porto', 'Porto'],
  ['Kraków', 'Kraków'], ['Warsaw', 'Warsaw'], ['Moscow', 'Moscow'], ['Saint Petersburg', 'Saint Petersburg'],
  ['Dubrovnik', 'Dubrovnik'], ['Monaco', 'Monaco'], ['Geneva', 'Geneva'], ['Bruges', 'Bruges'], ['Salzburg', 'Salzburg'],
  ['Hamburg', 'Hamburg'], ['Manchester', 'Manchester'], ['Liverpool', 'Liverpool'], ['Marseille', 'Marseille'],
  ['Nice', 'Nice'], ['Lyon', 'Lyon'], ['Valencia', 'Valencia'], ['Bergen', 'Bergen'], ['Tallinn', 'Tallinn'],
  ['Riga', 'Riga'], ['Vilnius', 'Vilnius'], ['Belgrade', 'Belgrade'], ['Bucharest', 'Bucharest'], ['Sofia', 'Sofia'],
  ['Kyiv', 'Kyiv'],
  // Asia
  ['Tokyo', 'Tokyo'], ['Kyoto', 'Kyoto'], ['Osaka', 'Osaka'], ['Seoul', 'Seoul'], ['Busan', 'Busan'], ['Beijing', 'Beijing'],
  ['Shanghai', 'Shanghai'], ['Hong Kong', 'Hong Kong'], ['Taipei', 'Taipei'], ['Singapore', 'Singapore'],
  ['Bangkok', 'Bangkok'], ['Hanoi', 'Hanoi'], ['Ho Chi Minh City', 'Ho Chi Minh City'], ['Kuala Lumpur', 'Kuala Lumpur'],
  ['Jakarta', 'Jakarta'], ['Manila', 'Manila'], ['Mumbai', 'Mumbai'], ['New Delhi', 'New Delhi'], ['Kolkata', 'Kolkata'],
  ['Bangalore', 'Bangalore'], ['Jaipur', 'Jaipur'], ['Kathmandu', 'Kathmandu'], ['Dubai', 'Dubai'],
  ['Abu Dhabi', 'Abu Dhabi'], ['Doha', 'Doha'], ['Jerusalem', 'Jerusalem'], ['Tel Aviv', 'Tel Aviv'], ['Tehran', 'Tehran'],
  ['Shenzhen', 'Shenzhen'], ['Chengdu', 'Chengdu'], ['Macau', 'Macau'], ['Phnom Penh', 'Phnom Penh'], ['Colombo', 'Colombo'],
  ['Ulaanbaatar', 'Ulaanbaatar'], ['Almaty', 'Almaty'], ['Tbilisi', 'Tbilisi'], ['Baku', 'Baku'],
  // Africa
  ['Cairo', 'Cairo'], ['Cape Town', 'Cape Town'], ['Johannesburg', 'Johannesburg'], ['Marrakesh', 'Marrakesh'],
  ['Casablanca', 'Casablanca'], ['Nairobi', 'Nairobi'], ['Lagos', 'Lagos'], ['Accra', 'Accra'], ['Addis Ababa', 'Addis Ababa'],
  ['Dakar', 'Dakar'], ['Zanzibar City', 'Zanzibar City'], ['Tunis', 'Tunis'], ['Kigali', 'Kigali'],
  // Oceania
  ['Sydney', 'Sydney'], ['Melbourne', 'Melbourne'], ['Brisbane', 'Brisbane'], ['Perth', 'Perth'], ['Auckland', 'Auckland'],
  ['Wellington', 'Wellington'], ['Queenstown', 'Queenstown, New Zealand'],
];

// Infobox images that would not work as a photo to guess from
const NOT_A_PHOTO = /flag|coat[ _]of[ _]arms|seal|emblem|logo|locator|location[ _]map|map[ _]of|_map\.|\bmap\b/i;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const chunks = (list, n) => Array.from({ length: Math.ceil(list.length / n) }, (_, i) => list.slice(i * n, i * n + n));

async function api(host, params) {
  const url = `https://${host}/w/api.php?` + new URLSearchParams({ format: 'json', formatversion: '2', ...params });
  const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
  if (!res.ok) throw new Error(`${host} API ${res.status}`);
  return res.json();
}

const plainText = (html) => (html ?? '')
  .replace(/<[^>]*>/g, '')
  .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/\s+/g, ' ').trim();

// 1. Infobox image file name for each article
const fileForTitle = new Map();
for (const batch of chunks(CITIES.map(([, title]) => title), 50)) {
  const data = await api('en.wikipedia.org', {
    action: 'query', prop: 'pageimages', piprop: 'name', pilimit: '50', redirects: '1', titles: batch.join('|'),
  });
  const rename = new Map();
  for (const n of data.query.normalized ?? []) rename.set(n.from, n.to);
  for (const r of data.query.redirects ?? []) rename.set(r.from, r.to);
  const byTitle = new Map(data.query.pages.map((p) => [p.title, p.pageimage]));
  for (const title of batch) {
    let t = title;
    while (rename.has(t)) t = rename.get(t);
    if (byTitle.get(t)) fileForTitle.set(title, byTitle.get(t));
  }
  await sleep(300);
}

// 2. Commons details: a sized thumbnail, the file page, photographer and license.
// Files that are not on Commons (non-free images hosted on Wikipedia itself) come back missing and are skipped.
const infoForFile = new Map();
for (const batch of chunks([...new Set(fileForTitle.values())], 50)) {
  const data = await api('commons.wikimedia.org', {
    action: 'query', prop: 'imageinfo', iiprop: 'url|mime|extmetadata', iiurlwidth: String(THUMB_WIDTH),
    iiextmetadatafilter: 'Artist|LicenseShortName', titles: batch.map((f) => `File:${f}`).join('|'),
  });
  const rename = new Map((data.query.normalized ?? []).map((n) => [n.to, n.from]));
  for (const page of data.query.pages) {
    const info = page.imageinfo?.[0];
    if (page.missing || !info) continue;
    const file = (rename.get(page.title) ?? page.title).replace(/^File:/, '');
    infoForFile.set(file, info);
  }
  await sleep(300);
}

// 3. Keep usable photos whose thumbnail actually loads
const cities = [];
const skipped = [];
for (const [name, title] of CITIES) {
  const file = fileForTitle.get(title);
  const info = file && infoForFile.get(file);
  if (!info) { skipped.push(`${name}: no free infobox image`); continue; }
  if (!['image/jpeg', 'image/png'].includes(info.mime) || NOT_A_PHOTO.test(file)) { skipped.push(`${name}: ${file} is not a photo`); continue; }
  const image = info.thumburl ?? info.url;
  const check = await fetch(image, { method: 'HEAD', headers: { 'User-Agent': USER_AGENT } });
  if (!check.ok) { skipped.push(`${name}: image returned ${check.status}`); continue; }
  const meta = info.extmetadata ?? {};
  cities.push({
    name,
    image,
    source: info.descriptionurl,
    artist: plainText(meta.Artist?.value).slice(0, 80) || 'Unknown author',
    license: plainText(meta.LicenseShortName?.value) || 'see source',
  });
  await sleep(100);
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(cities, null, 2) + '\n');
console.log(`wrote ${cities.length} cities to ${path.relative(process.cwd(), OUT)}`);
if (skipped.length) console.log(`skipped ${skipped.length}:\n  ` + skipped.join('\n  '));
