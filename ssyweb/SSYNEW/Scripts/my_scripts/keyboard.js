$.fn.keyboard = function (e) {
    function t(t) {
        if ($(".keyboard-wrapper").is(":visible")) switch (t.which) {
            case 13:
                e.allowEnterAccept && (k(), t.preventDefault());
                break;
            case 27:
                e.allowEscapeCancel && (y(), t.preventDefault())
        }
    }

    function a(e) {
         
        var t;
        "" != S.keyboardFile && S.arrayPosition == f ? r(e, S.keyboardFile) : $.get("languages/" + e + ".klc", function (a) {
            S.keyboardFile = a, S.arrayPosition = f, t = "data", r(e, a)
        })
    }

    function r(e, t) {
        var a, r, l, n, c, i = "",
            s = "",
            d = "",
            p = new Array;
        v = "", w = "", m = "", a = (t = t.replace(/\u0000/g, "")).match(/\d(\w)?\s+\w+\s+\d\s+(-1|\w+@?|%%)\s+(-1|\w+@?|%%)\s+(-1|\w+@?|%%)(\s+(-1|\w+@?|%%))?(\s+(-1|\w+@?|%%))?(\s+(-1|\w+@?|%%))?\s+\/\//g), (i = t.indexOf("SHIFTSTATE")) > 0 && ((r = t.slice(i, t.indexOf("LAYOUT")).trim().split(/\n/g)).splice(0, 2), $.each(r, function (e, t) {
            -1 == t.indexOf(":") ? v += '"default": ' : -1 != t.indexOf("Shft  Ctrl Alt") ? v += '"shift_altgrp": ' : -1 != t.indexOf("Shft  Ctrl") ? v += '"ctrl_shift": ' : -1 != t.indexOf("Ctrl Alt") ? v += '"altgrp": ' : -1 != t.indexOf("Ctrl") ? v += '"ctrl": ' : -1 != t.indexOf("Shft") && (v += '"shift": '), v += t.match(/\w{6}\s[0-9]/).toString().slice(-1) + ", "
        }), v = JSON.parse("{" + v.toString().slice(0, -2) + "}")), (s = t.indexOf("DEADKEY")) > 0 && ((l = t.slice(s, t.indexOf("KEYNAME")).trim().split("DEADKEY")).splice(0, 1), $.each(l, function (e, t) {
            (p = t.split(/\n/g)).splice(0, 2), c = "", $.each(p, function (e, t) {
                c += '"' + t.trim().slice(0, 4) + '": "' + t.trim().slice(5, 9) + '", '
            }), c = "{" + c.slice(0, -2) + "}", w += '"' + t.trim().slice(0, 4) + '": ' + c + ", "
        }), w = JSON.parse("{" + w.slice(0, -2) + "}")), (d = t.indexOf("LIGATURE")) > 0 && ((n = t.slice(d, t.indexOf("KEYNAME")).trim().split(/\n/g)).splice(0, 5), $.each(n, function (e, t) {
            t.indexOf("//") > 0 && (n[e] = t.trim().split("//")[0].trim().replace(/\t/g, " ").replace("  ", " ").replace("  ", " ").split(" "), n[e].splice(1, 1), m += '"' + n[e][0] + '": ', n[e].splice(0, 1), $.each(n[e], function (t, a) {
                n[e][t] = '"' + a + '"'
            }), m += "[" + n[e] + "], ")
        }), m = JSON.parse("{" + m.slice(0, -2) + "}")), _ = "arabic" == e ? "RTL" : "LTR", o(a)
    }

    function o(t) {
        var a = t.toString().split(","),
            r = new Array,
            o = new Array(47);
        $.each(a, function (e, t) {
            r[e] = t.toString().replace(/(\t+|\s+)/g, " "), r[e] = r[e].split(" "), void 0 !== C[r[e][0]] && (o[C[r[e][0]]] = r[e])
        }), $(".keyboard-wrapper").length ? (u(), q = !0) : ($("body").prepend('<div class="keyboard-wrapper"></div>'), e.directEnter || $("body").prepend('<div class="keyboard-blackout-background"></div>'), q = !1), n(o.slice(0, 13)), n(o.slice(13, 26)), n(o.slice(26, 37)), n(o.slice(37, 47)), d("default"), i(), s(), b(), O || (e.directEnter || $(".keyboard-blackout-background").hide(), $(".keyboard-wrapper").hide())
    }

    function l(e) {
        $(".keyboard-row:last").append('<button class="keyboard-key keyboard-key-sm"></button>'), $(".keyboard-key:last").data("keyDataObject", e)
    }

    function n(e) {
        var t;
        $(".keyboard-wrapper").append('<div class="keyboard-row"></div>'), $.each(e, function (e, a) {
            l(t = void 0 !== a ? {
                default: c(a[v.default - 1], a[1]),
                shift: c(a[v.shift - 1], a[1]),
                altgrp: c(a[v.altgrp - 1], a[1]),
                shift_altgrp: c(a[v.shift_altgrp - 1], a[1])
            } : {
                default: "-1",
                shift: "-1",
                altgrp: "-1",
                shift_altgrp: "-1"
            })
        })
    }

    function c(e, t) {
        var a = e;
        return "%%" == e ? a = m[t] : void 0 === e && (a = "-1"), a
    }

    function i() {
        $(".keyboard-action-wrapper").length || e.directEnter || $(".keyboard-wrapper").prepend('<div class="keyboard-action-wrapper"><button class="keyboard-action-button keyboard-cancel-button">Cancel</button><input type="text" class="keyboard-input-field"><button class="keyboard-action-button keyboard-accept-button">Accept</button></div>'), $(".keyboard-row:eq(0)").append('<button class="keyboard-key keyboard-key-lg" data-keyval="backspace">Backspace</button>'), $(".keyboard-row:eq(1)").prepend('<button class="keyboard-key keyboard-key-lg" data-keyval="tab">Tab</button>'), $(".keyboard-row:eq(2)").prepend('<button class="keyboard-key keyboard-key-lg caps-lock-key" data-keyval="caps lock">Caps Lock</button>'), $(".keyboard-row:eq(2)").append('<button class="keyboard-key keyboard-key-lg" data-keyval="enter">Enter</button>'), $(".keyboard-row:eq(3)").prepend('<button class="keyboard-key keyboard-key-lg" data-keyval="shift">Shift</button>'), $(".keyboard-row:eq(3)").append('<button class="keyboard-key keyboard-key-lg" data-keyval="shift">Shift</button>'), $(".keyboard-wrapper").append('<div class="keyboard-row"></div>'), $(".keyboard-row:eq(4)").append('<button class="keyboard-key keyboard-key-lg" data-keyval="ctrl">Ctrl</button>'), $(".keyboard-row:eq(4)").append('<button class="keyboard-key keyboard-key-lg" data-keyval="language">Language</button>'), $(".keyboard-row:eq(4)").append('<button class="keyboard-key keyboard-key-lg" data-keyval="alt">Alt</button>'), $(".keyboard-row:eq(4)").append('<button class="keyboard-key keyboard-key-xl" data-keyval="space">&nbsp;</button>'), $(".keyboard-row:eq(4)").append('<button class="keyboard-key keyboard-key-lg" data-keyval="alt grp">Alt Grp</button>'), $(".keyboard-row:eq(4)").append('<button class="keyboard-key keyboard-key-lg" data-keyval="spare">&nbsp;</button>'), $(".keyboard-row:eq(4)").append('<button class="keyboard-key keyboard-key-lg" data-keyval="ctrl">Ctrl</button>')
    }

    function s() {
        var e, t, a, r, o = $(".keyboard-row").width(),
            l = 2 * $(".keyboard-key").css("margin-right").match(/[0-9]/),
            n = (o - 15 * l) / 15,
            c = o / 3;
        $(".keyboard-row").each(function () {
            e = $(this).children(".keyboard-key-sm").length, t = $(this).children(".keyboard-key-lg").length, a = $(this).children(".keyboard-key-xl").length, r = (o - (e + t + a) * l - e * n - a * c) / t, $(this).children(".keyboard-key-sm").width(n), $(this).children(".keyboard-key-lg").width(r), $(this).children(".keyboard-key-xl").width(c)
        })
    }

    function d(e) {
        var t, a, r = "";
        !K.caps || K.shift || K.altgrp ? K.caps || K.shift || K.altgrp || (e = "default") : (e = "default", $(".caps-lock-key").addClass("caps-lock-key-active")), K.caps || $(".caps-lock-key").removeClass("caps-lock-key-active"), "" != K.shift_altgrp && "shift_altgrp" != e && (K.shift_altgrp = ""), $(".keyboard-key").each(function () {
            r = "";
            try {
                t = $(this), 4 == (a = t.data("keyDataObject"))[e].length ? (t.html("&#x" + a[e] + ";"), t.data("keyval", t.html())) : 5 == a[e].length && a[e].match("@") ? (t.html("&#x" + a[e].replace("@", "") + ";"), t.data("keyval", t.html())) : a[e].constructor === Array ? ($.each(a[e], function (e, t) {
                    r += "&#x" + t + ";"
                }), t.html(r), t.data("keyval", t.html())) : "-1" == a[e] || "%%" == a[e] || 0 == a[e].length ? (t.html("&nbsp;"), t.data("keyval", "")) : (t.html(a[e]), t.data("keyval", t.html())), K.shift || !K.caps || K.altgrp || (t.html(1 == t.html().length ? t.html().toUpperCase() : t.html()), t.data("keyval", 1 == t.html().length ? t.html() : t.data("keyval")))
            } catch (e) { }
        })
    }

    function p(t) {
        var r = ("0000" + t.charCodeAt(0).toString(16)).slice(-4),
            o = x[0].selectionStart;
        if ((t = t.replace("&lt;", "<").replace("&gt;", ">").replace(/\bspace/, " ")).length > 2) switch (A = "", t) {
            case "shift":
                K.shift = !K.shift, K.caps = !1, K.altgrp = !1, "altgrp" == K.shift_altgrp ? (d("shift_altgrp"), K.shift_altgrp = "") : "shift" == K.shift_altgrp ? (d("shift"), K.shift_altgrp = "") : (d("shift"), K.shift_altgrp = "shift");
                break;
            case "caps lock":
                K.shift = !1, K.caps = !K.caps, K.altgrp = !1, d("caps");
                break;
            case "alt grp":
                K.shift = !1, K.caps = !1, K.altgrp = !K.altgrp, "shift" == K.shift_altgrp ? (d("shift_altgrp"), K.shift_altgrp = "") : "altgrp" == K.shift_altgrp ? (d("altgrp"), K.shift_altgrp = "") : (d("altgrp"), K.shift_altgrp = "altgrp");
                break;
            case "backspace":
                x.val(x.val().slice(0, o - 1) + x.val().slice(o)), o -= 1, x.focus(), x[0].selectionStart = o, x[0].selectionEnd = o;
                break;
            case "space":
                break;
            case "enter":
                e.enterKey && "function" == typeof e.enterKey && e.enterKey();
                break;
            case "tab":
                e.tabKey && "function" == typeof e.tabKey && e.tabKey();
                break;
            case "ctrl":
                e.ctrlKey && "function" == typeof e.ctrlKey && e.ctrlKey();
                break;
            case "alt":
                e.altKey && "function" == typeof e.altKey && e.altKey();
                break;
            case "language":
                f + 1 <= e.language.length - 1 ? f++ : f = 0, g(), a(e.language[f]), e.languageKey && "function" == typeof e.languageKey && e.languageKey();
                break;
            case "spare":
                e.spareKey && "function" == typeof e.spareKey && optionsspareKey()
        } else {
            if (K.shift = !1, K.altgrp = !1, d("default"), (A = w[r]) || F) {
                if (t = "", void 0 === A && F) {
                    var l = String.fromCharCode("0x" + F[r]);
                    l && void 0 !== F[r] && (t = l)
                }
                F = A
            }
            x.attr("dir", _);
            var n, c = x.val();
            x.val(x.val().slice(0, o) + t + x.val().slice(o)), n = x.val(), ("-1" != D.maxlength && "" != D.maxlength && n.length > D.maxlength || "number" == R && "" != D.max && "-1" != D.max && 1 * n > 1 * D.max || "number" == R && "" != D.min && "-1" != D.min && 1 * n < 1 * D.min || t.search(e.keyCharacterRegex[R]) < 0 || n.search(e.inputFieldRegex[R]) < 0) && (x.val(c), o--), o += t.length, x.focus(), x[0].selectionStart = o, x[0].selectionEnd = o
        }
    }

    function y() {
        x.val(""), g(), O = !1, a(e.language[f])
    }

    function k() {
        h.is("input") ? h.val(x.val()) : h.html(x.val()), x.val(""), g(), O = !1, a(e.language[f])
    }

    function b() {
        var t = $(window).width(),
            a = $(window).height(),
            r = $(".keyboard-wrapper").height(),
            o = $(".keyboard-wrapper").width();
        switch ($(".keyboard-key").css("background-color", e.keyColor), $(".keyboard-key").css("color", e.keyTextColor), e.directEnter || ($(".keyboard-cancel-button").css("background-color", e.cancelColor), $(".keyboard-cancel-button").css("color", e.cancelTextColor), $(".keyboard-accept-button").css("background-color", e.acceptColor), $(".keyboard-accept-button").css("color", e.acceptTextColor), $(".keyboard-blackout-background").css("background-color", "rgba(" + e.blackoutColor + ")")), e.keyboardPosition) {
            case "top":
                $(".keyboard-wrapper").css("top", "20px");
                break;
            case "middle":
                $(".keyboard-wrapper").css("top", ((a - r) / 2).toString() + "px");
                break;
            default:
                $(".keyboard-wrapper").css("bottom", "20px")
        }
        $(".keyboard-wrapper").css("left", ((t - o) / 2).toString() + "px")
    }

    function u() {
        g(), $(".keyboard-row").remove()
    }

    function g() {
        for (var e in K) K.hasOwnProperty(e) && (K[e] = !1)
    }
    var h, f, v, w, m, x, C = {
        29: 0,
        "02": 1,
        "03": 2,
        "04": 3,
        "05": 4,
        "06": 5,
        "07": 6,
        "08": 7,
        "09": 8,
        "0a": 9,
        "0b": 10,
        "0c": 11,
        "0d": 12,
        10: 13,
        11: 14,
        12: 15,
        13: 16,
        14: 17,
        15: 18,
        16: 19,
        17: 20,
        18: 21,
        19: 22,
        "1a": 23,
        "1b": 24,
        "2b": 25,
        "1e": 26,
        "1f": 27,
        20: 28,
        21: 29,
        22: 30,
        23: 31,
        24: 32,
        25: 33,
        26: 34,
        27: 35,
        28: 36,
        "2c": 37,
        "2d": 38,
        "2e": 39,
        "2f": 40,
        30: 41,
        31: 42,
        32: 43,
        33: 44,
        34: 45,
        35: 46
    },
        K = {
            shift: !1,
            caps: !1,
            altgrp: !1,
            shift_altgrp: ""
        },
        E = $(this),
        T = !1,
        S = {
            keyboardFile: "",
            arrayPosition: ""
        },
        A = "",
        F = !1,
        _ = "LTR",
        O = !1,
        q = !1,
        R = "text",
        L = "text",
        D = {
            disabled: "",
            readonly: "",
            maxlength: "",
            min: "",
            max: "",
            placeholder: ""
        };
    (e = {
        language: void 0 === e.language ? "us" : e.language,
        keyColor: void 0 === e.keyColor ? "#E0E0E0" : e.keyColor,
        keyTextColor: void 0 === e.keyTextColor ? "#555555" : e.keyTextColor,
        capsLightColor: void 0 === e.capsLightColor ? "#3498DB" : e.capsLightColor,
        enterKey: void 0 === e.enterKey ? "" : e.enterKey,
        tabKey: void 0 === e.tabKey ? "" : e.tabKey,
        ctrlKey: void 0 === e.ctrlKey ? "" : e.ctrlKey,
        altKey: void 0 === e.altKey ? "" : e.altKey,
        spareKey: void 0 === e.spareKey ? "" : e.spareKey,
        languageKey: void 0 === e.languageKey ? "" : e.languageKey,
        keyboardPosition: void 0 === e.keyboardPosition ? "bottom" : e.keyboardPosition,
        inputType: function (e) {
            var t = new Array,
                a = "";
            return void 0 !== e && "" != e ? (t = e.trim().split(","), $.each(t, function (e, t) {
                "contenteditable" == t.trim().toString() ? a += '[contenteditable="true"], ' : "textarea" == t.trim().toString() ? a += "textarea, " : a += 'input[type="' + t.trim().toString() + '"], '
            }), a = a.slice(0, -2)) : a = 'input[type="text"], input[type="number"], input[type="password"], input[type="search"], input[type="tel"], input[type="url"], textarea, [contenteditable="true"]', a
        }(e.inputType),
        cancelColor: void 0 === e.cancelColor ? "#E74C3C" : e.cancelColor,
        cancelTextColor: void 0 === e.cancelTextColor ? "#FFFFFF" : e.cancelTextColor,
        acceptColor: void 0 === e.acceptColor ? "#2ECC71" : e.acceptColor,
        acceptTextColor: void 0 === e.acceptTextColor ? "#FFFFFF" : e.acceptTextColor,
        blackoutColor: void 0 === e.blackoutColor ? "25, 25, 25, 0.9" : e.blackoutColor,
        allowEscapeCancel: void 0 === e.allowEscapeCancel || e.allowEscapeCancel,
        allowEnterAccept: void 0 === e.allowEnterAccept || e.allowEnterAccept,
        directEnter: void 0 !== e.directEnter && e.directEnter,
        keyCharacterRegex: void 0 === e.keyCharacterRegex ? {
            number: /[0-9]|[eE]|\.|\+|\-/,
            tel: /[0-9]|\.|\+|\-|\#|\(|\)/
        } : e.keyCharacterRegex,
        inputFieldRegex: void 0 === e.inputFieldRegex ? {
            number: /^(-)?(((\d+)|(\d+\.(\d+)?)|(\.(\d+)?))([eE]([-+])?(\d+)?)?)?$/
        } : e.inputFieldRegex
    }).language = e.language.split(","), $.each(e.language, function (t, a) {
        e.language[t] = a.trim()
    }), f = 0, a(e.language[f]), E.on("click touch", e.inputType, function () {
        if ("keyboard-input-field" != $(this).prop("class")) {
            var t = $(this);
            $.each(D, function (e, a) {
                D[e] = void 0 === t.prop(e) ? "" : t.prop(e)
            }), D.disabled || D.readonly || (h = $(this), x = h, e.directEnter || (x = $(".keyboard-input-field"), h.is("input") ? (R = h.prop("type"), L = "password" == R ? "password" : "text", x.prop("placeholder", D.placeholder), x.val(h.val()), x.prop("type", L)) : (R = "text", x.val(h.html()), x.prop("type", "text")), $(".keyboard-blackout-background").show()), $(".keyboard-wrapper").show(), O = !0, x.focus())
        }
    }), $(document).on("click touch", ".keyboard-key", function () {
        p($(this).data("keyval"))
    }), $(document).on("click touch", ".keyboard-cancel-button", function () {
        y()
    }), $(document).on("click touch", ".keyboard-accept-button", function () {
        k()
    }), $(document).on("click touch", "*", function (t) {
        if (t.stopPropagation(), O && e.directEnter) {
            var r = $(this);
            if (e.inputType.search(r.attr("type")) < 1 && e.inputType.search(r.prop("tagName").toLowerCase()) < 1 && "true" != r.prop("contenteditable")) {
                for (; r.parent().length && !r.hasClass("keyboard-wrapper") ;) r = r.parent();
                r.hasClass("keyboard-wrapper") || (g(), O = !1, a(e.language[f]))
            }
        }
    }), $(document).on("keydown", function (e) {
        keyCodeStored = e.which, t(e)
    }), $(window).resize(function () {
        if (!T) {
            T = !0;
            setTimeout(function () {
                a(e.language[f]), T = !1
            }, 500)
        }
    })
};