
const fs = require("fs");
const path = require("path");

let INDEX;
function getIndex() {
  if (!INDEX) {
    INDEX = JSON.parse(fs.readFileSync(path.join(process.cwd(), "data", "design-index.json"), "utf8"));
  }
  return INDEX;
}
function json(res, body, status=200) {
  res.status(status).setHeader("Content-Type","application/json; charset=utf-8");
  res.setHeader("Cache-Control","s-maxage=60, stale-while-revalidate=300");
  res.end(JSON.stringify(body));
}
function auth(req) {
  const expected = process.env.TEYNEX_API_KEY;
  if (!expected) return true;
  return req.headers["x-api-key"] === expected ||
         (req.headers.authorization || "").replace(/^Bearer\s+/i,"") === expected;
}
function score(r, q) {
  const hay = (r.path+" "+r.repo+" "+r.tags.join(" ")).toLowerCase();
  const words = q.toLowerCase().split(/\s+/).filter(Boolean);
  return words.reduce((s,w) => s + (hay.includes(w) ? (r.path.toLowerCase().includes(w) ? 4 : 2) : 0), 0);
}
module.exports = {getIndex,json,auth,score};
