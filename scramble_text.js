! function(D, u) {
    "object" == typeof exports && "undefined" != typeof module ? u(exports) : "function" == typeof define && define.amd ? define(["exports"], u) : u((D = D || self).window = D.window || {})
}(this, function(D) {
    "use strict";
    var r = /(?:^\s+|\s+$)/g,
        o = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;

    function getText(D) {
        var u = D.nodeType,
            F = "";
        if (1 === u || 9 === u || 11 === u) {
            if ("string" == typeof D.textContent) return D.textContent;
            for (D = D.firstChild; D; D = D.nextSibling) F += getText(D)
        } else if (3 === u || 4 === u) return D.nodeValue;
        return F
    }

    function emojiSafeSplit(D, u, F, C) {
        if (D += "", F && (D = D.trim ? D.trim() : D.replace(r, "")), u && "" !== u) return D.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(u);
        for (var e, E, t = [], n = D.length, i = 0; i < n; i++)(55296 <= (E = D.charAt(i)).charCodeAt(0) && E.charCodeAt(0) <= 56319 || 65024 <= D.charCodeAt(i + 1) && D.charCodeAt(i + 1) <= 65039) && (e = ((D.substr(i, 12).split(o) || [])[1] || "").length || 2, E = D.substr(i, e), i += e - (t.emoji = 1)), t.push(">" === E ? "&gt;" : "<" === E ? "&lt;" : !C || " " !== E || " " !== D.charAt(i - 1) && " " !== D.charAt(i + 1) ? E : "&nbsp;");
        return t
    }
    var a = (CharSet.prototype.grow = function grow(D) {
        for (var u = 0; u < 20; u++) this.sets[u] += F(D - this.length, this.chars);
        this.length = D
    }, CharSet);

    function CharSet(D) {
        this.chars = emojiSafeSplit(D), this.sets = [], this.length = 50;
        for (var u = 0; u < 20; u++) this.sets[u] = F(80, this.chars)
    }

    function i() {
        return E || "undefined" != typeof window && (E = window.gsap) && E.registerPlugin && E
    }

    function l() {
        return String.fromCharCode.apply(null, arguments)
    }

    function v() {
        s = E = i()
    }
    var E, s, t = "ScrambleTextPlugin",
        n = l(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
        B = l(103, 115, 97, 112, 46, 99, 111, 109),
        A = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,
       	h=1,
        c = /\s+/g,
        F = function _scrambleText(D, u) {
            for (var F = u.length, C = ""; - 1 < --D;) C += u[~~(Math.random() * F)];
            return C
        },
        u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        C = u.toLowerCase(),
        f = {
            upperCase: new a(u),
            lowerCase: new a(C),
            upperAndLowerCase: new a(u + C)
        },
        e = {
            version: "3.12.3",
            name: "scrambleText",
            register: function register(D) {
                E = D, v()
            },
            init: function init(D, u, F) {
                if (s || v(), this.prop = "innerHTML" in D ? "innerHTML" : "textContent" in D ? "textContent" : 0, this.prop) {
                    this.target = D, "object" != typeof u && (u = {
                        text: u
                    });
                    var C, e, E, t, n = u.text || u.value || "",
                        i = !1 !== u.trim,
                        r = this;
                    return r.delimiter = C = u.delimiter || "", r.original = emojiSafeSplit(getText(D).replace(c, " ").split("&nbsp;").join(""), C, i), "{original}" !== n && !0 !== n && null != n || (n = r.original.join(C)), r.text = emojiSafeSplit((n || "").replace(c, " "), C, i), r.hasClass = !(!u.newClass && !u.oldClass), r.newClass = u.newClass, r.oldClass = u.oldClass, t = "" === C, r.textHasEmoji = t && !!r.text.emoji, r.charsHaveEmoji = !!u.chars && !!emojiSafeSplit(u.chars).emoji, r.length = t ? r.original.length : r.original.join(C).length, r.lengthDif = (t ? r.text.length : r.text.join(C).length) - r.length, r.fillChar = u.fillChar || u.chars && ~u.chars.indexOf(" ") ? "&nbsp;" : "", r.charSet = E = f[u.chars || "upperCase"] || new a(u.chars), r.speed = .05 / (u.speed || 1), r.prevScrambleTime = 0, r.setIndex = 20 * Math.random() | 0, (e = r.length + Math.max(r.lengthDif, 0)) > E.length && E.grow(e), r.chars = E.sets[r.setIndex], r.revealDelay = u.revealDelay || 0, r.tweenLength = !1 !== u.tweenLength, r.tween = F, r.rightToLeft = !!u.rightToLeft, r._props.push("scrambleText", "text"), h
                }
            },
            render: function render(D, u) {
                var F, C, e, E, t, n, i, r, l, o, a, s = u.target,
                    B = u.prop,
                    A = u.text,
                    h = u.delimiter,
                    c = u.tween,
                    f = u.prevScrambleTime,
                    d = u.revealDelay,
                    p = u.setIndex,
                    g = u.chars,
                    m = u.charSet,
                    w = u.length,
                    x = u.textHasEmoji,
                    S = u.charsHaveEmoji,
                    j = u.lengthDif,
                    v = u.tweenLength,
                    b = u.oldClass,
                    T = u.newClass,
                    y = u.rightToLeft,
                    _ = u.fillChar,
                    L = u.speed,
                    M = u.original,
                    H = u.hasClass,
                    O = A.length,
                    W = c._time,
                    P = W - f;
                d && (c._from && (W = c._dur - W), D = 0 === W ? 0 : W < d ? 1e-6 : W === c._dur ? 1 : c._ease((W - d) / (c._dur - d))), D < 0 ? D = 0 : 1 < D && (D = 1), y && (D = 1 - D), F = ~~(D * O + .5), E = D ? ((L < P || P < -L) && (u.setIndex = p = (p + (19 * Math.random() | 0)) % 20, u.chars = m.sets[p], u.prevScrambleTime += P), g) : M.join(h), a = c._from ? D : 1 - D, o = w + (v ? c._from ? a * a * a : 1 - a * a * a : 1) * j, E = y ? 1 !== D || !c._from && "isFromStart" !== c.data ? (i = A.slice(F).join(h), e = S ? emojiSafeSplit(E).slice(0, o - (x ? emojiSafeSplit(i) : i).length + .5 | 0).join("") : E.substr(0, o - (x ? emojiSafeSplit(i) : i).length + .5 | 0), i) : (e = "", M.join(h)) : (e = A.slice(0, F).join(h), C = (x ? emojiSafeSplit(e) : e).length, S ? emojiSafeSplit(E).slice(C, o + .5 | 0).join("") : E.substr(C, o - C + .5 | 0)), i = H ? ((t = (r = y ? b : T) && 0 != F) ? "<span class='" + r + "'>" : "") + e + (t ? "</span>" : "") + ((n = (l = y ? T : b) && F !== O) ? "<span class='" + l + "'>" : "") + h + E + (n ? "</span>" : "") : e + h + E, s[B] = "&nbsp;" === _ && ~i.indexOf("  ") ? i.split("  ").join("&nbsp;&nbsp;") : i
            }
        };
    e.emojiSafeSplit = emojiSafeSplit, e.getText = getText, i() && E.registerPlugin(e), D.ScrambleTextPlugin = e, D.default = e;
    if (typeof(window) === "undefined" || window !== D) {
        Object.defineProperty(D, "__esModule", {
            value: !0
        })
    } else {
        delete D.default
    }
});