(() => {
    var t = {
        669: (t, e, s) => {
            t.exports = s(609)
        }, 448: (t, e, s) => {
            "use strict";
            var a = s(867), i = s(26), n = s(372), r = s(327), o = s(97), c = s(109), u = s(985), h = s(874),
                g = s(648), l = s(644), d = s(205);
            t.exports = function (t) {
                return new Promise((function (e, s) {
                    var p, b = t.data, A = t.headers, O = t.responseType;

                    function f() {
                        t.cancelToken && t.cancelToken.unsubscribe(p), t.signal && t.signal.removeEventListener("abort", p)
                    }

                    a.isFormData(b) && a.isStandardBrowserEnv() && delete A["Content-Type"];
                    var y = new XMLHttpRequest;
                    if (t.auth) {
                        var m = t.auth.username || "",
                            P = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
                        A.Authorization = "Basic " + btoa(m + ":" + P)
                    }
                    var j = o(t.baseURL, t.url);

                    function S() {
                        if (y) {
                            var a = "getAllResponseHeaders" in y ? c(y.getAllResponseHeaders()) : null, n = {
                                data: O && "text" !== O && "json" !== O ? y.response : y.responseText,
                                status: y.status,
                                statusText: y.statusText,
                                headers: a,
                                config: t,
                                request: y
                            };
                            i((function (t) {
                                e(t), f()
                            }), (function (t) {
                                s(t), f()
                            }), n), y = null
                        }
                    }

                    if (y.open(t.method.toUpperCase(), r(j, t.params, t.paramsSerializer), !0), y.timeout = t.timeout, "onloadend" in y ? y.onloadend = S : y.onreadystatechange = function () {
                        y && 4 === y.readyState && (0 !== y.status || y.responseURL && 0 === y.responseURL.indexOf("file:")) && setTimeout(S)
                    }, y.onabort = function () {
                        y && (s(new g("Request aborted", g.ECONNABORTED, t, y)), y = null)
                    }, y.onerror = function () {
                        s(new g("Network Error", g.ERR_NETWORK, t, y, y)), y = null
                    }, y.ontimeout = function () {
                        var e = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded",
                            a = t.transitional || h;
                        t.timeoutErrorMessage && (e = t.timeoutErrorMessage), s(new g(e, a.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED, t, y)), y = null
                    }, a.isStandardBrowserEnv()) {
                        var T = (t.withCredentials || u(j)) && t.xsrfCookieName ? n.read(t.xsrfCookieName) : void 0;
                        T && (A[t.xsrfHeaderName] = T)
                    }
                    "setRequestHeader" in y && a.forEach(A, (function (t, e) {
                        void 0 === b && "content-type" === e.toLowerCase() ? delete A[e] : y.setRequestHeader(e, t)
                    })), a.isUndefined(t.withCredentials) || (y.withCredentials = !!t.withCredentials), O && "json" !== O && (y.responseType = t.responseType), "function" == typeof t.onDownloadProgress && y.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && y.upload && y.upload.addEventListener("progress", t.onUploadProgress), (t.cancelToken || t.signal) && (p = function (t) {
                        y && (s(!t || t && t.type ? new l : t), y.abort(), y = null)
                    }, t.cancelToken && t.cancelToken.subscribe(p), t.signal && (t.signal.aborted ? p() : t.signal.addEventListener("abort", p))), b || (b = null);
                    var _ = d(j);
                    _ && -1 === ["http", "https", "file"].indexOf(_) ? s(new g("Unsupported protocol " + _ + ":", g.ERR_BAD_REQUEST, t)) : y.send(b)
                }))
            }
        }, 609: (t, e, s) => {
            "use strict";
            var a = s(867), i = s(849), n = s(321), r = s(185), o = function t(e) {
                var s = new n(e), o = i(n.prototype.request, s);
                return a.extend(o, n.prototype, s), a.extend(o, s), o.create = function (s) {
                    return t(r(e, s))
                }, o
            }(s(546));
            o.Axios = n, o.CanceledError = s(644), o.CancelToken = s(972), o.isCancel = s(502), o.VERSION = s(288).version, o.toFormData = s(675), o.AxiosError = s(648), o.Cancel = o.CanceledError, o.all = function (t) {
                return Promise.all(t)
            }, o.spread = s(713), o.isAxiosError = s(268), t.exports = o, t.exports.default = o
        }, 972: (t, e, s) => {
            "use strict";
            var a = s(644);

            function i(t) {
                if ("function" != typeof t) throw new TypeError("executor must be a function.");
                var e;
                this.promise = new Promise((function (t) {
                    e = t
                }));
                var s = this;
                this.promise.then((function (t) {
                    if (s._listeners) {
                        var e, a = s._listeners.length;
                        for (e = 0; e < a; e++) s._listeners[e](t);
                        s._listeners = null
                    }
                })), this.promise.then = function (t) {
                    var e, a = new Promise((function (t) {
                        s.subscribe(t), e = t
                    })).then(t);
                    return a.cancel = function () {
                        s.unsubscribe(e)
                    }, a
                }, t((function (t) {
                    s.reason || (s.reason = new a(t), e(s.reason))
                }))
            }

            i.prototype.throwIfRequested = function () {
                if (this.reason) throw this.reason
            }, i.prototype.subscribe = function (t) {
                this.reason ? t(this.reason) : this._listeners ? this._listeners.push(t) : this._listeners = [t]
            }, i.prototype.unsubscribe = function (t) {
                if (this._listeners) {
                    var e = this._listeners.indexOf(t);
                    -1 !== e && this._listeners.splice(e, 1)
                }
            }, i.source = function () {
                var t;
                return {
                    token: new i((function (e) {
                        t = e
                    })), cancel: t
                }
            }, t.exports = i
        }, 644: (t, e, s) => {
            "use strict";
            var a = s(648);

            function i(t) {
                a.call(this, null == t ? "canceled" : t, a.ERR_CANCELED), this.name = "CanceledError"
            }

            s(867).inherits(i, a, {__CANCEL__: !0}), t.exports = i
        }, 502: t => {
            "use strict";
            t.exports = function (t) {
                return !(!t || !t.__CANCEL__)
            }
        }, 321: (t, e, s) => {
            "use strict";
            var a = s(867), i = s(327), n = s(782), r = s(572), o = s(185), c = s(97), u = s(875), h = u.validators;

            function g(t) {
                this.defaults = t, this.interceptors = {request: new n, response: new n}
            }

            g.prototype.request = function (t, e) {
                "string" == typeof t ? (e = e || {}).url = t : e = t || {}, (e = o(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
                var s = e.transitional;
                void 0 !== s && u.assertOptions(s, {
                    silentJSONParsing: h.transitional(h.boolean),
                    forcedJSONParsing: h.transitional(h.boolean),
                    clarifyTimeoutError: h.transitional(h.boolean)
                }, !1);
                var a = [], i = !0;
                this.interceptors.request.forEach((function (t) {
                    "function" == typeof t.runWhen && !1 === t.runWhen(e) || (i = i && t.synchronous, a.unshift(t.fulfilled, t.rejected))
                }));
                var n, c = [];
                if (this.interceptors.response.forEach((function (t) {
                    c.push(t.fulfilled, t.rejected)
                })), !i) {
                    var g = [r, void 0];
                    for (Array.prototype.unshift.apply(g, a), g = g.concat(c), n = Promise.resolve(e); g.length;) n = n.then(g.shift(), g.shift());
                    return n
                }
                for (var l = e; a.length;) {
                    var d = a.shift(), p = a.shift();
                    try {
                        l = d(l)
                    } catch (t) {
                        p(t);
                        break
                    }
                }
                try {
                    n = r(l)
                } catch (t) {
                    return Promise.reject(t)
                }
                for (; c.length;) n = n.then(c.shift(), c.shift());
                return n
            }, g.prototype.getUri = function (t) {
                t = o(this.defaults, t);
                var e = c(t.baseURL, t.url);
                return i(e, t.params, t.paramsSerializer)
            }, a.forEach(["delete", "get", "head", "options"], (function (t) {
                g.prototype[t] = function (e, s) {
                    return this.request(o(s || {}, {method: t, url: e, data: (s || {}).data}))
                }
            })), a.forEach(["post", "put", "patch"], (function (t) {
                function e(e) {
                    return function (s, a, i) {
                        return this.request(o(i || {}, {
                            method: t,
                            headers: e ? {"Content-Type": "multipart/form-data"} : {},
                            url: s,
                            data: a
                        }))
                    }
                }

                g.prototype[t] = e(), g.prototype[t + "Form"] = e(!0)
            })), t.exports = g
        }, 648: (t, e, s) => {
            "use strict";
            var a = s(867);

            function i(t, e, s, a, i) {
                Error.call(this), this.message = t, this.name = "AxiosError", e && (this.code = e), s && (this.config = s), a && (this.request = a), i && (this.response = i)
            }

            a.inherits(i, Error, {
                toJSON: function () {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: this.config,
                        code: this.code,
                        status: this.response && this.response.status ? this.response.status : null
                    }
                }
            });
            var n = i.prototype, r = {};
            ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED"].forEach((function (t) {
                r[t] = {value: t}
            })), Object.defineProperties(i, r), Object.defineProperty(n, "isAxiosError", {value: !0}), i.from = function (t, e, s, r, o, c) {
                var u = Object.create(n);
                return a.toFlatObject(t, u, (function (t) {
                    return t !== Error.prototype
                })), i.call(u, t.message, e, s, r, o), u.name = t.name, c && Object.assign(u, c), u
            }, t.exports = i
        }, 782: (t, e, s) => {
            "use strict";
            var a = s(867);

            function i() {
                this.handlers = []
            }

            i.prototype.use = function (t, e, s) {
                return this.handlers.push({
                    fulfilled: t,
                    rejected: e,
                    synchronous: !!s && s.synchronous,
                    runWhen: s ? s.runWhen : null
                }), this.handlers.length - 1
            }, i.prototype.eject = function (t) {
                this.handlers[t] && (this.handlers[t] = null)
            }, i.prototype.forEach = function (t) {
                a.forEach(this.handlers, (function (e) {
                    null !== e && t(e)
                }))
            }, t.exports = i
        }, 97: (t, e, s) => {
            "use strict";
            var a = s(793), i = s(303);
            t.exports = function (t, e) {
                return t && !a(e) ? i(t, e) : e
            }
        }, 572: (t, e, s) => {
            "use strict";
            var a = s(867), i = s(527), n = s(502), r = s(546), o = s(644);

            function c(t) {
                if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted) throw new o
            }

            t.exports = function (t) {
                return c(t), t.headers = t.headers || {}, t.data = i.call(t, t.data, t.headers, t.transformRequest), t.headers = a.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers), a.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function (e) {
                    delete t.headers[e]
                })), (t.adapter || r.adapter)(t).then((function (e) {
                    return c(t), e.data = i.call(t, e.data, e.headers, t.transformResponse), e
                }), (function (e) {
                    return n(e) || (c(t), e && e.response && (e.response.data = i.call(t, e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e)
                }))
            }
        }, 185: (t, e, s) => {
            "use strict";
            var a = s(867);
            t.exports = function (t, e) {
                e = e || {};
                var s = {};

                function i(t, e) {
                    return a.isPlainObject(t) && a.isPlainObject(e) ? a.merge(t, e) : a.isPlainObject(e) ? a.merge({}, e) : a.isArray(e) ? e.slice() : e
                }

                function n(s) {
                    return a.isUndefined(e[s]) ? a.isUndefined(t[s]) ? void 0 : i(void 0, t[s]) : i(t[s], e[s])
                }

                function r(t) {
                    if (!a.isUndefined(e[t])) return i(void 0, e[t])
                }

                function o(s) {
                    return a.isUndefined(e[s]) ? a.isUndefined(t[s]) ? void 0 : i(void 0, t[s]) : i(void 0, e[s])
                }

                function c(s) {
                    return s in e ? i(t[s], e[s]) : s in t ? i(void 0, t[s]) : void 0
                }

                var u = {
                    url: r,
                    method: r,
                    data: r,
                    baseURL: o,
                    transformRequest: o,
                    transformResponse: o,
                    paramsSerializer: o,
                    timeout: o,
                    timeoutMessage: o,
                    withCredentials: o,
                    adapter: o,
                    responseType: o,
                    xsrfCookieName: o,
                    xsrfHeaderName: o,
                    onUploadProgress: o,
                    onDownloadProgress: o,
                    decompress: o,
                    maxContentLength: o,
                    maxBodyLength: o,
                    beforeRedirect: o,
                    transport: o,
                    httpAgent: o,
                    httpsAgent: o,
                    cancelToken: o,
                    socketPath: o,
                    responseEncoding: o,
                    validateStatus: c
                };
                return a.forEach(Object.keys(t).concat(Object.keys(e)), (function (t) {
                    var e = u[t] || n, i = e(t);
                    a.isUndefined(i) && e !== c || (s[t] = i)
                })), s
            }
        }, 26: (t, e, s) => {
            "use strict";
            var a = s(648);
            t.exports = function (t, e, s) {
                var i = s.config.validateStatus;
                s.status && i && !i(s.status) ? e(new a("Request failed with status code " + s.status, [a.ERR_BAD_REQUEST, a.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4], s.config, s.request, s)) : t(s)
            }
        }, 527: (t, e, s) => {
            "use strict";
            var a = s(867), i = s(546);
            t.exports = function (t, e, s) {
                var n = this || i;
                return a.forEach(s, (function (s) {
                    t = s.call(n, t, e)
                })), t
            }
        }, 546: (t, e, s) => {
            "use strict";
            var a = s(867), i = s(16), n = s(648), r = s(874), o = s(675),
                c = {"Content-Type": "application/x-www-form-urlencoded"};

            function u(t, e) {
                !a.isUndefined(t) && a.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
            }

            var h, g = {
                transitional: r,
                adapter: (("undefined" != typeof XMLHttpRequest || "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process)) && (h = s(448)), h),
                transformRequest: [function (t, e) {
                    if (i(e, "Accept"), i(e, "Content-Type"), a.isFormData(t) || a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t)) return t;
                    if (a.isArrayBufferView(t)) return t.buffer;
                    if (a.isURLSearchParams(t)) return u(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString();
                    var s, n = a.isObject(t), r = e && e["Content-Type"];
                    if ((s = a.isFileList(t)) || n && "multipart/form-data" === r) {
                        var c = this.env && this.env.FormData;
                        return o(s ? {"files[]": t} : t, c && new c)
                    }
                    return n || "application/json" === r ? (u(e, "application/json"), function (t, e, s) {
                        if (a.isString(t)) try {
                            return (0, JSON.parse)(t), a.trim(t)
                        } catch (t) {
                            if ("SyntaxError" !== t.name) throw t
                        }
                        return (0, JSON.stringify)(t)
                    }(t)) : t
                }],
                transformResponse: [function (t) {
                    var e = this.transitional || g.transitional, s = e && e.silentJSONParsing,
                        i = e && e.forcedJSONParsing, r = !s && "json" === this.responseType;
                    if (r || i && a.isString(t) && t.length) try {
                        return JSON.parse(t)
                    } catch (t) {
                        if (r) {
                            if ("SyntaxError" === t.name) throw n.from(t, n.ERR_BAD_RESPONSE, this, null, this.response);
                            throw t
                        }
                    }
                    return t
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                env: {FormData: s(623)},
                validateStatus: function (t) {
                    return t >= 200 && t < 300
                },
                headers: {common: {Accept: "application/json, text/plain, */*"}}
            };
            a.forEach(["delete", "get", "head"], (function (t) {
                g.headers[t] = {}
            })), a.forEach(["post", "put", "patch"], (function (t) {
                g.headers[t] = a.merge(c)
            })), t.exports = g
        }, 874: t => {
            "use strict";
            t.exports = {silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1}
        }, 288: t => {
            t.exports = {version: "0.27.2"}
        }, 849: t => {
            "use strict";
            t.exports = function (t, e) {
                return function () {
                    for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
                    return t.apply(e, s)
                }
            }
        }, 327: (t, e, s) => {
            "use strict";
            var a = s(867);

            function i(t) {
                return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }

            t.exports = function (t, e, s) {
                if (!e) return t;
                var n;
                if (s) n = s(e); else if (a.isURLSearchParams(e)) n = e.toString(); else {
                    var r = [];
                    a.forEach(e, (function (t, e) {
                        null != t && (a.isArray(t) ? e += "[]" : t = [t], a.forEach(t, (function (t) {
                            a.isDate(t) ? t = t.toISOString() : a.isObject(t) && (t = JSON.stringify(t)), r.push(i(e) + "=" + i(t))
                        })))
                    })), n = r.join("&")
                }
                if (n) {
                    var o = t.indexOf("#");
                    -1 !== o && (t = t.slice(0, o)), t += (-1 === t.indexOf("?") ? "?" : "&") + n
                }
                return t
            }
        }, 303: t => {
            "use strict";
            t.exports = function (t, e) {
                return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
            }
        }, 372: (t, e, s) => {
            "use strict";
            var a = s(867);
            t.exports = a.isStandardBrowserEnv() ? {
                write: function (t, e, s, i, n, r) {
                    var o = [];
                    o.push(t + "=" + encodeURIComponent(e)), a.isNumber(s) && o.push("expires=" + new Date(s).toGMTString()), a.isString(i) && o.push("path=" + i), a.isString(n) && o.push("domain=" + n), !0 === r && o.push("secure"), document.cookie = o.join("; ")
                }, read: function (t) {
                    var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                    return e ? decodeURIComponent(e[3]) : null
                }, remove: function (t) {
                    this.write(t, "", Date.now() - 864e5)
                }
            } : {
                write: function () {
                }, read: function () {
                    return null
                }, remove: function () {
                }
            }
        }, 793: t => {
            "use strict";
            t.exports = function (t) {
                return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
            }
        }, 268: (t, e, s) => {
            "use strict";
            var a = s(867);
            t.exports = function (t) {
                return a.isObject(t) && !0 === t.isAxiosError
            }
        }, 985: (t, e, s) => {
            "use strict";
            var a = s(867);
            t.exports = a.isStandardBrowserEnv() ? function () {
                var t, e = /(msie|trident)/i.test(navigator.userAgent), s = document.createElement("a");

                function i(t) {
                    var a = t;
                    return e && (s.setAttribute("href", a), a = s.href), s.setAttribute("href", a), {
                        href: s.href,
                        protocol: s.protocol ? s.protocol.replace(/:$/, "") : "",
                        host: s.host,
                        search: s.search ? s.search.replace(/^\?/, "") : "",
                        hash: s.hash ? s.hash.replace(/^#/, "") : "",
                        hostname: s.hostname,
                        port: s.port,
                        pathname: "/" === s.pathname.charAt(0) ? s.pathname : "/" + s.pathname
                    }
                }

                return t = i(window.location.href), function (e) {
                    var s = a.isString(e) ? i(e) : e;
                    return s.protocol === t.protocol && s.host === t.host
                }
            }() : function () {
                return !0
            }
        }, 16: (t, e, s) => {
            "use strict";
            var a = s(867);
            t.exports = function (t, e) {
                a.forEach(t, (function (s, a) {
                    a !== e && a.toUpperCase() === e.toUpperCase() && (t[e] = s, delete t[a])
                }))
            }
        }, 623: t => {
            t.exports = null
        }, 109: (t, e, s) => {
            "use strict";
            var a = s(867),
                i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            t.exports = function (t) {
                var e, s, n, r = {};
                return t ? (a.forEach(t.split("\n"), (function (t) {
                    if (n = t.indexOf(":"), e = a.trim(t.substr(0, n)).toLowerCase(), s = a.trim(t.substr(n + 1)), e) {
                        if (r[e] && i.indexOf(e) >= 0) return;
                        r[e] = "set-cookie" === e ? (r[e] ? r[e] : []).concat([s]) : r[e] ? r[e] + ", " + s : s
                    }
                })), r) : r
            }
        }, 205: t => {
            "use strict";
            t.exports = function (t) {
                var e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
                return e && e[1] || ""
            }
        }, 713: t => {
            "use strict";
            t.exports = function (t) {
                return function (e) {
                    return t.apply(null, e)
                }
            }
        }, 675: (t, e, s) => {
            "use strict";
            var a = s(867);
            t.exports = function (t, e) {
                e = e || new FormData;
                var s = [];

                function i(t) {
                    return null === t ? "" : a.isDate(t) ? t.toISOString() : a.isArrayBuffer(t) || a.isTypedArray(t) ? "function" == typeof Blob ? new Blob([t]) : Buffer.from(t) : t
                }

                return function t(n, r) {
                    if (a.isPlainObject(n) || a.isArray(n)) {
                        if (-1 !== s.indexOf(n)) throw Error("Circular reference detected in " + r);
                        s.push(n), a.forEach(n, (function (s, n) {
                            if (!a.isUndefined(s)) {
                                var o, c = r ? r + "." + n : n;
                                if (s && !r && "object" == typeof s) if (a.endsWith(n, "{}")) s = JSON.stringify(s); else if (a.endsWith(n, "[]") && (o = a.toArray(s))) return void o.forEach((function (t) {
                                    !a.isUndefined(t) && e.append(c, i(t))
                                }));
                                t(s, c)
                            }
                        })), s.pop()
                    } else e.append(r, i(n))
                }(t), e
            }
        }, 875: (t, e, s) => {
            "use strict";
            var a = s(288).version, i = s(648), n = {};
            ["object", "boolean", "number", "function", "string", "symbol"].forEach((function (t, e) {
                n[t] = function (s) {
                    return typeof s === t || "a" + (e < 1 ? "n " : " ") + t
                }
            }));
            var r = {};
            n.transitional = function (t, e, s) {
                function n(t, e) {
                    return "[Axios v" + a + "] Transitional option '" + t + "'" + e + (s ? ". " + s : "")
                }

                return function (s, a, o) {
                    if (!1 === t) throw new i(n(a, " has been removed" + (e ? " in " + e : "")), i.ERR_DEPRECATED);
                    return e && !r[a] && (r[a] = !0, console.warn(n(a, " has been deprecated since v" + e + " and will be removed in the near future"))), !t || t(s, a, o)
                }
            }, t.exports = {
                assertOptions: function (t, e, s) {
                    if ("object" != typeof t) throw new i("options must be an object", i.ERR_BAD_OPTION_VALUE);
                    for (var a = Object.keys(t), n = a.length; n-- > 0;) {
                        var r = a[n], o = e[r];
                        if (o) {
                            var c = t[r], u = void 0 === c || o(c, r, t);
                            if (!0 !== u) throw new i("option " + r + " must be " + u, i.ERR_BAD_OPTION_VALUE)
                        } else if (!0 !== s) throw new i("Unknown option " + r, i.ERR_BAD_OPTION)
                    }
                }, validators: n
            }
        }, 867: (t, e, s) => {
            "use strict";
            var a, i = s(849), n = Object.prototype.toString, r = (a = Object.create(null), function (t) {
                var e = n.call(t);
                return a[e] || (a[e] = e.slice(8, -1).toLowerCase())
            });

            function o(t) {
                return t = t.toLowerCase(), function (e) {
                    return r(e) === t
                }
            }

            function c(t) {
                return Array.isArray(t)
            }

            function u(t) {
                return void 0 === t
            }

            var h = o("ArrayBuffer");

            function g(t) {
                return null !== t && "object" == typeof t
            }

            function l(t) {
                if ("object" !== r(t)) return !1;
                var e = Object.getPrototypeOf(t);
                return null === e || e === Object.prototype
            }

            var d = o("Date"), p = o("File"), b = o("Blob"), A = o("FileList");

            function O(t) {
                return "[object Function]" === n.call(t)
            }

            var f = o("URLSearchParams");

            function y(t, e) {
                if (null != t) if ("object" != typeof t && (t = [t]), c(t)) for (var s = 0, a = t.length; s < a; s++) e.call(null, t[s], s, t); else for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.call(null, t[i], i, t)
            }

            var m, P = (m = "undefined" != typeof Uint8Array && Object.getPrototypeOf(Uint8Array), function (t) {
                return m && t instanceof m
            });
            t.exports = {
                isArray: c,
                isArrayBuffer: h,
                isBuffer: function (t) {
                    return null !== t && !u(t) && null !== t.constructor && !u(t.constructor) && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
                },
                isFormData: function (t) {
                    var e = "[object FormData]";
                    return t && ("function" == typeof FormData && t instanceof FormData || n.call(t) === e || O(t.toString) && t.toString() === e)
                },
                isArrayBufferView: function (t) {
                    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && h(t.buffer)
                },
                isString: function (t) {
                    return "string" == typeof t
                },
                isNumber: function (t) {
                    return "number" == typeof t
                },
                isObject: g,
                isPlainObject: l,
                isUndefined: u,
                isDate: d,
                isFile: p,
                isBlob: b,
                isFunction: O,
                isStream: function (t) {
                    return g(t) && O(t.pipe)
                },
                isURLSearchParams: f,
                isStandardBrowserEnv: function () {
                    return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
                },
                forEach: y,
                merge: function t() {
                    var e = {};

                    function s(s, a) {
                        l(e[a]) && l(s) ? e[a] = t(e[a], s) : l(s) ? e[a] = t({}, s) : c(s) ? e[a] = s.slice() : e[a] = s
                    }

                    for (var a = 0, i = arguments.length; a < i; a++) y(arguments[a], s);
                    return e
                },
                extend: function (t, e, s) {
                    return y(e, (function (e, a) {
                        t[a] = s && "function" == typeof e ? i(e, s) : e
                    })), t
                },
                trim: function (t) {
                    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                },
                stripBOM: function (t) {
                    return 65279 === t.charCodeAt(0) && (t = t.slice(1)), t
                },
                inherits: function (t, e, s, a) {
                    t.prototype = Object.create(e.prototype, a), t.prototype.constructor = t, s && Object.assign(t.prototype, s)
                },
                toFlatObject: function (t, e, s) {
                    var a, i, n, r = {};
                    e = e || {};
                    do {
                        for (i = (a = Object.getOwnPropertyNames(t)).length; i-- > 0;) r[n = a[i]] || (e[n] = t[n], r[n] = !0);
                        t = Object.getPrototypeOf(t)
                    } while (t && (!s || s(t, e)) && t !== Object.prototype);
                    return e
                },
                kindOf: r,
                kindOfTest: o,
                endsWith: function (t, e, s) {
                    t = String(t), (void 0 === s || s > t.length) && (s = t.length), s -= e.length;
                    var a = t.indexOf(e, s);
                    return -1 !== a && a === s
                },
                toArray: function (t) {
                    if (!t) return null;
                    var e = t.length;
                    if (u(e)) return null;
                    for (var s = new Array(e); e-- > 0;) s[e] = t[e];
                    return s
                },
                isTypedArray: P,
                isFileList: A
            }
        }, 627: function (t, e, s) {
            "use strict";
            var a = this && this.__importDefault || function (t) {
                return t && t.__esModule ? t : {default: t}
            };
            Object.defineProperty(e, "__esModule", {value: !0}), e.AvailableBudgetsApi = e.AvailableBudgetsApiFactory = e.AvailableBudgetsApiFp = e.AvailableBudgetsApiAxiosParamCreator = e.AutocompleteApi = e.AutocompleteApiFactory = e.AutocompleteApiFp = e.AutocompleteApiAxiosParamCreator = e.AttachmentsApi = e.AttachmentsApiFactory = e.AttachmentsApiFp = e.AttachmentsApiAxiosParamCreator = e.AccountsApi = e.AccountsApiFactory = e.AccountsApiFp = e.AccountsApiAxiosParamCreator = e.AboutApi = e.AboutApiFactory = e.AboutApiFp = e.AboutApiAxiosParamCreator = e.WebhookTrigger = e.WebhookResponse = e.WebhookDelivery = e.UserRoleProperty = e.UserBlockedCodeProperty = e.TransactionTypeProperty = e.TransactionTypeFilter = e.ShortAccountTypeProperty = e.RuleTriggerType = e.RuleTriggerKeyword = e.RuleActionKeyword = e.RecurrenceTransactionType = e.RecurrenceRepetitionType = e.LiabilityType = e.LiabilityDirection = e.InterestPeriod = e.ExportFileFilter = e.DataDestroyObject = e.CurrencyUpdateDefaultEnum = e.CreditCardType = e.ConfigValueUpdateFilter = e.ConfigValueFilter = e.BillRepeatFrequency = e.AutoBudgetType = e.AutoBudgetPeriod = e.AttachableType = e.AccountTypeProperty = e.AccountTypeFilter = e.AccountSearchFieldFilter = e.AccountRoleProperty = void 0, e.RecurrencesApiFp = e.RecurrencesApiAxiosParamCreator = e.PreferencesApi = e.PreferencesApiFactory = e.PreferencesApiFp = e.PreferencesApiAxiosParamCreator = e.PiggyBanksApi = e.PiggyBanksApiFactory = e.PiggyBanksApiFp = e.PiggyBanksApiAxiosParamCreator = e.ObjectGroupsApi = e.ObjectGroupsApiFactory = e.ObjectGroupsApiFp = e.ObjectGroupsApiAxiosParamCreator = e.LinksApi = e.LinksApiFactory = e.LinksApiFp = e.LinksApiAxiosParamCreator = e.InsightApi = e.InsightApiFactory = e.InsightApiFp = e.InsightApiAxiosParamCreator = e.DataApi = e.DataApiFactory = e.DataApiFp = e.DataApiAxiosParamCreator = e.CurrenciesApi = e.CurrenciesApiFactory = e.CurrenciesApiFp = e.CurrenciesApiAxiosParamCreator = e.ConfigurationApi = e.ConfigurationApiFactory = e.ConfigurationApiFp = e.ConfigurationApiAxiosParamCreator = e.ChartsApi = e.ChartsApiFactory = e.ChartsApiFp = e.ChartsApiAxiosParamCreator = e.CategoriesApi = e.CategoriesApiFactory = e.CategoriesApiFp = e.CategoriesApiAxiosParamCreator = e.BudgetsApi = e.BudgetsApiFactory = e.BudgetsApiFp = e.BudgetsApiAxiosParamCreator = e.BillsApi = e.BillsApiFactory = e.BillsApiFp = e.BillsApiAxiosParamCreator = void 0, e.WebhooksApi = e.WebhooksApiFactory = e.WebhooksApiFp = e.WebhooksApiAxiosParamCreator = e.UsersApi = e.UsersApiFactory = e.UsersApiFp = e.UsersApiAxiosParamCreator = e.TransactionsApi = e.TransactionsApiFactory = e.TransactionsApiFp = e.TransactionsApiAxiosParamCreator = e.TagsApi = e.TagsApiFactory = e.TagsApiFp = e.TagsApiAxiosParamCreator = e.SummaryApi = e.SummaryApiFactory = e.SummaryApiFp = e.SummaryApiAxiosParamCreator = e.SearchApi = e.SearchApiFactory = e.SearchApiFp = e.SearchApiAxiosParamCreator = e.RulesApi = e.RulesApiFactory = e.RulesApiFp = e.RulesApiAxiosParamCreator = e.RuleGroupsApi = e.RuleGroupsApiFactory = e.RuleGroupsApiFp = e.RuleGroupsApiAxiosParamCreator = e.RecurrencesApi = e.RecurrencesApiFactory = void 0;
            const i = a(s(669)), n = s(774), r = s(690);
            e.AccountRoleProperty = {
                DefaultAsset: "defaultAsset",
                SharedAsset: "sharedAsset",
                SavingAsset: "savingAsset",
                CcAsset: "ccAsset",
                CashWalletAsset: "cashWalletAsset",
                Null: "null"
            }, e.AccountSearchFieldFilter = {
                All: "all",
                Iban: "iban",
                Name: "name",
                Number: "number",
                Id: "id"
            }, e.AccountTypeFilter = {
                All: "all",
                Asset: "asset",
                Cash: "cash",
                Expense: "expense",
                Revenue: "revenue",
                Special: "special",
                Hidden: "hidden",
                Liability: "liability",
                Liabilities: "liabilities",
                DefaultAccount: "Default account",
                CashAccount: "Cash account",
                AssetAccount: "Asset account",
                ExpenseAccount: "Expense account",
                RevenueAccount: "Revenue account",
                InitialBalanceAccount: "Initial balance account",
                BeneficiaryAccount: "Beneficiary account",
                ImportAccount: "Import account",
                ReconciliationAccount: "Reconciliation account",
                Loan: "Loan",
                Debt: "Debt",
                Mortgage: "Mortgage"
            }, e.AccountTypeProperty = {
                DefaultAccount: "Default account",
                CashAccount: "Cash account",
                AssetAccount: "Asset account",
                ExpenseAccount: "Expense account",
                RevenueAccount: "Revenue account",
                InitialBalanceAccount: "Initial balance account",
                BeneficiaryAccount: "Beneficiary account",
                ImportAccount: "Import account",
                ReconciliationAccount: "Reconciliation account",
                Loan: "Loan",
                Debt: "Debt",
                Mortgage: "Mortgage"
            }, e.AttachableType = {
                Account: "Account",
                Budget: "Budget",
                Bill: "Bill",
                TransactionJournal: "TransactionJournal",
                PiggyBank: "PiggyBank",
                Tag: "Tag"
            }, e.AutoBudgetPeriod = {
                Daily: "daily",
                Weekly: "weekly",
                Monthly: "monthly",
                Quarterly: "quarterly",
                HalfYear: "half-year",
                Yearly: "yearly",
                Null: "null"
            }, e.AutoBudgetType = {
                Reset: "reset",
                Rollover: "rollover",
                None: "none",
                Null: "null"
            }, e.BillRepeatFrequency = {
                Weekly: "weekly",
                Monthly: "monthly",
                Quarterly: "quarterly",
                HalfYear: "half-year",
                Yearly: "yearly"
            }, e.ConfigValueFilter = {
                ConfigurationIsDemoSite: "configuration.is_demo_site",
                ConfigurationPermissionUpdateCheck: "configuration.permission_update_check",
                ConfigurationLastUpdateCheck: "configuration.last_update_check",
                ConfigurationSingleUserMode: "configuration.single_user_mode",
                FireflyVersion: "firefly.version",
                FireflyApiVersion: "firefly.api_version",
                FireflyDefaultLocation: "firefly.default_location",
                FireflyAccountToTransaction: "firefly.account_to_transaction",
                FireflyAllowedOpposingTypes: "firefly.allowed_opposing_types",
                FireflyAccountRoles: "firefly.accountRoles",
                FireflyValidLiabilities: "firefly.valid_liabilities",
                FireflyInterestPeriods: "firefly.interest_periods",
                FireflyEnableExternalMap: "firefly.enable_external_map",
                FireflyExpectedSourceTypes: "firefly.expected_source_types",
                AppTimezone: "app.timezone",
                FireflyBillPeriods: "firefly.bill_periods",
                FireflyCreditCardTypes: "firefly.credit_card_types",
                FireflyLanguages: "firefly.languages",
                FireflyValidViewRanges: "firefly.valid_view_ranges"
            }, e.ConfigValueUpdateFilter = {
                IsDemoSite: "configuration.is_demo_site",
                PermissionUpdateCheck: "configuration.permission_update_check",
                LastUpdateCheck: "configuration.last_update_check",
                SingleUserMode: "configuration.single_user_mode"
            }, e.CreditCardType = {
                MonthlyFull: "monthlyFull",
                Null: "null"
            }, e.CurrencyUpdateDefaultEnum = {True: !0}, e.DataDestroyObject = {
                Budgets: "budgets",
                Bills: "bills",
                PiggyBanks: "piggy_banks",
                Rules: "rules",
                Recurring: "recurring",
                Categories: "categories",
                Tags: "tags",
                ObjectGroups: "object_groups",
                Accounts: "accounts",
                AssetAccounts: "asset_accounts",
                ExpenseAccounts: "expense_accounts",
                RevenueAccounts: "revenue_accounts",
                Liabilities: "liabilities",
                Transactions: "transactions",
                Withdrawals: "withdrawals",
                Deposits: "deposits",
                Transfers: "transfers"
            }, e.ExportFileFilter = {Csv: "csv"}, e.InterestPeriod = {
                Weekly: "weekly",
                Monthly: "monthly",
                Quarterly: "quarterly",
                HalfYear: "half-year",
                Yearly: "yearly",
                Null: "null"
            }, e.LiabilityDirection = {Credit: "credit", Debit: "debit", Null: "null"}, e.LiabilityType = {
                Loan: "loan",
                Debt: "debt",
                Mortgage: "mortgage",
                Null: "null"
            }, e.RecurrenceRepetitionType = {
                Daily: "daily",
                Weekly: "weekly",
                Ndom: "ndom",
                Monthly: "monthly",
                Yearly: "yearly"
            }, e.RecurrenceTransactionType = {
                Withdrawal: "withdrawal",
                Transfer: "transfer",
                Deposit: "deposit"
            }, e.RuleActionKeyword = {
                UserAction: "user_action",
                SetCategory: "set_category",
                ClearCategory: "clear_category",
                SetBudget: "set_budget",
                ClearBudget: "clear_budget",
                AddTag: "add_tag",
                RemoveTag: "remove_tag",
                RemoveAllTags: "remove_all_tags",
                SetDescription: "set_description",
                AppendDescription: "append_description",
                PrependDescription: "prepend_description",
                SetSourceAccount: "set_source_account",
                SetDestinationAccount: "set_destination_account",
                SetNotes: "set_notes",
                AppendNotes: "append_notes",
                PrependNotes: "prepend_notes",
                ClearNotes: "clear_notes",
                LinkToBill: "link_to_bill",
                ConvertWithdrawal: "convert_withdrawal",
                ConvertDeposit: "convert_deposit",
                ConvertTransfer: "convert_transfer",
                DeleteTransaction: "delete_transaction"
            }, e.RuleTriggerKeyword = {
                FromAccountStarts: "from_account_starts",
                FromAccountEnds: "from_account_ends",
                FromAccountIs: "from_account_is",
                FromAccountContains: "from_account_contains",
                ToAccountStarts: "to_account_starts",
                ToAccountEnds: "to_account_ends",
                ToAccountIs: "to_account_is",
                ToAccountContains: "to_account_contains",
                AmountLess: "amount_less",
                AmountExactly: "amount_exactly",
                AmountMore: "amount_more",
                DescriptionStarts: "description_starts",
                DescriptionEnds: "description_ends",
                DescriptionContains: "description_contains",
                DescriptionIs: "description_is",
                TransactionType: "transaction_type",
                CategoryIs: "category_is",
                BudgetIs: "budget_is",
                TagIs: "tag_is",
                CurrencyIs: "currency_is",
                HasAttachments: "has_attachments",
                HasNoCategory: "has_no_category",
                HasAnyCategory: "has_any_category",
                HasNoBudget: "has_no_budget",
                HasAnyBudget: "has_any_budget",
                HasNoTag: "has_no_tag",
                HasAnyTag: "has_any_tag",
                NotesContain: "notes_contain",
                NotesStart: "notes_start",
                NotesEnd: "notes_end",
                NotesAre: "notes_are",
                NoNotes: "no_notes",
                AnyNotes: "any_notes",
                SourceAccountIs: "source_account_is",
                DestinationAccountIs: "destination_account_is",
                SourceAccountStarts: "source_account_starts"
            }, e.RuleTriggerType = {
                StoreJournal: "store-journal",
                UpdateJournal: "update-journal"
            }, e.ShortAccountTypeProperty = {
                Asset: "asset",
                Expense: "expense",
                Import: "import",
                Revenue: "revenue",
                Cash: "cash",
                Liability: "liability",
                Liabilities: "liabilities",
                InitialBalance: "initial-balance",
                Reconciliation: "reconciliation"
            }, e.TransactionTypeFilter = {
                All: "all",
                Withdrawal: "withdrawal",
                Withdrawals: "withdrawals",
                Expense: "expense",
                Deposit: "deposit",
                Deposits: "deposits",
                Income: "income",
                Transfer: "transfer",
                Transfers: "transfers",
                OpeningBalance: "opening_balance",
                Reconciliation: "reconciliation",
                Special: "special",
                Specials: "specials",
                Default: "default"
            }, e.TransactionTypeProperty = {
                Withdrawal: "withdrawal",
                Deposit: "deposit",
                Transfer: "transfer",
                Reconciliation: "reconciliation",
                OpeningBalance: "opening balance"
            }, e.UserBlockedCodeProperty = {
                EmailChanged: "email_changed",
                Null: "null"
            }, e.UserRoleProperty = {
                Owner: "owner",
                Demo: "demo",
                Null: "null"
            }, e.WebhookDelivery = {DeliveryJson: "DELIVERY_JSON"}, e.WebhookResponse = {
                Transactions: "RESPONSE_TRANSACTIONS",
                Accounts: "RESPONSE_ACCOUNTS",
                None: "RESPONSE_NONE"
            }, e.WebhookTrigger = {
                StoreTransaction: "TRIGGER_STORE_TRANSACTION",
                UpdateTransaction: "TRIGGER_UPDATE_TRANSACTION",
                DestroyTransaction: "TRIGGER_DESTROY_TRANSACTION"
            }, e.AboutApiAxiosParamCreator = function (t) {
                return {
                    getAbout: async (e = {}) => {
                        const s = new URL("/api/v1/about", n.DUMMY_BASE_URL);
                        let a;
                        t && (a = t.baseOptions);
                        const i = Object.assign(Object.assign({method: "GET"}, a), e), r = {};
                        await (0, n.setOAuthToObject)(r, "firefly_iii_auth", [], t), (0, n.setSearchParams)(s, {});
                        let o = a && a.headers ? a.headers : {};
                        return i.headers = Object.assign(Object.assign(Object.assign({}, r), o), e.headers), {
                            url: (0, n.toPathString)(s),
                            options: i
                        }
                    }, getCron: async (e, s, a, i = {}) => {
                        (0, n.assertParamExists)("getCron", "cliToken", e);
                        const r = "/api/v1/cron/{cliToken}".replace("{cliToken}", encodeURIComponent(String(e))),
                            o = new URL(r, n.DUMMY_BASE_URL);
                        let c;
                        t && (c = t.baseOptions);
                        const u = Object.assign(Object.assign({method: "GET"}, c), i), h = {}, g = {};
                        await (0, n.setOAuthToObject)(h, "firefly_iii_auth", [], t), void 0 !== s && (g.date = s instanceof Date ? s.toISOString().substr(0, 10) : s), void 0 !== a && (g.force = a), (0, n.setSearchParams)(o, g);
                        let l = c && c.headers ? c.headers : {};
                        return u.headers = Object.assign(Object.assign(Object.assign({}, h), l), i.headers), {
                            url: (0, n.toPathString)(o),
                            options: u
                        }
                    }, getCurrentUser: async (e = {}) => {
                        const s = new URL("/api/v1/about/user", n.DUMMY_BASE_URL);
                        let a;
                        t && (a = t.baseOptions);
                        const i = Object.assign(Object.assign({method: "GET"}, a), e), r = {};
                        await (0, n.setOAuthToObject)(r, "firefly_iii_auth", [], t), (0, n.setSearchParams)(s, {});
                        let o = a && a.headers ? a.headers : {};
                        return i.headers = Object.assign(Object.assign(Object.assign({}, r), o), e.headers), {
                            url: (0, n.toPathString)(s),
                            options: i
                        }
                    }
                }
            }, e.AboutApiFp = function (t) {
                const s = (0, e.AboutApiAxiosParamCreator)(t);
                return {
                    async getAbout(e) {
                        const a = await s.getAbout(e);
                        return (0, n.createRequestFunction)(a, i.default, r.BASE_PATH, t)
                    }, async getCron(e, a, o, c) {
                        const u = await s.getCron(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }, async getCurrentUser(e) {
                        const a = await s.getCurrentUser(e);
                        return (0, n.createRequestFunction)(a, i.default, r.BASE_PATH, t)
                    }
                }
            }, e.AboutApiFactory = function (t, s, a) {
                const i = (0, e.AboutApiFp)(t);
                return {
                    getAbout: t => i.getAbout(t).then((t => t(a, s))),
                    getCron: (t, e, n, r) => i.getCron(t, e, n, r).then((t => t(a, s))),
                    getCurrentUser: t => i.getCurrentUser(t).then((t => t(a, s)))
                }
            };

            class o extends r.BaseAPI {
                getAbout(t) {
                    return (0, e.AboutApiFp)(this.configuration).getAbout(t).then((t => t(this.axios, this.basePath)))
                }

                getCron(t, s, a, i) {
                    return (0, e.AboutApiFp)(this.configuration).getCron(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }

                getCurrentUser(t) {
                    return (0, e.AboutApiFp)(this.configuration).getCurrentUser(t).then((t => t(this.axios, this.basePath)))
                }
            }

            e.AboutApi = o, e.AccountsApiAxiosParamCreator = function (t) {
                return {
                    deleteAccount: async (e, s = {}) => {
                        (0, n.assertParamExists)("deleteAccount", "id", e);
                        const a = "/api/v1/accounts/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "DELETE"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getAccount: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("getAccount", "id", e);
                        const i = "/api/v1/accounts/{id}".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), a), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== s && (h.date = s instanceof Date ? s.toISOString().substr(0, 10) : s), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), a.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, listAccount: async (e, s, a, i = {}) => {
                        const r = new URL("/api/v1/accounts", n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), i), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== e && (h.page = e), void 0 !== s && (h.date = s instanceof Date ? s.toISOString().substr(0, 10) : s), void 0 !== a && (h.type = a), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), i.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, listAttachmentByAccount: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("listAttachmentByAccount", "id", e);
                        const i = "/api/v1/accounts/{id}/attachments".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), a), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== s && (h.page = s), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), a.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, listPiggyBankByAccount: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("listPiggyBankByAccount", "id", e);
                        const i = "/api/v1/accounts/{id}/piggy_banks".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), a), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== s && (h.page = s), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), a.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, listTransactionByAccount: async (e, s, a, i, r, o, c = {}) => {
                        (0, n.assertParamExists)("listTransactionByAccount", "id", e);
                        const u = "/api/v1/accounts/{id}/transactions".replace("{id}", encodeURIComponent(String(e))),
                            h = new URL(u, n.DUMMY_BASE_URL);
                        let g;
                        t && (g = t.baseOptions);
                        const l = Object.assign(Object.assign({method: "GET"}, g), c), d = {}, p = {};
                        await (0, n.setOAuthToObject)(d, "firefly_iii_auth", [], t), void 0 !== s && (p.page = s), void 0 !== a && (p.limit = a), void 0 !== i && (p.start = i instanceof Date ? i.toISOString().substr(0, 10) : i), void 0 !== r && (p.end = r instanceof Date ? r.toISOString().substr(0, 10) : r), void 0 !== o && (p.type = o), (0, n.setSearchParams)(h, p);
                        let b = g && g.headers ? g.headers : {};
                        return l.headers = Object.assign(Object.assign(Object.assign({}, d), b), c.headers), {
                            url: (0, n.toPathString)(h),
                            options: l
                        }
                    }, storeAccount: async (e, s = {}) => {
                        (0, n.assertParamExists)("storeAccount", "accountStore", e);
                        const a = new URL("/api/v1/accounts", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "POST"}, i), s), o = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), o["Content-Type"] = "application/json", (0, n.setSearchParams)(a, {});
                        let c = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), c), s.headers), r.data = (0, n.serializeDataIfNeeded)(e, r, t), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, updateAccount: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("updateAccount", "id", e), (0, n.assertParamExists)("updateAccount", "accountUpdate", s);
                        const i = "/api/v1/accounts/{id}".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "PUT"}, o), a), u = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), u["Content-Type"] = "application/json", (0, n.setSearchParams)(r, {});
                        let h = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), h), a.headers), c.data = (0, n.serializeDataIfNeeded)(s, c, t), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }
                }
            }, e.AccountsApiFp = function (t) {
                const s = (0, e.AccountsApiAxiosParamCreator)(t);
                return {
                    async deleteAccount(e, a) {
                        const o = await s.deleteAccount(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async getAccount(e, a, o) {
                        const c = await s.getAccount(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async listAccount(e, a, o, c) {
                        const u = await s.listAccount(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }, async listAttachmentByAccount(e, a, o) {
                        const c = await s.listAttachmentByAccount(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async listPiggyBankByAccount(e, a, o) {
                        const c = await s.listPiggyBankByAccount(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async listTransactionByAccount(e, a, o, c, u, h, g) {
                        const l = await s.listTransactionByAccount(e, a, o, c, u, h, g);
                        return (0, n.createRequestFunction)(l, i.default, r.BASE_PATH, t)
                    }, async storeAccount(e, a) {
                        const o = await s.storeAccount(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async updateAccount(e, a, o) {
                        const c = await s.updateAccount(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }
                }
            }, e.AccountsApiFactory = function (t, s, a) {
                const i = (0, e.AccountsApiFp)(t);
                return {
                    deleteAccount: (t, e) => i.deleteAccount(t, e).then((t => t(a, s))),
                    getAccount: (t, e, n) => i.getAccount(t, e, n).then((t => t(a, s))),
                    listAccount: (t, e, n, r) => i.listAccount(t, e, n, r).then((t => t(a, s))),
                    listAttachmentByAccount: (t, e, n) => i.listAttachmentByAccount(t, e, n).then((t => t(a, s))),
                    listPiggyBankByAccount: (t, e, n) => i.listPiggyBankByAccount(t, e, n).then((t => t(a, s))),
                    listTransactionByAccount: (t, e, n, r, o, c, u) => i.listTransactionByAccount(t, e, n, r, o, c, u).then((t => t(a, s))),
                    storeAccount: (t, e) => i.storeAccount(t, e).then((t => t(a, s))),
                    updateAccount: (t, e, n) => i.updateAccount(t, e, n).then((t => t(a, s)))
                }
            };

            class c extends r.BaseAPI {
                deleteAccount(t, s) {
                    return (0, e.AccountsApiFp)(this.configuration).deleteAccount(t, s).then((t => t(this.axios, this.basePath)))
                }

                getAccount(t, s, a) {
                    return (0, e.AccountsApiFp)(this.configuration).getAccount(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                listAccount(t, s, a, i) {
                    return (0, e.AccountsApiFp)(this.configuration).listAccount(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }

                listAttachmentByAccount(t, s, a) {
                    return (0, e.AccountsApiFp)(this.configuration).listAttachmentByAccount(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                listPiggyBankByAccount(t, s, a) {
                    return (0, e.AccountsApiFp)(this.configuration).listPiggyBankByAccount(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                listTransactionByAccount(t, s, a, i, n, r, o) {
                    return (0, e.AccountsApiFp)(this.configuration).listTransactionByAccount(t, s, a, i, n, r, o).then((t => t(this.axios, this.basePath)))
                }

                storeAccount(t, s) {
                    return (0, e.AccountsApiFp)(this.configuration).storeAccount(t, s).then((t => t(this.axios, this.basePath)))
                }

                updateAccount(t, s, a) {
                    return (0, e.AccountsApiFp)(this.configuration).updateAccount(t, s, a).then((t => t(this.axios, this.basePath)))
                }
            }

            e.AccountsApi = c, e.AttachmentsApiAxiosParamCreator = function (t) {
                return {
                    deleteAttachment: async (e, s = {}) => {
                        (0, n.assertParamExists)("deleteAttachment", "id", e);
                        const a = "/api/v1/attachments/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "DELETE"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, downloadAttachment: async (e, s = {}) => {
                        (0, n.assertParamExists)("downloadAttachment", "id", e);
                        const a = "/api/v1/attachments/{id}/download".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getAttachment: async (e, s = {}) => {
                        (0, n.assertParamExists)("getAttachment", "id", e);
                        const a = "/api/v1/attachments/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, listAttachment: async (e, s = {}) => {
                        const a = new URL("/api/v1/attachments", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "GET"}, i), s), o = {}, c = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), void 0 !== e && (c.page = e), (0, n.setSearchParams)(a, c);
                        let u = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), u), s.headers), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, storeAttachment: async (e, s = {}) => {
                        (0, n.assertParamExists)("storeAttachment", "attachmentStore", e);
                        const a = new URL("/api/v1/attachments", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "POST"}, i), s), o = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), o["Content-Type"] = "application/json", (0, n.setSearchParams)(a, {});
                        let c = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), c), s.headers), r.data = (0, n.serializeDataIfNeeded)(e, r, t), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, updateAttachment: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("updateAttachment", "id", e), (0, n.assertParamExists)("updateAttachment", "attachmentUpdate", s);
                        const i = "/api/v1/attachments/{id}".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "PUT"}, o), a), u = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), u["Content-Type"] = "application/json", (0, n.setSearchParams)(r, {});
                        let h = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), h), a.headers), c.data = (0, n.serializeDataIfNeeded)(s, c, t), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, uploadAttachment: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("uploadAttachment", "id", e);
                        const i = "/api/v1/attachments/{id}/upload".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "POST"}, o), a), u = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), u["Content-Type"] = "application/octet-stream", (0, n.setSearchParams)(r, {});
                        let h = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), h), a.headers), c.data = (0, n.serializeDataIfNeeded)(s, c, t), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }
                }
            }, e.AttachmentsApiFp = function (t) {
                const s = (0, e.AttachmentsApiAxiosParamCreator)(t);
                return {
                    async deleteAttachment(e, a) {
                        const o = await s.deleteAttachment(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async downloadAttachment(e, a) {
                        const o = await s.downloadAttachment(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async getAttachment(e, a) {
                        const o = await s.getAttachment(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async listAttachment(e, a) {
                        const o = await s.listAttachment(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async storeAttachment(e, a) {
                        const o = await s.storeAttachment(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async updateAttachment(e, a, o) {
                        const c = await s.updateAttachment(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async uploadAttachment(e, a, o) {
                        const c = await s.uploadAttachment(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }
                }
            }, e.AttachmentsApiFactory = function (t, s, a) {
                const i = (0, e.AttachmentsApiFp)(t);
                return {
                    deleteAttachment: (t, e) => i.deleteAttachment(t, e).then((t => t(a, s))),
                    downloadAttachment: (t, e) => i.downloadAttachment(t, e).then((t => t(a, s))),
                    getAttachment: (t, e) => i.getAttachment(t, e).then((t => t(a, s))),
                    listAttachment: (t, e) => i.listAttachment(t, e).then((t => t(a, s))),
                    storeAttachment: (t, e) => i.storeAttachment(t, e).then((t => t(a, s))),
                    updateAttachment: (t, e, n) => i.updateAttachment(t, e, n).then((t => t(a, s))),
                    uploadAttachment: (t, e, n) => i.uploadAttachment(t, e, n).then((t => t(a, s)))
                }
            };

            class u extends r.BaseAPI {
                deleteAttachment(t, s) {
                    return (0, e.AttachmentsApiFp)(this.configuration).deleteAttachment(t, s).then((t => t(this.axios, this.basePath)))
                }

                downloadAttachment(t, s) {
                    return (0, e.AttachmentsApiFp)(this.configuration).downloadAttachment(t, s).then((t => t(this.axios, this.basePath)))
                }

                getAttachment(t, s) {
                    return (0, e.AttachmentsApiFp)(this.configuration).getAttachment(t, s).then((t => t(this.axios, this.basePath)))
                }

                listAttachment(t, s) {
                    return (0, e.AttachmentsApiFp)(this.configuration).listAttachment(t, s).then((t => t(this.axios, this.basePath)))
                }

                storeAttachment(t, s) {
                    return (0, e.AttachmentsApiFp)(this.configuration).storeAttachment(t, s).then((t => t(this.axios, this.basePath)))
                }

                updateAttachment(t, s, a) {
                    return (0, e.AttachmentsApiFp)(this.configuration).updateAttachment(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                uploadAttachment(t, s, a) {
                    return (0, e.AttachmentsApiFp)(this.configuration).uploadAttachment(t, s, a).then((t => t(this.axios, this.basePath)))
                }
            }

            e.AttachmentsApi = u, e.AutocompleteApiAxiosParamCreator = function (t) {
                return {
                    getAccountsAC: async (e, s, a, i, r = {}) => {
                        const o = new URL("/api/v1/autocomplete/accounts", n.DUMMY_BASE_URL);
                        let c;
                        t && (c = t.baseOptions);
                        const u = Object.assign(Object.assign({method: "GET"}, c), r), h = {}, g = {};
                        await (0, n.setOAuthToObject)(h, "firefly_iii_auth", [], t), void 0 !== e && (g.query = e), void 0 !== s && (g.limit = s), void 0 !== a && (g.date = a), void 0 !== i && (g.type = i), (0, n.setSearchParams)(o, g);
                        let l = c && c.headers ? c.headers : {};
                        return u.headers = Object.assign(Object.assign(Object.assign({}, h), l), r.headers), {
                            url: (0, n.toPathString)(o),
                            options: u
                        }
                    }, getBillsAC: async (e, s, a = {}) => {
                        const i = new URL("/api/v1/autocomplete/bills", n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), a), c = {}, u = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), void 0 !== e && (u.query = e), void 0 !== s && (u.limit = s), (0, n.setSearchParams)(i, u);
                        let h = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), h), a.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getBudgetsAC: async (e, s, a = {}) => {
                        const i = new URL("/api/v1/autocomplete/budgets", n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), a), c = {}, u = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), void 0 !== e && (u.query = e), void 0 !== s && (u.limit = s), (0, n.setSearchParams)(i, u);
                        let h = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), h), a.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getCategoriesAC: async (e, s, a = {}) => {
                        const i = new URL("/api/v1/autocomplete/categories", n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), a), c = {}, u = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), void 0 !== e && (u.query = e), void 0 !== s && (u.limit = s), (0, n.setSearchParams)(i, u);
                        let h = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), h), a.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getCurrenciesAC: async (e, s, a = {}) => {
                        const i = new URL("/api/v1/autocomplete/currencies", n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), a), c = {}, u = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), void 0 !== e && (u.query = e), void 0 !== s && (u.limit = s), (0, n.setSearchParams)(i, u);
                        let h = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), h), a.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getCurrenciesCodeAC: async (e, s, a = {}) => {
                        const i = new URL("/api/v1/autocomplete/currencies-with-code", n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), a), c = {}, u = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), void 0 !== e && (u.query = e), void 0 !== s && (u.limit = s), (0, n.setSearchParams)(i, u);
                        let h = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), h), a.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getObjectGroupsAC: async (e, s, a = {}) => {
                        const i = new URL("/api/v1/autocomplete/object-groups", n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), a), c = {}, u = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), void 0 !== e && (u.query = e), void 0 !== s && (u.limit = s), (0, n.setSearchParams)(i, u);
                        let h = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), h), a.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getPiggiesAC: async (e, s, a = {}) => {
                        const i = new URL("/api/v1/autocomplete/piggy-banks", n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), a), c = {}, u = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), void 0 !== e && (u.query = e), void 0 !== s && (u.limit = s), (0, n.setSearchParams)(i, u);
                        let h = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), h), a.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getPiggiesBalanceAC: async (e, s, a = {}) => {
                        const i = new URL("/api/v1/autocomplete/piggy-banks-with-balance", n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), a), c = {}, u = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), void 0 !== e && (u.query = e), void 0 !== s && (u.limit = s), (0, n.setSearchParams)(i, u);
                        let h = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), h), a.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getRecurringAC: async (e, s, a = {}) => {
                        const i = new URL("/api/v1/autocomplete/recurring", n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), a), c = {}, u = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), void 0 !== e && (u.query = e), void 0 !== s && (u.limit = s), (0, n.setSearchParams)(i, u);
                        let h = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), h), a.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getRuleGroupsAC: async (e, s, a = {}) => {
                        const i = new URL("/api/v1/autocomplete/rule-groups", n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), a), c = {}, u = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), void 0 !== e && (u.query = e), void 0 !== s && (u.limit = s), (0, n.setSearchParams)(i, u);
                        let h = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), h), a.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getRulesAC: async (e, s, a = {}) => {
                        const i = new URL("/api/v1/autocomplete/rules", n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), a), c = {}, u = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), void 0 !== e && (u.query = e), void 0 !== s && (u.limit = s), (0, n.setSearchParams)(i, u);
                        let h = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), h), a.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getTagAC: async (e, s, a = {}) => {
                        const i = new URL("/api/v1/autocomplete/tags", n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), a), c = {}, u = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), void 0 !== e && (u.query = e), void 0 !== s && (u.limit = s), (0, n.setSearchParams)(i, u);
                        let h = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), h), a.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getTransactionTypesAC: async (e, s, a = {}) => {
                        const i = new URL("/api/v1/autocomplete/transaction-types", n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), a), c = {}, u = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), void 0 !== e && (u.query = e), void 0 !== s && (u.limit = s), (0, n.setSearchParams)(i, u);
                        let h = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), h), a.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getTransactionsAC: async (e, s, a = {}) => {
                        const i = new URL("/api/v1/autocomplete/transactions", n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), a), c = {}, u = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), void 0 !== e && (u.query = e), void 0 !== s && (u.limit = s), (0, n.setSearchParams)(i, u);
                        let h = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), h), a.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getTransactionsIDAC: async (e, s, a = {}) => {
                        const i = new URL("/api/v1/autocomplete/transactions-with-id", n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), a), c = {}, u = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), void 0 !== e && (u.query = e), void 0 !== s && (u.limit = s), (0, n.setSearchParams)(i, u);
                        let h = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), h), a.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }
                }
            }, e.AutocompleteApiFp = function (t) {
                const s = (0, e.AutocompleteApiAxiosParamCreator)(t);
                return {
                    async getAccountsAC(e, a, o, c, u) {
                        const h = await s.getAccountsAC(e, a, o, c, u);
                        return (0, n.createRequestFunction)(h, i.default, r.BASE_PATH, t)
                    }, async getBillsAC(e, a, o) {
                        const c = await s.getBillsAC(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async getBudgetsAC(e, a, o) {
                        const c = await s.getBudgetsAC(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async getCategoriesAC(e, a, o) {
                        const c = await s.getCategoriesAC(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async getCurrenciesAC(e, a, o) {
                        const c = await s.getCurrenciesAC(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async getCurrenciesCodeAC(e, a, o) {
                        const c = await s.getCurrenciesCodeAC(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async getObjectGroupsAC(e, a, o) {
                        const c = await s.getObjectGroupsAC(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async getPiggiesAC(e, a, o) {
                        const c = await s.getPiggiesAC(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async getPiggiesBalanceAC(e, a, o) {
                        const c = await s.getPiggiesBalanceAC(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async getRecurringAC(e, a, o) {
                        const c = await s.getRecurringAC(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async getRuleGroupsAC(e, a, o) {
                        const c = await s.getRuleGroupsAC(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async getRulesAC(e, a, o) {
                        const c = await s.getRulesAC(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async getTagAC(e, a, o) {
                        const c = await s.getTagAC(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async getTransactionTypesAC(e, a, o) {
                        const c = await s.getTransactionTypesAC(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async getTransactionsAC(e, a, o) {
                        const c = await s.getTransactionsAC(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async getTransactionsIDAC(e, a, o) {
                        const c = await s.getTransactionsIDAC(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }
                }
            }, e.AutocompleteApiFactory = function (t, s, a) {
                const i = (0, e.AutocompleteApiFp)(t);
                return {
                    getAccountsAC: (t, e, n, r, o) => i.getAccountsAC(t, e, n, r, o).then((t => t(a, s))),
                    getBillsAC: (t, e, n) => i.getBillsAC(t, e, n).then((t => t(a, s))),
                    getBudgetsAC: (t, e, n) => i.getBudgetsAC(t, e, n).then((t => t(a, s))),
                    getCategoriesAC: (t, e, n) => i.getCategoriesAC(t, e, n).then((t => t(a, s))),
                    getCurrenciesAC: (t, e, n) => i.getCurrenciesAC(t, e, n).then((t => t(a, s))),
                    getCurrenciesCodeAC: (t, e, n) => i.getCurrenciesCodeAC(t, e, n).then((t => t(a, s))),
                    getObjectGroupsAC: (t, e, n) => i.getObjectGroupsAC(t, e, n).then((t => t(a, s))),
                    getPiggiesAC: (t, e, n) => i.getPiggiesAC(t, e, n).then((t => t(a, s))),
                    getPiggiesBalanceAC: (t, e, n) => i.getPiggiesBalanceAC(t, e, n).then((t => t(a, s))),
                    getRecurringAC: (t, e, n) => i.getRecurringAC(t, e, n).then((t => t(a, s))),
                    getRuleGroupsAC: (t, e, n) => i.getRuleGroupsAC(t, e, n).then((t => t(a, s))),
                    getRulesAC: (t, e, n) => i.getRulesAC(t, e, n).then((t => t(a, s))),
                    getTagAC: (t, e, n) => i.getTagAC(t, e, n).then((t => t(a, s))),
                    getTransactionTypesAC: (t, e, n) => i.getTransactionTypesAC(t, e, n).then((t => t(a, s))),
                    getTransactionsAC: (t, e, n) => i.getTransactionsAC(t, e, n).then((t => t(a, s))),
                    getTransactionsIDAC: (t, e, n) => i.getTransactionsIDAC(t, e, n).then((t => t(a, s)))
                }
            };

            class h extends r.BaseAPI {
                getAccountsAC(t, s, a, i, n) {
                    return (0, e.AutocompleteApiFp)(this.configuration).getAccountsAC(t, s, a, i, n).then((t => t(this.axios, this.basePath)))
                }

                getBillsAC(t, s, a) {
                    return (0, e.AutocompleteApiFp)(this.configuration).getBillsAC(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                getBudgetsAC(t, s, a) {
                    return (0, e.AutocompleteApiFp)(this.configuration).getBudgetsAC(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                getCategoriesAC(t, s, a) {
                    return (0, e.AutocompleteApiFp)(this.configuration).getCategoriesAC(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                getCurrenciesAC(t, s, a) {
                    return (0, e.AutocompleteApiFp)(this.configuration).getCurrenciesAC(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                getCurrenciesCodeAC(t, s, a) {
                    return (0, e.AutocompleteApiFp)(this.configuration).getCurrenciesCodeAC(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                getObjectGroupsAC(t, s, a) {
                    return (0, e.AutocompleteApiFp)(this.configuration).getObjectGroupsAC(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                getPiggiesAC(t, s, a) {
                    return (0, e.AutocompleteApiFp)(this.configuration).getPiggiesAC(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                getPiggiesBalanceAC(t, s, a) {
                    return (0, e.AutocompleteApiFp)(this.configuration).getPiggiesBalanceAC(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                getRecurringAC(t, s, a) {
                    return (0, e.AutocompleteApiFp)(this.configuration).getRecurringAC(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                getRuleGroupsAC(t, s, a) {
                    return (0, e.AutocompleteApiFp)(this.configuration).getRuleGroupsAC(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                getRulesAC(t, s, a) {
                    return (0, e.AutocompleteApiFp)(this.configuration).getRulesAC(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                getTagAC(t, s, a) {
                    return (0, e.AutocompleteApiFp)(this.configuration).getTagAC(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                getTransactionTypesAC(t, s, a) {
                    return (0, e.AutocompleteApiFp)(this.configuration).getTransactionTypesAC(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                getTransactionsAC(t, s, a) {
                    return (0, e.AutocompleteApiFp)(this.configuration).getTransactionsAC(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                getTransactionsIDAC(t, s, a) {
                    return (0, e.AutocompleteApiFp)(this.configuration).getTransactionsIDAC(t, s, a).then((t => t(this.axios, this.basePath)))
                }
            }

            e.AutocompleteApi = h, e.AvailableBudgetsApiAxiosParamCreator = function (t) {
                return {
                    deleteAvailableBudget: async (e, s = {}) => {
                        (0, n.assertParamExists)("deleteAvailableBudget", "id", e);
                        const a = "/api/v1/available_budgets/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "DELETE"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getAvailableBudget: async (e, s = {}) => {
                        (0, n.assertParamExists)("getAvailableBudget", "id", e);
                        const a = "/api/v1/available_budgets/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, listAvailableBudget: async (e, s, a, i = {}) => {
                        const r = new URL("/api/v1/available_budgets", n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), i), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== e && (h.page = e), void 0 !== s && (h.start = s instanceof Date ? s.toISOString().substr(0, 10) : s), void 0 !== a && (h.end = a instanceof Date ? a.toISOString().substr(0, 10) : a), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), i.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, storeAvailableBudget: async (e, s = {}) => {
                        (0, n.assertParamExists)("storeAvailableBudget", "availableBudgetStore", e);
                        const a = new URL("/api/v1/available_budgets", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "POST"}, i), s), o = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), o["Content-Type"] = "application/json", (0, n.setSearchParams)(a, {});
                        let c = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), c), s.headers), r.data = (0, n.serializeDataIfNeeded)(e, r, t), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, updateAvailableBudget: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("updateAvailableBudget", "id", e), (0, n.assertParamExists)("updateAvailableBudget", "availableBudgetUpdate", s);
                        const i = "/api/v1/available_budgets/{id}".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "PUT"}, o), a), u = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), u["Content-Type"] = "application/vnd.api+json", (0, n.setSearchParams)(r, {});
                        let h = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), h), a.headers), c.data = (0, n.serializeDataIfNeeded)(s, c, t), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }
                }
            }, e.AvailableBudgetsApiFp = function (t) {
                const s = (0, e.AvailableBudgetsApiAxiosParamCreator)(t);
                return {
                    async deleteAvailableBudget(e, a) {
                        const o = await s.deleteAvailableBudget(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async getAvailableBudget(e, a) {
                        const o = await s.getAvailableBudget(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async listAvailableBudget(e, a, o, c) {
                        const u = await s.listAvailableBudget(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }, async storeAvailableBudget(e, a) {
                        const o = await s.storeAvailableBudget(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async updateAvailableBudget(e, a, o) {
                        const c = await s.updateAvailableBudget(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }
                }
            }, e.AvailableBudgetsApiFactory = function (t, s, a) {
                const i = (0, e.AvailableBudgetsApiFp)(t);
                return {
                    deleteAvailableBudget: (t, e) => i.deleteAvailableBudget(t, e).then((t => t(a, s))),
                    getAvailableBudget: (t, e) => i.getAvailableBudget(t, e).then((t => t(a, s))),
                    listAvailableBudget: (t, e, n, r) => i.listAvailableBudget(t, e, n, r).then((t => t(a, s))),
                    storeAvailableBudget: (t, e) => i.storeAvailableBudget(t, e).then((t => t(a, s))),
                    updateAvailableBudget: (t, e, n) => i.updateAvailableBudget(t, e, n).then((t => t(a, s)))
                }
            };

            class g extends r.BaseAPI {
                deleteAvailableBudget(t, s) {
                    return (0, e.AvailableBudgetsApiFp)(this.configuration).deleteAvailableBudget(t, s).then((t => t(this.axios, this.basePath)))
                }

                getAvailableBudget(t, s) {
                    return (0, e.AvailableBudgetsApiFp)(this.configuration).getAvailableBudget(t, s).then((t => t(this.axios, this.basePath)))
                }

                listAvailableBudget(t, s, a, i) {
                    return (0, e.AvailableBudgetsApiFp)(this.configuration).listAvailableBudget(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }

                storeAvailableBudget(t, s) {
                    return (0, e.AvailableBudgetsApiFp)(this.configuration).storeAvailableBudget(t, s).then((t => t(this.axios, this.basePath)))
                }

                updateAvailableBudget(t, s, a) {
                    return (0, e.AvailableBudgetsApiFp)(this.configuration).updateAvailableBudget(t, s, a).then((t => t(this.axios, this.basePath)))
                }
            }

            e.AvailableBudgetsApi = g, e.BillsApiAxiosParamCreator = function (t) {
                return {
                    deleteBill: async (e, s = {}) => {
                        (0, n.assertParamExists)("deleteBill", "id", e);
                        const a = "/api/v1/bills/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "DELETE"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getBill: async (e, s, a, i = {}) => {
                        (0, n.assertParamExists)("getBill", "id", e);
                        const r = "/api/v1/bills/{id}".replace("{id}", encodeURIComponent(String(e))),
                            o = new URL(r, n.DUMMY_BASE_URL);
                        let c;
                        t && (c = t.baseOptions);
                        const u = Object.assign(Object.assign({method: "GET"}, c), i), h = {}, g = {};
                        await (0, n.setOAuthToObject)(h, "firefly_iii_auth", [], t), void 0 !== s && (g.start = s instanceof Date ? s.toISOString().substr(0, 10) : s), void 0 !== a && (g.end = a instanceof Date ? a.toISOString().substr(0, 10) : a), (0, n.setSearchParams)(o, g);
                        let l = c && c.headers ? c.headers : {};
                        return u.headers = Object.assign(Object.assign(Object.assign({}, h), l), i.headers), {
                            url: (0, n.toPathString)(o),
                            options: u
                        }
                    }, listAttachmentByBill: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("listAttachmentByBill", "id", e);
                        const i = "/api/v1/bills/{id}/attachments".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), a), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== s && (h.page = s), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), a.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, listBill: async (e, s, a, i = {}) => {
                        const r = new URL("/api/v1/bills", n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), i), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== e && (h.page = e), void 0 !== s && (h.start = s instanceof Date ? s.toISOString().substr(0, 10) : s), void 0 !== a && (h.end = a instanceof Date ? a.toISOString().substr(0, 10) : a), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), i.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, listRuleByBill: async (e, s = {}) => {
                        (0, n.assertParamExists)("listRuleByBill", "id", e);
                        const a = "/api/v1/bills/{id}/rules".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, listTransactionByBill: async (e, s, a, i, r = {}) => {
                        (0, n.assertParamExists)("listTransactionByBill", "id", e);
                        const o = "/api/v1/bills/{id}/transactions".replace("{id}", encodeURIComponent(String(e))),
                            c = new URL(o, n.DUMMY_BASE_URL);
                        let u;
                        t && (u = t.baseOptions);
                        const h = Object.assign(Object.assign({method: "GET"}, u), r), g = {}, l = {};
                        await (0, n.setOAuthToObject)(g, "firefly_iii_auth", [], t), void 0 !== s && (l.start = s instanceof Date ? s.toISOString().substr(0, 10) : s), void 0 !== a && (l.end = a instanceof Date ? a.toISOString().substr(0, 10) : a), void 0 !== i && (l.type = i), (0, n.setSearchParams)(c, l);
                        let d = u && u.headers ? u.headers : {};
                        return h.headers = Object.assign(Object.assign(Object.assign({}, g), d), r.headers), {
                            url: (0, n.toPathString)(c),
                            options: h
                        }
                    }, storeBill: async (e, s = {}) => {
                        (0, n.assertParamExists)("storeBill", "billStore", e);
                        const a = new URL("/api/v1/bills", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "POST"}, i), s), o = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), o["Content-Type"] = "application/json", (0, n.setSearchParams)(a, {});
                        let c = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), c), s.headers), r.data = (0, n.serializeDataIfNeeded)(e, r, t), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, updateBill: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("updateBill", "id", e), (0, n.assertParamExists)("updateBill", "billUpdate", s);
                        const i = "/api/v1/bills/{id}".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "PUT"}, o), a), u = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), u["Content-Type"] = "application/json", (0, n.setSearchParams)(r, {});
                        let h = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), h), a.headers), c.data = (0, n.serializeDataIfNeeded)(s, c, t), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }
                }
            }, e.BillsApiFp = function (t) {
                const s = (0, e.BillsApiAxiosParamCreator)(t);
                return {
                    async deleteBill(e, a) {
                        const o = await s.deleteBill(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async getBill(e, a, o, c) {
                        const u = await s.getBill(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }, async listAttachmentByBill(e, a, o) {
                        const c = await s.listAttachmentByBill(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async listBill(e, a, o, c) {
                        const u = await s.listBill(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }, async listRuleByBill(e, a) {
                        const o = await s.listRuleByBill(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async listTransactionByBill(e, a, o, c, u) {
                        const h = await s.listTransactionByBill(e, a, o, c, u);
                        return (0, n.createRequestFunction)(h, i.default, r.BASE_PATH, t)
                    }, async storeBill(e, a) {
                        const o = await s.storeBill(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async updateBill(e, a, o) {
                        const c = await s.updateBill(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }
                }
            }, e.BillsApiFactory = function (t, s, a) {
                const i = (0, e.BillsApiFp)(t);
                return {
                    deleteBill: (t, e) => i.deleteBill(t, e).then((t => t(a, s))),
                    getBill: (t, e, n, r) => i.getBill(t, e, n, r).then((t => t(a, s))),
                    listAttachmentByBill: (t, e, n) => i.listAttachmentByBill(t, e, n).then((t => t(a, s))),
                    listBill: (t, e, n, r) => i.listBill(t, e, n, r).then((t => t(a, s))),
                    listRuleByBill: (t, e) => i.listRuleByBill(t, e).then((t => t(a, s))),
                    listTransactionByBill: (t, e, n, r, o) => i.listTransactionByBill(t, e, n, r, o).then((t => t(a, s))),
                    storeBill: (t, e) => i.storeBill(t, e).then((t => t(a, s))),
                    updateBill: (t, e, n) => i.updateBill(t, e, n).then((t => t(a, s)))
                }
            };

            class l extends r.BaseAPI {
                deleteBill(t, s) {
                    return (0, e.BillsApiFp)(this.configuration).deleteBill(t, s).then((t => t(this.axios, this.basePath)))
                }

                getBill(t, s, a, i) {
                    return (0, e.BillsApiFp)(this.configuration).getBill(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }

                listAttachmentByBill(t, s, a) {
                    return (0, e.BillsApiFp)(this.configuration).listAttachmentByBill(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                listBill(t, s, a, i) {
                    return (0, e.BillsApiFp)(this.configuration).listBill(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }

                listRuleByBill(t, s) {
                    return (0, e.BillsApiFp)(this.configuration).listRuleByBill(t, s).then((t => t(this.axios, this.basePath)))
                }

                listTransactionByBill(t, s, a, i, n) {
                    return (0, e.BillsApiFp)(this.configuration).listTransactionByBill(t, s, a, i, n).then((t => t(this.axios, this.basePath)))
                }

                storeBill(t, s) {
                    return (0, e.BillsApiFp)(this.configuration).storeBill(t, s).then((t => t(this.axios, this.basePath)))
                }

                updateBill(t, s, a) {
                    return (0, e.BillsApiFp)(this.configuration).updateBill(t, s, a).then((t => t(this.axios, this.basePath)))
                }
            }

            e.BillsApi = l, e.BudgetsApiAxiosParamCreator = function (t) {
                return {
                    deleteBudget: async (e, s = {}) => {
                        (0, n.assertParamExists)("deleteBudget", "id", e);
                        const a = "/api/v1/budgets/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "DELETE"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, deleteBudgetLimit: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("deleteBudgetLimit", "id", e), (0, n.assertParamExists)("deleteBudgetLimit", "limitId", s);
                        const i = "/api/v1/budgets/{id}/limits/{limitId}".replace("{id}", encodeURIComponent(String(e))).replace("{limitId}", encodeURIComponent(String(s))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "DELETE"}, o), a), u = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), (0, n.setSearchParams)(r, {});
                        let h = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), h), a.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, getBudget: async (e, s, a, i = {}) => {
                        (0, n.assertParamExists)("getBudget", "id", e);
                        const r = "/api/v1/budgets/{id}".replace("{id}", encodeURIComponent(String(e))),
                            o = new URL(r, n.DUMMY_BASE_URL);
                        let c;
                        t && (c = t.baseOptions);
                        const u = Object.assign(Object.assign({method: "GET"}, c), i), h = {}, g = {};
                        await (0, n.setOAuthToObject)(h, "firefly_iii_auth", [], t), void 0 !== s && (g.start = s instanceof Date ? s.toISOString().substr(0, 10) : s), void 0 !== a && (g.end = a instanceof Date ? a.toISOString().substr(0, 10) : a), (0, n.setSearchParams)(o, g);
                        let l = c && c.headers ? c.headers : {};
                        return u.headers = Object.assign(Object.assign(Object.assign({}, h), l), i.headers), {
                            url: (0, n.toPathString)(o),
                            options: u
                        }
                    }, getBudgetLimit: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("getBudgetLimit", "id", e), (0, n.assertParamExists)("getBudgetLimit", "limitId", s);
                        const i = "/api/v1/budgets/{id}/limits/{limitId}".replace("{id}", encodeURIComponent(String(e))).replace("{limitId}", encodeURIComponent(String(s))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), a), u = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), (0, n.setSearchParams)(r, {});
                        let h = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), h), a.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, listAttachmentByBudget: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("listAttachmentByBudget", "id", e);
                        const i = "/api/v1/budgets/{id}/attachments".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), a), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== s && (h.page = s), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), a.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, listBudget: async (e, s, a, i = {}) => {
                        const r = new URL("/api/v1/budgets", n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), i), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== e && (h.page = e), void 0 !== s && (h.start = s instanceof Date ? s.toISOString().substr(0, 10) : s), void 0 !== a && (h.end = a instanceof Date ? a.toISOString().substr(0, 10) : a), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), i.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, listBudgetLimit: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("listBudgetLimit", "start", e), (0, n.assertParamExists)("listBudgetLimit", "end", s);
                        const i = new URL("/api/v1/budget-limits", n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), a), c = {}, u = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), void 0 !== e && (u.start = e instanceof Date ? e.toISOString().substr(0, 10) : e), void 0 !== s && (u.end = s instanceof Date ? s.toISOString().substr(0, 10) : s), (0, n.setSearchParams)(i, u);
                        let h = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), h), a.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, listBudgetLimitByBudget: async (e, s, a, i = {}) => {
                        (0, n.assertParamExists)("listBudgetLimitByBudget", "id", e);
                        const r = "/api/v1/budgets/{id}/limits".replace("{id}", encodeURIComponent(String(e))),
                            o = new URL(r, n.DUMMY_BASE_URL);
                        let c;
                        t && (c = t.baseOptions);
                        const u = Object.assign(Object.assign({method: "GET"}, c), i), h = {}, g = {};
                        await (0, n.setOAuthToObject)(h, "firefly_iii_auth", [], t), void 0 !== s && (g.start = s instanceof Date ? s.toISOString().substr(0, 10) : s), void 0 !== a && (g.end = a instanceof Date ? a.toISOString().substr(0, 10) : a), (0, n.setSearchParams)(o, g);
                        let l = c && c.headers ? c.headers : {};
                        return u.headers = Object.assign(Object.assign(Object.assign({}, h), l), i.headers), {
                            url: (0, n.toPathString)(o),
                            options: u
                        }
                    }, listTransactionByBudget: async (e, s, a, i, r, o, c = {}) => {
                        (0, n.assertParamExists)("listTransactionByBudget", "id", e);
                        const u = "/api/v1/budgets/{id}/transactions".replace("{id}", encodeURIComponent(String(e))),
                            h = new URL(u, n.DUMMY_BASE_URL);
                        let g;
                        t && (g = t.baseOptions);
                        const l = Object.assign(Object.assign({method: "GET"}, g), c), d = {}, p = {};
                        await (0, n.setOAuthToObject)(d, "firefly_iii_auth", [], t), void 0 !== s && (p.limit = s), void 0 !== a && (p.page = a), void 0 !== i && (p.start = i instanceof Date ? i.toISOString().substr(0, 10) : i), void 0 !== r && (p.end = r instanceof Date ? r.toISOString().substr(0, 10) : r), void 0 !== o && (p.type = o), (0, n.setSearchParams)(h, p);
                        let b = g && g.headers ? g.headers : {};
                        return l.headers = Object.assign(Object.assign(Object.assign({}, d), b), c.headers), {
                            url: (0, n.toPathString)(h),
                            options: l
                        }
                    }, listTransactionByBudgetLimit: async (e, s, a, i, r = {}) => {
                        (0, n.assertParamExists)("listTransactionByBudgetLimit", "id", e), (0, n.assertParamExists)("listTransactionByBudgetLimit", "limitId", s);
                        const o = "/api/v1/budgets/{id}/limits/{limitId}/transactions".replace("{id}", encodeURIComponent(String(e))).replace("{limitId}", encodeURIComponent(String(s))),
                            c = new URL(o, n.DUMMY_BASE_URL);
                        let u;
                        t && (u = t.baseOptions);
                        const h = Object.assign(Object.assign({method: "GET"}, u), r), g = {}, l = {};
                        await (0, n.setOAuthToObject)(g, "firefly_iii_auth", [], t), void 0 !== a && (l.page = a), void 0 !== i && (l.type = i), (0, n.setSearchParams)(c, l);
                        let d = u && u.headers ? u.headers : {};
                        return h.headers = Object.assign(Object.assign(Object.assign({}, g), d), r.headers), {
                            url: (0, n.toPathString)(c),
                            options: h
                        }
                    }, listTransactionWithoutBudget: async (e, s, a, i, r, o = {}) => {
                        const c = new URL("/api/v1/budgets/transactions-without-budget", n.DUMMY_BASE_URL);
                        let u;
                        t && (u = t.baseOptions);
                        const h = Object.assign(Object.assign({method: "GET"}, u), o), g = {}, l = {};
                        await (0, n.setOAuthToObject)(g, "firefly_iii_auth", [], t), void 0 !== e && (l.limit = e), void 0 !== s && (l.page = s), void 0 !== a && (l.start = a instanceof Date ? a.toISOString().substr(0, 10) : a), void 0 !== i && (l.end = i instanceof Date ? i.toISOString().substr(0, 10) : i), void 0 !== r && (l.type = r), (0, n.setSearchParams)(c, l);
                        let d = u && u.headers ? u.headers : {};
                        return h.headers = Object.assign(Object.assign(Object.assign({}, g), d), o.headers), {
                            url: (0, n.toPathString)(c),
                            options: h
                        }
                    }, storeBudget: async (e, s = {}) => {
                        (0, n.assertParamExists)("storeBudget", "budgetStore", e);
                        const a = new URL("/api/v1/budgets", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "POST"}, i), s), o = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), o["Content-Type"] = "application/json", (0, n.setSearchParams)(a, {});
                        let c = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), c), s.headers), r.data = (0, n.serializeDataIfNeeded)(e, r, t), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, storeBudgetLimit: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("storeBudgetLimit", "id", e), (0, n.assertParamExists)("storeBudgetLimit", "budgetLimitStore", s);
                        const i = "/api/v1/budgets/{id}/limits".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "POST"}, o), a), u = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), u["Content-Type"] = "application/json", (0, n.setSearchParams)(r, {});
                        let h = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), h), a.headers), c.data = (0, n.serializeDataIfNeeded)(s, c, t), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, updateBudget: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("updateBudget", "id", e), (0, n.assertParamExists)("updateBudget", "budgetUpdate", s);
                        const i = "/api/v1/budgets/{id}".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "PUT"}, o), a), u = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), u["Content-Type"] = "application/json", (0, n.setSearchParams)(r, {});
                        let h = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), h), a.headers), c.data = (0, n.serializeDataIfNeeded)(s, c, t), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, updateBudgetLimit: async (e, s, a, i = {}) => {
                        (0, n.assertParamExists)("updateBudgetLimit", "id", e), (0, n.assertParamExists)("updateBudgetLimit", "limitId", s), (0, n.assertParamExists)("updateBudgetLimit", "budgetLimit", a);
                        const r = "/api/v1/budgets/{id}/limits/{limitId}".replace("{id}", encodeURIComponent(String(e))).replace("{limitId}", encodeURIComponent(String(s))),
                            o = new URL(r, n.DUMMY_BASE_URL);
                        let c;
                        t && (c = t.baseOptions);
                        const u = Object.assign(Object.assign({method: "PUT"}, c), i), h = {};
                        await (0, n.setOAuthToObject)(h, "firefly_iii_auth", [], t), h["Content-Type"] = "application/json", (0, n.setSearchParams)(o, {});
                        let g = c && c.headers ? c.headers : {};
                        return u.headers = Object.assign(Object.assign(Object.assign({}, h), g), i.headers), u.data = (0, n.serializeDataIfNeeded)(a, u, t), {
                            url: (0, n.toPathString)(o),
                            options: u
                        }
                    }
                }
            }, e.BudgetsApiFp = function (t) {
                const s = (0, e.BudgetsApiAxiosParamCreator)(t);
                return {
                    async deleteBudget(e, a) {
                        const o = await s.deleteBudget(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async deleteBudgetLimit(e, a, o) {
                        const c = await s.deleteBudgetLimit(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async getBudget(e, a, o, c) {
                        const u = await s.getBudget(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }, async getBudgetLimit(e, a, o) {
                        const c = await s.getBudgetLimit(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async listAttachmentByBudget(e, a, o) {
                        const c = await s.listAttachmentByBudget(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async listBudget(e, a, o, c) {
                        const u = await s.listBudget(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }, async listBudgetLimit(e, a, o) {
                        const c = await s.listBudgetLimit(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async listBudgetLimitByBudget(e, a, o, c) {
                        const u = await s.listBudgetLimitByBudget(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }, async listTransactionByBudget(e, a, o, c, u, h, g) {
                        const l = await s.listTransactionByBudget(e, a, o, c, u, h, g);
                        return (0, n.createRequestFunction)(l, i.default, r.BASE_PATH, t)
                    }, async listTransactionByBudgetLimit(e, a, o, c, u) {
                        const h = await s.listTransactionByBudgetLimit(e, a, o, c, u);
                        return (0, n.createRequestFunction)(h, i.default, r.BASE_PATH, t)
                    }, async listTransactionWithoutBudget(e, a, o, c, u, h) {
                        const g = await s.listTransactionWithoutBudget(e, a, o, c, u, h);
                        return (0, n.createRequestFunction)(g, i.default, r.BASE_PATH, t)
                    }, async storeBudget(e, a) {
                        const o = await s.storeBudget(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async storeBudgetLimit(e, a, o) {
                        const c = await s.storeBudgetLimit(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async updateBudget(e, a, o) {
                        const c = await s.updateBudget(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async updateBudgetLimit(e, a, o, c) {
                        const u = await s.updateBudgetLimit(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }
                }
            }, e.BudgetsApiFactory = function (t, s, a) {
                const i = (0, e.BudgetsApiFp)(t);
                return {
                    deleteBudget: (t, e) => i.deleteBudget(t, e).then((t => t(a, s))),
                    deleteBudgetLimit: (t, e, n) => i.deleteBudgetLimit(t, e, n).then((t => t(a, s))),
                    getBudget: (t, e, n, r) => i.getBudget(t, e, n, r).then((t => t(a, s))),
                    getBudgetLimit: (t, e, n) => i.getBudgetLimit(t, e, n).then((t => t(a, s))),
                    listAttachmentByBudget: (t, e, n) => i.listAttachmentByBudget(t, e, n).then((t => t(a, s))),
                    listBudget: (t, e, n, r) => i.listBudget(t, e, n, r).then((t => t(a, s))),
                    listBudgetLimit: (t, e, n) => i.listBudgetLimit(t, e, n).then((t => t(a, s))),
                    listBudgetLimitByBudget: (t, e, n, r) => i.listBudgetLimitByBudget(t, e, n, r).then((t => t(a, s))),
                    listTransactionByBudget: (t, e, n, r, o, c, u) => i.listTransactionByBudget(t, e, n, r, o, c, u).then((t => t(a, s))),
                    listTransactionByBudgetLimit: (t, e, n, r, o) => i.listTransactionByBudgetLimit(t, e, n, r, o).then((t => t(a, s))),
                    listTransactionWithoutBudget: (t, e, n, r, o, c) => i.listTransactionWithoutBudget(t, e, n, r, o, c).then((t => t(a, s))),
                    storeBudget: (t, e) => i.storeBudget(t, e).then((t => t(a, s))),
                    storeBudgetLimit: (t, e, n) => i.storeBudgetLimit(t, e, n).then((t => t(a, s))),
                    updateBudget: (t, e, n) => i.updateBudget(t, e, n).then((t => t(a, s))),
                    updateBudgetLimit: (t, e, n, r) => i.updateBudgetLimit(t, e, n, r).then((t => t(a, s)))
                }
            };

            class d extends r.BaseAPI {
                deleteBudget(t, s) {
                    return (0, e.BudgetsApiFp)(this.configuration).deleteBudget(t, s).then((t => t(this.axios, this.basePath)))
                }

                deleteBudgetLimit(t, s, a) {
                    return (0, e.BudgetsApiFp)(this.configuration).deleteBudgetLimit(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                getBudget(t, s, a, i) {
                    return (0, e.BudgetsApiFp)(this.configuration).getBudget(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }

                getBudgetLimit(t, s, a) {
                    return (0, e.BudgetsApiFp)(this.configuration).getBudgetLimit(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                listAttachmentByBudget(t, s, a) {
                    return (0, e.BudgetsApiFp)(this.configuration).listAttachmentByBudget(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                listBudget(t, s, a, i) {
                    return (0, e.BudgetsApiFp)(this.configuration).listBudget(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }

                listBudgetLimit(t, s, a) {
                    return (0, e.BudgetsApiFp)(this.configuration).listBudgetLimit(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                listBudgetLimitByBudget(t, s, a, i) {
                    return (0, e.BudgetsApiFp)(this.configuration).listBudgetLimitByBudget(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }

                listTransactionByBudget(t, s, a, i, n, r, o) {
                    return (0, e.BudgetsApiFp)(this.configuration).listTransactionByBudget(t, s, a, i, n, r, o).then((t => t(this.axios, this.basePath)))
                }

                listTransactionByBudgetLimit(t, s, a, i, n) {
                    return (0, e.BudgetsApiFp)(this.configuration).listTransactionByBudgetLimit(t, s, a, i, n).then((t => t(this.axios, this.basePath)))
                }

                listTransactionWithoutBudget(t, s, a, i, n, r) {
                    return (0, e.BudgetsApiFp)(this.configuration).listTransactionWithoutBudget(t, s, a, i, n, r).then((t => t(this.axios, this.basePath)))
                }

                storeBudget(t, s) {
                    return (0, e.BudgetsApiFp)(this.configuration).storeBudget(t, s).then((t => t(this.axios, this.basePath)))
                }

                storeBudgetLimit(t, s, a) {
                    return (0, e.BudgetsApiFp)(this.configuration).storeBudgetLimit(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                updateBudget(t, s, a) {
                    return (0, e.BudgetsApiFp)(this.configuration).updateBudget(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                updateBudgetLimit(t, s, a, i) {
                    return (0, e.BudgetsApiFp)(this.configuration).updateBudgetLimit(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }
            }

            e.BudgetsApi = d, e.CategoriesApiAxiosParamCreator = function (t) {
                return {
                    deleteCategory: async (e, s = {}) => {
                        (0, n.assertParamExists)("deleteCategory", "id", e);
                        const a = "/api/v1/categories/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "DELETE"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getCategory: async (e, s, a, i = {}) => {
                        (0, n.assertParamExists)("getCategory", "id", e);
                        const r = "/api/v1/categories/{id}".replace("{id}", encodeURIComponent(String(e))),
                            o = new URL(r, n.DUMMY_BASE_URL);
                        let c;
                        t && (c = t.baseOptions);
                        const u = Object.assign(Object.assign({method: "GET"}, c), i), h = {}, g = {};
                        await (0, n.setOAuthToObject)(h, "firefly_iii_auth", [], t), void 0 !== s && (g.start = s instanceof Date ? s.toISOString().substr(0, 10) : s), void 0 !== a && (g.end = a instanceof Date ? a.toISOString().substr(0, 10) : a), (0, n.setSearchParams)(o, g);
                        let l = c && c.headers ? c.headers : {};
                        return u.headers = Object.assign(Object.assign(Object.assign({}, h), l), i.headers), {
                            url: (0, n.toPathString)(o),
                            options: u
                        }
                    }, listAttachmentByCategory: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("listAttachmentByCategory", "id", e);
                        const i = "/api/v1/categories/{id}/attachments".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), a), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== s && (h.page = s), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), a.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, listCategory: async (e, s = {}) => {
                        const a = new URL("/api/v1/categories", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "GET"}, i), s), o = {}, c = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), void 0 !== e && (c.page = e), (0, n.setSearchParams)(a, c);
                        let u = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), u), s.headers), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, listTransactionByCategory: async (e, s, a, i, r, o = {}) => {
                        (0, n.assertParamExists)("listTransactionByCategory", "id", e);
                        const c = "/api/v1/categories/{id}/transactions".replace("{id}", encodeURIComponent(String(e))),
                            u = new URL(c, n.DUMMY_BASE_URL);
                        let h;
                        t && (h = t.baseOptions);
                        const g = Object.assign(Object.assign({method: "GET"}, h), o), l = {}, d = {};
                        await (0, n.setOAuthToObject)(l, "firefly_iii_auth", [], t), void 0 !== s && (d.page = s), void 0 !== a && (d.start = a instanceof Date ? a.toISOString().substr(0, 10) : a), void 0 !== i && (d.end = i instanceof Date ? i.toISOString().substr(0, 10) : i), void 0 !== r && (d.type = r), (0, n.setSearchParams)(u, d);
                        let p = h && h.headers ? h.headers : {};
                        return g.headers = Object.assign(Object.assign(Object.assign({}, l), p), o.headers), {
                            url: (0, n.toPathString)(u),
                            options: g
                        }
                    }, listTransactionWithoutCategory: async (e, s, a, i, r, o = {}) => {
                        const c = new URL("/api/v1/categories/transactions-without-category", n.DUMMY_BASE_URL);
                        let u;
                        t && (u = t.baseOptions);
                        const h = Object.assign(Object.assign({method: "GET"}, u), o), g = {}, l = {};
                        await (0, n.setOAuthToObject)(g, "firefly_iii_auth", [], t), void 0 !== e && (l.limit = e), void 0 !== s && (l.page = s), void 0 !== a && (l.start = a instanceof Date ? a.toISOString().substr(0, 10) : a), void 0 !== i && (l.end = i instanceof Date ? i.toISOString().substr(0, 10) : i), void 0 !== r && (l.type = r), (0, n.setSearchParams)(c, l);
                        let d = u && u.headers ? u.headers : {};
                        return h.headers = Object.assign(Object.assign(Object.assign({}, g), d), o.headers), {
                            url: (0, n.toPathString)(c),
                            options: h
                        }
                    }, storeCategory: async (e, s = {}) => {
                        (0, n.assertParamExists)("storeCategory", "category", e);
                        const a = new URL("/api/v1/categories", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "POST"}, i), s), o = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), o["Content-Type"] = "application/json", (0, n.setSearchParams)(a, {});
                        let c = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), c), s.headers), r.data = (0, n.serializeDataIfNeeded)(e, r, t), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, updateCategory: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("updateCategory", "id", e), (0, n.assertParamExists)("updateCategory", "categoryUpdate", s);
                        const i = "/api/v1/categories/{id}".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "PUT"}, o), a), u = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), u["Content-Type"] = "application/json", (0, n.setSearchParams)(r, {});
                        let h = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), h), a.headers), c.data = (0, n.serializeDataIfNeeded)(s, c, t), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }
                }
            }, e.CategoriesApiFp = function (t) {
                const s = (0, e.CategoriesApiAxiosParamCreator)(t);
                return {
                    async deleteCategory(e, a) {
                        const o = await s.deleteCategory(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async getCategory(e, a, o, c) {
                        const u = await s.getCategory(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }, async listAttachmentByCategory(e, a, o) {
                        const c = await s.listAttachmentByCategory(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async listCategory(e, a) {
                        const o = await s.listCategory(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async listTransactionByCategory(e, a, o, c, u, h) {
                        const g = await s.listTransactionByCategory(e, a, o, c, u, h);
                        return (0, n.createRequestFunction)(g, i.default, r.BASE_PATH, t)
                    }, async listTransactionWithoutCategory(e, a, o, c, u, h) {
                        const g = await s.listTransactionWithoutCategory(e, a, o, c, u, h);
                        return (0, n.createRequestFunction)(g, i.default, r.BASE_PATH, t)
                    }, async storeCategory(e, a) {
                        const o = await s.storeCategory(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async updateCategory(e, a, o) {
                        const c = await s.updateCategory(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }
                }
            }, e.CategoriesApiFactory = function (t, s, a) {
                const i = (0, e.CategoriesApiFp)(t);
                return {
                    deleteCategory: (t, e) => i.deleteCategory(t, e).then((t => t(a, s))),
                    getCategory: (t, e, n, r) => i.getCategory(t, e, n, r).then((t => t(a, s))),
                    listAttachmentByCategory: (t, e, n) => i.listAttachmentByCategory(t, e, n).then((t => t(a, s))),
                    listCategory: (t, e) => i.listCategory(t, e).then((t => t(a, s))),
                    listTransactionByCategory: (t, e, n, r, o, c) => i.listTransactionByCategory(t, e, n, r, o, c).then((t => t(a, s))),
                    listTransactionWithoutCategory: (t, e, n, r, o, c) => i.listTransactionWithoutCategory(t, e, n, r, o, c).then((t => t(a, s))),
                    storeCategory: (t, e) => i.storeCategory(t, e).then((t => t(a, s))),
                    updateCategory: (t, e, n) => i.updateCategory(t, e, n).then((t => t(a, s)))
                }
            };

            class p extends r.BaseAPI {
                deleteCategory(t, s) {
                    return (0, e.CategoriesApiFp)(this.configuration).deleteCategory(t, s).then((t => t(this.axios, this.basePath)))
                }

                getCategory(t, s, a, i) {
                    return (0, e.CategoriesApiFp)(this.configuration).getCategory(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }

                listAttachmentByCategory(t, s, a) {
                    return (0, e.CategoriesApiFp)(this.configuration).listAttachmentByCategory(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                listCategory(t, s) {
                    return (0, e.CategoriesApiFp)(this.configuration).listCategory(t, s).then((t => t(this.axios, this.basePath)))
                }

                listTransactionByCategory(t, s, a, i, n, r) {
                    return (0, e.CategoriesApiFp)(this.configuration).listTransactionByCategory(t, s, a, i, n, r).then((t => t(this.axios, this.basePath)))
                }

                listTransactionWithoutCategory(t, s, a, i, n, r) {
                    return (0, e.CategoriesApiFp)(this.configuration).listTransactionWithoutCategory(t, s, a, i, n, r).then((t => t(this.axios, this.basePath)))
                }

                storeCategory(t, s) {
                    return (0, e.CategoriesApiFp)(this.configuration).storeCategory(t, s).then((t => t(this.axios, this.basePath)))
                }

                updateCategory(t, s, a) {
                    return (0, e.CategoriesApiFp)(this.configuration).updateCategory(t, s, a).then((t => t(this.axios, this.basePath)))
                }
            }

            e.CategoriesApi = p, e.ChartsApiAxiosParamCreator = function (t) {
                return {
                    getChartAccountOverview: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("getChartAccountOverview", "start", e), (0, n.assertParamExists)("getChartAccountOverview", "end", s);
                        const i = new URL("/api/v1/chart/account/overview", n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), a), c = {}, u = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), void 0 !== e && (u.start = e instanceof Date ? e.toISOString().substr(0, 10) : e), void 0 !== s && (u.end = s instanceof Date ? s.toISOString().substr(0, 10) : s), (0, n.setSearchParams)(i, u);
                        let h = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), h), a.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }
                }
            }, e.ChartsApiFp = function (t) {
                const s = (0, e.ChartsApiAxiosParamCreator)(t);
                return {
                    async getChartAccountOverview(e, a, o) {
                        const c = await s.getChartAccountOverview(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }
                }
            }, e.ChartsApiFactory = function (t, s, a) {
                const i = (0, e.ChartsApiFp)(t);
                return {getChartAccountOverview: (t, e, n) => i.getChartAccountOverview(t, e, n).then((t => t(a, s)))}
            };

            class b extends r.BaseAPI {
                getChartAccountOverview(t, s, a) {
                    return (0, e.ChartsApiFp)(this.configuration).getChartAccountOverview(t, s, a).then((t => t(this.axios, this.basePath)))
                }
            }

            e.ChartsApi = b, e.ConfigurationApiAxiosParamCreator = function (t) {
                return {
                    getConfiguration: async (e = {}) => {
                        const s = new URL("/api/v1/configuration", n.DUMMY_BASE_URL);
                        let a;
                        t && (a = t.baseOptions);
                        const i = Object.assign(Object.assign({method: "GET"}, a), e), r = {};
                        await (0, n.setOAuthToObject)(r, "firefly_iii_auth", [], t), (0, n.setSearchParams)(s, {});
                        let o = a && a.headers ? a.headers : {};
                        return i.headers = Object.assign(Object.assign(Object.assign({}, r), o), e.headers), {
                            url: (0, n.toPathString)(s),
                            options: i
                        }
                    }, getSingleConfiguration: async (e, s = {}) => {
                        (0, n.assertParamExists)("getSingleConfiguration", "name", e);
                        const a = "/api/v1/configuration/{name}".replace("{name}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, setConfiguration: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("setConfiguration", "name", e), (0, n.assertParamExists)("setConfiguration", "value", s);
                        const i = "/api/v1/configuration/{name}".replace("{name}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "PUT"}, o), a), u = {}, h = new URLSearchParams;
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== s && h.set("value", s), u["Content-Type"] = "application/x-www-form-urlencoded", (0, n.setSearchParams)(r, {});
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), a.headers), c.data = h.toString(), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }
                }
            }, e.ConfigurationApiFp = function (t) {
                const s = (0, e.ConfigurationApiAxiosParamCreator)(t);
                return {
                    async getConfiguration(e) {
                        const a = await s.getConfiguration(e);
                        return (0, n.createRequestFunction)(a, i.default, r.BASE_PATH, t)
                    }, async getSingleConfiguration(e, a) {
                        const o = await s.getSingleConfiguration(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async setConfiguration(e, a, o) {
                        const c = await s.setConfiguration(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }
                }
            }, e.ConfigurationApiFactory = function (t, s, a) {
                const i = (0, e.ConfigurationApiFp)(t);
                return {
                    getConfiguration: t => i.getConfiguration(t).then((t => t(a, s))),
                    getSingleConfiguration: (t, e) => i.getSingleConfiguration(t, e).then((t => t(a, s))),
                    setConfiguration: (t, e, n) => i.setConfiguration(t, e, n).then((t => t(a, s)))
                }
            };

            class A extends r.BaseAPI {
                getConfiguration(t) {
                    return (0, e.ConfigurationApiFp)(this.configuration).getConfiguration(t).then((t => t(this.axios, this.basePath)))
                }

                getSingleConfiguration(t, s) {
                    return (0, e.ConfigurationApiFp)(this.configuration).getSingleConfiguration(t, s).then((t => t(this.axios, this.basePath)))
                }

                setConfiguration(t, s, a) {
                    return (0, e.ConfigurationApiFp)(this.configuration).setConfiguration(t, s, a).then((t => t(this.axios, this.basePath)))
                }
            }

            e.ConfigurationApi = A, e.CurrenciesApiAxiosParamCreator = function (t) {
                return {
                    defaultCurrency: async (e, s = {}) => {
                        (0, n.assertParamExists)("defaultCurrency", "code", e);
                        const a = "/api/v1/currencies/{code}/default".replace("{code}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "POST"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, deleteCurrency: async (e, s = {}) => {
                        (0, n.assertParamExists)("deleteCurrency", "code", e);
                        const a = "/api/v1/currencies/{code}".replace("{code}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "DELETE"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, disableCurrency: async (e, s = {}) => {
                        (0, n.assertParamExists)("disableCurrency", "code", e);
                        const a = "/api/v1/currencies/{code}/disable".replace("{code}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "POST"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, enableCurrency: async (e, s = {}) => {
                        (0, n.assertParamExists)("enableCurrency", "code", e);
                        const a = "/api/v1/currencies/{code}/enable".replace("{code}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "POST"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getCurrency: async (e, s = {}) => {
                        (0, n.assertParamExists)("getCurrency", "code", e);
                        const a = "/api/v1/currencies/{code}".replace("{code}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getDefaultCurrency: async (e = {}) => {
                        const s = new URL("/api/v1/currencies/default", n.DUMMY_BASE_URL);
                        let a;
                        t && (a = t.baseOptions);
                        const i = Object.assign(Object.assign({method: "GET"}, a), e), r = {};
                        await (0, n.setOAuthToObject)(r, "firefly_iii_auth", [], t), (0, n.setSearchParams)(s, {});
                        let o = a && a.headers ? a.headers : {};
                        return i.headers = Object.assign(Object.assign(Object.assign({}, r), o), e.headers), {
                            url: (0, n.toPathString)(s),
                            options: i
                        }
                    }, listAccountByCurrency: async (e, s, a, i, r = {}) => {
                        (0, n.assertParamExists)("listAccountByCurrency", "code", e);
                        const o = "/api/v1/currencies/{code}/accounts".replace("{code}", encodeURIComponent(String(e))),
                            c = new URL(o, n.DUMMY_BASE_URL);
                        let u;
                        t && (u = t.baseOptions);
                        const h = Object.assign(Object.assign({method: "GET"}, u), r), g = {}, l = {};
                        await (0, n.setOAuthToObject)(g, "firefly_iii_auth", [], t), void 0 !== s && (l.page = s), void 0 !== a && (l.date = a instanceof Date ? a.toISOString().substr(0, 10) : a), void 0 !== i && (l.type = i), (0, n.setSearchParams)(c, l);
                        let d = u && u.headers ? u.headers : {};
                        return h.headers = Object.assign(Object.assign(Object.assign({}, g), d), r.headers), {
                            url: (0, n.toPathString)(c),
                            options: h
                        }
                    }, listAvailableBudgetByCurrency: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("listAvailableBudgetByCurrency", "code", e);
                        const i = "/api/v1/currencies/{code}/available_budgets".replace("{code}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), a), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== s && (h.page = s), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), a.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, listBillByCurrency: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("listBillByCurrency", "code", e);
                        const i = "/api/v1/currencies/{code}/bills".replace("{code}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), a), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== s && (h.page = s), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), a.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, listBudgetLimitByCurrency: async (e, s, a, i, r = {}) => {
                        (0, n.assertParamExists)("listBudgetLimitByCurrency", "code", e);
                        const o = "/api/v1/currencies/{code}/budget_limits".replace("{code}", encodeURIComponent(String(e))),
                            c = new URL(o, n.DUMMY_BASE_URL);
                        let u;
                        t && (u = t.baseOptions);
                        const h = Object.assign(Object.assign({method: "GET"}, u), r), g = {}, l = {};
                        await (0, n.setOAuthToObject)(g, "firefly_iii_auth", [], t), void 0 !== s && (l.page = s), void 0 !== a && (l.start = a instanceof Date ? a.toISOString().substr(0, 10) : a), void 0 !== i && (l.end = i instanceof Date ? i.toISOString().substr(0, 10) : i), (0, n.setSearchParams)(c, l);
                        let d = u && u.headers ? u.headers : {};
                        return h.headers = Object.assign(Object.assign(Object.assign({}, g), d), r.headers), {
                            url: (0, n.toPathString)(c),
                            options: h
                        }
                    }, listCurrency: async (e, s = {}) => {
                        const a = new URL("/api/v1/currencies", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "GET"}, i), s), o = {}, c = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), void 0 !== e && (c.page = e), (0, n.setSearchParams)(a, c);
                        let u = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), u), s.headers), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, listRecurrenceByCurrency: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("listRecurrenceByCurrency", "code", e);
                        const i = "/api/v1/currencies/{code}/recurrences".replace("{code}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), a), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== s && (h.page = s), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), a.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, listRuleByCurrency: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("listRuleByCurrency", "code", e);
                        const i = "/api/v1/currencies/{code}/rules".replace("{code}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), a), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== s && (h.page = s), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), a.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, listTransactionByCurrency: async (e, s, a, i, r, o = {}) => {
                        (0, n.assertParamExists)("listTransactionByCurrency", "code", e);
                        const c = "/api/v1/currencies/{code}/transactions".replace("{code}", encodeURIComponent(String(e))),
                            u = new URL(c, n.DUMMY_BASE_URL);
                        let h;
                        t && (h = t.baseOptions);
                        const g = Object.assign(Object.assign({method: "GET"}, h), o), l = {}, d = {};
                        await (0, n.setOAuthToObject)(l, "firefly_iii_auth", [], t), void 0 !== s && (d.page = s), void 0 !== a && (d.start = a instanceof Date ? a.toISOString().substr(0, 10) : a), void 0 !== i && (d.end = i instanceof Date ? i.toISOString().substr(0, 10) : i), void 0 !== r && (d.type = r), (0, n.setSearchParams)(u, d);
                        let p = h && h.headers ? h.headers : {};
                        return g.headers = Object.assign(Object.assign(Object.assign({}, l), p), o.headers), {
                            url: (0, n.toPathString)(u),
                            options: g
                        }
                    }, storeCurrency: async (e, s = {}) => {
                        (0, n.assertParamExists)("storeCurrency", "currencyStore", e);
                        const a = new URL("/api/v1/currencies", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "POST"}, i), s), o = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), o["Content-Type"] = "application/json", (0, n.setSearchParams)(a, {});
                        let c = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), c), s.headers), r.data = (0, n.serializeDataIfNeeded)(e, r, t), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, updateCurrency: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("updateCurrency", "code", e), (0, n.assertParamExists)("updateCurrency", "currencyUpdate", s);
                        const i = "/api/v1/currencies/{code}".replace("{code}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "PUT"}, o), a), u = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), u["Content-Type"] = "application/vnd.api+json", (0, n.setSearchParams)(r, {});
                        let h = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), h), a.headers), c.data = (0, n.serializeDataIfNeeded)(s, c, t), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }
                }
            }, e.CurrenciesApiFp = function (t) {
                const s = (0, e.CurrenciesApiAxiosParamCreator)(t);
                return {
                    async defaultCurrency(e, a) {
                        const o = await s.defaultCurrency(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async deleteCurrency(e, a) {
                        const o = await s.deleteCurrency(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async disableCurrency(e, a) {
                        const o = await s.disableCurrency(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async enableCurrency(e, a) {
                        const o = await s.enableCurrency(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async getCurrency(e, a) {
                        const o = await s.getCurrency(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async getDefaultCurrency(e) {
                        const a = await s.getDefaultCurrency(e);
                        return (0, n.createRequestFunction)(a, i.default, r.BASE_PATH, t)
                    }, async listAccountByCurrency(e, a, o, c, u) {
                        const h = await s.listAccountByCurrency(e, a, o, c, u);
                        return (0, n.createRequestFunction)(h, i.default, r.BASE_PATH, t)
                    }, async listAvailableBudgetByCurrency(e, a, o) {
                        const c = await s.listAvailableBudgetByCurrency(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async listBillByCurrency(e, a, o) {
                        const c = await s.listBillByCurrency(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async listBudgetLimitByCurrency(e, a, o, c, u) {
                        const h = await s.listBudgetLimitByCurrency(e, a, o, c, u);
                        return (0, n.createRequestFunction)(h, i.default, r.BASE_PATH, t)
                    }, async listCurrency(e, a) {
                        const o = await s.listCurrency(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async listRecurrenceByCurrency(e, a, o) {
                        const c = await s.listRecurrenceByCurrency(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async listRuleByCurrency(e, a, o) {
                        const c = await s.listRuleByCurrency(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async listTransactionByCurrency(e, a, o, c, u, h) {
                        const g = await s.listTransactionByCurrency(e, a, o, c, u, h);
                        return (0, n.createRequestFunction)(g, i.default, r.BASE_PATH, t)
                    }, async storeCurrency(e, a) {
                        const o = await s.storeCurrency(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async updateCurrency(e, a, o) {
                        const c = await s.updateCurrency(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }
                }
            }, e.CurrenciesApiFactory = function (t, s, a) {
                const i = (0, e.CurrenciesApiFp)(t);
                return {
                    defaultCurrency: (t, e) => i.defaultCurrency(t, e).then((t => t(a, s))),
                    deleteCurrency: (t, e) => i.deleteCurrency(t, e).then((t => t(a, s))),
                    disableCurrency: (t, e) => i.disableCurrency(t, e).then((t => t(a, s))),
                    enableCurrency: (t, e) => i.enableCurrency(t, e).then((t => t(a, s))),
                    getCurrency: (t, e) => i.getCurrency(t, e).then((t => t(a, s))),
                    getDefaultCurrency: t => i.getDefaultCurrency(t).then((t => t(a, s))),
                    listAccountByCurrency: (t, e, n, r, o) => i.listAccountByCurrency(t, e, n, r, o).then((t => t(a, s))),
                    listAvailableBudgetByCurrency: (t, e, n) => i.listAvailableBudgetByCurrency(t, e, n).then((t => t(a, s))),
                    listBillByCurrency: (t, e, n) => i.listBillByCurrency(t, e, n).then((t => t(a, s))),
                    listBudgetLimitByCurrency: (t, e, n, r, o) => i.listBudgetLimitByCurrency(t, e, n, r, o).then((t => t(a, s))),
                    listCurrency: (t, e) => i.listCurrency(t, e).then((t => t(a, s))),
                    listRecurrenceByCurrency: (t, e, n) => i.listRecurrenceByCurrency(t, e, n).then((t => t(a, s))),
                    listRuleByCurrency: (t, e, n) => i.listRuleByCurrency(t, e, n).then((t => t(a, s))),
                    listTransactionByCurrency: (t, e, n, r, o, c) => i.listTransactionByCurrency(t, e, n, r, o, c).then((t => t(a, s))),
                    storeCurrency: (t, e) => i.storeCurrency(t, e).then((t => t(a, s))),
                    updateCurrency: (t, e, n) => i.updateCurrency(t, e, n).then((t => t(a, s)))
                }
            };

            class O extends r.BaseAPI {
                defaultCurrency(t, s) {
                    return (0, e.CurrenciesApiFp)(this.configuration).defaultCurrency(t, s).then((t => t(this.axios, this.basePath)))
                }

                deleteCurrency(t, s) {
                    return (0, e.CurrenciesApiFp)(this.configuration).deleteCurrency(t, s).then((t => t(this.axios, this.basePath)))
                }

                disableCurrency(t, s) {
                    return (0, e.CurrenciesApiFp)(this.configuration).disableCurrency(t, s).then((t => t(this.axios, this.basePath)))
                }

                enableCurrency(t, s) {
                    return (0, e.CurrenciesApiFp)(this.configuration).enableCurrency(t, s).then((t => t(this.axios, this.basePath)))
                }

                getCurrency(t, s) {
                    return (0, e.CurrenciesApiFp)(this.configuration).getCurrency(t, s).then((t => t(this.axios, this.basePath)))
                }

                getDefaultCurrency(t) {
                    return (0, e.CurrenciesApiFp)(this.configuration).getDefaultCurrency(t).then((t => t(this.axios, this.basePath)))
                }

                listAccountByCurrency(t, s, a, i, n) {
                    return (0, e.CurrenciesApiFp)(this.configuration).listAccountByCurrency(t, s, a, i, n).then((t => t(this.axios, this.basePath)))
                }

                listAvailableBudgetByCurrency(t, s, a) {
                    return (0, e.CurrenciesApiFp)(this.configuration).listAvailableBudgetByCurrency(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                listBillByCurrency(t, s, a) {
                    return (0, e.CurrenciesApiFp)(this.configuration).listBillByCurrency(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                listBudgetLimitByCurrency(t, s, a, i, n) {
                    return (0, e.CurrenciesApiFp)(this.configuration).listBudgetLimitByCurrency(t, s, a, i, n).then((t => t(this.axios, this.basePath)))
                }

                listCurrency(t, s) {
                    return (0, e.CurrenciesApiFp)(this.configuration).listCurrency(t, s).then((t => t(this.axios, this.basePath)))
                }

                listRecurrenceByCurrency(t, s, a) {
                    return (0, e.CurrenciesApiFp)(this.configuration).listRecurrenceByCurrency(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                listRuleByCurrency(t, s, a) {
                    return (0, e.CurrenciesApiFp)(this.configuration).listRuleByCurrency(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                listTransactionByCurrency(t, s, a, i, n, r) {
                    return (0, e.CurrenciesApiFp)(this.configuration).listTransactionByCurrency(t, s, a, i, n, r).then((t => t(this.axios, this.basePath)))
                }

                storeCurrency(t, s) {
                    return (0, e.CurrenciesApiFp)(this.configuration).storeCurrency(t, s).then((t => t(this.axios, this.basePath)))
                }

                updateCurrency(t, s, a) {
                    return (0, e.CurrenciesApiFp)(this.configuration).updateCurrency(t, s, a).then((t => t(this.axios, this.basePath)))
                }
            }

            e.CurrenciesApi = O, e.DataApiAxiosParamCreator = function (t) {
                return {
                    bulkUpdateTransactions: async (e, s = {}) => {
                        (0, n.assertParamExists)("bulkUpdateTransactions", "query", e);
                        const a = new URL("/api/v1/data/bulk/transactions", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "POST"}, i), s), o = {}, c = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), void 0 !== e && (c.query = e), (0, n.setSearchParams)(a, c);
                        let u = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), u), s.headers), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, destroyData: async (e, s = {}) => {
                        (0, n.assertParamExists)("destroyData", "objects", e);
                        const a = new URL("/api/v1/data/destroy", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "DELETE"}, i), s), o = {}, c = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), void 0 !== e && (c.objects = e), (0, n.setSearchParams)(a, c);
                        let u = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), u), s.headers), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, exportAccounts: async (e, s = {}) => {
                        const a = new URL("/api/v1/data/export/accounts", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "GET"}, i), s), o = {}, c = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), void 0 !== e && (c.type = e), (0, n.setSearchParams)(a, c);
                        let u = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), u), s.headers), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, exportBills: async (e, s = {}) => {
                        const a = new URL("/api/v1/data/export/bills", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "GET"}, i), s), o = {}, c = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), void 0 !== e && (c.type = e), (0, n.setSearchParams)(a, c);
                        let u = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), u), s.headers), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, exportBudgets: async (e, s = {}) => {
                        const a = new URL("/api/v1/data/export/budgets", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "GET"}, i), s), o = {}, c = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), void 0 !== e && (c.type = e), (0, n.setSearchParams)(a, c);
                        let u = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), u), s.headers), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, exportCategories: async (e, s = {}) => {
                        const a = new URL("/api/v1/data/export/categories", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "GET"}, i), s), o = {}, c = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), void 0 !== e && (c.type = e), (0, n.setSearchParams)(a, c);
                        let u = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), u), s.headers), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, exportPiggies: async (e, s = {}) => {
                        const a = new URL("/api/v1/data/export/piggy-banks", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "GET"}, i), s), o = {}, c = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), void 0 !== e && (c.type = e), (0, n.setSearchParams)(a, c);
                        let u = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), u), s.headers), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, exportRecurring: async (e, s = {}) => {
                        const a = new URL("/api/v1/data/export/recurring", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "GET"}, i), s), o = {}, c = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), void 0 !== e && (c.type = e), (0, n.setSearchParams)(a, c);
                        let u = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), u), s.headers), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, exportRules: async (e, s = {}) => {
                        const a = new URL("/api/v1/data/export/rules", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "GET"}, i), s), o = {}, c = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), void 0 !== e && (c.type = e), (0, n.setSearchParams)(a, c);
                        let u = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), u), s.headers), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, exportTags: async (e, s = {}) => {
                        const a = new URL("/api/v1/data/export/tags", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "GET"}, i), s), o = {}, c = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), void 0 !== e && (c.type = e), (0, n.setSearchParams)(a, c);
                        let u = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), u), s.headers), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, exportTransactions: async (e, s, a, i, r = {}) => {
                        (0, n.assertParamExists)("exportTransactions", "start", e), (0, n.assertParamExists)("exportTransactions", "end", s);
                        const o = new URL("/api/v1/data/export/transactions", n.DUMMY_BASE_URL);
                        let c;
                        t && (c = t.baseOptions);
                        const u = Object.assign(Object.assign({method: "GET"}, c), r), h = {}, g = {};
                        await (0, n.setOAuthToObject)(h, "firefly_iii_auth", [], t), void 0 !== e && (g.start = e instanceof Date ? e.toISOString().substr(0, 10) : e), void 0 !== s && (g.end = s instanceof Date ? s.toISOString().substr(0, 10) : s), void 0 !== a && (g.accounts = a), void 0 !== i && (g.type = i), (0, n.setSearchParams)(o, g);
                        let l = c && c.headers ? c.headers : {};
                        return u.headers = Object.assign(Object.assign(Object.assign({}, h), l), r.headers), {
                            url: (0, n.toPathString)(o),
                            options: u
                        }
                    }
                }
            }, e.DataApiFp = function (t) {
                const s = (0, e.DataApiAxiosParamCreator)(t);
                return {
                    async bulkUpdateTransactions(e, a) {
                        const o = await s.bulkUpdateTransactions(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async destroyData(e, a) {
                        const o = await s.destroyData(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async exportAccounts(e, a) {
                        const o = await s.exportAccounts(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async exportBills(e, a) {
                        const o = await s.exportBills(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async exportBudgets(e, a) {
                        const o = await s.exportBudgets(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async exportCategories(e, a) {
                        const o = await s.exportCategories(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async exportPiggies(e, a) {
                        const o = await s.exportPiggies(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async exportRecurring(e, a) {
                        const o = await s.exportRecurring(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async exportRules(e, a) {
                        const o = await s.exportRules(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async exportTags(e, a) {
                        const o = await s.exportTags(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async exportTransactions(e, a, o, c, u) {
                        const h = await s.exportTransactions(e, a, o, c, u);
                        return (0, n.createRequestFunction)(h, i.default, r.BASE_PATH, t)
                    }
                }
            }, e.DataApiFactory = function (t, s, a) {
                const i = (0, e.DataApiFp)(t);
                return {
                    bulkUpdateTransactions: (t, e) => i.bulkUpdateTransactions(t, e).then((t => t(a, s))),
                    destroyData: (t, e) => i.destroyData(t, e).then((t => t(a, s))),
                    exportAccounts: (t, e) => i.exportAccounts(t, e).then((t => t(a, s))),
                    exportBills: (t, e) => i.exportBills(t, e).then((t => t(a, s))),
                    exportBudgets: (t, e) => i.exportBudgets(t, e).then((t => t(a, s))),
                    exportCategories: (t, e) => i.exportCategories(t, e).then((t => t(a, s))),
                    exportPiggies: (t, e) => i.exportPiggies(t, e).then((t => t(a, s))),
                    exportRecurring: (t, e) => i.exportRecurring(t, e).then((t => t(a, s))),
                    exportRules: (t, e) => i.exportRules(t, e).then((t => t(a, s))),
                    exportTags: (t, e) => i.exportTags(t, e).then((t => t(a, s))),
                    exportTransactions: (t, e, n, r, o) => i.exportTransactions(t, e, n, r, o).then((t => t(a, s)))
                }
            };

            class f extends r.BaseAPI {
                bulkUpdateTransactions(t, s) {
                    return (0, e.DataApiFp)(this.configuration).bulkUpdateTransactions(t, s).then((t => t(this.axios, this.basePath)))
                }

                destroyData(t, s) {
                    return (0, e.DataApiFp)(this.configuration).destroyData(t, s).then((t => t(this.axios, this.basePath)))
                }

                exportAccounts(t, s) {
                    return (0, e.DataApiFp)(this.configuration).exportAccounts(t, s).then((t => t(this.axios, this.basePath)))
                }

                exportBills(t, s) {
                    return (0, e.DataApiFp)(this.configuration).exportBills(t, s).then((t => t(this.axios, this.basePath)))
                }

                exportBudgets(t, s) {
                    return (0, e.DataApiFp)(this.configuration).exportBudgets(t, s).then((t => t(this.axios, this.basePath)))
                }

                exportCategories(t, s) {
                    return (0, e.DataApiFp)(this.configuration).exportCategories(t, s).then((t => t(this.axios, this.basePath)))
                }

                exportPiggies(t, s) {
                    return (0, e.DataApiFp)(this.configuration).exportPiggies(t, s).then((t => t(this.axios, this.basePath)))
                }

                exportRecurring(t, s) {
                    return (0, e.DataApiFp)(this.configuration).exportRecurring(t, s).then((t => t(this.axios, this.basePath)))
                }

                exportRules(t, s) {
                    return (0, e.DataApiFp)(this.configuration).exportRules(t, s).then((t => t(this.axios, this.basePath)))
                }

                exportTags(t, s) {
                    return (0, e.DataApiFp)(this.configuration).exportTags(t, s).then((t => t(this.axios, this.basePath)))
                }

                exportTransactions(t, s, a, i, n) {
                    return (0, e.DataApiFp)(this.configuration).exportTransactions(t, s, a, i, n).then((t => t(this.axios, this.basePath)))
                }
            }

            e.DataApi = f, e.InsightApiAxiosParamCreator = function (t) {
                return {
                    insightExpenseAsset: async (e, s, a, i = {}) => {
                        (0, n.assertParamExists)("insightExpenseAsset", "start", e), (0, n.assertParamExists)("insightExpenseAsset", "end", s);
                        const r = new URL("/api/v1/insight/expense/asset", n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), i), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== e && (h.start = e instanceof Date ? e.toISOString().substr(0, 10) : e), void 0 !== s && (h.end = s instanceof Date ? s.toISOString().substr(0, 10) : s), a && (h["accounts[]"] = a), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), i.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, insightExpenseBill: async (e, s, a, i, r = {}) => {
                        (0, n.assertParamExists)("insightExpenseBill", "start", e), (0, n.assertParamExists)("insightExpenseBill", "end", s);
                        const o = new URL("/api/v1/insight/expense/bill", n.DUMMY_BASE_URL);
                        let c;
                        t && (c = t.baseOptions);
                        const u = Object.assign(Object.assign({method: "GET"}, c), r), h = {}, g = {};
                        await (0, n.setOAuthToObject)(h, "firefly_iii_auth", [], t), void 0 !== e && (g.start = e instanceof Date ? e.toISOString().substr(0, 10) : e), void 0 !== s && (g.end = s instanceof Date ? s.toISOString().substr(0, 10) : s), a && (g["bills[]"] = a), i && (g["accounts[]"] = i), (0, n.setSearchParams)(o, g);
                        let l = c && c.headers ? c.headers : {};
                        return u.headers = Object.assign(Object.assign(Object.assign({}, h), l), r.headers), {
                            url: (0, n.toPathString)(o),
                            options: u
                        }
                    }, insightExpenseBudget: async (e, s, a, i, r = {}) => {
                        (0, n.assertParamExists)("insightExpenseBudget", "start", e), (0, n.assertParamExists)("insightExpenseBudget", "end", s);
                        const o = new URL("/api/v1/insight/expense/budget", n.DUMMY_BASE_URL);
                        let c;
                        t && (c = t.baseOptions);
                        const u = Object.assign(Object.assign({method: "GET"}, c), r), h = {}, g = {};
                        await (0, n.setOAuthToObject)(h, "firefly_iii_auth", [], t), void 0 !== e && (g.start = e instanceof Date ? e.toISOString().substr(0, 10) : e), void 0 !== s && (g.end = s instanceof Date ? s.toISOString().substr(0, 10) : s), a && (g["budgets[]"] = a), i && (g["accounts[]"] = i), (0, n.setSearchParams)(o, g);
                        let l = c && c.headers ? c.headers : {};
                        return u.headers = Object.assign(Object.assign(Object.assign({}, h), l), r.headers), {
                            url: (0, n.toPathString)(o),
                            options: u
                        }
                    }, insightExpenseCategory: async (e, s, a, i, r = {}) => {
                        (0, n.assertParamExists)("insightExpenseCategory", "start", e), (0, n.assertParamExists)("insightExpenseCategory", "end", s);
                        const o = new URL("/api/v1/insight/expense/category", n.DUMMY_BASE_URL);
                        let c;
                        t && (c = t.baseOptions);
                        const u = Object.assign(Object.assign({method: "GET"}, c), r), h = {}, g = {};
                        await (0, n.setOAuthToObject)(h, "firefly_iii_auth", [], t), void 0 !== e && (g.start = e instanceof Date ? e.toISOString().substr(0, 10) : e), void 0 !== s && (g.end = s instanceof Date ? s.toISOString().substr(0, 10) : s), a && (g["categories[]"] = a), i && (g["accounts[]"] = i), (0, n.setSearchParams)(o, g);
                        let l = c && c.headers ? c.headers : {};
                        return u.headers = Object.assign(Object.assign(Object.assign({}, h), l), r.headers), {
                            url: (0, n.toPathString)(o),
                            options: u
                        }
                    }, insightExpenseExpense: async (e, s, a, i = {}) => {
                        (0, n.assertParamExists)("insightExpenseExpense", "start", e), (0, n.assertParamExists)("insightExpenseExpense", "end", s);
                        const r = new URL("/api/v1/insight/expense/expense", n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), i), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== e && (h.start = e instanceof Date ? e.toISOString().substr(0, 10) : e), void 0 !== s && (h.end = s instanceof Date ? s.toISOString().substr(0, 10) : s), a && (h["accounts[]"] = a), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), i.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, insightExpenseNoBill: async (e, s, a, i = {}) => {
                        (0, n.assertParamExists)("insightExpenseNoBill", "start", e), (0, n.assertParamExists)("insightExpenseNoBill", "end", s);
                        const r = new URL("/api/v1/insight/expense/no-bill", n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), i), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== e && (h.start = e instanceof Date ? e.toISOString().substr(0, 10) : e), void 0 !== s && (h.end = s instanceof Date ? s.toISOString().substr(0, 10) : s), a && (h["accounts[]"] = a), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), i.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, insightExpenseNoBudget: async (e, s, a, i = {}) => {
                        (0, n.assertParamExists)("insightExpenseNoBudget", "start", e), (0, n.assertParamExists)("insightExpenseNoBudget", "end", s);
                        const r = new URL("/api/v1/insight/expense/no-budget", n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), i), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== e && (h.start = e instanceof Date ? e.toISOString().substr(0, 10) : e), void 0 !== s && (h.end = s instanceof Date ? s.toISOString().substr(0, 10) : s), a && (h["accounts[]"] = a), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), i.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, insightExpenseNoCategory: async (e, s, a, i = {}) => {
                        (0, n.assertParamExists)("insightExpenseNoCategory", "start", e), (0, n.assertParamExists)("insightExpenseNoCategory", "end", s);
                        const r = new URL("/api/v1/insight/expense/no-category", n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), i), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== e && (h.start = e instanceof Date ? e.toISOString().substr(0, 10) : e), void 0 !== s && (h.end = s instanceof Date ? s.toISOString().substr(0, 10) : s), a && (h["accounts[]"] = a), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), i.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, insightExpenseNoTag: async (e, s, a, i = {}) => {
                        (0, n.assertParamExists)("insightExpenseNoTag", "start", e), (0, n.assertParamExists)("insightExpenseNoTag", "end", s);
                        const r = new URL("/api/v1/insight/expense/no-tag", n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), i), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== e && (h.start = e instanceof Date ? e.toISOString().substr(0, 10) : e), void 0 !== s && (h.end = s instanceof Date ? s.toISOString().substr(0, 10) : s), a && (h["accounts[]"] = a), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), i.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, insightExpenseTag: async (e, s, a, i, r = {}) => {
                        (0, n.assertParamExists)("insightExpenseTag", "start", e), (0, n.assertParamExists)("insightExpenseTag", "end", s);
                        const o = new URL("/api/v1/insight/expense/tag", n.DUMMY_BASE_URL);
                        let c;
                        t && (c = t.baseOptions);
                        const u = Object.assign(Object.assign({method: "GET"}, c), r), h = {}, g = {};
                        await (0, n.setOAuthToObject)(h, "firefly_iii_auth", [], t), void 0 !== e && (g.start = e instanceof Date ? e.toISOString().substr(0, 10) : e), void 0 !== s && (g.end = s instanceof Date ? s.toISOString().substr(0, 10) : s), a && (g["tags[]"] = a), i && (g["accounts[]"] = i), (0, n.setSearchParams)(o, g);
                        let l = c && c.headers ? c.headers : {};
                        return u.headers = Object.assign(Object.assign(Object.assign({}, h), l), r.headers), {
                            url: (0, n.toPathString)(o),
                            options: u
                        }
                    }, insightExpenseTotal: async (e, s, a, i = {}) => {
                        (0, n.assertParamExists)("insightExpenseTotal", "start", e), (0, n.assertParamExists)("insightExpenseTotal", "end", s);
                        const r = new URL("/api/v1/insight/expense/total", n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), i), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== e && (h.start = e instanceof Date ? e.toISOString().substr(0, 10) : e), void 0 !== s && (h.end = s instanceof Date ? s.toISOString().substr(0, 10) : s), a && (h["accounts[]"] = a), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), i.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, insightIncomeAsset: async (e, s, a, i = {}) => {
                        (0, n.assertParamExists)("insightIncomeAsset", "start", e), (0, n.assertParamExists)("insightIncomeAsset", "end", s);
                        const r = new URL("/api/v1/insight/income/asset", n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), i), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== e && (h.start = e instanceof Date ? e.toISOString().substr(0, 10) : e), void 0 !== s && (h.end = s instanceof Date ? s.toISOString().substr(0, 10) : s), a && (h["accounts[]"] = a), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), i.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, insightIncomeCategory: async (e, s, a, i, r = {}) => {
                        (0, n.assertParamExists)("insightIncomeCategory", "start", e), (0, n.assertParamExists)("insightIncomeCategory", "end", s);
                        const o = new URL("/api/v1/insight/income/category", n.DUMMY_BASE_URL);
                        let c;
                        t && (c = t.baseOptions);
                        const u = Object.assign(Object.assign({method: "GET"}, c), r), h = {}, g = {};
                        await (0, n.setOAuthToObject)(h, "firefly_iii_auth", [], t), void 0 !== e && (g.start = e instanceof Date ? e.toISOString().substr(0, 10) : e), void 0 !== s && (g.end = s instanceof Date ? s.toISOString().substr(0, 10) : s), a && (g["categories[]"] = a), i && (g["accounts[]"] = i), (0, n.setSearchParams)(o, g);
                        let l = c && c.headers ? c.headers : {};
                        return u.headers = Object.assign(Object.assign(Object.assign({}, h), l), r.headers), {
                            url: (0, n.toPathString)(o),
                            options: u
                        }
                    }, insightIncomeNoCategory: async (e, s, a, i = {}) => {
                        (0, n.assertParamExists)("insightIncomeNoCategory", "start", e), (0, n.assertParamExists)("insightIncomeNoCategory", "end", s);
                        const r = new URL("/api/v1/insight/income/no-category", n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), i), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== e && (h.start = e instanceof Date ? e.toISOString().substr(0, 10) : e), void 0 !== s && (h.end = s instanceof Date ? s.toISOString().substr(0, 10) : s), a && (h["accounts[]"] = a), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), i.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, insightIncomeNoTag: async (e, s, a, i = {}) => {
                        (0, n.assertParamExists)("insightIncomeNoTag", "start", e), (0, n.assertParamExists)("insightIncomeNoTag", "end", s);
                        const r = new URL("/api/v1/insight/income/no-tag", n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), i), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== e && (h.start = e instanceof Date ? e.toISOString().substr(0, 10) : e), void 0 !== s && (h.end = s instanceof Date ? s.toISOString().substr(0, 10) : s), a && (h["accounts[]"] = a), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), i.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, insightIncomeRevenue: async (e, s, a, i = {}) => {
                        (0, n.assertParamExists)("insightIncomeRevenue", "start", e), (0, n.assertParamExists)("insightIncomeRevenue", "end", s);
                        const r = new URL("/api/v1/insight/income/revenue", n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), i), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== e && (h.start = e instanceof Date ? e.toISOString().substr(0, 10) : e), void 0 !== s && (h.end = s instanceof Date ? s.toISOString().substr(0, 10) : s), a && (h["accounts[]"] = a), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), i.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, insightIncomeTag: async (e, s, a, i, r = {}) => {
                        (0, n.assertParamExists)("insightIncomeTag", "start", e), (0, n.assertParamExists)("insightIncomeTag", "end", s);
                        const o = new URL("/api/v1/insight/income/tag", n.DUMMY_BASE_URL);
                        let c;
                        t && (c = t.baseOptions);
                        const u = Object.assign(Object.assign({method: "GET"}, c), r), h = {}, g = {};
                        await (0, n.setOAuthToObject)(h, "firefly_iii_auth", [], t), void 0 !== e && (g.start = e instanceof Date ? e.toISOString().substr(0, 10) : e), void 0 !== s && (g.end = s instanceof Date ? s.toISOString().substr(0, 10) : s), a && (g["tags[]"] = a), i && (g["accounts[]"] = i), (0, n.setSearchParams)(o, g);
                        let l = c && c.headers ? c.headers : {};
                        return u.headers = Object.assign(Object.assign(Object.assign({}, h), l), r.headers), {
                            url: (0, n.toPathString)(o),
                            options: u
                        }
                    }, insightIncomeTotal: async (e, s, a, i = {}) => {
                        (0, n.assertParamExists)("insightIncomeTotal", "start", e), (0, n.assertParamExists)("insightIncomeTotal", "end", s);
                        const r = new URL("/api/v1/insight/income/total", n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), i), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== e && (h.start = e instanceof Date ? e.toISOString().substr(0, 10) : e), void 0 !== s && (h.end = s instanceof Date ? s.toISOString().substr(0, 10) : s), a && (h["accounts[]"] = a), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), i.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, insightTransferCategory: async (e, s, a, i, r = {}) => {
                        (0, n.assertParamExists)("insightTransferCategory", "start", e), (0, n.assertParamExists)("insightTransferCategory", "end", s);
                        const o = new URL("/api/v1/insight/transfer/category", n.DUMMY_BASE_URL);
                        let c;
                        t && (c = t.baseOptions);
                        const u = Object.assign(Object.assign({method: "GET"}, c), r), h = {}, g = {};
                        await (0, n.setOAuthToObject)(h, "firefly_iii_auth", [], t), void 0 !== e && (g.start = e instanceof Date ? e.toISOString().substr(0, 10) : e), void 0 !== s && (g.end = s instanceof Date ? s.toISOString().substr(0, 10) : s), a && (g["categories[]"] = a), i && (g["accounts[]"] = i), (0, n.setSearchParams)(o, g);
                        let l = c && c.headers ? c.headers : {};
                        return u.headers = Object.assign(Object.assign(Object.assign({}, h), l), r.headers), {
                            url: (0, n.toPathString)(o),
                            options: u
                        }
                    }, insightTransferNoCategory: async (e, s, a, i = {}) => {
                        (0, n.assertParamExists)("insightTransferNoCategory", "start", e), (0, n.assertParamExists)("insightTransferNoCategory", "end", s);
                        const r = new URL("/api/v1/insight/transfer/no-category", n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), i), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== e && (h.start = e instanceof Date ? e.toISOString().substr(0, 10) : e), void 0 !== s && (h.end = s instanceof Date ? s.toISOString().substr(0, 10) : s), a && (h["accounts[]"] = a), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), i.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, insightTransferNoTag: async (e, s, a, i = {}) => {
                        (0, n.assertParamExists)("insightTransferNoTag", "start", e), (0, n.assertParamExists)("insightTransferNoTag", "end", s);
                        const r = new URL("/api/v1/insight/transfer/no-tag", n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), i), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== e && (h.start = e instanceof Date ? e.toISOString().substr(0, 10) : e), void 0 !== s && (h.end = s instanceof Date ? s.toISOString().substr(0, 10) : s), a && (h["accounts[]"] = a), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), i.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, insightTransferTag: async (e, s, a, i, r = {}) => {
                        (0, n.assertParamExists)("insightTransferTag", "start", e), (0, n.assertParamExists)("insightTransferTag", "end", s);
                        const o = new URL("/api/v1/insight/transfer/tag", n.DUMMY_BASE_URL);
                        let c;
                        t && (c = t.baseOptions);
                        const u = Object.assign(Object.assign({method: "GET"}, c), r), h = {}, g = {};
                        await (0, n.setOAuthToObject)(h, "firefly_iii_auth", [], t), void 0 !== e && (g.start = e instanceof Date ? e.toISOString().substr(0, 10) : e), void 0 !== s && (g.end = s instanceof Date ? s.toISOString().substr(0, 10) : s), a && (g["tags[]"] = a), i && (g["accounts[]"] = i), (0, n.setSearchParams)(o, g);
                        let l = c && c.headers ? c.headers : {};
                        return u.headers = Object.assign(Object.assign(Object.assign({}, h), l), r.headers), {
                            url: (0, n.toPathString)(o),
                            options: u
                        }
                    }, insightTransferTotal: async (e, s, a, i = {}) => {
                        (0, n.assertParamExists)("insightTransferTotal", "start", e), (0, n.assertParamExists)("insightTransferTotal", "end", s);
                        const r = new URL("/api/v1/insight/transfer/total", n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), i), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== e && (h.start = e instanceof Date ? e.toISOString().substr(0, 10) : e), void 0 !== s && (h.end = s instanceof Date ? s.toISOString().substr(0, 10) : s), a && (h["accounts[]"] = a), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), i.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, insightTransfers: async (e, s, a, i = {}) => {
                        (0, n.assertParamExists)("insightTransfers", "start", e), (0, n.assertParamExists)("insightTransfers", "end", s);
                        const r = new URL("/api/v1/insight/transfer/asset", n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), i), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== e && (h.start = e instanceof Date ? e.toISOString().substr(0, 10) : e), void 0 !== s && (h.end = s instanceof Date ? s.toISOString().substr(0, 10) : s), a && (h["accounts[]"] = a), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), i.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }
                }
            }, e.InsightApiFp = function (t) {
                const s = (0, e.InsightApiAxiosParamCreator)(t);
                return {
                    async insightExpenseAsset(e, a, o, c) {
                        const u = await s.insightExpenseAsset(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }, async insightExpenseBill(e, a, o, c, u) {
                        const h = await s.insightExpenseBill(e, a, o, c, u);
                        return (0, n.createRequestFunction)(h, i.default, r.BASE_PATH, t)
                    }, async insightExpenseBudget(e, a, o, c, u) {
                        const h = await s.insightExpenseBudget(e, a, o, c, u);
                        return (0, n.createRequestFunction)(h, i.default, r.BASE_PATH, t)
                    }, async insightExpenseCategory(e, a, o, c, u) {
                        const h = await s.insightExpenseCategory(e, a, o, c, u);
                        return (0, n.createRequestFunction)(h, i.default, r.BASE_PATH, t)
                    }, async insightExpenseExpense(e, a, o, c) {
                        const u = await s.insightExpenseExpense(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }, async insightExpenseNoBill(e, a, o, c) {
                        const u = await s.insightExpenseNoBill(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }, async insightExpenseNoBudget(e, a, o, c) {
                        const u = await s.insightExpenseNoBudget(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }, async insightExpenseNoCategory(e, a, o, c) {
                        const u = await s.insightExpenseNoCategory(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }, async insightExpenseNoTag(e, a, o, c) {
                        const u = await s.insightExpenseNoTag(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }, async insightExpenseTag(e, a, o, c, u) {
                        const h = await s.insightExpenseTag(e, a, o, c, u);
                        return (0, n.createRequestFunction)(h, i.default, r.BASE_PATH, t)
                    }, async insightExpenseTotal(e, a, o, c) {
                        const u = await s.insightExpenseTotal(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }, async insightIncomeAsset(e, a, o, c) {
                        const u = await s.insightIncomeAsset(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }, async insightIncomeCategory(e, a, o, c, u) {
                        const h = await s.insightIncomeCategory(e, a, o, c, u);
                        return (0, n.createRequestFunction)(h, i.default, r.BASE_PATH, t)
                    }, async insightIncomeNoCategory(e, a, o, c) {
                        const u = await s.insightIncomeNoCategory(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }, async insightIncomeNoTag(e, a, o, c) {
                        const u = await s.insightIncomeNoTag(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }, async insightIncomeRevenue(e, a, o, c) {
                        const u = await s.insightIncomeRevenue(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }, async insightIncomeTag(e, a, o, c, u) {
                        const h = await s.insightIncomeTag(e, a, o, c, u);
                        return (0, n.createRequestFunction)(h, i.default, r.BASE_PATH, t)
                    }, async insightIncomeTotal(e, a, o, c) {
                        const u = await s.insightIncomeTotal(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }, async insightTransferCategory(e, a, o, c, u) {
                        const h = await s.insightTransferCategory(e, a, o, c, u);
                        return (0, n.createRequestFunction)(h, i.default, r.BASE_PATH, t)
                    }, async insightTransferNoCategory(e, a, o, c) {
                        const u = await s.insightTransferNoCategory(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }, async insightTransferNoTag(e, a, o, c) {
                        const u = await s.insightTransferNoTag(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }, async insightTransferTag(e, a, o, c, u) {
                        const h = await s.insightTransferTag(e, a, o, c, u);
                        return (0, n.createRequestFunction)(h, i.default, r.BASE_PATH, t)
                    }, async insightTransferTotal(e, a, o, c) {
                        const u = await s.insightTransferTotal(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }, async insightTransfers(e, a, o, c) {
                        const u = await s.insightTransfers(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }
                }
            }, e.InsightApiFactory = function (t, s, a) {
                const i = (0, e.InsightApiFp)(t);
                return {
                    insightExpenseAsset: (t, e, n, r) => i.insightExpenseAsset(t, e, n, r).then((t => t(a, s))),
                    insightExpenseBill: (t, e, n, r, o) => i.insightExpenseBill(t, e, n, r, o).then((t => t(a, s))),
                    insightExpenseBudget: (t, e, n, r, o) => i.insightExpenseBudget(t, e, n, r, o).then((t => t(a, s))),
                    insightExpenseCategory: (t, e, n, r, o) => i.insightExpenseCategory(t, e, n, r, o).then((t => t(a, s))),
                    insightExpenseExpense: (t, e, n, r) => i.insightExpenseExpense(t, e, n, r).then((t => t(a, s))),
                    insightExpenseNoBill: (t, e, n, r) => i.insightExpenseNoBill(t, e, n, r).then((t => t(a, s))),
                    insightExpenseNoBudget: (t, e, n, r) => i.insightExpenseNoBudget(t, e, n, r).then((t => t(a, s))),
                    insightExpenseNoCategory: (t, e, n, r) => i.insightExpenseNoCategory(t, e, n, r).then((t => t(a, s))),
                    insightExpenseNoTag: (t, e, n, r) => i.insightExpenseNoTag(t, e, n, r).then((t => t(a, s))),
                    insightExpenseTag: (t, e, n, r, o) => i.insightExpenseTag(t, e, n, r, o).then((t => t(a, s))),
                    insightExpenseTotal: (t, e, n, r) => i.insightExpenseTotal(t, e, n, r).then((t => t(a, s))),
                    insightIncomeAsset: (t, e, n, r) => i.insightIncomeAsset(t, e, n, r).then((t => t(a, s))),
                    insightIncomeCategory: (t, e, n, r, o) => i.insightIncomeCategory(t, e, n, r, o).then((t => t(a, s))),
                    insightIncomeNoCategory: (t, e, n, r) => i.insightIncomeNoCategory(t, e, n, r).then((t => t(a, s))),
                    insightIncomeNoTag: (t, e, n, r) => i.insightIncomeNoTag(t, e, n, r).then((t => t(a, s))),
                    insightIncomeRevenue: (t, e, n, r) => i.insightIncomeRevenue(t, e, n, r).then((t => t(a, s))),
                    insightIncomeTag: (t, e, n, r, o) => i.insightIncomeTag(t, e, n, r, o).then((t => t(a, s))),
                    insightIncomeTotal: (t, e, n, r) => i.insightIncomeTotal(t, e, n, r).then((t => t(a, s))),
                    insightTransferCategory: (t, e, n, r, o) => i.insightTransferCategory(t, e, n, r, o).then((t => t(a, s))),
                    insightTransferNoCategory: (t, e, n, r) => i.insightTransferNoCategory(t, e, n, r).then((t => t(a, s))),
                    insightTransferNoTag: (t, e, n, r) => i.insightTransferNoTag(t, e, n, r).then((t => t(a, s))),
                    insightTransferTag: (t, e, n, r, o) => i.insightTransferTag(t, e, n, r, o).then((t => t(a, s))),
                    insightTransferTotal: (t, e, n, r) => i.insightTransferTotal(t, e, n, r).then((t => t(a, s))),
                    insightTransfers: (t, e, n, r) => i.insightTransfers(t, e, n, r).then((t => t(a, s)))
                }
            };

            class y extends r.BaseAPI {
                insightExpenseAsset(t, s, a, i) {
                    return (0, e.InsightApiFp)(this.configuration).insightExpenseAsset(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }

                insightExpenseBill(t, s, a, i, n) {
                    return (0, e.InsightApiFp)(this.configuration).insightExpenseBill(t, s, a, i, n).then((t => t(this.axios, this.basePath)))
                }

                insightExpenseBudget(t, s, a, i, n) {
                    return (0, e.InsightApiFp)(this.configuration).insightExpenseBudget(t, s, a, i, n).then((t => t(this.axios, this.basePath)))
                }

                insightExpenseCategory(t, s, a, i, n) {
                    return (0, e.InsightApiFp)(this.configuration).insightExpenseCategory(t, s, a, i, n).then((t => t(this.axios, this.basePath)))
                }

                insightExpenseExpense(t, s, a, i) {
                    return (0, e.InsightApiFp)(this.configuration).insightExpenseExpense(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }

                insightExpenseNoBill(t, s, a, i) {
                    return (0, e.InsightApiFp)(this.configuration).insightExpenseNoBill(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }

                insightExpenseNoBudget(t, s, a, i) {
                    return (0, e.InsightApiFp)(this.configuration).insightExpenseNoBudget(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }

                insightExpenseNoCategory(t, s, a, i) {
                    return (0, e.InsightApiFp)(this.configuration).insightExpenseNoCategory(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }

                insightExpenseNoTag(t, s, a, i) {
                    return (0, e.InsightApiFp)(this.configuration).insightExpenseNoTag(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }

                insightExpenseTag(t, s, a, i, n) {
                    return (0, e.InsightApiFp)(this.configuration).insightExpenseTag(t, s, a, i, n).then((t => t(this.axios, this.basePath)))
                }

                insightExpenseTotal(t, s, a, i) {
                    return (0, e.InsightApiFp)(this.configuration).insightExpenseTotal(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }

                insightIncomeAsset(t, s, a, i) {
                    return (0, e.InsightApiFp)(this.configuration).insightIncomeAsset(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }

                insightIncomeCategory(t, s, a, i, n) {
                    return (0, e.InsightApiFp)(this.configuration).insightIncomeCategory(t, s, a, i, n).then((t => t(this.axios, this.basePath)))
                }

                insightIncomeNoCategory(t, s, a, i) {
                    return (0, e.InsightApiFp)(this.configuration).insightIncomeNoCategory(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }

                insightIncomeNoTag(t, s, a, i) {
                    return (0, e.InsightApiFp)(this.configuration).insightIncomeNoTag(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }

                insightIncomeRevenue(t, s, a, i) {
                    return (0, e.InsightApiFp)(this.configuration).insightIncomeRevenue(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }

                insightIncomeTag(t, s, a, i, n) {
                    return (0, e.InsightApiFp)(this.configuration).insightIncomeTag(t, s, a, i, n).then((t => t(this.axios, this.basePath)))
                }

                insightIncomeTotal(t, s, a, i) {
                    return (0, e.InsightApiFp)(this.configuration).insightIncomeTotal(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }

                insightTransferCategory(t, s, a, i, n) {
                    return (0, e.InsightApiFp)(this.configuration).insightTransferCategory(t, s, a, i, n).then((t => t(this.axios, this.basePath)))
                }

                insightTransferNoCategory(t, s, a, i) {
                    return (0, e.InsightApiFp)(this.configuration).insightTransferNoCategory(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }

                insightTransferNoTag(t, s, a, i) {
                    return (0, e.InsightApiFp)(this.configuration).insightTransferNoTag(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }

                insightTransferTag(t, s, a, i, n) {
                    return (0, e.InsightApiFp)(this.configuration).insightTransferTag(t, s, a, i, n).then((t => t(this.axios, this.basePath)))
                }

                insightTransferTotal(t, s, a, i) {
                    return (0, e.InsightApiFp)(this.configuration).insightTransferTotal(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }

                insightTransfers(t, s, a, i) {
                    return (0, e.InsightApiFp)(this.configuration).insightTransfers(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }
            }

            e.InsightApi = y, e.LinksApiAxiosParamCreator = function (t) {
                return {
                    deleteLinkType: async (e, s = {}) => {
                        (0, n.assertParamExists)("deleteLinkType", "id", e);
                        const a = "/api/v1/link_types/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "DELETE"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, deleteTransactionLink: async (e, s = {}) => {
                        (0, n.assertParamExists)("deleteTransactionLink", "id", e);
                        const a = "/api/v1/transaction_links/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "DELETE"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getLinkType: async (e, s = {}) => {
                        (0, n.assertParamExists)("getLinkType", "id", e);
                        const a = "/api/v1/link_types/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getTransactionLink: async (e, s = {}) => {
                        (0, n.assertParamExists)("getTransactionLink", "id", e);
                        const a = "/api/v1/transaction_links/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, listLinkType: async (e, s = {}) => {
                        const a = new URL("/api/v1/link_types", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "GET"}, i), s), o = {}, c = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), void 0 !== e && (c.page = e), (0, n.setSearchParams)(a, c);
                        let u = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), u), s.headers), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, listTransactionByLinkType: async (e, s, a, i, r, o = {}) => {
                        (0, n.assertParamExists)("listTransactionByLinkType", "id", e);
                        const c = "/api/v1/link_types/{id}/transactions".replace("{id}", encodeURIComponent(String(e))),
                            u = new URL(c, n.DUMMY_BASE_URL);
                        let h;
                        t && (h = t.baseOptions);
                        const g = Object.assign(Object.assign({method: "GET"}, h), o), l = {}, d = {};
                        await (0, n.setOAuthToObject)(l, "firefly_iii_auth", [], t), void 0 !== s && (d.page = s), void 0 !== a && (d.start = a instanceof Date ? a.toISOString().substr(0, 10) : a), void 0 !== i && (d.end = i instanceof Date ? i.toISOString().substr(0, 10) : i), void 0 !== r && (d.type = r), (0, n.setSearchParams)(u, d);
                        let p = h && h.headers ? h.headers : {};
                        return g.headers = Object.assign(Object.assign(Object.assign({}, l), p), o.headers), {
                            url: (0, n.toPathString)(u),
                            options: g
                        }
                    }, listTransactionLink: async (e, s = {}) => {
                        const a = new URL("/api/v1/transaction_links", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "GET"}, i), s), o = {}, c = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), void 0 !== e && (c.page = e), (0, n.setSearchParams)(a, c);
                        let u = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), u), s.headers), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, storeLinkType: async (e, s = {}) => {
                        (0, n.assertParamExists)("storeLinkType", "linkType", e);
                        const a = new URL("/api/v1/link_types", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "POST"}, i), s), o = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), o["Content-Type"] = "application/json", (0, n.setSearchParams)(a, {});
                        let c = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), c), s.headers), r.data = (0, n.serializeDataIfNeeded)(e, r, t), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, storeTransactionLink: async (e, s = {}) => {
                        (0, n.assertParamExists)("storeTransactionLink", "transactionLinkStore", e);
                        const a = new URL("/api/v1/transaction_links", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "POST"}, i), s), o = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), o["Content-Type"] = "application/json", (0, n.setSearchParams)(a, {});
                        let c = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), c), s.headers), r.data = (0, n.serializeDataIfNeeded)(e, r, t), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, updateLinkType: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("updateLinkType", "id", e), (0, n.assertParamExists)("updateLinkType", "linkTypeUpdate", s);
                        const i = "/api/v1/link_types/{id}".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "PUT"}, o), a), u = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), u["Content-Type"] = "application/json", (0, n.setSearchParams)(r, {});
                        let h = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), h), a.headers), c.data = (0, n.serializeDataIfNeeded)(s, c, t), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, updateTransactionLink: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("updateTransactionLink", "id", e), (0, n.assertParamExists)("updateTransactionLink", "transactionLinkUpdate", s);
                        const i = "/api/v1/transaction_links/{id}".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "PUT"}, o), a), u = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), u["Content-Type"] = "application/json", (0, n.setSearchParams)(r, {});
                        let h = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), h), a.headers), c.data = (0, n.serializeDataIfNeeded)(s, c, t), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }
                }
            }, e.LinksApiFp = function (t) {
                const s = (0, e.LinksApiAxiosParamCreator)(t);
                return {
                    async deleteLinkType(e, a) {
                        const o = await s.deleteLinkType(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async deleteTransactionLink(e, a) {
                        const o = await s.deleteTransactionLink(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async getLinkType(e, a) {
                        const o = await s.getLinkType(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async getTransactionLink(e, a) {
                        const o = await s.getTransactionLink(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async listLinkType(e, a) {
                        const o = await s.listLinkType(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async listTransactionByLinkType(e, a, o, c, u, h) {
                        const g = await s.listTransactionByLinkType(e, a, o, c, u, h);
                        return (0, n.createRequestFunction)(g, i.default, r.BASE_PATH, t)
                    }, async listTransactionLink(e, a) {
                        const o = await s.listTransactionLink(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async storeLinkType(e, a) {
                        const o = await s.storeLinkType(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async storeTransactionLink(e, a) {
                        const o = await s.storeTransactionLink(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async updateLinkType(e, a, o) {
                        const c = await s.updateLinkType(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async updateTransactionLink(e, a, o) {
                        const c = await s.updateTransactionLink(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }
                }
            }, e.LinksApiFactory = function (t, s, a) {
                const i = (0, e.LinksApiFp)(t);
                return {
                    deleteLinkType: (t, e) => i.deleteLinkType(t, e).then((t => t(a, s))),
                    deleteTransactionLink: (t, e) => i.deleteTransactionLink(t, e).then((t => t(a, s))),
                    getLinkType: (t, e) => i.getLinkType(t, e).then((t => t(a, s))),
                    getTransactionLink: (t, e) => i.getTransactionLink(t, e).then((t => t(a, s))),
                    listLinkType: (t, e) => i.listLinkType(t, e).then((t => t(a, s))),
                    listTransactionByLinkType: (t, e, n, r, o, c) => i.listTransactionByLinkType(t, e, n, r, o, c).then((t => t(a, s))),
                    listTransactionLink: (t, e) => i.listTransactionLink(t, e).then((t => t(a, s))),
                    storeLinkType: (t, e) => i.storeLinkType(t, e).then((t => t(a, s))),
                    storeTransactionLink: (t, e) => i.storeTransactionLink(t, e).then((t => t(a, s))),
                    updateLinkType: (t, e, n) => i.updateLinkType(t, e, n).then((t => t(a, s))),
                    updateTransactionLink: (t, e, n) => i.updateTransactionLink(t, e, n).then((t => t(a, s)))
                }
            };

            class m extends r.BaseAPI {
                deleteLinkType(t, s) {
                    return (0, e.LinksApiFp)(this.configuration).deleteLinkType(t, s).then((t => t(this.axios, this.basePath)))
                }

                deleteTransactionLink(t, s) {
                    return (0, e.LinksApiFp)(this.configuration).deleteTransactionLink(t, s).then((t => t(this.axios, this.basePath)))
                }

                getLinkType(t, s) {
                    return (0, e.LinksApiFp)(this.configuration).getLinkType(t, s).then((t => t(this.axios, this.basePath)))
                }

                getTransactionLink(t, s) {
                    return (0, e.LinksApiFp)(this.configuration).getTransactionLink(t, s).then((t => t(this.axios, this.basePath)))
                }

                listLinkType(t, s) {
                    return (0, e.LinksApiFp)(this.configuration).listLinkType(t, s).then((t => t(this.axios, this.basePath)))
                }

                listTransactionByLinkType(t, s, a, i, n, r) {
                    return (0, e.LinksApiFp)(this.configuration).listTransactionByLinkType(t, s, a, i, n, r).then((t => t(this.axios, this.basePath)))
                }

                listTransactionLink(t, s) {
                    return (0, e.LinksApiFp)(this.configuration).listTransactionLink(t, s).then((t => t(this.axios, this.basePath)))
                }

                storeLinkType(t, s) {
                    return (0, e.LinksApiFp)(this.configuration).storeLinkType(t, s).then((t => t(this.axios, this.basePath)))
                }

                storeTransactionLink(t, s) {
                    return (0, e.LinksApiFp)(this.configuration).storeTransactionLink(t, s).then((t => t(this.axios, this.basePath)))
                }

                updateLinkType(t, s, a) {
                    return (0, e.LinksApiFp)(this.configuration).updateLinkType(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                updateTransactionLink(t, s, a) {
                    return (0, e.LinksApiFp)(this.configuration).updateTransactionLink(t, s, a).then((t => t(this.axios, this.basePath)))
                }
            }

            e.LinksApi = m, e.ObjectGroupsApiAxiosParamCreator = function (t) {
                return {
                    deleteObjectGroup: async (e, s = {}) => {
                        (0, n.assertParamExists)("deleteObjectGroup", "id", e);
                        const a = "/api/v1/object_groups/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "DELETE"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getObjectGroup: async (e, s = {}) => {
                        (0, n.assertParamExists)("getObjectGroup", "id", e);
                        const a = "/api/v1/object_groups/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, listBillByObjectGroup: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("listBillByObjectGroup", "id", e);
                        const i = "/api/v1/object_groups/{id}/bills".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), a), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== s && (h.page = s), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), a.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, listObjectGroups: async (e, s = {}) => {
                        const a = new URL("/api/v1/object_groups", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "GET"}, i), s), o = {}, c = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), void 0 !== e && (c.page = e), (0, n.setSearchParams)(a, c);
                        let u = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), u), s.headers), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, listPiggyBankByObjectGroup: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("listPiggyBankByObjectGroup", "id", e);
                        const i = "/api/v1/object_groups/{id}/piggy_banks".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), a), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== s && (h.page = s), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), a.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, updateObjectGroup: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("updateObjectGroup", "id", e), (0, n.assertParamExists)("updateObjectGroup", "objectGroupUpdate", s);
                        const i = "/api/v1/object_groups/{id}".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "PUT"}, o), a), u = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), u["Content-Type"] = "application/json", (0, n.setSearchParams)(r, {});
                        let h = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), h), a.headers), c.data = (0, n.serializeDataIfNeeded)(s, c, t), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }
                }
            }, e.ObjectGroupsApiFp = function (t) {
                const s = (0, e.ObjectGroupsApiAxiosParamCreator)(t);
                return {
                    async deleteObjectGroup(e, a) {
                        const o = await s.deleteObjectGroup(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async getObjectGroup(e, a) {
                        const o = await s.getObjectGroup(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async listBillByObjectGroup(e, a, o) {
                        const c = await s.listBillByObjectGroup(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async listObjectGroups(e, a) {
                        const o = await s.listObjectGroups(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async listPiggyBankByObjectGroup(e, a, o) {
                        const c = await s.listPiggyBankByObjectGroup(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async updateObjectGroup(e, a, o) {
                        const c = await s.updateObjectGroup(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }
                }
            }, e.ObjectGroupsApiFactory = function (t, s, a) {
                const i = (0, e.ObjectGroupsApiFp)(t);
                return {
                    deleteObjectGroup: (t, e) => i.deleteObjectGroup(t, e).then((t => t(a, s))),
                    getObjectGroup: (t, e) => i.getObjectGroup(t, e).then((t => t(a, s))),
                    listBillByObjectGroup: (t, e, n) => i.listBillByObjectGroup(t, e, n).then((t => t(a, s))),
                    listObjectGroups: (t, e) => i.listObjectGroups(t, e).then((t => t(a, s))),
                    listPiggyBankByObjectGroup: (t, e, n) => i.listPiggyBankByObjectGroup(t, e, n).then((t => t(a, s))),
                    updateObjectGroup: (t, e, n) => i.updateObjectGroup(t, e, n).then((t => t(a, s)))
                }
            };

            class P extends r.BaseAPI {
                deleteObjectGroup(t, s) {
                    return (0, e.ObjectGroupsApiFp)(this.configuration).deleteObjectGroup(t, s).then((t => t(this.axios, this.basePath)))
                }

                getObjectGroup(t, s) {
                    return (0, e.ObjectGroupsApiFp)(this.configuration).getObjectGroup(t, s).then((t => t(this.axios, this.basePath)))
                }

                listBillByObjectGroup(t, s, a) {
                    return (0, e.ObjectGroupsApiFp)(this.configuration).listBillByObjectGroup(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                listObjectGroups(t, s) {
                    return (0, e.ObjectGroupsApiFp)(this.configuration).listObjectGroups(t, s).then((t => t(this.axios, this.basePath)))
                }

                listPiggyBankByObjectGroup(t, s, a) {
                    return (0, e.ObjectGroupsApiFp)(this.configuration).listPiggyBankByObjectGroup(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                updateObjectGroup(t, s, a) {
                    return (0, e.ObjectGroupsApiFp)(this.configuration).updateObjectGroup(t, s, a).then((t => t(this.axios, this.basePath)))
                }
            }

            e.ObjectGroupsApi = P, e.PiggyBanksApiAxiosParamCreator = function (t) {
                return {
                    deletePiggyBank: async (e, s = {}) => {
                        (0, n.assertParamExists)("deletePiggyBank", "id", e);
                        const a = "/api/v1/piggy_banks/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "DELETE"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getPiggyBank: async (e, s = {}) => {
                        (0, n.assertParamExists)("getPiggyBank", "id", e);
                        const a = "/api/v1/piggy_banks/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, listAttachmentByPiggyBank: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("listAttachmentByPiggyBank", "id", e);
                        const i = "/api/v1/piggy_banks/{id}/attachments".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), a), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== s && (h.page = s), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), a.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, listEventByPiggyBank: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("listEventByPiggyBank", "id", e);
                        const i = "/api/v1/piggy_banks/{id}/events".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), a), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== s && (h.page = s), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), a.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, listPiggyBank: async (e, s = {}) => {
                        const a = new URL("/api/v1/piggy_banks", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "GET"}, i), s), o = {}, c = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), void 0 !== e && (c.page = e), (0, n.setSearchParams)(a, c);
                        let u = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), u), s.headers), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, storePiggyBank: async (e, s = {}) => {
                        (0, n.assertParamExists)("storePiggyBank", "piggyBankStore", e);
                        const a = new URL("/api/v1/piggy_banks", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "POST"}, i), s), o = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), o["Content-Type"] = "application/json", (0, n.setSearchParams)(a, {});
                        let c = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), c), s.headers), r.data = (0, n.serializeDataIfNeeded)(e, r, t), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, updatePiggyBank: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("updatePiggyBank", "id", e), (0, n.assertParamExists)("updatePiggyBank", "piggyBankUpdate", s);
                        const i = "/api/v1/piggy_banks/{id}".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "PUT"}, o), a), u = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), u["Content-Type"] = "application/json", (0, n.setSearchParams)(r, {});
                        let h = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), h), a.headers), c.data = (0, n.serializeDataIfNeeded)(s, c, t), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }
                }
            }, e.PiggyBanksApiFp = function (t) {
                const s = (0, e.PiggyBanksApiAxiosParamCreator)(t);
                return {
                    async deletePiggyBank(e, a) {
                        const o = await s.deletePiggyBank(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async getPiggyBank(e, a) {
                        const o = await s.getPiggyBank(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async listAttachmentByPiggyBank(e, a, o) {
                        const c = await s.listAttachmentByPiggyBank(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async listEventByPiggyBank(e, a, o) {
                        const c = await s.listEventByPiggyBank(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async listPiggyBank(e, a) {
                        const o = await s.listPiggyBank(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async storePiggyBank(e, a) {
                        const o = await s.storePiggyBank(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async updatePiggyBank(e, a, o) {
                        const c = await s.updatePiggyBank(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }
                }
            }, e.PiggyBanksApiFactory = function (t, s, a) {
                const i = (0, e.PiggyBanksApiFp)(t);
                return {
                    deletePiggyBank: (t, e) => i.deletePiggyBank(t, e).then((t => t(a, s))),
                    getPiggyBank: (t, e) => i.getPiggyBank(t, e).then((t => t(a, s))),
                    listAttachmentByPiggyBank: (t, e, n) => i.listAttachmentByPiggyBank(t, e, n).then((t => t(a, s))),
                    listEventByPiggyBank: (t, e, n) => i.listEventByPiggyBank(t, e, n).then((t => t(a, s))),
                    listPiggyBank: (t, e) => i.listPiggyBank(t, e).then((t => t(a, s))),
                    storePiggyBank: (t, e) => i.storePiggyBank(t, e).then((t => t(a, s))),
                    updatePiggyBank: (t, e, n) => i.updatePiggyBank(t, e, n).then((t => t(a, s)))
                }
            };

            class j extends r.BaseAPI {
                deletePiggyBank(t, s) {
                    return (0, e.PiggyBanksApiFp)(this.configuration).deletePiggyBank(t, s).then((t => t(this.axios, this.basePath)))
                }

                getPiggyBank(t, s) {
                    return (0, e.PiggyBanksApiFp)(this.configuration).getPiggyBank(t, s).then((t => t(this.axios, this.basePath)))
                }

                listAttachmentByPiggyBank(t, s, a) {
                    return (0, e.PiggyBanksApiFp)(this.configuration).listAttachmentByPiggyBank(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                listEventByPiggyBank(t, s, a) {
                    return (0, e.PiggyBanksApiFp)(this.configuration).listEventByPiggyBank(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                listPiggyBank(t, s) {
                    return (0, e.PiggyBanksApiFp)(this.configuration).listPiggyBank(t, s).then((t => t(this.axios, this.basePath)))
                }

                storePiggyBank(t, s) {
                    return (0, e.PiggyBanksApiFp)(this.configuration).storePiggyBank(t, s).then((t => t(this.axios, this.basePath)))
                }

                updatePiggyBank(t, s, a) {
                    return (0, e.PiggyBanksApiFp)(this.configuration).updatePiggyBank(t, s, a).then((t => t(this.axios, this.basePath)))
                }
            }

            e.PiggyBanksApi = j, e.PreferencesApiAxiosParamCreator = function (t) {
                return {
                    getPreference: async (e, s = {}) => {
                        (0, n.assertParamExists)("getPreference", "name", e);
                        const a = "/api/v1/preferences/{name}".replace("{name}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, listPreference: async (e, s = {}) => {
                        const a = new URL("/api/v1/preferences", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "GET"}, i), s), o = {}, c = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), void 0 !== e && (c.page = e), (0, n.setSearchParams)(a, c);
                        let u = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), u), s.headers), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, storePreference: async (e, s = {}) => {
                        (0, n.assertParamExists)("storePreference", "preference", e);
                        const a = new URL("/api/v1/preferences", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "POST"}, i), s), o = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), o["Content-Type"] = "application/json", (0, n.setSearchParams)(a, {});
                        let c = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), c), s.headers), r.data = (0, n.serializeDataIfNeeded)(e, r, t), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, updatePreference: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("updatePreference", "name", e), (0, n.assertParamExists)("updatePreference", "preferenceUpdate", s);
                        const i = "/api/v1/preferences/{name}".replace("{name}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "PUT"}, o), a), u = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), u["Content-Type"] = "application/json", (0, n.setSearchParams)(r, {});
                        let h = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), h), a.headers), c.data = (0, n.serializeDataIfNeeded)(s, c, t), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }
                }
            }, e.PreferencesApiFp = function (t) {
                const s = (0, e.PreferencesApiAxiosParamCreator)(t);
                return {
                    async getPreference(e, a) {
                        const o = await s.getPreference(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async listPreference(e, a) {
                        const o = await s.listPreference(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async storePreference(e, a) {
                        const o = await s.storePreference(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async updatePreference(e, a, o) {
                        const c = await s.updatePreference(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }
                }
            }, e.PreferencesApiFactory = function (t, s, a) {
                const i = (0, e.PreferencesApiFp)(t);
                return {
                    getPreference: (t, e) => i.getPreference(t, e).then((t => t(a, s))),
                    listPreference: (t, e) => i.listPreference(t, e).then((t => t(a, s))),
                    storePreference: (t, e) => i.storePreference(t, e).then((t => t(a, s))),
                    updatePreference: (t, e, n) => i.updatePreference(t, e, n).then((t => t(a, s)))
                }
            };

            class S extends r.BaseAPI {
                getPreference(t, s) {
                    return (0, e.PreferencesApiFp)(this.configuration).getPreference(t, s).then((t => t(this.axios, this.basePath)))
                }

                listPreference(t, s) {
                    return (0, e.PreferencesApiFp)(this.configuration).listPreference(t, s).then((t => t(this.axios, this.basePath)))
                }

                storePreference(t, s) {
                    return (0, e.PreferencesApiFp)(this.configuration).storePreference(t, s).then((t => t(this.axios, this.basePath)))
                }

                updatePreference(t, s, a) {
                    return (0, e.PreferencesApiFp)(this.configuration).updatePreference(t, s, a).then((t => t(this.axios, this.basePath)))
                }
            }

            e.PreferencesApi = S, e.RecurrencesApiAxiosParamCreator = function (t) {
                return {
                    deleteRecurrence: async (e, s = {}) => {
                        (0, n.assertParamExists)("deleteRecurrence", "id", e);
                        const a = "/api/v1/recurrences/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "DELETE"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getRecurrence: async (e, s = {}) => {
                        (0, n.assertParamExists)("getRecurrence", "id", e);
                        const a = "/api/v1/recurrences/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, listRecurrence: async (e, s = {}) => {
                        const a = new URL("/api/v1/recurrences", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "GET"}, i), s), o = {}, c = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), void 0 !== e && (c.page = e), (0, n.setSearchParams)(a, c);
                        let u = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), u), s.headers), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, listTransactionByRecurrence: async (e, s, a, i, r, o = {}) => {
                        (0, n.assertParamExists)("listTransactionByRecurrence", "id", e);
                        const c = "/api/v1/recurrences/{id}/transactions".replace("{id}", encodeURIComponent(String(e))),
                            u = new URL(c, n.DUMMY_BASE_URL);
                        let h;
                        t && (h = t.baseOptions);
                        const g = Object.assign(Object.assign({method: "GET"}, h), o), l = {}, d = {};
                        await (0, n.setOAuthToObject)(l, "firefly_iii_auth", [], t), void 0 !== s && (d.page = s), void 0 !== a && (d.start = a instanceof Date ? a.toISOString().substr(0, 10) : a), void 0 !== i && (d.end = i instanceof Date ? i.toISOString().substr(0, 10) : i), void 0 !== r && (d.type = r), (0, n.setSearchParams)(u, d);
                        let p = h && h.headers ? h.headers : {};
                        return g.headers = Object.assign(Object.assign(Object.assign({}, l), p), o.headers), {
                            url: (0, n.toPathString)(u),
                            options: g
                        }
                    }, storeRecurrence: async (e, s = {}) => {
                        (0, n.assertParamExists)("storeRecurrence", "recurrenceStore", e);
                        const a = new URL("/api/v1/recurrences", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "POST"}, i), s), o = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), o["Content-Type"] = "application/json", (0, n.setSearchParams)(a, {});
                        let c = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), c), s.headers), r.data = (0, n.serializeDataIfNeeded)(e, r, t), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, updateRecurrence: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("updateRecurrence", "id", e), (0, n.assertParamExists)("updateRecurrence", "recurrenceUpdate", s);
                        const i = "/api/v1/recurrences/{id}".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "PUT"}, o), a), u = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), u["Content-Type"] = "application/json", (0, n.setSearchParams)(r, {});
                        let h = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), h), a.headers), c.data = (0, n.serializeDataIfNeeded)(s, c, t), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }
                }
            }, e.RecurrencesApiFp = function (t) {
                const s = (0, e.RecurrencesApiAxiosParamCreator)(t);
                return {
                    async deleteRecurrence(e, a) {
                        const o = await s.deleteRecurrence(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async getRecurrence(e, a) {
                        const o = await s.getRecurrence(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async listRecurrence(e, a) {
                        const o = await s.listRecurrence(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async listTransactionByRecurrence(e, a, o, c, u, h) {
                        const g = await s.listTransactionByRecurrence(e, a, o, c, u, h);
                        return (0, n.createRequestFunction)(g, i.default, r.BASE_PATH, t)
                    }, async storeRecurrence(e, a) {
                        const o = await s.storeRecurrence(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async updateRecurrence(e, a, o) {
                        const c = await s.updateRecurrence(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }
                }
            }, e.RecurrencesApiFactory = function (t, s, a) {
                const i = (0, e.RecurrencesApiFp)(t);
                return {
                    deleteRecurrence: (t, e) => i.deleteRecurrence(t, e).then((t => t(a, s))),
                    getRecurrence: (t, e) => i.getRecurrence(t, e).then((t => t(a, s))),
                    listRecurrence: (t, e) => i.listRecurrence(t, e).then((t => t(a, s))),
                    listTransactionByRecurrence: (t, e, n, r, o, c) => i.listTransactionByRecurrence(t, e, n, r, o, c).then((t => t(a, s))),
                    storeRecurrence: (t, e) => i.storeRecurrence(t, e).then((t => t(a, s))),
                    updateRecurrence: (t, e, n) => i.updateRecurrence(t, e, n).then((t => t(a, s)))
                }
            };

            class T extends r.BaseAPI {
                deleteRecurrence(t, s) {
                    return (0, e.RecurrencesApiFp)(this.configuration).deleteRecurrence(t, s).then((t => t(this.axios, this.basePath)))
                }

                getRecurrence(t, s) {
                    return (0, e.RecurrencesApiFp)(this.configuration).getRecurrence(t, s).then((t => t(this.axios, this.basePath)))
                }

                listRecurrence(t, s) {
                    return (0, e.RecurrencesApiFp)(this.configuration).listRecurrence(t, s).then((t => t(this.axios, this.basePath)))
                }

                listTransactionByRecurrence(t, s, a, i, n, r) {
                    return (0, e.RecurrencesApiFp)(this.configuration).listTransactionByRecurrence(t, s, a, i, n, r).then((t => t(this.axios, this.basePath)))
                }

                storeRecurrence(t, s) {
                    return (0, e.RecurrencesApiFp)(this.configuration).storeRecurrence(t, s).then((t => t(this.axios, this.basePath)))
                }

                updateRecurrence(t, s, a) {
                    return (0, e.RecurrencesApiFp)(this.configuration).updateRecurrence(t, s, a).then((t => t(this.axios, this.basePath)))
                }
            }

            e.RecurrencesApi = T, e.RuleGroupsApiAxiosParamCreator = function (t) {
                return {
                    deleteRuleGroup: async (e, s = {}) => {
                        (0, n.assertParamExists)("deleteRuleGroup", "id", e);
                        const a = "/api/v1/rule_groups/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "DELETE"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, fireRuleGroup: async (e, s, a, i, r = {}) => {
                        (0, n.assertParamExists)("fireRuleGroup", "id", e);
                        const o = "/api/v1/rule_groups/{id}/trigger".replace("{id}", encodeURIComponent(String(e))),
                            c = new URL(o, n.DUMMY_BASE_URL);
                        let u;
                        t && (u = t.baseOptions);
                        const h = Object.assign(Object.assign({method: "POST"}, u), r), g = {}, l = {};
                        await (0, n.setOAuthToObject)(g, "firefly_iii_auth", [], t), void 0 !== s && (l.start = s instanceof Date ? s.toISOString().substr(0, 10) : s), void 0 !== a && (l.end = a instanceof Date ? a.toISOString().substr(0, 10) : a), i && (l["accounts[]"] = i), (0, n.setSearchParams)(c, l);
                        let d = u && u.headers ? u.headers : {};
                        return h.headers = Object.assign(Object.assign(Object.assign({}, g), d), r.headers), {
                            url: (0, n.toPathString)(c),
                            options: h
                        }
                    }, getRuleGroup: async (e, s = {}) => {
                        (0, n.assertParamExists)("getRuleGroup", "id", e);
                        const a = "/api/v1/rule_groups/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, listRuleByGroup: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("listRuleByGroup", "id", e);
                        const i = "/api/v1/rule_groups/{id}/rules".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), a), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== s && (h.page = s), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), a.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, listRuleGroup: async (e, s = {}) => {
                        const a = new URL("/api/v1/rule_groups", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "GET"}, i), s), o = {}, c = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), void 0 !== e && (c.page = e), (0, n.setSearchParams)(a, c);
                        let u = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), u), s.headers), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, storeRuleGroup: async (e, s = {}) => {
                        (0, n.assertParamExists)("storeRuleGroup", "ruleGroupStore", e);
                        const a = new URL("/api/v1/rule_groups", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "POST"}, i), s), o = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), o["Content-Type"] = "application/json", (0, n.setSearchParams)(a, {});
                        let c = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), c), s.headers), r.data = (0, n.serializeDataIfNeeded)(e, r, t), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, testRuleGroup: async (e, s, a, i, r, o, c, u = {}) => {
                        (0, n.assertParamExists)("testRuleGroup", "id", e);
                        const h = "/api/v1/rule_groups/{id}/test".replace("{id}", encodeURIComponent(String(e))),
                            g = new URL(h, n.DUMMY_BASE_URL);
                        let l;
                        t && (l = t.baseOptions);
                        const d = Object.assign(Object.assign({method: "GET"}, l), u), p = {}, b = {};
                        await (0, n.setOAuthToObject)(p, "firefly_iii_auth", [], t), void 0 !== s && (b.page = s), void 0 !== a && (b.start = a instanceof Date ? a.toISOString().substr(0, 10) : a), void 0 !== i && (b.end = i instanceof Date ? i.toISOString().substr(0, 10) : i), void 0 !== r && (b.search_limit = r), void 0 !== o && (b.triggered_limit = o), c && (b["accounts[]"] = c), (0, n.setSearchParams)(g, b);
                        let A = l && l.headers ? l.headers : {};
                        return d.headers = Object.assign(Object.assign(Object.assign({}, p), A), u.headers), {
                            url: (0, n.toPathString)(g),
                            options: d
                        }
                    }, updateRuleGroup: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("updateRuleGroup", "id", e), (0, n.assertParamExists)("updateRuleGroup", "ruleGroupUpdate", s);
                        const i = "/api/v1/rule_groups/{id}".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "PUT"}, o), a), u = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), u["Content-Type"] = "application/json", (0, n.setSearchParams)(r, {});
                        let h = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), h), a.headers), c.data = (0, n.serializeDataIfNeeded)(s, c, t), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }
                }
            }, e.RuleGroupsApiFp = function (t) {
                const s = (0, e.RuleGroupsApiAxiosParamCreator)(t);
                return {
                    async deleteRuleGroup(e, a) {
                        const o = await s.deleteRuleGroup(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async fireRuleGroup(e, a, o, c, u) {
                        const h = await s.fireRuleGroup(e, a, o, c, u);
                        return (0, n.createRequestFunction)(h, i.default, r.BASE_PATH, t)
                    }, async getRuleGroup(e, a) {
                        const o = await s.getRuleGroup(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async listRuleByGroup(e, a, o) {
                        const c = await s.listRuleByGroup(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async listRuleGroup(e, a) {
                        const o = await s.listRuleGroup(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async storeRuleGroup(e, a) {
                        const o = await s.storeRuleGroup(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async testRuleGroup(e, a, o, c, u, h, g, l) {
                        const d = await s.testRuleGroup(e, a, o, c, u, h, g, l);
                        return (0, n.createRequestFunction)(d, i.default, r.BASE_PATH, t)
                    }, async updateRuleGroup(e, a, o) {
                        const c = await s.updateRuleGroup(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }
                }
            }, e.RuleGroupsApiFactory = function (t, s, a) {
                const i = (0, e.RuleGroupsApiFp)(t);
                return {
                    deleteRuleGroup: (t, e) => i.deleteRuleGroup(t, e).then((t => t(a, s))),
                    fireRuleGroup: (t, e, n, r, o) => i.fireRuleGroup(t, e, n, r, o).then((t => t(a, s))),
                    getRuleGroup: (t, e) => i.getRuleGroup(t, e).then((t => t(a, s))),
                    listRuleByGroup: (t, e, n) => i.listRuleByGroup(t, e, n).then((t => t(a, s))),
                    listRuleGroup: (t, e) => i.listRuleGroup(t, e).then((t => t(a, s))),
                    storeRuleGroup: (t, e) => i.storeRuleGroup(t, e).then((t => t(a, s))),
                    testRuleGroup: (t, e, n, r, o, c, u, h) => i.testRuleGroup(t, e, n, r, o, c, u, h).then((t => t(a, s))),
                    updateRuleGroup: (t, e, n) => i.updateRuleGroup(t, e, n).then((t => t(a, s)))
                }
            };

            class _ extends r.BaseAPI {
                deleteRuleGroup(t, s) {
                    return (0, e.RuleGroupsApiFp)(this.configuration).deleteRuleGroup(t, s).then((t => t(this.axios, this.basePath)))
                }

                fireRuleGroup(t, s, a, i, n) {
                    return (0, e.RuleGroupsApiFp)(this.configuration).fireRuleGroup(t, s, a, i, n).then((t => t(this.axios, this.basePath)))
                }

                getRuleGroup(t, s) {
                    return (0, e.RuleGroupsApiFp)(this.configuration).getRuleGroup(t, s).then((t => t(this.axios, this.basePath)))
                }

                listRuleByGroup(t, s, a) {
                    return (0, e.RuleGroupsApiFp)(this.configuration).listRuleByGroup(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                listRuleGroup(t, s) {
                    return (0, e.RuleGroupsApiFp)(this.configuration).listRuleGroup(t, s).then((t => t(this.axios, this.basePath)))
                }

                storeRuleGroup(t, s) {
                    return (0, e.RuleGroupsApiFp)(this.configuration).storeRuleGroup(t, s).then((t => t(this.axios, this.basePath)))
                }

                testRuleGroup(t, s, a, i, n, r, o, c) {
                    return (0, e.RuleGroupsApiFp)(this.configuration).testRuleGroup(t, s, a, i, n, r, o, c).then((t => t(this.axios, this.basePath)))
                }

                updateRuleGroup(t, s, a) {
                    return (0, e.RuleGroupsApiFp)(this.configuration).updateRuleGroup(t, s, a).then((t => t(this.axios, this.basePath)))
                }
            }

            e.RuleGroupsApi = _, e.RulesApiAxiosParamCreator = function (t) {
                return {
                    deleteRule: async (e, s = {}) => {
                        (0, n.assertParamExists)("deleteRule", "id", e);
                        const a = "/api/v1/rules/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "DELETE"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, fireRule: async (e, s, a, i, r = {}) => {
                        (0, n.assertParamExists)("fireRule", "id", e);
                        const o = "/api/v1/rules/{id}/trigger".replace("{id}", encodeURIComponent(String(e))),
                            c = new URL(o, n.DUMMY_BASE_URL);
                        let u;
                        t && (u = t.baseOptions);
                        const h = Object.assign(Object.assign({method: "POST"}, u), r), g = {}, l = {};
                        await (0, n.setOAuthToObject)(g, "firefly_iii_auth", [], t), void 0 !== s && (l.start = s instanceof Date ? s.toISOString().substr(0, 10) : s), void 0 !== a && (l.end = a instanceof Date ? a.toISOString().substr(0, 10) : a), i && (l["accounts[]"] = i), (0, n.setSearchParams)(c, l);
                        let d = u && u.headers ? u.headers : {};
                        return h.headers = Object.assign(Object.assign(Object.assign({}, g), d), r.headers), {
                            url: (0, n.toPathString)(c),
                            options: h
                        }
                    }, getRule: async (e, s = {}) => {
                        (0, n.assertParamExists)("getRule", "id", e);
                        const a = "/api/v1/rules/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, listRule: async (e, s = {}) => {
                        const a = new URL("/api/v1/rules", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "GET"}, i), s), o = {}, c = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), void 0 !== e && (c.page = e), (0, n.setSearchParams)(a, c);
                        let u = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), u), s.headers), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, storeRule: async (e, s = {}) => {
                        (0, n.assertParamExists)("storeRule", "ruleStore", e);
                        const a = new URL("/api/v1/rules", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "POST"}, i), s), o = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), o["Content-Type"] = "application/json", (0, n.setSearchParams)(a, {});
                        let c = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), c), s.headers), r.data = (0, n.serializeDataIfNeeded)(e, r, t), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, testRule: async (e, s, a, i, r = {}) => {
                        (0, n.assertParamExists)("testRule", "id", e);
                        const o = "/api/v1/rules/{id}/test".replace("{id}", encodeURIComponent(String(e))),
                            c = new URL(o, n.DUMMY_BASE_URL);
                        let u;
                        t && (u = t.baseOptions);
                        const h = Object.assign(Object.assign({method: "GET"}, u), r), g = {}, l = {};
                        await (0, n.setOAuthToObject)(g, "firefly_iii_auth", [], t), void 0 !== s && (l.start = s instanceof Date ? s.toISOString().substr(0, 10) : s), void 0 !== a && (l.end = a instanceof Date ? a.toISOString().substr(0, 10) : a), i && (l["accounts[]"] = i), (0, n.setSearchParams)(c, l);
                        let d = u && u.headers ? u.headers : {};
                        return h.headers = Object.assign(Object.assign(Object.assign({}, g), d), r.headers), {
                            url: (0, n.toPathString)(c),
                            options: h
                        }
                    }, updateRule: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("updateRule", "id", e), (0, n.assertParamExists)("updateRule", "ruleUpdate", s);
                        const i = "/api/v1/rules/{id}".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "PUT"}, o), a), u = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), u["Content-Type"] = "application/json", (0, n.setSearchParams)(r, {});
                        let h = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), h), a.headers), c.data = (0, n.serializeDataIfNeeded)(s, c, t), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }
                }
            }, e.RulesApiFp = function (t) {
                const s = (0, e.RulesApiAxiosParamCreator)(t);
                return {
                    async deleteRule(e, a) {
                        const o = await s.deleteRule(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async fireRule(e, a, o, c, u) {
                        const h = await s.fireRule(e, a, o, c, u);
                        return (0, n.createRequestFunction)(h, i.default, r.BASE_PATH, t)
                    }, async getRule(e, a) {
                        const o = await s.getRule(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async listRule(e, a) {
                        const o = await s.listRule(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async storeRule(e, a) {
                        const o = await s.storeRule(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async testRule(e, a, o, c, u) {
                        const h = await s.testRule(e, a, o, c, u);
                        return (0, n.createRequestFunction)(h, i.default, r.BASE_PATH, t)
                    }, async updateRule(e, a, o) {
                        const c = await s.updateRule(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }
                }
            }, e.RulesApiFactory = function (t, s, a) {
                const i = (0, e.RulesApiFp)(t);
                return {
                    deleteRule: (t, e) => i.deleteRule(t, e).then((t => t(a, s))),
                    fireRule: (t, e, n, r, o) => i.fireRule(t, e, n, r, o).then((t => t(a, s))),
                    getRule: (t, e) => i.getRule(t, e).then((t => t(a, s))),
                    listRule: (t, e) => i.listRule(t, e).then((t => t(a, s))),
                    storeRule: (t, e) => i.storeRule(t, e).then((t => t(a, s))),
                    testRule: (t, e, n, r, o) => i.testRule(t, e, n, r, o).then((t => t(a, s))),
                    updateRule: (t, e, n) => i.updateRule(t, e, n).then((t => t(a, s)))
                }
            };

            class B extends r.BaseAPI {
                deleteRule(t, s) {
                    return (0, e.RulesApiFp)(this.configuration).deleteRule(t, s).then((t => t(this.axios, this.basePath)))
                }

                fireRule(t, s, a, i, n) {
                    return (0, e.RulesApiFp)(this.configuration).fireRule(t, s, a, i, n).then((t => t(this.axios, this.basePath)))
                }

                getRule(t, s) {
                    return (0, e.RulesApiFp)(this.configuration).getRule(t, s).then((t => t(this.axios, this.basePath)))
                }

                listRule(t, s) {
                    return (0, e.RulesApiFp)(this.configuration).listRule(t, s).then((t => t(this.axios, this.basePath)))
                }

                storeRule(t, s) {
                    return (0, e.RulesApiFp)(this.configuration).storeRule(t, s).then((t => t(this.axios, this.basePath)))
                }

                testRule(t, s, a, i, n) {
                    return (0, e.RulesApiFp)(this.configuration).testRule(t, s, a, i, n).then((t => t(this.axios, this.basePath)))
                }

                updateRule(t, s, a) {
                    return (0, e.RulesApiFp)(this.configuration).updateRule(t, s, a).then((t => t(this.axios, this.basePath)))
                }
            }

            e.RulesApi = B, e.SearchApiAxiosParamCreator = function (t) {
                return {
                    searchAccounts: async (e, s, a, i, r = {}) => {
                        (0, n.assertParamExists)("searchAccounts", "query", e), (0, n.assertParamExists)("searchAccounts", "field", s);
                        const o = new URL("/api/v1/search/accounts", n.DUMMY_BASE_URL);
                        let c;
                        t && (c = t.baseOptions);
                        const u = Object.assign(Object.assign({method: "GET"}, c), r), h = {}, g = {};
                        await (0, n.setOAuthToObject)(h, "firefly_iii_auth", [], t), void 0 !== a && (g.page = a), void 0 !== e && (g.query = e), void 0 !== i && (g.type = i), void 0 !== s && (g.field = s), (0, n.setSearchParams)(o, g);
                        let l = c && c.headers ? c.headers : {};
                        return u.headers = Object.assign(Object.assign(Object.assign({}, h), l), r.headers), {
                            url: (0, n.toPathString)(o),
                            options: u
                        }
                    }, searchTransactions: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("searchTransactions", "query", e);
                        const i = new URL("/api/v1/search/transactions", n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), a), c = {}, u = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), void 0 !== e && (u.query = e), void 0 !== s && (u.page = s), (0, n.setSearchParams)(i, u);
                        let h = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), h), a.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }
                }
            }, e.SearchApiFp = function (t) {
                const s = (0, e.SearchApiAxiosParamCreator)(t);
                return {
                    async searchAccounts(e, a, o, c, u) {
                        const h = await s.searchAccounts(e, a, o, c, u);
                        return (0, n.createRequestFunction)(h, i.default, r.BASE_PATH, t)
                    }, async searchTransactions(e, a, o) {
                        const c = await s.searchTransactions(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }
                }
            }, e.SearchApiFactory = function (t, s, a) {
                const i = (0, e.SearchApiFp)(t);
                return {
                    searchAccounts: (t, e, n, r, o) => i.searchAccounts(t, e, n, r, o).then((t => t(a, s))),
                    searchTransactions: (t, e, n) => i.searchTransactions(t, e, n).then((t => t(a, s)))
                }
            };

            class R extends r.BaseAPI {
                searchAccounts(t, s, a, i, n) {
                    return (0, e.SearchApiFp)(this.configuration).searchAccounts(t, s, a, i, n).then((t => t(this.axios, this.basePath)))
                }

                searchTransactions(t, s, a) {
                    return (0, e.SearchApiFp)(this.configuration).searchTransactions(t, s, a).then((t => t(this.axios, this.basePath)))
                }
            }

            e.SearchApi = R, e.SummaryApiAxiosParamCreator = function (t) {
                return {
                    getBasicSummary: async (e, s, a, i = {}) => {
                        (0, n.assertParamExists)("getBasicSummary", "start", e), (0, n.assertParamExists)("getBasicSummary", "end", s);
                        const r = new URL("/api/v1/summary/basic", n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), i), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== e && (h.start = e instanceof Date ? e.toISOString().substr(0, 10) : e), void 0 !== s && (h.end = s instanceof Date ? s.toISOString().substr(0, 10) : s), void 0 !== a && (h.currency_code = a), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), i.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }
                }
            }, e.SummaryApiFp = function (t) {
                const s = (0, e.SummaryApiAxiosParamCreator)(t);
                return {
                    async getBasicSummary(e, a, o, c) {
                        const u = await s.getBasicSummary(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }
                }
            }, e.SummaryApiFactory = function (t, s, a) {
                const i = (0, e.SummaryApiFp)(t);
                return {getBasicSummary: (t, e, n, r) => i.getBasicSummary(t, e, n, r).then((t => t(a, s)))}
            };

            class E extends r.BaseAPI {
                getBasicSummary(t, s, a, i) {
                    return (0, e.SummaryApiFp)(this.configuration).getBasicSummary(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }
            }

            e.SummaryApi = E, e.TagsApiAxiosParamCreator = function (t) {
                return {
                    deleteTag: async (e, s = {}) => {
                        (0, n.assertParamExists)("deleteTag", "tag", e);
                        const a = "/api/v1/tags/{tag}".replace("{tag}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "DELETE"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getTag: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("getTag", "tag", e);
                        const i = "/api/v1/tags/{tag}".replace("{tag}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), a), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== s && (h.page = s), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), a.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, listAttachmentByTag: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("listAttachmentByTag", "tag", e);
                        const i = "/api/v1/tags/{tag}/attachments".replace("{tag}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), a), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== s && (h.page = s), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), a.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, listTag: async (e, s = {}) => {
                        const a = new URL("/api/v1/tags", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "GET"}, i), s), o = {}, c = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), void 0 !== e && (c.page = e), (0, n.setSearchParams)(a, c);
                        let u = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), u), s.headers), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, listTransactionByTag: async (e, s, a, i, r, o = {}) => {
                        (0, n.assertParamExists)("listTransactionByTag", "tag", e);
                        const c = "/api/v1/tags/{tag}/transactions".replace("{tag}", encodeURIComponent(String(e))),
                            u = new URL(c, n.DUMMY_BASE_URL);
                        let h;
                        t && (h = t.baseOptions);
                        const g = Object.assign(Object.assign({method: "GET"}, h), o), l = {}, d = {};
                        await (0, n.setOAuthToObject)(l, "firefly_iii_auth", [], t), void 0 !== s && (d.page = s), void 0 !== a && (d.start = a instanceof Date ? a.toISOString().substr(0, 10) : a), void 0 !== i && (d.end = i instanceof Date ? i.toISOString().substr(0, 10) : i), void 0 !== r && (d.type = r), (0, n.setSearchParams)(u, d);
                        let p = h && h.headers ? h.headers : {};
                        return g.headers = Object.assign(Object.assign(Object.assign({}, l), p), o.headers), {
                            url: (0, n.toPathString)(u),
                            options: g
                        }
                    }, storeTag: async (e, s = {}) => {
                        (0, n.assertParamExists)("storeTag", "tagModelStore", e);
                        const a = new URL("/api/v1/tags", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "POST"}, i), s), o = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), o["Content-Type"] = "application/json", (0, n.setSearchParams)(a, {});
                        let c = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), c), s.headers), r.data = (0, n.serializeDataIfNeeded)(e, r, t), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, updateTag: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("updateTag", "tag", e), (0, n.assertParamExists)("updateTag", "tagModelUpdate", s);
                        const i = "/api/v1/tags/{tag}".replace("{tag}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "PUT"}, o), a), u = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), u["Content-Type"] = "application/json", (0, n.setSearchParams)(r, {});
                        let h = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), h), a.headers), c.data = (0, n.serializeDataIfNeeded)(s, c, t), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }
                }
            }, e.TagsApiFp = function (t) {
                const s = (0, e.TagsApiAxiosParamCreator)(t);
                return {
                    async deleteTag(e, a) {
                        const o = await s.deleteTag(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async getTag(e, a, o) {
                        const c = await s.getTag(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async listAttachmentByTag(e, a, o) {
                        const c = await s.listAttachmentByTag(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async listTag(e, a) {
                        const o = await s.listTag(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async listTransactionByTag(e, a, o, c, u, h) {
                        const g = await s.listTransactionByTag(e, a, o, c, u, h);
                        return (0, n.createRequestFunction)(g, i.default, r.BASE_PATH, t)
                    }, async storeTag(e, a) {
                        const o = await s.storeTag(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async updateTag(e, a, o) {
                        const c = await s.updateTag(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }
                }
            }, e.TagsApiFactory = function (t, s, a) {
                const i = (0, e.TagsApiFp)(t);
                return {
                    deleteTag: (t, e) => i.deleteTag(t, e).then((t => t(a, s))),
                    getTag: (t, e, n) => i.getTag(t, e, n).then((t => t(a, s))),
                    listAttachmentByTag: (t, e, n) => i.listAttachmentByTag(t, e, n).then((t => t(a, s))),
                    listTag: (t, e) => i.listTag(t, e).then((t => t(a, s))),
                    listTransactionByTag: (t, e, n, r, o, c) => i.listTransactionByTag(t, e, n, r, o, c).then((t => t(a, s))),
                    storeTag: (t, e) => i.storeTag(t, e).then((t => t(a, s))),
                    updateTag: (t, e, n) => i.updateTag(t, e, n).then((t => t(a, s)))
                }
            };

            class U extends r.BaseAPI {
                deleteTag(t, s) {
                    return (0, e.TagsApiFp)(this.configuration).deleteTag(t, s).then((t => t(this.axios, this.basePath)))
                }

                getTag(t, s, a) {
                    return (0, e.TagsApiFp)(this.configuration).getTag(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                listAttachmentByTag(t, s, a) {
                    return (0, e.TagsApiFp)(this.configuration).listAttachmentByTag(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                listTag(t, s) {
                    return (0, e.TagsApiFp)(this.configuration).listTag(t, s).then((t => t(this.axios, this.basePath)))
                }

                listTransactionByTag(t, s, a, i, n, r) {
                    return (0, e.TagsApiFp)(this.configuration).listTransactionByTag(t, s, a, i, n, r).then((t => t(this.axios, this.basePath)))
                }

                storeTag(t, s) {
                    return (0, e.TagsApiFp)(this.configuration).storeTag(t, s).then((t => t(this.axios, this.basePath)))
                }

                updateTag(t, s, a) {
                    return (0, e.TagsApiFp)(this.configuration).updateTag(t, s, a).then((t => t(this.axios, this.basePath)))
                }
            }

            e.TagsApi = U, e.TransactionsApiAxiosParamCreator = function (t) {
                return {
                    deleteTransaction: async (e, s = {}) => {
                        (0, n.assertParamExists)("deleteTransaction", "id", e);
                        const a = "/api/v1/transactions/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "DELETE"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, deleteTransactionJournal: async (e, s = {}) => {
                        (0, n.assertParamExists)("deleteTransactionJournal", "id", e);
                        const a = "/api/v1/transaction-journals/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "DELETE"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getTransaction: async (e, s = {}) => {
                        (0, n.assertParamExists)("getTransaction", "id", e);
                        const a = "/api/v1/transactions/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getTransactionByJournal: async (e, s = {}) => {
                        (0, n.assertParamExists)("getTransactionByJournal", "id", e);
                        const a = "/api/v1/transaction-journals/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, listAttachmentByTransaction: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("listAttachmentByTransaction", "id", e);
                        const i = "/api/v1/transactions/{id}/attachments".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), a), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== s && (h.page = s), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), a.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, listEventByTransaction: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("listEventByTransaction", "id", e);
                        const i = "/api/v1/transactions/{id}/piggy_bank_events".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), a), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== s && (h.page = s), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), a.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, listLinksByJournal: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("listLinksByJournal", "id", e);
                        const i = "/api/v1/transaction-journals/{id}/links".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), a), u = {}, h = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), void 0 !== s && (h.page = s), (0, n.setSearchParams)(r, h);
                        let g = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), g), a.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, listTransaction: async (e, s, a, i, r = {}) => {
                        const o = new URL("/api/v1/transactions", n.DUMMY_BASE_URL);
                        let c;
                        t && (c = t.baseOptions);
                        const u = Object.assign(Object.assign({method: "GET"}, c), r), h = {}, g = {};
                        await (0, n.setOAuthToObject)(h, "firefly_iii_auth", [], t), void 0 !== e && (g.page = e), void 0 !== s && (g.start = s instanceof Date ? s.toISOString().substr(0, 10) : s), void 0 !== a && (g.end = a instanceof Date ? a.toISOString().substr(0, 10) : a), void 0 !== i && (g.type = i), (0, n.setSearchParams)(o, g);
                        let l = c && c.headers ? c.headers : {};
                        return u.headers = Object.assign(Object.assign(Object.assign({}, h), l), r.headers), {
                            url: (0, n.toPathString)(o),
                            options: u
                        }
                    }, storeTransaction: async (e, s = {}) => {
                        (0, n.assertParamExists)("storeTransaction", "transactionStore", e);
                        const a = new URL("/api/v1/transactions", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "POST"}, i), s), o = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), o["Content-Type"] = "application/json", (0, n.setSearchParams)(a, {});
                        let c = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), c), s.headers), r.data = (0, n.serializeDataIfNeeded)(e, r, t), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, updateTransaction: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("updateTransaction", "id", e), (0, n.assertParamExists)("updateTransaction", "transactionUpdate", s);
                        const i = "/api/v1/transactions/{id}".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "PUT"}, o), a), u = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), u["Content-Type"] = "application/json", (0, n.setSearchParams)(r, {});
                        let h = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), h), a.headers), c.data = (0, n.serializeDataIfNeeded)(s, c, t), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }
                }
            }, e.TransactionsApiFp = function (t) {
                const s = (0, e.TransactionsApiAxiosParamCreator)(t);
                return {
                    async deleteTransaction(e, a) {
                        const o = await s.deleteTransaction(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async deleteTransactionJournal(e, a) {
                        const o = await s.deleteTransactionJournal(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async getTransaction(e, a) {
                        const o = await s.getTransaction(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async getTransactionByJournal(e, a) {
                        const o = await s.getTransactionByJournal(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async listAttachmentByTransaction(e, a, o) {
                        const c = await s.listAttachmentByTransaction(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async listEventByTransaction(e, a, o) {
                        const c = await s.listEventByTransaction(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async listLinksByJournal(e, a, o) {
                        const c = await s.listLinksByJournal(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async listTransaction(e, a, o, c, u) {
                        const h = await s.listTransaction(e, a, o, c, u);
                        return (0, n.createRequestFunction)(h, i.default, r.BASE_PATH, t)
                    }, async storeTransaction(e, a) {
                        const o = await s.storeTransaction(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async updateTransaction(e, a, o) {
                        const c = await s.updateTransaction(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }
                }
            }, e.TransactionsApiFactory = function (t, s, a) {
                const i = (0, e.TransactionsApiFp)(t);
                return {
                    deleteTransaction: (t, e) => i.deleteTransaction(t, e).then((t => t(a, s))),
                    deleteTransactionJournal: (t, e) => i.deleteTransactionJournal(t, e).then((t => t(a, s))),
                    getTransaction: (t, e) => i.getTransaction(t, e).then((t => t(a, s))),
                    getTransactionByJournal: (t, e) => i.getTransactionByJournal(t, e).then((t => t(a, s))),
                    listAttachmentByTransaction: (t, e, n) => i.listAttachmentByTransaction(t, e, n).then((t => t(a, s))),
                    listEventByTransaction: (t, e, n) => i.listEventByTransaction(t, e, n).then((t => t(a, s))),
                    listLinksByJournal: (t, e, n) => i.listLinksByJournal(t, e, n).then((t => t(a, s))),
                    listTransaction: (t, e, n, r, o) => i.listTransaction(t, e, n, r, o).then((t => t(a, s))),
                    storeTransaction: (t, e) => i.storeTransaction(t, e).then((t => t(a, s))),
                    updateTransaction: (t, e, n) => i.updateTransaction(t, e, n).then((t => t(a, s)))
                }
            };

            class C extends r.BaseAPI {
                deleteTransaction(t, s) {
                    return (0, e.TransactionsApiFp)(this.configuration).deleteTransaction(t, s).then((t => t(this.axios, this.basePath)))
                }

                deleteTransactionJournal(t, s) {
                    return (0, e.TransactionsApiFp)(this.configuration).deleteTransactionJournal(t, s).then((t => t(this.axios, this.basePath)))
                }

                getTransaction(t, s) {
                    return (0, e.TransactionsApiFp)(this.configuration).getTransaction(t, s).then((t => t(this.axios, this.basePath)))
                }

                getTransactionByJournal(t, s) {
                    return (0, e.TransactionsApiFp)(this.configuration).getTransactionByJournal(t, s).then((t => t(this.axios, this.basePath)))
                }

                listAttachmentByTransaction(t, s, a) {
                    return (0, e.TransactionsApiFp)(this.configuration).listAttachmentByTransaction(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                listEventByTransaction(t, s, a) {
                    return (0, e.TransactionsApiFp)(this.configuration).listEventByTransaction(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                listLinksByJournal(t, s, a) {
                    return (0, e.TransactionsApiFp)(this.configuration).listLinksByJournal(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                listTransaction(t, s, a, i, n) {
                    return (0, e.TransactionsApiFp)(this.configuration).listTransaction(t, s, a, i, n).then((t => t(this.axios, this.basePath)))
                }

                storeTransaction(t, s) {
                    return (0, e.TransactionsApiFp)(this.configuration).storeTransaction(t, s).then((t => t(this.axios, this.basePath)))
                }

                updateTransaction(t, s, a) {
                    return (0, e.TransactionsApiFp)(this.configuration).updateTransaction(t, s, a).then((t => t(this.axios, this.basePath)))
                }
            }

            e.TransactionsApi = C, e.UsersApiAxiosParamCreator = function (t) {
                return {
                    deleteUser: async (e, s = {}) => {
                        (0, n.assertParamExists)("deleteUser", "id", e);
                        const a = "/api/v1/users/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "DELETE"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getUser: async (e, s = {}) => {
                        (0, n.assertParamExists)("getUser", "id", e);
                        const a = "/api/v1/users/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, listUser: async (e, s = {}) => {
                        const a = new URL("/api/v1/users", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "GET"}, i), s), o = {}, c = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), void 0 !== e && (c.page = e), (0, n.setSearchParams)(a, c);
                        let u = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), u), s.headers), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, storeUser: async (e, s = {}) => {
                        (0, n.assertParamExists)("storeUser", "user", e);
                        const a = new URL("/api/v1/users", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "POST"}, i), s), o = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), o["Content-Type"] = "application/json", (0, n.setSearchParams)(a, {});
                        let c = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), c), s.headers), r.data = (0, n.serializeDataIfNeeded)(e, r, t), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, updateUser: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("updateUser", "id", e), (0, n.assertParamExists)("updateUser", "user", s);
                        const i = "/api/v1/users/{id}".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "PUT"}, o), a), u = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), u["Content-Type"] = "application/json", (0, n.setSearchParams)(r, {});
                        let h = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), h), a.headers), c.data = (0, n.serializeDataIfNeeded)(s, c, t), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }
                }
            }, e.UsersApiFp = function (t) {
                const s = (0, e.UsersApiAxiosParamCreator)(t);
                return {
                    async deleteUser(e, a) {
                        const o = await s.deleteUser(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async getUser(e, a) {
                        const o = await s.getUser(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async listUser(e, a) {
                        const o = await s.listUser(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async storeUser(e, a) {
                        const o = await s.storeUser(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async updateUser(e, a, o) {
                        const c = await s.updateUser(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }
                }
            }, e.UsersApiFactory = function (t, s, a) {
                const i = (0, e.UsersApiFp)(t);
                return {
                    deleteUser: (t, e) => i.deleteUser(t, e).then((t => t(a, s))),
                    getUser: (t, e) => i.getUser(t, e).then((t => t(a, s))),
                    listUser: (t, e) => i.listUser(t, e).then((t => t(a, s))),
                    storeUser: (t, e) => i.storeUser(t, e).then((t => t(a, s))),
                    updateUser: (t, e, n) => i.updateUser(t, e, n).then((t => t(a, s)))
                }
            };

            class x extends r.BaseAPI {
                deleteUser(t, s) {
                    return (0, e.UsersApiFp)(this.configuration).deleteUser(t, s).then((t => t(this.axios, this.basePath)))
                }

                getUser(t, s) {
                    return (0, e.UsersApiFp)(this.configuration).getUser(t, s).then((t => t(this.axios, this.basePath)))
                }

                listUser(t, s) {
                    return (0, e.UsersApiFp)(this.configuration).listUser(t, s).then((t => t(this.axios, this.basePath)))
                }

                storeUser(t, s) {
                    return (0, e.UsersApiFp)(this.configuration).storeUser(t, s).then((t => t(this.axios, this.basePath)))
                }

                updateUser(t, s, a) {
                    return (0, e.UsersApiFp)(this.configuration).updateUser(t, s, a).then((t => t(this.axios, this.basePath)))
                }
            }

            e.UsersApi = x, e.WebhooksApiAxiosParamCreator = function (t) {
                return {
                    deleteWebhook: async (e, s = {}) => {
                        (0, n.assertParamExists)("deleteWebhook", "id", e);
                        const a = "/api/v1/webhooks/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "DELETE"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, deleteWebhookMessage: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("deleteWebhookMessage", "id", e), (0, n.assertParamExists)("deleteWebhookMessage", "messageId", s);
                        const i = "/api/v1/webhooks/{id}/messages/{messageId}".replace("{id}", encodeURIComponent(String(e))).replace("{messageId}", encodeURIComponent(String(s))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "DELETE"}, o), a), u = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), (0, n.setSearchParams)(r, {});
                        let h = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), h), a.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, deleteWebhookMessageAttempt: async (e, s, a, i = {}) => {
                        (0, n.assertParamExists)("deleteWebhookMessageAttempt", "id", e), (0, n.assertParamExists)("deleteWebhookMessageAttempt", "messageId", s), (0, n.assertParamExists)("deleteWebhookMessageAttempt", "attemptId", a);
                        const r = "/api/v1/webhooks/{id}/messages/{messageId}/attempts/{attemptId}".replace("{id}", encodeURIComponent(String(e))).replace("{messageId}", encodeURIComponent(String(s))).replace("{attemptId}", encodeURIComponent(String(a))),
                            o = new URL(r, n.DUMMY_BASE_URL);
                        let c;
                        t && (c = t.baseOptions);
                        const u = Object.assign(Object.assign({method: "DELETE"}, c), i), h = {};
                        await (0, n.setOAuthToObject)(h, "firefly_iii_auth", [], t), (0, n.setSearchParams)(o, {});
                        let g = c && c.headers ? c.headers : {};
                        return u.headers = Object.assign(Object.assign(Object.assign({}, h), g), i.headers), {
                            url: (0, n.toPathString)(o),
                            options: u
                        }
                    }, getSingleWebhookMessage: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("getSingleWebhookMessage", "id", e), (0, n.assertParamExists)("getSingleWebhookMessage", "messageId", s);
                        const i = "/api/v1/webhooks/{id}/messages/{messageId}".replace("{id}", encodeURIComponent(String(e))).replace("{messageId}", encodeURIComponent(String(s))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "GET"}, o), a), u = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), (0, n.setSearchParams)(r, {});
                        let h = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), h), a.headers), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }, getSingleWebhookMessageAttempt: async (e, s, a, i = {}) => {
                        (0, n.assertParamExists)("getSingleWebhookMessageAttempt", "id", e), (0, n.assertParamExists)("getSingleWebhookMessageAttempt", "messageId", s), (0, n.assertParamExists)("getSingleWebhookMessageAttempt", "attemptId", a);
                        const r = "/api/v1/webhooks/{id}/messages/{messageId}/attempts/{attemptId}".replace("{id}", encodeURIComponent(String(e))).replace("{messageId}", encodeURIComponent(String(s))).replace("{attemptId}", encodeURIComponent(String(a))),
                            o = new URL(r, n.DUMMY_BASE_URL);
                        let c;
                        t && (c = t.baseOptions);
                        const u = Object.assign(Object.assign({method: "GET"}, c), i), h = {};
                        await (0, n.setOAuthToObject)(h, "firefly_iii_auth", [], t), (0, n.setSearchParams)(o, {});
                        let g = c && c.headers ? c.headers : {};
                        return u.headers = Object.assign(Object.assign(Object.assign({}, h), g), i.headers), {
                            url: (0, n.toPathString)(o),
                            options: u
                        }
                    }, getWebhook: async (e, s = {}) => {
                        (0, n.assertParamExists)("getWebhook", "id", e);
                        const a = "/api/v1/webhooks/{id}".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, getWebhookMessageAttempts: async (e, s, a, i = {}) => {
                        (0, n.assertParamExists)("getWebhookMessageAttempts", "id", e), (0, n.assertParamExists)("getWebhookMessageAttempts", "messageId", s);
                        const r = "/api/v1/webhooks/{id}/messages/{messageId}/attempts".replace("{id}", encodeURIComponent(String(e))).replace("{messageId}", encodeURIComponent(String(s))),
                            o = new URL(r, n.DUMMY_BASE_URL);
                        let c;
                        t && (c = t.baseOptions);
                        const u = Object.assign(Object.assign({method: "GET"}, c), i), h = {}, g = {};
                        await (0, n.setOAuthToObject)(h, "firefly_iii_auth", [], t), void 0 !== a && (g.page = a), (0, n.setSearchParams)(o, g);
                        let l = c && c.headers ? c.headers : {};
                        return u.headers = Object.assign(Object.assign(Object.assign({}, h), l), i.headers), {
                            url: (0, n.toPathString)(o),
                            options: u
                        }
                    }, getWebhookMessages: async (e, s = {}) => {
                        (0, n.assertParamExists)("getWebhookMessages", "id", e);
                        const a = "/api/v1/webhooks/{id}/messages".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "GET"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, listWebhook: async (e, s = {}) => {
                        const a = new URL("/api/v1/webhooks", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "GET"}, i), s), o = {}, c = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), void 0 !== e && (c.page = e), (0, n.setSearchParams)(a, c);
                        let u = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), u), s.headers), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, storeWebhook: async (e, s = {}) => {
                        (0, n.assertParamExists)("storeWebhook", "webhookStore", e);
                        const a = new URL("/api/v1/webhooks", n.DUMMY_BASE_URL);
                        let i;
                        t && (i = t.baseOptions);
                        const r = Object.assign(Object.assign({method: "POST"}, i), s), o = {};
                        await (0, n.setOAuthToObject)(o, "firefly_iii_auth", [], t), o["Content-Type"] = "application/json", (0, n.setSearchParams)(a, {});
                        let c = i && i.headers ? i.headers : {};
                        return r.headers = Object.assign(Object.assign(Object.assign({}, o), c), s.headers), r.data = (0, n.serializeDataIfNeeded)(e, r, t), {
                            url: (0, n.toPathString)(a),
                            options: r
                        }
                    }, submitWebook: async (e, s = {}) => {
                        (0, n.assertParamExists)("submitWebook", "id", e);
                        const a = "/api/v1/webhooks/{id}/submit".replace("{id}", encodeURIComponent(String(e))),
                            i = new URL(a, n.DUMMY_BASE_URL);
                        let r;
                        t && (r = t.baseOptions);
                        const o = Object.assign(Object.assign({method: "POST"}, r), s), c = {};
                        await (0, n.setOAuthToObject)(c, "firefly_iii_auth", [], t), (0, n.setSearchParams)(i, {});
                        let u = r && r.headers ? r.headers : {};
                        return o.headers = Object.assign(Object.assign(Object.assign({}, c), u), s.headers), {
                            url: (0, n.toPathString)(i),
                            options: o
                        }
                    }, updateWebhook: async (e, s, a = {}) => {
                        (0, n.assertParamExists)("updateWebhook", "id", e), (0, n.assertParamExists)("updateWebhook", "webhookUpdate", s);
                        const i = "/api/v1/webhooks/{id}".replace("{id}", encodeURIComponent(String(e))),
                            r = new URL(i, n.DUMMY_BASE_URL);
                        let o;
                        t && (o = t.baseOptions);
                        const c = Object.assign(Object.assign({method: "PUT"}, o), a), u = {};
                        await (0, n.setOAuthToObject)(u, "firefly_iii_auth", [], t), u["Content-Type"] = "application/json", (0, n.setSearchParams)(r, {});
                        let h = o && o.headers ? o.headers : {};
                        return c.headers = Object.assign(Object.assign(Object.assign({}, u), h), a.headers), c.data = (0, n.serializeDataIfNeeded)(s, c, t), {
                            url: (0, n.toPathString)(r),
                            options: c
                        }
                    }
                }
            }, e.WebhooksApiFp = function (t) {
                const s = (0, e.WebhooksApiAxiosParamCreator)(t);
                return {
                    async deleteWebhook(e, a) {
                        const o = await s.deleteWebhook(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async deleteWebhookMessage(e, a, o) {
                        const c = await s.deleteWebhookMessage(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async deleteWebhookMessageAttempt(e, a, o, c) {
                        const u = await s.deleteWebhookMessageAttempt(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }, async getSingleWebhookMessage(e, a, o) {
                        const c = await s.getSingleWebhookMessage(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }, async getSingleWebhookMessageAttempt(e, a, o, c) {
                        const u = await s.getSingleWebhookMessageAttempt(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }, async getWebhook(e, a) {
                        const o = await s.getWebhook(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async getWebhookMessageAttempts(e, a, o, c) {
                        const u = await s.getWebhookMessageAttempts(e, a, o, c);
                        return (0, n.createRequestFunction)(u, i.default, r.BASE_PATH, t)
                    }, async getWebhookMessages(e, a) {
                        const o = await s.getWebhookMessages(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async listWebhook(e, a) {
                        const o = await s.listWebhook(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async storeWebhook(e, a) {
                        const o = await s.storeWebhook(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async submitWebook(e, a) {
                        const o = await s.submitWebook(e, a);
                        return (0, n.createRequestFunction)(o, i.default, r.BASE_PATH, t)
                    }, async updateWebhook(e, a, o) {
                        const c = await s.updateWebhook(e, a, o);
                        return (0, n.createRequestFunction)(c, i.default, r.BASE_PATH, t)
                    }
                }
            }, e.WebhooksApiFactory = function (t, s, a) {
                const i = (0, e.WebhooksApiFp)(t);
                return {
                    deleteWebhook: (t, e) => i.deleteWebhook(t, e).then((t => t(a, s))),
                    deleteWebhookMessage: (t, e, n) => i.deleteWebhookMessage(t, e, n).then((t => t(a, s))),
                    deleteWebhookMessageAttempt: (t, e, n, r) => i.deleteWebhookMessageAttempt(t, e, n, r).then((t => t(a, s))),
                    getSingleWebhookMessage: (t, e, n) => i.getSingleWebhookMessage(t, e, n).then((t => t(a, s))),
                    getSingleWebhookMessageAttempt: (t, e, n, r) => i.getSingleWebhookMessageAttempt(t, e, n, r).then((t => t(a, s))),
                    getWebhook: (t, e) => i.getWebhook(t, e).then((t => t(a, s))),
                    getWebhookMessageAttempts: (t, e, n, r) => i.getWebhookMessageAttempts(t, e, n, r).then((t => t(a, s))),
                    getWebhookMessages: (t, e) => i.getWebhookMessages(t, e).then((t => t(a, s))),
                    listWebhook: (t, e) => i.listWebhook(t, e).then((t => t(a, s))),
                    storeWebhook: (t, e) => i.storeWebhook(t, e).then((t => t(a, s))),
                    submitWebook: (t, e) => i.submitWebook(t, e).then((t => t(a, s))),
                    updateWebhook: (t, e, n) => i.updateWebhook(t, e, n).then((t => t(a, s)))
                }
            };

            class w extends r.BaseAPI {
                deleteWebhook(t, s) {
                    return (0, e.WebhooksApiFp)(this.configuration).deleteWebhook(t, s).then((t => t(this.axios, this.basePath)))
                }

                deleteWebhookMessage(t, s, a) {
                    return (0, e.WebhooksApiFp)(this.configuration).deleteWebhookMessage(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                deleteWebhookMessageAttempt(t, s, a, i) {
                    return (0, e.WebhooksApiFp)(this.configuration).deleteWebhookMessageAttempt(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }

                getSingleWebhookMessage(t, s, a) {
                    return (0, e.WebhooksApiFp)(this.configuration).getSingleWebhookMessage(t, s, a).then((t => t(this.axios, this.basePath)))
                }

                getSingleWebhookMessageAttempt(t, s, a, i) {
                    return (0, e.WebhooksApiFp)(this.configuration).getSingleWebhookMessageAttempt(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }

                getWebhook(t, s) {
                    return (0, e.WebhooksApiFp)(this.configuration).getWebhook(t, s).then((t => t(this.axios, this.basePath)))
                }

                getWebhookMessageAttempts(t, s, a, i) {
                    return (0, e.WebhooksApiFp)(this.configuration).getWebhookMessageAttempts(t, s, a, i).then((t => t(this.axios, this.basePath)))
                }

                getWebhookMessages(t, s) {
                    return (0, e.WebhooksApiFp)(this.configuration).getWebhookMessages(t, s).then((t => t(this.axios, this.basePath)))
                }

                listWebhook(t, s) {
                    return (0, e.WebhooksApiFp)(this.configuration).listWebhook(t, s).then((t => t(this.axios, this.basePath)))
                }

                storeWebhook(t, s) {
                    return (0, e.WebhooksApiFp)(this.configuration).storeWebhook(t, s).then((t => t(this.axios, this.basePath)))
                }

                submitWebook(t, s) {
                    return (0, e.WebhooksApiFp)(this.configuration).submitWebook(t, s).then((t => t(this.axios, this.basePath)))
                }

                updateWebhook(t, s, a) {
                    return (0, e.WebhooksApiFp)(this.configuration).updateWebhook(t, s, a).then((t => t(this.axios, this.basePath)))
                }
            }

            e.WebhooksApi = w
        }, 690: function (t, e, s) {
            "use strict";
            var a = this && this.__importDefault || function (t) {
                return t && t.__esModule ? t : {default: t}
            };
            Object.defineProperty(e, "__esModule", {value: !0}), e.RequiredError = e.BaseAPI = e.COLLECTION_FORMATS = e.BASE_PATH = void 0;
            const i = a(s(669));
            e.BASE_PATH = "https://demo.firefly-iii.org".replace(/\/+$/, ""), e.COLLECTION_FORMATS = {
                csv: ",",
                ssv: " ",
                tsv: "\t",
                pipes: "|"
            }, e.BaseAPI = class {
                constructor(t, s = e.BASE_PATH, a = i.default) {
                    this.basePath = s, this.axios = a, t && (this.configuration = t, this.basePath = t.basePath || this.basePath)
                }
            };

            class n extends Error {
                constructor(t, e) {
                    super(e), this.field = t, this.name = "RequiredError"
                }
            }

            e.RequiredError = n
        }, 774: (t, e, s) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0}), e.createRequestFunction = e.toPathString = e.serializeDataIfNeeded = e.setSearchParams = e.setOAuthToObject = e.setBearerAuthToObject = e.setBasicAuthToObject = e.setApiKeyToObject = e.assertParamExists = e.DUMMY_BASE_URL = void 0;
            const a = s(690);
            e.DUMMY_BASE_URL = "https://example.com", e.assertParamExists = function (t, e, s) {
                if (null == s) throw new a.RequiredError(e, `Required parameter ${e} was null or undefined when calling ${t}.`)
            }, e.setApiKeyToObject = async function (t, e, s) {
                if (s && s.apiKey) {
                    const a = "function" == typeof s.apiKey ? await s.apiKey(e) : await s.apiKey;
                    t[e] = a
                }
            }, e.setBasicAuthToObject = function (t, e) {
                e && (e.username || e.password) && (t.auth = {username: e.username, password: e.password})
            }, e.setBearerAuthToObject = async function (t, e) {
                if (e && e.accessToken) {
                    const s = "function" == typeof e.accessToken ? await e.accessToken() : await e.accessToken;
                    t.Authorization = "Bearer " + s
                }
            }, e.setOAuthToObject = async function (t, e, s, a) {
                if (a && a.accessToken) {
                    const i = "function" == typeof a.accessToken ? await a.accessToken(e, s) : await a.accessToken;
                    t.Authorization = "Bearer " + i
                }
            }, e.setSearchParams = function (t, ...e) {
                const s = new URLSearchParams(t.search);
                for (const t of e) for (const e in t) if (Array.isArray(t[e])) {
                    s.delete(e);
                    for (const a of t[e]) s.append(e, a)
                } else s.set(e, t[e]);
                t.search = s.toString()
            }, e.serializeDataIfNeeded = function (t, e, s) {
                const a = "string" != typeof t;
                return (a && s && s.isJsonMime ? s.isJsonMime(e.headers["Content-Type"]) : a) ? JSON.stringify(void 0 !== t ? t : {}) : t || ""
            }, e.toPathString = function (t) {
                return t.pathname + t.search + t.hash
            }, e.createRequestFunction = function (t, e, s, a) {
                return (i = e, n = s) => {
                    const r = Object.assign(Object.assign({}, t.options), {url: ((null == a ? void 0 : a.basePath) || n) + t.url});
                    return i.request(r)
                }
            }
        }, 470: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {value: !0}), e.Configuration = void 0, e.Configuration = class {
                constructor(t = {}) {
                    this.apiKey = t.apiKey, this.username = t.username, this.password = t.password, this.accessToken = t.accessToken, this.basePath = t.basePath, this.baseOptions = t.baseOptions, this.formDataCtor = t.formDataCtor
                }

                isJsonMime(t) {
                    const e = new RegExp("^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$", "i");
                    return null !== t && (e.test(t) || "application/json-patch+json" === t.toLowerCase())
                }
            }
        }, 478: function (t, e, s) {
            "use strict";
            var a = this && this.__createBinding || (Object.create ? function (t, e, s, a) {
                void 0 === a && (a = s);
                var i = Object.getOwnPropertyDescriptor(e, s);
                i && !("get" in i ? !e.__esModule : i.writable || i.configurable) || (i = {
                    enumerable: !0,
                    get: function () {
                        return e[s]
                    }
                }), Object.defineProperty(t, a, i)
            } : function (t, e, s, a) {
                void 0 === a && (a = s), t[a] = e[s]
            }), i = this && this.__exportStar || function (t, e) {
                for (var s in t) "default" === s || Object.prototype.hasOwnProperty.call(e, s) || a(e, t, s)
            };
            Object.defineProperty(e, "__esModule", {value: !0}), i(s(627), e), i(s(470), e)
        }, 136: function (t, e, s) {
            "use strict";
            var a = this && this.__awaiter || function (t, e, s, a) {
                return new (s || (s = Promise))((function (i, n) {
                    function r(t) {
                        try {
                            c(a.next(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function o(t) {
                        try {
                            c(a.throw(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof s ? e : new s((function (t) {
                            t(e)
                        }))).then(r, o)
                    }

                    c((a = a.apply(t, e || [])).next())
                }))
            }, i = this && this.__importDefault || function (t) {
                return t && t.__esModule ? t : {default: t}
            };
            Object.defineProperty(e, "__esModule", {value: !0}), e.getBearerToken = void 0;
            const n = s(593), r = s(478), o = i(s(669)), c = t => {
                chrome.runtime.sendMessage({action: "log", value: t}, (() => {
                }))
            };

            function u() {
                return chrome.storage.local.get(["ffiii"]).then((t => (c(`from local storage: ${JSON.stringify(t)}`), t.ffiii.bearer_token)))
            }

            e.getBearerToken = u;
            const h = (t, e) => a(void 0, void 0, void 0, (function* () {
                return c(`token request body for public client: ${e}`), yield fetch(t, {
                    method: "POST",
                    headers: {"Content-Type": "application/x-www-form-urlencoded", Accept: "application/json"},
                    body: e.toString()
                }).then((t => t.json())).then((t => t))
            }));
            chrome.runtime.onMessage.addListener(((t, e, s) => {
                if (c(`[message] ${JSON.stringify(t)}`), "submit" === t.action) (i = t.value, a(void 0, void 0, void 0, (function* () {
                    c(`params: ${JSON.stringify(i)}`);
                    const t = (0, n.generateCodeVerifier)();
                    c(`generate code_verifier: ${t}`);
                    const e = yield((t, e) => a(void 0, void 0, void 0, (function* () {
                        const s = new URL(t.authorizationEndpoint);
                        s.searchParams.set("client_id", t.clientId), s.searchParams.set("redirect_uri", t.redirectUri), s.searchParams.set("response_type", "code"), s.searchParams.set("code_challenge_method", "S256");
                        const a = yield(0, n.generateCodeChallenge)(e);
                        return s.searchParams.set("code_challenge", a), s.toString()
                    })))(i, t);
                    c(`build authorizationUrl: ${e}`), chrome.identity.launchWebAuthFlow({
                        url: e,
                        interactive: !0
                    }, (e => a(void 0, void 0, void 0, (function* () {
                        if (void 0 === e) return void c("[error] callbackUrlString is undefined");
                        c(`callbacked url: ${e}`);
                        const s = new URL(e).searchParams.get("code");
                        if (null === s) return void c("[error] code is null");
                        c(`code: ${s}`);
                        const a = (0, n.createURLSearchParams)({
                            grant_type: "authorization_code",
                            client_id: i.clientId,
                            redirect_uri: i.redirectUri,
                            code: s,
                            code_verifier: t
                        }), r = yield h(i.tokenEndpoint, a);
                        try {
                            JSON.stringify(r)
                        } catch (t) {
                            c(`[error] got malformed json response: ${r}, error: ${t}`)
                        }
                        return chrome.runtime.sendMessage({action: "result", value: JSON.stringify(r)}, (() => {
                        })), chrome.storage.local.set({ffiii: {bearer_token: r.access_token}}, (() => {
                        }))
                    }))))
                }))).catch((t => {
                    c(`[error] ${t}`)
                })); else {
                    if ("store_transactions" !== t.action) return !1;
                    c("storing tx"), u().then((t => {
                        new r.AccountsApi(new r.Configuration({accessToken: t}), "http://http://192.168.0.124:4575", o.default.create({adapter: o.default.defaults.adapter})).listAccount().then((t => c(JSON.stringify(t))))
                    }))
                }
                var i;
                return !0
            }))
        }, 593: function (t, e) {
            "use strict";
            var s = this && this.__awaiter || function (t, e, s, a) {
                return new (s || (s = Promise))((function (i, n) {
                    function r(t) {
                        try {
                            c(a.next(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function o(t) {
                        try {
                            c(a.throw(t))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof s ? e : new s((function (t) {
                            t(e)
                        }))).then(r, o)
                    }

                    c((a = a.apply(t, e || [])).next())
                }))
            };
            Object.defineProperty(e, "__esModule", {value: !0}), e.createURLSearchParams = e.generateCodeChallenge = e.generateCodeVerifier = void 0, e.generateCodeVerifier = (t = 43) => {
                const e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~";
                return Array.from(crypto.getRandomValues(new Uint32Array(t))).map((t => e[t % e.length])).join("")
            }, e.generateCodeChallenge = t => s(void 0, void 0, void 0, (function* () {
                var e = yield crypto.subtle.digest("SHA-256", (new TextEncoder).encode(t));
                return btoa(String.fromCharCode(...new Uint8Array(e))).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
            })), e.createURLSearchParams = t => {
                const e = new URLSearchParams;
                return Object.keys(t).forEach((s => e.append(s, t[s]))), e
            }
        }
    }, e = {};
    !function s(a) {
        var i = e[a];
        if (void 0 !== i) return i.exports;
        var n = e[a] = {exports: {}};
        return t[a].call(n.exports, n, n.exports, s), n.exports
    }(136)
})();