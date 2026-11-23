/* Coloration syntaxique légère (sans bibliothèque) pour la vue « Code » des artefacts : HTML, CSS, JavaScript, JSON, Python, Markdown, SVG, etc.
   Renvoie du HTML sûr : tout le texte est échappé avant d'être enveloppé dans des <span class="tk-…">. */
(function () {
  "use strict";
  const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const MOTS = "abstract|as|async|await|break|case|catch|class|const|continue|def|default|del|do|elif|else|except|export|extends|finally|for|from|function|if|import|in|is|lambda|let|new|not|or|and|pass|raise|return|self|static|super|switch|this|throw|try|typeof|var|while|with|yield|None|True|False|null|true|false|undefined";
  const REGLES = {
    js: [["com", /\/\/[^\n]*|\/\*[\s\S]*?\*\//y], ["str", /"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*'|`(?:\\.|[^`\\])*`/y], ["num", /\b\d+(?:\.\d+)?\b/y], ["kw", new RegExp("\\b(?:" + MOTS + ")\\b", "y")], ["fn", /[A-Za-z_$][\w$]*(?=\()/y]],
    py: [["com", /#[^\n]*/y], ["str", /"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*'/y], ["num", /\b\d+(?:\.\d+)?\b/y], ["kw", new RegExp("\\b(?:" + MOTS + ")\\b", "y")], ["fn", /[A-Za-z_][\w]*(?=\()/y]],
    css: [["com", /\/\*[\s\S]*?\*\//y], ["str", /"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*'/y], ["num", /#[0-9a-fA-F]{3,8}\b|-?\d+(?:\.\d+)?(?:px|em|rem|%|vh|vw|s|ms)?\b/y], ["kw", /@[\w-]+/y], ["fn", /[\w-]+(?=\s*:)/y]],
    json: [["str", /"(?:\\.|[^"\\\n])*"/y], ["num", /-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/y], ["kw", /\b(?:true|false|null)\b/y]],
    md: [["kw", /^#{1,6}[^\n]*/my], ["str", /`[^`\n]+`|\*\*[^*\n]+\*\*/y], ["fn", /\[[^\]\n]*\]\([^)\n]*\)/y], ["com", /^\s*(?:[-*+]|\d+\.)\s/my]],
  };
  function lang(type, l) {
    const t = String(l || type || "").toLowerCase();
    if (/^(html|htm|svg|xml)$/.test(t)) return "html"; if (/^(js|javascript|ts|typescript|jsx|mjs|java|c|cpp|cs|go|rust|rs|php)$/.test(t)) return "js"; if (/^(py|python)$/.test(t)) return "py";
    if (t === "css") return "css"; if (t === "json") return "json"; if (/^(md|markdown)$/.test(t)) return "md"; return "";
  }
  function genere(code, regles) {
    let i = 0, out = "", buf = "";
    const vide = () => { if (buf) { out += esc(buf); buf = ""; } };
    while (i < code.length) {
      let trouve = false;
      for (const [cls, re] of regles) { re.lastIndex = i; const m = re.exec(code); if (m && m.index === i && m[0].length) { vide(); out += '<span class="tk-' + cls + '">' + esc(m[0]) + "</span>"; i += m[0].length; trouve = true; break; } }
      if (!trouve) { buf += code[i]; i++; }
    }
    vide(); return out;
  }
  function html(code) {
    // balises, attributs et commentaires ; le contenu de <script> et <style> est coloré avec les règles JavaScript et CSS
    const re = /<!--[\s\S]*?-->|<(script|style)\b([^>]*)>([\s\S]*?)<\/\1>|<\/?[A-Za-z][^>]*>/gi; let out = "", dernier = 0, m;
    const balise = t => {
      // un seul passage : nom de la balise, attributs, valeurs entre guillemets, le reste tel quel
      let o = "", k = 0; const r = /^(<\/?)([\w:-]+)|\s([\w:.-]+)(?==)|"[^"]*"|'[^']*'/g, m2 = []; let x;
      while ((x = r.exec(t))) m2.push(x);
      m2.forEach(y => {
        o += esc(t.slice(k, y.index));
        if (y[2]) o += esc(y[1]) + '<span class="tk-kw">' + esc(y[2]) + "</span>";
        else if (y[3]) o += " <span class=\"tk-fn\">" + esc(y[3]) + "</span>";
        else o += '<span class="tk-str">' + esc(y[0]) + "</span>";
        k = y.index + y[0].length;
      });
      return o + esc(t.slice(k));
    };
    while ((m = re.exec(code))) {
      out += esc(code.slice(dernier, m.index));
      if (m[0].startsWith("<!--")) out += '<span class="tk-com">' + esc(m[0]) + "</span>";
      else if (m[1]) { const o = "<" + m[1] + m[2] + ">"; out += balise(o) + genere(m[3], REGLES[m[1].toLowerCase() === "style" ? "css" : "js"]) + balise("</" + m[1] + ">"); }
      else out += balise(m[0]);
      dernier = m.index + m[0].length;
    }
    return out + esc(code.slice(dernier));
  }
  window.GDBColor = { coloriser(code, type, l) { code = String(code == null ? "" : code); if (code.length > 200000) return esc(code); const k = lang(type, l); try { return k === "html" ? html(code) : k ? genere(code, REGLES[k]) : esc(code); } catch (_) { return esc(code); } } };
})();
