// ----- ContextPop v0.1 -----
// Grabs last N messages & injects one-line TL;DR bubble.

const CHAT_PANE = "div[role='region']";
const MAX_LINES = 30;

function summarize(text) {
  const sents = text.split(/[.!?]/).filter(Boolean);
  return (sents.slice(-3).join(". ") + ".").trim();
}

function inject(summary) {
  if (document.getElementById("context-pop")) return;

  const div = document.createElement("div");
  div.id = "context-pop";
  div.style.cssText =
    "position:sticky;top:0;z-index:1000;background:#d0f0ff;" +
    "padding:8px 12px;font:14px/18px Arial;border-bottom:1px solid #7cc5ff";
  div.textContent = "TL;DR – " + summary;
  document.querySelector(CHAT_PANE).prepend(div);
}

function grab() {
  return [...document.querySelectorAll("div.message-in,div.message-out")]
    .slice(-MAX_LINES)
    .map(m => m.innerText)
    .join(" ");
}

new MutationObserver(() => {
  const pane = document.querySelector(CHAT_PANE);
  if (pane && !document.getElementById("context-pop")) {
    const txt = grab();
    if (txt) inject(summarize(txt));
  }
}).observe(document.body, { childList: true, subtree: true });
