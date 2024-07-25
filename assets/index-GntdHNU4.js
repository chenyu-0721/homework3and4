;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i)
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === 'childList')
        for (const r of o.addedNodes) r.tagName === 'LINK' && r.rel === 'modulepreload' && n(r)
  }).observe(document, { childList: !0, subtree: !0 })
  function s(i) {
    const o = {}
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    )
  }
  function n(i) {
    if (i.ep) return
    i.ep = !0
    const o = s(i)
    fetch(i.href, o)
  }
})()
/**
 * @vue/shared v3.4.32
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function oo(e, t) {
  const s = new Set(e.split(','))
  return (n) => s.has(n)
}
const ht = {},
  fs = [],
  Gt = () => {},
  Jc = () => !1,
  Bn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  ro = (e) => e.startsWith('onUpdate:'),
  wt = Object.assign,
  lo = (e, t) => {
    const s = e.indexOf(t)
    s > -1 && e.splice(s, 1)
  },
  Zc = Object.prototype.hasOwnProperty,
  tt = (e, t) => Zc.call(e, t),
  K = Array.isArray,
  ds = (e) => en(e) === '[object Map]',
  Kn = (e) => en(e) === '[object Set]',
  qo = (e) => en(e) === '[object Date]',
  z = (e) => typeof e == 'function',
  _t = (e) => typeof e == 'string',
  de = (e) => typeof e == 'symbol',
  ut = (e) => e !== null && typeof e == 'object',
  Il = (e) => (ut(e) || z(e)) && z(e.then) && z(e.catch),
  Pl = Object.prototype.toString,
  en = (e) => Pl.call(e),
  tu = (e) => en(e).slice(8, -1),
  Ll = (e) => en(e) === '[object Object]',
  ao = (e) => _t(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Hs = oo(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  Wn = (e) => {
    const t = Object.create(null)
    return (s) => t[s] || (t[s] = e(s))
  },
  eu = /-(\w)/g,
  ne = Wn((e) => e.replace(eu, (t, s) => (s ? s.toUpperCase() : ''))),
  su = /\B([A-Z])/g,
  Ze = Wn((e) => e.replace(su, '-$1').toLowerCase()),
  Un = Wn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  ui = Wn((e) => (e ? `on${Un(e)}` : '')),
  Pe = (e, t) => !Object.is(e, t),
  An = (e, ...t) => {
    for (let s = 0; s < e.length; s++) e[s](...t)
  },
  Rl = (e, t, s, n = !1) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: n, value: s })
  },
  Dl = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let Qo
const Ml = () =>
  Qo ||
  (Qo =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function co(e) {
  if (K(e)) {
    const t = {}
    for (let s = 0; s < e.length; s++) {
      const n = e[s],
        i = _t(n) ? ru(n) : co(n)
      if (i) for (const o in i) t[o] = i[o]
    }
    return t
  } else if (_t(e) || ut(e)) return e
}
const nu = /;(?![^(]*\))/g,
  iu = /:([^]+)/,
  ou = /\/\*[^]*?\*\//g
function ru(e) {
  const t = {}
  return (
    e
      .replace(ou, '')
      .split(nu)
      .forEach((s) => {
        if (s) {
          const n = s.split(iu)
          n.length > 1 && (t[n[0].trim()] = n[1].trim())
        }
      }),
    t
  )
}
function hs(e) {
  let t = ''
  if (_t(e)) t = e
  else if (K(e))
    for (let s = 0; s < e.length; s++) {
      const n = hs(e[s])
      n && (t += n + ' ')
    }
  else if (ut(e)) for (const s in e) e[s] && (t += s + ' ')
  return t.trim()
}
const lu = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  au = oo(lu)
function kl(e) {
  return !!e || e === ''
}
function cu(e, t) {
  if (e.length !== t.length) return !1
  let s = !0
  for (let n = 0; s && n < e.length; n++) s = Yn(e[n], t[n])
  return s
}
function Yn(e, t) {
  if (e === t) return !0
  let s = qo(e),
    n = qo(t)
  if (s || n) return s && n ? e.getTime() === t.getTime() : !1
  if (((s = de(e)), (n = de(t)), s || n)) return e === t
  if (((s = K(e)), (n = K(t)), s || n)) return s && n ? cu(e, t) : !1
  if (((s = ut(e)), (n = ut(t)), s || n)) {
    if (!s || !n) return !1
    const i = Object.keys(e).length,
      o = Object.keys(t).length
    if (i !== o) return !1
    for (const r in e) {
      const l = e.hasOwnProperty(r),
        a = t.hasOwnProperty(r)
      if ((l && !a) || (!l && a) || !Yn(e[r], t[r])) return !1
    }
  }
  return String(e) === String(t)
}
function uu(e, t) {
  return e.findIndex((s) => Yn(s, t))
}
const Vl = (e) => !!(e && e.__v_isRef === !0),
  Hl = (e) =>
    _t(e)
      ? e
      : e == null
        ? ''
        : K(e) || (ut(e) && (e.toString === Pl || !z(e.toString)))
          ? Vl(e)
            ? Hl(e.value)
            : JSON.stringify(e, jl, 2)
          : String(e),
  jl = (e, t) =>
    Vl(t)
      ? jl(e, t.value)
      : ds(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (s, [n, i], o) => ((s[fi(n, o) + ' =>'] = i), s),
              {}
            )
          }
        : Kn(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((s) => fi(s)) }
          : de(t)
            ? fi(t)
            : ut(t) && !K(t) && !Ll(t)
              ? String(t)
              : t,
  fi = (e, t = '') => {
    var s
    return de(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  }
/**
 * @vue/reactivity v3.4.32
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let ee
class Fl {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = ee),
      !t && ee && (this.index = (ee.scopes || (ee.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const s = ee
      try {
        return (ee = this), t()
      } finally {
        ee = s
      }
    }
  }
  on() {
    ee = this
  }
  off() {
    ee = this.parent
  }
  stop(t) {
    if (this._active) {
      let s, n
      for (s = 0, n = this.effects.length; s < n; s++) this.effects[s].stop()
      for (s = 0, n = this.cleanups.length; s < n; s++) this.cleanups[s]()
      if (this.scopes) for (s = 0, n = this.scopes.length; s < n; s++) this.scopes[s].stop(!0)
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop()
        i && i !== this && ((this.parent.scopes[this.index] = i), (i.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function fu(e) {
  return new Fl(e)
}
function du(e, t = ee) {
  t && t.active && t.effects.push(e)
}
function hu() {
  return ee
}
let Ye
class uo {
  constructor(t, s, n, i) {
    ;(this.fn = t),
      (this.trigger = s),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      du(this, i)
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      ;(this._dirtyLevel = 1), Me()
      for (let t = 0; t < this._depsLength; t++) {
        const s = this.deps[t]
        if (s.computed && (pu(s.computed), this._dirtyLevel >= 4)) break
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), ke()
    }
    return this._dirtyLevel >= 4
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn()
    let t = Ne,
      s = Ye
    try {
      return (Ne = !0), (Ye = this), this._runnings++, Xo(this), this.fn()
    } finally {
      Jo(this), this._runnings--, (Ye = s), (Ne = t)
    }
  }
  stop() {
    this.active && (Xo(this), Jo(this), this.onStop && this.onStop(), (this.active = !1))
  }
}
function pu(e) {
  return e.value
}
function Xo(e) {
  e._trackId++, (e._depsLength = 0)
}
function Jo(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) Bl(e.deps[t], e)
    e.deps.length = e._depsLength
  }
}
function Bl(e, t) {
  const s = e.get(t)
  s !== void 0 && t._trackId !== s && (e.delete(t), e.size === 0 && e.cleanup())
}
let Ne = !0,
  ki = 0
const Kl = []
function Me() {
  Kl.push(Ne), (Ne = !1)
}
function ke() {
  const e = Kl.pop()
  Ne = e === void 0 ? !0 : e
}
function fo() {
  ki++
}
function ho() {
  for (ki--; !ki && Vi.length; ) Vi.shift()()
}
function Wl(e, t, s) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId)
    const n = e.deps[e._depsLength]
    n !== t ? (n && Bl(n, e), (e.deps[e._depsLength++] = t)) : e._depsLength++
  }
}
const Vi = []
function Ul(e, t, s) {
  fo()
  for (const n of e.keys()) {
    let i
    n._dirtyLevel < t &&
      (i ?? (i = e.get(n) === n._trackId)) &&
      (n._shouldSchedule || (n._shouldSchedule = n._dirtyLevel === 0), (n._dirtyLevel = t)),
      n._shouldSchedule &&
        (i ?? (i = e.get(n) === n._trackId)) &&
        (n.trigger(),
        (!n._runnings || n.allowRecurse) &&
          n._dirtyLevel !== 2 &&
          ((n._shouldSchedule = !1), n.scheduler && Vi.push(n.scheduler)))
  }
  ho()
}
const Yl = (e, t) => {
    const s = new Map()
    return (s.cleanup = e), (s.computed = t), s
  },
  Hi = new WeakMap(),
  ze = Symbol(''),
  ji = Symbol('')
function Pt(e, t, s) {
  if (Ne && Ye) {
    let n = Hi.get(e)
    n || Hi.set(e, (n = new Map()))
    let i = n.get(s)
    i || n.set(s, (i = Yl(() => n.delete(s)))), Wl(Ye, i)
  }
}
function _e(e, t, s, n, i, o) {
  const r = Hi.get(e)
  if (!r) return
  let l = []
  if (t === 'clear') l = [...r.values()]
  else if (s === 'length' && K(e)) {
    const a = Number(n)
    r.forEach((u, c) => {
      ;(c === 'length' || (!de(c) && c >= a)) && l.push(u)
    })
  } else
    switch ((s !== void 0 && l.push(r.get(s)), t)) {
      case 'add':
        K(e) ? ao(s) && l.push(r.get('length')) : (l.push(r.get(ze)), ds(e) && l.push(r.get(ji)))
        break
      case 'delete':
        K(e) || (l.push(r.get(ze)), ds(e) && l.push(r.get(ji)))
        break
      case 'set':
        ds(e) && l.push(r.get(ze))
        break
    }
  fo()
  for (const a of l) a && Ul(a, 4)
  ho()
}
const mu = oo('__proto__,__v_isRef,__isVue'),
  zl = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(de)
  ),
  Zo = _u()
function _u() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...s) {
        const n = ot(this)
        for (let o = 0, r = this.length; o < r; o++) Pt(n, 'get', o + '')
        const i = n[t](...s)
        return i === -1 || i === !1 ? n[t](...s.map(ot)) : i
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...s) {
        Me(), fo()
        const n = ot(this)[t].apply(this, s)
        return ho(), ke(), n
      }
    }),
    e
  )
}
function gu(e) {
  de(e) || (e = String(e))
  const t = ot(this)
  return Pt(t, 'has', e), t.hasOwnProperty(e)
}
class Gl {
  constructor(t = !1, s = !1) {
    ;(this._isReadonly = t), (this._isShallow = s)
  }
  get(t, s, n) {
    const i = this._isReadonly,
      o = this._isShallow
    if (s === '__v_isReactive') return !i
    if (s === '__v_isReadonly') return i
    if (s === '__v_isShallow') return o
    if (s === '__v_raw')
      return n === (i ? (o ? Nu : Jl) : o ? Xl : Ql).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(n)
        ? t
        : void 0
    const r = K(t)
    if (!i) {
      if (r && tt(Zo, s)) return Reflect.get(Zo, s, n)
      if (s === 'hasOwnProperty') return gu
    }
    const l = Reflect.get(t, s, n)
    return (de(s) ? zl.has(s) : mu(s)) || (i || Pt(t, 'get', s), o)
      ? l
      : Lt(l)
        ? r && ao(s)
          ? l
          : l.value
        : ut(l)
          ? i
            ? ta(l)
            : sn(l)
          : l
  }
}
class ql extends Gl {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, s, n, i) {
    let o = t[s]
    if (!this._isShallow) {
      const a = qe(o)
      if ((!gs(n) && !qe(n) && ((o = ot(o)), (n = ot(n))), !K(t) && Lt(o) && !Lt(n)))
        return a ? !1 : ((o.value = n), !0)
    }
    const r = K(t) && ao(s) ? Number(s) < t.length : tt(t, s),
      l = Reflect.set(t, s, n, i)
    return t === ot(i) && (r ? Pe(n, o) && _e(t, 'set', s, n) : _e(t, 'add', s, n)), l
  }
  deleteProperty(t, s) {
    const n = tt(t, s)
    t[s]
    const i = Reflect.deleteProperty(t, s)
    return i && n && _e(t, 'delete', s, void 0), i
  }
  has(t, s) {
    const n = Reflect.has(t, s)
    return (!de(s) || !zl.has(s)) && Pt(t, 'has', s), n
  }
  ownKeys(t) {
    return Pt(t, 'iterate', K(t) ? 'length' : ze), Reflect.ownKeys(t)
  }
}
class vu extends Gl {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, s) {
    return !0
  }
  deleteProperty(t, s) {
    return !0
  }
}
const bu = new ql(),
  Eu = new vu(),
  yu = new ql(!0)
const po = (e) => e,
  zn = (e) => Reflect.getPrototypeOf(e)
function un(e, t, s = !1, n = !1) {
  e = e.__v_raw
  const i = ot(e),
    o = ot(t)
  s || (Pe(t, o) && Pt(i, 'get', t), Pt(i, 'get', o))
  const { has: r } = zn(i),
    l = n ? po : s ? go : Gs
  if (r.call(i, t)) return l(e.get(t))
  if (r.call(i, o)) return l(e.get(o))
  e !== i && e.get(t)
}
function fn(e, t = !1) {
  const s = this.__v_raw,
    n = ot(s),
    i = ot(e)
  return (
    t || (Pe(e, i) && Pt(n, 'has', e), Pt(n, 'has', i)), e === i ? s.has(e) : s.has(e) || s.has(i)
  )
}
function dn(e, t = !1) {
  return (e = e.__v_raw), !t && Pt(ot(e), 'iterate', ze), Reflect.get(e, 'size', e)
}
function tr(e, t = !1) {
  !t && !gs(e) && !qe(e) && (e = ot(e))
  const s = ot(this)
  return zn(s).has.call(s, e) || (s.add(e), _e(s, 'add', e, e)), this
}
function er(e, t, s = !1) {
  !s && !gs(t) && !qe(t) && (t = ot(t))
  const n = ot(this),
    { has: i, get: o } = zn(n)
  let r = i.call(n, e)
  r || ((e = ot(e)), (r = i.call(n, e)))
  const l = o.call(n, e)
  return n.set(e, t), r ? Pe(t, l) && _e(n, 'set', e, t) : _e(n, 'add', e, t), this
}
function sr(e) {
  const t = ot(this),
    { has: s, get: n } = zn(t)
  let i = s.call(t, e)
  i || ((e = ot(e)), (i = s.call(t, e))), n && n.call(t, e)
  const o = t.delete(e)
  return i && _e(t, 'delete', e, void 0), o
}
function nr() {
  const e = ot(this),
    t = e.size !== 0,
    s = e.clear()
  return t && _e(e, 'clear', void 0, void 0), s
}
function hn(e, t) {
  return function (n, i) {
    const o = this,
      r = o.__v_raw,
      l = ot(r),
      a = t ? po : e ? go : Gs
    return !e && Pt(l, 'iterate', ze), r.forEach((u, c) => n.call(i, a(u), a(c), o))
  }
}
function pn(e, t, s) {
  return function (...n) {
    const i = this.__v_raw,
      o = ot(i),
      r = ds(o),
      l = e === 'entries' || (e === Symbol.iterator && r),
      a = e === 'keys' && r,
      u = i[e](...n),
      c = s ? po : t ? go : Gs
    return (
      !t && Pt(o, 'iterate', a ? ji : ze),
      {
        next() {
          const { value: h, done: p } = u.next()
          return p ? { value: h, done: p } : { value: l ? [c(h[0]), c(h[1])] : c(h), done: p }
        },
        [Symbol.iterator]() {
          return this
        }
      }
    )
  }
}
function Ae(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function wu() {
  const e = {
      get(o) {
        return un(this, o)
      },
      get size() {
        return dn(this)
      },
      has: fn,
      add: tr,
      set: er,
      delete: sr,
      clear: nr,
      forEach: hn(!1, !1)
    },
    t = {
      get(o) {
        return un(this, o, !1, !0)
      },
      get size() {
        return dn(this)
      },
      has: fn,
      add(o) {
        return tr.call(this, o, !0)
      },
      set(o, r) {
        return er.call(this, o, r, !0)
      },
      delete: sr,
      clear: nr,
      forEach: hn(!1, !0)
    },
    s = {
      get(o) {
        return un(this, o, !0)
      },
      get size() {
        return dn(this, !0)
      },
      has(o) {
        return fn.call(this, o, !0)
      },
      add: Ae('add'),
      set: Ae('set'),
      delete: Ae('delete'),
      clear: Ae('clear'),
      forEach: hn(!0, !1)
    },
    n = {
      get(o) {
        return un(this, o, !0, !0)
      },
      get size() {
        return dn(this, !0)
      },
      has(o) {
        return fn.call(this, o, !0)
      },
      add: Ae('add'),
      set: Ae('set'),
      delete: Ae('delete'),
      clear: Ae('clear'),
      forEach: hn(!0, !0)
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((o) => {
      ;(e[o] = pn(o, !1, !1)),
        (s[o] = pn(o, !0, !1)),
        (t[o] = pn(o, !1, !0)),
        (n[o] = pn(o, !0, !0))
    }),
    [e, s, t, n]
  )
}
const [Au, Tu, xu, Cu] = wu()
function mo(e, t) {
  const s = t ? (e ? Cu : xu) : e ? Tu : Au
  return (n, i, o) =>
    i === '__v_isReactive'
      ? !e
      : i === '__v_isReadonly'
        ? e
        : i === '__v_raw'
          ? n
          : Reflect.get(tt(s, i) && i in n ? s : n, i, o)
}
const Su = { get: mo(!1, !1) },
  Ou = { get: mo(!1, !0) },
  $u = { get: mo(!0, !1) }
const Ql = new WeakMap(),
  Xl = new WeakMap(),
  Jl = new WeakMap(),
  Nu = new WeakMap()
function Iu(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function Pu(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Iu(tu(e))
}
function sn(e) {
  return qe(e) ? e : _o(e, !1, bu, Su, Ql)
}
function Zl(e) {
  return _o(e, !1, yu, Ou, Xl)
}
function ta(e) {
  return _o(e, !0, Eu, $u, Jl)
}
function _o(e, t, s, n, i) {
  if (!ut(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const o = i.get(e)
  if (o) return o
  const r = Pu(e)
  if (r === 0) return e
  const l = new Proxy(e, r === 2 ? n : s)
  return i.set(e, l), l
}
function js(e) {
  return qe(e) ? js(e.__v_raw) : !!(e && e.__v_isReactive)
}
function qe(e) {
  return !!(e && e.__v_isReadonly)
}
function gs(e) {
  return !!(e && e.__v_isShallow)
}
function ea(e) {
  return e ? !!e.__v_raw : !1
}
function ot(e) {
  const t = e && e.__v_raw
  return t ? ot(t) : e
}
function sa(e) {
  return Object.isExtensible(e) && Rl(e, '__v_skip', !0), e
}
const Gs = (e) => (ut(e) ? sn(e) : e),
  go = (e) => (ut(e) ? ta(e) : e)
class na {
  constructor(t, s, n, i) {
    ;(this.getter = t),
      (this._setter = s),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new uo(
        () => t(this._value),
        () => Tn(this, this.effect._dirtyLevel === 2 ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !i),
      (this.__v_isReadonly = n)
  }
  get value() {
    const t = ot(this)
    return (
      (!t._cacheable || t.effect.dirty) && Pe(t._value, (t._value = t.effect.run())) && Tn(t, 4),
      ia(t),
      t.effect._dirtyLevel >= 2 && Tn(t, 2),
      t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
  get _dirty() {
    return this.effect.dirty
  }
  set _dirty(t) {
    this.effect.dirty = t
  }
}
function Lu(e, t, s = !1) {
  let n, i
  const o = z(e)
  return o ? ((n = e), (i = Gt)) : ((n = e.get), (i = e.set)), new na(n, i, o || !i, s)
}
function ia(e) {
  var t
  Ne &&
    Ye &&
    ((e = ot(e)),
    Wl(
      Ye,
      (t = e.dep) != null ? t : (e.dep = Yl(() => (e.dep = void 0), e instanceof na ? e : void 0))
    ))
}
function Tn(e, t = 4, s, n) {
  e = ot(e)
  const i = e.dep
  i && Ul(i, t)
}
function Lt(e) {
  return !!(e && e.__v_isRef === !0)
}
function Gn(e) {
  return oa(e, !1)
}
function Ru(e) {
  return oa(e, !0)
}
function oa(e, t) {
  return Lt(e) ? e : new Du(e, t)
}
class Du {
  constructor(t, s) {
    ;(this.__v_isShallow = s),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = s ? t : ot(t)),
      (this._value = s ? t : Gs(t))
  }
  get value() {
    return ia(this), this._value
  }
  set value(t) {
    const s = this.__v_isShallow || gs(t) || qe(t)
    ;(t = s ? t : ot(t)),
      Pe(t, this._rawValue) &&
        (this._rawValue, (this._rawValue = t), (this._value = s ? t : Gs(t)), Tn(this, 4))
  }
}
function ps(e) {
  return Lt(e) ? e.value : e
}
const Mu = {
  get: (e, t, s) => ps(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const i = e[t]
    return Lt(i) && !Lt(s) ? ((i.value = s), !0) : Reflect.set(e, t, s, n)
  }
}
function ra(e) {
  return js(e) ? e : new Proxy(e, Mu)
}
/**
 * @vue/runtime-core v3.4.32
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Ie(e, t, s, n) {
  try {
    return n ? e(...n) : e()
  } catch (i) {
    qn(i, t, s)
  }
}
function se(e, t, s, n) {
  if (z(e)) {
    const i = Ie(e, t, s, n)
    return (
      i &&
        Il(i) &&
        i.catch((o) => {
          qn(o, t, s)
        }),
      i
    )
  }
  if (K(e)) {
    const i = []
    for (let o = 0; o < e.length; o++) i.push(se(e[o], t, s, n))
    return i
  }
}
function qn(e, t, s, n = !0) {
  const i = t ? t.vnode : null
  if (t) {
    let o = t.parent
    const r = t.proxy,
      l = `https://vuejs.org/error-reference/#runtime-${s}`
    for (; o; ) {
      const u = o.ec
      if (u) {
        for (let c = 0; c < u.length; c++) if (u[c](e, r, l) === !1) return
      }
      o = o.parent
    }
    const a = t.appContext.config.errorHandler
    if (a) {
      Me(), Ie(a, null, 10, [e, r, l]), ke()
      return
    }
  }
  ku(e, s, i, n)
}
function ku(e, t, s, n = !0) {
  console.error(e)
}
let qs = !1,
  Fi = !1
const Et = []
let ce = 0
const ms = []
let Ce = null,
  Ke = 0
const la = Promise.resolve()
let vo = null
function bo(e) {
  const t = vo || la
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Vu(e) {
  let t = ce + 1,
    s = Et.length
  for (; t < s; ) {
    const n = (t + s) >>> 1,
      i = Et[n],
      o = Qs(i)
    o < e || (o === e && i.pre) ? (t = n + 1) : (s = n)
  }
  return t
}
function Eo(e) {
  ;(!Et.length || !Et.includes(e, qs && e.allowRecurse ? ce + 1 : ce)) &&
    (e.id == null ? Et.push(e) : Et.splice(Vu(e.id), 0, e), aa())
}
function aa() {
  !qs && !Fi && ((Fi = !0), (vo = la.then(ua)))
}
function Hu(e) {
  const t = Et.indexOf(e)
  t > ce && Et.splice(t, 1)
}
function ju(e) {
  K(e) ? ms.push(...e) : (!Ce || !Ce.includes(e, e.allowRecurse ? Ke + 1 : Ke)) && ms.push(e), aa()
}
function ir(e, t, s = qs ? ce + 1 : 0) {
  for (; s < Et.length; s++) {
    const n = Et[s]
    if (n && n.pre) {
      if (e && n.id !== e.uid) continue
      Et.splice(s, 1), s--, n()
    }
  }
}
function ca(e) {
  if (ms.length) {
    const t = [...new Set(ms)].sort((s, n) => Qs(s) - Qs(n))
    if (((ms.length = 0), Ce)) {
      Ce.push(...t)
      return
    }
    for (Ce = t, Ke = 0; Ke < Ce.length; Ke++) {
      const s = Ce[Ke]
      s.active !== !1 && s()
    }
    ;(Ce = null), (Ke = 0)
  }
}
const Qs = (e) => (e.id == null ? 1 / 0 : e.id),
  Fu = (e, t) => {
    const s = Qs(e) - Qs(t)
    if (s === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return s
  }
function ua(e) {
  ;(Fi = !1), (qs = !0), Et.sort(Fu)
  try {
    for (ce = 0; ce < Et.length; ce++) {
      const t = Et[ce]
      t && t.active !== !1 && Ie(t, t.i, t.i ? 15 : 14)
    }
  } finally {
    ;(ce = 0), (Et.length = 0), ca(), (qs = !1), (vo = null), (Et.length || ms.length) && ua()
  }
}
let Bt = null,
  fa = null
function Rn(e) {
  const t = Bt
  return (Bt = e), (fa = (e && e.type.__scopeId) || null), t
}
function jt(e, t = Bt, s) {
  if (!t || e._n) return e
  const n = (...i) => {
    n._d && _r(-1)
    const o = Rn(t)
    let r
    try {
      r = e(...i)
    } finally {
      Rn(o), n._d && _r(1)
    }
    return r
  }
  return (n._n = !0), (n._c = !0), (n._d = !0), n
}
function Bu(e, t) {
  if (Bt === null) return e
  const s = ti(Bt),
    n = e.dirs || (e.dirs = [])
  for (let i = 0; i < t.length; i++) {
    let [o, r, l, a = ht] = t[i]
    o &&
      (z(o) && (o = { mounted: o, updated: o }),
      o.deep && $e(r),
      n.push({ dir: o, instance: s, value: r, oldValue: void 0, arg: l, modifiers: a }))
  }
  return e
}
function Fe(e, t, s, n) {
  const i = e.dirs,
    o = t && t.dirs
  for (let r = 0; r < i.length; r++) {
    const l = i[r]
    o && (l.oldValue = o[r].value)
    let a = l.dir[n]
    a && (Me(), se(a, s, 8, [e.el, l, e, t]), ke())
  }
}
function da(e, t) {
  e.shapeFlag & 6 && e.component
    ? da(e.component.subTree, t)
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
}
/*! #__NO_SIDE_EFFECTS__ */ function ha(e, t) {
  return z(e) ? wt({ name: e.name }, t, { setup: e }) : e
}
const xn = (e) => !!e.type.__asyncLoader,
  pa = (e) => e.type.__isKeepAlive
function Ku(e, t) {
  ma(e, 'a', t)
}
function Wu(e, t) {
  ma(e, 'da', t)
}
function ma(e, t, s = yt) {
  const n =
    e.__wdc ||
    (e.__wdc = () => {
      let i = s
      for (; i; ) {
        if (i.isDeactivated) return
        i = i.parent
      }
      return e()
    })
  if ((Qn(t, n, s), s)) {
    let i = s.parent
    for (; i && i.parent; ) pa(i.parent.vnode) && Uu(n, t, s, i), (i = i.parent)
  }
}
function Uu(e, t, s, n) {
  const i = Qn(t, e, n, !0)
  yo(() => {
    lo(n[t], i)
  }, s)
}
function Qn(e, t, s = yt, n = !1) {
  if (s) {
    const i = s[e] || (s[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...r) => {
          Me()
          const l = nn(s),
            a = se(t, s, e, r)
          return l(), ke(), a
        })
    return n ? i.unshift(o) : i.push(o), o
  }
}
const ye =
    (e) =>
    (t, s = yt) => {
      ;(!Zn || e === 'sp') && Qn(e, (...n) => t(...n), s)
    },
  Yu = ye('bm'),
  _a = ye('m'),
  zu = ye('bu'),
  Gu = ye('u'),
  qu = ye('bum'),
  yo = ye('um'),
  Qu = ye('sp'),
  Xu = ye('rtg'),
  Ju = ye('rtc')
function Zu(e, t = yt) {
  Qn('ec', e, t)
}
const ga = 'components'
function vs(e, t) {
  return ef(ga, e, !0, t) || e
}
const tf = Symbol.for('v-ndc')
function ef(e, t, s = !0, n = !1) {
  const i = Bt || yt
  if (i) {
    const o = i.type
    if (e === ga) {
      const l = Yf(o, !1)
      if (l && (l === t || l === ne(t) || l === Un(ne(t)))) return o
    }
    const r = or(i[e] || o[e], t) || or(i.appContext[e], t)
    return !r && n ? o : r
  }
}
function or(e, t) {
  return e && (e[t] || e[ne(t)] || e[Un(ne(t))])
}
function di(e, t, s, n) {
  let i
  const o = s
  if (K(e) || _t(e)) {
    i = new Array(e.length)
    for (let r = 0, l = e.length; r < l; r++) i[r] = t(e[r], r, void 0, o)
  } else if (typeof e == 'number') {
    i = new Array(e)
    for (let r = 0; r < e; r++) i[r] = t(r + 1, r, void 0, o)
  } else if (ut(e))
    if (e[Symbol.iterator]) i = Array.from(e, (r, l) => t(r, l, void 0, o))
    else {
      const r = Object.keys(e)
      i = new Array(r.length)
      for (let l = 0, a = r.length; l < a; l++) {
        const u = r[l]
        i[l] = t(e[u], u, l, o)
      }
    }
  else i = []
  return i
}
const Bi = (e) => (e ? (Ma(e) ? ti(e) : Bi(e.parent)) : null),
  Fs = wt(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Bi(e.parent),
    $root: (e) => Bi(e.root),
    $emit: (e) => e.emit,
    $options: (e) => wo(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ;(e.effect.dirty = !0), Eo(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = bo.bind(e.proxy)),
    $watch: (e) => xf.bind(e)
  }),
  hi = (e, t) => e !== ht && !e.__isScriptSetup && tt(e, t),
  sf = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0
      const { ctx: s, setupState: n, data: i, props: o, accessCache: r, type: l, appContext: a } = e
      let u
      if (t[0] !== '$') {
        const m = r[t]
        if (m !== void 0)
          switch (m) {
            case 1:
              return n[t]
            case 2:
              return i[t]
            case 4:
              return s[t]
            case 3:
              return o[t]
          }
        else {
          if (hi(n, t)) return (r[t] = 1), n[t]
          if (i !== ht && tt(i, t)) return (r[t] = 2), i[t]
          if ((u = e.propsOptions[0]) && tt(u, t)) return (r[t] = 3), o[t]
          if (s !== ht && tt(s, t)) return (r[t] = 4), s[t]
          Ki && (r[t] = 0)
        }
      }
      const c = Fs[t]
      let h, p
      if (c) return t === '$attrs' && Pt(e.attrs, 'get', ''), c(e)
      if ((h = l.__cssModules) && (h = h[t])) return h
      if (s !== ht && tt(s, t)) return (r[t] = 4), s[t]
      if (((p = a.config.globalProperties), tt(p, t))) return p[t]
    },
    set({ _: e }, t, s) {
      const { data: n, setupState: i, ctx: o } = e
      return hi(i, t)
        ? ((i[t] = s), !0)
        : n !== ht && tt(n, t)
          ? ((n[t] = s), !0)
          : tt(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((o[t] = s), !0)
    },
    has(
      { _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: i, propsOptions: o } },
      r
    ) {
      let l
      return (
        !!s[r] ||
        (e !== ht && tt(e, r)) ||
        hi(t, r) ||
        ((l = o[0]) && tt(l, r)) ||
        tt(n, r) ||
        tt(Fs, r) ||
        tt(i.config.globalProperties, r)
      )
    },
    defineProperty(e, t, s) {
      return (
        s.get != null ? (e._.accessCache[t] = 0) : tt(s, 'value') && this.set(e, t, s.value, null),
        Reflect.defineProperty(e, t, s)
      )
    }
  }
function rr(e) {
  return K(e) ? e.reduce((t, s) => ((t[s] = null), t), {}) : e
}
let Ki = !0
function nf(e) {
  const t = wo(e),
    s = e.proxy,
    n = e.ctx
  ;(Ki = !1), t.beforeCreate && lr(t.beforeCreate, e, 'bc')
  const {
    data: i,
    computed: o,
    methods: r,
    watch: l,
    provide: a,
    inject: u,
    created: c,
    beforeMount: h,
    mounted: p,
    beforeUpdate: m,
    updated: S,
    activated: A,
    deactivated: P,
    beforeDestroy: M,
    beforeUnmount: L,
    destroyed: O,
    unmounted: k,
    render: B,
    renderTracked: R,
    renderTriggered: U,
    errorCaptured: st,
    serverPrefetch: at,
    expose: nt,
    inheritAttrs: ft,
    components: mt,
    directives: ct,
    filters: Dt
  } = t
  if ((u && of(u, n, null), r))
    for (const G in r) {
      const Q = r[G]
      z(Q) && (n[G] = Q.bind(s))
    }
  if (i) {
    const G = i.call(s, s)
    ut(G) && (e.data = sn(G))
  }
  if (((Ki = !0), o))
    for (const G in o) {
      const Q = o[G],
        bt = z(Q) ? Q.bind(s, s) : z(Q.get) ? Q.get.bind(s, s) : Gt,
        Mt = !z(Q) && z(Q.set) ? Q.set.bind(s) : Gt,
        $t = Ft({ get: bt, set: Mt })
      Object.defineProperty(n, G, {
        enumerable: !0,
        configurable: !0,
        get: () => $t.value,
        set: (pt) => ($t.value = pt)
      })
    }
  if (l) for (const G in l) va(l[G], n, s, G)
  if (a) {
    const G = z(a) ? a.call(s) : a
    Reflect.ownKeys(G).forEach((Q) => {
      Cn(Q, G[Q])
    })
  }
  c && lr(c, e, 'c')
  function et(G, Q) {
    K(Q) ? Q.forEach((bt) => G(bt.bind(s))) : Q && G(Q.bind(s))
  }
  if (
    (et(Yu, h),
    et(_a, p),
    et(zu, m),
    et(Gu, S),
    et(Ku, A),
    et(Wu, P),
    et(Zu, st),
    et(Ju, R),
    et(Xu, U),
    et(qu, L),
    et(yo, k),
    et(Qu, at),
    K(nt))
  )
    if (nt.length) {
      const G = e.exposed || (e.exposed = {})
      nt.forEach((Q) => {
        Object.defineProperty(G, Q, { get: () => s[Q], set: (bt) => (s[Q] = bt) })
      })
    } else e.exposed || (e.exposed = {})
  B && e.render === Gt && (e.render = B),
    ft != null && (e.inheritAttrs = ft),
    mt && (e.components = mt),
    ct && (e.directives = ct)
}
function of(e, t, s = Gt) {
  K(e) && (e = Wi(e))
  for (const n in e) {
    const i = e[n]
    let o
    ut(i)
      ? 'default' in i
        ? (o = ge(i.from || n, i.default, !0))
        : (o = ge(i.from || n))
      : (o = ge(i)),
      Lt(o)
        ? Object.defineProperty(t, n, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (r) => (o.value = r)
          })
        : (t[n] = o)
  }
}
function lr(e, t, s) {
  se(K(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy), t, s)
}
function va(e, t, s, n) {
  const i = n.includes('.') ? Pa(s, n) : () => s[n]
  if (_t(e)) {
    const o = t[e]
    z(o) && Sn(i, o)
  } else if (z(e)) Sn(i, e.bind(s))
  else if (ut(e))
    if (K(e)) e.forEach((o) => va(o, t, s, n))
    else {
      const o = z(e.handler) ? e.handler.bind(s) : t[e.handler]
      z(o) && Sn(i, o, e)
    }
}
function wo(e) {
  const t = e.type,
    { mixins: s, extends: n } = t,
    {
      mixins: i,
      optionsCache: o,
      config: { optionMergeStrategies: r }
    } = e.appContext,
    l = o.get(t)
  let a
  return (
    l
      ? (a = l)
      : !i.length && !s && !n
        ? (a = t)
        : ((a = {}), i.length && i.forEach((u) => Dn(a, u, r, !0)), Dn(a, t, r)),
    ut(t) && o.set(t, a),
    a
  )
}
function Dn(e, t, s, n = !1) {
  const { mixins: i, extends: o } = t
  o && Dn(e, o, s, !0), i && i.forEach((r) => Dn(e, r, s, !0))
  for (const r in t)
    if (!(n && r === 'expose')) {
      const l = rf[r] || (s && s[r])
      e[r] = l ? l(e[r], t[r]) : t[r]
    }
  return e
}
const rf = {
  data: ar,
  props: cr,
  emits: cr,
  methods: Vs,
  computed: Vs,
  beforeCreate: Tt,
  created: Tt,
  beforeMount: Tt,
  mounted: Tt,
  beforeUpdate: Tt,
  updated: Tt,
  beforeDestroy: Tt,
  beforeUnmount: Tt,
  destroyed: Tt,
  unmounted: Tt,
  activated: Tt,
  deactivated: Tt,
  errorCaptured: Tt,
  serverPrefetch: Tt,
  components: Vs,
  directives: Vs,
  watch: af,
  provide: ar,
  inject: lf
}
function ar(e, t) {
  return t
    ? e
      ? function () {
          return wt(z(e) ? e.call(this, this) : e, z(t) ? t.call(this, this) : t)
        }
      : t
    : e
}
function lf(e, t) {
  return Vs(Wi(e), Wi(t))
}
function Wi(e) {
  if (K(e)) {
    const t = {}
    for (let s = 0; s < e.length; s++) t[e[s]] = e[s]
    return t
  }
  return e
}
function Tt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Vs(e, t) {
  return e ? wt(Object.create(null), e, t) : t
}
function cr(e, t) {
  return e
    ? K(e) && K(t)
      ? [...new Set([...e, ...t])]
      : wt(Object.create(null), rr(e), rr(t ?? {}))
    : t
}
function af(e, t) {
  if (!e) return t
  if (!t) return e
  const s = wt(Object.create(null), e)
  for (const n in t) s[n] = Tt(e[n], t[n])
  return s
}
function ba() {
  return {
    app: null,
    config: {
      isNativeTag: Jc,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  }
}
let cf = 0
function uf(e, t) {
  return function (n, i = null) {
    z(n) || (n = wt({}, n)), i != null && !ut(i) && (i = null)
    const o = ba(),
      r = new WeakSet()
    let l = !1
    const a = (o.app = {
      _uid: cf++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Gf,
      get config() {
        return o.config
      },
      set config(u) {},
      use(u, ...c) {
        return (
          r.has(u) ||
            (u && z(u.install) ? (r.add(u), u.install(a, ...c)) : z(u) && (r.add(u), u(a, ...c))),
          a
        )
      },
      mixin(u) {
        return o.mixins.includes(u) || o.mixins.push(u), a
      },
      component(u, c) {
        return c ? ((o.components[u] = c), a) : o.components[u]
      },
      directive(u, c) {
        return c ? ((o.directives[u] = c), a) : o.directives[u]
      },
      mount(u, c, h) {
        if (!l) {
          const p = Y(n, i)
          return (
            (p.appContext = o),
            h === !0 ? (h = 'svg') : h === !1 && (h = void 0),
            c && t ? t(p, u) : e(p, u, h),
            (l = !0),
            (a._container = u),
            (u.__vue_app__ = a),
            ti(p.component)
          )
        }
      },
      unmount() {
        l && (e(null, a._container), delete a._container.__vue_app__)
      },
      provide(u, c) {
        return (o.provides[u] = c), a
      },
      runWithContext(u) {
        const c = Bs
        Bs = a
        try {
          return u()
        } finally {
          Bs = c
        }
      }
    })
    return a
  }
}
let Bs = null
function Cn(e, t) {
  if (yt) {
    let s = yt.provides
    const n = yt.parent && yt.parent.provides
    n === s && (s = yt.provides = Object.create(n)), (s[e] = t)
  }
}
function ge(e, t, s = !1) {
  const n = yt || Bt
  if (n || Bs) {
    const i = n
      ? n.parent == null
        ? n.vnode.appContext && n.vnode.appContext.provides
        : n.parent.provides
      : Bs._context.provides
    if (i && e in i) return i[e]
    if (arguments.length > 1) return s && z(t) ? t.call(n && n.proxy) : t
  }
}
const Ea = {},
  ya = () => Object.create(Ea),
  wa = (e) => Object.getPrototypeOf(e) === Ea
function ff(e, t, s, n = !1) {
  const i = {},
    o = ya()
  ;(e.propsDefaults = Object.create(null)), Aa(e, t, i, o)
  for (const r in e.propsOptions[0]) r in i || (i[r] = void 0)
  s ? (e.props = n ? i : Zl(i)) : e.type.props ? (e.props = i) : (e.props = o), (e.attrs = o)
}
function df(e, t, s, n) {
  const {
      props: i,
      attrs: o,
      vnode: { patchFlag: r }
    } = e,
    l = ot(i),
    [a] = e.propsOptions
  let u = !1
  if ((n || r > 0) && !(r & 16)) {
    if (r & 8) {
      const c = e.vnode.dynamicProps
      for (let h = 0; h < c.length; h++) {
        let p = c[h]
        if (Xn(e.emitsOptions, p)) continue
        const m = t[p]
        if (a)
          if (tt(o, p)) m !== o[p] && ((o[p] = m), (u = !0))
          else {
            const S = ne(p)
            i[S] = Ui(a, l, S, m, e, !1)
          }
        else m !== o[p] && ((o[p] = m), (u = !0))
      }
    }
  } else {
    Aa(e, t, i, o) && (u = !0)
    let c
    for (const h in l)
      (!t || (!tt(t, h) && ((c = Ze(h)) === h || !tt(t, c)))) &&
        (a
          ? s && (s[h] !== void 0 || s[c] !== void 0) && (i[h] = Ui(a, l, h, void 0, e, !0))
          : delete i[h])
    if (o !== l) for (const h in o) (!t || !tt(t, h)) && (delete o[h], (u = !0))
  }
  u && _e(e.attrs, 'set', '')
}
function Aa(e, t, s, n) {
  const [i, o] = e.propsOptions
  let r = !1,
    l
  if (t)
    for (let a in t) {
      if (Hs(a)) continue
      const u = t[a]
      let c
      i && tt(i, (c = ne(a)))
        ? !o || !o.includes(c)
          ? (s[c] = u)
          : ((l || (l = {}))[c] = u)
        : Xn(e.emitsOptions, a) || ((!(a in n) || u !== n[a]) && ((n[a] = u), (r = !0)))
    }
  if (o) {
    const a = ot(s),
      u = l || ht
    for (let c = 0; c < o.length; c++) {
      const h = o[c]
      s[h] = Ui(i, a, h, u[h], e, !tt(u, h))
    }
  }
  return r
}
function Ui(e, t, s, n, i, o) {
  const r = e[s]
  if (r != null) {
    const l = tt(r, 'default')
    if (l && n === void 0) {
      const a = r.default
      if (r.type !== Function && !r.skipFactory && z(a)) {
        const { propsDefaults: u } = i
        if (s in u) n = u[s]
        else {
          const c = nn(i)
          ;(n = u[s] = a.call(null, t)), c()
        }
      } else n = a
    }
    r[0] && (o && !l ? (n = !1) : r[1] && (n === '' || n === Ze(s)) && (n = !0))
  }
  return n
}
const hf = new WeakMap()
function Ta(e, t, s = !1) {
  const n = s ? hf : t.propsCache,
    i = n.get(e)
  if (i) return i
  const o = e.props,
    r = {},
    l = []
  let a = !1
  if (!z(e)) {
    const c = (h) => {
      a = !0
      const [p, m] = Ta(h, t, !0)
      wt(r, p), m && l.push(...m)
    }
    !s && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  if (!o && !a) return ut(e) && n.set(e, fs), fs
  if (K(o))
    for (let c = 0; c < o.length; c++) {
      const h = ne(o[c])
      ur(h) && (r[h] = ht)
    }
  else if (o)
    for (const c in o) {
      const h = ne(c)
      if (ur(h)) {
        const p = o[c],
          m = (r[h] = K(p) || z(p) ? { type: p } : wt({}, p))
        if (m) {
          const S = hr(Boolean, m.type),
            A = hr(String, m.type)
          ;(m[0] = S > -1), (m[1] = A < 0 || S < A), (S > -1 || tt(m, 'default')) && l.push(h)
        }
      }
    }
  const u = [r, l]
  return ut(e) && n.set(e, u), u
}
function ur(e) {
  return e[0] !== '$' && !Hs(e)
}
function fr(e) {
  return e === null
    ? 'null'
    : typeof e == 'function'
      ? e.name || ''
      : (typeof e == 'object' && e.constructor && e.constructor.name) || ''
}
function dr(e, t) {
  return fr(e) === fr(t)
}
function hr(e, t) {
  return K(t) ? t.findIndex((s) => dr(s, e)) : z(t) && dr(t, e) ? 0 : -1
}
const xa = (e) => e[0] === '_' || e === '$stable',
  Ao = (e) => (K(e) ? e.map(ae) : [ae(e)]),
  pf = (e, t, s) => {
    if (t._n) return t
    const n = jt((...i) => Ao(t(...i)), s)
    return (n._c = !1), n
  },
  Ca = (e, t, s) => {
    const n = e._ctx
    for (const i in e) {
      if (xa(i)) continue
      const o = e[i]
      if (z(o)) t[i] = pf(i, o, n)
      else if (o != null) {
        const r = Ao(o)
        t[i] = () => r
      }
    }
  },
  Sa = (e, t) => {
    const s = Ao(t)
    e.slots.default = () => s
  },
  Oa = (e, t, s) => {
    for (const n in t) (s || n !== '_') && (e[n] = t[n])
  },
  mf = (e, t, s) => {
    const n = (e.slots = ya())
    if (e.vnode.shapeFlag & 32) {
      const i = t._
      i ? (Oa(n, t, s), s && Rl(n, '_', i, !0)) : Ca(t, n)
    } else t && Sa(e, t)
  },
  _f = (e, t, s) => {
    const { vnode: n, slots: i } = e
    let o = !0,
      r = ht
    if (n.shapeFlag & 32) {
      const l = t._
      l ? (s && l === 1 ? (o = !1) : Oa(i, t, s)) : ((o = !t.$stable), Ca(t, i)), (r = t)
    } else t && (Sa(e, t), (r = { default: 1 }))
    if (o) for (const l in i) !xa(l) && r[l] == null && delete i[l]
  }
function Yi(e, t, s, n, i = !1) {
  if (K(e)) {
    e.forEach((p, m) => Yi(p, t && (K(t) ? t[m] : t), s, n, i))
    return
  }
  if (xn(n) && !i) return
  const o = n.shapeFlag & 4 ? ti(n.component) : n.el,
    r = i ? null : o,
    { i: l, r: a } = e,
    u = t && t.r,
    c = l.refs === ht ? (l.refs = {}) : l.refs,
    h = l.setupState
  if (
    (u != null &&
      u !== a &&
      (_t(u) ? ((c[u] = null), tt(h, u) && (h[u] = null)) : Lt(u) && (u.value = null)),
    z(a))
  )
    Ie(a, l, 12, [r, c])
  else {
    const p = _t(a),
      m = Lt(a)
    if (p || m) {
      const S = () => {
        if (e.f) {
          const A = p ? (tt(h, a) ? h[a] : c[a]) : a.value
          i
            ? K(A) && lo(A, o)
            : K(A)
              ? A.includes(o) || A.push(o)
              : p
                ? ((c[a] = [o]), tt(h, a) && (h[a] = c[a]))
                : ((a.value = [o]), e.k && (c[e.k] = a.value))
        } else p ? ((c[a] = r), tt(h, a) && (h[a] = r)) : m && ((a.value = r), e.k && (c[e.k] = r))
      }
      r ? ((S.id = -1), Nt(S, s)) : S()
    }
  }
}
const gf = Symbol('_vte'),
  vf = (e) => e.__isTeleport,
  Nt = Lf
function bf(e) {
  return Ef(e)
}
function Ef(e, t) {
  const s = Ml()
  s.__VUE__ = !0
  const {
      insert: n,
      remove: i,
      patchProp: o,
      createElement: r,
      createText: l,
      createComment: a,
      setText: u,
      setElementText: c,
      parentNode: h,
      nextSibling: p,
      setScopeId: m = Gt,
      insertStaticContent: S
    } = e,
    A = (f, d, _, b = null, g = null, T = null, N = void 0, x = null, C = !!d.dynamicChildren) => {
      if (f === d) return
      f && !Rs(f, d) && ((b = v(f)), pt(f, g, T, !0), (f = null)),
        d.patchFlag === -2 && ((C = !1), (d.dynamicChildren = null))
      const { type: w, ref: D, shapeFlag: j } = d
      switch (w) {
        case Jn:
          P(f, d, _, b)
          break
        case Qe:
          M(f, d, _, b)
          break
        case On:
          f == null && L(d, _, b, N)
          break
        case zt:
          mt(f, d, _, b, g, T, N, x, C)
          break
        default:
          j & 1
            ? B(f, d, _, b, g, T, N, x, C)
            : j & 6
              ? ct(f, d, _, b, g, T, N, x, C)
              : (j & 64 || j & 128) && w.process(f, d, _, b, g, T, N, x, C, V)
      }
      D != null && g && Yi(D, f && f.ref, T, d || f, !d)
    },
    P = (f, d, _, b) => {
      if (f == null) n((d.el = l(d.children)), _, b)
      else {
        const g = (d.el = f.el)
        d.children !== f.children && u(g, d.children)
      }
    },
    M = (f, d, _, b) => {
      f == null ? n((d.el = a(d.children || '')), _, b) : (d.el = f.el)
    },
    L = (f, d, _, b) => {
      ;[f.el, f.anchor] = S(f.children, d, _, b, f.el, f.anchor)
    },
    O = ({ el: f, anchor: d }, _, b) => {
      let g
      for (; f && f !== d; ) (g = p(f)), n(f, _, b), (f = g)
      n(d, _, b)
    },
    k = ({ el: f, anchor: d }) => {
      let _
      for (; f && f !== d; ) (_ = p(f)), i(f), (f = _)
      i(d)
    },
    B = (f, d, _, b, g, T, N, x, C) => {
      d.type === 'svg' ? (N = 'svg') : d.type === 'math' && (N = 'mathml'),
        f == null ? R(d, _, b, g, T, N, x, C) : at(f, d, g, T, N, x, C)
    },
    R = (f, d, _, b, g, T, N, x) => {
      let C, w
      const { props: D, shapeFlag: j, transition: H, dirs: W } = f
      if (
        ((C = f.el = r(f.type, T, D && D.is, D)),
        j & 8 ? c(C, f.children) : j & 16 && st(f.children, C, null, b, g, pi(f, T), N, x),
        W && Fe(f, null, b, 'created'),
        U(C, f, f.scopeId, N, b),
        D)
      ) {
        for (const lt in D) lt !== 'value' && !Hs(lt) && o(C, lt, null, D[lt], T, b)
        'value' in D && o(C, 'value', null, D.value, T), (w = D.onVnodeBeforeMount) && le(w, b, f)
      }
      W && Fe(f, null, b, 'beforeMount')
      const q = yf(g, H)
      q && H.beforeEnter(C),
        n(C, d, _),
        ((w = D && D.onVnodeMounted) || q || W) &&
          Nt(() => {
            w && le(w, b, f), q && H.enter(C), W && Fe(f, null, b, 'mounted')
          }, g)
    },
    U = (f, d, _, b, g) => {
      if ((_ && m(f, _), b)) for (let T = 0; T < b.length; T++) m(f, b[T])
      if (g) {
        let T = g.subTree
        if (d === T) {
          const N = g.vnode
          U(f, N, N.scopeId, N.slotScopeIds, g.parent)
        }
      }
    },
    st = (f, d, _, b, g, T, N, x, C = 0) => {
      for (let w = C; w < f.length; w++) {
        const D = (f[w] = x ? Se(f[w]) : ae(f[w]))
        A(null, D, d, _, b, g, T, N, x)
      }
    },
    at = (f, d, _, b, g, T, N) => {
      const x = (d.el = f.el)
      let { patchFlag: C, dynamicChildren: w, dirs: D } = d
      C |= f.patchFlag & 16
      const j = f.props || ht,
        H = d.props || ht
      let W
      if (
        (_ && Be(_, !1),
        (W = H.onVnodeBeforeUpdate) && le(W, _, d, f),
        D && Fe(d, f, _, 'beforeUpdate'),
        _ && Be(_, !0),
        ((j.innerHTML && H.innerHTML == null) || (j.textContent && H.textContent == null)) &&
          c(x, ''),
        w
          ? nt(f.dynamicChildren, w, x, _, b, pi(d, g), T)
          : N || Q(f, d, x, null, _, b, pi(d, g), T, !1),
        C > 0)
      ) {
        if (C & 16) ft(x, j, H, _, g)
        else if (
          (C & 2 && j.class !== H.class && o(x, 'class', null, H.class, g),
          C & 4 && o(x, 'style', j.style, H.style, g),
          C & 8)
        ) {
          const q = d.dynamicProps
          for (let lt = 0; lt < q.length; lt++) {
            const it = q[lt],
              vt = j[it],
              te = H[it]
            ;(te !== vt || it === 'value') && o(x, it, vt, te, g, _)
          }
        }
        C & 1 && f.children !== d.children && c(x, d.children)
      } else !N && w == null && ft(x, j, H, _, g)
      ;((W = H.onVnodeUpdated) || D) &&
        Nt(() => {
          W && le(W, _, d, f), D && Fe(d, f, _, 'updated')
        }, b)
    },
    nt = (f, d, _, b, g, T, N) => {
      for (let x = 0; x < d.length; x++) {
        const C = f[x],
          w = d[x],
          D = C.el && (C.type === zt || !Rs(C, w) || C.shapeFlag & 70) ? h(C.el) : _
        A(C, w, D, null, b, g, T, N, !0)
      }
    },
    ft = (f, d, _, b, g) => {
      if (d !== _) {
        if (d !== ht) for (const T in d) !Hs(T) && !(T in _) && o(f, T, d[T], null, g, b)
        for (const T in _) {
          if (Hs(T)) continue
          const N = _[T],
            x = d[T]
          N !== x && T !== 'value' && o(f, T, x, N, g, b)
        }
        'value' in _ && o(f, 'value', d.value, _.value, g)
      }
    },
    mt = (f, d, _, b, g, T, N, x, C) => {
      const w = (d.el = f ? f.el : l('')),
        D = (d.anchor = f ? f.anchor : l(''))
      let { patchFlag: j, dynamicChildren: H, slotScopeIds: W } = d
      W && (x = x ? x.concat(W) : W),
        f == null
          ? (n(w, _, b), n(D, _, b), st(d.children || [], _, D, g, T, N, x, C))
          : j > 0 && j & 64 && H && f.dynamicChildren
            ? (nt(f.dynamicChildren, H, _, g, T, N, x),
              (d.key != null || (g && d === g.subTree)) && $a(f, d, !0))
            : Q(f, d, _, D, g, T, N, x, C)
    },
    ct = (f, d, _, b, g, T, N, x, C) => {
      ;(d.slotScopeIds = x),
        f == null
          ? d.shapeFlag & 512
            ? g.ctx.activate(d, _, b, N, C)
            : Dt(d, _, b, g, T, N, C)
          : Ot(f, d, C)
    },
    Dt = (f, d, _, b, g, T, N) => {
      const x = (f.component = Ff(f, b, g))
      if ((pa(f) && (x.ctx.renderer = V), Bf(x, !1, N), x.asyncDep)) {
        if ((g && g.registerDep(x, et, N), !f.el)) {
          const C = (x.subTree = Y(Qe))
          M(null, C, d, _)
        }
      } else et(x, f, d, _, g, T, N)
    },
    Ot = (f, d, _) => {
      const b = (d.component = f.component)
      if (Nf(f, d, _))
        if (b.asyncDep && !b.asyncResolved) {
          G(b, d, _)
          return
        } else (b.next = d), Hu(b.update), (b.effect.dirty = !0), b.update()
      else (d.el = f.el), (b.vnode = d)
    },
    et = (f, d, _, b, g, T, N) => {
      const x = () => {
          if (f.isMounted) {
            let { next: D, bu: j, u: H, parent: W, vnode: q } = f
            {
              const ss = Na(f)
              if (ss) {
                D && ((D.el = q.el), G(f, D, N)),
                  ss.asyncDep.then(() => {
                    f.isUnmounted || x()
                  })
                return
              }
            }
            let lt = D,
              it
            Be(f, !1),
              D ? ((D.el = q.el), G(f, D, N)) : (D = q),
              j && An(j),
              (it = D.props && D.props.onVnodeBeforeUpdate) && le(it, W, D, q),
              Be(f, !0)
            const vt = mi(f),
              te = f.subTree
            ;(f.subTree = vt),
              A(te, vt, h(te.el), v(te), f, g, T),
              (D.el = vt.el),
              lt === null && If(f, vt.el),
              H && Nt(H, g),
              (it = D.props && D.props.onVnodeUpdated) && Nt(() => le(it, W, D, q), g)
          } else {
            let D
            const { el: j, props: H } = d,
              { bm: W, m: q, parent: lt } = f,
              it = xn(d)
            if (
              (Be(f, !1),
              W && An(W),
              !it && (D = H && H.onVnodeBeforeMount) && le(D, lt, d),
              Be(f, !0),
              j && dt)
            ) {
              const vt = () => {
                ;(f.subTree = mi(f)), dt(j, f.subTree, f, g, null)
              }
              it ? d.type.__asyncLoader().then(() => !f.isUnmounted && vt()) : vt()
            } else {
              const vt = (f.subTree = mi(f))
              A(null, vt, _, b, f, g, T), (d.el = vt.el)
            }
            if ((q && Nt(q, g), !it && (D = H && H.onVnodeMounted))) {
              const vt = d
              Nt(() => le(D, lt, vt), g)
            }
            ;(d.shapeFlag & 256 || (lt && xn(lt.vnode) && lt.vnode.shapeFlag & 256)) &&
              f.a &&
              Nt(f.a, g),
              (f.isMounted = !0),
              (d = _ = b = null)
          }
        },
        C = (f.effect = new uo(x, Gt, () => Eo(w), f.scope)),
        w = (f.update = () => {
          C.dirty && C.run()
        })
      ;(w.i = f), (w.id = f.uid), Be(f, !0), w()
    },
    G = (f, d, _) => {
      d.component = f
      const b = f.vnode.props
      ;(f.vnode = d), (f.next = null), df(f, d.props, b, _), _f(f, d.children, _), Me(), ir(f), ke()
    },
    Q = (f, d, _, b, g, T, N, x, C = !1) => {
      const w = f && f.children,
        D = f ? f.shapeFlag : 0,
        j = d.children,
        { patchFlag: H, shapeFlag: W } = d
      if (H > 0) {
        if (H & 128) {
          Mt(w, j, _, b, g, T, N, x, C)
          return
        } else if (H & 256) {
          bt(w, j, _, b, g, T, N, x, C)
          return
        }
      }
      W & 8
        ? (D & 16 && gt(w, g, T), j !== w && c(_, j))
        : D & 16
          ? W & 16
            ? Mt(w, j, _, b, g, T, N, x, C)
            : gt(w, g, T, !0)
          : (D & 8 && c(_, ''), W & 16 && st(j, _, b, g, T, N, x, C))
    },
    bt = (f, d, _, b, g, T, N, x, C) => {
      ;(f = f || fs), (d = d || fs)
      const w = f.length,
        D = d.length,
        j = Math.min(w, D)
      let H
      for (H = 0; H < j; H++) {
        const W = (d[H] = C ? Se(d[H]) : ae(d[H]))
        A(f[H], W, _, null, g, T, N, x, C)
      }
      w > D ? gt(f, g, T, !0, !1, j) : st(d, _, b, g, T, N, x, C, j)
    },
    Mt = (f, d, _, b, g, T, N, x, C) => {
      let w = 0
      const D = d.length
      let j = f.length - 1,
        H = D - 1
      for (; w <= j && w <= H; ) {
        const W = f[w],
          q = (d[w] = C ? Se(d[w]) : ae(d[w]))
        if (Rs(W, q)) A(W, q, _, null, g, T, N, x, C)
        else break
        w++
      }
      for (; w <= j && w <= H; ) {
        const W = f[j],
          q = (d[H] = C ? Se(d[H]) : ae(d[H]))
        if (Rs(W, q)) A(W, q, _, null, g, T, N, x, C)
        else break
        j--, H--
      }
      if (w > j) {
        if (w <= H) {
          const W = H + 1,
            q = W < D ? d[W].el : b
          for (; w <= H; ) A(null, (d[w] = C ? Se(d[w]) : ae(d[w])), _, q, g, T, N, x, C), w++
        }
      } else if (w > H) for (; w <= j; ) pt(f[w], g, T, !0), w++
      else {
        const W = w,
          q = w,
          lt = new Map()
        for (w = q; w <= H; w++) {
          const Ht = (d[w] = C ? Se(d[w]) : ae(d[w]))
          Ht.key != null && lt.set(Ht.key, w)
        }
        let it,
          vt = 0
        const te = H - q + 1
        let ss = !1,
          Yo = 0
        const Ls = new Array(te)
        for (w = 0; w < te; w++) Ls[w] = 0
        for (w = W; w <= j; w++) {
          const Ht = f[w]
          if (vt >= te) {
            pt(Ht, g, T, !0)
            continue
          }
          let re
          if (Ht.key != null) re = lt.get(Ht.key)
          else
            for (it = q; it <= H; it++)
              if (Ls[it - q] === 0 && Rs(Ht, d[it])) {
                re = it
                break
              }
          re === void 0
            ? pt(Ht, g, T, !0)
            : ((Ls[re - q] = w + 1),
              re >= Yo ? (Yo = re) : (ss = !0),
              A(Ht, d[re], _, null, g, T, N, x, C),
              vt++)
        }
        const zo = ss ? wf(Ls) : fs
        for (it = zo.length - 1, w = te - 1; w >= 0; w--) {
          const Ht = q + w,
            re = d[Ht],
            Go = Ht + 1 < D ? d[Ht + 1].el : b
          Ls[w] === 0
            ? A(null, re, _, Go, g, T, N, x, C)
            : ss && (it < 0 || w !== zo[it] ? $t(re, _, Go, 2) : it--)
        }
      }
    },
    $t = (f, d, _, b, g = null) => {
      const { el: T, type: N, transition: x, children: C, shapeFlag: w } = f
      if (w & 6) {
        $t(f.component.subTree, d, _, b)
        return
      }
      if (w & 128) {
        f.suspense.move(d, _, b)
        return
      }
      if (w & 64) {
        N.move(f, d, _, V)
        return
      }
      if (N === zt) {
        n(T, d, _)
        for (let j = 0; j < C.length; j++) $t(C[j], d, _, b)
        n(f.anchor, d, _)
        return
      }
      if (N === On) {
        O(f, d, _)
        return
      }
      if (b !== 2 && w & 1 && x)
        if (b === 0) x.beforeEnter(T), n(T, d, _), Nt(() => x.enter(T), g)
        else {
          const { leave: j, delayLeave: H, afterLeave: W } = x,
            q = () => n(T, d, _),
            lt = () => {
              j(T, () => {
                q(), W && W()
              })
            }
          H ? H(T, q, lt) : lt()
        }
      else n(T, d, _)
    },
    pt = (f, d, _, b = !1, g = !1) => {
      const {
        type: T,
        props: N,
        ref: x,
        children: C,
        dynamicChildren: w,
        shapeFlag: D,
        patchFlag: j,
        dirs: H,
        cacheIndex: W
      } = f
      if (
        (j === -2 && (g = !1),
        x != null && Yi(x, null, _, f, !0),
        W != null && (d.renderCache[W] = void 0),
        D & 256)
      ) {
        d.ctx.deactivate(f)
        return
      }
      const q = D & 1 && H,
        lt = !xn(f)
      let it
      if ((lt && (it = N && N.onVnodeBeforeUnmount) && le(it, d, f), D & 6)) Vt(f.component, _, b)
      else {
        if (D & 128) {
          f.suspense.unmount(_, b)
          return
        }
        q && Fe(f, null, d, 'beforeUnmount'),
          D & 64
            ? f.type.remove(f, d, _, V, b)
            : w && !w.hasOnce && (T !== zt || (j > 0 && j & 64))
              ? gt(w, d, _, !1, !0)
              : ((T === zt && j & 384) || (!g && D & 16)) && gt(C, d, _),
          b && Zt(f)
      }
      ;((lt && (it = N && N.onVnodeUnmounted)) || q) &&
        Nt(() => {
          it && le(it, d, f), q && Fe(f, null, d, 'unmounted')
        }, _)
    },
    Zt = (f) => {
      const { type: d, el: _, anchor: b, transition: g } = f
      if (d === zt) {
        kt(_, b)
        return
      }
      if (d === On) {
        k(f)
        return
      }
      const T = () => {
        i(_), g && !g.persisted && g.afterLeave && g.afterLeave()
      }
      if (f.shapeFlag & 1 && g && !g.persisted) {
        const { leave: N, delayLeave: x } = g,
          C = () => N(_, T)
        x ? x(f.el, T, C) : C()
      } else T()
    },
    kt = (f, d) => {
      let _
      for (; f !== d; ) (_ = p(f)), i(f), (f = _)
      i(d)
    },
    Vt = (f, d, _) => {
      const { bum: b, scope: g, update: T, subTree: N, um: x, m: C, a: w } = f
      pr(C),
        pr(w),
        b && An(b),
        g.stop(),
        T && ((T.active = !1), pt(N, f, d, _)),
        x && Nt(x, d),
        Nt(() => {
          f.isUnmounted = !0
        }, d),
        d &&
          d.pendingBranch &&
          !d.isUnmounted &&
          f.asyncDep &&
          !f.asyncResolved &&
          f.suspenseId === d.pendingId &&
          (d.deps--, d.deps === 0 && d.resolve())
    },
    gt = (f, d, _, b = !1, g = !1, T = 0) => {
      for (let N = T; N < f.length; N++) pt(f[N], d, _, b, g)
    },
    v = (f) => {
      if (f.shapeFlag & 6) return v(f.component.subTree)
      if (f.shapeFlag & 128) return f.suspense.next()
      const d = p(f.anchor || f.el),
        _ = d && d[gf]
      return _ ? p(_) : d
    }
  let I = !1
  const $ = (f, d, _) => {
      f == null
        ? d._vnode && pt(d._vnode, null, null, !0)
        : A(d._vnode || null, f, d, null, null, null, _),
        I || ((I = !0), ir(), ca(), (I = !1)),
        (d._vnode = f)
    },
    V = { p: A, um: pt, m: $t, r: Zt, mt: Dt, mc: st, pc: Q, pbc: nt, n: v, o: e }
  let Z, dt
  return { render: $, hydrate: Z, createApp: uf($, Z) }
}
function pi({ type: e, props: t }, s) {
  return (s === 'svg' && e === 'foreignObject') ||
    (s === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : s
}
function Be({ effect: e, update: t }, s) {
  e.allowRecurse = t.allowRecurse = s
}
function yf(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function $a(e, t, s = !1) {
  const n = e.children,
    i = t.children
  if (K(n) && K(i))
    for (let o = 0; o < n.length; o++) {
      const r = n[o]
      let l = i[o]
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) && ((l = i[o] = Se(i[o])), (l.el = r.el)),
        !s && l.patchFlag !== -2 && $a(r, l)),
        l.type === Jn && (l.el = r.el)
    }
}
function wf(e) {
  const t = e.slice(),
    s = [0]
  let n, i, o, r, l
  const a = e.length
  for (n = 0; n < a; n++) {
    const u = e[n]
    if (u !== 0) {
      if (((i = s[s.length - 1]), e[i] < u)) {
        ;(t[n] = i), s.push(n)
        continue
      }
      for (o = 0, r = s.length - 1; o < r; ) (l = (o + r) >> 1), e[s[l]] < u ? (o = l + 1) : (r = l)
      u < e[s[o]] && (o > 0 && (t[n] = s[o - 1]), (s[o] = n))
    }
  }
  for (o = s.length, r = s[o - 1]; o-- > 0; ) (s[o] = r), (r = t[r])
  return s
}
function Na(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : Na(t)
}
function pr(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].active = !1
}
const Af = Symbol.for('v-scx'),
  Tf = () => ge(Af),
  mn = {}
function Sn(e, t, s) {
  return Ia(e, t, s)
}
function Ia(e, t, { immediate: s, deep: n, flush: i, once: o, onTrack: r, onTrigger: l } = ht) {
  if (t && o) {
    const R = t
    t = (...U) => {
      R(...U), B()
    }
  }
  const a = yt,
    u = (R) => (n === !0 ? R : $e(R, n === !1 ? 1 : void 0))
  let c,
    h = !1,
    p = !1
  if (
    (Lt(e)
      ? ((c = () => e.value), (h = gs(e)))
      : js(e)
        ? ((c = () => u(e)), (h = !0))
        : K(e)
          ? ((p = !0),
            (h = e.some((R) => js(R) || gs(R))),
            (c = () =>
              e.map((R) => {
                if (Lt(R)) return R.value
                if (js(R)) return u(R)
                if (z(R)) return Ie(R, a, 2)
              })))
          : z(e)
            ? t
              ? (c = () => Ie(e, a, 2))
              : (c = () => (m && m(), se(e, a, 3, [S])))
            : (c = Gt),
    t && n)
  ) {
    const R = c
    c = () => $e(R())
  }
  let m,
    S = (R) => {
      m = O.onStop = () => {
        Ie(R, a, 4), (m = O.onStop = void 0)
      }
    },
    A
  if (Zn)
    if (((S = Gt), t ? s && se(t, a, 3, [c(), p ? [] : void 0, S]) : c(), i === 'sync')) {
      const R = Tf()
      A = R.__watcherHandles || (R.__watcherHandles = [])
    } else return Gt
  let P = p ? new Array(e.length).fill(mn) : mn
  const M = () => {
    if (!(!O.active || !O.dirty))
      if (t) {
        const R = O.run()
        ;(n || h || (p ? R.some((U, st) => Pe(U, P[st])) : Pe(R, P))) &&
          (m && m(), se(t, a, 3, [R, P === mn ? void 0 : p && P[0] === mn ? [] : P, S]), (P = R))
      } else O.run()
  }
  M.allowRecurse = !!t
  let L
  i === 'sync'
    ? (L = M)
    : i === 'post'
      ? (L = () => Nt(M, a && a.suspense))
      : ((M.pre = !0), a && (M.id = a.uid), (L = () => Eo(M)))
  const O = new uo(c, Gt, L),
    k = hu(),
    B = () => {
      O.stop(), k && lo(k.effects, O)
    }
  return (
    t ? (s ? M() : (P = O.run())) : i === 'post' ? Nt(O.run.bind(O), a && a.suspense) : O.run(),
    A && A.push(B),
    B
  )
}
function xf(e, t, s) {
  const n = this.proxy,
    i = _t(e) ? (e.includes('.') ? Pa(n, e) : () => n[e]) : e.bind(n, n)
  let o
  z(t) ? (o = t) : ((o = t.handler), (s = t))
  const r = nn(this),
    l = Ia(i, o.bind(n), s)
  return r(), l
}
function Pa(e, t) {
  const s = t.split('.')
  return () => {
    let n = e
    for (let i = 0; i < s.length && n; i++) n = n[s[i]]
    return n
  }
}
function $e(e, t = 1 / 0, s) {
  if (t <= 0 || !ut(e) || e.__v_skip || ((s = s || new Set()), s.has(e))) return e
  if ((s.add(e), t--, Lt(e))) $e(e.value, t, s)
  else if (K(e)) for (let n = 0; n < e.length; n++) $e(e[n], t, s)
  else if (Kn(e) || ds(e))
    e.forEach((n) => {
      $e(n, t, s)
    })
  else if (Ll(e)) {
    for (const n in e) $e(e[n], t, s)
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && $e(e[n], t, s)
  }
  return e
}
const Cf = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${ne(t)}Modifiers`] || e[`${Ze(t)}Modifiers`]
function Sf(e, t, ...s) {
  if (e.isUnmounted) return
  const n = e.vnode.props || ht
  let i = s
  const o = t.startsWith('update:'),
    r = o && Cf(n, t.slice(7))
  r && (r.trim && (i = s.map((c) => (_t(c) ? c.trim() : c))), r.number && (i = s.map(Dl)))
  let l,
    a = n[(l = ui(t))] || n[(l = ui(ne(t)))]
  !a && o && (a = n[(l = ui(Ze(t)))]), a && se(a, e, 6, i)
  const u = n[l + 'Once']
  if (u) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;(e.emitted[l] = !0), se(u, e, 6, i)
  }
}
function La(e, t, s = !1) {
  const n = t.emitsCache,
    i = n.get(e)
  if (i !== void 0) return i
  const o = e.emits
  let r = {},
    l = !1
  if (!z(e)) {
    const a = (u) => {
      const c = La(u, t, !0)
      c && ((l = !0), wt(r, c))
    }
    !s && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a)
  }
  return !o && !l
    ? (ut(e) && n.set(e, null), null)
    : (K(o) ? o.forEach((a) => (r[a] = null)) : wt(r, o), ut(e) && n.set(e, r), r)
}
function Xn(e, t) {
  return !e || !Bn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      tt(e, t[0].toLowerCase() + t.slice(1)) || tt(e, Ze(t)) || tt(e, t))
}
function mi(e) {
  const {
      type: t,
      vnode: s,
      proxy: n,
      withProxy: i,
      propsOptions: [o],
      slots: r,
      attrs: l,
      emit: a,
      render: u,
      renderCache: c,
      props: h,
      data: p,
      setupState: m,
      ctx: S,
      inheritAttrs: A
    } = e,
    P = Rn(e)
  let M, L
  try {
    if (s.shapeFlag & 4) {
      const k = i || n,
        B = k
      ;(M = ae(u.call(B, k, c, h, m, p, S))), (L = l)
    } else {
      const k = t
      ;(M = ae(k.length > 1 ? k(h, { attrs: l, slots: r, emit: a }) : k(h, null))),
        (L = t.props ? l : Of(l))
    }
  } catch (k) {
    ;(Ks.length = 0), qn(k, e, 1), (M = Y(Qe))
  }
  let O = M
  if (L && A !== !1) {
    const k = Object.keys(L),
      { shapeFlag: B } = O
    k.length && B & 7 && (o && k.some(ro) && (L = $f(L, o)), (O = bs(O, L, !1, !0)))
  }
  return (
    s.dirs && ((O = bs(O, null, !1, !0)), (O.dirs = O.dirs ? O.dirs.concat(s.dirs) : s.dirs)),
    s.transition && (O.transition = s.transition),
    (M = O),
    Rn(P),
    M
  )
}
const Of = (e) => {
    let t
    for (const s in e) (s === 'class' || s === 'style' || Bn(s)) && ((t || (t = {}))[s] = e[s])
    return t
  },
  $f = (e, t) => {
    const s = {}
    for (const n in e) (!ro(n) || !(n.slice(9) in t)) && (s[n] = e[n])
    return s
  }
function Nf(e, t, s) {
  const { props: n, children: i, component: o } = e,
    { props: r, children: l, patchFlag: a } = t,
    u = o.emitsOptions
  if (t.dirs || t.transition) return !0
  if (s && a >= 0) {
    if (a & 1024) return !0
    if (a & 16) return n ? mr(n, r, u) : !!r
    if (a & 8) {
      const c = t.dynamicProps
      for (let h = 0; h < c.length; h++) {
        const p = c[h]
        if (r[p] !== n[p] && !Xn(u, p)) return !0
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : n === r ? !1 : n ? (r ? mr(n, r, u) : !0) : !!r
  return !1
}
function mr(e, t, s) {
  const n = Object.keys(t)
  if (n.length !== Object.keys(e).length) return !0
  for (let i = 0; i < n.length; i++) {
    const o = n[i]
    if (t[o] !== e[o] && !Xn(s, o)) return !0
  }
  return !1
}
function If({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree
    if ((n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e))
      ((e = t.vnode).el = s), (t = t.parent)
    else break
  }
}
const Pf = (e) => e.__isSuspense
function Lf(e, t) {
  t && t.pendingBranch ? (K(e) ? t.effects.push(...e) : t.effects.push(e)) : ju(e)
}
const zt = Symbol.for('v-fgt'),
  Jn = Symbol.for('v-txt'),
  Qe = Symbol.for('v-cmt'),
  On = Symbol.for('v-stc'),
  Ks = []
let Kt = null
function X(e = !1) {
  Ks.push((Kt = e ? null : []))
}
function Rf() {
  Ks.pop(), (Kt = Ks[Ks.length - 1] || null)
}
let Xs = 1
function _r(e) {
  ;(Xs += e), e < 0 && Kt && (Kt.hasOnce = !0)
}
function Ra(e) {
  return (e.dynamicChildren = Xs > 0 ? Kt || fs : null), Rf(), Xs > 0 && Kt && Kt.push(e), e
}
function J(e, t, s, n, i, o) {
  return Ra(E(e, t, s, n, i, o, !0))
}
function Df(e, t, s, n, i) {
  return Ra(Y(e, t, s, n, i, !0))
}
function zi(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function Rs(e, t) {
  return e.type === t.type && e.key === t.key
}
const Da = ({ key: e }) => e ?? null,
  $n = ({ ref: e, ref_key: t, ref_for: s }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (_t(e) || Lt(e) || z(e) ? { i: Bt, r: e, k: t, f: !!s } : e) : null
  )
function E(e, t = null, s = null, n = 0, i = null, o = e === zt ? 0 : 1, r = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Da(t),
    ref: t && $n(t),
    scopeId: fa,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Bt
  }
  return (
    l ? (To(a, s), o & 128 && e.normalize(a)) : s && (a.shapeFlag |= _t(s) ? 8 : 16),
    Xs > 0 && !r && Kt && (a.patchFlag > 0 || o & 6) && a.patchFlag !== 32 && Kt.push(a),
    a
  )
}
const Y = Mf
function Mf(e, t = null, s = null, n = 0, i = null, o = !1) {
  if (((!e || e === tf) && (e = Qe), zi(e))) {
    const l = bs(e, t, !0)
    return (
      s && To(l, s),
      Xs > 0 && !o && Kt && (l.shapeFlag & 6 ? (Kt[Kt.indexOf(e)] = l) : Kt.push(l)),
      (l.patchFlag = -2),
      l
    )
  }
  if ((zf(e) && (e = e.__vccOpts), t)) {
    t = kf(t)
    let { class: l, style: a } = t
    l && !_t(l) && (t.class = hs(l)),
      ut(a) && (ea(a) && !K(a) && (a = wt({}, a)), (t.style = co(a)))
  }
  const r = _t(e) ? 1 : Pf(e) ? 128 : vf(e) ? 64 : ut(e) ? 4 : z(e) ? 2 : 0
  return E(e, t, s, n, i, r, o, !0)
}
function kf(e) {
  return e ? (ea(e) || wa(e) ? wt({}, e) : e) : null
}
function bs(e, t, s = !1, n = !1) {
  const { props: i, ref: o, patchFlag: r, children: l, transition: a } = e,
    u = t ? Vf(i || {}, t) : i,
    c = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: u,
      key: u && Da(u),
      ref: t && t.ref ? (s && o ? (K(o) ? o.concat($n(t)) : [o, $n(t)]) : $n(t)) : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== zt ? (r === -1 ? 16 : r | 16) : r,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: a,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && bs(e.ssContent),
      ssFallback: e.ssFallback && bs(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    }
  return a && n && da(c, a.clone(c)), c
}
function xt(e = ' ', t = 0) {
  return Y(Jn, null, e, t)
}
function At(e, t) {
  const s = Y(On, null, e)
  return (s.staticCount = t), s
}
function ns(e = '', t = !1) {
  return t ? (X(), Df(Qe, null, e)) : Y(Qe, null, e)
}
function ae(e) {
  return e == null || typeof e == 'boolean'
    ? Y(Qe)
    : K(e)
      ? Y(zt, null, e.slice())
      : typeof e == 'object'
        ? Se(e)
        : Y(Jn, null, String(e))
}
function Se(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : bs(e)
}
function To(e, t) {
  let s = 0
  const { shapeFlag: n } = e
  if (t == null) t = null
  else if (K(t)) s = 16
  else if (typeof t == 'object')
    if (n & 65) {
      const i = t.default
      i && (i._c && (i._d = !1), To(e, i()), i._c && (i._d = !0))
      return
    } else {
      s = 32
      const i = t._
      !i && !wa(t)
        ? (t._ctx = Bt)
        : i === 3 && Bt && (Bt.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    z(t)
      ? ((t = { default: t, _ctx: Bt }), (s = 32))
      : ((t = String(t)), n & 64 ? ((s = 16), (t = [xt(t)])) : (s = 8))
  ;(e.children = t), (e.shapeFlag |= s)
}
function Vf(...e) {
  const t = {}
  for (let s = 0; s < e.length; s++) {
    const n = e[s]
    for (const i in n)
      if (i === 'class') t.class !== n.class && (t.class = hs([t.class, n.class]))
      else if (i === 'style') t.style = co([t.style, n.style])
      else if (Bn(i)) {
        const o = t[i],
          r = n[i]
        r && o !== r && !(K(o) && o.includes(r)) && (t[i] = o ? [].concat(o, r) : r)
      } else i !== '' && (t[i] = n[i])
  }
  return t
}
function le(e, t, s, n = null) {
  se(e, t, 7, [s, n])
}
const Hf = ba()
let jf = 0
function Ff(e, t, s) {
  const n = e.type,
    i = (t ? t.appContext : e.appContext) || Hf,
    o = {
      uid: jf++,
      vnode: e,
      type: n,
      parent: t,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Fl(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(i.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Ta(n, i),
      emitsOptions: La(n, i),
      emit: null,
      emitted: null,
      propsDefaults: ht,
      inheritAttrs: n.inheritAttrs,
      ctx: ht,
      data: ht,
      props: ht,
      attrs: ht,
      slots: ht,
      refs: ht,
      setupState: ht,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: s,
      suspenseId: s ? s.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    }
  return (
    (o.ctx = { _: o }), (o.root = t ? t.root : o), (o.emit = Sf.bind(null, o)), e.ce && e.ce(o), o
  )
}
let yt = null,
  Mn,
  Gi
{
  const e = Ml(),
    t = (s, n) => {
      let i
      return (
        (i = e[s]) || (i = e[s] = []),
        i.push(n),
        (o) => {
          i.length > 1 ? i.forEach((r) => r(o)) : i[0](o)
        }
      )
    }
  ;(Mn = t('__VUE_INSTANCE_SETTERS__', (s) => (yt = s))),
    (Gi = t('__VUE_SSR_SETTERS__', (s) => (Zn = s)))
}
const nn = (e) => {
    const t = yt
    return (
      Mn(e),
      e.scope.on(),
      () => {
        e.scope.off(), Mn(t)
      }
    )
  },
  gr = () => {
    yt && yt.scope.off(), Mn(null)
  }
function Ma(e) {
  return e.vnode.shapeFlag & 4
}
let Zn = !1
function Bf(e, t = !1, s = !1) {
  t && Gi(t)
  const { props: n, children: i } = e.vnode,
    o = Ma(e)
  ff(e, n, o, t), mf(e, i, s)
  const r = o ? Kf(e, t) : void 0
  return t && Gi(!1), r
}
function Kf(e, t) {
  const s = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, sf))
  const { setup: n } = s
  if (n) {
    const i = (e.setupContext = n.length > 1 ? Uf(e) : null),
      o = nn(e)
    Me()
    const r = Ie(n, e, 0, [e.props, i])
    if ((ke(), o(), Il(r))) {
      if ((r.then(gr, gr), t))
        return r
          .then((l) => {
            vr(e, l, t)
          })
          .catch((l) => {
            qn(l, e, 0)
          })
      e.asyncDep = r
    } else vr(e, r, t)
  } else ka(e, t)
}
function vr(e, t, s) {
  z(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ut(t) && (e.setupState = ra(t)),
    ka(e, s)
}
let br
function ka(e, t, s) {
  const n = e.type
  if (!e.render) {
    if (!t && br && !n.render) {
      const i = n.template || wo(e).template
      if (i) {
        const { isCustomElement: o, compilerOptions: r } = e.appContext.config,
          { delimiters: l, compilerOptions: a } = n,
          u = wt(wt({ isCustomElement: o, delimiters: l }, r), a)
        n.render = br(i, u)
      }
    }
    e.render = n.render || Gt
  }
  {
    const i = nn(e)
    Me()
    try {
      nf(e)
    } finally {
      ke(), i()
    }
  }
}
const Wf = {
  get(e, t) {
    return Pt(e, 'get', ''), e[t]
  }
}
function Uf(e) {
  const t = (s) => {
    e.exposed = s || {}
  }
  return { attrs: new Proxy(e.attrs, Wf), slots: e.slots, emit: e.emit, expose: t }
}
function ti(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(ra(sa(e.exposed)), {
          get(t, s) {
            if (s in t) return t[s]
            if (s in Fs) return Fs[s](e)
          },
          has(t, s) {
            return s in t || s in Fs
          }
        }))
    : e.proxy
}
function Yf(e, t = !0) {
  return z(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function zf(e) {
  return z(e) && '__vccOpts' in e
}
const Ft = (e, t) => Lu(e, t, Zn)
function Va(e, t, s) {
  const n = arguments.length
  return n === 2
    ? ut(t) && !K(t)
      ? zi(t)
        ? Y(e, null, [t])
        : Y(e, t)
      : Y(e, null, t)
    : (n > 3 ? (s = Array.prototype.slice.call(arguments, 2)) : n === 3 && zi(s) && (s = [s]),
      Y(e, t, s))
}
const Gf = '3.4.32'
/**
 * @vue/runtime-dom v3.4.32
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const qf = 'http://www.w3.org/2000/svg',
  Qf = 'http://www.w3.org/1998/Math/MathML',
  me = typeof document < 'u' ? document : null,
  Er = me && me.createElement('template'),
  Xf = {
    insert: (e, t, s) => {
      t.insertBefore(e, s || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, s, n) => {
      const i =
        t === 'svg'
          ? me.createElementNS(qf, e)
          : t === 'mathml'
            ? me.createElementNS(Qf, e)
            : s
              ? me.createElement(e, { is: s })
              : me.createElement(e)
      return e === 'select' && n && n.multiple != null && i.setAttribute('multiple', n.multiple), i
    },
    createText: (e) => me.createTextNode(e),
    createComment: (e) => me.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => me.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, s, n, i, o) {
      const r = s ? s.previousSibling : t.lastChild
      if (i && (i === o || i.nextSibling))
        for (; t.insertBefore(i.cloneNode(!0), s), !(i === o || !(i = i.nextSibling)); );
      else {
        Er.innerHTML = n === 'svg' ? `<svg>${e}</svg>` : n === 'mathml' ? `<math>${e}</math>` : e
        const l = Er.content
        if (n === 'svg' || n === 'mathml') {
          const a = l.firstChild
          for (; a.firstChild; ) l.appendChild(a.firstChild)
          l.removeChild(a)
        }
        t.insertBefore(l, s)
      }
      return [r ? r.nextSibling : t.firstChild, s ? s.previousSibling : t.lastChild]
    }
  },
  Jf = Symbol('_vtc')
function Zf(e, t, s) {
  const n = e[Jf]
  n && (t = (t ? [t, ...n] : [...n]).join(' ')),
    t == null ? e.removeAttribute('class') : s ? e.setAttribute('class', t) : (e.className = t)
}
const yr = Symbol('_vod'),
  td = Symbol('_vsh'),
  ed = Symbol(''),
  sd = /(^|;)\s*display\s*:/
function nd(e, t, s) {
  const n = e.style,
    i = _t(s)
  let o = !1
  if (s && !i) {
    if (t)
      if (_t(t))
        for (const r of t.split(';')) {
          const l = r.slice(0, r.indexOf(':')).trim()
          s[l] == null && Nn(n, l, '')
        }
      else for (const r in t) s[r] == null && Nn(n, r, '')
    for (const r in s) r === 'display' && (o = !0), Nn(n, r, s[r])
  } else if (i) {
    if (t !== s) {
      const r = n[ed]
      r && (s += ';' + r), (n.cssText = s), (o = sd.test(s))
    }
  } else t && e.removeAttribute('style')
  yr in e && ((e[yr] = o ? n.display : ''), e[td] && (n.display = 'none'))
}
const wr = /\s*!important$/
function Nn(e, t, s) {
  if (K(s)) s.forEach((n) => Nn(e, t, n))
  else if ((s == null && (s = ''), t.startsWith('--'))) e.setProperty(t, s)
  else {
    const n = id(e, t)
    wr.test(s) ? e.setProperty(Ze(n), s.replace(wr, ''), 'important') : (e[n] = s)
  }
}
const Ar = ['Webkit', 'Moz', 'ms'],
  _i = {}
function id(e, t) {
  const s = _i[t]
  if (s) return s
  let n = ne(t)
  if (n !== 'filter' && n in e) return (_i[t] = n)
  n = Un(n)
  for (let i = 0; i < Ar.length; i++) {
    const o = Ar[i] + n
    if (o in e) return (_i[t] = o)
  }
  return t
}
const Tr = 'http://www.w3.org/1999/xlink'
function xr(e, t, s, n, i, o = au(t)) {
  n && t.startsWith('xlink:')
    ? s == null
      ? e.removeAttributeNS(Tr, t.slice(6, t.length))
      : e.setAttributeNS(Tr, t, s)
    : s == null || (o && !kl(s))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? '' : de(s) ? String(s) : s)
}
function od(e, t, s, n) {
  if (t === 'innerHTML' || t === 'textContent') {
    if (s === null) return
    e[t] = s
    return
  }
  const i = e.tagName
  if (t === 'value' && i !== 'PROGRESS' && !i.includes('-')) {
    const r = i === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      l = s == null ? '' : String(s)
    ;(r !== l || !('_value' in e)) && (e.value = l),
      s == null && e.removeAttribute(t),
      (e._value = s)
    return
  }
  let o = !1
  if (s === '' || s == null) {
    const r = typeof e[t]
    r === 'boolean'
      ? (s = kl(s))
      : s == null && r === 'string'
        ? ((s = ''), (o = !0))
        : r === 'number' && ((s = 0), (o = !0))
  }
  try {
    e[t] = s
  } catch {}
  o && e.removeAttribute(t)
}
function Ha(e, t, s, n) {
  e.addEventListener(t, s, n)
}
function rd(e, t, s, n) {
  e.removeEventListener(t, s, n)
}
const Cr = Symbol('_vei')
function ld(e, t, s, n, i = null) {
  const o = e[Cr] || (e[Cr] = {}),
    r = o[t]
  if (n && r) r.value = n
  else {
    const [l, a] = ad(t)
    if (n) {
      const u = (o[t] = fd(n, i))
      Ha(e, l, u, a)
    } else r && (rd(e, l, r, a), (o[t] = void 0))
  }
}
const Sr = /(?:Once|Passive|Capture)$/
function ad(e) {
  let t
  if (Sr.test(e)) {
    t = {}
    let n
    for (; (n = e.match(Sr)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : Ze(e.slice(2)), t]
}
let gi = 0
const cd = Promise.resolve(),
  ud = () => gi || (cd.then(() => (gi = 0)), (gi = Date.now()))
function fd(e, t) {
  const s = (n) => {
    if (!n._vts) n._vts = Date.now()
    else if (n._vts <= s.attached) return
    se(dd(n, s.value), t, 5, [n])
  }
  return (s.value = e), (s.attached = ud()), s
}
function dd(e, t) {
  if (K(t)) {
    const s = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        s.call(e), (e._stopped = !0)
      }),
      t.map((n) => (i) => !i._stopped && n && n(i))
    )
  } else return t
}
const Or = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  hd = (e, t, s, n, i, o) => {
    const r = i === 'svg'
    t === 'class'
      ? Zf(e, n, r)
      : t === 'style'
        ? nd(e, s, n)
        : Bn(t)
          ? ro(t) || ld(e, t, s, n, o)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : pd(e, t, n, r)
              )
            ? (od(e, t, n),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                xr(e, t, n, r, o, t !== 'value'))
            : (t === 'true-value' ? (e._trueValue = n) : t === 'false-value' && (e._falseValue = n),
              xr(e, t, n, r))
  }
function pd(e, t, s, n) {
  if (n) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && Or(t) && z(s)))
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const i = e.tagName
    if (i === 'IMG' || i === 'VIDEO' || i === 'CANVAS' || i === 'SOURCE') return !1
  }
  return Or(t) && _t(s) ? !1 : t in e
}
const $r = (e) => {
    const t = e.props['onUpdate:modelValue'] || !1
    return K(t) ? (s) => An(t, s) : t
  },
  vi = Symbol('_assign'),
  md = {
    deep: !0,
    created(e, { value: t, modifiers: { number: s } }, n) {
      const i = Kn(t)
      Ha(e, 'change', () => {
        const o = Array.prototype.filter
          .call(e.options, (r) => r.selected)
          .map((r) => (s ? Dl(kn(r)) : kn(r)))
        e[vi](e.multiple ? (i ? new Set(o) : o) : o[0]),
          (e._assigning = !0),
          bo(() => {
            e._assigning = !1
          })
      }),
        (e[vi] = $r(n))
    },
    mounted(e, { value: t, modifiers: { number: s } }) {
      Nr(e, t)
    },
    beforeUpdate(e, t, s) {
      e[vi] = $r(s)
    },
    updated(e, { value: t, modifiers: { number: s } }) {
      e._assigning || Nr(e, t)
    }
  }
function Nr(e, t, s) {
  const n = e.multiple,
    i = K(t)
  if (!(n && !i && !Kn(t))) {
    for (let o = 0, r = e.options.length; o < r; o++) {
      const l = e.options[o],
        a = kn(l)
      if (n)
        if (i) {
          const u = typeof a
          u === 'string' || u === 'number'
            ? (l.selected = t.some((c) => String(c) === String(a)))
            : (l.selected = uu(t, a) > -1)
        } else l.selected = t.has(a)
      else if (Yn(kn(l), t)) {
        e.selectedIndex !== o && (e.selectedIndex = o)
        return
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1)
  }
}
function kn(e) {
  return '_value' in e ? e._value : e.value
}
const _d = ['ctrl', 'shift', 'alt', 'meta'],
  gd = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => 'button' in e && e.button !== 0,
    middle: (e) => 'button' in e && e.button !== 1,
    right: (e) => 'button' in e && e.button !== 2,
    exact: (e, t) => _d.some((s) => e[`${s}Key`] && !t.includes(s))
  },
  _s = (e, t) => {
    const s = e._withMods || (e._withMods = {}),
      n = t.join('.')
    return (
      s[n] ||
      (s[n] = (i, ...o) => {
        for (let r = 0; r < t.length; r++) {
          const l = gd[t[r]]
          if (l && l(i, t)) return
        }
        return e(i, ...o)
      })
    )
  },
  vd = wt({ patchProp: hd }, Xf)
let Ir
function bd() {
  return Ir || (Ir = bf(vd))
}
const Ed = (...e) => {
  const t = bd().createApp(...e),
    { mount: s } = t
  return (
    (t.mount = (n) => {
      const i = wd(n)
      if (!i) return
      const o = t._component
      !z(o) && !o.render && !o.template && (o.template = i.innerHTML), (i.innerHTML = '')
      const r = s(i, !1, yd(i))
      return (
        i instanceof Element && (i.removeAttribute('v-cloak'), i.setAttribute('data-v-app', '')), r
      )
    }),
    t
  )
}
function yd(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml'
}
function wd(e) {
  return _t(e) ? document.querySelector(e) : e
}
var Ad = !1
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const Td = Symbol()
var Pr
;(function (e) {
  ;(e.direct = 'direct'), (e.patchObject = 'patch object'), (e.patchFunction = 'patch function')
})(Pr || (Pr = {}))
function xd() {
  const e = fu(!0),
    t = e.run(() => Gn({}))
  let s = [],
    n = []
  const i = sa({
    install(o) {
      ;(i._a = o),
        o.provide(Td, i),
        (o.config.globalProperties.$pinia = i),
        n.forEach((r) => s.push(r)),
        (n = [])
    },
    use(o) {
      return !this._a && !Ad ? n.push(o) : s.push(o), this
    },
    _p: s,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t
  })
  return i
}
const Rt = (e, t) => {
    const s = e.__vccOpts || e
    for (const [n, i] of t) s[n] = i
    return s
  },
  Cd = {},
  Sd = { class: 'mainNav' },
  Od = { class: 'container' },
  $d = { class: '' },
  Nd = E(
    'div',
    null,
    [
      E('a', { href: '/' }, [
        E('img', {
          src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/logo-white.png?raw=true'
        })
      ])
    ],
    -1
  ),
  Id = { class: 'nav nav-pills' },
  Pd = { class: 'nav-item' },
  Ld = { class: 'nav-item' },
  Rd = { class: 'nav-item' },
  Dd = { class: 'nav-item' }
function Md(e, t, s, n, i, o) {
  const r = vs('router-link')
  return (
    X(),
    J('section', Sd, [
      E('div', Od, [
        E('header', $d, [
          Nd,
          E('ul', Id, [
            E('li', Pd, [
              Y(
                r,
                { to: '/seriesframes', class: 'nav-link', 'aria-current': 'page' },
                { default: jt(() => [xt('系列鏡框')]), _: 1 }
              )
            ]),
            E('li', Ld, [
              Y(
                r,
                { to: '/store', class: 'nav-link' },
                { default: jt(() => [xt('門市據點')]), _: 1 }
              )
            ]),
            E('li', Rd, [
              Y(r, { to: '/blog', class: 'nav-link' }, { default: jt(() => [xt('部落格')]), _: 1 })
            ]),
            E('li', Dd, [
              Y(
                r,
                { to: '/question', class: 'nav-link' },
                { default: jt(() => [xt('常見問題')]), _: 1 }
              )
            ])
          ])
        ])
      ])
    ])
  )
}
const kd = Rt(Cd, [['render', Md]]),
  Vd = {},
  Hd = At(
    '<div class="container"><div class="border-bottom"><div class="list d-flex justify-content-between"><div class="webDisplay"><div class="d-flex flex-column"><ul class="nav-list d-flex pt-2"><li><a href="#">首頁</a></li><li><a href="#">系列鏡框</a></li><li><a href="#">門市據點</a></li><li><a href="#">部落格</a></li><li><a href="#">常見問題</a></li></ul><p class="text-white mt-4 info"><span class="material-symbols-outlined">call</span>0800-000-00 </p><p class="text-white info"><span class="material-symbols-outlined">mail</span>glasses@business.com </p></div></div><div class="appDisplay"><div class="d-flex flex-column"><p class="text-white info"><span class="material-symbols-outlined">call</span>0800-000-00 </p><p class="text-white info"><span class="material-symbols-outlined">mail</span>glasses@business.com </p></div></div><div class="footerLogo"><img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/ic-social-fb.png?raw=true" alt="Facebook"><img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/ic_social_ig.png?raw=true" alt="Instagram"><img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/ic_social_line.png?raw=true" alt="Line"></div></div></div><div class="center mt-3 pb-3"><p class="bottomText">Copyright © 2020 Glasses. All rights reserved.</p><ul class="d-flex footer-links"><li>隱私權政策</li><li>服務條款</li></ul></div></div>',
    1
  ),
  jd = [Hd]
function Fd(e, t, s, n, i, o) {
  return X(), J('footer', null, jd)
}
const Bd = Rt(Vd, [['render', Fd]]),
  Kd = { class: 'app' },
  Wd = {
    __name: 'App',
    setup(e) {
      return (t, s) => {
        const n = vs('RouterView')
        return X(), J('div', Kd, [Y(kd), Y(n), Y(Bd)])
      }
    }
  },
  Ud = Rt(Wd, [['__scopeId', 'data-v-7fb29f0f']])
/*!
 * vue-router v4.4.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const rs = typeof document < 'u'
function Yd(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module'
}
const rt = Object.assign
function bi(e, t) {
  const s = {}
  for (const n in t) {
    const i = t[n]
    s[n] = ie(i) ? i.map(e) : e(i)
  }
  return s
}
const Ws = () => {},
  ie = Array.isArray,
  ja = /#/g,
  zd = /&/g,
  Gd = /\//g,
  qd = /=/g,
  Qd = /\?/g,
  Fa = /\+/g,
  Xd = /%5B/g,
  Jd = /%5D/g,
  Ba = /%5E/g,
  Zd = /%60/g,
  Ka = /%7B/g,
  th = /%7C/g,
  Wa = /%7D/g,
  eh = /%20/g
function xo(e) {
  return encodeURI('' + e)
    .replace(th, '|')
    .replace(Xd, '[')
    .replace(Jd, ']')
}
function sh(e) {
  return xo(e).replace(Ka, '{').replace(Wa, '}').replace(Ba, '^')
}
function qi(e) {
  return xo(e)
    .replace(Fa, '%2B')
    .replace(eh, '+')
    .replace(ja, '%23')
    .replace(zd, '%26')
    .replace(Zd, '`')
    .replace(Ka, '{')
    .replace(Wa, '}')
    .replace(Ba, '^')
}
function nh(e) {
  return qi(e).replace(qd, '%3D')
}
function ih(e) {
  return xo(e).replace(ja, '%23').replace(Qd, '%3F')
}
function oh(e) {
  return e == null ? '' : ih(e).replace(Gd, '%2F')
}
function Js(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
const rh = /\/$/,
  lh = (e) => e.replace(rh, '')
function Ei(e, t, s = '/') {
  let n,
    i = {},
    o = '',
    r = ''
  const l = t.indexOf('#')
  let a = t.indexOf('?')
  return (
    l < a && l >= 0 && (a = -1),
    a > -1 && ((n = t.slice(0, a)), (o = t.slice(a + 1, l > -1 ? l : t.length)), (i = e(o))),
    l > -1 && ((n = n || t.slice(0, l)), (r = t.slice(l, t.length))),
    (n = fh(n ?? t, s)),
    { fullPath: n + (o && '?') + o + r, path: n, query: i, hash: Js(r) }
  )
}
function ah(e, t) {
  const s = t.query ? e(t.query) : ''
  return t.path + (s && '?') + s + (t.hash || '')
}
function Lr(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/'
}
function ch(e, t, s) {
  const n = t.matched.length - 1,
    i = s.matched.length - 1
  return (
    n > -1 &&
    n === i &&
    Es(t.matched[n], s.matched[i]) &&
    Ua(t.params, s.params) &&
    e(t.query) === e(s.query) &&
    t.hash === s.hash
  )
}
function Es(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function Ua(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const s in e) if (!uh(e[s], t[s])) return !1
  return !0
}
function uh(e, t) {
  return ie(e) ? Rr(e, t) : ie(t) ? Rr(t, e) : e === t
}
function Rr(e, t) {
  return ie(t)
    ? e.length === t.length && e.every((s, n) => s === t[n])
    : e.length === 1 && e[0] === t
}
function fh(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const s = t.split('/'),
    n = e.split('/'),
    i = n[n.length - 1]
  ;(i === '..' || i === '.') && n.push('')
  let o = s.length - 1,
    r,
    l
  for (r = 0; r < n.length; r++)
    if (((l = n[r]), l !== '.'))
      if (l === '..') o > 1 && o--
      else break
  return s.slice(0, o).join('/') + '/' + n.slice(r).join('/')
}
const Te = {
  path: '/',
  name: void 0,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: void 0
}
var Zs
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(Zs || (Zs = {}))
var Us
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(Us || (Us = {}))
function dh(e) {
  if (!e)
    if (rs) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), lh(e)
}
const hh = /^[^#]+#/
function ph(e, t) {
  return e.replace(hh, '#') + t
}
function mh(e, t) {
  const s = document.documentElement.getBoundingClientRect(),
    n = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: n.left - s.left - (t.left || 0),
    top: n.top - s.top - (t.top || 0)
  }
}
const ei = () => ({ left: window.scrollX, top: window.scrollY })
function _h(e) {
  let t
  if ('el' in e) {
    const s = e.el,
      n = typeof s == 'string' && s.startsWith('#'),
      i =
        typeof s == 'string'
          ? n
            ? document.getElementById(s.slice(1))
            : document.querySelector(s)
          : s
    if (!i) return
    t = mh(i, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      )
}
function Dr(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Qi = new Map()
function gh(e, t) {
  Qi.set(e, t)
}
function vh(e) {
  const t = Qi.get(e)
  return Qi.delete(e), t
}
let bh = () => location.protocol + '//' + location.host
function Ya(e, t) {
  const { pathname: s, search: n, hash: i } = t,
    o = e.indexOf('#')
  if (o > -1) {
    let l = i.includes(e.slice(o)) ? e.slice(o).length : 1,
      a = i.slice(l)
    return a[0] !== '/' && (a = '/' + a), Lr(a, '')
  }
  return Lr(s, e) + n + i
}
function Eh(e, t, s, n) {
  let i = [],
    o = [],
    r = null
  const l = ({ state: p }) => {
    const m = Ya(e, location),
      S = s.value,
      A = t.value
    let P = 0
    if (p) {
      if (((s.value = m), (t.value = p), r && r === S)) {
        r = null
        return
      }
      P = A ? p.position - A.position : 0
    } else n(m)
    i.forEach((M) => {
      M(s.value, S, {
        delta: P,
        type: Zs.pop,
        direction: P ? (P > 0 ? Us.forward : Us.back) : Us.unknown
      })
    })
  }
  function a() {
    r = s.value
  }
  function u(p) {
    i.push(p)
    const m = () => {
      const S = i.indexOf(p)
      S > -1 && i.splice(S, 1)
    }
    return o.push(m), m
  }
  function c() {
    const { history: p } = window
    p.state && p.replaceState(rt({}, p.state, { scroll: ei() }), '')
  }
  function h() {
    for (const p of o) p()
    ;(o = []),
      window.removeEventListener('popstate', l),
      window.removeEventListener('beforeunload', c)
  }
  return (
    window.addEventListener('popstate', l),
    window.addEventListener('beforeunload', c, { passive: !0 }),
    { pauseListeners: a, listen: u, destroy: h }
  )
}
function Mr(e, t, s, n = !1, i = !1) {
  return {
    back: e,
    current: t,
    forward: s,
    replaced: n,
    position: window.history.length,
    scroll: i ? ei() : null
  }
}
function yh(e) {
  const { history: t, location: s } = window,
    n = { value: Ya(e, s) },
    i = { value: t.state }
  i.value ||
    o(
      n.value,
      {
        back: null,
        current: n.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
      },
      !0
    )
  function o(a, u, c) {
    const h = e.indexOf('#'),
      p = h > -1 ? (s.host && document.querySelector('base') ? e : e.slice(h)) + a : bh() + e + a
    try {
      t[c ? 'replaceState' : 'pushState'](u, '', p), (i.value = u)
    } catch (m) {
      console.error(m), s[c ? 'replace' : 'assign'](p)
    }
  }
  function r(a, u) {
    const c = rt({}, t.state, Mr(i.value.back, a, i.value.forward, !0), u, {
      position: i.value.position
    })
    o(a, c, !0), (n.value = a)
  }
  function l(a, u) {
    const c = rt({}, i.value, t.state, { forward: a, scroll: ei() })
    o(c.current, c, !0)
    const h = rt({}, Mr(n.value, a, null), { position: c.position + 1 }, u)
    o(a, h, !1), (n.value = a)
  }
  return { location: n, state: i, push: l, replace: r }
}
function wh(e) {
  e = dh(e)
  const t = yh(e),
    s = Eh(e, t.state, t.location, t.replace)
  function n(o, r = !0) {
    r || s.pauseListeners(), history.go(o)
  }
  const i = rt({ location: '', base: e, go: n, createHref: ph.bind(null, e) }, t, s)
  return (
    Object.defineProperty(i, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(i, 'state', { enumerable: !0, get: () => t.state.value }),
    i
  )
}
function Ah(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function za(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const Ga = Symbol('')
var kr
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated')
})(kr || (kr = {}))
function ys(e, t) {
  return rt(new Error(), { type: e, [Ga]: !0 }, t)
}
function pe(e, t) {
  return e instanceof Error && Ga in e && (t == null || !!(e.type & t))
}
const Vr = '[^/]+?',
  Th = { sensitive: !1, strict: !1, start: !0, end: !0 },
  xh = /[.+*?^${}()[\]/\\]/g
function Ch(e, t) {
  const s = rt({}, Th, t),
    n = []
  let i = s.start ? '^' : ''
  const o = []
  for (const u of e) {
    const c = u.length ? [] : [90]
    s.strict && !u.length && (i += '/')
    for (let h = 0; h < u.length; h++) {
      const p = u[h]
      let m = 40 + (s.sensitive ? 0.25 : 0)
      if (p.type === 0) h || (i += '/'), (i += p.value.replace(xh, '\\$&')), (m += 40)
      else if (p.type === 1) {
        const { value: S, repeatable: A, optional: P, regexp: M } = p
        o.push({ name: S, repeatable: A, optional: P })
        const L = M || Vr
        if (L !== Vr) {
          m += 10
          try {
            new RegExp(`(${L})`)
          } catch (k) {
            throw new Error(`Invalid custom RegExp for param "${S}" (${L}): ` + k.message)
          }
        }
        let O = A ? `((?:${L})(?:/(?:${L}))*)` : `(${L})`
        h || (O = P && u.length < 2 ? `(?:/${O})` : '/' + O),
          P && (O += '?'),
          (i += O),
          (m += 20),
          P && (m += -8),
          A && (m += -20),
          L === '.*' && (m += -50)
      }
      c.push(m)
    }
    n.push(c)
  }
  if (s.strict && s.end) {
    const u = n.length - 1
    n[u][n[u].length - 1] += 0.7000000000000001
  }
  s.strict || (i += '/?'), s.end ? (i += '$') : s.strict && (i += '(?:/|$)')
  const r = new RegExp(i, s.sensitive ? '' : 'i')
  function l(u) {
    const c = u.match(r),
      h = {}
    if (!c) return null
    for (let p = 1; p < c.length; p++) {
      const m = c[p] || '',
        S = o[p - 1]
      h[S.name] = m && S.repeatable ? m.split('/') : m
    }
    return h
  }
  function a(u) {
    let c = '',
      h = !1
    for (const p of e) {
      ;(!h || !c.endsWith('/')) && (c += '/'), (h = !1)
      for (const m of p)
        if (m.type === 0) c += m.value
        else if (m.type === 1) {
          const { value: S, repeatable: A, optional: P } = m,
            M = S in u ? u[S] : ''
          if (ie(M) && !A)
            throw new Error(
              `Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`
            )
          const L = ie(M) ? M.join('/') : M
          if (!L)
            if (P) p.length < 2 && (c.endsWith('/') ? (c = c.slice(0, -1)) : (h = !0))
            else throw new Error(`Missing required param "${S}"`)
          c += L
        }
    }
    return c || '/'
  }
  return { re: r, score: n, keys: o, parse: l, stringify: a }
}
function Sh(e, t) {
  let s = 0
  for (; s < e.length && s < t.length; ) {
    const n = t[s] - e[s]
    if (n) return n
    s++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0
}
function qa(e, t) {
  let s = 0
  const n = e.score,
    i = t.score
  for (; s < n.length && s < i.length; ) {
    const o = Sh(n[s], i[s])
    if (o) return o
    s++
  }
  if (Math.abs(i.length - n.length) === 1) {
    if (Hr(n)) return 1
    if (Hr(i)) return -1
  }
  return i.length - n.length
}
function Hr(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const Oh = { type: 0, value: '' },
  $h = /[a-zA-Z0-9_]/
function Nh(e) {
  if (!e) return [[]]
  if (e === '/') return [[Oh]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(m) {
    throw new Error(`ERR (${s})/"${u}": ${m}`)
  }
  let s = 0,
    n = s
  const i = []
  let o
  function r() {
    o && i.push(o), (o = [])
  }
  let l = 0,
    a,
    u = '',
    c = ''
  function h() {
    u &&
      (s === 0
        ? o.push({ type: 0, value: u })
        : s === 1 || s === 2 || s === 3
          ? (o.length > 1 &&
              (a === '*' || a === '+') &&
              t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),
            o.push({
              type: 1,
              value: u,
              regexp: c,
              repeatable: a === '*' || a === '+',
              optional: a === '*' || a === '?'
            }))
          : t('Invalid state to consume buffer'),
      (u = ''))
  }
  function p() {
    u += a
  }
  for (; l < e.length; ) {
    if (((a = e[l++]), a === '\\' && s !== 2)) {
      ;(n = s), (s = 4)
      continue
    }
    switch (s) {
      case 0:
        a === '/' ? (u && h(), r()) : a === ':' ? (h(), (s = 1)) : p()
        break
      case 4:
        p(), (s = n)
        break
      case 1:
        a === '('
          ? (s = 2)
          : $h.test(a)
            ? p()
            : (h(), (s = 0), a !== '*' && a !== '?' && a !== '+' && l--)
        break
      case 2:
        a === ')' ? (c[c.length - 1] == '\\' ? (c = c.slice(0, -1) + a) : (s = 3)) : (c += a)
        break
      case 3:
        h(), (s = 0), a !== '*' && a !== '?' && a !== '+' && l--, (c = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return s === 2 && t(`Unfinished custom RegExp for param "${u}"`), h(), r(), i
}
function Ih(e, t, s) {
  const n = Ch(Nh(e.path), s),
    i = rt(n, { record: e, parent: t, children: [], alias: [] })
  return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i
}
function Ph(e, t) {
  const s = [],
    n = new Map()
  t = Br({ strict: !1, end: !0, sensitive: !1 }, t)
  function i(h) {
    return n.get(h)
  }
  function o(h, p, m) {
    const S = !m,
      A = Lh(h)
    A.aliasOf = m && m.record
    const P = Br(t, h),
      M = [A]
    if ('alias' in h) {
      const k = typeof h.alias == 'string' ? [h.alias] : h.alias
      for (const B of k)
        M.push(
          rt({}, A, {
            components: m ? m.record.components : A.components,
            path: B,
            aliasOf: m ? m.record : A
          })
        )
    }
    let L, O
    for (const k of M) {
      const { path: B } = k
      if (p && B[0] !== '/') {
        const R = p.record.path,
          U = R[R.length - 1] === '/' ? '' : '/'
        k.path = p.record.path + (B && U + B)
      }
      if (
        ((L = Ih(k, p, P)),
        m
          ? m.alias.push(L)
          : ((O = O || L), O !== L && O.alias.push(L), S && h.name && !Fr(L) && r(h.name)),
        Qa(L) && a(L),
        A.children)
      ) {
        const R = A.children
        for (let U = 0; U < R.length; U++) o(R[U], L, m && m.children[U])
      }
      m = m || L
    }
    return O
      ? () => {
          r(O)
        }
      : Ws
  }
  function r(h) {
    if (za(h)) {
      const p = n.get(h)
      p && (n.delete(h), s.splice(s.indexOf(p), 1), p.children.forEach(r), p.alias.forEach(r))
    } else {
      const p = s.indexOf(h)
      p > -1 &&
        (s.splice(p, 1),
        h.record.name && n.delete(h.record.name),
        h.children.forEach(r),
        h.alias.forEach(r))
    }
  }
  function l() {
    return s
  }
  function a(h) {
    const p = Mh(h, s)
    s.splice(p, 0, h), h.record.name && !Fr(h) && n.set(h.record.name, h)
  }
  function u(h, p) {
    let m,
      S = {},
      A,
      P
    if ('name' in h && h.name) {
      if (((m = n.get(h.name)), !m)) throw ys(1, { location: h })
      ;(P = m.record.name),
        (S = rt(
          jr(
            p.params,
            m.keys
              .filter((O) => !O.optional)
              .concat(m.parent ? m.parent.keys.filter((O) => O.optional) : [])
              .map((O) => O.name)
          ),
          h.params &&
            jr(
              h.params,
              m.keys.map((O) => O.name)
            )
        )),
        (A = m.stringify(S))
    } else if (h.path != null)
      (A = h.path), (m = s.find((O) => O.re.test(A))), m && ((S = m.parse(A)), (P = m.record.name))
    else {
      if (((m = p.name ? n.get(p.name) : s.find((O) => O.re.test(p.path))), !m))
        throw ys(1, { location: h, currentLocation: p })
      ;(P = m.record.name), (S = rt({}, p.params, h.params)), (A = m.stringify(S))
    }
    const M = []
    let L = m
    for (; L; ) M.unshift(L.record), (L = L.parent)
    return { name: P, path: A, params: S, matched: M, meta: Dh(M) }
  }
  e.forEach((h) => o(h))
  function c() {
    ;(s.length = 0), n.clear()
  }
  return {
    addRoute: o,
    resolve: u,
    removeRoute: r,
    clearRoutes: c,
    getRoutes: l,
    getRecordMatcher: i
  }
}
function jr(e, t) {
  const s = {}
  for (const n of t) n in e && (s[n] = e[n])
  return s
}
function Lh(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Rh(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component }
  }
}
function Rh(e) {
  const t = {},
    s = e.props || !1
  if ('component' in e) t.default = s
  else for (const n in e.components) t[n] = typeof s == 'object' ? s[n] : s
  return t
}
function Fr(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function Dh(e) {
  return e.reduce((t, s) => rt(t, s.meta), {})
}
function Br(e, t) {
  const s = {}
  for (const n in e) s[n] = n in t ? t[n] : e[n]
  return s
}
function Mh(e, t) {
  let s = 0,
    n = t.length
  for (; s !== n; ) {
    const o = (s + n) >> 1
    qa(e, t[o]) < 0 ? (n = o) : (s = o + 1)
  }
  const i = kh(e)
  return i && (n = t.lastIndexOf(i, n - 1)), n
}
function kh(e) {
  let t = e
  for (; (t = t.parent); ) if (Qa(t) && qa(e, t) === 0) return t
}
function Qa({ record: e }) {
  return !!(e.name || (e.components && Object.keys(e.components).length) || e.redirect)
}
function Vh(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const n = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let i = 0; i < n.length; ++i) {
    const o = n[i].replace(Fa, ' '),
      r = o.indexOf('='),
      l = Js(r < 0 ? o : o.slice(0, r)),
      a = r < 0 ? null : Js(o.slice(r + 1))
    if (l in t) {
      let u = t[l]
      ie(u) || (u = t[l] = [u]), u.push(a)
    } else t[l] = a
  }
  return t
}
function Kr(e) {
  let t = ''
  for (let s in e) {
    const n = e[s]
    if (((s = nh(s)), n == null)) {
      n !== void 0 && (t += (t.length ? '&' : '') + s)
      continue
    }
    ;(ie(n) ? n.map((o) => o && qi(o)) : [n && qi(n)]).forEach((o) => {
      o !== void 0 && ((t += (t.length ? '&' : '') + s), o != null && (t += '=' + o))
    })
  }
  return t
}
function Hh(e) {
  const t = {}
  for (const s in e) {
    const n = e[s]
    n !== void 0 &&
      (t[s] = ie(n) ? n.map((i) => (i == null ? null : '' + i)) : n == null ? n : '' + n)
  }
  return t
}
const jh = Symbol(''),
  Wr = Symbol(''),
  Co = Symbol(''),
  Xa = Symbol(''),
  Xi = Symbol('')
function Ds() {
  let e = []
  function t(n) {
    return (
      e.push(n),
      () => {
        const i = e.indexOf(n)
        i > -1 && e.splice(i, 1)
      }
    )
  }
  function s() {
    e = []
  }
  return { add: t, list: () => e.slice(), reset: s }
}
function Oe(e, t, s, n, i, o = (r) => r()) {
  const r = n && (n.enterCallbacks[i] = n.enterCallbacks[i] || [])
  return () =>
    new Promise((l, a) => {
      const u = (p) => {
          p === !1
            ? a(ys(4, { from: s, to: t }))
            : p instanceof Error
              ? a(p)
              : Ah(p)
                ? a(ys(2, { from: t, to: p }))
                : (r && n.enterCallbacks[i] === r && typeof p == 'function' && r.push(p), l())
        },
        c = o(() => e.call(n && n.instances[i], t, s, u))
      let h = Promise.resolve(c)
      e.length < 3 && (h = h.then(u)), h.catch((p) => a(p))
    })
}
function yi(e, t, s, n, i = (o) => o()) {
  const o = []
  for (const r of e)
    for (const l in r.components) {
      let a = r.components[l]
      if (!(t !== 'beforeRouteEnter' && !r.instances[l]))
        if (Fh(a)) {
          const c = (a.__vccOpts || a)[t]
          c && o.push(Oe(c, s, n, r, l, i))
        } else {
          let u = a()
          o.push(() =>
            u.then((c) => {
              if (!c)
                return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${r.path}"`))
              const h = Yd(c) ? c.default : c
              r.components[l] = h
              const m = (h.__vccOpts || h)[t]
              return m && Oe(m, s, n, r, l, i)()
            })
          )
        }
    }
  return o
}
function Fh(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e
}
function Ur(e) {
  const t = ge(Co),
    s = ge(Xa),
    n = Ft(() => {
      const a = ps(e.to)
      return t.resolve(a)
    }),
    i = Ft(() => {
      const { matched: a } = n.value,
        { length: u } = a,
        c = a[u - 1],
        h = s.matched
      if (!c || !h.length) return -1
      const p = h.findIndex(Es.bind(null, c))
      if (p > -1) return p
      const m = Yr(a[u - 2])
      return u > 1 && Yr(c) === m && h[h.length - 1].path !== m
        ? h.findIndex(Es.bind(null, a[u - 2]))
        : p
    }),
    o = Ft(() => i.value > -1 && Uh(s.params, n.value.params)),
    r = Ft(() => i.value > -1 && i.value === s.matched.length - 1 && Ua(s.params, n.value.params))
  function l(a = {}) {
    return Wh(a) ? t[ps(e.replace) ? 'replace' : 'push'](ps(e.to)).catch(Ws) : Promise.resolve()
  }
  return { route: n, href: Ft(() => n.value.href), isActive: o, isExactActive: r, navigate: l }
}
const Bh = ha({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' }
    },
    useLink: Ur,
    setup(e, { slots: t }) {
      const s = sn(Ur(e)),
        { options: n } = ge(Co),
        i = Ft(() => ({
          [zr(e.activeClass, n.linkActiveClass, 'router-link-active')]: s.isActive,
          [zr(e.exactActiveClass, n.linkExactActiveClass, 'router-link-exact-active')]:
            s.isExactActive
        }))
      return () => {
        const o = t.default && t.default(s)
        return e.custom
          ? o
          : Va(
              'a',
              {
                'aria-current': s.isExactActive ? e.ariaCurrentValue : null,
                href: s.href,
                onClick: s.navigate,
                class: i.value
              },
              o
            )
      }
    }
  }),
  Kh = Bh
function Wh(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function Uh(e, t) {
  for (const s in t) {
    const n = t[s],
      i = e[s]
    if (typeof n == 'string') {
      if (n !== i) return !1
    } else if (!ie(i) || i.length !== n.length || n.some((o, r) => o !== i[r])) return !1
  }
  return !0
}
function Yr(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const zr = (e, t, s) => e ?? t ?? s,
  Yh = ha({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: s }) {
      const n = ge(Xi),
        i = Ft(() => e.route || n.value),
        o = ge(Wr, 0),
        r = Ft(() => {
          let u = ps(o)
          const { matched: c } = i.value
          let h
          for (; (h = c[u]) && !h.components; ) u++
          return u
        }),
        l = Ft(() => i.value.matched[r.value])
      Cn(
        Wr,
        Ft(() => r.value + 1)
      ),
        Cn(jh, l),
        Cn(Xi, i)
      const a = Gn()
      return (
        Sn(
          () => [a.value, l.value, e.name],
          ([u, c, h], [p, m, S]) => {
            c &&
              ((c.instances[h] = u),
              m &&
                m !== c &&
                u &&
                u === p &&
                (c.leaveGuards.size || (c.leaveGuards = m.leaveGuards),
                c.updateGuards.size || (c.updateGuards = m.updateGuards))),
              u && c && (!m || !Es(c, m) || !p) && (c.enterCallbacks[h] || []).forEach((A) => A(u))
          },
          { flush: 'post' }
        ),
        () => {
          const u = i.value,
            c = e.name,
            h = l.value,
            p = h && h.components[c]
          if (!p) return Gr(s.default, { Component: p, route: u })
          const m = h.props[c],
            S = m ? (m === !0 ? u.params : typeof m == 'function' ? m(u) : m) : null,
            P = Va(
              p,
              rt({}, S, t, {
                onVnodeUnmounted: (M) => {
                  M.component.isUnmounted && (h.instances[c] = null)
                },
                ref: a
              })
            )
          return Gr(s.default, { Component: P, route: u }) || P
        }
      )
    }
  })
function Gr(e, t) {
  if (!e) return null
  const s = e(t)
  return s.length === 1 ? s[0] : s
}
const zh = Yh
function Gh(e) {
  const t = Ph(e.routes, e),
    s = e.parseQuery || Vh,
    n = e.stringifyQuery || Kr,
    i = e.history,
    o = Ds(),
    r = Ds(),
    l = Ds(),
    a = Ru(Te)
  let u = Te
  rs && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual')
  const c = bi.bind(null, (v) => '' + v),
    h = bi.bind(null, oh),
    p = bi.bind(null, Js)
  function m(v, I) {
    let $, V
    return za(v) ? (($ = t.getRecordMatcher(v)), (V = I)) : (V = v), t.addRoute(V, $)
  }
  function S(v) {
    const I = t.getRecordMatcher(v)
    I && t.removeRoute(I)
  }
  function A() {
    return t.getRoutes().map((v) => v.record)
  }
  function P(v) {
    return !!t.getRecordMatcher(v)
  }
  function M(v, I) {
    if (((I = rt({}, I || a.value)), typeof v == 'string')) {
      const d = Ei(s, v, I.path),
        _ = t.resolve({ path: d.path }, I),
        b = i.createHref(d.fullPath)
      return rt(d, _, { params: p(_.params), hash: Js(d.hash), redirectedFrom: void 0, href: b })
    }
    let $
    if (v.path != null) $ = rt({}, v, { path: Ei(s, v.path, I.path).path })
    else {
      const d = rt({}, v.params)
      for (const _ in d) d[_] == null && delete d[_]
      ;($ = rt({}, v, { params: h(d) })), (I.params = h(I.params))
    }
    const V = t.resolve($, I),
      Z = v.hash || ''
    V.params = c(p(V.params))
    const dt = ah(n, rt({}, v, { hash: sh(Z), path: V.path })),
      f = i.createHref(dt)
    return rt({ fullPath: dt, hash: Z, query: n === Kr ? Hh(v.query) : v.query || {} }, V, {
      redirectedFrom: void 0,
      href: f
    })
  }
  function L(v) {
    return typeof v == 'string' ? Ei(s, v, a.value.path) : rt({}, v)
  }
  function O(v, I) {
    if (u !== v) return ys(8, { from: I, to: v })
  }
  function k(v) {
    return U(v)
  }
  function B(v) {
    return k(rt(L(v), { replace: !0 }))
  }
  function R(v) {
    const I = v.matched[v.matched.length - 1]
    if (I && I.redirect) {
      const { redirect: $ } = I
      let V = typeof $ == 'function' ? $(v) : $
      return (
        typeof V == 'string' &&
          ((V = V.includes('?') || V.includes('#') ? (V = L(V)) : { path: V }), (V.params = {})),
        rt({ query: v.query, hash: v.hash, params: V.path != null ? {} : v.params }, V)
      )
    }
  }
  function U(v, I) {
    const $ = (u = M(v)),
      V = a.value,
      Z = v.state,
      dt = v.force,
      f = v.replace === !0,
      d = R($)
    if (d)
      return U(
        rt(L(d), { state: typeof d == 'object' ? rt({}, Z, d.state) : Z, force: dt, replace: f }),
        I || $
      )
    const _ = $
    _.redirectedFrom = I
    let b
    return (
      !dt && ch(n, V, $) && ((b = ys(16, { to: _, from: V })), $t(V, V, !0, !1)),
      (b ? Promise.resolve(b) : nt(_, V))
        .catch((g) => (pe(g) ? (pe(g, 2) ? g : Mt(g)) : Q(g, _, V)))
        .then((g) => {
          if (g) {
            if (pe(g, 2))
              return U(
                rt({ replace: f }, L(g.to), {
                  state: typeof g.to == 'object' ? rt({}, Z, g.to.state) : Z,
                  force: dt
                }),
                I || _
              )
          } else g = mt(_, V, !0, f, Z)
          return ft(_, V, g), g
        })
    )
  }
  function st(v, I) {
    const $ = O(v, I)
    return $ ? Promise.reject($) : Promise.resolve()
  }
  function at(v) {
    const I = kt.values().next().value
    return I && typeof I.runWithContext == 'function' ? I.runWithContext(v) : v()
  }
  function nt(v, I) {
    let $
    const [V, Z, dt] = qh(v, I)
    $ = yi(V.reverse(), 'beforeRouteLeave', v, I)
    for (const d of V)
      d.leaveGuards.forEach((_) => {
        $.push(Oe(_, v, I))
      })
    const f = st.bind(null, v, I)
    return (
      $.push(f),
      gt($)
        .then(() => {
          $ = []
          for (const d of o.list()) $.push(Oe(d, v, I))
          return $.push(f), gt($)
        })
        .then(() => {
          $ = yi(Z, 'beforeRouteUpdate', v, I)
          for (const d of Z)
            d.updateGuards.forEach((_) => {
              $.push(Oe(_, v, I))
            })
          return $.push(f), gt($)
        })
        .then(() => {
          $ = []
          for (const d of dt)
            if (d.beforeEnter)
              if (ie(d.beforeEnter)) for (const _ of d.beforeEnter) $.push(Oe(_, v, I))
              else $.push(Oe(d.beforeEnter, v, I))
          return $.push(f), gt($)
        })
        .then(
          () => (
            v.matched.forEach((d) => (d.enterCallbacks = {})),
            ($ = yi(dt, 'beforeRouteEnter', v, I, at)),
            $.push(f),
            gt($)
          )
        )
        .then(() => {
          $ = []
          for (const d of r.list()) $.push(Oe(d, v, I))
          return $.push(f), gt($)
        })
        .catch((d) => (pe(d, 8) ? d : Promise.reject(d)))
    )
  }
  function ft(v, I, $) {
    l.list().forEach((V) => at(() => V(v, I, $)))
  }
  function mt(v, I, $, V, Z) {
    const dt = O(v, I)
    if (dt) return dt
    const f = I === Te,
      d = rs ? history.state : {}
    $ &&
      (V || f
        ? i.replace(v.fullPath, rt({ scroll: f && d && d.scroll }, Z))
        : i.push(v.fullPath, Z)),
      (a.value = v),
      $t(v, I, $, f),
      Mt()
  }
  let ct
  function Dt() {
    ct ||
      (ct = i.listen((v, I, $) => {
        if (!Vt.listening) return
        const V = M(v),
          Z = R(V)
        if (Z) {
          U(rt(Z, { replace: !0 }), V).catch(Ws)
          return
        }
        u = V
        const dt = a.value
        rs && gh(Dr(dt.fullPath, $.delta), ei()),
          nt(V, dt)
            .catch((f) =>
              pe(f, 12)
                ? f
                : pe(f, 2)
                  ? (U(f.to, V)
                      .then((d) => {
                        pe(d, 20) && !$.delta && $.type === Zs.pop && i.go(-1, !1)
                      })
                      .catch(Ws),
                    Promise.reject())
                  : ($.delta && i.go(-$.delta, !1), Q(f, V, dt))
            )
            .then((f) => {
              ;(f = f || mt(V, dt, !1)),
                f &&
                  ($.delta && !pe(f, 8)
                    ? i.go(-$.delta, !1)
                    : $.type === Zs.pop && pe(f, 20) && i.go(-1, !1)),
                ft(V, dt, f)
            })
            .catch(Ws)
      }))
  }
  let Ot = Ds(),
    et = Ds(),
    G
  function Q(v, I, $) {
    Mt(v)
    const V = et.list()
    return V.length ? V.forEach((Z) => Z(v, I, $)) : console.error(v), Promise.reject(v)
  }
  function bt() {
    return G && a.value !== Te
      ? Promise.resolve()
      : new Promise((v, I) => {
          Ot.add([v, I])
        })
  }
  function Mt(v) {
    return G || ((G = !v), Dt(), Ot.list().forEach(([I, $]) => (v ? $(v) : I())), Ot.reset()), v
  }
  function $t(v, I, $, V) {
    const { scrollBehavior: Z } = e
    if (!rs || !Z) return Promise.resolve()
    const dt =
      (!$ && vh(Dr(v.fullPath, 0))) || ((V || !$) && history.state && history.state.scroll) || null
    return bo()
      .then(() => Z(v, I, dt))
      .then((f) => f && _h(f))
      .catch((f) => Q(f, v, I))
  }
  const pt = (v) => i.go(v)
  let Zt
  const kt = new Set(),
    Vt = {
      currentRoute: a,
      listening: !0,
      addRoute: m,
      removeRoute: S,
      clearRoutes: t.clearRoutes,
      hasRoute: P,
      getRoutes: A,
      resolve: M,
      options: e,
      push: k,
      replace: B,
      go: pt,
      back: () => pt(-1),
      forward: () => pt(1),
      beforeEach: o.add,
      beforeResolve: r.add,
      afterEach: l.add,
      onError: et.add,
      isReady: bt,
      install(v) {
        const I = this
        v.component('RouterLink', Kh),
          v.component('RouterView', zh),
          (v.config.globalProperties.$router = I),
          Object.defineProperty(v.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => ps(a)
          }),
          rs && !Zt && a.value === Te && ((Zt = !0), k(i.location).catch((Z) => {}))
        const $ = {}
        for (const Z in Te) Object.defineProperty($, Z, { get: () => a.value[Z], enumerable: !0 })
        v.provide(Co, I), v.provide(Xa, Zl($)), v.provide(Xi, a)
        const V = v.unmount
        kt.add(v),
          (v.unmount = function () {
            kt.delete(v),
              kt.size < 1 &&
                ((u = Te), ct && ct(), (ct = null), (a.value = Te), (Zt = !1), (G = !1)),
              V()
          })
      }
    }
  function gt(v) {
    return v.reduce((I, $) => I.then(() => at($)), Promise.resolve())
  }
  return Vt
}
function qh(e, t) {
  const s = [],
    n = [],
    i = [],
    o = Math.max(t.matched.length, e.matched.length)
  for (let r = 0; r < o; r++) {
    const l = t.matched[r]
    l && (e.matched.find((u) => Es(u, l)) ? n.push(l) : s.push(l))
    const a = e.matched[r]
    a && (t.matched.find((u) => Es(u, a)) || i.push(a))
  }
  return [s, n, i]
}
const Qh = {},
  Xh = { class: 'bgImage d-flex align-items-center' },
  Jh = E(
    'div',
    { class: 'container d-flex align-items-end flex-column' },
    [
      E('h3', null, 'Promise-Desert 2020 早春系列'),
      E('h1', null, '看得清，才能看得遠'),
      E('button', { type: 'button', class: 'btn' }, '立即購買')
    ],
    -1
  ),
  Zh = [Jh]
function tp(e, t, s, n, i, o) {
  return X(), J('section', Xh, Zh)
}
const ep = Rt(Qh, [['render', tp]]),
  sp = {},
  np = { class: 'professionalWork d-flex align-items-center flex-column' },
  ip = At(
    '<h2>用專業的心，做專業的事</h2><div class="album"><div class="container"><div class="row row-cols-1 row-cols-sm-2 row-cols-md-4"><div class="col d-flex flex-column align-items-center"><img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section2-1.png?raw=true"><h5 class="card-text">單一價格</h5><div class="card-body"><p class="">無論任何度數皆不需追加費用即可擁有適合自己的薄型球面鏡片。</p></div></div><div class="col d-flex flex-column align-items-center"><img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section2-2.png?raw=true"><h5 class="card-text">20 分鐘即可取件</h5><div class="card-body"><p class=""> 為了您的寶貴時間著想，以豐富專業知識與技術將結帳到交件的時間縮減至最快 20 分鐘即可完成。 </p></div></div><div class="col d-flex flex-column align-items-center"><img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section2-3.png?raw=true"><h5 class="card-text">安心售後服務</h5><div class="card-body"><p class=""> 我們提供長達 120 天的保固售後服務，不限會員資格皆享有免費深層保養及專業維修服務。 </p></div></div><div class="col d-flex flex-column align-items-center"><img class="glass" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-sectioin2-4.png?raw=true"><h5 class="card-text">關於鏡片</h5><div class="card-body"><p class="">使用世界知名頂級品牌，抗UV、防汙鍍膜薄型非球面鏡片。</p></div></div></div></div></div>',
    2
  ),
  op = [ip]
function rp(e, t, s, n, i, o) {
  return X(), J('section', np, op)
}
const lp = Rt(sp, [['render', rp]]),
  ap = {},
  cp = { class: 'classicFrame' },
  up = At(
    '<div class="d-flex flex-column align-items-center"><h2 class="">經典系列鏡框</h2></div><div class="album"><div class="container"><div class="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3"><div class="col d-flex flex-column align-items-center"><img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section3-1.png?raw=true"><div class="card-body"><h3 class="card-text">OPTICAL</h3></div></div><div class="col d-flex flex-column align-items-center"><img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section3-2.png?raw=true"><div class="card-body"><h3 class="card-text">SUNGLASSES</h3></div></div><div class="col d-flex flex-column align-items-center"><img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section3-3.png?raw=true"><div class="card-body"><h3 class="card-text">FUNCTIONAL</h3></div></div></div></div></div>',
    2
  ),
  fp = [up]
function dp(e, t, s, n, i, o) {
  return X(), J('section', cp, fp)
}
const hp = Rt(ap, [['render', dp]]),
  pp = {},
  mp = { class: 'coBrandedDesignFrame' },
  _p = At(
    '<div class="container d-flex flex-column align-items-center justify-content-center"><h2 class="">聯名設計鏡框</h2><div class="album"><div class=""><div class="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 text-center g-3"><div class="col d-flex flex-column align-items-center"><img class="imgWeb" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section4-1.png?raw=true"><img class="imgApp" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section4-1-sm.png?raw=true"><div class="card-body border"><h3 class="card-text">DOUBLE A+</h3></div></div><div class="col d-flex flex-column align-items-center"><img class="imgWeb" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section4-2.png?raw=true"><img class="imgApp" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section4-2-sm.png?raw=true"><div class="card-body border"><h3 class="card-text">YOUTH</h3></div></div></div></div></div></div>',
    1
  ),
  gp = [_p]
function vp(e, t, s, n, i, o) {
  return X(), J('section', mp, gp)
}
const bp = Rt(pp, [['render', vp]]),
  Ep = {},
  yp = { class: 'customerRecommendations d-flex align-items-center flex-column' },
  wp = At(
    '<h2 class="">顧客推薦</h2><div class="album"><div class="container"><div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-3"><div class="col"><div class="card shadow-sm"><img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section5-1.png?raw=true"><div class="card-body d-flex flex-column justify-content-between"><div class="content"><p class="card-text">Jessy</p><p>眼鏡品質優良，下次還會想來這邊購買！</p></div><span>2021/06/20</span></div></div></div><div class="col"><div class="card shadow-sm"><img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section5-2.png?raw=true"><div class="card-body d-flex flex-column justify-content-between"><div class="content"><p class="card-text">凱倫</p><p>做工細緻、鏡架很輕盈，待久也不會覺得有負擔，推薦給大家！</p></div><span>2021/04/18</span></div></div></div><div class="col"><div class="card shadow-sm"><img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section5-3.png?raw=true"><div class="card-body d-flex flex-column justify-content-between"><div class="content"><p class="card-text">悠悠</p><p>謝謝客服人員的詳細回答，成功買到了喜歡的眼鏡，下次會再回購！</p></div><span>2020/12/25</span></div></div></div><div class="col"><div class="card shadow-sm"><img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section5-4.png?raw=true"><div class="card-body d-flex flex-column justify-content-between"><div class="content"><p class="card-text">Kyuan</p><p>服務很好，品質沒有任何問題，非常喜歡。</p></div><span>2020/10/31</span></div></div></div></div></div></div>',
    2
  ),
  Ap = [wp]
function Tp(e, t, s, n, i, o) {
  return X(), J('section', yp, Ap)
}
const xp = Rt(Ep, [['render', Tp]]),
  Cp = {},
  Sp = { class: 'callMe' },
  Op = At(
    '<div class="container"><div class="d-flex flex-column align-items-center"><h2 class="">聯絡我們</h2><p class=""> 我們相當重視您的意見，若您有任何疑問，可先參考「常見問題」，若仍有任何問題，請填妥以下資料，我們會在近期與您聯繫。 </p></div><div class="mb-3"><label for="name" class="form-label">姓名</label><input type="name" class="form-control labelColor" id="name" placeholder="陳小明"></div><div class="mb-3"><label for="phone" class="form-label">連絡電話</label><input type="phone" class="form-control labelColor" id="name" placeholder="0912-345-678"></div><div class="mb-3"><label for="email" class="form-label">電子郵件</label><input type="email" class="form-control labelColor" id="email" placeholder="example@email.com"></div><div class="mb-3"><label for="feedback" class="form-label">意見反饋</label><textarea class="form-control labelColor" id="feedback" placeholder="請輸入您的意見" rows="4"></textarea></div><div class="form-check"><input class="form-check-input checkboxStyle" type="checkbox" value="" id="iknow"><label class="form-check-label" for="iknow">我同意隱私權政策，並同意依隱私權政策中所述的方式處理自己的資料。</label></div><div class="btnStyle d-flex justify-content-center"><button class="btn">確認送出</button></div></div>',
    1
  ),
  $p = [Op]
function Np(e, t, s, n, i, o) {
  return X(), J('section', Sp, $p)
}
const Ip = Rt(Cp, [['render', Np]]),
  Pp = {
    __name: 'HomeView',
    setup(e) {
      return (t, s) => (X(), J('main', null, [Y(ep), Y(lp), Y(hp), Y(bp), Y(xp), Y(Ip)]))
    }
  },
  Lp = { class: 'navList' },
  Rp = { class: 'container' },
  Dp = { class: 'nav row text-center' },
  Mp = { class: 'nav-item' },
  kp = { class: 'nav-item' },
  Vp = { class: 'nav-item' },
  Hp = {
    __name: 'NavList',
    emits: ['clickType'],
    setup(e, { emit: t }) {
      const s = t,
        n = (i) => {
          s('clickType', i), console.log(i)
        }
      return (i, o) => (
        X(),
        J('section', Lp, [
          E('div', Rp, [
            E('ul', Dp, [
              E('li', Mp, [
                E(
                  'a',
                  {
                    class: 'nav-link text-black',
                    href: '#',
                    onClick: o[0] || (o[0] = _s((r) => n('optical'), ['prevent']))
                  },
                  'OPTICAL'
                )
              ]),
              E('li', kp, [
                E(
                  'a',
                  {
                    class: 'nav-link text-black',
                    href: '#',
                    onClick: o[1] || (o[1] = _s((r) => n('sunglasses'), ['prevent']))
                  },
                  'SUNGLASSES'
                )
              ]),
              E('li', Vp, [
                E(
                  'a',
                  {
                    class: 'nav-link text-black',
                    href: '#',
                    onClick: o[2] || (o[2] = _s((r) => n('functional'), ['prevent']))
                  },
                  'FUNCTIONAL'
                )
              ])
            ])
          ])
        ])
      )
    }
  },
  jp = {},
  Fp = { class: 'image' },
  Bp = E(
    'div',
    { class: '' },
    [
      E('img', {
        class: 'img-fluid',
        src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-header-1.png?raw=true',
        alt: 'Product Header 1'
      }),
      E('img', {
        class: 'img-fluid',
        src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-header-2.png?raw=true',
        alt: 'Product Header 2'
      })
    ],
    -1
  ),
  Kp = [Bp]
function Wp(e, t, s, n, i, o) {
  return X(), J('section', Fp, Kp)
}
const Up = Rt(jp, [['render', Wp]]),
  Yp = { class: 'banner' },
  zp = { class: 'container d-flex flex-column justify-content-center align-items-center' },
  Gp = { key: 0, class: 'text-black' },
  qp = { key: 1, class: 'text-black' },
  Qp = { key: 2, class: 'text-black' },
  Xp = { key: 3, class: 'text-black' },
  Jp = { class: 'album' },
  Zp = { class: 'container' },
  tm = { key: 0, class: 'row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-3 mt-2' },
  em = ['src'],
  sm = At(
    '<div class="card-body d-flex justify-content-between pt-2"><h4 class="card-text text-black">BJ41600S</h4><h4 class="text-danger">NTD3,490</h4></div><div class="box"><div class="brownBox"></div><div class="brownLightBox"></div></div>',
    2
  ),
  nm = { key: 1, class: 'row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3' },
  im = ['src'],
  om = At(
    '<div class="card-body d-flex justify-content-between pt-2"><h4 class="card-text text-black">BJ41600S</h4><h4 class="text-danger">NTD3,490</h4></div><div class="box"><div class="brownBox"></div><div class="brownLightBox"></div></div>',
    2
  ),
  rm = { 'aria-label': 'Page navigation example' },
  lm = { class: 'pagination' },
  am = ['onClick'],
  cm = {
    __name: 'Banner',
    props: { type: String },
    setup(e) {
      const t = e,
        s = sn({
          products: Array.from({ length: 12 }, (l, a) => a + 1),
          currentPage: 1,
          itemsPerPage: 12
        }),
        n = () => {
          const l = window.innerWidth
          l <= 500
            ? (s.itemsPerPage = 4)
            : l <= 768
              ? (s.itemsPerPage = 10)
              : (s.itemsPerPage = 12),
            (s.currentPage = 1)
        },
        i = Ft(() => Math.ceil(s.products.length / s.itemsPerPage)),
        o = Ft(() => {
          const l = (s.currentPage - 1) * s.itemsPerPage,
            a = l + s.itemsPerPage
          return s.products.slice(l, a)
        }),
        r = (l) => {
          l > 0 && l <= i.value && (s.currentPage = l)
        }
      return (
        _a(() => {
          n(), window.addEventListener('resize', n)
        }),
        yo(() => {
          window.removeEventListener('resize', n)
        }),
        (l, a) => (
          X(),
          J('section', Yp, [
            E('div', zp, [
              t.type === 'optical' || t.type === ''
                ? (X(), J('h1', Gp, ' Celluloid Combi '))
                : ns('', !0),
              t.type === 'optical' || t.type === ''
                ? (X(), J('h2', qp, ' 賽璐珞鈦金屬混合鏡框 '))
                : ns('', !0),
              t.type === 'sunglasses'
                ? (X(), J('h1', Qp, '2020 NEW COLLECTION Combi'))
                : ns('', !0),
              t.type === 'sunglasses' ? (X(), J('h2', Xp, '賽璐珞鈦金屬混合鏡框')) : ns('', !0),
              E('div', Jp, [
                E('div', Zp, [
                  t.type === 'optical' || t.type === ''
                    ? (X(),
                      J('div', tm, [
                        (X(!0),
                        J(
                          zt,
                          null,
                          di(
                            o.value,
                            (u) => (
                              X(),
                              J('div', { class: 'col', key: u }, [
                                E(
                                  'img',
                                  {
                                    src: `https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-${u}.png?raw=true`
                                  },
                                  null,
                                  8,
                                  em
                                ),
                                sm
                              ])
                            )
                          ),
                          128
                        ))
                      ]))
                    : ns('', !0),
                  t.type === 'sunglasses'
                    ? (X(),
                      J('div', nm, [
                        (X(),
                        J(
                          zt,
                          null,
                          di(6, (u) =>
                            E('div', { class: 'col', key: u }, [
                              E(
                                'img',
                                {
                                  src: `https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-${u}.png?raw=true`
                                },
                                null,
                                8,
                                im
                              ),
                              om
                            ])
                          ),
                          64
                        ))
                      ]))
                    : ns('', !0)
                ])
              ]),
              E('nav', rm, [
                E('ul', lm, [
                  E(
                    'li',
                    { class: hs(['page-item', { disabled: l.currentPage === 1 }]) },
                    [
                      E(
                        'a',
                        {
                          class: 'page-link',
                          href: '#',
                          onClick: a[0] || (a[0] = _s((u) => r(l.currentPage - 1), ['prevent']))
                        },
                        '上一頁'
                      )
                    ],
                    2
                  ),
                  (X(!0),
                  J(
                    zt,
                    null,
                    di(
                      i.value,
                      (u) => (
                        X(),
                        J(
                          'li',
                          { class: hs(['page-item', { active: l.currentPage === u }]), key: u },
                          [
                            E(
                              'a',
                              {
                                class: 'page-link',
                                href: '#',
                                onClick: _s((c) => r(u), ['prevent'])
                              },
                              Hl(u),
                              9,
                              am
                            )
                          ],
                          2
                        )
                      )
                    ),
                    128
                  )),
                  E(
                    'li',
                    { class: hs(['page-item', { disabled: l.currentPage === i.value }]) },
                    [
                      E(
                        'a',
                        {
                          class: 'page-link',
                          href: '#',
                          onClick: a[1] || (a[1] = _s((u) => r(l.currentPage + 1), ['prevent']))
                        },
                        '下一頁'
                      )
                    ],
                    2
                  )
                ])
              ])
            ])
          ])
        )
      )
    }
  },
  um = {
    __name: 'SeriesFrames',
    setup(e) {
      const t = Gn(''),
        s = (n) => {
          ;(t.value = n), console.log(t.value)
        }
      return (n, i) => (
        X(),
        J('main', null, [
          Y(Hp, { onClickType: s }),
          Y(Up),
          Y(cm, { type: t.value }, null, 8, ['type'])
        ])
      )
    }
  },
  fm = {},
  dm = { class: 'store' },
  hm = { class: 'container' },
  pm = At(
    '<h1>門市據點</h1><div class="selectArea d-flex align-items-center"><h5>選擇地區</h5><select class="" name=""><option value="台北市" selected>台北市</option><option value="新北市">新北市</option><option value="台中市">台中市</option></select></div>',
    2
  ),
  mm = { class: 'album' },
  _m = { class: 'row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-3' },
  gm = { class: 'col' },
  vm = { class: 'card shadow-sm' },
  bm = At(
    '<img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/store-1.png?raw=true"><div class="card-body"><h3 class="border-bottom pb-2">台北中山旗艦店</h3><div class="mt-3"><div class="d-flex"><span class="material-symbols-outlined"> call </span><h4>電話：(02)000-1234</h4></div><div class="d-flex"><span class="material-symbols-outlined"> schedule </span><h4>營業時間：10:00-21:00</h4></div><div class="d-flex"><span class="material-symbols-outlined"> location_on </span><h4>地址：台北市中山區南京東路25巷2-1號</h4></div></div></div>',
    2
  ),
  Em = E('button', { class: 'btn btn-dark' }, '詳細資訊', -1),
  ym = At(
    '<div class="col"><div class="card shadow-sm"><img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/store-2.png?raw=true"><div class="card-body"><h3 class="border-bottom pb-2">台北綠園店</h3><div class="mt-3"><div class="d-flex"><span class="material-symbols-outlined"> call </span><h4>電話：(02)000-2345</h4></div><div class="d-flex"><span class="material-symbols-outlined"> schedule </span><h4>營業時間：10:00-21:00</h4></div><div class="d-flex"><span class="material-symbols-outlined"> location_on </span><h4>地址：台北市中正區復興南路 132-1 號</h4></div></div></div><button class="btn btn-dark">詳細資訊</button></div></div><div class="col"><div class="card shadow-sm"><img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/store-3.png?raw=true"><div class="card-body"><h3 class="border-bottom pb-2">台中清水旗艦店</h3><div class="mt-3"><div class="d-flex"><span class="material-symbols-outlined"> call </span><h4>電話：(02)000-1234</h4></div><div class="d-flex"><span class="material-symbols-outlined"> schedule </span><h4>營業時間：10:00-21:00</h4></div><div class="d-flex"><span class="material-symbols-outlined"> location_on </span><h4>地址：台中市清水區經南一路 23 號 8 樓</h4></div></div></div><button class="btn btn-dark">詳細資訊</button></div></div><div class="col"><div class="card shadow-sm"><img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/store-4.png?raw=true"><div class="card-body"><h3 class="border-bottom pb-2">高雄中正形象店</h3><div class="mt-3"><div class="d-flex"><span class="material-symbols-outlined"> call </span><h4>電話：(07)000-2345</h4></div><div class="d-flex"><span class="material-symbols-outlined"> schedule </span><h4>營業時間：10:00-21:00</h4></div><div class="d-flex"><span class="material-symbols-outlined"> location_on </span><h4>地址：高雄市苓雅區中正路 38 號 12 樓</h4></div></div></div><button class="btn btn-dark">詳細資訊</button></div></div><div class="col"><div class="card shadow-sm"><img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/store-5.png?raw=true"><div class="card-body"><h3 class="border-bottom pb-2">高雄夢時代店</h3><div class="mt-3"><div class="d-flex"><span class="material-symbols-outlined"> call </span><h4>電話：(07)000-1234</h4></div><div class="d-flex"><span class="material-symbols-outlined"> schedule </span><h4>營業時間：10:00-21:00</h4></div><div class="d-flex"><span class="material-symbols-outlined"> location_on </span><h4>營業時間：10:00-21:00</h4></div></div></div><button class="btn btn-dark">詳細資訊</button></div></div>',
    4
  )
function wm(e, t, s, n, i, o) {
  const r = vs('router-link')
  return (
    X(),
    J('div', dm, [
      E('div', hm, [
        pm,
        E('div', mm, [
          E('div', _m, [
            E('div', gm, [
              E('div', vm, [bm, Y(r, { to: '/storepage' }, { default: jt(() => [Em]), _: 1 })])
            ]),
            ym
          ])
        ])
      ])
    ])
  )
}
const Am = Rt(fm, [['render', wm]]),
  Tm = {
    __name: 'storeView',
    setup(e) {
      return (t, s) => (X(), J('main', null, [Y(Am)]))
    }
  },
  xm = { class: 'storePage' },
  Cm = { class: 'container' },
  Sm = E('h1', null, '門市據點', -1),
  Om = { class: 'selectArea d-flex align-items-center' },
  $m = E('h5', null, '選擇分店', -1),
  Nm = At(
    '<option value="台北中山旗艦店" selected>台北中山旗艦店</option><option value="台北綠園店">台北綠園店</option><option value="台中清水旗艦店">台中清水旗艦店</option><option value="高雄中正形象店">高雄中正形象店</option><option value="高雄夢時代店">高雄夢時代店</option>',
    5
  ),
  Im = [Nm],
  Pm = { class: 'container marketing' },
  Lm = { class: 'row featurette' },
  Rm = At(
    '<div class="col-md-5 order-md-1 webimginfo"><div class="card"><img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/storepage-1.png?raw=true"><div class="card-body"><h3 class="border-bottom pb-2">台北中山旗艦店</h3><div class="mt-3"><div class="d-flex"><span class="material-symbols-outlined"> call </span><h4>電話：(02)000-1234</h4></div><div class="d-flex"><span class="material-symbols-outlined"> schedule </span><h4>營業時間：10:00-21:00</h4></div><div class="d-flex"><span class="material-symbols-outlined"> location_on </span><h4>地址：台北市中山區南京東路25巷2-1號</h4></div></div></div></div></div><div class="col-md-12 order-md-1 appimginfo"><div class="card d-flex flex-row"><img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/storepage-1.png?raw=true"><div class="card-body"><h3 class="border-bottom pb-2">台北中山旗艦店</h3><div class="mt-3"><div class="d-flex"><span class="material-symbols-outlined"> call </span><h4>電話：(02)000-1234</h4></div><div class="d-flex"><span class="material-symbols-outlined"> schedule </span><h4>營業時間：10:00-21:00</h4></div><div class="d-flex"><span class="material-symbols-outlined"> location_on </span><h4>地址：台北市中山區南京東路25巷2-1號</h4></div></div></div></div></div>',
    2
  ),
  Dm = { class: 'col-md-7 order-md-2 webimginfo' },
  Mm = { class: 'col-md-12 order-md-2 appimginfo' },
  km = {
    __name: 'storePage',
    setup(e) {
      const t = Gn('台北中山旗艦店')
      return (s, n) => {
        const i = vs('gmp-advanced-marker'),
          o = vs('gmp-map')
        return (
          X(),
          J('div', xm, [
            E('div', Cm, [
              Sm,
              E('div', Om, [
                $m,
                Bu(
                  E(
                    'select',
                    {
                      'onUpdate:modelValue': n[0] || (n[0] = (r) => (t.value = r)),
                      class: '',
                      name: ''
                    },
                    Im,
                    512
                  ),
                  [[md, t.value]]
                )
              ]),
              E('div', Pm, [
                E('div', Lm, [
                  Rm,
                  E('div', Dm, [
                    Y(
                      o,
                      {
                        center: '25.052026748657227,121.53743743896484',
                        zoom: '14',
                        'map-id': 'DEMO_MAP_ID'
                      },
                      {
                        default: jt(() => [
                          Y(i, {
                            position: '25.052026748657227,121.53743743896484',
                            title: 'My location'
                          })
                        ]),
                        _: 1
                      }
                    )
                  ]),
                  E('div', Mm, [
                    Y(
                      o,
                      {
                        center: '25.052026748657227,121.53743743896484',
                        zoom: '14',
                        'map-id': 'DEMO_MAP_ID'
                      },
                      {
                        default: jt(() => [
                          Y(i, {
                            position: '25.052026748657227,121.53743743896484',
                            title: 'My location'
                          })
                        ]),
                        _: 1
                      }
                    )
                  ])
                ])
              ])
            ])
          ])
        )
      }
    }
  },
  Vm = {},
  Hm = { class: 'somequestion' },
  jm = At(
    '<div class="container"><h1>常見問題</h1><h3>我想詢問配鏡問題</h3><div class="widthQuestion"><h4>Q1.請問可否自備鏡框單配鏡片？</h4><p> A1.我牌鏡框搭配薄型非球面鏡片 1480 元，搭配功能型鏡片則依鏡片種類加價購買。 當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片 980 元（隔日後則為 1480 元），搭配功能型鏡片則依鏡片種類加價購買。 他牌鏡框，搭配薄型非球面鏡片 1980 元，搭配功能型鏡片則依鏡片種類加價購買。 </p></div><div class="widthQuestion"><h4>Q2.眼鏡都可以20分鐘取件嗎？</h4><p> A1.我牌鏡框搭配薄型非球面鏡片 1480 元，搭配功能型鏡片則依鏡片種類加價購買。 當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片 980 元（隔日後則為 1480 元），搭配功能型鏡片則依鏡片種類加價購買。 他牌鏡框，搭配薄型非球面鏡片 1980 元，搭配功能型鏡片則依鏡片種類加價購買。 </p></div><div class="widthQuestion"><h4>Q3.散光鏡片需要額外加價嗎？</h4><p> A1.我牌鏡框搭配薄型非球面鏡片 1480 元，搭配功能型鏡片則依鏡片種類加價購買。 當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片 980 元（隔日後則為 1480 元），搭配功能型鏡片則依鏡片種類加價購買。 他牌鏡框，搭配薄型非球面鏡片 1980 元，搭配功能型鏡片則依鏡片種類加價購買。 </p></div><div class="widthQuestion"><h4>Q4.我可以使用舊眼鏡的度數配鏡片嗎？</h4><p> A1.我牌鏡框搭配薄型非球面鏡片 1480 元，搭配功能型鏡片則依鏡片種類加價購買。 當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片 980 元（隔日後則為 1480 元），搭配功能型鏡片則依鏡片種類加價購買。 他牌鏡框，搭配薄型非球面鏡片 1980 元，搭配功能型鏡片則依鏡片種類加價購買。 </p></div><div class="widthQuestion"><h4>Q5.請問可以單購買鏡框嗎？</h4><p> A1.我牌鏡框搭配薄型非球面鏡片 1480 元，搭配功能型鏡片則依鏡片種類加價購買。 當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片 980 元（隔日後則為 1480 元），搭配功能型鏡片則依鏡片種類加價購買。 他牌鏡框，搭配薄型非球面鏡片 1980 元，搭配功能型鏡片則依鏡片種類加價購買。 </p></div></div>',
    1
  ),
  Fm = [jm]
function Bm(e, t, s, n, i, o) {
  return X(), J('div', Hm, Fm)
}
const Km = Rt(Vm, [['render', Bm]]),
  Wm = {
    __name: 'questionView',
    setup(e) {
      return (t, s) => (X(), J('main', null, [Y(Km)]))
    }
  },
  Um = {},
  Ym = { class: 'blog' },
  zm = { class: 'container' },
  Gm = E('h1', null, '部落格', -1),
  qm = { class: 'container marketing' },
  Qm = { class: 'row featurette' },
  Xm = { class: 'col-md-6 order-md-2 d-flex flex-column justify-content-between' },
  Jm = E(
    'div',
    null,
    [
      E('h2', { class: 'featurette-heading' }, '情人特別企劃'),
      E('span', { class: 'd-flex justify-content-between align-items-center' }, [
        xt('2020 Valentine’s Special'),
        E('span', null, '2020/02/14')
      ]),
      E(
        'p',
        { class: 'lead' },
        ' 一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！ 即日起至2/16為止，不論是熱戀情侶、自由自在一個人或是老夫老妻，只要從未來過本店的新朋友，綁定官方LINE好友，都可享專屬優惠⋯⋯ '
      ),
      E(
        'span',
        { class: 'more-ellipsis' },
        '一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！即日起至2/16為止，不論是熱戀情侶、自由自在一個人或是老夫老妻⋯⋯more'
      )
    ],
    -1
  ),
  Zm = E(
    'img',
    {
      class: 'img-fluid col-md-6 order-md-1',
      src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blog-1.png?raw=true'
    },
    null,
    -1
  ),
  t_ = { class: 'row featurette mt-5' },
  e_ = { class: 'col-md-6 order-md-2 d-flex flex-column justify-content-between' },
  s_ = E(
    'div',
    null,
    [
      E('h2', { class: 'featurette-heading' }, '街頭潮人訪問'),
      E('span', { class: 'd-flex justify-content-between align-items-center' }, [
        xt('2020 Valentine’s Special'),
        E('span', null, '2020/02/02')
      ]),
      E(
        'p',
        { class: 'lead' },
        ' 炎熱的夏季裡，衣著選擇經常希望以簡潔的風格為主，但有時單純只穿搭 T 恤或短袖開襟襯衫，又覺得整體造型度有點不足嗎？那麼不妨可以透過「配件」，為穿搭點綴出與眾不同的視覺層次，而本季有哪些必備的配件系列呢？一起從以下推薦的 3 款單品，讓你瞬間帥氣爆棚散發型男品味⋯⋯ '
      ),
      E(
        'span',
        { class: 'more-ellipsis' },
        '炎熱的夏季裡，衣著選擇經常希望以簡潔的風格為主，但有時單純只穿搭 T 恤或短袖開襟襯衫，又覺得整體造型度有點不足嗎？那麼不妨可以透過「配件」，為穿搭點綴出與眾不同的視覺層次，而本季有哪些必備的配件系列呢？一起從以下推薦的 3 款單品，讓你瞬間帥氣⋯⋯more'
      )
    ],
    -1
  ),
  n_ = E(
    'img',
    {
      class: 'img-fluid col-md-6 order-md-1',
      src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blog-2.png?raw=true'
    },
    null,
    -1
  ),
  i_ = { class: 'row featurette mt-5' },
  o_ = { class: 'col-md-6 order-md-2 d-flex flex-column justify-content-between' },
  r_ = E(
    'div',
    null,
    [
      E('h2', { class: 'featurette-heading' }, '春季新品上市'),
      E('span', { class: 'd-flex justify-content-between align-items-center' }, [
        xt('New Selection'),
        E('span', null, '2020/02/02')
      ]),
      E(
        'p',
        { class: 'lead' },
        ' 2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯ '
      ),
      E(
        'span',
        { class: 'more-ellipsis' },
        '一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！即日起至2/16為止，不論是熱戀情侶、自由自在一個人或是老夫老妻⋯⋯more'
      )
    ],
    -1
  ),
  l_ = E(
    'img',
    {
      class: 'img-fluid col-md-6 order-md-1',
      src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blog-3.png?raw=true'
    },
    null,
    -1
  ),
  a_ = { class: 'row featurette mt-5' },
  c_ = { class: 'col-md-6 order-md-2 d-flex flex-column justify-content-between' },
  u_ = E(
    'div',
    null,
    [
      E('h2', { class: 'featurette-heading' }, '設計師獨享鏡框優惠'),
      E('span', { class: 'd-flex justify-content-between align-items-center' }, [
        xt('Sales for Designer'),
        E('span', null, '2020/01/18')
      ]),
      E(
        'p',
        { class: 'lead' },
        ' 2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯ '
      ),
      E(
        'span',
        { class: 'more-ellipsis' },
        '2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，⋯⋯more'
      )
    ],
    -1
  ),
  f_ = E(
    'img',
    {
      class: 'img-fluid col-md-6 order-md-1',
      src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blog-4.png?raw=true'
    },
    null,
    -1
  ),
  d_ = { class: 'row featurette mt-5' },
  h_ = { class: 'col-md-6 order-md-2 d-flex flex-column justify-content-between' },
  p_ = E(
    'div',
    null,
    [
      E('h2', { class: 'featurette-heading' }, '抵抗夏日大作戰'),
      E('span', { class: 'd-flex justify-content-between align-items-center' }, [
        xt('Summer Special'),
        E('span', null, '2019/08/07')
      ]),
      E(
        'p',
        { class: 'lead' },
        ' 2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯ '
      ),
      E(
        'span',
        { class: 'more-ellipsis' },
        '2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，⋯⋯more'
      )
    ],
    -1
  ),
  m_ = E(
    'img',
    {
      class: 'img-fluid col-md-6 order-md-1',
      src: 'https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blog-5.png?raw=true'
    },
    null,
    -1
  ),
  __ = At(
    '<nav aria-label="Page navigation example" class="d-flex justify-content-center"><ul class="pagination"><li class="page-item"><a class="page-link" href="#">上一頁</a></li><li class="page-item"><a class="page-link active" href="#">1</a></li><li class="page-item"><a class="page-link" href="#">2</a></li><li class="page-item"><a class="page-link" href="#">3</a></li><li class="page-item"><a class="page-link" href="#">4</a></li><li class="page-item"><a class="page-link" href="#">5</a></li><li class="page-item"><a class="page-link" href="#">下一頁</a></li></ul></nav>',
    1
  )
function g_(e, t, s, n, i, o) {
  const r = vs('router-link')
  return (
    X(),
    J('div', Ym, [
      E('div', zm, [
        Gm,
        E('div', qm, [
          E('div', Qm, [
            E('div', Xm, [
              Jm,
              Y(
                r,
                { to: '/blogInfoView', class: 'text-end more' },
                { default: jt(() => [xt('MORE')]), _: 1 }
              )
            ]),
            Zm
          ]),
          E('div', t_, [
            E('div', e_, [
              s_,
              Y(
                r,
                { to: '/blogInfoView', class: 'text-end more' },
                { default: jt(() => [xt('MORE')]), _: 1 }
              )
            ]),
            n_
          ]),
          E('div', i_, [
            E('div', o_, [
              r_,
              Y(
                r,
                { to: '/blogInfoView', class: 'text-end more' },
                { default: jt(() => [xt('MORE')]), _: 1 }
              )
            ]),
            l_
          ]),
          E('div', a_, [
            E('div', c_, [
              u_,
              Y(
                r,
                { to: '/blogInfoView', class: 'text-end more' },
                { default: jt(() => [xt('MORE')]), _: 1 }
              )
            ]),
            f_
          ]),
          E('div', d_, [
            E('div', h_, [
              p_,
              Y(
                r,
                { to: '/blogInfoView', class: 'text-end more' },
                { default: jt(() => [xt('MORE')]), _: 1 }
              )
            ]),
            m_
          ])
        ]),
        __
      ])
    ])
  )
}
const v_ = Rt(Um, [['render', g_]]),
  b_ = {
    __name: 'BlogView',
    setup(e) {
      return (t, s) => (X(), J('main', null, [Y(v_)]))
    }
  },
  E_ = {},
  y_ = { class: 'blogInfo' },
  w_ = At(
    '<div class="container"><div><div class="borderBottom"><h5>首頁 / 部落格 / 特別企劃 / <span class="love">情人特別企劃</span></h5><div class="d-flex"><h4 class="pe-2">#special</h4><h4>#event</h4></div><div class="d-flex justify-content-between"><div class="col-md-8"><h1>情人特別企劃</h1><h3>2020 Valentine’s Special</h3><img class="img-fluid" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blog-1.png?raw=true"><p> 一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。 本次拍攝的鏡框款式與 NEEDS CLASSIC 聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！ </p><img class="img-fluid" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blogpage-2.png?raw=true"><p> 一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。 本次拍攝的鏡框款式與 NEEDS CLASSIC 聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！ </p><img class="img-fluid" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blogpage-3.png?raw=true"><p> 一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。 本次拍攝的鏡框款式與 NEEDS CLASSIC 聯名設計款，偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！ </p><img class="img-fluid" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/blogpage-4.png?raw=true"><div class="d-flex flex-column"><span class="font">2/14(五)-2/20(日)</span><span class="font">至本店單筆消費滿2980元, 就送情人節限定眼鏡盒1個 </span><span class="font"> 期間優惠還有~~持他牌鏡框更換鏡片 </span><span class="font"> 薄型非球面鏡片折300元 !</span><span class="font">濾藍光鏡片折500元 </span><span class="font">快快帶上另一半</span><span class="font">讓彼此每一次睜開眼，都被愛的視線包圍</span></div><div class="d-flex align-items-center mt40"><a href="/">Share</a><img class="img-fluid me-3 imgIcon" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/logo-facebook.png?raw=true"><img class="img-fluid imgIcon" src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/logo-instagram.png?raw=true"></div></div><div class="col-md-4 ps-3 byeTag"><div class="d-flex align-items-center bottomTag mb13"><span class="material-symbols-outlined tagInco"> label </span><h2>TAGS</h2></div><div class="d-flex"><h4 class="pe-3 tagh4">#special</h4><h4 class="tagh4">#sale</h4></div><div class="d-flex"><h4 class="pe-3 tagh4">#new_item</h4><h4 class="tagh4">#interview</h4></div><div class="d-flex"><h4 class="pe-3 tagh4">#trivia</h4><h4 class="tagh4">#news</h4></div><h4 class="tagh4">#event</h4></div></div></div></div><div class="d-flex justify-content-between next"><div class="d-flex align-items-center"><span class="material-symbols-outlined"> arrow_back </span><h6>上一篇：街頭潮人訪問 1</h6></div><div class="d-flex align-items-center"><h6>下一篇：街頭潮人訪問 2</h6><span class="material-symbols-outlined"> arrow_forward </span></div></div></div>',
    1
  ),
  A_ = [w_]
function T_(e, t, s, n, i, o) {
  return X(), J('div', y_, A_)
}
const x_ = Rt(E_, [['render', T_]]),
  C_ = {
    __name: 'BlogInfoView',
    setup(e) {
      return (t, s) => (X(), J('main', null, [Y(x_)]))
    }
  },
  S_ = Gh({
    history: wh('/homework3and4/'),
    routes: [
      { path: '/', name: 'home', component: Pp },
      { path: '/seriesframes', name: 'series', component: um },
      { path: '/store', name: 'storeView', component: Tm },
      { path: '/storepage', name: 'storepage', component: km },
      { path: '/question', name: 'question', component: Wm },
      { path: '/blog', name: 'blog', component: b_ },
      { path: '/blogInfoView', name: 'blogInfoView', component: C_ }
    ]
  })
var Ct = 'top',
  Wt = 'bottom',
  Ut = 'right',
  St = 'left',
  si = 'auto',
  $s = [Ct, Wt, Ut, St],
  Xe = 'start',
  ws = 'end',
  Ja = 'clippingParents',
  So = 'viewport',
  ls = 'popper',
  Za = 'reference',
  Ji = $s.reduce(function (e, t) {
    return e.concat([t + '-' + Xe, t + '-' + ws])
  }, []),
  Oo = [].concat($s, [si]).reduce(function (e, t) {
    return e.concat([t, t + '-' + Xe, t + '-' + ws])
  }, []),
  tc = 'beforeRead',
  ec = 'read',
  sc = 'afterRead',
  nc = 'beforeMain',
  ic = 'main',
  oc = 'afterMain',
  rc = 'beforeWrite',
  lc = 'write',
  ac = 'afterWrite',
  cc = [tc, ec, sc, nc, ic, oc, rc, lc, ac]
function he(e) {
  return e ? (e.nodeName || '').toLowerCase() : null
}
function Yt(e) {
  if (e == null) return window
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument
    return (t && t.defaultView) || window
  }
  return e
}
function Je(e) {
  var t = Yt(e).Element
  return e instanceof t || e instanceof Element
}
function qt(e) {
  var t = Yt(e).HTMLElement
  return e instanceof t || e instanceof HTMLElement
}
function $o(e) {
  if (typeof ShadowRoot > 'u') return !1
  var t = Yt(e).ShadowRoot
  return e instanceof t || e instanceof ShadowRoot
}
function O_(e) {
  var t = e.state
  Object.keys(t.elements).forEach(function (s) {
    var n = t.styles[s] || {},
      i = t.attributes[s] || {},
      o = t.elements[s]
    !qt(o) ||
      !he(o) ||
      (Object.assign(o.style, n),
      Object.keys(i).forEach(function (r) {
        var l = i[r]
        l === !1 ? o.removeAttribute(r) : o.setAttribute(r, l === !0 ? '' : l)
      }))
  })
}
function $_(e) {
  var t = e.state,
    s = {
      popper: { position: t.options.strategy, left: '0', top: '0', margin: '0' },
      arrow: { position: 'absolute' },
      reference: {}
    }
  return (
    Object.assign(t.elements.popper.style, s.popper),
    (t.styles = s),
    t.elements.arrow && Object.assign(t.elements.arrow.style, s.arrow),
    function () {
      Object.keys(t.elements).forEach(function (n) {
        var i = t.elements[n],
          o = t.attributes[n] || {},
          r = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : s[n]),
          l = r.reduce(function (a, u) {
            return (a[u] = ''), a
          }, {})
        !qt(i) ||
          !he(i) ||
          (Object.assign(i.style, l),
          Object.keys(o).forEach(function (a) {
            i.removeAttribute(a)
          }))
      })
    }
  )
}
const No = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: O_,
  effect: $_,
  requires: ['computeStyles']
}
function ue(e) {
  return e.split('-')[0]
}
var Ge = Math.max,
  Vn = Math.min,
  As = Math.round
function Zi() {
  var e = navigator.userAgentData
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + '/' + t.version
        })
        .join(' ')
    : navigator.userAgent
}
function uc() {
  return !/^((?!chrome|android).)*safari/i.test(Zi())
}
function Ts(e, t, s) {
  t === void 0 && (t = !1), s === void 0 && (s = !1)
  var n = e.getBoundingClientRect(),
    i = 1,
    o = 1
  t &&
    qt(e) &&
    ((i = (e.offsetWidth > 0 && As(n.width) / e.offsetWidth) || 1),
    (o = (e.offsetHeight > 0 && As(n.height) / e.offsetHeight) || 1))
  var r = Je(e) ? Yt(e) : window,
    l = r.visualViewport,
    a = !uc() && s,
    u = (n.left + (a && l ? l.offsetLeft : 0)) / i,
    c = (n.top + (a && l ? l.offsetTop : 0)) / o,
    h = n.width / i,
    p = n.height / o
  return { width: h, height: p, top: c, right: u + h, bottom: c + p, left: u, x: u, y: c }
}
function Io(e) {
  var t = Ts(e),
    s = e.offsetWidth,
    n = e.offsetHeight
  return (
    Math.abs(t.width - s) <= 1 && (s = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: s, height: n }
  )
}
function fc(e, t) {
  var s = t.getRootNode && t.getRootNode()
  if (e.contains(t)) return !0
  if (s && $o(s)) {
    var n = t
    do {
      if (n && e.isSameNode(n)) return !0
      n = n.parentNode || n.host
    } while (n)
  }
  return !1
}
function Ee(e) {
  return Yt(e).getComputedStyle(e)
}
function N_(e) {
  return ['table', 'td', 'th'].indexOf(he(e)) >= 0
}
function Ve(e) {
  return ((Je(e) ? e.ownerDocument : e.document) || window.document).documentElement
}
function ni(e) {
  return he(e) === 'html' ? e : e.assignedSlot || e.parentNode || ($o(e) ? e.host : null) || Ve(e)
}
function qr(e) {
  return !qt(e) || Ee(e).position === 'fixed' ? null : e.offsetParent
}
function I_(e) {
  var t = /firefox/i.test(Zi()),
    s = /Trident/i.test(Zi())
  if (s && qt(e)) {
    var n = Ee(e)
    if (n.position === 'fixed') return null
  }
  var i = ni(e)
  for ($o(i) && (i = i.host); qt(i) && ['html', 'body'].indexOf(he(i)) < 0; ) {
    var o = Ee(i)
    if (
      o.transform !== 'none' ||
      o.perspective !== 'none' ||
      o.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(o.willChange) !== -1 ||
      (t && o.willChange === 'filter') ||
      (t && o.filter && o.filter !== 'none')
    )
      return i
    i = i.parentNode
  }
  return null
}
function on(e) {
  for (var t = Yt(e), s = qr(e); s && N_(s) && Ee(s).position === 'static'; ) s = qr(s)
  return s && (he(s) === 'html' || (he(s) === 'body' && Ee(s).position === 'static'))
    ? t
    : s || I_(e) || t
}
function Po(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y'
}
function Ys(e, t, s) {
  return Ge(e, Vn(t, s))
}
function P_(e, t, s) {
  var n = Ys(e, t, s)
  return n > s ? s : n
}
function dc() {
  return { top: 0, right: 0, bottom: 0, left: 0 }
}
function hc(e) {
  return Object.assign({}, dc(), e)
}
function pc(e, t) {
  return t.reduce(function (s, n) {
    return (s[n] = e), s
  }, {})
}
var L_ = function (t, s) {
  return (
    (t = typeof t == 'function' ? t(Object.assign({}, s.rects, { placement: s.placement })) : t),
    hc(typeof t != 'number' ? t : pc(t, $s))
  )
}
function R_(e) {
  var t,
    s = e.state,
    n = e.name,
    i = e.options,
    o = s.elements.arrow,
    r = s.modifiersData.popperOffsets,
    l = ue(s.placement),
    a = Po(l),
    u = [St, Ut].indexOf(l) >= 0,
    c = u ? 'height' : 'width'
  if (!(!o || !r)) {
    var h = L_(i.padding, s),
      p = Io(o),
      m = a === 'y' ? Ct : St,
      S = a === 'y' ? Wt : Ut,
      A = s.rects.reference[c] + s.rects.reference[a] - r[a] - s.rects.popper[c],
      P = r[a] - s.rects.reference[a],
      M = on(o),
      L = M ? (a === 'y' ? M.clientHeight || 0 : M.clientWidth || 0) : 0,
      O = A / 2 - P / 2,
      k = h[m],
      B = L - p[c] - h[S],
      R = L / 2 - p[c] / 2 + O,
      U = Ys(k, R, B),
      st = a
    s.modifiersData[n] = ((t = {}), (t[st] = U), (t.centerOffset = U - R), t)
  }
}
function D_(e) {
  var t = e.state,
    s = e.options,
    n = s.element,
    i = n === void 0 ? '[data-popper-arrow]' : n
  i != null &&
    ((typeof i == 'string' && ((i = t.elements.popper.querySelector(i)), !i)) ||
      (fc(t.elements.popper, i) && (t.elements.arrow = i)))
}
const mc = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: R_,
  effect: D_,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
}
function xs(e) {
  return e.split('-')[1]
}
var M_ = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
function k_(e, t) {
  var s = e.x,
    n = e.y,
    i = t.devicePixelRatio || 1
  return { x: As(s * i) / i || 0, y: As(n * i) / i || 0 }
}
function Qr(e) {
  var t,
    s = e.popper,
    n = e.popperRect,
    i = e.placement,
    o = e.variation,
    r = e.offsets,
    l = e.position,
    a = e.gpuAcceleration,
    u = e.adaptive,
    c = e.roundOffsets,
    h = e.isFixed,
    p = r.x,
    m = p === void 0 ? 0 : p,
    S = r.y,
    A = S === void 0 ? 0 : S,
    P = typeof c == 'function' ? c({ x: m, y: A }) : { x: m, y: A }
  ;(m = P.x), (A = P.y)
  var M = r.hasOwnProperty('x'),
    L = r.hasOwnProperty('y'),
    O = St,
    k = Ct,
    B = window
  if (u) {
    var R = on(s),
      U = 'clientHeight',
      st = 'clientWidth'
    if (
      (R === Yt(s) &&
        ((R = Ve(s)),
        Ee(R).position !== 'static' &&
          l === 'absolute' &&
          ((U = 'scrollHeight'), (st = 'scrollWidth'))),
      (R = R),
      i === Ct || ((i === St || i === Ut) && o === ws))
    ) {
      k = Wt
      var at = h && R === B && B.visualViewport ? B.visualViewport.height : R[U]
      ;(A -= at - n.height), (A *= a ? 1 : -1)
    }
    if (i === St || ((i === Ct || i === Wt) && o === ws)) {
      O = Ut
      var nt = h && R === B && B.visualViewport ? B.visualViewport.width : R[st]
      ;(m -= nt - n.width), (m *= a ? 1 : -1)
    }
  }
  var ft = Object.assign({ position: l }, u && M_),
    mt = c === !0 ? k_({ x: m, y: A }, Yt(s)) : { x: m, y: A }
  if (((m = mt.x), (A = mt.y), a)) {
    var ct
    return Object.assign(
      {},
      ft,
      ((ct = {}),
      (ct[k] = L ? '0' : ''),
      (ct[O] = M ? '0' : ''),
      (ct.transform =
        (B.devicePixelRatio || 1) <= 1
          ? 'translate(' + m + 'px, ' + A + 'px)'
          : 'translate3d(' + m + 'px, ' + A + 'px, 0)'),
      ct)
    )
  }
  return Object.assign(
    {},
    ft,
    ((t = {}), (t[k] = L ? A + 'px' : ''), (t[O] = M ? m + 'px' : ''), (t.transform = ''), t)
  )
}
function V_(e) {
  var t = e.state,
    s = e.options,
    n = s.gpuAcceleration,
    i = n === void 0 ? !0 : n,
    o = s.adaptive,
    r = o === void 0 ? !0 : o,
    l = s.roundOffsets,
    a = l === void 0 ? !0 : l,
    u = {
      placement: ue(t.placement),
      variation: xs(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: i,
      isFixed: t.options.strategy === 'fixed'
    }
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Qr(
        Object.assign({}, u, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: r,
          roundOffsets: a
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Qr(
          Object.assign({}, u, {
            offsets: t.modifiersData.arrow,
            position: 'absolute',
            adaptive: !1,
            roundOffsets: a
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-placement': t.placement
    }))
}
const Lo = { name: 'computeStyles', enabled: !0, phase: 'beforeWrite', fn: V_, data: {} }
var _n = { passive: !0 }
function H_(e) {
  var t = e.state,
    s = e.instance,
    n = e.options,
    i = n.scroll,
    o = i === void 0 ? !0 : i,
    r = n.resize,
    l = r === void 0 ? !0 : r,
    a = Yt(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper)
  return (
    o &&
      u.forEach(function (c) {
        c.addEventListener('scroll', s.update, _n)
      }),
    l && a.addEventListener('resize', s.update, _n),
    function () {
      o &&
        u.forEach(function (c) {
          c.removeEventListener('scroll', s.update, _n)
        }),
        l && a.removeEventListener('resize', s.update, _n)
    }
  )
}
const Ro = {
  name: 'eventListeners',
  enabled: !0,
  phase: 'write',
  fn: function () {},
  effect: H_,
  data: {}
}
var j_ = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
function In(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return j_[t]
  })
}
var F_ = { start: 'end', end: 'start' }
function Xr(e) {
  return e.replace(/start|end/g, function (t) {
    return F_[t]
  })
}
function Do(e) {
  var t = Yt(e),
    s = t.pageXOffset,
    n = t.pageYOffset
  return { scrollLeft: s, scrollTop: n }
}
function Mo(e) {
  return Ts(Ve(e)).left + Do(e).scrollLeft
}
function B_(e, t) {
  var s = Yt(e),
    n = Ve(e),
    i = s.visualViewport,
    o = n.clientWidth,
    r = n.clientHeight,
    l = 0,
    a = 0
  if (i) {
    ;(o = i.width), (r = i.height)
    var u = uc()
    ;(u || (!u && t === 'fixed')) && ((l = i.offsetLeft), (a = i.offsetTop))
  }
  return { width: o, height: r, x: l + Mo(e), y: a }
}
function K_(e) {
  var t,
    s = Ve(e),
    n = Do(e),
    i = (t = e.ownerDocument) == null ? void 0 : t.body,
    o = Ge(s.scrollWidth, s.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
    r = Ge(s.scrollHeight, s.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
    l = -n.scrollLeft + Mo(e),
    a = -n.scrollTop
  return (
    Ee(i || s).direction === 'rtl' && (l += Ge(s.clientWidth, i ? i.clientWidth : 0) - o),
    { width: o, height: r, x: l, y: a }
  )
}
function ko(e) {
  var t = Ee(e),
    s = t.overflow,
    n = t.overflowX,
    i = t.overflowY
  return /auto|scroll|overlay|hidden/.test(s + i + n)
}
function _c(e) {
  return ['html', 'body', '#document'].indexOf(he(e)) >= 0
    ? e.ownerDocument.body
    : qt(e) && ko(e)
      ? e
      : _c(ni(e))
}
function zs(e, t) {
  var s
  t === void 0 && (t = [])
  var n = _c(e),
    i = n === ((s = e.ownerDocument) == null ? void 0 : s.body),
    o = Yt(n),
    r = i ? [o].concat(o.visualViewport || [], ko(n) ? n : []) : n,
    l = t.concat(r)
  return i ? l : l.concat(zs(ni(r)))
}
function to(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height })
}
function W_(e, t) {
  var s = Ts(e, !1, t === 'fixed')
  return (
    (s.top = s.top + e.clientTop),
    (s.left = s.left + e.clientLeft),
    (s.bottom = s.top + e.clientHeight),
    (s.right = s.left + e.clientWidth),
    (s.width = e.clientWidth),
    (s.height = e.clientHeight),
    (s.x = s.left),
    (s.y = s.top),
    s
  )
}
function Jr(e, t, s) {
  return t === So ? to(B_(e, s)) : Je(t) ? W_(t, s) : to(K_(Ve(e)))
}
function U_(e) {
  var t = zs(ni(e)),
    s = ['absolute', 'fixed'].indexOf(Ee(e).position) >= 0,
    n = s && qt(e) ? on(e) : e
  return Je(n)
    ? t.filter(function (i) {
        return Je(i) && fc(i, n) && he(i) !== 'body'
      })
    : []
}
function Y_(e, t, s, n) {
  var i = t === 'clippingParents' ? U_(e) : [].concat(t),
    o = [].concat(i, [s]),
    r = o[0],
    l = o.reduce(
      function (a, u) {
        var c = Jr(e, u, n)
        return (
          (a.top = Ge(c.top, a.top)),
          (a.right = Vn(c.right, a.right)),
          (a.bottom = Vn(c.bottom, a.bottom)),
          (a.left = Ge(c.left, a.left)),
          a
        )
      },
      Jr(e, r, n)
    )
  return (
    (l.width = l.right - l.left), (l.height = l.bottom - l.top), (l.x = l.left), (l.y = l.top), l
  )
}
function gc(e) {
  var t = e.reference,
    s = e.element,
    n = e.placement,
    i = n ? ue(n) : null,
    o = n ? xs(n) : null,
    r = t.x + t.width / 2 - s.width / 2,
    l = t.y + t.height / 2 - s.height / 2,
    a
  switch (i) {
    case Ct:
      a = { x: r, y: t.y - s.height }
      break
    case Wt:
      a = { x: r, y: t.y + t.height }
      break
    case Ut:
      a = { x: t.x + t.width, y: l }
      break
    case St:
      a = { x: t.x - s.width, y: l }
      break
    default:
      a = { x: t.x, y: t.y }
  }
  var u = i ? Po(i) : null
  if (u != null) {
    var c = u === 'y' ? 'height' : 'width'
    switch (o) {
      case Xe:
        a[u] = a[u] - (t[c] / 2 - s[c] / 2)
        break
      case ws:
        a[u] = a[u] + (t[c] / 2 - s[c] / 2)
        break
    }
  }
  return a
}
function Cs(e, t) {
  t === void 0 && (t = {})
  var s = t,
    n = s.placement,
    i = n === void 0 ? e.placement : n,
    o = s.strategy,
    r = o === void 0 ? e.strategy : o,
    l = s.boundary,
    a = l === void 0 ? Ja : l,
    u = s.rootBoundary,
    c = u === void 0 ? So : u,
    h = s.elementContext,
    p = h === void 0 ? ls : h,
    m = s.altBoundary,
    S = m === void 0 ? !1 : m,
    A = s.padding,
    P = A === void 0 ? 0 : A,
    M = hc(typeof P != 'number' ? P : pc(P, $s)),
    L = p === ls ? Za : ls,
    O = e.rects.popper,
    k = e.elements[S ? L : p],
    B = Y_(Je(k) ? k : k.contextElement || Ve(e.elements.popper), a, c, r),
    R = Ts(e.elements.reference),
    U = gc({ reference: R, element: O, strategy: 'absolute', placement: i }),
    st = to(Object.assign({}, O, U)),
    at = p === ls ? st : R,
    nt = {
      top: B.top - at.top + M.top,
      bottom: at.bottom - B.bottom + M.bottom,
      left: B.left - at.left + M.left,
      right: at.right - B.right + M.right
    },
    ft = e.modifiersData.offset
  if (p === ls && ft) {
    var mt = ft[i]
    Object.keys(nt).forEach(function (ct) {
      var Dt = [Ut, Wt].indexOf(ct) >= 0 ? 1 : -1,
        Ot = [Ct, Wt].indexOf(ct) >= 0 ? 'y' : 'x'
      nt[ct] += mt[Ot] * Dt
    })
  }
  return nt
}
function z_(e, t) {
  t === void 0 && (t = {})
  var s = t,
    n = s.placement,
    i = s.boundary,
    o = s.rootBoundary,
    r = s.padding,
    l = s.flipVariations,
    a = s.allowedAutoPlacements,
    u = a === void 0 ? Oo : a,
    c = xs(n),
    h = c
      ? l
        ? Ji
        : Ji.filter(function (S) {
            return xs(S) === c
          })
      : $s,
    p = h.filter(function (S) {
      return u.indexOf(S) >= 0
    })
  p.length === 0 && (p = h)
  var m = p.reduce(function (S, A) {
    return (S[A] = Cs(e, { placement: A, boundary: i, rootBoundary: o, padding: r })[ue(A)]), S
  }, {})
  return Object.keys(m).sort(function (S, A) {
    return m[S] - m[A]
  })
}
function G_(e) {
  if (ue(e) === si) return []
  var t = In(e)
  return [Xr(e), t, Xr(t)]
}
function q_(e) {
  var t = e.state,
    s = e.options,
    n = e.name
  if (!t.modifiersData[n]._skip) {
    for (
      var i = s.mainAxis,
        o = i === void 0 ? !0 : i,
        r = s.altAxis,
        l = r === void 0 ? !0 : r,
        a = s.fallbackPlacements,
        u = s.padding,
        c = s.boundary,
        h = s.rootBoundary,
        p = s.altBoundary,
        m = s.flipVariations,
        S = m === void 0 ? !0 : m,
        A = s.allowedAutoPlacements,
        P = t.options.placement,
        M = ue(P),
        L = M === P,
        O = a || (L || !S ? [In(P)] : G_(P)),
        k = [P].concat(O).reduce(function (kt, Vt) {
          return kt.concat(
            ue(Vt) === si
              ? z_(t, {
                  placement: Vt,
                  boundary: c,
                  rootBoundary: h,
                  padding: u,
                  flipVariations: S,
                  allowedAutoPlacements: A
                })
              : Vt
          )
        }, []),
        B = t.rects.reference,
        R = t.rects.popper,
        U = new Map(),
        st = !0,
        at = k[0],
        nt = 0;
      nt < k.length;
      nt++
    ) {
      var ft = k[nt],
        mt = ue(ft),
        ct = xs(ft) === Xe,
        Dt = [Ct, Wt].indexOf(mt) >= 0,
        Ot = Dt ? 'width' : 'height',
        et = Cs(t, { placement: ft, boundary: c, rootBoundary: h, altBoundary: p, padding: u }),
        G = Dt ? (ct ? Ut : St) : ct ? Wt : Ct
      B[Ot] > R[Ot] && (G = In(G))
      var Q = In(G),
        bt = []
      if (
        (o && bt.push(et[mt] <= 0),
        l && bt.push(et[G] <= 0, et[Q] <= 0),
        bt.every(function (kt) {
          return kt
        }))
      ) {
        ;(at = ft), (st = !1)
        break
      }
      U.set(ft, bt)
    }
    if (st)
      for (
        var Mt = S ? 3 : 1,
          $t = function (Vt) {
            var gt = k.find(function (v) {
              var I = U.get(v)
              if (I)
                return I.slice(0, Vt).every(function ($) {
                  return $
                })
            })
            if (gt) return (at = gt), 'break'
          },
          pt = Mt;
        pt > 0;
        pt--
      ) {
        var Zt = $t(pt)
        if (Zt === 'break') break
      }
    t.placement !== at && ((t.modifiersData[n]._skip = !0), (t.placement = at), (t.reset = !0))
  }
}
const vc = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: q_,
  requiresIfExists: ['offset'],
  data: { _skip: !1 }
}
function Zr(e, t, s) {
  return (
    s === void 0 && (s = { x: 0, y: 0 }),
    {
      top: e.top - t.height - s.y,
      right: e.right - t.width + s.x,
      bottom: e.bottom - t.height + s.y,
      left: e.left - t.width - s.x
    }
  )
}
function tl(e) {
  return [Ct, Ut, Wt, St].some(function (t) {
    return e[t] >= 0
  })
}
function Q_(e) {
  var t = e.state,
    s = e.name,
    n = t.rects.reference,
    i = t.rects.popper,
    o = t.modifiersData.preventOverflow,
    r = Cs(t, { elementContext: 'reference' }),
    l = Cs(t, { altBoundary: !0 }),
    a = Zr(r, n),
    u = Zr(l, i, o),
    c = tl(a),
    h = tl(u)
  ;(t.modifiersData[s] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: h
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-reference-hidden': c,
      'data-popper-escaped': h
    }))
}
const bc = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: Q_
}
function X_(e, t, s) {
  var n = ue(e),
    i = [St, Ct].indexOf(n) >= 0 ? -1 : 1,
    o = typeof s == 'function' ? s(Object.assign({}, t, { placement: e })) : s,
    r = o[0],
    l = o[1]
  return (
    (r = r || 0), (l = (l || 0) * i), [St, Ut].indexOf(n) >= 0 ? { x: l, y: r } : { x: r, y: l }
  )
}
function J_(e) {
  var t = e.state,
    s = e.options,
    n = e.name,
    i = s.offset,
    o = i === void 0 ? [0, 0] : i,
    r = Oo.reduce(function (c, h) {
      return (c[h] = X_(h, t.rects, o)), c
    }, {}),
    l = r[t.placement],
    a = l.x,
    u = l.y
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += a), (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[n] = r)
}
const Ec = { name: 'offset', enabled: !0, phase: 'main', requires: ['popperOffsets'], fn: J_ }
function Z_(e) {
  var t = e.state,
    s = e.name
  t.modifiersData[s] = gc({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: 'absolute',
    placement: t.placement
  })
}
const Vo = { name: 'popperOffsets', enabled: !0, phase: 'read', fn: Z_, data: {} }
function tg(e) {
  return e === 'x' ? 'y' : 'x'
}
function eg(e) {
  var t = e.state,
    s = e.options,
    n = e.name,
    i = s.mainAxis,
    o = i === void 0 ? !0 : i,
    r = s.altAxis,
    l = r === void 0 ? !1 : r,
    a = s.boundary,
    u = s.rootBoundary,
    c = s.altBoundary,
    h = s.padding,
    p = s.tether,
    m = p === void 0 ? !0 : p,
    S = s.tetherOffset,
    A = S === void 0 ? 0 : S,
    P = Cs(t, { boundary: a, rootBoundary: u, padding: h, altBoundary: c }),
    M = ue(t.placement),
    L = xs(t.placement),
    O = !L,
    k = Po(M),
    B = tg(k),
    R = t.modifiersData.popperOffsets,
    U = t.rects.reference,
    st = t.rects.popper,
    at = typeof A == 'function' ? A(Object.assign({}, t.rects, { placement: t.placement })) : A,
    nt =
      typeof at == 'number'
        ? { mainAxis: at, altAxis: at }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, at),
    ft = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    mt = { x: 0, y: 0 }
  if (R) {
    if (o) {
      var ct,
        Dt = k === 'y' ? Ct : St,
        Ot = k === 'y' ? Wt : Ut,
        et = k === 'y' ? 'height' : 'width',
        G = R[k],
        Q = G + P[Dt],
        bt = G - P[Ot],
        Mt = m ? -st[et] / 2 : 0,
        $t = L === Xe ? U[et] : st[et],
        pt = L === Xe ? -st[et] : -U[et],
        Zt = t.elements.arrow,
        kt = m && Zt ? Io(Zt) : { width: 0, height: 0 },
        Vt = t.modifiersData['arrow#persistent']
          ? t.modifiersData['arrow#persistent'].padding
          : dc(),
        gt = Vt[Dt],
        v = Vt[Ot],
        I = Ys(0, U[et], kt[et]),
        $ = O ? U[et] / 2 - Mt - I - gt - nt.mainAxis : $t - I - gt - nt.mainAxis,
        V = O ? -U[et] / 2 + Mt + I + v + nt.mainAxis : pt + I + v + nt.mainAxis,
        Z = t.elements.arrow && on(t.elements.arrow),
        dt = Z ? (k === 'y' ? Z.clientTop || 0 : Z.clientLeft || 0) : 0,
        f = (ct = ft == null ? void 0 : ft[k]) != null ? ct : 0,
        d = G + $ - f - dt,
        _ = G + V - f,
        b = Ys(m ? Vn(Q, d) : Q, G, m ? Ge(bt, _) : bt)
      ;(R[k] = b), (mt[k] = b - G)
    }
    if (l) {
      var g,
        T = k === 'x' ? Ct : St,
        N = k === 'x' ? Wt : Ut,
        x = R[B],
        C = B === 'y' ? 'height' : 'width',
        w = x + P[T],
        D = x - P[N],
        j = [Ct, St].indexOf(M) !== -1,
        H = (g = ft == null ? void 0 : ft[B]) != null ? g : 0,
        W = j ? w : x - U[C] - st[C] - H + nt.altAxis,
        q = j ? x + U[C] + st[C] - H - nt.altAxis : D,
        lt = m && j ? P_(W, x, q) : Ys(m ? W : w, x, m ? q : D)
      ;(R[B] = lt), (mt[B] = lt - x)
    }
    t.modifiersData[n] = mt
  }
}
const yc = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: eg,
  requiresIfExists: ['offset']
}
function sg(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
}
function ng(e) {
  return e === Yt(e) || !qt(e) ? Do(e) : sg(e)
}
function ig(e) {
  var t = e.getBoundingClientRect(),
    s = As(t.width) / e.offsetWidth || 1,
    n = As(t.height) / e.offsetHeight || 1
  return s !== 1 || n !== 1
}
function og(e, t, s) {
  s === void 0 && (s = !1)
  var n = qt(t),
    i = qt(t) && ig(t),
    o = Ve(t),
    r = Ts(e, i, s),
    l = { scrollLeft: 0, scrollTop: 0 },
    a = { x: 0, y: 0 }
  return (
    (n || (!n && !s)) &&
      ((he(t) !== 'body' || ko(o)) && (l = ng(t)),
      qt(t) ? ((a = Ts(t, !0)), (a.x += t.clientLeft), (a.y += t.clientTop)) : o && (a.x = Mo(o))),
    {
      x: r.left + l.scrollLeft - a.x,
      y: r.top + l.scrollTop - a.y,
      width: r.width,
      height: r.height
    }
  )
}
function rg(e) {
  var t = new Map(),
    s = new Set(),
    n = []
  e.forEach(function (o) {
    t.set(o.name, o)
  })
  function i(o) {
    s.add(o.name)
    var r = [].concat(o.requires || [], o.requiresIfExists || [])
    r.forEach(function (l) {
      if (!s.has(l)) {
        var a = t.get(l)
        a && i(a)
      }
    }),
      n.push(o)
  }
  return (
    e.forEach(function (o) {
      s.has(o.name) || i(o)
    }),
    n
  )
}
function lg(e) {
  var t = rg(e)
  return cc.reduce(function (s, n) {
    return s.concat(
      t.filter(function (i) {
        return i.phase === n
      })
    )
  }, [])
}
function ag(e) {
  var t
  return function () {
    return (
      t ||
        (t = new Promise(function (s) {
          Promise.resolve().then(function () {
            ;(t = void 0), s(e())
          })
        })),
      t
    )
  }
}
function cg(e) {
  var t = e.reduce(function (s, n) {
    var i = s[n.name]
    return (
      (s[n.name] = i
        ? Object.assign({}, i, n, {
            options: Object.assign({}, i.options, n.options),
            data: Object.assign({}, i.data, n.data)
          })
        : n),
      s
    )
  }, {})
  return Object.keys(t).map(function (s) {
    return t[s]
  })
}
var el = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
function sl() {
  for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s]
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == 'function')
  })
}
function ii(e) {
  e === void 0 && (e = {})
  var t = e,
    s = t.defaultModifiers,
    n = s === void 0 ? [] : s,
    i = t.defaultOptions,
    o = i === void 0 ? el : i
  return function (l, a, u) {
    u === void 0 && (u = o)
    var c = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, el, o),
        modifiersData: {},
        elements: { reference: l, popper: a },
        attributes: {},
        styles: {}
      },
      h = [],
      p = !1,
      m = {
        state: c,
        setOptions: function (M) {
          var L = typeof M == 'function' ? M(c.options) : M
          A(),
            (c.options = Object.assign({}, o, c.options, L)),
            (c.scrollParents = {
              reference: Je(l) ? zs(l) : l.contextElement ? zs(l.contextElement) : [],
              popper: zs(a)
            })
          var O = lg(cg([].concat(n, c.options.modifiers)))
          return (
            (c.orderedModifiers = O.filter(function (k) {
              return k.enabled
            })),
            S(),
            m.update()
          )
        },
        forceUpdate: function () {
          if (!p) {
            var M = c.elements,
              L = M.reference,
              O = M.popper
            if (sl(L, O)) {
              ;(c.rects = {
                reference: og(L, on(O), c.options.strategy === 'fixed'),
                popper: Io(O)
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (nt) {
                  return (c.modifiersData[nt.name] = Object.assign({}, nt.data))
                })
              for (var k = 0; k < c.orderedModifiers.length; k++) {
                if (c.reset === !0) {
                  ;(c.reset = !1), (k = -1)
                  continue
                }
                var B = c.orderedModifiers[k],
                  R = B.fn,
                  U = B.options,
                  st = U === void 0 ? {} : U,
                  at = B.name
                typeof R == 'function' &&
                  (c = R({ state: c, options: st, name: at, instance: m }) || c)
              }
            }
          }
        },
        update: ag(function () {
          return new Promise(function (P) {
            m.forceUpdate(), P(c)
          })
        }),
        destroy: function () {
          A(), (p = !0)
        }
      }
    if (!sl(l, a)) return m
    m.setOptions(u).then(function (P) {
      !p && u.onFirstUpdate && u.onFirstUpdate(P)
    })
    function S() {
      c.orderedModifiers.forEach(function (P) {
        var M = P.name,
          L = P.options,
          O = L === void 0 ? {} : L,
          k = P.effect
        if (typeof k == 'function') {
          var B = k({ state: c, name: M, instance: m, options: O }),
            R = function () {}
          h.push(B || R)
        }
      })
    }
    function A() {
      h.forEach(function (P) {
        return P()
      }),
        (h = [])
    }
    return m
  }
}
var ug = ii(),
  fg = [Ro, Vo, Lo, No],
  dg = ii({ defaultModifiers: fg }),
  hg = [Ro, Vo, Lo, No, Ec, vc, yc, mc, bc],
  Ho = ii({ defaultModifiers: hg })
const wc = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      afterMain: oc,
      afterRead: sc,
      afterWrite: ac,
      applyStyles: No,
      arrow: mc,
      auto: si,
      basePlacements: $s,
      beforeMain: nc,
      beforeRead: tc,
      beforeWrite: rc,
      bottom: Wt,
      clippingParents: Ja,
      computeStyles: Lo,
      createPopper: Ho,
      createPopperBase: ug,
      createPopperLite: dg,
      detectOverflow: Cs,
      end: ws,
      eventListeners: Ro,
      flip: vc,
      hide: bc,
      left: St,
      main: ic,
      modifierPhases: cc,
      offset: Ec,
      placements: Oo,
      popper: ls,
      popperGenerator: ii,
      popperOffsets: Vo,
      preventOverflow: yc,
      read: ec,
      reference: Za,
      right: Ut,
      start: Xe,
      top: Ct,
      variationPlacements: Ji,
      viewport: So,
      write: lc
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
)
/*!
 * Bootstrap v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ const xe = new Map(),
  wi = {
    set(e, t, s) {
      xe.has(e) || xe.set(e, new Map())
      const n = xe.get(e)
      if (!n.has(t) && n.size !== 0) {
        console.error(
          `Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`
        )
        return
      }
      n.set(t, s)
    },
    get(e, t) {
      return (xe.has(e) && xe.get(e).get(t)) || null
    },
    remove(e, t) {
      if (!xe.has(e)) return
      const s = xe.get(e)
      s.delete(t), s.size === 0 && xe.delete(e)
    }
  },
  pg = 1e6,
  mg = 1e3,
  eo = 'transitionend',
  Ac = (e) => (
    e &&
      window.CSS &&
      window.CSS.escape &&
      (e = e.replace(/#([^\s"#']+)/g, (t, s) => `#${CSS.escape(s)}`)),
    e
  ),
  _g = (e) =>
    e == null
      ? `${e}`
      : Object.prototype.toString
          .call(e)
          .match(/\s([a-z]+)/i)[1]
          .toLowerCase(),
  gg = (e) => {
    do e += Math.floor(Math.random() * pg)
    while (document.getElementById(e))
    return e
  },
  vg = (e) => {
    if (!e) return 0
    let { transitionDuration: t, transitionDelay: s } = window.getComputedStyle(e)
    const n = Number.parseFloat(t),
      i = Number.parseFloat(s)
    return !n && !i
      ? 0
      : ((t = t.split(',')[0]),
        (s = s.split(',')[0]),
        (Number.parseFloat(t) + Number.parseFloat(s)) * mg)
  },
  Tc = (e) => {
    e.dispatchEvent(new Event(eo))
  },
  ve = (e) =>
    !e || typeof e != 'object'
      ? !1
      : (typeof e.jquery < 'u' && (e = e[0]), typeof e.nodeType < 'u'),
  Le = (e) =>
    ve(e)
      ? e.jquery
        ? e[0]
        : e
      : typeof e == 'string' && e.length > 0
        ? document.querySelector(Ac(e))
        : null,
  Ns = (e) => {
    if (!ve(e) || e.getClientRects().length === 0) return !1
    const t = getComputedStyle(e).getPropertyValue('visibility') === 'visible',
      s = e.closest('details:not([open])')
    if (!s) return t
    if (s !== e) {
      const n = e.closest('summary')
      if ((n && n.parentNode !== s) || n === null) return !1
    }
    return t
  },
  Re = (e) =>
    !e || e.nodeType !== Node.ELEMENT_NODE || e.classList.contains('disabled')
      ? !0
      : typeof e.disabled < 'u'
        ? e.disabled
        : e.hasAttribute('disabled') && e.getAttribute('disabled') !== 'false',
  xc = (e) => {
    if (!document.documentElement.attachShadow) return null
    if (typeof e.getRootNode == 'function') {
      const t = e.getRootNode()
      return t instanceof ShadowRoot ? t : null
    }
    return e instanceof ShadowRoot ? e : e.parentNode ? xc(e.parentNode) : null
  },
  Hn = () => {},
  rn = (e) => {
    e.offsetHeight
  },
  Cc = () =>
    window.jQuery && !document.body.hasAttribute('data-bs-no-jquery') ? window.jQuery : null,
  Ai = [],
  bg = (e) => {
    document.readyState === 'loading'
      ? (Ai.length ||
          document.addEventListener('DOMContentLoaded', () => {
            for (const t of Ai) t()
          }),
        Ai.push(e))
      : e()
  },
  Qt = () => document.documentElement.dir === 'rtl',
  Jt = (e) => {
    bg(() => {
      const t = Cc()
      if (t) {
        const s = e.NAME,
          n = t.fn[s]
        ;(t.fn[s] = e.jQueryInterface),
          (t.fn[s].Constructor = e),
          (t.fn[s].noConflict = () => ((t.fn[s] = n), e.jQueryInterface))
      }
    })
  },
  It = (e, t = [], s = e) => (typeof e == 'function' ? e(...t) : s),
  Sc = (e, t, s = !0) => {
    if (!s) {
      It(e)
      return
    }
    const i = vg(t) + 5
    let o = !1
    const r = ({ target: l }) => {
      l === t && ((o = !0), t.removeEventListener(eo, r), It(e))
    }
    t.addEventListener(eo, r),
      setTimeout(() => {
        o || Tc(t)
      }, i)
  },
  jo = (e, t, s, n) => {
    const i = e.length
    let o = e.indexOf(t)
    return o === -1
      ? !s && n
        ? e[i - 1]
        : e[0]
      : ((o += s ? 1 : -1), n && (o = (o + i) % i), e[Math.max(0, Math.min(o, i - 1))])
  },
  Eg = /[^.]*(?=\..*)\.|.*/,
  yg = /\..*/,
  wg = /::\d+$/,
  Ti = {}
let nl = 1
const Oc = { mouseenter: 'mouseover', mouseleave: 'mouseout' },
  Ag = new Set([
    'click',
    'dblclick',
    'mouseup',
    'mousedown',
    'contextmenu',
    'mousewheel',
    'DOMMouseScroll',
    'mouseover',
    'mouseout',
    'mousemove',
    'selectstart',
    'selectend',
    'keydown',
    'keypress',
    'keyup',
    'orientationchange',
    'touchstart',
    'touchmove',
    'touchend',
    'touchcancel',
    'pointerdown',
    'pointermove',
    'pointerup',
    'pointerleave',
    'pointercancel',
    'gesturestart',
    'gesturechange',
    'gestureend',
    'focus',
    'blur',
    'change',
    'reset',
    'select',
    'submit',
    'focusin',
    'focusout',
    'load',
    'unload',
    'beforeunload',
    'resize',
    'move',
    'DOMContentLoaded',
    'readystatechange',
    'error',
    'abort',
    'scroll'
  ])
function $c(e, t) {
  return (t && `${t}::${nl++}`) || e.uidEvent || nl++
}
function Nc(e) {
  const t = $c(e)
  return (e.uidEvent = t), (Ti[t] = Ti[t] || {}), Ti[t]
}
function Tg(e, t) {
  return function s(n) {
    return Fo(n, { delegateTarget: e }), s.oneOff && y.off(e, n.type, t), t.apply(e, [n])
  }
}
function xg(e, t, s) {
  return function n(i) {
    const o = e.querySelectorAll(t)
    for (let { target: r } = i; r && r !== this; r = r.parentNode)
      for (const l of o)
        if (l === r)
          return Fo(i, { delegateTarget: r }), n.oneOff && y.off(e, i.type, t, s), s.apply(r, [i])
  }
}
function Ic(e, t, s = null) {
  return Object.values(e).find((n) => n.callable === t && n.delegationSelector === s)
}
function Pc(e, t, s) {
  const n = typeof t == 'string',
    i = n ? s : t || s
  let o = Lc(e)
  return Ag.has(o) || (o = e), [n, i, o]
}
function il(e, t, s, n, i) {
  if (typeof t != 'string' || !e) return
  let [o, r, l] = Pc(t, s, n)
  t in Oc &&
    (r = ((S) =>
      function (A) {
        if (
          !A.relatedTarget ||
          (A.relatedTarget !== A.delegateTarget && !A.delegateTarget.contains(A.relatedTarget))
        )
          return S.call(this, A)
      })(r))
  const a = Nc(e),
    u = a[l] || (a[l] = {}),
    c = Ic(u, r, o ? s : null)
  if (c) {
    c.oneOff = c.oneOff && i
    return
  }
  const h = $c(r, t.replace(Eg, '')),
    p = o ? xg(e, s, r) : Tg(e, r)
  ;(p.delegationSelector = o ? s : null),
    (p.callable = r),
    (p.oneOff = i),
    (p.uidEvent = h),
    (u[h] = p),
    e.addEventListener(l, p, o)
}
function so(e, t, s, n, i) {
  const o = Ic(t[s], n, i)
  o && (e.removeEventListener(s, o, !!i), delete t[s][o.uidEvent])
}
function Cg(e, t, s, n) {
  const i = t[s] || {}
  for (const [o, r] of Object.entries(i))
    o.includes(n) && so(e, t, s, r.callable, r.delegationSelector)
}
function Lc(e) {
  return (e = e.replace(yg, '')), Oc[e] || e
}
const y = {
  on(e, t, s, n) {
    il(e, t, s, n, !1)
  },
  one(e, t, s, n) {
    il(e, t, s, n, !0)
  },
  off(e, t, s, n) {
    if (typeof t != 'string' || !e) return
    const [i, o, r] = Pc(t, s, n),
      l = r !== t,
      a = Nc(e),
      u = a[r] || {},
      c = t.startsWith('.')
    if (typeof o < 'u') {
      if (!Object.keys(u).length) return
      so(e, a, r, o, i ? s : null)
      return
    }
    if (c) for (const h of Object.keys(a)) Cg(e, a, h, t.slice(1))
    for (const [h, p] of Object.entries(u)) {
      const m = h.replace(wg, '')
      ;(!l || t.includes(m)) && so(e, a, r, p.callable, p.delegationSelector)
    }
  },
  trigger(e, t, s) {
    if (typeof t != 'string' || !e) return null
    const n = Cc(),
      i = Lc(t),
      o = t !== i
    let r = null,
      l = !0,
      a = !0,
      u = !1
    o &&
      n &&
      ((r = n.Event(t, s)),
      n(e).trigger(r),
      (l = !r.isPropagationStopped()),
      (a = !r.isImmediatePropagationStopped()),
      (u = r.isDefaultPrevented()))
    const c = Fo(new Event(t, { bubbles: l, cancelable: !0 }), s)
    return (
      u && c.preventDefault(),
      a && e.dispatchEvent(c),
      c.defaultPrevented && r && r.preventDefault(),
      c
    )
  }
}
function Fo(e, t = {}) {
  for (const [s, n] of Object.entries(t))
    try {
      e[s] = n
    } catch {
      Object.defineProperty(e, s, {
        configurable: !0,
        get() {
          return n
        }
      })
    }
  return e
}
function ol(e) {
  if (e === 'true') return !0
  if (e === 'false') return !1
  if (e === Number(e).toString()) return Number(e)
  if (e === '' || e === 'null') return null
  if (typeof e != 'string') return e
  try {
    return JSON.parse(decodeURIComponent(e))
  } catch {
    return e
  }
}
function xi(e) {
  return e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`)
}
const be = {
  setDataAttribute(e, t, s) {
    e.setAttribute(`data-bs-${xi(t)}`, s)
  },
  removeDataAttribute(e, t) {
    e.removeAttribute(`data-bs-${xi(t)}`)
  },
  getDataAttributes(e) {
    if (!e) return {}
    const t = {},
      s = Object.keys(e.dataset).filter((n) => n.startsWith('bs') && !n.startsWith('bsConfig'))
    for (const n of s) {
      let i = n.replace(/^bs/, '')
      ;(i = i.charAt(0).toLowerCase() + i.slice(1, i.length)), (t[i] = ol(e.dataset[n]))
    }
    return t
  },
  getDataAttribute(e, t) {
    return ol(e.getAttribute(`data-bs-${xi(t)}`))
  }
}
class ln {
  static get Default() {
    return {}
  }
  static get DefaultType() {
    return {}
  }
  static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!')
  }
  _getConfig(t) {
    return (
      (t = this._mergeConfigObj(t)), (t = this._configAfterMerge(t)), this._typeCheckConfig(t), t
    )
  }
  _configAfterMerge(t) {
    return t
  }
  _mergeConfigObj(t, s) {
    const n = ve(s) ? be.getDataAttribute(s, 'config') : {}
    return {
      ...this.constructor.Default,
      ...(typeof n == 'object' ? n : {}),
      ...(ve(s) ? be.getDataAttributes(s) : {}),
      ...(typeof t == 'object' ? t : {})
    }
  }
  _typeCheckConfig(t, s = this.constructor.DefaultType) {
    for (const [n, i] of Object.entries(s)) {
      const o = t[n],
        r = ve(o) ? 'element' : _g(o)
      if (!new RegExp(i).test(r))
        throw new TypeError(
          `${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${i}".`
        )
    }
  }
}
const Sg = '5.3.3'
class oe extends ln {
  constructor(t, s) {
    super(),
      (t = Le(t)),
      t &&
        ((this._element = t),
        (this._config = this._getConfig(s)),
        wi.set(this._element, this.constructor.DATA_KEY, this))
  }
  dispose() {
    wi.remove(this._element, this.constructor.DATA_KEY),
      y.off(this._element, this.constructor.EVENT_KEY)
    for (const t of Object.getOwnPropertyNames(this)) this[t] = null
  }
  _queueCallback(t, s, n = !0) {
    Sc(t, s, n)
  }
  _getConfig(t) {
    return (
      (t = this._mergeConfigObj(t, this._element)),
      (t = this._configAfterMerge(t)),
      this._typeCheckConfig(t),
      t
    )
  }
  static getInstance(t) {
    return wi.get(Le(t), this.DATA_KEY)
  }
  static getOrCreateInstance(t, s = {}) {
    return this.getInstance(t) || new this(t, typeof s == 'object' ? s : null)
  }
  static get VERSION() {
    return Sg
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`
  }
  static eventName(t) {
    return `${t}${this.EVENT_KEY}`
  }
}
const Ci = (e) => {
    let t = e.getAttribute('data-bs-target')
    if (!t || t === '#') {
      let s = e.getAttribute('href')
      if (!s || (!s.includes('#') && !s.startsWith('.'))) return null
      s.includes('#') && !s.startsWith('#') && (s = `#${s.split('#')[1]}`),
        (t = s && s !== '#' ? s.trim() : null)
    }
    return t
      ? t
          .split(',')
          .map((s) => Ac(s))
          .join(',')
      : null
  },
  F = {
    find(e, t = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(t, e))
    },
    findOne(e, t = document.documentElement) {
      return Element.prototype.querySelector.call(t, e)
    },
    children(e, t) {
      return [].concat(...e.children).filter((s) => s.matches(t))
    },
    parents(e, t) {
      const s = []
      let n = e.parentNode.closest(t)
      for (; n; ) s.push(n), (n = n.parentNode.closest(t))
      return s
    },
    prev(e, t) {
      let s = e.previousElementSibling
      for (; s; ) {
        if (s.matches(t)) return [s]
        s = s.previousElementSibling
      }
      return []
    },
    next(e, t) {
      let s = e.nextElementSibling
      for (; s; ) {
        if (s.matches(t)) return [s]
        s = s.nextElementSibling
      }
      return []
    },
    focusableChildren(e) {
      const t = [
        'a',
        'button',
        'input',
        'textarea',
        'select',
        'details',
        '[tabindex]',
        '[contenteditable="true"]'
      ]
        .map((s) => `${s}:not([tabindex^="-"])`)
        .join(',')
      return this.find(t, e).filter((s) => !Re(s) && Ns(s))
    },
    getSelectorFromElement(e) {
      const t = Ci(e)
      return t && F.findOne(t) ? t : null
    },
    getElementFromSelector(e) {
      const t = Ci(e)
      return t ? F.findOne(t) : null
    },
    getMultipleElementsFromSelector(e) {
      const t = Ci(e)
      return t ? F.find(t) : []
    }
  },
  oi = (e, t = 'hide') => {
    const s = `click.dismiss${e.EVENT_KEY}`,
      n = e.NAME
    y.on(document, s, `[data-bs-dismiss="${n}"]`, function (i) {
      if ((['A', 'AREA'].includes(this.tagName) && i.preventDefault(), Re(this))) return
      const o = F.getElementFromSelector(this) || this.closest(`.${n}`)
      e.getOrCreateInstance(o)[t]()
    })
  },
  Og = 'alert',
  $g = 'bs.alert',
  Rc = `.${$g}`,
  Ng = `close${Rc}`,
  Ig = `closed${Rc}`,
  Pg = 'fade',
  Lg = 'show'
class ri extends oe {
  static get NAME() {
    return Og
  }
  close() {
    if (y.trigger(this._element, Ng).defaultPrevented) return
    this._element.classList.remove(Lg)
    const s = this._element.classList.contains(Pg)
    this._queueCallback(() => this._destroyElement(), this._element, s)
  }
  _destroyElement() {
    this._element.remove(), y.trigger(this._element, Ig), this.dispose()
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const s = ri.getOrCreateInstance(this)
      if (typeof t == 'string') {
        if (s[t] === void 0 || t.startsWith('_') || t === 'constructor')
          throw new TypeError(`No method named "${t}"`)
        s[t](this)
      }
    })
  }
}
oi(ri, 'close')
Jt(ri)
const Rg = 'button',
  Dg = 'bs.button',
  Mg = `.${Dg}`,
  kg = '.data-api',
  Vg = 'active',
  rl = '[data-bs-toggle="button"]',
  Hg = `click${Mg}${kg}`
class li extends oe {
  static get NAME() {
    return Rg
  }
  toggle() {
    this._element.setAttribute('aria-pressed', this._element.classList.toggle(Vg))
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const s = li.getOrCreateInstance(this)
      t === 'toggle' && s[t]()
    })
  }
}
y.on(document, Hg, rl, (e) => {
  e.preventDefault()
  const t = e.target.closest(rl)
  li.getOrCreateInstance(t).toggle()
})
Jt(li)
const jg = 'swipe',
  Is = '.bs.swipe',
  Fg = `touchstart${Is}`,
  Bg = `touchmove${Is}`,
  Kg = `touchend${Is}`,
  Wg = `pointerdown${Is}`,
  Ug = `pointerup${Is}`,
  Yg = 'touch',
  zg = 'pen',
  Gg = 'pointer-event',
  qg = 40,
  Qg = { endCallback: null, leftCallback: null, rightCallback: null },
  Xg = {
    endCallback: '(function|null)',
    leftCallback: '(function|null)',
    rightCallback: '(function|null)'
  }
class jn extends ln {
  constructor(t, s) {
    super(),
      (this._element = t),
      !(!t || !jn.isSupported()) &&
        ((this._config = this._getConfig(s)),
        (this._deltaX = 0),
        (this._supportPointerEvents = !!window.PointerEvent),
        this._initEvents())
  }
  static get Default() {
    return Qg
  }
  static get DefaultType() {
    return Xg
  }
  static get NAME() {
    return jg
  }
  dispose() {
    y.off(this._element, Is)
  }
  _start(t) {
    if (!this._supportPointerEvents) {
      this._deltaX = t.touches[0].clientX
      return
    }
    this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
  }
  _end(t) {
    this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX),
      this._handleSwipe(),
      It(this._config.endCallback)
  }
  _move(t) {
    this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX
  }
  _handleSwipe() {
    const t = Math.abs(this._deltaX)
    if (t <= qg) return
    const s = t / this._deltaX
    ;(this._deltaX = 0), s && It(s > 0 ? this._config.rightCallback : this._config.leftCallback)
  }
  _initEvents() {
    this._supportPointerEvents
      ? (y.on(this._element, Wg, (t) => this._start(t)),
        y.on(this._element, Ug, (t) => this._end(t)),
        this._element.classList.add(Gg))
      : (y.on(this._element, Fg, (t) => this._start(t)),
        y.on(this._element, Bg, (t) => this._move(t)),
        y.on(this._element, Kg, (t) => this._end(t)))
  }
  _eventIsPointerPenTouch(t) {
    return this._supportPointerEvents && (t.pointerType === zg || t.pointerType === Yg)
  }
  static isSupported() {
    return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0
  }
}
const Jg = 'carousel',
  Zg = 'bs.carousel',
  He = `.${Zg}`,
  Dc = '.data-api',
  tv = 'ArrowLeft',
  ev = 'ArrowRight',
  sv = 500,
  Ms = 'next',
  is = 'prev',
  as = 'left',
  Pn = 'right',
  nv = `slide${He}`,
  Si = `slid${He}`,
  iv = `keydown${He}`,
  ov = `mouseenter${He}`,
  rv = `mouseleave${He}`,
  lv = `dragstart${He}`,
  av = `load${He}${Dc}`,
  cv = `click${He}${Dc}`,
  Mc = 'carousel',
  gn = 'active',
  uv = 'slide',
  fv = 'carousel-item-end',
  dv = 'carousel-item-start',
  hv = 'carousel-item-next',
  pv = 'carousel-item-prev',
  kc = '.active',
  Vc = '.carousel-item',
  mv = kc + Vc,
  _v = '.carousel-item img',
  gv = '.carousel-indicators',
  vv = '[data-bs-slide], [data-bs-slide-to]',
  bv = '[data-bs-ride="carousel"]',
  Ev = { [tv]: Pn, [ev]: as },
  yv = { interval: 5e3, keyboard: !0, pause: 'hover', ride: !1, touch: !0, wrap: !0 },
  wv = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    pause: '(string|boolean)',
    ride: '(boolean|string)',
    touch: 'boolean',
    wrap: 'boolean'
  }
class an extends oe {
  constructor(t, s) {
    super(t, s),
      (this._interval = null),
      (this._activeElement = null),
      (this._isSliding = !1),
      (this.touchTimeout = null),
      (this._swipeHelper = null),
      (this._indicatorsElement = F.findOne(gv, this._element)),
      this._addEventListeners(),
      this._config.ride === Mc && this.cycle()
  }
  static get Default() {
    return yv
  }
  static get DefaultType() {
    return wv
  }
  static get NAME() {
    return Jg
  }
  next() {
    this._slide(Ms)
  }
  nextWhenVisible() {
    !document.hidden && Ns(this._element) && this.next()
  }
  prev() {
    this._slide(is)
  }
  pause() {
    this._isSliding && Tc(this._element), this._clearInterval()
  }
  cycle() {
    this._clearInterval(),
      this._updateInterval(),
      (this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval))
  }
  _maybeEnableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        y.one(this._element, Si, () => this.cycle())
        return
      }
      this.cycle()
    }
  }
  to(t) {
    const s = this._getItems()
    if (t > s.length - 1 || t < 0) return
    if (this._isSliding) {
      y.one(this._element, Si, () => this.to(t))
      return
    }
    const n = this._getItemIndex(this._getActive())
    if (n === t) return
    const i = t > n ? Ms : is
    this._slide(i, s[t])
  }
  dispose() {
    this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
  }
  _configAfterMerge(t) {
    return (t.defaultInterval = t.interval), t
  }
  _addEventListeners() {
    this._config.keyboard && y.on(this._element, iv, (t) => this._keydown(t)),
      this._config.pause === 'hover' &&
        (y.on(this._element, ov, () => this.pause()),
        y.on(this._element, rv, () => this._maybeEnableCycle())),
      this._config.touch && jn.isSupported() && this._addTouchEventListeners()
  }
  _addTouchEventListeners() {
    for (const n of F.find(_v, this._element)) y.on(n, lv, (i) => i.preventDefault())
    const s = {
      leftCallback: () => this._slide(this._directionToOrder(as)),
      rightCallback: () => this._slide(this._directionToOrder(Pn)),
      endCallback: () => {
        this._config.pause === 'hover' &&
          (this.pause(),
          this.touchTimeout && clearTimeout(this.touchTimeout),
          (this.touchTimeout = setTimeout(
            () => this._maybeEnableCycle(),
            sv + this._config.interval
          )))
      }
    }
    this._swipeHelper = new jn(this._element, s)
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName)) return
    const s = Ev[t.key]
    s && (t.preventDefault(), this._slide(this._directionToOrder(s)))
  }
  _getItemIndex(t) {
    return this._getItems().indexOf(t)
  }
  _setActiveIndicatorElement(t) {
    if (!this._indicatorsElement) return
    const s = F.findOne(kc, this._indicatorsElement)
    s.classList.remove(gn), s.removeAttribute('aria-current')
    const n = F.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement)
    n && (n.classList.add(gn), n.setAttribute('aria-current', 'true'))
  }
  _updateInterval() {
    const t = this._activeElement || this._getActive()
    if (!t) return
    const s = Number.parseInt(t.getAttribute('data-bs-interval'), 10)
    this._config.interval = s || this._config.defaultInterval
  }
  _slide(t, s = null) {
    if (this._isSliding) return
    const n = this._getActive(),
      i = t === Ms,
      o = s || jo(this._getItems(), n, i, this._config.wrap)
    if (o === n) return
    const r = this._getItemIndex(o),
      l = (m) =>
        y.trigger(this._element, m, {
          relatedTarget: o,
          direction: this._orderToDirection(t),
          from: this._getItemIndex(n),
          to: r
        })
    if (l(nv).defaultPrevented || !n || !o) return
    const u = !!this._interval
    this.pause(),
      (this._isSliding = !0),
      this._setActiveIndicatorElement(r),
      (this._activeElement = o)
    const c = i ? dv : fv,
      h = i ? hv : pv
    o.classList.add(h), rn(o), n.classList.add(c), o.classList.add(c)
    const p = () => {
      o.classList.remove(c, h),
        o.classList.add(gn),
        n.classList.remove(gn, h, c),
        (this._isSliding = !1),
        l(Si)
    }
    this._queueCallback(p, n, this._isAnimated()), u && this.cycle()
  }
  _isAnimated() {
    return this._element.classList.contains(uv)
  }
  _getActive() {
    return F.findOne(mv, this._element)
  }
  _getItems() {
    return F.find(Vc, this._element)
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), (this._interval = null))
  }
  _directionToOrder(t) {
    return Qt() ? (t === as ? is : Ms) : t === as ? Ms : is
  }
  _orderToDirection(t) {
    return Qt() ? (t === is ? as : Pn) : t === is ? Pn : as
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const s = an.getOrCreateInstance(this, t)
      if (typeof t == 'number') {
        s.to(t)
        return
      }
      if (typeof t == 'string') {
        if (s[t] === void 0 || t.startsWith('_') || t === 'constructor')
          throw new TypeError(`No method named "${t}"`)
        s[t]()
      }
    })
  }
}
y.on(document, cv, vv, function (e) {
  const t = F.getElementFromSelector(this)
  if (!t || !t.classList.contains(Mc)) return
  e.preventDefault()
  const s = an.getOrCreateInstance(t),
    n = this.getAttribute('data-bs-slide-to')
  if (n) {
    s.to(n), s._maybeEnableCycle()
    return
  }
  if (be.getDataAttribute(this, 'slide') === 'next') {
    s.next(), s._maybeEnableCycle()
    return
  }
  s.prev(), s._maybeEnableCycle()
})
y.on(window, av, () => {
  const e = F.find(bv)
  for (const t of e) an.getOrCreateInstance(t)
})
Jt(an)
const Av = 'collapse',
  Tv = 'bs.collapse',
  cn = `.${Tv}`,
  xv = '.data-api',
  Cv = `show${cn}`,
  Sv = `shown${cn}`,
  Ov = `hide${cn}`,
  $v = `hidden${cn}`,
  Nv = `click${cn}${xv}`,
  Oi = 'show',
  us = 'collapse',
  vn = 'collapsing',
  Iv = 'collapsed',
  Pv = `:scope .${us} .${us}`,
  Lv = 'collapse-horizontal',
  Rv = 'width',
  Dv = 'height',
  Mv = '.collapse.show, .collapse.collapsing',
  no = '[data-bs-toggle="collapse"]',
  kv = { parent: null, toggle: !0 },
  Vv = { parent: '(null|element)', toggle: 'boolean' }
class tn extends oe {
  constructor(t, s) {
    super(t, s), (this._isTransitioning = !1), (this._triggerArray = [])
    const n = F.find(no)
    for (const i of n) {
      const o = F.getSelectorFromElement(i),
        r = F.find(o).filter((l) => l === this._element)
      o !== null && r.length && this._triggerArray.push(i)
    }
    this._initializeChildren(),
      this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
      this._config.toggle && this.toggle()
  }
  static get Default() {
    return kv
  }
  static get DefaultType() {
    return Vv
  }
  static get NAME() {
    return Av
  }
  toggle() {
    this._isShown() ? this.hide() : this.show()
  }
  show() {
    if (this._isTransitioning || this._isShown()) return
    let t = []
    if (
      (this._config.parent &&
        (t = this._getFirstLevelChildren(Mv)
          .filter((l) => l !== this._element)
          .map((l) => tn.getOrCreateInstance(l, { toggle: !1 }))),
      (t.length && t[0]._isTransitioning) || y.trigger(this._element, Cv).defaultPrevented)
    )
      return
    for (const l of t) l.hide()
    const n = this._getDimension()
    this._element.classList.remove(us),
      this._element.classList.add(vn),
      (this._element.style[n] = 0),
      this._addAriaAndCollapsedClass(this._triggerArray, !0),
      (this._isTransitioning = !0)
    const i = () => {
        ;(this._isTransitioning = !1),
          this._element.classList.remove(vn),
          this._element.classList.add(us, Oi),
          (this._element.style[n] = ''),
          y.trigger(this._element, Sv)
      },
      r = `scroll${n[0].toUpperCase() + n.slice(1)}`
    this._queueCallback(i, this._element, !0), (this._element.style[n] = `${this._element[r]}px`)
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || y.trigger(this._element, Ov).defaultPrevented)
      return
    const s = this._getDimension()
    ;(this._element.style[s] = `${this._element.getBoundingClientRect()[s]}px`),
      rn(this._element),
      this._element.classList.add(vn),
      this._element.classList.remove(us, Oi)
    for (const i of this._triggerArray) {
      const o = F.getElementFromSelector(i)
      o && !this._isShown(o) && this._addAriaAndCollapsedClass([i], !1)
    }
    this._isTransitioning = !0
    const n = () => {
      ;(this._isTransitioning = !1),
        this._element.classList.remove(vn),
        this._element.classList.add(us),
        y.trigger(this._element, $v)
    }
    ;(this._element.style[s] = ''), this._queueCallback(n, this._element, !0)
  }
  _isShown(t = this._element) {
    return t.classList.contains(Oi)
  }
  _configAfterMerge(t) {
    return (t.toggle = !!t.toggle), (t.parent = Le(t.parent)), t
  }
  _getDimension() {
    return this._element.classList.contains(Lv) ? Rv : Dv
  }
  _initializeChildren() {
    if (!this._config.parent) return
    const t = this._getFirstLevelChildren(no)
    for (const s of t) {
      const n = F.getElementFromSelector(s)
      n && this._addAriaAndCollapsedClass([s], this._isShown(n))
    }
  }
  _getFirstLevelChildren(t) {
    const s = F.find(Pv, this._config.parent)
    return F.find(t, this._config.parent).filter((n) => !s.includes(n))
  }
  _addAriaAndCollapsedClass(t, s) {
    if (t.length) for (const n of t) n.classList.toggle(Iv, !s), n.setAttribute('aria-expanded', s)
  }
  static jQueryInterface(t) {
    const s = {}
    return (
      typeof t == 'string' && /show|hide/.test(t) && (s.toggle = !1),
      this.each(function () {
        const n = tn.getOrCreateInstance(this, s)
        if (typeof t == 'string') {
          if (typeof n[t] > 'u') throw new TypeError(`No method named "${t}"`)
          n[t]()
        }
      })
    )
  }
}
y.on(document, Nv, no, function (e) {
  ;(e.target.tagName === 'A' || (e.delegateTarget && e.delegateTarget.tagName === 'A')) &&
    e.preventDefault()
  for (const t of F.getMultipleElementsFromSelector(this))
    tn.getOrCreateInstance(t, { toggle: !1 }).toggle()
})
Jt(tn)
const ll = 'dropdown',
  Hv = 'bs.dropdown',
  ts = `.${Hv}`,
  Bo = '.data-api',
  jv = 'Escape',
  al = 'Tab',
  Fv = 'ArrowUp',
  cl = 'ArrowDown',
  Bv = 2,
  Kv = `hide${ts}`,
  Wv = `hidden${ts}`,
  Uv = `show${ts}`,
  Yv = `shown${ts}`,
  Hc = `click${ts}${Bo}`,
  jc = `keydown${ts}${Bo}`,
  zv = `keyup${ts}${Bo}`,
  cs = 'show',
  Gv = 'dropup',
  qv = 'dropend',
  Qv = 'dropstart',
  Xv = 'dropup-center',
  Jv = 'dropdown-center',
  We = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
  Zv = `${We}.${cs}`,
  Ln = '.dropdown-menu',
  tb = '.navbar',
  eb = '.navbar-nav',
  sb = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',
  nb = Qt() ? 'top-end' : 'top-start',
  ib = Qt() ? 'top-start' : 'top-end',
  ob = Qt() ? 'bottom-end' : 'bottom-start',
  rb = Qt() ? 'bottom-start' : 'bottom-end',
  lb = Qt() ? 'left-start' : 'right-start',
  ab = Qt() ? 'right-start' : 'left-start',
  cb = 'top',
  ub = 'bottom',
  fb = {
    autoClose: !0,
    boundary: 'clippingParents',
    display: 'dynamic',
    offset: [0, 2],
    popperConfig: null,
    reference: 'toggle'
  },
  db = {
    autoClose: '(boolean|string)',
    boundary: '(string|element)',
    display: 'string',
    offset: '(array|string|function)',
    popperConfig: '(null|object|function)',
    reference: '(string|element|object)'
  }
class fe extends oe {
  constructor(t, s) {
    super(t, s),
      (this._popper = null),
      (this._parent = this._element.parentNode),
      (this._menu =
        F.next(this._element, Ln)[0] ||
        F.prev(this._element, Ln)[0] ||
        F.findOne(Ln, this._parent)),
      (this._inNavbar = this._detectNavbar())
  }
  static get Default() {
    return fb
  }
  static get DefaultType() {
    return db
  }
  static get NAME() {
    return ll
  }
  toggle() {
    return this._isShown() ? this.hide() : this.show()
  }
  show() {
    if (Re(this._element) || this._isShown()) return
    const t = { relatedTarget: this._element }
    if (!y.trigger(this._element, Uv, t).defaultPrevented) {
      if (
        (this._createPopper(),
        'ontouchstart' in document.documentElement && !this._parent.closest(eb))
      )
        for (const n of [].concat(...document.body.children)) y.on(n, 'mouseover', Hn)
      this._element.focus(),
        this._element.setAttribute('aria-expanded', !0),
        this._menu.classList.add(cs),
        this._element.classList.add(cs),
        y.trigger(this._element, Yv, t)
    }
  }
  hide() {
    if (Re(this._element) || !this._isShown()) return
    const t = { relatedTarget: this._element }
    this._completeHide(t)
  }
  dispose() {
    this._popper && this._popper.destroy(), super.dispose()
  }
  update() {
    ;(this._inNavbar = this._detectNavbar()), this._popper && this._popper.update()
  }
  _completeHide(t) {
    if (!y.trigger(this._element, Kv, t).defaultPrevented) {
      if ('ontouchstart' in document.documentElement)
        for (const n of [].concat(...document.body.children)) y.off(n, 'mouseover', Hn)
      this._popper && this._popper.destroy(),
        this._menu.classList.remove(cs),
        this._element.classList.remove(cs),
        this._element.setAttribute('aria-expanded', 'false'),
        be.removeDataAttribute(this._menu, 'popper'),
        y.trigger(this._element, Wv, t)
    }
  }
  _getConfig(t) {
    if (
      ((t = super._getConfig(t)),
      typeof t.reference == 'object' &&
        !ve(t.reference) &&
        typeof t.reference.getBoundingClientRect != 'function')
    )
      throw new TypeError(
        `${ll.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
      )
    return t
  }
  _createPopper() {
    if (typeof wc > 'u')
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)")
    let t = this._element
    this._config.reference === 'parent'
      ? (t = this._parent)
      : ve(this._config.reference)
        ? (t = Le(this._config.reference))
        : typeof this._config.reference == 'object' && (t = this._config.reference)
    const s = this._getPopperConfig()
    this._popper = Ho(t, this._menu, s)
  }
  _isShown() {
    return this._menu.classList.contains(cs)
  }
  _getPlacement() {
    const t = this._parent
    if (t.classList.contains(qv)) return lb
    if (t.classList.contains(Qv)) return ab
    if (t.classList.contains(Xv)) return cb
    if (t.classList.contains(Jv)) return ub
    const s = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end'
    return t.classList.contains(Gv) ? (s ? ib : nb) : s ? rb : ob
  }
  _detectNavbar() {
    return this._element.closest(tb) !== null
  }
  _getOffset() {
    const { offset: t } = this._config
    return typeof t == 'string'
      ? t.split(',').map((s) => Number.parseInt(s, 10))
      : typeof t == 'function'
        ? (s) => t(s, this._element)
        : t
  }
  _getPopperConfig() {
    const t = {
      placement: this._getPlacement(),
      modifiers: [
        { name: 'preventOverflow', options: { boundary: this._config.boundary } },
        { name: 'offset', options: { offset: this._getOffset() } }
      ]
    }
    return (
      (this._inNavbar || this._config.display === 'static') &&
        (be.setDataAttribute(this._menu, 'popper', 'static'),
        (t.modifiers = [{ name: 'applyStyles', enabled: !1 }])),
      { ...t, ...It(this._config.popperConfig, [t]) }
    )
  }
  _selectMenuItem({ key: t, target: s }) {
    const n = F.find(sb, this._menu).filter((i) => Ns(i))
    n.length && jo(n, s, t === cl, !n.includes(s)).focus()
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const s = fe.getOrCreateInstance(this, t)
      if (typeof t == 'string') {
        if (typeof s[t] > 'u') throw new TypeError(`No method named "${t}"`)
        s[t]()
      }
    })
  }
  static clearMenus(t) {
    if (t.button === Bv || (t.type === 'keyup' && t.key !== al)) return
    const s = F.find(Zv)
    for (const n of s) {
      const i = fe.getInstance(n)
      if (!i || i._config.autoClose === !1) continue
      const o = t.composedPath(),
        r = o.includes(i._menu)
      if (
        o.includes(i._element) ||
        (i._config.autoClose === 'inside' && !r) ||
        (i._config.autoClose === 'outside' && r) ||
        (i._menu.contains(t.target) &&
          ((t.type === 'keyup' && t.key === al) ||
            /input|select|option|textarea|form/i.test(t.target.tagName)))
      )
        continue
      const l = { relatedTarget: i._element }
      t.type === 'click' && (l.clickEvent = t), i._completeHide(l)
    }
  }
  static dataApiKeydownHandler(t) {
    const s = /input|textarea/i.test(t.target.tagName),
      n = t.key === jv,
      i = [Fv, cl].includes(t.key)
    if ((!i && !n) || (s && !n)) return
    t.preventDefault()
    const o = this.matches(We)
        ? this
        : F.prev(this, We)[0] || F.next(this, We)[0] || F.findOne(We, t.delegateTarget.parentNode),
      r = fe.getOrCreateInstance(o)
    if (i) {
      t.stopPropagation(), r.show(), r._selectMenuItem(t)
      return
    }
    r._isShown() && (t.stopPropagation(), r.hide(), o.focus())
  }
}
y.on(document, jc, We, fe.dataApiKeydownHandler)
y.on(document, jc, Ln, fe.dataApiKeydownHandler)
y.on(document, Hc, fe.clearMenus)
y.on(document, zv, fe.clearMenus)
y.on(document, Hc, We, function (e) {
  e.preventDefault(), fe.getOrCreateInstance(this).toggle()
})
Jt(fe)
const Fc = 'backdrop',
  hb = 'fade',
  ul = 'show',
  fl = `mousedown.bs.${Fc}`,
  pb = {
    className: 'modal-backdrop',
    clickCallback: null,
    isAnimated: !1,
    isVisible: !0,
    rootElement: 'body'
  },
  mb = {
    className: 'string',
    clickCallback: '(function|null)',
    isAnimated: 'boolean',
    isVisible: 'boolean',
    rootElement: '(element|string)'
  }
class Bc extends ln {
  constructor(t) {
    super(), (this._config = this._getConfig(t)), (this._isAppended = !1), (this._element = null)
  }
  static get Default() {
    return pb
  }
  static get DefaultType() {
    return mb
  }
  static get NAME() {
    return Fc
  }
  show(t) {
    if (!this._config.isVisible) {
      It(t)
      return
    }
    this._append()
    const s = this._getElement()
    this._config.isAnimated && rn(s),
      s.classList.add(ul),
      this._emulateAnimation(() => {
        It(t)
      })
  }
  hide(t) {
    if (!this._config.isVisible) {
      It(t)
      return
    }
    this._getElement().classList.remove(ul),
      this._emulateAnimation(() => {
        this.dispose(), It(t)
      })
  }
  dispose() {
    this._isAppended && (y.off(this._element, fl), this._element.remove(), (this._isAppended = !1))
  }
  _getElement() {
    if (!this._element) {
      const t = document.createElement('div')
      ;(t.className = this._config.className),
        this._config.isAnimated && t.classList.add(hb),
        (this._element = t)
    }
    return this._element
  }
  _configAfterMerge(t) {
    return (t.rootElement = Le(t.rootElement)), t
  }
  _append() {
    if (this._isAppended) return
    const t = this._getElement()
    this._config.rootElement.append(t),
      y.on(t, fl, () => {
        It(this._config.clickCallback)
      }),
      (this._isAppended = !0)
  }
  _emulateAnimation(t) {
    Sc(t, this._getElement(), this._config.isAnimated)
  }
}
const _b = 'focustrap',
  gb = 'bs.focustrap',
  Fn = `.${gb}`,
  vb = `focusin${Fn}`,
  bb = `keydown.tab${Fn}`,
  Eb = 'Tab',
  yb = 'forward',
  dl = 'backward',
  wb = { autofocus: !0, trapElement: null },
  Ab = { autofocus: 'boolean', trapElement: 'element' }
class Kc extends ln {
  constructor(t) {
    super(),
      (this._config = this._getConfig(t)),
      (this._isActive = !1),
      (this._lastTabNavDirection = null)
  }
  static get Default() {
    return wb
  }
  static get DefaultType() {
    return Ab
  }
  static get NAME() {
    return _b
  }
  activate() {
    this._isActive ||
      (this._config.autofocus && this._config.trapElement.focus(),
      y.off(document, Fn),
      y.on(document, vb, (t) => this._handleFocusin(t)),
      y.on(document, bb, (t) => this._handleKeydown(t)),
      (this._isActive = !0))
  }
  deactivate() {
    this._isActive && ((this._isActive = !1), y.off(document, Fn))
  }
  _handleFocusin(t) {
    const { trapElement: s } = this._config
    if (t.target === document || t.target === s || s.contains(t.target)) return
    const n = F.focusableChildren(s)
    n.length === 0
      ? s.focus()
      : this._lastTabNavDirection === dl
        ? n[n.length - 1].focus()
        : n[0].focus()
  }
  _handleKeydown(t) {
    t.key === Eb && (this._lastTabNavDirection = t.shiftKey ? dl : yb)
  }
}
const hl = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  pl = '.sticky-top',
  bn = 'padding-right',
  ml = 'margin-right'
class io {
  constructor() {
    this._element = document.body
  }
  getWidth() {
    const t = document.documentElement.clientWidth
    return Math.abs(window.innerWidth - t)
  }
  hide() {
    const t = this.getWidth()
    this._disableOverFlow(),
      this._setElementAttributes(this._element, bn, (s) => s + t),
      this._setElementAttributes(hl, bn, (s) => s + t),
      this._setElementAttributes(pl, ml, (s) => s - t)
  }
  reset() {
    this._resetElementAttributes(this._element, 'overflow'),
      this._resetElementAttributes(this._element, bn),
      this._resetElementAttributes(hl, bn),
      this._resetElementAttributes(pl, ml)
  }
  isOverflowing() {
    return this.getWidth() > 0
  }
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, 'overflow'), (this._element.style.overflow = 'hidden')
  }
  _setElementAttributes(t, s, n) {
    const i = this.getWidth(),
      o = (r) => {
        if (r !== this._element && window.innerWidth > r.clientWidth + i) return
        this._saveInitialAttribute(r, s)
        const l = window.getComputedStyle(r).getPropertyValue(s)
        r.style.setProperty(s, `${n(Number.parseFloat(l))}px`)
      }
    this._applyManipulationCallback(t, o)
  }
  _saveInitialAttribute(t, s) {
    const n = t.style.getPropertyValue(s)
    n && be.setDataAttribute(t, s, n)
  }
  _resetElementAttributes(t, s) {
    const n = (i) => {
      const o = be.getDataAttribute(i, s)
      if (o === null) {
        i.style.removeProperty(s)
        return
      }
      be.removeDataAttribute(i, s), i.style.setProperty(s, o)
    }
    this._applyManipulationCallback(t, n)
  }
  _applyManipulationCallback(t, s) {
    if (ve(t)) {
      s(t)
      return
    }
    for (const n of F.find(t, this._element)) s(n)
  }
}
const Tb = 'modal',
  xb = 'bs.modal',
  Xt = `.${xb}`,
  Cb = '.data-api',
  Sb = 'Escape',
  Ob = `hide${Xt}`,
  $b = `hidePrevented${Xt}`,
  Wc = `hidden${Xt}`,
  Uc = `show${Xt}`,
  Nb = `shown${Xt}`,
  Ib = `resize${Xt}`,
  Pb = `click.dismiss${Xt}`,
  Lb = `mousedown.dismiss${Xt}`,
  Rb = `keydown.dismiss${Xt}`,
  Db = `click${Xt}${Cb}`,
  _l = 'modal-open',
  Mb = 'fade',
  gl = 'show',
  $i = 'modal-static',
  kb = '.modal.show',
  Vb = '.modal-dialog',
  Hb = '.modal-body',
  jb = '[data-bs-toggle="modal"]',
  Fb = { backdrop: !0, focus: !0, keyboard: !0 },
  Bb = { backdrop: '(boolean|string)', focus: 'boolean', keyboard: 'boolean' }
class Ss extends oe {
  constructor(t, s) {
    super(t, s),
      (this._dialog = F.findOne(Vb, this._element)),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      (this._isShown = !1),
      (this._isTransitioning = !1),
      (this._scrollBar = new io()),
      this._addEventListeners()
  }
  static get Default() {
    return Fb
  }
  static get DefaultType() {
    return Bb
  }
  static get NAME() {
    return Tb
  }
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t)
  }
  show(t) {
    this._isShown ||
      this._isTransitioning ||
      y.trigger(this._element, Uc, { relatedTarget: t }).defaultPrevented ||
      ((this._isShown = !0),
      (this._isTransitioning = !0),
      this._scrollBar.hide(),
      document.body.classList.add(_l),
      this._adjustDialog(),
      this._backdrop.show(() => this._showElement(t)))
  }
  hide() {
    !this._isShown ||
      this._isTransitioning ||
      y.trigger(this._element, Ob).defaultPrevented ||
      ((this._isShown = !1),
      (this._isTransitioning = !0),
      this._focustrap.deactivate(),
      this._element.classList.remove(gl),
      this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()))
  }
  dispose() {
    y.off(window, Xt),
      y.off(this._dialog, Xt),
      this._backdrop.dispose(),
      this._focustrap.deactivate(),
      super.dispose()
  }
  handleUpdate() {
    this._adjustDialog()
  }
  _initializeBackDrop() {
    return new Bc({ isVisible: !!this._config.backdrop, isAnimated: this._isAnimated() })
  }
  _initializeFocusTrap() {
    return new Kc({ trapElement: this._element })
  }
  _showElement(t) {
    document.body.contains(this._element) || document.body.append(this._element),
      (this._element.style.display = 'block'),
      this._element.removeAttribute('aria-hidden'),
      this._element.setAttribute('aria-modal', !0),
      this._element.setAttribute('role', 'dialog'),
      (this._element.scrollTop = 0)
    const s = F.findOne(Hb, this._dialog)
    s && (s.scrollTop = 0), rn(this._element), this._element.classList.add(gl)
    const n = () => {
      this._config.focus && this._focustrap.activate(),
        (this._isTransitioning = !1),
        y.trigger(this._element, Nb, { relatedTarget: t })
    }
    this._queueCallback(n, this._dialog, this._isAnimated())
  }
  _addEventListeners() {
    y.on(this._element, Rb, (t) => {
      if (t.key === Sb) {
        if (this._config.keyboard) {
          this.hide()
          return
        }
        this._triggerBackdropTransition()
      }
    }),
      y.on(window, Ib, () => {
        this._isShown && !this._isTransitioning && this._adjustDialog()
      }),
      y.on(this._element, Lb, (t) => {
        y.one(this._element, Pb, (s) => {
          if (!(this._element !== t.target || this._element !== s.target)) {
            if (this._config.backdrop === 'static') {
              this._triggerBackdropTransition()
              return
            }
            this._config.backdrop && this.hide()
          }
        })
      })
  }
  _hideModal() {
    ;(this._element.style.display = 'none'),
      this._element.setAttribute('aria-hidden', !0),
      this._element.removeAttribute('aria-modal'),
      this._element.removeAttribute('role'),
      (this._isTransitioning = !1),
      this._backdrop.hide(() => {
        document.body.classList.remove(_l),
          this._resetAdjustments(),
          this._scrollBar.reset(),
          y.trigger(this._element, Wc)
      })
  }
  _isAnimated() {
    return this._element.classList.contains(Mb)
  }
  _triggerBackdropTransition() {
    if (y.trigger(this._element, $b).defaultPrevented) return
    const s = this._element.scrollHeight > document.documentElement.clientHeight,
      n = this._element.style.overflowY
    n === 'hidden' ||
      this._element.classList.contains($i) ||
      (s || (this._element.style.overflowY = 'hidden'),
      this._element.classList.add($i),
      this._queueCallback(() => {
        this._element.classList.remove($i),
          this._queueCallback(() => {
            this._element.style.overflowY = n
          }, this._dialog)
      }, this._dialog),
      this._element.focus())
  }
  _adjustDialog() {
    const t = this._element.scrollHeight > document.documentElement.clientHeight,
      s = this._scrollBar.getWidth(),
      n = s > 0
    if (n && !t) {
      const i = Qt() ? 'paddingLeft' : 'paddingRight'
      this._element.style[i] = `${s}px`
    }
    if (!n && t) {
      const i = Qt() ? 'paddingRight' : 'paddingLeft'
      this._element.style[i] = `${s}px`
    }
  }
  _resetAdjustments() {
    ;(this._element.style.paddingLeft = ''), (this._element.style.paddingRight = '')
  }
  static jQueryInterface(t, s) {
    return this.each(function () {
      const n = Ss.getOrCreateInstance(this, t)
      if (typeof t == 'string') {
        if (typeof n[t] > 'u') throw new TypeError(`No method named "${t}"`)
        n[t](s)
      }
    })
  }
}
y.on(document, Db, jb, function (e) {
  const t = F.getElementFromSelector(this)
  ;['A', 'AREA'].includes(this.tagName) && e.preventDefault(),
    y.one(t, Uc, (i) => {
      i.defaultPrevented ||
        y.one(t, Wc, () => {
          Ns(this) && this.focus()
        })
    })
  const s = F.findOne(kb)
  s && Ss.getInstance(s).hide(), Ss.getOrCreateInstance(t).toggle(this)
})
oi(Ss)
Jt(Ss)
const Kb = 'offcanvas',
  Wb = 'bs.offcanvas',
  we = `.${Wb}`,
  Yc = '.data-api',
  Ub = `load${we}${Yc}`,
  Yb = 'Escape',
  vl = 'show',
  bl = 'showing',
  El = 'hiding',
  zb = 'offcanvas-backdrop',
  zc = '.offcanvas.show',
  Gb = `show${we}`,
  qb = `shown${we}`,
  Qb = `hide${we}`,
  yl = `hidePrevented${we}`,
  Gc = `hidden${we}`,
  Xb = `resize${we}`,
  Jb = `click${we}${Yc}`,
  Zb = `keydown.dismiss${we}`,
  tE = '[data-bs-toggle="offcanvas"]',
  eE = { backdrop: !0, keyboard: !0, scroll: !1 },
  sE = { backdrop: '(boolean|string)', keyboard: 'boolean', scroll: 'boolean' }
class De extends oe {
  constructor(t, s) {
    super(t, s),
      (this._isShown = !1),
      (this._backdrop = this._initializeBackDrop()),
      (this._focustrap = this._initializeFocusTrap()),
      this._addEventListeners()
  }
  static get Default() {
    return eE
  }
  static get DefaultType() {
    return sE
  }
  static get NAME() {
    return Kb
  }
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t)
  }
  show(t) {
    if (this._isShown || y.trigger(this._element, Gb, { relatedTarget: t }).defaultPrevented) return
    ;(this._isShown = !0),
      this._backdrop.show(),
      this._config.scroll || new io().hide(),
      this._element.setAttribute('aria-modal', !0),
      this._element.setAttribute('role', 'dialog'),
      this._element.classList.add(bl)
    const n = () => {
      ;(!this._config.scroll || this._config.backdrop) && this._focustrap.activate(),
        this._element.classList.add(vl),
        this._element.classList.remove(bl),
        y.trigger(this._element, qb, { relatedTarget: t })
    }
    this._queueCallback(n, this._element, !0)
  }
  hide() {
    if (!this._isShown || y.trigger(this._element, Qb).defaultPrevented) return
    this._focustrap.deactivate(),
      this._element.blur(),
      (this._isShown = !1),
      this._element.classList.add(El),
      this._backdrop.hide()
    const s = () => {
      this._element.classList.remove(vl, El),
        this._element.removeAttribute('aria-modal'),
        this._element.removeAttribute('role'),
        this._config.scroll || new io().reset(),
        y.trigger(this._element, Gc)
    }
    this._queueCallback(s, this._element, !0)
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
  }
  _initializeBackDrop() {
    const t = () => {
        if (this._config.backdrop === 'static') {
          y.trigger(this._element, yl)
          return
        }
        this.hide()
      },
      s = !!this._config.backdrop
    return new Bc({
      className: zb,
      isVisible: s,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: s ? t : null
    })
  }
  _initializeFocusTrap() {
    return new Kc({ trapElement: this._element })
  }
  _addEventListeners() {
    y.on(this._element, Zb, (t) => {
      if (t.key === Yb) {
        if (this._config.keyboard) {
          this.hide()
          return
        }
        y.trigger(this._element, yl)
      }
    })
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const s = De.getOrCreateInstance(this, t)
      if (typeof t == 'string') {
        if (s[t] === void 0 || t.startsWith('_') || t === 'constructor')
          throw new TypeError(`No method named "${t}"`)
        s[t](this)
      }
    })
  }
}
y.on(document, Jb, tE, function (e) {
  const t = F.getElementFromSelector(this)
  if ((['A', 'AREA'].includes(this.tagName) && e.preventDefault(), Re(this))) return
  y.one(t, Gc, () => {
    Ns(this) && this.focus()
  })
  const s = F.findOne(zc)
  s && s !== t && De.getInstance(s).hide(), De.getOrCreateInstance(t).toggle(this)
})
y.on(window, Ub, () => {
  for (const e of F.find(zc)) De.getOrCreateInstance(e).show()
})
y.on(window, Xb, () => {
  for (const e of F.find('[aria-modal][class*=show][class*=offcanvas-]'))
    getComputedStyle(e).position !== 'fixed' && De.getOrCreateInstance(e).hide()
})
oi(De)
Jt(De)
const nE = /^aria-[\w-]*$/i,
  qc = {
    '*': ['class', 'dir', 'id', 'lang', 'role', nE],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    dd: [],
    div: [],
    dl: [],
    dt: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  },
  iE = new Set([
    'background',
    'cite',
    'href',
    'itemtype',
    'longdesc',
    'poster',
    'src',
    'xlink:href'
  ]),
  oE = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
  rE = (e, t) => {
    const s = e.nodeName.toLowerCase()
    return t.includes(s)
      ? iE.has(s)
        ? !!oE.test(e.nodeValue)
        : !0
      : t.filter((n) => n instanceof RegExp).some((n) => n.test(s))
  }
function lE(e, t, s) {
  if (!e.length) return e
  if (s && typeof s == 'function') return s(e)
  const i = new window.DOMParser().parseFromString(e, 'text/html'),
    o = [].concat(...i.body.querySelectorAll('*'))
  for (const r of o) {
    const l = r.nodeName.toLowerCase()
    if (!Object.keys(t).includes(l)) {
      r.remove()
      continue
    }
    const a = [].concat(...r.attributes),
      u = [].concat(t['*'] || [], t[l] || [])
    for (const c of a) rE(c, u) || r.removeAttribute(c.nodeName)
  }
  return i.body.innerHTML
}
const aE = 'TemplateFactory',
  cE = {
    allowList: qc,
    content: {},
    extraClass: '',
    html: !1,
    sanitize: !0,
    sanitizeFn: null,
    template: '<div></div>'
  },
  uE = {
    allowList: 'object',
    content: 'object',
    extraClass: '(string|function)',
    html: 'boolean',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    template: 'string'
  },
  fE = { entry: '(string|element|function|null)', selector: '(string|element)' }
class dE extends ln {
  constructor(t) {
    super(), (this._config = this._getConfig(t))
  }
  static get Default() {
    return cE
  }
  static get DefaultType() {
    return uE
  }
  static get NAME() {
    return aE
  }
  getContent() {
    return Object.values(this._config.content)
      .map((t) => this._resolvePossibleFunction(t))
      .filter(Boolean)
  }
  hasContent() {
    return this.getContent().length > 0
  }
  changeContent(t) {
    return this._checkContent(t), (this._config.content = { ...this._config.content, ...t }), this
  }
  toHtml() {
    const t = document.createElement('div')
    t.innerHTML = this._maybeSanitize(this._config.template)
    for (const [i, o] of Object.entries(this._config.content)) this._setContent(t, o, i)
    const s = t.children[0],
      n = this._resolvePossibleFunction(this._config.extraClass)
    return n && s.classList.add(...n.split(' ')), s
  }
  _typeCheckConfig(t) {
    super._typeCheckConfig(t), this._checkContent(t.content)
  }
  _checkContent(t) {
    for (const [s, n] of Object.entries(t)) super._typeCheckConfig({ selector: s, entry: n }, fE)
  }
  _setContent(t, s, n) {
    const i = F.findOne(n, t)
    if (i) {
      if (((s = this._resolvePossibleFunction(s)), !s)) {
        i.remove()
        return
      }
      if (ve(s)) {
        this._putElementInTemplate(Le(s), i)
        return
      }
      if (this._config.html) {
        i.innerHTML = this._maybeSanitize(s)
        return
      }
      i.textContent = s
    }
  }
  _maybeSanitize(t) {
    return this._config.sanitize ? lE(t, this._config.allowList, this._config.sanitizeFn) : t
  }
  _resolvePossibleFunction(t) {
    return It(t, [this])
  }
  _putElementInTemplate(t, s) {
    if (this._config.html) {
      ;(s.innerHTML = ''), s.append(t)
      return
    }
    s.textContent = t.textContent
  }
}
const hE = 'tooltip',
  pE = new Set(['sanitize', 'allowList', 'sanitizeFn']),
  Ni = 'fade',
  mE = 'modal',
  En = 'show',
  _E = '.tooltip-inner',
  wl = `.${mE}`,
  Al = 'hide.bs.modal',
  ks = 'hover',
  Ii = 'focus',
  gE = 'click',
  vE = 'manual',
  bE = 'hide',
  EE = 'hidden',
  yE = 'show',
  wE = 'shown',
  AE = 'inserted',
  TE = 'click',
  xE = 'focusin',
  CE = 'focusout',
  SE = 'mouseenter',
  OE = 'mouseleave',
  $E = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: Qt() ? 'left' : 'right',
    BOTTOM: 'bottom',
    LEFT: Qt() ? 'right' : 'left'
  },
  NE = {
    allowList: qc,
    animation: !0,
    boundary: 'clippingParents',
    container: !1,
    customClass: '',
    delay: 0,
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    html: !1,
    offset: [0, 6],
    placement: 'top',
    popperConfig: null,
    sanitize: !0,
    sanitizeFn: null,
    selector: !1,
    template:
      '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: '',
    trigger: 'hover focus'
  },
  IE = {
    allowList: 'object',
    animation: 'boolean',
    boundary: '(string|element)',
    container: '(string|element|boolean)',
    customClass: '(string|function)',
    delay: '(number|object)',
    fallbackPlacements: 'array',
    html: 'boolean',
    offset: '(array|string|function)',
    placement: '(string|function)',
    popperConfig: '(null|object|function)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    selector: '(string|boolean)',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string'
  }
class Ps extends oe {
  constructor(t, s) {
    if (typeof wc > 'u')
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)")
    super(t, s),
      (this._isEnabled = !0),
      (this._timeout = 0),
      (this._isHovered = null),
      (this._activeTrigger = {}),
      (this._popper = null),
      (this._templateFactory = null),
      (this._newContent = null),
      (this.tip = null),
      this._setListeners(),
      this._config.selector || this._fixTitle()
  }
  static get Default() {
    return NE
  }
  static get DefaultType() {
    return IE
  }
  static get NAME() {
    return hE
  }
  enable() {
    this._isEnabled = !0
  }
  disable() {
    this._isEnabled = !1
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled
  }
  toggle() {
    if (this._isEnabled) {
      if (((this._activeTrigger.click = !this._activeTrigger.click), this._isShown())) {
        this._leave()
        return
      }
      this._enter()
    }
  }
  dispose() {
    clearTimeout(this._timeout),
      y.off(this._element.closest(wl), Al, this._hideModalHandler),
      this._element.getAttribute('data-bs-original-title') &&
        this._element.setAttribute('title', this._element.getAttribute('data-bs-original-title')),
      this._disposePopper(),
      super.dispose()
  }
  show() {
    if (this._element.style.display === 'none')
      throw new Error('Please use show on visible elements')
    if (!(this._isWithContent() && this._isEnabled)) return
    const t = y.trigger(this._element, this.constructor.eventName(yE)),
      n = (xc(this._element) || this._element.ownerDocument.documentElement).contains(this._element)
    if (t.defaultPrevented || !n) return
    this._disposePopper()
    const i = this._getTipElement()
    this._element.setAttribute('aria-describedby', i.getAttribute('id'))
    const { container: o } = this._config
    if (
      (this._element.ownerDocument.documentElement.contains(this.tip) ||
        (o.append(i), y.trigger(this._element, this.constructor.eventName(AE))),
      (this._popper = this._createPopper(i)),
      i.classList.add(En),
      'ontouchstart' in document.documentElement)
    )
      for (const l of [].concat(...document.body.children)) y.on(l, 'mouseover', Hn)
    const r = () => {
      y.trigger(this._element, this.constructor.eventName(wE)),
        this._isHovered === !1 && this._leave(),
        (this._isHovered = !1)
    }
    this._queueCallback(r, this.tip, this._isAnimated())
  }
  hide() {
    if (
      !this._isShown() ||
      y.trigger(this._element, this.constructor.eventName(bE)).defaultPrevented
    )
      return
    if ((this._getTipElement().classList.remove(En), 'ontouchstart' in document.documentElement))
      for (const i of [].concat(...document.body.children)) y.off(i, 'mouseover', Hn)
    ;(this._activeTrigger[gE] = !1),
      (this._activeTrigger[Ii] = !1),
      (this._activeTrigger[ks] = !1),
      (this._isHovered = null)
    const n = () => {
      this._isWithActiveTrigger() ||
        (this._isHovered || this._disposePopper(),
        this._element.removeAttribute('aria-describedby'),
        y.trigger(this._element, this.constructor.eventName(EE)))
    }
    this._queueCallback(n, this.tip, this._isAnimated())
  }
  update() {
    this._popper && this._popper.update()
  }
  _isWithContent() {
    return !!this._getTitle()
  }
  _getTipElement() {
    return (
      this.tip ||
        (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())),
      this.tip
    )
  }
  _createTipElement(t) {
    const s = this._getTemplateFactory(t).toHtml()
    if (!s) return null
    s.classList.remove(Ni, En), s.classList.add(`bs-${this.constructor.NAME}-auto`)
    const n = gg(this.constructor.NAME).toString()
    return s.setAttribute('id', n), this._isAnimated() && s.classList.add(Ni), s
  }
  setContent(t) {
    ;(this._newContent = t), this._isShown() && (this._disposePopper(), this.show())
  }
  _getTemplateFactory(t) {
    return (
      this._templateFactory
        ? this._templateFactory.changeContent(t)
        : (this._templateFactory = new dE({
            ...this._config,
            content: t,
            extraClass: this._resolvePossibleFunction(this._config.customClass)
          })),
      this._templateFactory
    )
  }
  _getContentForTemplate() {
    return { [_E]: this._getTitle() }
  }
  _getTitle() {
    return (
      this._resolvePossibleFunction(this._config.title) ||
      this._element.getAttribute('data-bs-original-title')
    )
  }
  _initializeOnDelegatedTarget(t) {
    return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
  }
  _isAnimated() {
    return this._config.animation || (this.tip && this.tip.classList.contains(Ni))
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(En)
  }
  _createPopper(t) {
    const s = It(this._config.placement, [this, t, this._element]),
      n = $E[s.toUpperCase()]
    return Ho(this._element, t, this._getPopperConfig(n))
  }
  _getOffset() {
    const { offset: t } = this._config
    return typeof t == 'string'
      ? t.split(',').map((s) => Number.parseInt(s, 10))
      : typeof t == 'function'
        ? (s) => t(s, this._element)
        : t
  }
  _resolvePossibleFunction(t) {
    return It(t, [this._element])
  }
  _getPopperConfig(t) {
    const s = {
      placement: t,
      modifiers: [
        { name: 'flip', options: { fallbackPlacements: this._config.fallbackPlacements } },
        { name: 'offset', options: { offset: this._getOffset() } },
        { name: 'preventOverflow', options: { boundary: this._config.boundary } },
        { name: 'arrow', options: { element: `.${this.constructor.NAME}-arrow` } },
        {
          name: 'preSetPlacement',
          enabled: !0,
          phase: 'beforeMain',
          fn: (n) => {
            this._getTipElement().setAttribute('data-popper-placement', n.state.placement)
          }
        }
      ]
    }
    return { ...s, ...It(this._config.popperConfig, [s]) }
  }
  _setListeners() {
    const t = this._config.trigger.split(' ')
    for (const s of t)
      if (s === 'click')
        y.on(this._element, this.constructor.eventName(TE), this._config.selector, (n) => {
          this._initializeOnDelegatedTarget(n).toggle()
        })
      else if (s !== vE) {
        const n = s === ks ? this.constructor.eventName(SE) : this.constructor.eventName(xE),
          i = s === ks ? this.constructor.eventName(OE) : this.constructor.eventName(CE)
        y.on(this._element, n, this._config.selector, (o) => {
          const r = this._initializeOnDelegatedTarget(o)
          ;(r._activeTrigger[o.type === 'focusin' ? Ii : ks] = !0), r._enter()
        }),
          y.on(this._element, i, this._config.selector, (o) => {
            const r = this._initializeOnDelegatedTarget(o)
            ;(r._activeTrigger[o.type === 'focusout' ? Ii : ks] = r._element.contains(
              o.relatedTarget
            )),
              r._leave()
          })
      }
    ;(this._hideModalHandler = () => {
      this._element && this.hide()
    }),
      y.on(this._element.closest(wl), Al, this._hideModalHandler)
  }
  _fixTitle() {
    const t = this._element.getAttribute('title')
    t &&
      (!this._element.getAttribute('aria-label') &&
        !this._element.textContent.trim() &&
        this._element.setAttribute('aria-label', t),
      this._element.setAttribute('data-bs-original-title', t),
      this._element.removeAttribute('title'))
  }
  _enter() {
    if (this._isShown() || this._isHovered) {
      this._isHovered = !0
      return
    }
    ;(this._isHovered = !0),
      this._setTimeout(() => {
        this._isHovered && this.show()
      }, this._config.delay.show)
  }
  _leave() {
    this._isWithActiveTrigger() ||
      ((this._isHovered = !1),
      this._setTimeout(() => {
        this._isHovered || this.hide()
      }, this._config.delay.hide))
  }
  _setTimeout(t, s) {
    clearTimeout(this._timeout), (this._timeout = setTimeout(t, s))
  }
  _isWithActiveTrigger() {
    return Object.values(this._activeTrigger).includes(!0)
  }
  _getConfig(t) {
    const s = be.getDataAttributes(this._element)
    for (const n of Object.keys(s)) pE.has(n) && delete s[n]
    return (
      (t = { ...s, ...(typeof t == 'object' && t ? t : {}) }),
      (t = this._mergeConfigObj(t)),
      (t = this._configAfterMerge(t)),
      this._typeCheckConfig(t),
      t
    )
  }
  _configAfterMerge(t) {
    return (
      (t.container = t.container === !1 ? document.body : Le(t.container)),
      typeof t.delay == 'number' && (t.delay = { show: t.delay, hide: t.delay }),
      typeof t.title == 'number' && (t.title = t.title.toString()),
      typeof t.content == 'number' && (t.content = t.content.toString()),
      t
    )
  }
  _getDelegateConfig() {
    const t = {}
    for (const [s, n] of Object.entries(this._config))
      this.constructor.Default[s] !== n && (t[s] = n)
    return (t.selector = !1), (t.trigger = 'manual'), t
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), (this._popper = null)),
      this.tip && (this.tip.remove(), (this.tip = null))
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const s = Ps.getOrCreateInstance(this, t)
      if (typeof t == 'string') {
        if (typeof s[t] > 'u') throw new TypeError(`No method named "${t}"`)
        s[t]()
      }
    })
  }
}
Jt(Ps)
const PE = 'popover',
  LE = '.popover-header',
  RE = '.popover-body',
  DE = {
    ...Ps.Default,
    content: '',
    offset: [0, 8],
    placement: 'right',
    template:
      '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    trigger: 'click'
  },
  ME = { ...Ps.DefaultType, content: '(null|string|element|function)' }
class Ko extends Ps {
  static get Default() {
    return DE
  }
  static get DefaultType() {
    return ME
  }
  static get NAME() {
    return PE
  }
  _isWithContent() {
    return this._getTitle() || this._getContent()
  }
  _getContentForTemplate() {
    return { [LE]: this._getTitle(), [RE]: this._getContent() }
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content)
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const s = Ko.getOrCreateInstance(this, t)
      if (typeof t == 'string') {
        if (typeof s[t] > 'u') throw new TypeError(`No method named "${t}"`)
        s[t]()
      }
    })
  }
}
Jt(Ko)
const kE = 'scrollspy',
  VE = 'bs.scrollspy',
  Wo = `.${VE}`,
  HE = '.data-api',
  jE = `activate${Wo}`,
  Tl = `click${Wo}`,
  FE = `load${Wo}${HE}`,
  BE = 'dropdown-item',
  os = 'active',
  KE = '[data-bs-spy="scroll"]',
  Pi = '[href]',
  WE = '.nav, .list-group',
  xl = '.nav-link',
  UE = '.nav-item',
  YE = '.list-group-item',
  zE = `${xl}, ${UE} > ${xl}, ${YE}`,
  GE = '.dropdown',
  qE = '.dropdown-toggle',
  QE = {
    offset: null,
    rootMargin: '0px 0px -25%',
    smoothScroll: !1,
    target: null,
    threshold: [0.1, 0.5, 1]
  },
  XE = {
    offset: '(number|null)',
    rootMargin: 'string',
    smoothScroll: 'boolean',
    target: 'element',
    threshold: 'array'
  }
class ai extends oe {
  constructor(t, s) {
    super(t, s),
      (this._targetLinks = new Map()),
      (this._observableSections = new Map()),
      (this._rootElement =
        getComputedStyle(this._element).overflowY === 'visible' ? null : this._element),
      (this._activeTarget = null),
      (this._observer = null),
      (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
      this.refresh()
  }
  static get Default() {
    return QE
  }
  static get DefaultType() {
    return XE
  }
  static get NAME() {
    return kE
  }
  refresh() {
    this._initializeTargetsAndObservables(),
      this._maybeEnableSmoothScroll(),
      this._observer ? this._observer.disconnect() : (this._observer = this._getNewObserver())
    for (const t of this._observableSections.values()) this._observer.observe(t)
  }
  dispose() {
    this._observer.disconnect(), super.dispose()
  }
  _configAfterMerge(t) {
    return (
      (t.target = Le(t.target) || document.body),
      (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin),
      typeof t.threshold == 'string' &&
        (t.threshold = t.threshold.split(',').map((s) => Number.parseFloat(s))),
      t
    )
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll &&
      (y.off(this._config.target, Tl),
      y.on(this._config.target, Tl, Pi, (t) => {
        const s = this._observableSections.get(t.target.hash)
        if (s) {
          t.preventDefault()
          const n = this._rootElement || window,
            i = s.offsetTop - this._element.offsetTop
          if (n.scrollTo) {
            n.scrollTo({ top: i, behavior: 'smooth' })
            return
          }
          n.scrollTop = i
        }
      }))
  }
  _getNewObserver() {
    const t = {
      root: this._rootElement,
      threshold: this._config.threshold,
      rootMargin: this._config.rootMargin
    }
    return new IntersectionObserver((s) => this._observerCallback(s), t)
  }
  _observerCallback(t) {
    const s = (r) => this._targetLinks.get(`#${r.target.id}`),
      n = (r) => {
        ;(this._previousScrollData.visibleEntryTop = r.target.offsetTop), this._process(s(r))
      },
      i = (this._rootElement || document.documentElement).scrollTop,
      o = i >= this._previousScrollData.parentScrollTop
    this._previousScrollData.parentScrollTop = i
    for (const r of t) {
      if (!r.isIntersecting) {
        ;(this._activeTarget = null), this._clearActiveClass(s(r))
        continue
      }
      const l = r.target.offsetTop >= this._previousScrollData.visibleEntryTop
      if (o && l) {
        if ((n(r), !i)) return
        continue
      }
      !o && !l && n(r)
    }
  }
  _initializeTargetsAndObservables() {
    ;(this._targetLinks = new Map()), (this._observableSections = new Map())
    const t = F.find(Pi, this._config.target)
    for (const s of t) {
      if (!s.hash || Re(s)) continue
      const n = F.findOne(decodeURI(s.hash), this._element)
      Ns(n) &&
        (this._targetLinks.set(decodeURI(s.hash), s), this._observableSections.set(s.hash, n))
    }
  }
  _process(t) {
    this._activeTarget !== t &&
      (this._clearActiveClass(this._config.target),
      (this._activeTarget = t),
      t.classList.add(os),
      this._activateParents(t),
      y.trigger(this._element, jE, { relatedTarget: t }))
  }
  _activateParents(t) {
    if (t.classList.contains(BE)) {
      F.findOne(qE, t.closest(GE)).classList.add(os)
      return
    }
    for (const s of F.parents(t, WE)) for (const n of F.prev(s, zE)) n.classList.add(os)
  }
  _clearActiveClass(t) {
    t.classList.remove(os)
    const s = F.find(`${Pi}.${os}`, t)
    for (const n of s) n.classList.remove(os)
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const s = ai.getOrCreateInstance(this, t)
      if (typeof t == 'string') {
        if (s[t] === void 0 || t.startsWith('_') || t === 'constructor')
          throw new TypeError(`No method named "${t}"`)
        s[t]()
      }
    })
  }
}
y.on(window, FE, () => {
  for (const e of F.find(KE)) ai.getOrCreateInstance(e)
})
Jt(ai)
const JE = 'tab',
  ZE = 'bs.tab',
  es = `.${ZE}`,
  ty = `hide${es}`,
  ey = `hidden${es}`,
  sy = `show${es}`,
  ny = `shown${es}`,
  iy = `click${es}`,
  oy = `keydown${es}`,
  ry = `load${es}`,
  ly = 'ArrowLeft',
  Cl = 'ArrowRight',
  ay = 'ArrowUp',
  Sl = 'ArrowDown',
  Li = 'Home',
  Ol = 'End',
  Ue = 'active',
  $l = 'fade',
  Ri = 'show',
  cy = 'dropdown',
  Qc = '.dropdown-toggle',
  uy = '.dropdown-menu',
  Di = `:not(${Qc})`,
  fy = '.list-group, .nav, [role="tablist"]',
  dy = '.nav-item, .list-group-item',
  hy = `.nav-link${Di}, .list-group-item${Di}, [role="tab"]${Di}`,
  Xc = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
  Mi = `${hy}, ${Xc}`,
  py = `.${Ue}[data-bs-toggle="tab"], .${Ue}[data-bs-toggle="pill"], .${Ue}[data-bs-toggle="list"]`
class Os extends oe {
  constructor(t) {
    super(t),
      (this._parent = this._element.closest(fy)),
      this._parent &&
        (this._setInitialAttributes(this._parent, this._getChildren()),
        y.on(this._element, oy, (s) => this._keydown(s)))
  }
  static get NAME() {
    return JE
  }
  show() {
    const t = this._element
    if (this._elemIsActive(t)) return
    const s = this._getActiveElem(),
      n = s ? y.trigger(s, ty, { relatedTarget: t }) : null
    y.trigger(t, sy, { relatedTarget: s }).defaultPrevented ||
      (n && n.defaultPrevented) ||
      (this._deactivate(s, t), this._activate(t, s))
  }
  _activate(t, s) {
    if (!t) return
    t.classList.add(Ue), this._activate(F.getElementFromSelector(t))
    const n = () => {
      if (t.getAttribute('role') !== 'tab') {
        t.classList.add(Ri)
        return
      }
      t.removeAttribute('tabindex'),
        t.setAttribute('aria-selected', !0),
        this._toggleDropDown(t, !0),
        y.trigger(t, ny, { relatedTarget: s })
    }
    this._queueCallback(n, t, t.classList.contains($l))
  }
  _deactivate(t, s) {
    if (!t) return
    t.classList.remove(Ue), t.blur(), this._deactivate(F.getElementFromSelector(t))
    const n = () => {
      if (t.getAttribute('role') !== 'tab') {
        t.classList.remove(Ri)
        return
      }
      t.setAttribute('aria-selected', !1),
        t.setAttribute('tabindex', '-1'),
        this._toggleDropDown(t, !1),
        y.trigger(t, ey, { relatedTarget: s })
    }
    this._queueCallback(n, t, t.classList.contains($l))
  }
  _keydown(t) {
    if (![ly, Cl, ay, Sl, Li, Ol].includes(t.key)) return
    t.stopPropagation(), t.preventDefault()
    const s = this._getChildren().filter((i) => !Re(i))
    let n
    if ([Li, Ol].includes(t.key)) n = s[t.key === Li ? 0 : s.length - 1]
    else {
      const i = [Cl, Sl].includes(t.key)
      n = jo(s, t.target, i, !0)
    }
    n && (n.focus({ preventScroll: !0 }), Os.getOrCreateInstance(n).show())
  }
  _getChildren() {
    return F.find(Mi, this._parent)
  }
  _getActiveElem() {
    return this._getChildren().find((t) => this._elemIsActive(t)) || null
  }
  _setInitialAttributes(t, s) {
    this._setAttributeIfNotExists(t, 'role', 'tablist')
    for (const n of s) this._setInitialAttributesOnChild(n)
  }
  _setInitialAttributesOnChild(t) {
    t = this._getInnerElement(t)
    const s = this._elemIsActive(t),
      n = this._getOuterElement(t)
    t.setAttribute('aria-selected', s),
      n !== t && this._setAttributeIfNotExists(n, 'role', 'presentation'),
      s || t.setAttribute('tabindex', '-1'),
      this._setAttributeIfNotExists(t, 'role', 'tab'),
      this._setInitialAttributesOnTargetPanel(t)
  }
  _setInitialAttributesOnTargetPanel(t) {
    const s = F.getElementFromSelector(t)
    s &&
      (this._setAttributeIfNotExists(s, 'role', 'tabpanel'),
      t.id && this._setAttributeIfNotExists(s, 'aria-labelledby', `${t.id}`))
  }
  _toggleDropDown(t, s) {
    const n = this._getOuterElement(t)
    if (!n.classList.contains(cy)) return
    const i = (o, r) => {
      const l = F.findOne(o, n)
      l && l.classList.toggle(r, s)
    }
    i(Qc, Ue), i(uy, Ri), n.setAttribute('aria-expanded', s)
  }
  _setAttributeIfNotExists(t, s, n) {
    t.hasAttribute(s) || t.setAttribute(s, n)
  }
  _elemIsActive(t) {
    return t.classList.contains(Ue)
  }
  _getInnerElement(t) {
    return t.matches(Mi) ? t : F.findOne(Mi, t)
  }
  _getOuterElement(t) {
    return t.closest(dy) || t
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const s = Os.getOrCreateInstance(this)
      if (typeof t == 'string') {
        if (s[t] === void 0 || t.startsWith('_') || t === 'constructor')
          throw new TypeError(`No method named "${t}"`)
        s[t]()
      }
    })
  }
}
y.on(document, iy, Xc, function (e) {
  ;['A', 'AREA'].includes(this.tagName) && e.preventDefault(),
    !Re(this) && Os.getOrCreateInstance(this).show()
})
y.on(window, ry, () => {
  for (const e of F.find(py)) Os.getOrCreateInstance(e)
})
Jt(Os)
const my = 'toast',
  _y = 'bs.toast',
  je = `.${_y}`,
  gy = `mouseover${je}`,
  vy = `mouseout${je}`,
  by = `focusin${je}`,
  Ey = `focusout${je}`,
  yy = `hide${je}`,
  wy = `hidden${je}`,
  Ay = `show${je}`,
  Ty = `shown${je}`,
  xy = 'fade',
  Nl = 'hide',
  yn = 'show',
  wn = 'showing',
  Cy = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
  Sy = { animation: !0, autohide: !0, delay: 5e3 }
class ci extends oe {
  constructor(t, s) {
    super(t, s),
      (this._timeout = null),
      (this._hasMouseInteraction = !1),
      (this._hasKeyboardInteraction = !1),
      this._setListeners()
  }
  static get Default() {
    return Sy
  }
  static get DefaultType() {
    return Cy
  }
  static get NAME() {
    return my
  }
  show() {
    if (y.trigger(this._element, Ay).defaultPrevented) return
    this._clearTimeout(), this._config.animation && this._element.classList.add(xy)
    const s = () => {
      this._element.classList.remove(wn), y.trigger(this._element, Ty), this._maybeScheduleHide()
    }
    this._element.classList.remove(Nl),
      rn(this._element),
      this._element.classList.add(yn, wn),
      this._queueCallback(s, this._element, this._config.animation)
  }
  hide() {
    if (!this.isShown() || y.trigger(this._element, yy).defaultPrevented) return
    const s = () => {
      this._element.classList.add(Nl),
        this._element.classList.remove(wn, yn),
        y.trigger(this._element, wy)
    }
    this._element.classList.add(wn), this._queueCallback(s, this._element, this._config.animation)
  }
  dispose() {
    this._clearTimeout(), this.isShown() && this._element.classList.remove(yn), super.dispose()
  }
  isShown() {
    return this._element.classList.contains(yn)
  }
  _maybeScheduleHide() {
    this._config.autohide &&
      (this._hasMouseInteraction ||
        this._hasKeyboardInteraction ||
        (this._timeout = setTimeout(() => {
          this.hide()
        }, this._config.delay)))
  }
  _onInteraction(t, s) {
    switch (t.type) {
      case 'mouseover':
      case 'mouseout': {
        this._hasMouseInteraction = s
        break
      }
      case 'focusin':
      case 'focusout': {
        this._hasKeyboardInteraction = s
        break
      }
    }
    if (s) {
      this._clearTimeout()
      return
    }
    const n = t.relatedTarget
    this._element === n || this._element.contains(n) || this._maybeScheduleHide()
  }
  _setListeners() {
    y.on(this._element, gy, (t) => this._onInteraction(t, !0)),
      y.on(this._element, vy, (t) => this._onInteraction(t, !1)),
      y.on(this._element, by, (t) => this._onInteraction(t, !0)),
      y.on(this._element, Ey, (t) => this._onInteraction(t, !1))
  }
  _clearTimeout() {
    clearTimeout(this._timeout), (this._timeout = null)
  }
  static jQueryInterface(t) {
    return this.each(function () {
      const s = ci.getOrCreateInstance(this, t)
      if (typeof t == 'string') {
        if (typeof s[t] > 'u') throw new TypeError(`No method named "${t}"`)
        s[t](this)
      }
    })
  }
}
oi(ci)
Jt(ci)
document.addEventListener('DOMContentLoaded', () => {
  const e = 'AIzaSyAA1yQc2nuq3fV2-2fTgpbGywbgzigRrCc',
    t = document.createElement('script')
  ;(t.src = `https://maps.googleapis.com/maps/api/js?key=${e}&callback=initMap&libraries=maps,marker&v=beta`),
    (t.async = !0),
    document.head.appendChild(t)
})
window.initMap = () => {
  const e = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 25.052026748657227, lng: 121.53743743896484 },
    zoom: 14,
    mapId: 'DEMO_MAP_ID'
  })
  new google.maps.Marker({
    position: { lat: 25.052026748657227, lng: 121.53743743896484 },
    map: e,
    title: 'My location'
  })
}
const Uo = Ed(Ud)
Uo.use(xd())
Uo.use(S_)
Uo.mount('#app')
