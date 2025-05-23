/*!
 * DrawSVGPlugin 3.12.3
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * *** DO NOT DEPLOY THIS FILE ***
 * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.
 * Loading it on an unauthorized domain violates the license and will cause a redirect.
 * Get the unrestricted file by joining Club GreenSock at https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";

    function l() {
        return "undefined" != typeof window
    }

    function m() {
        return o || l() && (o = window.gsap) && o.registerPlugin && o
    }

    function p(e) {
        return Math.round(1e4 * e) / 1e4
    }

    function q(e) {
        return parseFloat(e) || 0
    }

    function r(e, t) {
        var n = q(e);
        return ~e.indexOf("%") ? n / 100 * t : n
    }

    function s(e, t) {
        return q(e.getAttribute(t))
    }

    function u(e, t, n, r, i, o) {
        return M(Math.pow((q(n) - q(e)) * i, 2) + Math.pow((q(r) - q(t)) * o, 2))
    }

    function v(e) {
        return console.warn(e)
    }

    function w(e) {
        return "non-scaling-stroke" === e.getAttribute("vector-effect")
    }

    function z() {
        return String.fromCharCode.apply(null, arguments)
    }

    function F(e) {
        if (!(e = x(e)[0])) return 0;
        var t, n, r, i, o, a, f, d = e.tagName.toLowerCase(),
            l = e.style,
            h = 1,
            c = 1;
        w(e) && (c = e.getScreenCTM(), h = M(c.a * c.a + c.b * c.b), c = M(c.d * c.d + c.c * c.c));
        try {
            n = e.getBBox()
        } catch (e) {
            v("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
        }
        var g = n || {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            z = g.x,
            y = g.y,
            _ = g.width,
            m = g.height;
        if (n && (_ || m) || !P[d] || (_ = s(e, P[d][0]), m = s(e, P[d][1]), "rect" !== d && "line" !== d && (_ *= 2, m *= 2), "line" === d && (z = s(e, "x1"), y = s(e, "y1"), _ = Math.abs(_ - z), m = Math.abs(m - y))), "path" === d) i = l.strokeDasharray, l.strokeDasharray = "none", t = e.getTotalLength() || 0, p(h) !== p(c) && !k && (k = 1) && v("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), t *= (h + c) / 2, l.strokeDasharray = i;
        else if ("rect" === d) t = 2 * _ * h + 2 * m * c;
        else if ("line" === d) t = u(z, y, z + _, y + m, h, c);
        else if ("polyline" === d || "polygon" === d)
            for (r = e.getAttribute("points").match(b) || [], "polygon" === d && r.push(r[0], r[1]), t = 0, o = 2; o < r.length; o += 2) t += u(r[o - 2], r[o - 1], r[o], r[o + 1], h, c) || 0;
        else "circle" !== d && "ellipse" !== d || (a = _ / 2 * h, f = m / 2 * c, t = Math.PI * (3 * (a + f) - M((3 * a + f) * (a + 3 * f))));
        return t || 0
    }

    function G(e, t) {
        if (!(e = x(e)[0])) return [0, 0];
        t = t || F(e) + 1;
        var n = f.getComputedStyle(e),
            r = n.strokeDasharray || "",
            i = q(n.strokeDashoffset),
            o = r.indexOf(",");
        return o < 0 && (o = r.indexOf(" ")), t < (r = o < 0 ? t : q(r.substr(0, o))) && (r = t), [-i || 0, r - i || 0]
    }

    function H() {
        l() && (f = window, h = o = m(), x = o.utils.toArray, c = o.core.getStyleSaver, g = o.core.reverting || function() {}, d = -1 !== ((f.navigator || {}).userAgent || "").indexOf("Edge"))
    }
    var o, x, f, d, h, k, c, g, b = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        P = {
            rect: ["width", "height"],
            circle: ["r", "r"],
            ellipse: ["rx", "ry"],
            line: ["x2", "y2"]
        },
        M = Math.sqrt,
        a = "DrawSVGPlugin",
        y = z(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
        _ = z(103, 115, 97, 112, 46, 99, 111, 109),
        S = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,
        O = function(e) {
            var t = "undefined" != typeof window,
                n =1,
                r = [y, _, z(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), z(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), z(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), z(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112), z(99, 111, 100, 101, 112, 101, 110, 46, 119, 101, 98, 115, 105, 116, 101), z(112, 101, 110, 115, 46, 99, 108, 111, 117, 100), z(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), z(99, 100, 112, 110, 46, 105, 111), z(112, 101, 110, 115, 46, 105, 111), z(103, 97, 110, 110, 111, 110, 46, 116, 118), z(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), z(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), z(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), z(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), z(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), z(112, 108, 110, 107, 114, 46, 99, 111), z(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), z(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), z(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), z(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), z(99, 115, 98, 46, 97, 112, 112), z(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), z(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111), z(99, 111, 100, 105, 101, 114, 46, 105, 111), z(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), z(115, 116, 97, 99, 107, 111, 118, 101, 114, 102, 108, 111, 119, 46, 99, 111, 109), z(115, 116, 97, 99, 107, 101, 120, 99, 104, 97, 110, 103, 101, 46, 99, 111, 109), z(115, 116, 117, 100, 105, 111, 102, 114, 101, 105, 103, 104, 116, 46, 99, 111, 109), z(119, 101, 98, 99, 111, 110, 116, 97, 105, 110, 101, 114, 46, 105, 111), z(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)],
                i = r.length;
            for (setTimeout(function checkWarn() {
                    if (t)
                        if ("loading" === document.readyState || "interactive" === document.readyState) document.addEventListener("readystatechange", checkWarn);
                        else {
                            document.removeEventListener("readystatechange", checkWarn);
                            var e = "object" == typeof o ? o : t && window.gsap;
                            t && window.console && !window._gsapWarned && "object" == typeof e && !1 !== e.config().trialWarn && (console.log(z(37, 99, 87, 97, 114, 110, 105, 110, 103), z(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 51, 48, 112, 120, 59, 99, 111, 108, 111, 114, 58, 114, 101, 100, 59)), console.log(z(65, 32, 116, 114, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + a + z(32, 105, 115, 32, 108, 111, 97, 100, 101, 100, 32, 116, 104, 97, 116, 32, 111, 110, 108, 121, 32, 119, 111, 114, 107, 115, 32, 108, 111, 99, 97, 108, 108, 121, 32, 97, 110, 100, 32, 111, 110, 32, 100, 111, 109, 97, 105, 110, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 32, 97, 110, 100, 32, 99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111, 46, 32, 42, 42, 42, 32, 68, 79, 32, 78, 79, 84, 32, 68, 69, 80, 76, 79, 89, 32, 84, 72, 73, 83, 32, 70, 73, 76, 69, 32, 42, 42, 42, 32, 76, 111, 97, 100, 105, 110, 103, 32, 105, 116, 32, 111, 110, 32, 97, 110, 32, 117, 110, 97, 117, 116, 104, 111, 114, 105, 122, 101, 100, 32, 115, 105, 116, 101, 32, 118, 105, 111, 108, 97, 116, 101, 115, 32, 116, 104, 101, 32, 108, 105, 99, 101, 110, 115, 101, 32, 97, 110, 100, 32, 119, 105, 108, 108, 32, 99, 97, 117, 115, 101, 32, 97, 32, 114, 101, 100, 105, 114, 101, 99, 116, 46, 32, 80, 108, 101, 97, 115, 101, 32, 106, 111, 105, 110, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 116, 111, 32, 103, 101, 116, 32, 102, 117, 108, 108, 32, 97, 99, 99, 101, 115, 115, 32, 116, 111, 32, 116, 104, 101, 32, 98, 111, 110, 117, 115, 32, 112, 108, 117, 103, 105, 110, 115, 32, 116, 104, 97, 116, 32, 98, 111, 111, 115, 116, 32, 121, 111, 117, 114, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 115, 117, 112, 101, 114, 112, 111, 119, 101, 114, 115, 46, 32, 68, 105, 115, 97, 98, 108, 101, 32, 116, 104, 105, 115, 32, 119, 97, 114, 110, 105, 110, 103, 32, 119, 105, 116, 104, 32, 103, 115, 97, 112, 46, 99, 111, 110, 102, 105, 103, 40, 123, 116, 114, 105, 97, 108, 87, 97, 114, 110, 58, 32, 102, 97, 108, 115, 101, 125, 41, 59)), console.log(z(37, 99, 71, 101, 116, 32, 117, 110, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 102, 105, 108, 101, 115, 32, 97, 116, 32, 104, 116, 116, 112, 115, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98), z(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 49, 54, 112, 120, 59, 99, 111, 108, 111, 114, 58, 35, 52, 101, 57, 56, 49, 53)), window._gsapWarned = 1)
                        }
                }, 50); - 1 < --i;)
                if (-1 !== e.indexOf(r[i])) return !0;
            return n || !setTimeout(function() {
                t && (window.location.href = z(104, 116, 116, 112, 115, 58, 47, 47) + y + z(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47) + "?plugin=" + a + "&source=trial")
            }, 4e3)
        }("undefined" != typeof window ? window.location.host : ""),
        t = {
            version: "3.12.3",
            name: "drawSVG",
            register: function register(e) {
                o = e, H()
            },
            init: function init(e, t, n) {
                if (!e.getBBox) return !1;
                h || H();
                var i, o, s, a = F(e);
                return this.styles = c && c(e, "strokeDashoffset,strokeDasharray,strokeMiterlimit"), this.tween = n, this._style = e.style, this._target = e, t + "" == "true" ? t = "0 100%" : t ? -1 === (t + "").indexOf(" ") && (t = "0 " + t) : t = "0 0", o = function _parse(e, t, n) {
                    var i, o, s = e.indexOf(" ");
                    return o = s < 0 ? (i = void 0 !== n ? n + "" : e, e) : (i = e.substr(0, s), e.substr(s + 1)), i = r(i, t), (o = r(o, t)) < i ? [o, i] : [i, o]
                }(t, a, (i = G(e, a))[0]), this._length = p(a), this._dash = p(i[1] - i[0]), this._offset = p(-i[0]), this._dashPT = this.add(this, "_dash", this._dash, p(o[1] - o[0]), 0, 0, 0, 0, 0, 1), this._offsetPT = this.add(this, "_offset", this._offset, p(-o[0]), 0, 0, 0, 0, 0, 1), d && (s = f.getComputedStyle(e)).strokeLinecap !== s.strokeLinejoin && (o = q(s.strokeMiterlimit), this.add(e.style, "strokeMiterlimit", o, o + .01)), this._live = w(e) || ~(t + "").indexOf("live"), this._nowrap = ~(t + "").indexOf("nowrap"), this._props.push("drawSVG"), O
            },
            render: function render(e, t) {
                if (t.tween._time || !g()) {
                    var n, r, i, o, s = t._pt,
                        a = t._style;
                    if (s) {
                        for (t._live && (n = F(t._target)) !== t._length && (r = n / t._length, t._length = n, t._offsetPT && (t._offsetPT.s *= r, t._offsetPT.c *= r), t._dashPT ? (t._dashPT.s *= r, t._dashPT.c *= r) : t._dash *= r); s;) s.r(e, s.d), s = s._next;
                        i = t._dash || e && 1 !== e && 1e-4 || 0, n = t._length - i + .1, o = t._offset, i && o && i + Math.abs(o % t._length) > t._length - .2 && (o += o < 0 ? .1 : -.1) && (n += .1), a.strokeDashoffset = i ? o : o + .001, a.strokeDasharray = n < .2 ? "none" : i ? i + "px," + (t._nowrap ? 999999 : n) + "px" : "0px, 999999px"
                    }
                } else t.styles.revert()
            },
            getLength: F,
            getPosition: G
        };
    m() && o.registerPlugin(t), e.DrawSVGPlugin = t, e.default = t;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});