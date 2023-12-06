const {
  SvelteComponent: _s,
  append: cn,
  attr: Et,
  binding_callbacks: li,
  create_slot: ds,
  detach: ms,
  element: hn,
  get_all_dirty_from_scope: gs,
  get_slot_changes: bs,
  init: ps,
  insert: vs,
  listen: ut,
  run_all: ws,
  safe_not_equal: ys,
  set_style: oi,
  space: Es,
  toggle_class: ai,
  transition_in: Ss,
  transition_out: Ts,
  update_slot_base: Bs
} = window.__gradio__svelte__internal, { onMount: As } = window.__gradio__svelte__internal;
function Hs(e) {
  let t, n, i, r, s, l, o;
  const a = (
    /*#slots*/
    e[10].default
  ), u = ds(
    a,
    e,
    /*$$scope*/
    e[9],
    null
  );
  return {
    c() {
      t = hn("div"), u && u.c(), n = Es(), i = hn("div"), r = hn("div"), Et(r, "class", "inner svelte-klzkec"), Et(i, "class", "outer svelte-klzkec"), Et(i, "role", "none"), oi(i, "transform", "translateX(" + /*px*/
      e[3] + "px)"), ai(
        i,
        "disabled",
        /*disabled*/
        e[0]
      ), Et(t, "class", "wrap svelte-klzkec");
    },
    m(f, c) {
      vs(f, t, c), u && u.m(t, null), cn(t, n), cn(t, i), cn(i, r), e[11](i), e[12](t), s = !0, l || (o = [
        ut(
          window,
          "resize",
          /*set_position*/
          e[7]
        ),
        ut(
          window,
          "mousemove",
          /*handle_mousemove*/
          e[6]
        ),
        ut(
          window,
          "mouseup",
          /*handle_mouseup*/
          e[5]
        ),
        ut(
          i,
          "mousedown",
          /*handle_mousedown*/
          e[4]
        ),
        ut(
          i,
          "mouseup",
          /*handle_mouseup*/
          e[5]
        )
      ], l = !0);
    },
    p(f, [c]) {
      u && u.p && (!s || c & /*$$scope*/
      512) && Bs(
        u,
        a,
        f,
        /*$$scope*/
        f[9],
        s ? bs(
          a,
          /*$$scope*/
          f[9],
          c,
          null
        ) : gs(
          /*$$scope*/
          f[9]
        ),
        null
      ), (!s || c & /*px*/
      8) && oi(i, "transform", "translateX(" + /*px*/
      f[3] + "px)"), (!s || c & /*disabled*/
      1) && ai(
        i,
        "disabled",
        /*disabled*/
        f[0]
      );
    },
    i(f) {
      s || (Ss(u, f), s = !0);
    },
    o(f) {
      Ts(u, f), s = !1;
    },
    d(f) {
      f && ms(t), u && u.d(f), e[11](null), e[12](null), l = !1, ws(o);
    }
  };
}
function Ns(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
function Ps(e, t) {
  const n = Math.pow(10, t);
  return Math.round((e + Number.EPSILON) * n) / n;
}
function ks(e, t, n) {
  let { $$slots: i = {}, $$scope: r } = t, { position: s = 0.5 } = t, { disabled: l = !1 } = t, o = !1, a, u, f, c = 0, h = 0;
  function _(g) {
    if (l)
      return;
    o = !0, f = a.getBoundingClientRect();
    const y = u.getBoundingClientRect();
    h = g.clientX - y.left;
  }
  function d(g) {
    o = !1;
  }
  function b(g) {
    o && (n(3, c = Ns(g.clientX - h - f.left, -10, f.width - 10)), n(8, s = Ps((c + 10) / f.width, 5)));
  }
  function v() {
    f = a.getBoundingClientRect(), n(3, c = f.width * s - 10);
  }
  As(v);
  function E(g) {
    li[g ? "unshift" : "push"](() => {
      u = g, n(2, u);
    });
  }
  function S(g) {
    li[g ? "unshift" : "push"](() => {
      a = g, n(1, a);
    });
  }
  return e.$$set = (g) => {
    "position" in g && n(8, s = g.position), "disabled" in g && n(0, l = g.disabled), "$$scope" in g && n(9, r = g.$$scope);
  }, [
    l,
    a,
    u,
    c,
    _,
    d,
    b,
    v,
    s,
    r,
    i,
    E,
    S
  ];
}
class hr extends _s {
  constructor(t) {
    super(), ps(this, t, ks, Hs, ys, { position: 8, disabled: 0 });
  }
}
const {
  SvelteComponent: Cs,
  assign: Is,
  create_slot: Os,
  detach: Ls,
  element: Ms,
  get_all_dirty_from_scope: Rs,
  get_slot_changes: Ds,
  get_spread_update: Us,
  init: Fs,
  insert: Gs,
  safe_not_equal: xs,
  set_dynamic_element_data: ui,
  set_style: ne,
  toggle_class: Ae,
  transition_in: _r,
  transition_out: dr,
  update_slot_base: qs
} = window.__gradio__svelte__internal;
function js(e) {
  let t, n, i;
  const r = (
    /*#slots*/
    e[17].default
  ), s = Os(
    r,
    e,
    /*$$scope*/
    e[16],
    null
  );
  let l = [
    { "data-testid": (
      /*test_id*/
      e[7]
    ) },
    { id: (
      /*elem_id*/
      e[2]
    ) },
    {
      class: n = "block " + /*elem_classes*/
      e[3].join(" ") + " svelte-1t38q2d"
    }
  ], o = {};
  for (let a = 0; a < l.length; a += 1)
    o = Is(o, l[a]);
  return {
    c() {
      t = Ms(
        /*tag*/
        e[14]
      ), s && s.c(), ui(
        /*tag*/
        e[14]
      )(t, o), Ae(
        t,
        "hidden",
        /*visible*/
        e[10] === !1
      ), Ae(
        t,
        "padded",
        /*padding*/
        e[6]
      ), Ae(
        t,
        "border_focus",
        /*border_mode*/
        e[5] === "focus"
      ), Ae(t, "hide-container", !/*explicit_call*/
      e[8] && !/*container*/
      e[9]), ne(t, "height", typeof /*height*/
      e[0] == "number" ? (
        /*height*/
        e[0] + "px"
      ) : void 0), ne(t, "width", typeof /*width*/
      e[1] == "number" ? `calc(min(${/*width*/
      e[1]}px, 100%))` : void 0), ne(
        t,
        "border-style",
        /*variant*/
        e[4]
      ), ne(
        t,
        "overflow",
        /*allow_overflow*/
        e[11] ? "visible" : "hidden"
      ), ne(
        t,
        "flex-grow",
        /*scale*/
        e[12]
      ), ne(t, "min-width", `calc(min(${/*min_width*/
      e[13]}px, 100%))`), ne(t, "border-width", "var(--block-border-width)");
    },
    m(a, u) {
      Gs(a, t, u), s && s.m(t, null), i = !0;
    },
    p(a, u) {
      s && s.p && (!i || u & /*$$scope*/
      65536) && qs(
        s,
        r,
        a,
        /*$$scope*/
        a[16],
        i ? Ds(
          r,
          /*$$scope*/
          a[16],
          u,
          null
        ) : Rs(
          /*$$scope*/
          a[16]
        ),
        null
      ), ui(
        /*tag*/
        a[14]
      )(t, o = Us(l, [
        (!i || u & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          a[7]
        ) },
        (!i || u & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          a[2]
        ) },
        (!i || u & /*elem_classes*/
        8 && n !== (n = "block " + /*elem_classes*/
        a[3].join(" ") + " svelte-1t38q2d")) && { class: n }
      ])), Ae(
        t,
        "hidden",
        /*visible*/
        a[10] === !1
      ), Ae(
        t,
        "padded",
        /*padding*/
        a[6]
      ), Ae(
        t,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), Ae(t, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), u & /*height*/
      1 && ne(t, "height", typeof /*height*/
      a[0] == "number" ? (
        /*height*/
        a[0] + "px"
      ) : void 0), u & /*width*/
      2 && ne(t, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : void 0), u & /*variant*/
      16 && ne(
        t,
        "border-style",
        /*variant*/
        a[4]
      ), u & /*allow_overflow*/
      2048 && ne(
        t,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), u & /*scale*/
      4096 && ne(
        t,
        "flex-grow",
        /*scale*/
        a[12]
      ), u & /*min_width*/
      8192 && ne(t, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      i || (_r(s, a), i = !0);
    },
    o(a) {
      dr(s, a), i = !1;
    },
    d(a) {
      a && Ls(t), s && s.d(a);
    }
  };
}
function Vs(e) {
  let t, n = (
    /*tag*/
    e[14] && js(e)
  );
  return {
    c() {
      n && n.c();
    },
    m(i, r) {
      n && n.m(i, r), t = !0;
    },
    p(i, [r]) {
      /*tag*/
      i[14] && n.p(i, r);
    },
    i(i) {
      t || (_r(n, i), t = !0);
    },
    o(i) {
      dr(n, i), t = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function zs(e, t, n) {
  let { $$slots: i = {}, $$scope: r } = t, { height: s = void 0 } = t, { width: l = void 0 } = t, { elem_id: o = "" } = t, { elem_classes: a = [] } = t, { variant: u = "solid" } = t, { border_mode: f = "base" } = t, { padding: c = !0 } = t, { type: h = "normal" } = t, { test_id: _ = void 0 } = t, { explicit_call: d = !1 } = t, { container: b = !0 } = t, { visible: v = !0 } = t, { allow_overflow: E = !0 } = t, { scale: S = null } = t, { min_width: g = 0 } = t, y = h === "fieldset" ? "fieldset" : "div";
  return e.$$set = (m) => {
    "height" in m && n(0, s = m.height), "width" in m && n(1, l = m.width), "elem_id" in m && n(2, o = m.elem_id), "elem_classes" in m && n(3, a = m.elem_classes), "variant" in m && n(4, u = m.variant), "border_mode" in m && n(5, f = m.border_mode), "padding" in m && n(6, c = m.padding), "type" in m && n(15, h = m.type), "test_id" in m && n(7, _ = m.test_id), "explicit_call" in m && n(8, d = m.explicit_call), "container" in m && n(9, b = m.container), "visible" in m && n(10, v = m.visible), "allow_overflow" in m && n(11, E = m.allow_overflow), "scale" in m && n(12, S = m.scale), "min_width" in m && n(13, g = m.min_width), "$$scope" in m && n(16, r = m.$$scope);
  }, [
    s,
    l,
    o,
    a,
    u,
    f,
    c,
    _,
    d,
    b,
    v,
    E,
    S,
    g,
    y,
    h,
    r,
    i
  ];
}
class mr extends Cs {
  constructor(t) {
    super(), Fs(this, t, zs, Vs, xs, {
      height: 0,
      width: 1,
      elem_id: 2,
      elem_classes: 3,
      variant: 4,
      border_mode: 5,
      padding: 6,
      type: 15,
      test_id: 7,
      explicit_call: 8,
      container: 9,
      visible: 10,
      allow_overflow: 11,
      scale: 12,
      min_width: 13
    });
  }
}
const {
  SvelteComponent: Xs,
  append: _n,
  attr: St,
  create_component: Ws,
  destroy_component: Zs,
  detach: Js,
  element: fi,
  init: Qs,
  insert: Ys,
  mount_component: Ks,
  safe_not_equal: $s,
  set_data: el,
  space: tl,
  text: nl,
  toggle_class: He,
  transition_in: il,
  transition_out: rl
} = window.__gradio__svelte__internal;
function sl(e) {
  let t, n, i, r, s, l;
  return i = new /*Icon*/
  e[1]({}), {
    c() {
      t = fi("label"), n = fi("span"), Ws(i.$$.fragment), r = tl(), s = nl(
        /*label*/
        e[0]
      ), St(n, "class", "svelte-9gxdi0"), St(t, "for", ""), St(t, "data-testid", "block-label"), St(t, "class", "svelte-9gxdi0"), He(t, "hide", !/*show_label*/
      e[2]), He(t, "sr-only", !/*show_label*/
      e[2]), He(
        t,
        "float",
        /*float*/
        e[4]
      ), He(
        t,
        "hide-label",
        /*disable*/
        e[3]
      );
    },
    m(o, a) {
      Ys(o, t, a), _n(t, n), Ks(i, n, null), _n(t, r), _n(t, s), l = !0;
    },
    p(o, [a]) {
      (!l || a & /*label*/
      1) && el(
        s,
        /*label*/
        o[0]
      ), (!l || a & /*show_label*/
      4) && He(t, "hide", !/*show_label*/
      o[2]), (!l || a & /*show_label*/
      4) && He(t, "sr-only", !/*show_label*/
      o[2]), (!l || a & /*float*/
      16) && He(
        t,
        "float",
        /*float*/
        o[4]
      ), (!l || a & /*disable*/
      8) && He(
        t,
        "hide-label",
        /*disable*/
        o[3]
      );
    },
    i(o) {
      l || (il(i.$$.fragment, o), l = !0);
    },
    o(o) {
      rl(i.$$.fragment, o), l = !1;
    },
    d(o) {
      o && Js(t), Zs(i);
    }
  };
}
function ll(e, t, n) {
  let { label: i = null } = t, { Icon: r } = t, { show_label: s = !0 } = t, { disable: l = !1 } = t, { float: o = !0 } = t;
  return e.$$set = (a) => {
    "label" in a && n(0, i = a.label), "Icon" in a && n(1, r = a.Icon), "show_label" in a && n(2, s = a.show_label), "disable" in a && n(3, l = a.disable), "float" in a && n(4, o = a.float);
  }, [i, r, s, l, o];
}
class gr extends Xs {
  constructor(t) {
    super(), Qs(this, t, ll, sl, $s, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: ol,
  append: al,
  attr: dn,
  binding_callbacks: ul,
  create_slot: fl,
  detach: cl,
  element: ci,
  get_all_dirty_from_scope: hl,
  get_slot_changes: _l,
  init: dl,
  insert: ml,
  safe_not_equal: gl,
  toggle_class: Ne,
  transition_in: bl,
  transition_out: pl,
  update_slot_base: vl
} = window.__gradio__svelte__internal;
function wl(e) {
  let t, n, i;
  const r = (
    /*#slots*/
    e[5].default
  ), s = fl(
    r,
    e,
    /*$$scope*/
    e[4],
    null
  );
  return {
    c() {
      t = ci("div"), n = ci("div"), s && s.c(), dn(n, "class", "icon svelte-3w3rth"), dn(t, "class", "empty svelte-3w3rth"), dn(t, "aria-label", "Empty value"), Ne(
        t,
        "small",
        /*size*/
        e[0] === "small"
      ), Ne(
        t,
        "large",
        /*size*/
        e[0] === "large"
      ), Ne(
        t,
        "unpadded_box",
        /*unpadded_box*/
        e[1]
      ), Ne(
        t,
        "small_parent",
        /*parent_height*/
        e[3]
      );
    },
    m(l, o) {
      ml(l, t, o), al(t, n), s && s.m(n, null), e[6](t), i = !0;
    },
    p(l, [o]) {
      s && s.p && (!i || o & /*$$scope*/
      16) && vl(
        s,
        r,
        l,
        /*$$scope*/
        l[4],
        i ? _l(
          r,
          /*$$scope*/
          l[4],
          o,
          null
        ) : hl(
          /*$$scope*/
          l[4]
        ),
        null
      ), (!i || o & /*size*/
      1) && Ne(
        t,
        "small",
        /*size*/
        l[0] === "small"
      ), (!i || o & /*size*/
      1) && Ne(
        t,
        "large",
        /*size*/
        l[0] === "large"
      ), (!i || o & /*unpadded_box*/
      2) && Ne(
        t,
        "unpadded_box",
        /*unpadded_box*/
        l[1]
      ), (!i || o & /*parent_height*/
      8) && Ne(
        t,
        "small_parent",
        /*parent_height*/
        l[3]
      );
    },
    i(l) {
      i || (bl(s, l), i = !0);
    },
    o(l) {
      pl(s, l), i = !1;
    },
    d(l) {
      l && cl(t), s && s.d(l), e[6](null);
    }
  };
}
function yl(e) {
  let t, n = e[0], i = 1;
  for (; i < e.length; ) {
    const r = e[i], s = e[i + 1];
    if (i += 2, (r === "optionalAccess" || r === "optionalCall") && n == null)
      return;
    r === "access" || r === "optionalAccess" ? (t = n, n = s(n)) : (r === "call" || r === "optionalCall") && (n = s((...l) => n.call(t, ...l)), t = void 0);
  }
  return n;
}
function El(e, t, n) {
  let i, { $$slots: r = {}, $$scope: s } = t, { size: l = "small" } = t, { unpadded_box: o = !1 } = t, a;
  function u(c) {
    if (!c)
      return !1;
    const { height: h } = c.getBoundingClientRect(), { height: _ } = yl([
      c,
      "access",
      (d) => d.parentElement,
      "optionalAccess",
      (d) => d.getBoundingClientRect,
      "call",
      (d) => d()
    ]) || { height: h };
    return h > _ + 2;
  }
  function f(c) {
    ul[c ? "unshift" : "push"](() => {
      a = c, n(2, a);
    });
  }
  return e.$$set = (c) => {
    "size" in c && n(0, l = c.size), "unpadded_box" in c && n(1, o = c.unpadded_box), "$$scope" in c && n(4, s = c.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*el*/
    4 && n(3, i = u(a));
  }, [l, o, a, i, s, r, f];
}
class Sl extends ol {
  constructor(t) {
    super(), dl(this, t, El, wl, gl, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: Tl,
  append: mn,
  attr: x,
  detach: Bl,
  init: Al,
  insert: Hl,
  noop: gn,
  safe_not_equal: Nl,
  svg_element: Tt
} = window.__gradio__svelte__internal;
function Pl(e) {
  let t, n, i, r;
  return {
    c() {
      t = Tt("svg"), n = Tt("rect"), i = Tt("circle"), r = Tt("polyline"), x(n, "x", "3"), x(n, "y", "3"), x(n, "width", "18"), x(n, "height", "18"), x(n, "rx", "2"), x(n, "ry", "2"), x(i, "cx", "8.5"), x(i, "cy", "8.5"), x(i, "r", "1.5"), x(r, "points", "21 15 16 10 5 21"), x(t, "xmlns", "http://www.w3.org/2000/svg"), x(t, "width", "100%"), x(t, "height", "100%"), x(t, "viewBox", "0 0 24 24"), x(t, "fill", "none"), x(t, "stroke", "currentColor"), x(t, "stroke-width", "1.5"), x(t, "stroke-linecap", "round"), x(t, "stroke-linejoin", "round"), x(t, "class", "feather feather-image");
    },
    m(s, l) {
      Hl(s, t, l), mn(t, n), mn(t, i), mn(t, r);
    },
    p: gn,
    i: gn,
    o: gn,
    d(s) {
      s && Bl(t);
    }
  };
}
class ti extends Tl {
  constructor(t) {
    super(), Al(this, t, null, Pl, Nl, {});
  }
}
const {
  SvelteComponent: kl,
  append: bn,
  attr: W,
  detach: Cl,
  init: Il,
  insert: Ol,
  noop: pn,
  safe_not_equal: Ll,
  svg_element: Bt
} = window.__gradio__svelte__internal;
function Ml(e) {
  let t, n, i, r;
  return {
    c() {
      t = Bt("svg"), n = Bt("path"), i = Bt("polyline"), r = Bt("line"), W(n, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), W(i, "points", "17 8 12 3 7 8"), W(r, "x1", "12"), W(r, "y1", "3"), W(r, "x2", "12"), W(r, "y2", "15"), W(t, "xmlns", "http://www.w3.org/2000/svg"), W(t, "width", "90%"), W(t, "height", "90%"), W(t, "viewBox", "0 0 24 24"), W(t, "fill", "none"), W(t, "stroke", "currentColor"), W(t, "stroke-width", "2"), W(t, "stroke-linecap", "round"), W(t, "stroke-linejoin", "round"), W(t, "class", "feather feather-upload");
    },
    m(s, l) {
      Ol(s, t, l), bn(t, n), bn(t, i), bn(t, r);
    },
    p: pn,
    i: pn,
    o: pn,
    d(s) {
      s && Cl(t);
    }
  };
}
let Rl = class extends kl {
  constructor(t) {
    super(), Il(this, t, null, Ml, Ll, {});
  }
};
const Dl = [
  { color: "red", primary: 600, secondary: 100 },
  { color: "green", primary: 600, secondary: 100 },
  { color: "blue", primary: 600, secondary: 100 },
  { color: "yellow", primary: 500, secondary: 100 },
  { color: "purple", primary: 600, secondary: 100 },
  { color: "teal", primary: 600, secondary: 100 },
  { color: "orange", primary: 600, secondary: 100 },
  { color: "cyan", primary: 600, secondary: 100 },
  { color: "lime", primary: 500, secondary: 100 },
  { color: "pink", primary: 600, secondary: 100 }
], hi = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  }
};
Dl.reduce(
  (e, { color: t, primary: n, secondary: i }) => ({
    ...e,
    [t]: {
      primary: hi[t][n],
      secondary: hi[t][i]
    }
  }),
  {}
);
const {
  SvelteComponent: Ul,
  append: Fe,
  attr: Cn,
  create_component: Fl,
  destroy_component: Gl,
  detach: kt,
  element: In,
  init: xl,
  insert: Ct,
  mount_component: ql,
  safe_not_equal: jl,
  set_data: On,
  space: Ln,
  text: ht,
  toggle_class: _i,
  transition_in: Vl,
  transition_out: zl
} = window.__gradio__svelte__internal;
function di(e) {
  let t, n, i = (
    /*i18n*/
    e[1]("common.or") + ""
  ), r, s, l, o = (
    /*message*/
    (e[2] || /*i18n*/
    e[1]("upload_text.click_to_upload")) + ""
  ), a;
  return {
    c() {
      t = In("span"), n = ht("- "), r = ht(i), s = ht(" -"), l = Ln(), a = ht(o), Cn(t, "class", "or svelte-kzcjhc");
    },
    m(u, f) {
      Ct(u, t, f), Fe(t, n), Fe(t, r), Fe(t, s), Ct(u, l, f), Ct(u, a, f);
    },
    p(u, f) {
      f & /*i18n*/
      2 && i !== (i = /*i18n*/
      u[1]("common.or") + "") && On(r, i), f & /*message, i18n*/
      6 && o !== (o = /*message*/
      (u[2] || /*i18n*/
      u[1]("upload_text.click_to_upload")) + "") && On(a, o);
    },
    d(u) {
      u && (kt(t), kt(l), kt(a));
    }
  };
}
function Xl(e) {
  let t, n, i, r, s = (
    /*i18n*/
    e[1](
      /*defs*/
      e[5][
        /*type*/
        e[0]
      ] || /*defs*/
      e[5].file
    ) + ""
  ), l, o, a;
  i = new Rl({});
  let u = (
    /*mode*/
    e[3] !== "short" && di(e)
  );
  return {
    c() {
      t = In("div"), n = In("span"), Fl(i.$$.fragment), r = Ln(), l = ht(s), o = Ln(), u && u.c(), Cn(n, "class", "icon-wrap svelte-kzcjhc"), _i(
        n,
        "hovered",
        /*hovered*/
        e[4]
      ), Cn(t, "class", "wrap svelte-kzcjhc");
    },
    m(f, c) {
      Ct(f, t, c), Fe(t, n), ql(i, n, null), Fe(t, r), Fe(t, l), Fe(t, o), u && u.m(t, null), a = !0;
    },
    p(f, [c]) {
      (!a || c & /*hovered*/
      16) && _i(
        n,
        "hovered",
        /*hovered*/
        f[4]
      ), (!a || c & /*i18n, type*/
      3) && s !== (s = /*i18n*/
      f[1](
        /*defs*/
        f[5][
          /*type*/
          f[0]
        ] || /*defs*/
        f[5].file
      ) + "") && On(l, s), /*mode*/
      f[3] !== "short" ? u ? u.p(f, c) : (u = di(f), u.c(), u.m(t, null)) : u && (u.d(1), u = null);
    },
    i(f) {
      a || (Vl(i.$$.fragment, f), a = !0);
    },
    o(f) {
      zl(i.$$.fragment, f), a = !1;
    },
    d(f) {
      f && kt(t), Gl(i), u && u.d();
    }
  };
}
function Wl(e, t, n) {
  let { type: i = "file" } = t, { i18n: r } = t, { message: s = void 0 } = t, { mode: l = "full" } = t, { hovered: o = !1 } = t;
  const a = {
    image: "upload_text.drop_image",
    video: "upload_text.drop_video",
    audio: "upload_text.drop_audio",
    file: "upload_text.drop_file",
    csv: "upload_text.drop_csv"
  };
  return e.$$set = (u) => {
    "type" in u && n(0, i = u.type), "i18n" in u && n(1, r = u.i18n), "message" in u && n(2, s = u.message), "mode" in u && n(3, l = u.mode), "hovered" in u && n(4, o = u.hovered);
  }, [i, r, s, l, o, a];
}
class Zl extends Ul {
  constructor(t) {
    super(), xl(this, t, Wl, Xl, jl, {
      type: 0,
      i18n: 1,
      message: 2,
      mode: 3,
      hovered: 4
    });
  }
}
var vn = new Intl.Collator(0, { numeric: 1 }).compare;
function mi(e, t, n) {
  return e = e.split("."), t = t.split("."), vn(e[0], t[0]) || vn(e[1], t[1]) || (t[2] = t.slice(2).join("."), n = /[.-]/.test(e[2] = e.slice(2).join(".")), n == /[.-]/.test(t[2]) ? vn(e[2], t[2]) : n ? -1 : 1);
}
function ke(e, t, n) {
  return t.startsWith("http://") || t.startsWith("https://") ? n ? e : t : e + t;
}
function wn(e) {
  if (e.startsWith("http")) {
    const { protocol: t, host: n } = new URL(e);
    return n.endsWith("hf.space") ? {
      ws_protocol: "wss",
      host: n,
      http_protocol: t
    } : {
      ws_protocol: t === "https:" ? "wss" : "ws",
      http_protocol: t,
      host: n
    };
  } else if (e.startsWith("file:"))
    return {
      ws_protocol: "ws",
      http_protocol: "http:",
      host: "lite.local"
      // Special fake hostname only used for this case. This matches the hostname allowed in `is_self_host()` in `js/wasm/network/host.ts`.
    };
  return {
    ws_protocol: "wss",
    http_protocol: "https:",
    host: e
  };
}
const br = /^[^\/]*\/[^\/]*$/, Jl = /.*hf\.space\/{0,1}$/;
async function Ql(e, t) {
  const n = {};
  t && (n.Authorization = `Bearer ${t}`);
  const i = e.trim();
  if (br.test(i))
    try {
      const r = await fetch(
        `https://huggingface.co/api/spaces/${i}/host`,
        { headers: n }
      );
      if (r.status !== 200)
        throw new Error("Space metadata could not be loaded.");
      const s = (await r.json()).host;
      return {
        space_id: e,
        ...wn(s)
      };
    } catch (r) {
      throw new Error("Space metadata could not be loaded." + r.message);
    }
  if (Jl.test(i)) {
    const { ws_protocol: r, http_protocol: s, host: l } = wn(i);
    return {
      space_id: l.replace(".hf.space", ""),
      ws_protocol: r,
      http_protocol: s,
      host: l
    };
  }
  return {
    space_id: !1,
    ...wn(i)
  };
}
function Yl(e) {
  let t = {};
  return e.forEach(({ api_name: n }, i) => {
    n && (t[n] = i);
  }), t;
}
const Kl = /^(?=[^]*\b[dD]iscussions{0,1}\b)(?=[^]*\b[dD]isabled\b)[^]*$/;
async function gi(e) {
  try {
    const n = (await fetch(
      `https://huggingface.co/api/spaces/${e}/discussions`,
      {
        method: "HEAD"
      }
    )).headers.get("x-error-message");
    return !(n && Kl.test(n));
  } catch {
    return !1;
  }
}
function ge(e, t, n) {
  if (e == null)
    return null;
  if (Array.isArray(e)) {
    const i = [];
    for (const r of e)
      r == null ? i.push(null) : i.push(ge(r, t, n));
    return i;
  }
  return e.is_stream ? n == null ? new We({
    ...e,
    url: t + "/stream/" + e.path
  }) : new We({
    ...e,
    url: "/proxy=" + n + "stream/" + e.path
  }) : new We({
    ...e,
    url: eo(e.path, t, n)
  });
}
function $l(e) {
  try {
    const t = new URL(e);
    return t.protocol === "http:" || t.protocol === "https:";
  } catch {
    return !1;
  }
}
function eo(e, t, n) {
  return e == null ? n ? `/proxy=${n}file=` : `${t}/file=` : $l(e) ? e : n ? `/proxy=${n}file=${e}` : `${t}/file=${e}`;
}
async function to(e, t, n, i = so) {
  let r = (Array.isArray(e) ? e : [e]).map(
    (s) => s.blob
  );
  return await Promise.all(
    await i(t, r, void 0, n).then(
      async (s) => {
        if (s.error)
          throw new Error(s.error);
        return s.files ? s.files.map((l, o) => {
          const a = new We({ ...e[o], path: l });
          return ge(a, t, null);
        }) : [];
      }
    )
  );
}
async function no(e, t) {
  return e.map(
    (n, i) => new We({
      path: n.name,
      orig_name: n.name,
      blob: n,
      size: n.size,
      mime_type: n.type,
      is_stream: t
    })
  );
}
class We {
  constructor({
    path: t,
    url: n,
    orig_name: i,
    size: r,
    blob: s,
    is_stream: l,
    mime_type: o,
    alt_text: a
  }) {
    this.path = t, this.url = n, this.orig_name = i, this.size = r, this.blob = n ? void 0 : s, this.is_stream = l, this.mime_type = o, this.alt_text = a;
  }
}
const io = "This application is too busy. Keep trying!", ft = "Connection errored out.";
let pr;
function ro(e, t) {
  return { post_data: n, upload_files: i, client: r, handle_blob: s };
  async function n(l, o, a) {
    const u = { "Content-Type": "application/json" };
    a && (u.Authorization = `Bearer ${a}`);
    try {
      var f = await e(l, {
        method: "POST",
        body: JSON.stringify(o),
        headers: u
      });
    } catch {
      return [{ error: ft }, 500];
    }
    return [await f.json(), f.status];
  }
  async function i(l, o, a, u) {
    const f = {};
    a && (f.Authorization = `Bearer ${a}`);
    const c = 1e3, h = [];
    for (let d = 0; d < o.length; d += c) {
      const b = o.slice(d, d + c), v = new FormData();
      b.forEach((S) => {
        v.append("files", S);
      });
      try {
        const S = u ? `${l}/upload?upload_id=${u}` : `${l}/upload`;
        var _ = await e(S, {
          method: "POST",
          body: v,
          headers: f
        });
      } catch {
        return { error: ft };
      }
      const E = await _.json();
      h.push(...E);
    }
    return { files: h };
  }
  async function r(l, o = { normalise_files: !0 }) {
    return new Promise(async (a) => {
      const { status_callback: u, hf_token: f, normalise_files: c } = o, h = {
        predict: T,
        submit: Te,
        view_api: re,
        component_server: je
      }, _ = c ?? !0;
      if ((typeof window > "u" || !("WebSocket" in window)) && !global.Websocket) {
        const N = await import("./wrapper-6f348d45-f837cf34.js");
        pr = (await import("./__vite-browser-external-2447137e.js")).Blob, global.WebSocket = N.WebSocket;
      }
      const { ws_protocol: d, http_protocol: b, host: v, space_id: E } = await Ql(l, f), S = Math.random().toString(36).substring(2), g = {};
      let y, m = {}, X = !1;
      f && E && (X = await oo(E, f));
      async function Z(N) {
        if (y = N, m = Yl((N == null ? void 0 : N.dependencies) || []), y.auth_required)
          return {
            config: y,
            ...h
          };
        try {
          J = await re(y);
        } catch (L) {
          console.error(`Could not get api details: ${L.message}`);
        }
        return {
          config: y,
          ...h
        };
      }
      let J;
      async function ie(N) {
        if (u && u(N), N.status === "running")
          try {
            y = await wi(
              e,
              `${b}//${v}`,
              f
            );
            const L = await Z(y);
            a(L);
          } catch (L) {
            console.error(L), u && u({
              status: "error",
              message: "Could not load this space.",
              load_status: "error",
              detail: "NOT_FOUND"
            });
          }
      }
      try {
        y = await wi(
          e,
          `${b}//${v}`,
          f
        );
        const N = await Z(y);
        a(N);
      } catch (N) {
        console.error(N), E ? Rn(
          E,
          br.test(E) ? "space_name" : "subdomain",
          ie
        ) : u && u({
          status: "error",
          message: "Could not load this space.",
          load_status: "error",
          detail: "NOT_FOUND"
        });
      }
      function T(N, L, Q) {
        let U = !1, B = !1, q;
        if (typeof N == "number")
          q = y.dependencies[N];
        else {
          const w = N.replace(/^\//, "");
          q = y.dependencies[m[w]];
        }
        if (q.types.continuous)
          throw new Error(
            "Cannot call predict on this function as it may run forever. Use submit instead"
          );
        return new Promise((w, O) => {
          const F = Te(N, L, Q);
          let p;
          F.on("data", (te) => {
            B && (F.destroy(), w(te)), U = !0, p = te;
          }).on("status", (te) => {
            te.stage === "error" && O(te), te.stage === "complete" && (B = !0, U && (F.destroy(), w(p)));
          });
        });
      }
      function Te(N, L, Q, U = null) {
        let B, q;
        if (typeof N == "number")
          B = N, q = J.unnamed_endpoints[B];
        else {
          const V = N.replace(/^\//, "");
          B = m[V], q = J.named_endpoints[N.trim()];
        }
        if (typeof B != "number")
          throw new Error(
            "There is no endpoint matching that name of fn_index matching that number."
          );
        let w, O, F = y.protocol ?? "sse";
        const p = typeof N == "number" ? "/predict" : N;
        let te, on = null, Ee = !1;
        const at = {};
        let Oe = "";
        typeof window < "u" && (Oe = new URLSearchParams(window.location.search).toString()), s(
          `${b}//${ke(v, y.path, !0)}`,
          L,
          q,
          f
        ).then((V) => {
          if (te = { data: V || [], event_data: Q, fn_index: B, trigger_id: U }, ao(B, y))
            G({
              type: "status",
              endpoint: p,
              stage: "pending",
              queue: !1,
              fn_index: B,
              time: /* @__PURE__ */ new Date()
            }), n(
              `${b}//${ke(v, y.path, !0)}/run${p.startsWith("/") ? p : `/${p}`}${Oe ? "?" + Oe : ""}`,
              {
                ...te,
                session_hash: S
              },
              f
            ).then(([D, z]) => {
              const Be = _ ? yn(
                D.data,
                q,
                y.root,
                y.root_url
              ) : D.data;
              z == 200 ? (G({
                type: "data",
                endpoint: p,
                fn_index: B,
                data: Be,
                time: /* @__PURE__ */ new Date()
              }), G({
                type: "status",
                endpoint: p,
                fn_index: B,
                stage: "complete",
                eta: D.average_duration,
                queue: !1,
                time: /* @__PURE__ */ new Date()
              })) : G({
                type: "status",
                stage: "error",
                endpoint: p,
                fn_index: B,
                message: D.error,
                queue: !1,
                time: /* @__PURE__ */ new Date()
              });
            }).catch((D) => {
              G({
                type: "status",
                stage: "error",
                message: D.message,
                endpoint: p,
                fn_index: B,
                queue: !1,
                time: /* @__PURE__ */ new Date()
              });
            });
          else if (F == "ws") {
            G({
              type: "status",
              stage: "pending",
              queue: !0,
              endpoint: p,
              fn_index: B,
              time: /* @__PURE__ */ new Date()
            });
            let D = new URL(`${d}://${ke(
              v,
              y.path,
              !0
            )}
							/queue/join${Oe ? "?" + Oe : ""}`);
            X && D.searchParams.set("__sign", X), w = t(D), w.onclose = (z) => {
              z.wasClean || G({
                type: "status",
                stage: "error",
                broken: !0,
                message: ft,
                queue: !0,
                endpoint: p,
                fn_index: B,
                time: /* @__PURE__ */ new Date()
              });
            }, w.onmessage = function(z) {
              const Be = JSON.parse(z.data), { type: le, status: j, data: he } = yi(
                Be,
                g[B]
              );
              if (le === "update" && j && !Ee)
                G({
                  type: "status",
                  endpoint: p,
                  fn_index: B,
                  time: /* @__PURE__ */ new Date(),
                  ...j
                }), j.stage === "error" && w.close();
              else if (le === "hash") {
                w.send(JSON.stringify({ fn_index: B, session_hash: S }));
                return;
              } else
                le === "data" ? w.send(JSON.stringify({ ...te, session_hash: S })) : le === "complete" ? Ee = j : le === "log" ? G({
                  type: "log",
                  log: he.log,
                  level: he.level,
                  endpoint: p,
                  fn_index: B
                }) : le === "generating" && G({
                  type: "status",
                  time: /* @__PURE__ */ new Date(),
                  ...j,
                  stage: j == null ? void 0 : j.stage,
                  queue: !0,
                  endpoint: p,
                  fn_index: B
                });
              he && (G({
                type: "data",
                time: /* @__PURE__ */ new Date(),
                data: _ ? yn(
                  he.data,
                  q,
                  y.root,
                  y.root_url
                ) : he.data,
                endpoint: p,
                fn_index: B
              }), Ee && (G({
                type: "status",
                time: /* @__PURE__ */ new Date(),
                ...Ee,
                stage: j == null ? void 0 : j.stage,
                queue: !0,
                endpoint: p,
                fn_index: B
              }), w.close()));
            }, mi(y.version || "2.0.0", "3.6") < 0 && addEventListener(
              "open",
              () => w.send(JSON.stringify({ hash: S }))
            );
          } else {
            G({
              type: "status",
              stage: "pending",
              queue: !0,
              endpoint: p,
              fn_index: B,
              time: /* @__PURE__ */ new Date()
            });
            var se = new URLSearchParams({
              fn_index: B.toString(),
              session_hash: S
            }).toString();
            let D = new URL(
              `${b}//${ke(
                v,
                y.path,
                !0
              )}/queue/join?${Oe ? Oe + "&" : ""}${se}`
            );
            O = new EventSource(D), O.onmessage = async function(z) {
              const Be = JSON.parse(z.data), { type: le, status: j, data: he } = yi(
                Be,
                g[B]
              );
              if (le === "update" && j && !Ee)
                G({
                  type: "status",
                  endpoint: p,
                  fn_index: B,
                  time: /* @__PURE__ */ new Date(),
                  ...j
                }), j.stage === "error" && O.close();
              else if (le === "data") {
                on = Be.event_id;
                let [Dc, hs] = await n(
                  `${b}//${ke(
                    v,
                    y.path,
                    !0
                  )}/queue/data`,
                  {
                    ...te,
                    session_hash: S,
                    event_id: on
                  },
                  f
                );
                hs !== 200 && (G({
                  type: "status",
                  stage: "error",
                  message: ft,
                  queue: !0,
                  endpoint: p,
                  fn_index: B,
                  time: /* @__PURE__ */ new Date()
                }), O.close());
              } else
                le === "complete" ? Ee = j : le === "log" ? G({
                  type: "log",
                  log: he.log,
                  level: he.level,
                  endpoint: p,
                  fn_index: B
                }) : le === "generating" && G({
                  type: "status",
                  time: /* @__PURE__ */ new Date(),
                  ...j,
                  stage: j == null ? void 0 : j.stage,
                  queue: !0,
                  endpoint: p,
                  fn_index: B
                });
              he && (G({
                type: "data",
                time: /* @__PURE__ */ new Date(),
                data: _ ? yn(
                  he.data,
                  q,
                  y.root,
                  y.root_url
                ) : he.data,
                endpoint: p,
                fn_index: B
              }), Ee && (G({
                type: "status",
                time: /* @__PURE__ */ new Date(),
                ...Ee,
                stage: j == null ? void 0 : j.stage,
                queue: !0,
                endpoint: p,
                fn_index: B
              }), O.close()));
            };
          }
        });
        function G(V) {
          const D = at[V.type] || [];
          D == null || D.forEach((z) => z(V));
        }
        function an(V, se) {
          const D = at, z = D[V] || [];
          return D[V] = z, z == null || z.push(se), { on: an, off: yt, cancel: un, destroy: fn };
        }
        function yt(V, se) {
          const D = at;
          let z = D[V] || [];
          return z = z == null ? void 0 : z.filter((Be) => Be !== se), D[V] = z, { on: an, off: yt, cancel: un, destroy: fn };
        }
        async function un() {
          const V = {
            stage: "complete",
            queue: !1,
            time: /* @__PURE__ */ new Date()
          };
          Ee = V, G({
            ...V,
            type: "status",
            endpoint: p,
            fn_index: B
          });
          let se = {};
          F === "ws" ? (w && w.readyState === 0 ? w.addEventListener("open", () => {
            w.close();
          }) : w.close(), se = { fn_index: B, session_hash: S }) : (O.close(), se = { event_id: on });
          try {
            await e(
              `${b}//${ke(
                v,
                y.path,
                !0
              )}/reset`,
              {
                headers: { "Content-Type": "application/json" },
                method: "POST",
                body: JSON.stringify(se)
              }
            );
          } catch {
            console.warn(
              "The `/reset` endpoint could not be called. Subsequent endpoint results may be unreliable."
            );
          }
        }
        function fn() {
          for (const V in at)
            at[V].forEach((se) => {
              yt(V, se);
            });
        }
        return {
          on: an,
          off: yt,
          cancel: un,
          destroy: fn
        };
      }
      async function je(N, L, Q) {
        var U;
        const B = { "Content-Type": "application/json" };
        f && (B.Authorization = `Bearer ${f}`);
        let q, w = y.components.find(
          (p) => p.id === N
        );
        (U = w == null ? void 0 : w.props) != null && U.root_url ? q = w.props.root_url : q = `${b}//${ke(
          v,
          y.path,
          !0
        )}/`;
        const O = await e(
          `${q}component_server/`,
          {
            method: "POST",
            body: JSON.stringify({
              data: Q,
              component_id: N,
              fn_name: L,
              session_hash: S
            }),
            headers: B
          }
        );
        if (!O.ok)
          throw new Error(
            "Could not connect to component server: " + O.statusText
          );
        return await O.json();
      }
      async function re(N) {
        if (J)
          return J;
        const L = { "Content-Type": "application/json" };
        f && (L.Authorization = `Bearer ${f}`);
        let Q;
        if (mi(N.version || "2.0.0", "3.30") < 0 ? Q = await e(
          "https://gradio-space-api-fetcher-v2.hf.space/api",
          {
            method: "POST",
            body: JSON.stringify({
              serialize: !1,
              config: JSON.stringify(N)
            }),
            headers: L
          }
        ) : Q = await e(`${N.root}/info`, {
          headers: L
        }), !Q.ok)
          throw new Error(ft);
        let U = await Q.json();
        return "api" in U && (U = U.api), U.named_endpoints["/predict"] && !U.unnamed_endpoints[0] && (U.unnamed_endpoints[0] = U.named_endpoints["/predict"]), lo(U, N, m);
      }
    });
  }
  async function s(l, o, a, u) {
    const f = await Mn(
      o,
      void 0,
      [],
      !0,
      a
    );
    return Promise.all(
      f.map(async ({ path: c, blob: h, type: _ }) => {
        if (h) {
          const d = (await i(l, [h], u)).files[0];
          return { path: c, file_url: d, type: _, name: h == null ? void 0 : h.name };
        }
        return { path: c, type: _ };
      })
    ).then((c) => (c.forEach(({ path: h, file_url: _, type: d, name: b }) => {
      if (d === "Gallery")
        vi(o, _, h);
      else if (_) {
        const v = new We({ path: _, orig_name: b });
        vi(o, v, h);
      }
    }), o));
  }
}
const { post_data: Fc, upload_files: so, client: Gc, handle_blob: xc } = ro(
  fetch,
  (...e) => new WebSocket(...e)
);
function yn(e, t, n, i) {
  return e.map((r, s) => {
    var l, o, a, u;
    return ((o = (l = t == null ? void 0 : t.returns) == null ? void 0 : l[s]) == null ? void 0 : o.component) === "File" ? ge(r, n, i) : ((u = (a = t == null ? void 0 : t.returns) == null ? void 0 : a[s]) == null ? void 0 : u.component) === "Gallery" ? r.map((f) => Array.isArray(f) ? [ge(f[0], n, i), f[1]] : [ge(f, n, i), null]) : typeof r == "object" && r.path ? ge(r, n, i) : r;
  });
}
function bi(e, t, n, i) {
  switch (e.type) {
    case "string":
      return "string";
    case "boolean":
      return "boolean";
    case "number":
      return "number";
  }
  if (n === "JSONSerializable" || n === "StringSerializable")
    return "any";
  if (n === "ListStringSerializable")
    return "string[]";
  if (t === "Image")
    return i === "parameter" ? "Blob | File | Buffer" : "string";
  if (n === "FileSerializable")
    return (e == null ? void 0 : e.type) === "array" ? i === "parameter" ? "(Blob | File | Buffer)[]" : "{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}[]" : i === "parameter" ? "Blob | File | Buffer" : "{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}";
  if (n === "GallerySerializable")
    return i === "parameter" ? "[(Blob | File | Buffer), (string | null)][]" : "[{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}, (string | null))][]";
}
function pi(e, t) {
  return t === "GallerySerializable" ? "array of [file, label] tuples" : t === "ListStringSerializable" ? "array of strings" : t === "FileSerializable" ? "array of files or single file" : e.description;
}
function lo(e, t, n) {
  const i = {
    named_endpoints: {},
    unnamed_endpoints: {}
  };
  for (const r in e) {
    const s = e[r];
    for (const l in s) {
      const o = t.dependencies[l] ? l : n[l.replace("/", "")], a = s[l];
      i[r][l] = {}, i[r][l].parameters = {}, i[r][l].returns = {}, i[r][l].type = t.dependencies[o].types, i[r][l].parameters = a.parameters.map(
        ({ label: u, component: f, type: c, serializer: h }) => ({
          label: u,
          component: f,
          type: bi(c, f, h, "parameter"),
          description: pi(c, h)
        })
      ), i[r][l].returns = a.returns.map(
        ({ label: u, component: f, type: c, serializer: h }) => ({
          label: u,
          component: f,
          type: bi(c, f, h, "return"),
          description: pi(c, h)
        })
      );
    }
  }
  return i;
}
async function oo(e, t) {
  try {
    return (await (await fetch(`https://huggingface.co/api/spaces/${e}/jwt`, {
      headers: {
        Authorization: `Bearer ${t}`
      }
    })).json()).token || !1;
  } catch (n) {
    return console.error(n), !1;
  }
}
function vi(e, t, n) {
  for (; n.length > 1; )
    e = e[n.shift()];
  e[n.shift()] = t;
}
async function Mn(e, t = void 0, n = [], i = !1, r = void 0) {
  if (Array.isArray(e)) {
    let s = [];
    return await Promise.all(
      e.map(async (l, o) => {
        var a;
        let u = n.slice();
        u.push(o);
        const f = await Mn(
          e[o],
          i ? ((a = r == null ? void 0 : r.parameters[o]) == null ? void 0 : a.component) || void 0 : t,
          u,
          !1,
          r
        );
        s = s.concat(f);
      })
    ), s;
  } else {
    if (globalThis.Buffer && e instanceof globalThis.Buffer)
      return [
        {
          path: n,
          blob: t === "Image" ? !1 : new pr([e]),
          type: t
        }
      ];
    if (typeof e == "object") {
      let s = [];
      for (let l in e)
        if (e.hasOwnProperty(l)) {
          let o = n.slice();
          o.push(l), s = s.concat(
            await Mn(
              e[l],
              void 0,
              o,
              !1,
              r
            )
          );
        }
      return s;
    }
  }
  return [];
}
function ao(e, t) {
  var n, i, r, s;
  return !(((i = (n = t == null ? void 0 : t.dependencies) == null ? void 0 : n[e]) == null ? void 0 : i.queue) === null ? t.enable_queue : (s = (r = t == null ? void 0 : t.dependencies) == null ? void 0 : r[e]) != null && s.queue) || !1;
}
async function wi(e, t, n) {
  const i = {};
  if (n && (i.Authorization = `Bearer ${n}`), typeof window < "u" && window.gradio_config && location.origin !== "http://localhost:9876" && !window.gradio_config.dev_mode) {
    const r = window.gradio_config.root, s = window.gradio_config;
    return s.root = ke(t, s.root, !1), { ...s, path: r };
  } else if (t) {
    let r = await e(`${t}/config`, {
      headers: i
    });
    if (r.status === 200) {
      const s = await r.json();
      return s.path = s.path ?? "", s.root = t, s;
    }
    throw new Error("Could not get config.");
  }
  throw new Error("No config or app endpoint found");
}
async function Rn(e, t, n) {
  let i = t === "subdomain" ? `https://huggingface.co/api/spaces/by-subdomain/${e}` : `https://huggingface.co/api/spaces/${e}`, r, s;
  try {
    if (r = await fetch(i), s = r.status, s !== 200)
      throw new Error();
    r = await r.json();
  } catch {
    n({
      status: "error",
      load_status: "error",
      message: "Could not get space status",
      detail: "NOT_FOUND"
    });
    return;
  }
  if (!r || s !== 200)
    return;
  const {
    runtime: { stage: l },
    id: o
  } = r;
  switch (l) {
    case "STOPPED":
    case "SLEEPING":
      n({
        status: "sleeping",
        load_status: "pending",
        message: "Space is asleep. Waking it up...",
        detail: l
      }), setTimeout(() => {
        Rn(e, t, n);
      }, 1e3);
      break;
    case "PAUSED":
      n({
        status: "paused",
        load_status: "error",
        message: "This space has been paused by the author. If you would like to try this demo, consider duplicating the space.",
        detail: l,
        discussions_enabled: await gi(o)
      });
      break;
    case "RUNNING":
    case "RUNNING_BUILDING":
      n({
        status: "running",
        load_status: "complete",
        message: "",
        detail: l
      });
      break;
    case "BUILDING":
      n({
        status: "building",
        load_status: "pending",
        message: "Space is building...",
        detail: l
      }), setTimeout(() => {
        Rn(e, t, n);
      }, 1e3);
      break;
    default:
      n({
        status: "space_error",
        load_status: "error",
        message: "This space is experiencing an issue.",
        detail: l,
        discussions_enabled: await gi(o)
      });
      break;
  }
}
function yi(e, t) {
  switch (e.msg) {
    case "send_data":
      return { type: "data" };
    case "send_hash":
      return { type: "hash" };
    case "queue_full":
      return {
        type: "update",
        status: {
          queue: !0,
          message: io,
          stage: "error",
          code: e.code,
          success: e.success
        }
      };
    case "estimation":
      return {
        type: "update",
        status: {
          queue: !0,
          stage: t || "pending",
          code: e.code,
          size: e.queue_size,
          position: e.rank,
          eta: e.rank_eta,
          success: e.success
        }
      };
    case "progress":
      return {
        type: "update",
        status: {
          queue: !0,
          stage: "pending",
          code: e.code,
          progress_data: e.progress_data,
          success: e.success
        }
      };
    case "log":
      return { type: "log", data: e };
    case "process_generating":
      return {
        type: "generating",
        status: {
          queue: !0,
          message: e.success ? null : e.output.error,
          stage: e.success ? "generating" : "error",
          code: e.code,
          progress_data: e.progress_data,
          eta: e.average_duration
        },
        data: e.success ? e.output : null
      };
    case "process_completed":
      return "error" in e.output ? {
        type: "update",
        status: {
          queue: !0,
          message: e.output.error,
          stage: "error",
          code: e.code,
          success: e.success
        }
      } : {
        type: "complete",
        status: {
          queue: !0,
          message: e.success ? void 0 : e.output.error,
          stage: e.success ? "complete" : "error",
          code: e.code,
          progress_data: e.progress_data,
          eta: e.output.average_duration
        },
        data: e.success ? e.output : null
      };
    case "process_starts":
      return {
        type: "update",
        status: {
          queue: !0,
          stage: "pending",
          code: e.code,
          size: e.rank,
          position: 0,
          success: e.success
        }
      };
  }
  return { type: "none", status: { stage: "error", queue: !0 } };
}
function xe() {
}
function uo(e) {
  return e();
}
function fo(e) {
  e.forEach(uo);
}
function co(e) {
  return typeof e == "function";
}
function ho(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function _o(e, ...t) {
  if (e == null) {
    for (const i of t)
      i(void 0);
    return xe;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const vr = typeof window < "u";
let Ei = vr ? () => window.performance.now() : () => Date.now(), wr = vr ? (e) => requestAnimationFrame(e) : xe;
const Ze = /* @__PURE__ */ new Set();
function yr(e) {
  Ze.forEach((t) => {
    t.c(e) || (Ze.delete(t), t.f());
  }), Ze.size !== 0 && wr(yr);
}
function mo(e) {
  let t;
  return Ze.size === 0 && wr(yr), {
    promise: new Promise((n) => {
      Ze.add(t = { c: e, f: n });
    }),
    abort() {
      Ze.delete(t);
    }
  };
}
const Ve = [];
function go(e, t) {
  return {
    subscribe: pt(e, t).subscribe
  };
}
function pt(e, t = xe) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function r(o) {
    if (ho(e, o) && (e = o, n)) {
      const a = !Ve.length;
      for (const u of i)
        u[1](), Ve.push(u, e);
      if (a) {
        for (let u = 0; u < Ve.length; u += 2)
          Ve[u][0](Ve[u + 1]);
        Ve.length = 0;
      }
    }
  }
  function s(o) {
    r(o(e));
  }
  function l(o, a = xe) {
    const u = [o, a];
    return i.add(u), i.size === 1 && (n = t(r, s) || xe), o(e), () => {
      i.delete(u), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: s, subscribe: l };
}
function st(e, t, n) {
  const i = !Array.isArray(e), r = i ? [e] : e;
  if (!r.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const s = t.length < 2;
  return go(n, (l, o) => {
    let a = !1;
    const u = [];
    let f = 0, c = xe;
    const h = () => {
      if (f)
        return;
      c();
      const d = t(i ? u[0] : u, l, o);
      s ? l(d) : c = co(d) ? d : xe;
    }, _ = r.map(
      (d, b) => _o(
        d,
        (v) => {
          u[b] = v, f &= ~(1 << b), a && h();
        },
        () => {
          f |= 1 << b;
        }
      )
    );
    return a = !0, h(), function() {
      fo(_), c(), a = !1;
    };
  });
}
function Si(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function Dn(e, t, n, i) {
  if (typeof n == "number" || Si(n)) {
    const r = i - n, s = (n - t) / (e.dt || 1 / 60), l = e.opts.stiffness * r, o = e.opts.damping * s, a = (l - o) * e.inv_mass, u = (s + a) * e.dt;
    return Math.abs(u) < e.opts.precision && Math.abs(r) < e.opts.precision ? i : (e.settled = !1, Si(n) ? new Date(n.getTime() + u) : n + u);
  } else {
    if (Array.isArray(n))
      return n.map(
        (r, s) => Dn(e, t[s], n[s], i[s])
      );
    if (typeof n == "object") {
      const r = {};
      for (const s in n)
        r[s] = Dn(e, t[s], n[s], i[s]);
      return r;
    } else
      throw new Error(`Cannot spring ${typeof n} values`);
  }
}
function Ti(e, t = {}) {
  const n = pt(e), { stiffness: i = 0.15, damping: r = 0.8, precision: s = 0.01 } = t;
  let l, o, a, u = e, f = e, c = 1, h = 0, _ = !1;
  function d(v, E = {}) {
    f = v;
    const S = a = {};
    return e == null || E.hard || b.stiffness >= 1 && b.damping >= 1 ? (_ = !0, l = Ei(), u = v, n.set(e = f), Promise.resolve()) : (E.soft && (h = 1 / ((E.soft === !0 ? 0.5 : +E.soft) * 60), c = 0), o || (l = Ei(), _ = !1, o = mo((g) => {
      if (_)
        return _ = !1, o = null, !1;
      c = Math.min(c + h, 1);
      const y = {
        inv_mass: c,
        opts: b,
        settled: !0,
        dt: (g - l) * 60 / 1e3
      }, m = Dn(y, u, e, f);
      return l = g, u = e, n.set(e = m), y.settled && (o = null), !y.settled;
    })), new Promise((g) => {
      o.promise.then(() => {
        S === a && g();
      });
    }));
  }
  const b = {
    set: d,
    update: (v, E) => d(v(f, e), E),
    subscribe: n.subscribe,
    stiffness: i,
    damping: r,
    precision: s
  };
  return b;
}
function bo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var po = function(t) {
  return vo(t) && !wo(t);
};
function vo(e) {
  return !!e && typeof e == "object";
}
function wo(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || So(e);
}
var yo = typeof Symbol == "function" && Symbol.for, Eo = yo ? Symbol.for("react.element") : 60103;
function So(e) {
  return e.$$typeof === Eo;
}
function To(e) {
  return Array.isArray(e) ? [] : {};
}
function dt(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? $e(To(e), e, t) : e;
}
function Bo(e, t, n) {
  return e.concat(t).map(function(i) {
    return dt(i, n);
  });
}
function Ao(e, t) {
  if (!t.customMerge)
    return $e;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : $e;
}
function Ho(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function Bi(e) {
  return Object.keys(e).concat(Ho(e));
}
function Er(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function No(e, t) {
  return Er(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function Po(e, t, n) {
  var i = {};
  return n.isMergeableObject(e) && Bi(e).forEach(function(r) {
    i[r] = dt(e[r], n);
  }), Bi(t).forEach(function(r) {
    No(e, r) || (Er(e, r) && n.isMergeableObject(t[r]) ? i[r] = Ao(r, n)(e[r], t[r], n) : i[r] = dt(t[r], n));
  }), i;
}
function $e(e, t, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || Bo, n.isMergeableObject = n.isMergeableObject || po, n.cloneUnlessOtherwiseSpecified = dt;
  var i = Array.isArray(t), r = Array.isArray(e), s = i === r;
  return s ? i ? n.arrayMerge(e, t, n) : Po(e, t, n) : dt(t, n);
}
$e.all = function(t, n) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(i, r) {
    return $e(i, r, n);
  }, {});
};
var ko = $e, Co = ko;
const Io = /* @__PURE__ */ bo(Co);
var Un = function(e, t) {
  return Un = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
    n.__proto__ = i;
  } || function(n, i) {
    for (var r in i)
      Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r]);
  }, Un(e, t);
};
function Kt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Un(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var I = function() {
  return I = Object.assign || function(t) {
    for (var n, i = 1, r = arguments.length; i < r; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, I.apply(this, arguments);
};
function En(e, t, n) {
  if (n || arguments.length === 2)
    for (var i = 0, r = t.length, s; i < r; i++)
      (s || !(i in t)) && (s || (s = Array.prototype.slice.call(t, 0, i)), s[i] = t[i]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var P;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(P || (P = {}));
var M;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(M || (M = {}));
var et;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(et || (et = {}));
function Ai(e) {
  return e.type === M.literal;
}
function Oo(e) {
  return e.type === M.argument;
}
function Sr(e) {
  return e.type === M.number;
}
function Tr(e) {
  return e.type === M.date;
}
function Br(e) {
  return e.type === M.time;
}
function Ar(e) {
  return e.type === M.select;
}
function Hr(e) {
  return e.type === M.plural;
}
function Lo(e) {
  return e.type === M.pound;
}
function Nr(e) {
  return e.type === M.tag;
}
function Pr(e) {
  return !!(e && typeof e == "object" && e.type === et.number);
}
function Fn(e) {
  return !!(e && typeof e == "object" && e.type === et.dateTime);
}
var kr = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Mo = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Ro(e) {
  var t = {};
  return e.replace(Mo, function(n) {
    var i = n.length;
    switch (n[0]) {
      case "G":
        t.era = i === 4 ? "long" : i === 5 ? "narrow" : "short";
        break;
      case "y":
        t.year = i === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        t.month = ["numeric", "2-digit", "short", "long", "narrow"][i - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        t.day = ["numeric", "2-digit"][i - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        t.weekday = i === 4 ? "short" : i === 5 ? "narrow" : "short";
        break;
      case "e":
        if (i < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][i - 4];
        break;
      case "c":
        if (i < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][i - 4];
        break;
      case "a":
        t.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "H":
        t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "K":
        t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "k":
        t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][i - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        t.minute = ["numeric", "2-digit"][i - 1];
        break;
      case "s":
        t.second = ["numeric", "2-digit"][i - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        t.timeZoneName = i < 4 ? "short" : "long";
        break;
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), t;
}
var Do = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Uo(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(Do).filter(function(h) {
    return h.length > 0;
  }), n = [], i = 0, r = t; i < r.length; i++) {
    var s = r[i], l = s.split("/");
    if (l.length === 0)
      throw new Error("Invalid number skeleton");
    for (var o = l[0], a = l.slice(1), u = 0, f = a; u < f.length; u++) {
      var c = f[u];
      if (c.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: o, options: a });
  }
  return n;
}
function Fo(e) {
  return e.replace(/^(.*?)-/, "");
}
var Hi = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Cr = /^(@+)?(\+|#+)?[rs]?$/g, Go = /(\*)(0+)|(#+)(0+)|(0+)/g, Ir = /^(0+)$/;
function Ni(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Cr, function(n, i, r) {
    return typeof r != "string" ? (t.minimumSignificantDigits = i.length, t.maximumSignificantDigits = i.length) : r === "+" ? t.minimumSignificantDigits = i.length : i[0] === "#" ? t.maximumSignificantDigits = i.length : (t.minimumSignificantDigits = i.length, t.maximumSignificantDigits = i.length + (typeof r == "string" ? r.length : 0)), "";
  }), t;
}
function Or(e) {
  switch (e) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function xo(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Ir.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function Pi(e) {
  var t = {}, n = Or(e);
  return n || t;
}
function qo(e) {
  for (var t = {}, n = 0, i = e; n < i.length; n++) {
    var r = i[n];
    switch (r.stem) {
      case "percent":
      case "%":
        t.style = "percent";
        continue;
      case "%x100":
        t.style = "percent", t.scale = 100;
        continue;
      case "currency":
        t.style = "currency", t.currency = r.options[0];
        continue;
      case "group-off":
      case ",_":
        t.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        t.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        t.style = "unit", t.unit = Fo(r.options[0]);
        continue;
      case "compact-short":
      case "K":
        t.notation = "compact", t.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        t.notation = "compact", t.compactDisplay = "long";
        continue;
      case "scientific":
        t = I(I(I({}, t), { notation: "scientific" }), r.options.reduce(function(a, u) {
          return I(I({}, a), Pi(u));
        }, {}));
        continue;
      case "engineering":
        t = I(I(I({}, t), { notation: "engineering" }), r.options.reduce(function(a, u) {
          return I(I({}, a), Pi(u));
        }, {}));
        continue;
      case "notation-simple":
        t.notation = "standard";
        continue;
      case "unit-width-narrow":
        t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        t.currencyDisplay = "code", t.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        t.currencyDisplay = "name", t.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        t.currencyDisplay = "symbol";
        continue;
      case "scale":
        t.scale = parseFloat(r.options[0]);
        continue;
      case "integer-width":
        if (r.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        r.options[0].replace(Go, function(a, u, f, c, h, _) {
          if (u)
            t.minimumIntegerDigits = f.length;
          else {
            if (c && h)
              throw new Error("We currently do not support maximum integer digits");
            if (_)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Ir.test(r.stem)) {
      t.minimumIntegerDigits = r.stem.length;
      continue;
    }
    if (Hi.test(r.stem)) {
      if (r.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      r.stem.replace(Hi, function(a, u, f, c, h, _) {
        return f === "*" ? t.minimumFractionDigits = u.length : c && c[0] === "#" ? t.maximumFractionDigits = c.length : h && _ ? (t.minimumFractionDigits = h.length, t.maximumFractionDigits = h.length + _.length) : (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length), "";
      });
      var s = r.options[0];
      s === "w" ? t = I(I({}, t), { trailingZeroDisplay: "stripIfInteger" }) : s && (t = I(I({}, t), Ni(s)));
      continue;
    }
    if (Cr.test(r.stem)) {
      t = I(I({}, t), Ni(r.stem));
      continue;
    }
    var l = Or(r.stem);
    l && (t = I(I({}, t), l));
    var o = xo(r.stem);
    o && (t = I(I({}, t), o));
  }
  return t;
}
var At = {
  AX: [
    "H"
  ],
  BQ: [
    "H"
  ],
  CP: [
    "H"
  ],
  CZ: [
    "H"
  ],
  DK: [
    "H"
  ],
  FI: [
    "H"
  ],
  ID: [
    "H"
  ],
  IS: [
    "H"
  ],
  ML: [
    "H"
  ],
  NE: [
    "H"
  ],
  RU: [
    "H"
  ],
  SE: [
    "H"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  AS: [
    "h",
    "H"
  ],
  BT: [
    "h",
    "H"
  ],
  DJ: [
    "h",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  GH: [
    "h",
    "H"
  ],
  IN: [
    "h",
    "H"
  ],
  LS: [
    "h",
    "H"
  ],
  PG: [
    "h",
    "H"
  ],
  PW: [
    "h",
    "H"
  ],
  SO: [
    "h",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  VU: [
    "h",
    "H"
  ],
  WS: [
    "h",
    "H"
  ],
  "001": [
    "H",
    "h"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  AR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CL: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CR: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  CU: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BO": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-EC": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-PE": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  GT: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  HN: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MX: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  NI: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  PY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  SV: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  UY: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  JP: [
    "H",
    "h",
    "K"
  ],
  AD: [
    "H",
    "hB"
  ],
  AM: [
    "H",
    "hB"
  ],
  AO: [
    "H",
    "hB"
  ],
  AT: [
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BR: [
    "H",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CI: [
    "H",
    "hB"
  ],
  CV: [
    "H",
    "hB"
  ],
  DE: [
    "H",
    "hB"
  ],
  EE: [
    "H",
    "hB"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GF: [
    "H",
    "hB"
  ],
  GN: [
    "H",
    "hB"
  ],
  GP: [
    "H",
    "hB"
  ],
  GW: [
    "H",
    "hB"
  ],
  HR: [
    "H",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IT: [
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  MF: [
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NC: [
    "H",
    "hB"
  ],
  NL: [
    "H",
    "hB"
  ],
  PM: [
    "H",
    "hB"
  ],
  PT: [
    "H",
    "hB"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SR: [
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TR: [
    "H",
    "hB"
  ],
  WF: [
    "H",
    "hB"
  ],
  YT: [
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BG: [
    "H",
    "hB",
    "h"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BO: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  EC: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  PE: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CD: [
    "hB",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ]
};
function jo(e, t) {
  for (var n = "", i = 0; i < e.length; i++) {
    var r = e.charAt(i);
    if (r === "j") {
      for (var s = 0; i + 1 < e.length && e.charAt(i + 1) === r; )
        s++, i++;
      var l = 1 + (s & 1), o = s < 2 ? 1 : 3 + (s >> 1), a = "a", u = Vo(t);
      for ((u == "H" || u == "k") && (o = 0); o-- > 0; )
        n += a;
      for (; l-- > 0; )
        n = u + n;
    } else
      r === "J" ? n += "H" : n += r;
  }
  return n;
}
function Vo(e) {
  var t = e.hourCycle;
  if (t === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  e.hourCycles && // @ts-ignore
  e.hourCycles.length && (t = e.hourCycles[0]), t)
    switch (t) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var n = e.language, i;
  n !== "root" && (i = e.maximize().region);
  var r = At[i || ""] || At[n || ""] || At["".concat(n, "-001")] || At["001"];
  return r[0];
}
var Sn, zo = new RegExp("^".concat(kr.source, "*")), Xo = new RegExp("".concat(kr.source, "*$"));
function k(e, t) {
  return { start: e, end: t };
}
var Wo = !!String.prototype.startsWith, Zo = !!String.fromCodePoint, Jo = !!Object.fromEntries, Qo = !!String.prototype.codePointAt, Yo = !!String.prototype.trimStart, Ko = !!String.prototype.trimEnd, $o = !!Number.isSafeInteger, ea = $o ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Gn = !0;
try {
  var ta = Mr("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Gn = ((Sn = ta.exec("a")) === null || Sn === void 0 ? void 0 : Sn[0]) === "a";
} catch {
  Gn = !1;
}
var ki = Wo ? (
  // Native
  function(t, n, i) {
    return t.startsWith(n, i);
  }
) : (
  // For IE11
  function(t, n, i) {
    return t.slice(i, i + n.length) === n;
  }
), xn = Zo ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    for (var i = "", r = t.length, s = 0, l; r > s; ) {
      if (l = t[s++], l > 1114111)
        throw RangeError(l + " is not a valid code point");
      i += l < 65536 ? String.fromCharCode(l) : String.fromCharCode(((l -= 65536) >> 10) + 55296, l % 1024 + 56320);
    }
    return i;
  }
), Ci = (
  // native
  Jo ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, i = 0, r = t; i < r.length; i++) {
        var s = r[i], l = s[0], o = s[1];
        n[l] = o;
      }
      return n;
    }
  )
), Lr = Qo ? (
  // Native
  function(t, n) {
    return t.codePointAt(n);
  }
) : (
  // IE 11
  function(t, n) {
    var i = t.length;
    if (!(n < 0 || n >= i)) {
      var r = t.charCodeAt(n), s;
      return r < 55296 || r > 56319 || n + 1 === i || (s = t.charCodeAt(n + 1)) < 56320 || s > 57343 ? r : (r - 55296 << 10) + (s - 56320) + 65536;
    }
  }
), na = Yo ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(zo, "");
  }
), ia = Ko ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Xo, "");
  }
);
function Mr(e, t) {
  return new RegExp(e, t);
}
var qn;
if (Gn) {
  var Ii = Mr("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  qn = function(t, n) {
    var i;
    Ii.lastIndex = n;
    var r = Ii.exec(t);
    return (i = r[1]) !== null && i !== void 0 ? i : "";
  };
} else
  qn = function(t, n) {
    for (var i = []; ; ) {
      var r = Lr(t, n);
      if (r === void 0 || Rr(r) || oa(r))
        break;
      i.push(r), n += r >= 65536 ? 2 : 1;
    }
    return xn.apply(void 0, i);
  };
var ra = (
  /** @class */
  function() {
    function e(t, n) {
      n === void 0 && (n = {}), this.message = t, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return e.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, e.prototype.parseMessage = function(t, n, i) {
      for (var r = []; !this.isEOF(); ) {
        var s = this.char();
        if (s === 123) {
          var l = this.parseArgument(t, i);
          if (l.err)
            return l;
          r.push(l.val);
        } else {
          if (s === 125 && t > 0)
            break;
          if (s === 35 && (n === "plural" || n === "selectordinal")) {
            var o = this.clonePosition();
            this.bump(), r.push({
              type: M.pound,
              location: k(o, this.clonePosition())
            });
          } else if (s === 60 && !this.ignoreTag && this.peek() === 47) {
            if (i)
              break;
            return this.error(P.UNMATCHED_CLOSING_TAG, k(this.clonePosition(), this.clonePosition()));
          } else if (s === 60 && !this.ignoreTag && jn(this.peek() || 0)) {
            var l = this.parseTag(t, n);
            if (l.err)
              return l;
            r.push(l.val);
          } else {
            var l = this.parseLiteral(t, n);
            if (l.err)
              return l;
            r.push(l.val);
          }
        }
      }
      return { val: r, err: null };
    }, e.prototype.parseTag = function(t, n) {
      var i = this.clonePosition();
      this.bump();
      var r = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: M.literal,
            value: "<".concat(r, "/>"),
            location: k(i, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var s = this.parseMessage(t + 1, n, !0);
        if (s.err)
          return s;
        var l = s.val, o = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !jn(this.char()))
            return this.error(P.INVALID_TAG, k(o, this.clonePosition()));
          var a = this.clonePosition(), u = this.parseTagName();
          return r !== u ? this.error(P.UNMATCHED_CLOSING_TAG, k(a, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: M.tag,
              value: r,
              children: l,
              location: k(i, this.clonePosition())
            },
            err: null
          } : this.error(P.INVALID_TAG, k(o, this.clonePosition())));
        } else
          return this.error(P.UNCLOSED_TAG, k(i, this.clonePosition()));
      } else
        return this.error(P.INVALID_TAG, k(i, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && la(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, n) {
      for (var i = this.clonePosition(), r = ""; ; ) {
        var s = this.tryParseQuote(n);
        if (s) {
          r += s;
          continue;
        }
        var l = this.tryParseUnquoted(t, n);
        if (l) {
          r += l;
          continue;
        }
        var o = this.tryParseLeftAngleBracket();
        if (o) {
          r += o;
          continue;
        }
        break;
      }
      var a = k(i, this.clonePosition());
      return {
        val: { type: M.literal, value: r, location: a },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !sa(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, e.prototype.tryParseQuote = function(t) {
      if (this.isEOF() || this.char() !== 39)
        return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'";
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (t === "plural" || t === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var n = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var i = this.char();
        if (i === 39)
          if (this.peek() === 39)
            n.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          n.push(i);
        this.bump();
      }
      return xn.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var i = this.char();
      return i === 60 || i === 123 || i === 35 && (n === "plural" || n === "selectordinal") || i === 125 && t > 0 ? null : (this.bump(), xn(i));
    }, e.prototype.parseArgument = function(t, n) {
      var i = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(P.EXPECT_ARGUMENT_CLOSING_BRACE, k(i, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(P.EMPTY_ARGUMENT, k(i, this.clonePosition()));
      var r = this.parseIdentifierIfPossible().value;
      if (!r)
        return this.error(P.MALFORMED_ARGUMENT, k(i, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(P.EXPECT_ARGUMENT_CLOSING_BRACE, k(i, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: M.argument,
              // value does not include the opening and closing braces.
              value: r,
              location: k(i, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(P.EXPECT_ARGUMENT_CLOSING_BRACE, k(i, this.clonePosition())) : this.parseArgumentOptions(t, n, r, i);
        default:
          return this.error(P.MALFORMED_ARGUMENT, k(i, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), i = qn(this.message, n), r = n + i.length;
      this.bumpTo(r);
      var s = this.clonePosition(), l = k(t, s);
      return { value: i, location: l };
    }, e.prototype.parseArgumentOptions = function(t, n, i, r) {
      var s, l = this.clonePosition(), o = this.parseIdentifierIfPossible().value, a = this.clonePosition();
      switch (o) {
        case "":
          return this.error(P.EXPECT_ARGUMENT_TYPE, k(l, a));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var u = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var f = this.clonePosition(), c = this.parseSimpleArgStyleIfPossible();
            if (c.err)
              return c;
            var h = ia(c.val);
            if (h.length === 0)
              return this.error(P.EXPECT_ARGUMENT_STYLE, k(this.clonePosition(), this.clonePosition()));
            var _ = k(f, this.clonePosition());
            u = { style: h, styleLocation: _ };
          }
          var d = this.tryParseArgumentClose(r);
          if (d.err)
            return d;
          var b = k(r, this.clonePosition());
          if (u && ki(u == null ? void 0 : u.style, "::", 0)) {
            var v = na(u.style.slice(2));
            if (o === "number") {
              var c = this.parseNumberSkeletonFromString(v, u.styleLocation);
              return c.err ? c : {
                val: { type: M.number, value: i, location: b, style: c.val },
                err: null
              };
            } else {
              if (v.length === 0)
                return this.error(P.EXPECT_DATE_TIME_SKELETON, b);
              var E = v;
              this.locale && (E = jo(v, this.locale));
              var h = {
                type: et.dateTime,
                pattern: E,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Ro(E) : {}
              }, S = o === "date" ? M.date : M.time;
              return {
                val: { type: S, value: i, location: b, style: h },
                err: null
              };
            }
          }
          return {
            val: {
              type: o === "number" ? M.number : o === "date" ? M.date : M.time,
              value: i,
              location: b,
              style: (s = u == null ? void 0 : u.style) !== null && s !== void 0 ? s : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var g = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(P.EXPECT_SELECT_ARGUMENT_OPTIONS, k(g, I({}, g)));
          this.bumpSpace();
          var y = this.parseIdentifierIfPossible(), m = 0;
          if (o !== "select" && y.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(P.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, k(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var c = this.tryParseDecimalInteger(P.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, P.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (c.err)
              return c;
            this.bumpSpace(), y = this.parseIdentifierIfPossible(), m = c.val;
          }
          var X = this.tryParsePluralOrSelectOptions(t, o, n, y);
          if (X.err)
            return X;
          var d = this.tryParseArgumentClose(r);
          if (d.err)
            return d;
          var Z = k(r, this.clonePosition());
          return o === "select" ? {
            val: {
              type: M.select,
              value: i,
              options: Ci(X.val),
              location: Z
            },
            err: null
          } : {
            val: {
              type: M.plural,
              value: i,
              options: Ci(X.val),
              offset: m,
              pluralType: o === "plural" ? "cardinal" : "ordinal",
              location: Z
            },
            err: null
          };
        }
        default:
          return this.error(P.INVALID_ARGUMENT_TYPE, k(l, a));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(P.EXPECT_ARGUMENT_CLOSING_BRACE, k(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var i = this.char();
        switch (i) {
          case 39: {
            this.bump();
            var r = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(P.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, k(r, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            t += 1, this.bump();
            break;
          }
          case 125: {
            if (t > 0)
              t -= 1;
            else
              return {
                val: this.message.slice(n.offset, this.offset()),
                err: null
              };
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(n.offset, this.offset()),
        err: null
      };
    }, e.prototype.parseNumberSkeletonFromString = function(t, n) {
      var i = [];
      try {
        i = Uo(t);
      } catch {
        return this.error(P.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: et.number,
          tokens: i,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? qo(i) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, i, r) {
      for (var s, l = !1, o = [], a = /* @__PURE__ */ new Set(), u = r.value, f = r.location; ; ) {
        if (u.length === 0) {
          var c = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var h = this.tryParseDecimalInteger(P.EXPECT_PLURAL_ARGUMENT_SELECTOR, P.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (h.err)
              return h;
            f = k(c, this.clonePosition()), u = this.message.slice(c.offset, this.offset());
          } else
            break;
        }
        if (a.has(u))
          return this.error(n === "select" ? P.DUPLICATE_SELECT_ARGUMENT_SELECTOR : P.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, f);
        u === "other" && (l = !0), this.bumpSpace();
        var _ = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? P.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : P.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, k(this.clonePosition(), this.clonePosition()));
        var d = this.parseMessage(t + 1, n, i);
        if (d.err)
          return d;
        var b = this.tryParseArgumentClose(_);
        if (b.err)
          return b;
        o.push([
          u,
          {
            value: d.val,
            location: k(_, this.clonePosition())
          }
        ]), a.add(u), this.bumpSpace(), s = this.parseIdentifierIfPossible(), u = s.value, f = s.location;
      }
      return o.length === 0 ? this.error(n === "select" ? P.EXPECT_SELECT_ARGUMENT_SELECTOR : P.EXPECT_PLURAL_ARGUMENT_SELECTOR, k(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !l ? this.error(P.MISSING_OTHER_CLAUSE, k(this.clonePosition(), this.clonePosition())) : { val: o, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, n) {
      var i = 1, r = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (i = -1);
      for (var s = !1, l = 0; !this.isEOF(); ) {
        var o = this.char();
        if (o >= 48 && o <= 57)
          s = !0, l = l * 10 + (o - 48), this.bump();
        else
          break;
      }
      var a = k(r, this.clonePosition());
      return s ? (l *= i, ea(l) ? { val: l, err: null } : this.error(n, a)) : this.error(t, a);
    }, e.prototype.offset = function() {
      return this.position.offset;
    }, e.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, e.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, e.prototype.char = function() {
      var t = this.position.offset;
      if (t >= this.message.length)
        throw Error("out of bound");
      var n = Lr(this.message, t);
      if (n === void 0)
        throw Error("Offset ".concat(t, " is at invalid UTF-16 code unit boundary"));
      return n;
    }, e.prototype.error = function(t, n) {
      return {
        val: null,
        err: {
          kind: t,
          message: this.message,
          location: n
        }
      };
    }, e.prototype.bump = function() {
      if (!this.isEOF()) {
        var t = this.char();
        t === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += t < 65536 ? 1 : 2);
      }
    }, e.prototype.bumpIf = function(t) {
      if (ki(this.message, t, this.offset())) {
        for (var n = 0; n < t.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, e.prototype.bumpUntil = function(t) {
      var n = this.offset(), i = this.message.indexOf(t, n);
      return i >= 0 ? (this.bumpTo(i), !0) : (this.bumpTo(this.message.length), !1);
    }, e.prototype.bumpTo = function(t) {
      if (this.offset() > t)
        throw Error("targetOffset ".concat(t, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (t = Math.min(t, this.message.length); ; ) {
        var n = this.offset();
        if (n === t)
          break;
        if (n > t)
          throw Error("targetOffset ".concat(t, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, e.prototype.bumpSpace = function() {
      for (; !this.isEOF() && Rr(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), i = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return i ?? null;
    }, e;
  }()
);
function jn(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function sa(e) {
  return jn(e) || e === 47;
}
function la(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Rr(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function oa(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function Vn(e) {
  e.forEach(function(t) {
    if (delete t.location, Ar(t) || Hr(t))
      for (var n in t.options)
        delete t.options[n].location, Vn(t.options[n].value);
    else
      Sr(t) && Pr(t.style) || (Tr(t) || Br(t)) && Fn(t.style) ? delete t.style.location : Nr(t) && Vn(t.children);
  });
}
function aa(e, t) {
  t === void 0 && (t = {}), t = I({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new ra(e, t).parse();
  if (n.err) {
    var i = SyntaxError(P[n.err.kind]);
    throw i.location = n.err.location, i.originalMessage = n.err.message, i;
  }
  return t != null && t.captureLocation || Vn(n.val), n.val;
}
function Tn(e, t) {
  var n = t && t.cache ? t.cache : da, i = t && t.serializer ? t.serializer : _a, r = t && t.strategy ? t.strategy : fa;
  return r(e, {
    cache: n,
    serializer: i
  });
}
function ua(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Dr(e, t, n, i) {
  var r = ua(i) ? i : n(i), s = t.get(r);
  return typeof s > "u" && (s = e.call(this, i), t.set(r, s)), s;
}
function Ur(e, t, n) {
  var i = Array.prototype.slice.call(arguments, 3), r = n(i), s = t.get(r);
  return typeof s > "u" && (s = e.apply(this, i), t.set(r, s)), s;
}
function ni(e, t, n, i, r) {
  return n.bind(t, e, i, r);
}
function fa(e, t) {
  var n = e.length === 1 ? Dr : Ur;
  return ni(e, this, n, t.cache.create(), t.serializer);
}
function ca(e, t) {
  return ni(e, this, Ur, t.cache.create(), t.serializer);
}
function ha(e, t) {
  return ni(e, this, Dr, t.cache.create(), t.serializer);
}
var _a = function() {
  return JSON.stringify(arguments);
};
function ii() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
ii.prototype.get = function(e) {
  return this.cache[e];
};
ii.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var da = {
  create: function() {
    return new ii();
  }
}, Bn = {
  variadic: ca,
  monadic: ha
}, tt;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(tt || (tt = {}));
var $t = (
  /** @class */
  function(e) {
    Kt(t, e);
    function t(n, i, r) {
      var s = e.call(this, n) || this;
      return s.code = i, s.originalMessage = r, s;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), Oi = (
  /** @class */
  function(e) {
    Kt(t, e);
    function t(n, i, r, s) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(i, '". Options are "').concat(Object.keys(r).join('", "'), '"'), tt.INVALID_VALUE, s) || this;
    }
    return t;
  }($t)
), ma = (
  /** @class */
  function(e) {
    Kt(t, e);
    function t(n, i, r) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(i), tt.INVALID_VALUE, r) || this;
    }
    return t;
  }($t)
), ga = (
  /** @class */
  function(e) {
    Kt(t, e);
    function t(n, i) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(i, '"'), tt.MISSING_VALUE, i) || this;
    }
    return t;
  }($t)
), Y;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(Y || (Y = {}));
function ba(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var i = t[t.length - 1];
    return !i || i.type !== Y.literal || n.type !== Y.literal ? t.push(n) : i.value += n.value, t;
  }, []);
}
function pa(e) {
  return typeof e == "function";
}
function It(e, t, n, i, r, s, l) {
  if (e.length === 1 && Ai(e[0]))
    return [
      {
        type: Y.literal,
        value: e[0].value
      }
    ];
  for (var o = [], a = 0, u = e; a < u.length; a++) {
    var f = u[a];
    if (Ai(f)) {
      o.push({
        type: Y.literal,
        value: f.value
      });
      continue;
    }
    if (Lo(f)) {
      typeof s == "number" && o.push({
        type: Y.literal,
        value: n.getNumberFormat(t).format(s)
      });
      continue;
    }
    var c = f.value;
    if (!(r && c in r))
      throw new ga(c, l);
    var h = r[c];
    if (Oo(f)) {
      (!h || typeof h == "string" || typeof h == "number") && (h = typeof h == "string" || typeof h == "number" ? String(h) : ""), o.push({
        type: typeof h == "string" ? Y.literal : Y.object,
        value: h
      });
      continue;
    }
    if (Tr(f)) {
      var _ = typeof f.style == "string" ? i.date[f.style] : Fn(f.style) ? f.style.parsedOptions : void 0;
      o.push({
        type: Y.literal,
        value: n.getDateTimeFormat(t, _).format(h)
      });
      continue;
    }
    if (Br(f)) {
      var _ = typeof f.style == "string" ? i.time[f.style] : Fn(f.style) ? f.style.parsedOptions : i.time.medium;
      o.push({
        type: Y.literal,
        value: n.getDateTimeFormat(t, _).format(h)
      });
      continue;
    }
    if (Sr(f)) {
      var _ = typeof f.style == "string" ? i.number[f.style] : Pr(f.style) ? f.style.parsedOptions : void 0;
      _ && _.scale && (h = h * (_.scale || 1)), o.push({
        type: Y.literal,
        value: n.getNumberFormat(t, _).format(h)
      });
      continue;
    }
    if (Nr(f)) {
      var d = f.children, b = f.value, v = r[b];
      if (!pa(v))
        throw new ma(b, "function", l);
      var E = It(d, t, n, i, r, s), S = v(E.map(function(m) {
        return m.value;
      }));
      Array.isArray(S) || (S = [S]), o.push.apply(o, S.map(function(m) {
        return {
          type: typeof m == "string" ? Y.literal : Y.object,
          value: m
        };
      }));
    }
    if (Ar(f)) {
      var g = f.options[h] || f.options.other;
      if (!g)
        throw new Oi(f.value, h, Object.keys(f.options), l);
      o.push.apply(o, It(g.value, t, n, i, r));
      continue;
    }
    if (Hr(f)) {
      var g = f.options["=".concat(h)];
      if (!g) {
        if (!Intl.PluralRules)
          throw new $t(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, tt.MISSING_INTL_API, l);
        var y = n.getPluralRules(t, { type: f.pluralType }).select(h - (f.offset || 0));
        g = f.options[y] || f.options.other;
      }
      if (!g)
        throw new Oi(f.value, h, Object.keys(f.options), l);
      o.push.apply(o, It(g.value, t, n, i, r, h - (f.offset || 0)));
      continue;
    }
  }
  return ba(o);
}
function va(e, t) {
  return t ? I(I(I({}, e || {}), t || {}), Object.keys(e).reduce(function(n, i) {
    return n[i] = I(I({}, e[i]), t[i] || {}), n;
  }, {})) : e;
}
function wa(e, t) {
  return t ? Object.keys(e).reduce(function(n, i) {
    return n[i] = va(e[i], t[i]), n;
  }, I({}, e)) : e;
}
function An(e) {
  return {
    create: function() {
      return {
        get: function(t) {
          return e[t];
        },
        set: function(t, n) {
          e[t] = n;
        }
      };
    }
  };
}
function ya(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Tn(function() {
      for (var t, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((t = Intl.NumberFormat).bind.apply(t, En([void 0], n, !1)))();
    }, {
      cache: An(e.number),
      strategy: Bn.variadic
    }),
    getDateTimeFormat: Tn(function() {
      for (var t, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, En([void 0], n, !1)))();
    }, {
      cache: An(e.dateTime),
      strategy: Bn.variadic
    }),
    getPluralRules: Tn(function() {
      for (var t, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((t = Intl.PluralRules).bind.apply(t, En([void 0], n, !1)))();
    }, {
      cache: An(e.pluralRules),
      strategy: Bn.variadic
    })
  };
}
var Ea = (
  /** @class */
  function() {
    function e(t, n, i, r) {
      var s = this;
      if (n === void 0 && (n = e.defaultLocale), this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(l) {
        var o = s.formatToParts(l);
        if (o.length === 1)
          return o[0].value;
        var a = o.reduce(function(u, f) {
          return !u.length || f.type !== Y.literal || typeof u[u.length - 1] != "string" ? u.push(f.value) : u[u.length - 1] += f.value, u;
        }, []);
        return a.length <= 1 ? a[0] || "" : a;
      }, this.formatToParts = function(l) {
        return It(s.ast, s.locales, s.formatters, s.formats, l, void 0, s.message);
      }, this.resolvedOptions = function() {
        return {
          locale: s.resolvedLocale.toString()
        };
      }, this.getAst = function() {
        return s.ast;
      }, this.locales = n, this.resolvedLocale = e.resolveLocale(n), typeof t == "string") {
        if (this.message = t, !e.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        this.ast = e.__parse(t, {
          ignoreTag: r == null ? void 0 : r.ignoreTag,
          locale: this.resolvedLocale
        });
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = wa(e.formats, i), this.formatters = r && r.formatters || ya(this.formatterCache);
    }
    return Object.defineProperty(e, "defaultLocale", {
      get: function() {
        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), e.memoizedDefaultLocale = null, e.resolveLocale = function(t) {
      var n = Intl.NumberFormat.supportedLocalesOf(t);
      return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale(typeof t == "string" ? t : t[0]);
    }, e.__parse = aa, e.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    }, e;
  }()
);
function Sa(e, t) {
  if (t == null)
    return;
  if (t in e)
    return e[t];
  const n = t.split(".");
  let i = e;
  for (let r = 0; r < n.length; r++)
    if (typeof i == "object") {
      if (r > 0) {
        const s = n.slice(r, n.length).join(".");
        if (s in i) {
          i = i[s];
          break;
        }
      }
      i = i[n[r]];
    } else
      i = void 0;
  return i;
}
const Ce = {}, Ta = (e, t, n) => n && (t in Ce || (Ce[t] = {}), e in Ce[t] || (Ce[t][e] = n), n), Fr = (e, t) => {
  if (t == null)
    return;
  if (t in Ce && e in Ce[t])
    return Ce[t][e];
  const n = en(t);
  for (let i = 0; i < n.length; i++) {
    const r = n[i], s = Aa(r, e);
    if (s)
      return Ta(e, t, s);
  }
};
let ri;
const vt = pt({});
function Ba(e) {
  return ri[e] || null;
}
function Gr(e) {
  return e in ri;
}
function Aa(e, t) {
  if (!Gr(e))
    return null;
  const n = Ba(e);
  return Sa(n, t);
}
function Ha(e) {
  if (e == null)
    return;
  const t = en(e);
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    if (Gr(i))
      return i;
  }
}
function Na(e, ...t) {
  delete Ce[e], vt.update((n) => (n[e] = Io.all([n[e] || {}, ...t]), n));
}
st(
  [vt],
  ([e]) => Object.keys(e)
);
vt.subscribe((e) => ri = e);
const Ot = {};
function Pa(e, t) {
  Ot[e].delete(t), Ot[e].size === 0 && delete Ot[e];
}
function xr(e) {
  return Ot[e];
}
function ka(e) {
  return en(e).map((t) => {
    const n = xr(t);
    return [t, n ? [...n] : []];
  }).filter(([, t]) => t.length > 0);
}
function zn(e) {
  return e == null ? !1 : en(e).some(
    (t) => {
      var n;
      return (n = xr(t)) == null ? void 0 : n.size;
    }
  );
}
function Ca(e, t) {
  return Promise.all(
    t.map((i) => (Pa(e, i), i().then((r) => r.default || r)))
  ).then((i) => Na(e, ...i));
}
const ct = {};
function qr(e) {
  if (!zn(e))
    return e in ct ? ct[e] : Promise.resolve();
  const t = ka(e);
  return ct[e] = Promise.all(
    t.map(
      ([n, i]) => Ca(n, i)
    )
  ).then(() => {
    if (zn(e))
      return qr(e);
    delete ct[e];
  }), ct[e];
}
const Ia = {
  number: {
    scientific: { notation: "scientific" },
    engineering: { notation: "engineering" },
    compactLong: { notation: "compact", compactDisplay: "long" },
    compactShort: { notation: "compact", compactDisplay: "short" }
  },
  date: {
    short: { month: "numeric", day: "numeric", year: "2-digit" },
    medium: { month: "short", day: "numeric", year: "numeric" },
    long: { month: "long", day: "numeric", year: "numeric" },
    full: { weekday: "long", month: "long", day: "numeric", year: "numeric" }
  },
  time: {
    short: { hour: "numeric", minute: "numeric" },
    medium: { hour: "numeric", minute: "numeric", second: "numeric" },
    long: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    },
    full: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    }
  }
}, Oa = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Ia,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, La = Oa;
function nt() {
  return La;
}
const Hn = pt(!1);
var Ma = Object.defineProperty, Ra = Object.defineProperties, Da = Object.getOwnPropertyDescriptors, Li = Object.getOwnPropertySymbols, Ua = Object.prototype.hasOwnProperty, Fa = Object.prototype.propertyIsEnumerable, Mi = (e, t, n) => t in e ? Ma(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ga = (e, t) => {
  for (var n in t || (t = {}))
    Ua.call(t, n) && Mi(e, n, t[n]);
  if (Li)
    for (var n of Li(t))
      Fa.call(t, n) && Mi(e, n, t[n]);
  return e;
}, xa = (e, t) => Ra(e, Da(t));
let Xn;
const Lt = pt(null);
function Ri(e) {
  return e.split("-").map((t, n, i) => i.slice(0, n + 1).join("-")).reverse();
}
function en(e, t = nt().fallbackLocale) {
  const n = Ri(e);
  return t ? [.../* @__PURE__ */ new Set([...n, ...Ri(t)])] : n;
}
function qe() {
  return Xn ?? void 0;
}
Lt.subscribe((e) => {
  Xn = e ?? void 0, typeof window < "u" && e != null && document.documentElement.setAttribute("lang", e);
});
const qa = (e) => {
  if (e && Ha(e) && zn(e)) {
    const { loadingDelay: t } = nt();
    let n;
    return typeof window < "u" && qe() != null && t ? n = window.setTimeout(
      () => Hn.set(!0),
      t
    ) : Hn.set(!0), qr(e).then(() => {
      Lt.set(e);
    }).finally(() => {
      clearTimeout(n), Hn.set(!1);
    });
  }
  return Lt.set(e);
}, wt = xa(Ga({}, Lt), {
  set: qa
}), tn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (i) => {
    const r = JSON.stringify(i);
    return r in t ? t[r] : t[r] = e(i);
  };
};
var ja = Object.defineProperty, Mt = Object.getOwnPropertySymbols, jr = Object.prototype.hasOwnProperty, Vr = Object.prototype.propertyIsEnumerable, Di = (e, t, n) => t in e ? ja(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, si = (e, t) => {
  for (var n in t || (t = {}))
    jr.call(t, n) && Di(e, n, t[n]);
  if (Mt)
    for (var n of Mt(t))
      Vr.call(t, n) && Di(e, n, t[n]);
  return e;
}, lt = (e, t) => {
  var n = {};
  for (var i in e)
    jr.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && Mt)
    for (var i of Mt(e))
      t.indexOf(i) < 0 && Vr.call(e, i) && (n[i] = e[i]);
  return n;
};
const mt = (e, t) => {
  const { formats: n } = nt();
  if (e in n && t in n[e])
    return n[e][t];
  throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
}, Va = tn(
  (e) => {
    var t = e, { locale: n, format: i } = t, r = lt(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return i && (r = mt("number", i)), new Intl.NumberFormat(n, r);
  }
), za = tn(
  (e) => {
    var t = e, { locale: n, format: i } = t, r = lt(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return i ? r = mt("date", i) : Object.keys(r).length === 0 && (r = mt("date", "short")), new Intl.DateTimeFormat(n, r);
  }
), Xa = tn(
  (e) => {
    var t = e, { locale: n, format: i } = t, r = lt(t, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return i ? r = mt("time", i) : Object.keys(r).length === 0 && (r = mt("time", "short")), new Intl.DateTimeFormat(n, r);
  }
), Wa = (e = {}) => {
  var t = e, {
    locale: n = qe()
  } = t, i = lt(t, [
    "locale"
  ]);
  return Va(si({ locale: n }, i));
}, Za = (e = {}) => {
  var t = e, {
    locale: n = qe()
  } = t, i = lt(t, [
    "locale"
  ]);
  return za(si({ locale: n }, i));
}, Ja = (e = {}) => {
  var t = e, {
    locale: n = qe()
  } = t, i = lt(t, [
    "locale"
  ]);
  return Xa(si({ locale: n }, i));
}, Qa = tn(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (e, t = qe()) => new Ea(e, t, nt().formats, {
    ignoreTag: nt().ignoreTag
  })
), Ya = (e, t = {}) => {
  var n, i, r, s;
  let l = t;
  typeof e == "object" && (l = e, e = l.id);
  const {
    values: o,
    locale: a = qe(),
    default: u
  } = l;
  if (a == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let f = Fr(e, a);
  if (!f)
    f = (s = (r = (i = (n = nt()).handleMissingMessage) == null ? void 0 : i.call(n, { locale: a, id: e, defaultValue: u })) != null ? r : u) != null ? s : e;
  else if (typeof f != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof f}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), f;
  if (!o)
    return f;
  let c = f;
  try {
    c = Qa(f, a).format(o);
  } catch (h) {
    h instanceof Error && console.warn(
      `[svelte-i18n] Message "${e}" has syntax error:`,
      h.message
    );
  }
  return c;
}, Ka = (e, t) => Ja(t).format(e), $a = (e, t) => Za(t).format(e), eu = (e, t) => Wa(t).format(e), tu = (e, t = qe()) => Fr(e, t);
st([wt, vt], () => Ya);
st([wt], () => Ka);
st([wt], () => $a);
st([wt], () => eu);
st([wt, vt], () => tu);
const {
  SvelteComponent: nu,
  append: ee,
  attr: De,
  detach: zr,
  element: Ue,
  init: iu,
  insert: Xr,
  noop: Ui,
  safe_not_equal: ru,
  set_data: Rt,
  set_style: Nn,
  space: Wn,
  text: ze,
  toggle_class: Fi
} = window.__gradio__svelte__internal, { onMount: su, createEventDispatcher: lu } = window.__gradio__svelte__internal;
function Gi(e) {
  let t, n, i, r, s = _t(
    /*current_file_upload*/
    e[2]
  ) + "", l, o, a, u, f = (
    /*current_file_upload*/
    e[2].orig_name + ""
  ), c;
  return {
    c() {
      t = Ue("div"), n = Ue("span"), i = Ue("div"), r = Ue("progress"), l = ze(s), a = Wn(), u = Ue("span"), c = ze(f), Nn(r, "visibility", "hidden"), Nn(r, "height", "0"), Nn(r, "width", "0"), r.value = o = _t(
        /*current_file_upload*/
        e[2]
      ), De(r, "max", "100"), De(r, "class", "svelte-12ckl9l"), De(i, "class", "progress-bar svelte-12ckl9l"), De(u, "class", "file-name svelte-12ckl9l"), De(t, "class", "file svelte-12ckl9l");
    },
    m(h, _) {
      Xr(h, t, _), ee(t, n), ee(n, i), ee(i, r), ee(r, l), ee(t, a), ee(t, u), ee(u, c);
    },
    p(h, _) {
      _ & /*current_file_upload*/
      4 && s !== (s = _t(
        /*current_file_upload*/
        h[2]
      ) + "") && Rt(l, s), _ & /*current_file_upload*/
      4 && o !== (o = _t(
        /*current_file_upload*/
        h[2]
      )) && (r.value = o), _ & /*current_file_upload*/
      4 && f !== (f = /*current_file_upload*/
      h[2].orig_name + "") && Rt(c, f);
    },
    d(h) {
      h && zr(t);
    }
  };
}
function ou(e) {
  let t, n, i, r = (
    /*files_with_progress*/
    e[0].length + ""
  ), s, l, o = (
    /*files_with_progress*/
    e[0].length > 1 ? "files" : "file"
  ), a, u, f, c = (
    /*current_file_upload*/
    e[2] && Gi(e)
  );
  return {
    c() {
      t = Ue("div"), n = Ue("span"), i = ze("Uploading "), s = ze(r), l = Wn(), a = ze(o), u = ze("..."), f = Wn(), c && c.c(), De(n, "class", "uploading svelte-12ckl9l"), De(t, "class", "wrap svelte-12ckl9l"), Fi(
        t,
        "progress",
        /*progress*/
        e[1]
      );
    },
    m(h, _) {
      Xr(h, t, _), ee(t, n), ee(n, i), ee(n, s), ee(n, l), ee(n, a), ee(n, u), ee(t, f), c && c.m(t, null);
    },
    p(h, [_]) {
      _ & /*files_with_progress*/
      1 && r !== (r = /*files_with_progress*/
      h[0].length + "") && Rt(s, r), _ & /*files_with_progress*/
      1 && o !== (o = /*files_with_progress*/
      h[0].length > 1 ? "files" : "file") && Rt(a, o), /*current_file_upload*/
      h[2] ? c ? c.p(h, _) : (c = Gi(h), c.c(), c.m(t, null)) : c && (c.d(1), c = null), _ & /*progress*/
      2 && Fi(
        t,
        "progress",
        /*progress*/
        h[1]
      );
    },
    i: Ui,
    o: Ui,
    d(h) {
      h && zr(t), c && c.d();
    }
  };
}
function _t(e) {
  return e.progress * 100 / (e.size || 0) || 0;
}
function au(e) {
  let t = 0;
  return e.forEach((n) => {
    t += _t(n);
  }), document.documentElement.style.setProperty("--upload-progress-width", (t / e.length).toFixed(2) + "%"), t / e.length;
}
function uu(e, t, n) {
  let { upload_id: i } = t, { root: r } = t, { files: s } = t, l, o = !1, a, u = s.map((h) => ({ ...h, progress: 0 }));
  const f = lu();
  function c(h, _) {
    n(0, u = u.map((d) => (d.orig_name === h && (d.progress += _), d)));
  }
  return su(() => {
    l = new EventSource(`${r}/upload_progress?upload_id=${i}`), l.onmessage = async function(h) {
      const _ = JSON.parse(h.data);
      o || n(1, o = !0), _.msg === "done" ? (l.close(), f("done")) : (n(2, a = _), c(_.orig_name, _.chunk_size));
    };
  }), e.$$set = (h) => {
    "upload_id" in h && n(3, i = h.upload_id), "root" in h && n(4, r = h.root), "files" in h && n(5, s = h.files);
  }, e.$$.update = () => {
    e.$$.dirty & /*files_with_progress*/
    1 && au(u);
  }, [u, o, a, i, r, s];
}
class fu extends nu {
  constructor(t) {
    super(), iu(this, t, uu, ou, ru, { upload_id: 3, root: 4, files: 5 });
  }
}
const {
  SvelteComponent: cu,
  append: xi,
  attr: oe,
  binding_callbacks: hu,
  bubble: Le,
  check_outros: _u,
  create_component: du,
  create_slot: mu,
  destroy_component: gu,
  detach: Wr,
  element: qi,
  empty: bu,
  get_all_dirty_from_scope: pu,
  get_slot_changes: vu,
  group_outros: wu,
  init: yu,
  insert: Zr,
  listen: ae,
  mount_component: Eu,
  prevent_default: Me,
  run_all: Su,
  safe_not_equal: Tu,
  set_style: ji,
  space: Bu,
  stop_propagation: Re,
  toggle_class: Pe,
  transition_in: Dt,
  transition_out: Ut,
  update_slot_base: Au
} = window.__gradio__svelte__internal, { createEventDispatcher: Hu, tick: Nu, getContext: Pu } = window.__gradio__svelte__internal;
function ku(e) {
  let t, n, i, r, s, l, o, a, u, f;
  const c = (
    /*#slots*/
    e[21].default
  ), h = mu(
    c,
    e,
    /*$$scope*/
    e[20],
    null
  );
  return {
    c() {
      t = qi("button"), h && h.c(), n = Bu(), i = qi("input"), oe(i, "aria-label", "file upload"), oe(i, "type", "file"), oe(
        i,
        "accept",
        /*filetype*/
        e[1]
      ), i.multiple = r = /*file_count*/
      e[5] === "multiple" || void 0, oe(i, "webkitdirectory", s = /*file_count*/
      e[5] === "directory" || void 0), oe(i, "mozdirectory", l = /*file_count*/
      e[5] === "directory" || void 0), oe(i, "class", "svelte-1aq8tno"), oe(t, "tabindex", o = /*hidden*/
      e[7] ? -1 : 0), oe(t, "class", "svelte-1aq8tno"), Pe(
        t,
        "hidden",
        /*hidden*/
        e[7]
      ), Pe(
        t,
        "center",
        /*center*/
        e[3]
      ), Pe(
        t,
        "boundedheight",
        /*boundedheight*/
        e[2]
      ), Pe(
        t,
        "flex",
        /*flex*/
        e[4]
      ), ji(
        t,
        "height",
        /*include_sources*/
        e[8] ? "calc(100% - 40px" : "100%"
      );
    },
    m(_, d) {
      Zr(_, t, d), h && h.m(t, null), xi(t, n), xi(t, i), e[29](i), a = !0, u || (f = [
        ae(
          i,
          "change",
          /*load_files_from_upload*/
          e[14]
        ),
        ae(t, "drag", Re(Me(
          /*drag_handler*/
          e[22]
        ))),
        ae(t, "dragstart", Re(Me(
          /*dragstart_handler*/
          e[23]
        ))),
        ae(t, "dragend", Re(Me(
          /*dragend_handler*/
          e[24]
        ))),
        ae(t, "dragover", Re(Me(
          /*dragover_handler*/
          e[25]
        ))),
        ae(t, "dragenter", Re(Me(
          /*dragenter_handler*/
          e[26]
        ))),
        ae(t, "dragleave", Re(Me(
          /*dragleave_handler*/
          e[27]
        ))),
        ae(t, "drop", Re(Me(
          /*drop_handler*/
          e[28]
        ))),
        ae(
          t,
          "click",
          /*open_file_upload*/
          e[9]
        ),
        ae(
          t,
          "drop",
          /*loadFilesFromDrop*/
          e[15]
        ),
        ae(
          t,
          "dragenter",
          /*updateDragging*/
          e[13]
        ),
        ae(
          t,
          "dragleave",
          /*updateDragging*/
          e[13]
        )
      ], u = !0);
    },
    p(_, d) {
      h && h.p && (!a || d[0] & /*$$scope*/
      1048576) && Au(
        h,
        c,
        _,
        /*$$scope*/
        _[20],
        a ? vu(
          c,
          /*$$scope*/
          _[20],
          d,
          null
        ) : pu(
          /*$$scope*/
          _[20]
        ),
        null
      ), (!a || d[0] & /*filetype*/
      2) && oe(
        i,
        "accept",
        /*filetype*/
        _[1]
      ), (!a || d[0] & /*file_count*/
      32 && r !== (r = /*file_count*/
      _[5] === "multiple" || void 0)) && (i.multiple = r), (!a || d[0] & /*file_count*/
      32 && s !== (s = /*file_count*/
      _[5] === "directory" || void 0)) && oe(i, "webkitdirectory", s), (!a || d[0] & /*file_count*/
      32 && l !== (l = /*file_count*/
      _[5] === "directory" || void 0)) && oe(i, "mozdirectory", l), (!a || d[0] & /*hidden*/
      128 && o !== (o = /*hidden*/
      _[7] ? -1 : 0)) && oe(t, "tabindex", o), (!a || d[0] & /*hidden*/
      128) && Pe(
        t,
        "hidden",
        /*hidden*/
        _[7]
      ), (!a || d[0] & /*center*/
      8) && Pe(
        t,
        "center",
        /*center*/
        _[3]
      ), (!a || d[0] & /*boundedheight*/
      4) && Pe(
        t,
        "boundedheight",
        /*boundedheight*/
        _[2]
      ), (!a || d[0] & /*flex*/
      16) && Pe(
        t,
        "flex",
        /*flex*/
        _[4]
      ), d[0] & /*include_sources*/
      256 && ji(
        t,
        "height",
        /*include_sources*/
        _[8] ? "calc(100% - 40px" : "100%"
      );
    },
    i(_) {
      a || (Dt(h, _), a = !0);
    },
    o(_) {
      Ut(h, _), a = !1;
    },
    d(_) {
      _ && Wr(t), h && h.d(_), e[29](null), u = !1, Su(f);
    }
  };
}
function Cu(e) {
  let t, n;
  return t = new fu({
    props: {
      root: (
        /*root*/
        e[6]
      ),
      upload_id: (
        /*upload_id*/
        e[10]
      ),
      files: (
        /*file_data*/
        e[11]
      )
    }
  }), {
    c() {
      du(t.$$.fragment);
    },
    m(i, r) {
      Eu(t, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r[0] & /*root*/
      64 && (s.root = /*root*/
      i[6]), r[0] & /*upload_id*/
      1024 && (s.upload_id = /*upload_id*/
      i[10]), r[0] & /*file_data*/
      2048 && (s.files = /*file_data*/
      i[11]), t.$set(s);
    },
    i(i) {
      n || (Dt(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Ut(t.$$.fragment, i), n = !1;
    },
    d(i) {
      gu(t, i);
    }
  };
}
function Iu(e) {
  let t, n, i, r;
  const s = [Cu, ku], l = [];
  function o(a, u) {
    return (
      /*uploading*/
      a[0] ? 0 : 1
    );
  }
  return t = o(e), n = l[t] = s[t](e), {
    c() {
      n.c(), i = bu();
    },
    m(a, u) {
      l[t].m(a, u), Zr(a, i, u), r = !0;
    },
    p(a, u) {
      let f = t;
      t = o(a), t === f ? l[t].p(a, u) : (wu(), Ut(l[f], 1, 1, () => {
        l[f] = null;
      }), _u(), n = l[t], n ? n.p(a, u) : (n = l[t] = s[t](a), n.c()), Dt(n, 1), n.m(i.parentNode, i));
    },
    i(a) {
      r || (Dt(n), r = !0);
    },
    o(a) {
      Ut(n), r = !1;
    },
    d(a) {
      a && Wr(i), l[t].d(a);
    }
  };
}
function Pn(e) {
  let t, n = e[0], i = 1;
  for (; i < e.length; ) {
    const r = e[i], s = e[i + 1];
    if (i += 2, (r === "optionalAccess" || r === "optionalCall") && n == null)
      return;
    r === "access" || r === "optionalAccess" ? (t = n, n = s(n)) : (r === "call" || r === "optionalCall") && (n = s((...l) => n.call(t, ...l)), t = void 0);
  }
  return n;
}
function Ou(e, t) {
  return !e || e === "*" ? !0 : e.endsWith("/*") ? t.startsWith(e.slice(0, -1)) : e === t;
}
function Lu(e, t, n) {
  let { $$slots: i = {}, $$scope: r } = t, { filetype: s = null } = t, { dragging: l = !1 } = t, { boundedheight: o = !0 } = t, { center: a = !0 } = t, { flex: u = !0 } = t, { file_count: f = "single" } = t, { disable_click: c = !1 } = t, { root: h } = t, { hidden: _ = !1 } = t, { format: d = "file" } = t, { include_sources: b = !1 } = t, { uploading: v = !1 } = t, E, S;
  const g = Pu("upload_files");
  let y;
  const m = Hu();
  function X() {
    n(16, l = !l);
  }
  function Z() {
    c || (n(12, y.value = "", y), y.click());
  }
  async function J(w) {
    await Nu(), n(10, E = Math.random().toString(36).substring(2, 15)), n(0, v = !0);
    const O = await to(w, h, E, g);
    return m("load", f === "single" ? Pn([O, "optionalAccess", (F) => F[0]]) : O), n(0, v = !1), O || [];
  }
  async function ie(w) {
    if (!w.length)
      return;
    let O = w.map((F) => new File([F], F.name));
    return n(11, S = await no(O)), await J(S);
  }
  async function T(w) {
    const O = w.target;
    if (O.files)
      if (d != "blob")
        await ie(Array.from(O.files));
      else {
        if (f === "single") {
          m("load", O.files[0]);
          return;
        }
        m("load", O.files);
      }
  }
  async function Te(w) {
    if (n(16, l = !1), !Pn([w, "access", (F) => F.dataTransfer, "optionalAccess", (F) => F.files]))
      return;
    const O = Array.from(w.dataTransfer.files).filter((F) => Pn([
      s,
      "optionalAccess",
      (p) => p.split,
      "call",
      (p) => p(","),
      "access",
      (p) => p.some,
      "call",
      (p) => p((te) => Ou(te, F.type))
    ]) ? !0 : (m("error", `Invalid file type only ${s} allowed.`), !1));
    await ie(O);
  }
  function je(w) {
    Le.call(this, e, w);
  }
  function re(w) {
    Le.call(this, e, w);
  }
  function N(w) {
    Le.call(this, e, w);
  }
  function L(w) {
    Le.call(this, e, w);
  }
  function Q(w) {
    Le.call(this, e, w);
  }
  function U(w) {
    Le.call(this, e, w);
  }
  function B(w) {
    Le.call(this, e, w);
  }
  function q(w) {
    hu[w ? "unshift" : "push"](() => {
      y = w, n(12, y);
    });
  }
  return e.$$set = (w) => {
    "filetype" in w && n(1, s = w.filetype), "dragging" in w && n(16, l = w.dragging), "boundedheight" in w && n(2, o = w.boundedheight), "center" in w && n(3, a = w.center), "flex" in w && n(4, u = w.flex), "file_count" in w && n(5, f = w.file_count), "disable_click" in w && n(17, c = w.disable_click), "root" in w && n(6, h = w.root), "hidden" in w && n(7, _ = w.hidden), "format" in w && n(18, d = w.format), "include_sources" in w && n(8, b = w.include_sources), "uploading" in w && n(0, v = w.uploading), "$$scope" in w && n(20, r = w.$$scope);
  }, [
    v,
    s,
    o,
    a,
    u,
    f,
    h,
    _,
    b,
    Z,
    E,
    S,
    y,
    X,
    T,
    Te,
    l,
    c,
    d,
    ie,
    r,
    i,
    je,
    re,
    N,
    L,
    Q,
    U,
    B,
    q
  ];
}
class Jr extends cu {
  constructor(t) {
    super(), yu(
      this,
      t,
      Lu,
      Iu,
      Tu,
      {
        filetype: 1,
        dragging: 16,
        boundedheight: 2,
        center: 3,
        flex: 4,
        file_count: 5,
        disable_click: 17,
        root: 6,
        hidden: 7,
        format: 18,
        include_sources: 8,
        uploading: 0,
        open_file_upload: 9,
        load_files: 19
      },
      null,
      [-1, -1]
    );
  }
  get open_file_upload() {
    return this.$$.ctx[9];
  }
  get load_files() {
    return this.$$.ctx[19];
  }
}
const {
  SvelteComponent: Mu,
  add_flush_callback: Qr,
  append: Ru,
  attr: be,
  bind: Yr,
  binding_callbacks: Kr,
  check_outros: Vi,
  create_component: Ft,
  create_slot: $r,
  destroy_component: Gt,
  detach: gt,
  element: nn,
  get_all_dirty_from_scope: es,
  get_slot_changes: ts,
  group_outros: zi,
  init: Du,
  insert: bt,
  mount_component: xt,
  noop: qt,
  safe_not_equal: Uu,
  space: ns,
  src_url_equal: jt,
  transition_in: pe,
  transition_out: ve,
  update_slot_base: is
} = window.__gradio__svelte__internal, { createEventDispatcher: Fu, tick: qc, onMount: jc } = window.__gradio__svelte__internal;
function Gu(e) {
  let t, n;
  return {
    c() {
      t = nn("img"), jt(t.src, n = /*value_*/
      e[4][0].url) || be(t, "src", n), be(t, "alt", ""), be(t, "class", "svelte-1s3r0d8");
    },
    m(i, r) {
      bt(i, t, r);
    },
    p(i, r) {
      r & /*value_*/
      16 && !jt(t.src, n = /*value_*/
      i[4][0].url) && be(t, "src", n);
    },
    i: qt,
    o: qt,
    d(i) {
      i && gt(t);
    }
  };
}
function xu(e) {
  var l;
  let t, n, i;
  function r(o) {
    e[8](o);
  }
  let s = {
    filetype: "image/*",
    disable_click: !!/*value*/
    ((l = e[0]) != null && l[0]),
    root: (
      /*root*/
      e[3]
    ),
    file_count: "multiple",
    $$slots: { default: [qu] },
    $$scope: { ctx: e }
  };
  return (
    /*dragging*/
    e[5] !== void 0 && (s.dragging = /*dragging*/
    e[5]), t = new Jr({ props: s }), Kr.push(() => Yr(t, "dragging", r)), t.$on(
      "load",
      /*load_handler*/
      e[9]
    ), {
      c() {
        Ft(t.$$.fragment);
      },
      m(o, a) {
        xt(t, o, a), i = !0;
      },
      p(o, a) {
        var f;
        const u = {};
        a & /*value*/
        1 && (u.disable_click = !!/*value*/
        ((f = o[0]) != null && f[0])), a & /*root*/
        8 && (u.root = /*root*/
        o[3]), a & /*$$scope*/
        4096 && (u.$$scope = { dirty: a, ctx: o }), !n && a & /*dragging*/
        32 && (n = !0, u.dragging = /*dragging*/
        o[5], Qr(() => n = !1)), t.$set(u);
      },
      i(o) {
        i || (pe(t.$$.fragment, o), i = !0);
      },
      o(o) {
        ve(t.$$.fragment, o), i = !1;
      },
      d(o) {
        Gt(t, o);
      }
    }
  );
}
function qu(e) {
  let t;
  const n = (
    /*#slots*/
    e[7].default
  ), i = $r(
    n,
    e,
    /*$$scope*/
    e[12],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, s) {
      i && i.m(r, s), t = !0;
    },
    p(r, s) {
      i && i.p && (!t || s & /*$$scope*/
      4096) && is(
        i,
        n,
        r,
        /*$$scope*/
        r[12],
        t ? ts(
          n,
          /*$$scope*/
          r[12],
          s,
          null
        ) : es(
          /*$$scope*/
          r[12]
        ),
        null
      );
    },
    i(r) {
      t || (pe(i, r), t = !0);
    },
    o(r) {
      ve(i, r), t = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function ju(e) {
  let t, n;
  return {
    c() {
      t = nn("img"), jt(t.src, n = /*value_*/
      e[4][1].url) || be(t, "src", n), be(t, "alt", ""), be(t, "class", "svelte-1s3r0d8");
    },
    m(i, r) {
      bt(i, t, r);
    },
    p(i, r) {
      r & /*value_*/
      16 && !jt(t.src, n = /*value_*/
      i[4][1].url) && be(t, "src", n);
    },
    i: qt,
    o: qt,
    d(i) {
      i && gt(t);
    }
  };
}
function Vu(e) {
  var l;
  let t, n, i;
  function r(o) {
    e[10](o);
  }
  let s = {
    filetype: "image/*",
    disable_click: !!/*value*/
    ((l = e[0]) != null && l[1]),
    root: (
      /*root*/
      e[3]
    ),
    file_count: "multiple",
    $$slots: { default: [zu] },
    $$scope: { ctx: e }
  };
  return (
    /*dragging*/
    e[5] !== void 0 && (s.dragging = /*dragging*/
    e[5]), t = new Jr({ props: s }), Kr.push(() => Yr(t, "dragging", r)), t.$on(
      "load",
      /*load_handler_1*/
      e[11]
    ), {
      c() {
        Ft(t.$$.fragment);
      },
      m(o, a) {
        xt(t, o, a), i = !0;
      },
      p(o, a) {
        var f;
        const u = {};
        a & /*value*/
        1 && (u.disable_click = !!/*value*/
        ((f = o[0]) != null && f[1])), a & /*root*/
        8 && (u.root = /*root*/
        o[3]), a & /*$$scope*/
        4096 && (u.$$scope = { dirty: a, ctx: o }), !n && a & /*dragging*/
        32 && (n = !0, u.dragging = /*dragging*/
        o[5], Qr(() => n = !1)), t.$set(u);
      },
      i(o) {
        i || (pe(t.$$.fragment, o), i = !0);
      },
      o(o) {
        ve(t.$$.fragment, o), i = !1;
      },
      d(o) {
        Gt(t, o);
      }
    }
  );
}
function zu(e) {
  let t;
  const n = (
    /*#slots*/
    e[7].default
  ), i = $r(
    n,
    e,
    /*$$scope*/
    e[12],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, s) {
      i && i.m(r, s), t = !0;
    },
    p(r, s) {
      i && i.p && (!t || s & /*$$scope*/
      4096) && is(
        i,
        n,
        r,
        /*$$scope*/
        r[12],
        t ? ts(
          n,
          /*$$scope*/
          r[12],
          s,
          null
        ) : es(
          /*$$scope*/
          r[12]
        ),
        null
      );
    },
    i(r) {
      t || (pe(i, r), t = !0);
    },
    o(r) {
      ve(i, r), t = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Xu(e) {
  let t, n, i, r, s, l, o;
  const a = [xu, Gu], u = [];
  function f(d, b) {
    return (
      /*value_*/
      d[4][0] ? 1 : 0
    );
  }
  n = f(e), i = u[n] = a[n](e);
  const c = [Vu, ju], h = [];
  function _(d, b) {
    return (
      /*value_*/
      d[4][1] ? 1 : 0
    );
  }
  return s = _(e), l = h[s] = c[s](e), {
    c() {
      t = nn("div"), i.c(), r = ns(), l.c(), be(t, "class", "upload-wrap svelte-1s3r0d8");
    },
    m(d, b) {
      bt(d, t, b), u[n].m(t, null), Ru(t, r), h[s].m(t, null), o = !0;
    },
    p(d, b) {
      let v = n;
      n = f(d), n === v ? u[n].p(d, b) : (zi(), ve(u[v], 1, 1, () => {
        u[v] = null;
      }), Vi(), i = u[n], i ? i.p(d, b) : (i = u[n] = a[n](d), i.c()), pe(i, 1), i.m(t, r));
      let E = s;
      s = _(d), s === E ? h[s].p(d, b) : (zi(), ve(h[E], 1, 1, () => {
        h[E] = null;
      }), Vi(), l = h[s], l ? l.p(d, b) : (l = h[s] = c[s](d), l.c()), pe(l, 1), l.m(t, null));
    },
    i(d) {
      o || (pe(i), pe(l), o = !0);
    },
    o(d) {
      ve(i), ve(l), o = !1;
    },
    d(d) {
      d && gt(t), u[n].d(), h[s].d();
    }
  };
}
function Wu(e) {
  let t, n, i, r, s;
  return t = new gr({
    props: {
      show_label: (
        /*show_label*/
        e[2]
      ),
      Icon: ti,
      label: (
        /*label*/
        e[1] || "Image"
      )
    }
  }), r = new hr({
    props: {
      position: 0.5,
      disabled: !0,
      $$slots: { default: [Xu] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Ft(t.$$.fragment), n = ns(), i = nn("div"), Ft(r.$$.fragment), be(i, "data-testid", "image"), be(i, "class", "image-container svelte-1s3r0d8");
    },
    m(l, o) {
      xt(t, l, o), bt(l, n, o), bt(l, i, o), xt(r, i, null), s = !0;
    },
    p(l, [o]) {
      const a = {};
      o & /*show_label*/
      4 && (a.show_label = /*show_label*/
      l[2]), o & /*label*/
      2 && (a.label = /*label*/
      l[1] || "Image"), t.$set(a);
      const u = {};
      o & /*$$scope, value, root, dragging, value_*/
      4153 && (u.$$scope = { dirty: o, ctx: l }), r.$set(u);
    },
    i(l) {
      s || (pe(t.$$.fragment, l), pe(r.$$.fragment, l), s = !0);
    },
    o(l) {
      ve(t.$$.fragment, l), ve(r.$$.fragment, l), s = !1;
    },
    d(l) {
      l && (gt(n), gt(i)), Gt(t, l), Gt(r);
    }
  };
}
function Zu(e, t, n) {
  let { $$slots: i = {}, $$scope: r } = t, { value: s } = t, { label: l = void 0 } = t, { show_label: o } = t, { root: a } = t, u = [null, null];
  function f({ detail: E }, S) {
    E.length > 1 ? (n(4, u[0] = ge(E[0], a, null), u), n(4, u[1] = ge(E[1], a, null), u)) : n(4, u[S] = ge(E[0], a, null), u), c("upload", s[S]);
  }
  const c = Fu();
  let h = !1;
  function _(E) {
    h = E, n(5, h);
  }
  const d = (E) => f(E, 0);
  function b(E) {
    h = E, n(5, h);
  }
  const v = (E) => f(E, 1);
  return e.$$set = (E) => {
    "value" in E && n(0, s = E.value), "label" in E && n(1, l = E.label), "show_label" in E && n(2, o = E.show_label), "root" in E && n(3, a = E.root), "$$scope" in E && n(12, r = E.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*value, value_, root*/
    25 && s !== u && (n(4, u = s), ge(u, a, null)), e.$$.dirty & /*dragging*/
    32 && c("drag", h);
  }, [
    s,
    l,
    o,
    a,
    u,
    h,
    f,
    i,
    _,
    d,
    b,
    v,
    r
  ];
}
class Ju extends Mu {
  constructor(t) {
    super(), Du(this, t, Zu, Wu, Uu, {
      value: 0,
      label: 1,
      show_label: 2,
      root: 3
    });
  }
}
function Xe(e) {
  let t = ["", "k", "M", "G", "T", "P", "E", "Z"], n = 0;
  for (; e > 1e3 && n < t.length - 1; )
    e /= 1e3, n++;
  let i = t[n];
  return (Number.isInteger(e) ? e : e.toFixed(1)) + i;
}
const {
  SvelteComponent: Qu,
  append: _e,
  attr: C,
  component_subscribe: Xi,
  detach: Yu,
  element: Ku,
  init: $u,
  insert: ef,
  noop: Wi,
  safe_not_equal: tf,
  set_style: Ht,
  svg_element: de,
  toggle_class: Zi
} = window.__gradio__svelte__internal, { onMount: nf } = window.__gradio__svelte__internal;
function rf(e) {
  let t, n, i, r, s, l, o, a, u, f, c, h;
  return {
    c() {
      t = Ku("div"), n = de("svg"), i = de("g"), r = de("path"), s = de("path"), l = de("path"), o = de("path"), a = de("g"), u = de("path"), f = de("path"), c = de("path"), h = de("path"), C(r, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), C(r, "fill", "#FF7C00"), C(r, "fill-opacity", "0.4"), C(r, "class", "svelte-43sxxs"), C(s, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), C(s, "fill", "#FF7C00"), C(s, "class", "svelte-43sxxs"), C(l, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), C(l, "fill", "#FF7C00"), C(l, "fill-opacity", "0.4"), C(l, "class", "svelte-43sxxs"), C(o, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), C(o, "fill", "#FF7C00"), C(o, "class", "svelte-43sxxs"), Ht(i, "transform", "translate(" + /*$top*/
      e[1][0] + "px, " + /*$top*/
      e[1][1] + "px)"), C(u, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), C(u, "fill", "#FF7C00"), C(u, "fill-opacity", "0.4"), C(u, "class", "svelte-43sxxs"), C(f, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), C(f, "fill", "#FF7C00"), C(f, "class", "svelte-43sxxs"), C(c, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), C(c, "fill", "#FF7C00"), C(c, "fill-opacity", "0.4"), C(c, "class", "svelte-43sxxs"), C(h, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), C(h, "fill", "#FF7C00"), C(h, "class", "svelte-43sxxs"), Ht(a, "transform", "translate(" + /*$bottom*/
      e[2][0] + "px, " + /*$bottom*/
      e[2][1] + "px)"), C(n, "viewBox", "-1200 -1200 3000 3000"), C(n, "fill", "none"), C(n, "xmlns", "http://www.w3.org/2000/svg"), C(n, "class", "svelte-43sxxs"), C(t, "class", "svelte-43sxxs"), Zi(
        t,
        "margin",
        /*margin*/
        e[0]
      );
    },
    m(_, d) {
      ef(_, t, d), _e(t, n), _e(n, i), _e(i, r), _e(i, s), _e(i, l), _e(i, o), _e(n, a), _e(a, u), _e(a, f), _e(a, c), _e(a, h);
    },
    p(_, [d]) {
      d & /*$top*/
      2 && Ht(i, "transform", "translate(" + /*$top*/
      _[1][0] + "px, " + /*$top*/
      _[1][1] + "px)"), d & /*$bottom*/
      4 && Ht(a, "transform", "translate(" + /*$bottom*/
      _[2][0] + "px, " + /*$bottom*/
      _[2][1] + "px)"), d & /*margin*/
      1 && Zi(
        t,
        "margin",
        /*margin*/
        _[0]
      );
    },
    i: Wi,
    o: Wi,
    d(_) {
      _ && Yu(t);
    }
  };
}
function sf(e, t, n) {
  let i, r, { margin: s = !0 } = t;
  const l = Ti([0, 0]);
  Xi(e, l, (h) => n(1, i = h));
  const o = Ti([0, 0]);
  Xi(e, o, (h) => n(2, r = h));
  let a;
  async function u() {
    await Promise.all([l.set([125, 140]), o.set([-125, -140])]), await Promise.all([l.set([-125, 140]), o.set([125, -140])]), await Promise.all([l.set([-125, 0]), o.set([125, -0])]), await Promise.all([l.set([125, 0]), o.set([-125, 0])]);
  }
  async function f() {
    await u(), a || f();
  }
  async function c() {
    await Promise.all([l.set([125, 0]), o.set([-125, 0])]), f();
  }
  return nf(() => (c(), () => a = !0)), e.$$set = (h) => {
    "margin" in h && n(0, s = h.margin);
  }, [s, i, r, l, o];
}
class lf extends Qu {
  constructor(t) {
    super(), $u(this, t, sf, rf, tf, { margin: 0 });
  }
}
const {
  SvelteComponent: of,
  append: Ge,
  attr: we,
  binding_callbacks: Ji,
  check_outros: rs,
  create_component: af,
  create_slot: uf,
  destroy_component: ff,
  destroy_each: ss,
  detach: A,
  element: Se,
  empty: ot,
  ensure_array_like: Vt,
  get_all_dirty_from_scope: cf,
  get_slot_changes: hf,
  group_outros: ls,
  init: _f,
  insert: H,
  mount_component: df,
  noop: Zn,
  safe_not_equal: mf,
  set_data: ce,
  set_style: Ie,
  space: ye,
  text: R,
  toggle_class: fe,
  transition_in: it,
  transition_out: rt,
  update_slot_base: gf
} = window.__gradio__svelte__internal, { tick: bf } = window.__gradio__svelte__internal, { onDestroy: pf } = window.__gradio__svelte__internal, vf = (e) => ({}), Qi = (e) => ({});
function Yi(e, t, n) {
  const i = e.slice();
  return i[38] = t[n], i[40] = n, i;
}
function Ki(e, t, n) {
  const i = e.slice();
  return i[38] = t[n], i;
}
function wf(e) {
  let t, n = (
    /*i18n*/
    e[1]("common.error") + ""
  ), i, r, s;
  const l = (
    /*#slots*/
    e[29].error
  ), o = uf(
    l,
    e,
    /*$$scope*/
    e[28],
    Qi
  );
  return {
    c() {
      t = Se("span"), i = R(n), r = ye(), o && o.c(), we(t, "class", "error svelte-1txqlrd");
    },
    m(a, u) {
      H(a, t, u), Ge(t, i), H(a, r, u), o && o.m(a, u), s = !0;
    },
    p(a, u) {
      (!s || u[0] & /*i18n*/
      2) && n !== (n = /*i18n*/
      a[1]("common.error") + "") && ce(i, n), o && o.p && (!s || u[0] & /*$$scope*/
      268435456) && gf(
        o,
        l,
        a,
        /*$$scope*/
        a[28],
        s ? hf(
          l,
          /*$$scope*/
          a[28],
          u,
          vf
        ) : cf(
          /*$$scope*/
          a[28]
        ),
        Qi
      );
    },
    i(a) {
      s || (it(o, a), s = !0);
    },
    o(a) {
      rt(o, a), s = !1;
    },
    d(a) {
      a && (A(t), A(r)), o && o.d(a);
    }
  };
}
function yf(e) {
  let t, n, i, r, s, l, o, a, u, f = (
    /*variant*/
    e[8] === "default" && /*show_eta_bar*/
    e[18] && /*show_progress*/
    e[6] === "full" && $i(e)
  );
  function c(g, y) {
    if (
      /*progress*/
      g[7]
    )
      return Tf;
    if (
      /*queue_position*/
      g[2] !== null && /*queue_size*/
      g[3] !== void 0 && /*queue_position*/
      g[2] >= 0
    )
      return Sf;
    if (
      /*queue_position*/
      g[2] === 0
    )
      return Ef;
  }
  let h = c(e), _ = h && h(e), d = (
    /*timer*/
    e[5] && nr(e)
  );
  const b = [Nf, Hf], v = [];
  function E(g, y) {
    return (
      /*last_progress_level*/
      g[15] != null ? 0 : (
        /*show_progress*/
        g[6] === "full" ? 1 : -1
      )
    );
  }
  ~(s = E(e)) && (l = v[s] = b[s](e));
  let S = !/*timer*/
  e[5] && ur(e);
  return {
    c() {
      f && f.c(), t = ye(), n = Se("div"), _ && _.c(), i = ye(), d && d.c(), r = ye(), l && l.c(), o = ye(), S && S.c(), a = ot(), we(n, "class", "progress-text svelte-1txqlrd"), fe(
        n,
        "meta-text-center",
        /*variant*/
        e[8] === "center"
      ), fe(
        n,
        "meta-text",
        /*variant*/
        e[8] === "default"
      );
    },
    m(g, y) {
      f && f.m(g, y), H(g, t, y), H(g, n, y), _ && _.m(n, null), Ge(n, i), d && d.m(n, null), H(g, r, y), ~s && v[s].m(g, y), H(g, o, y), S && S.m(g, y), H(g, a, y), u = !0;
    },
    p(g, y) {
      /*variant*/
      g[8] === "default" && /*show_eta_bar*/
      g[18] && /*show_progress*/
      g[6] === "full" ? f ? f.p(g, y) : (f = $i(g), f.c(), f.m(t.parentNode, t)) : f && (f.d(1), f = null), h === (h = c(g)) && _ ? _.p(g, y) : (_ && _.d(1), _ = h && h(g), _ && (_.c(), _.m(n, i))), /*timer*/
      g[5] ? d ? d.p(g, y) : (d = nr(g), d.c(), d.m(n, null)) : d && (d.d(1), d = null), (!u || y[0] & /*variant*/
      256) && fe(
        n,
        "meta-text-center",
        /*variant*/
        g[8] === "center"
      ), (!u || y[0] & /*variant*/
      256) && fe(
        n,
        "meta-text",
        /*variant*/
        g[8] === "default"
      );
      let m = s;
      s = E(g), s === m ? ~s && v[s].p(g, y) : (l && (ls(), rt(v[m], 1, 1, () => {
        v[m] = null;
      }), rs()), ~s ? (l = v[s], l ? l.p(g, y) : (l = v[s] = b[s](g), l.c()), it(l, 1), l.m(o.parentNode, o)) : l = null), /*timer*/
      g[5] ? S && (S.d(1), S = null) : S ? S.p(g, y) : (S = ur(g), S.c(), S.m(a.parentNode, a));
    },
    i(g) {
      u || (it(l), u = !0);
    },
    o(g) {
      rt(l), u = !1;
    },
    d(g) {
      g && (A(t), A(n), A(r), A(o), A(a)), f && f.d(g), _ && _.d(), d && d.d(), ~s && v[s].d(g), S && S.d(g);
    }
  };
}
function $i(e) {
  let t, n = `translateX(${/*eta_level*/
  (e[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      t = Se("div"), we(t, "class", "eta-bar svelte-1txqlrd"), Ie(t, "transform", n);
    },
    m(i, r) {
      H(i, t, r);
    },
    p(i, r) {
      r[0] & /*eta_level*/
      131072 && n !== (n = `translateX(${/*eta_level*/
      (i[17] || 0) * 100 - 100}%)`) && Ie(t, "transform", n);
    },
    d(i) {
      i && A(t);
    }
  };
}
function Ef(e) {
  let t;
  return {
    c() {
      t = R("processing |");
    },
    m(n, i) {
      H(n, t, i);
    },
    p: Zn,
    d(n) {
      n && A(t);
    }
  };
}
function Sf(e) {
  let t, n = (
    /*queue_position*/
    e[2] + 1 + ""
  ), i, r, s, l;
  return {
    c() {
      t = R("queue: "), i = R(n), r = R("/"), s = R(
        /*queue_size*/
        e[3]
      ), l = R(" |");
    },
    m(o, a) {
      H(o, t, a), H(o, i, a), H(o, r, a), H(o, s, a), H(o, l, a);
    },
    p(o, a) {
      a[0] & /*queue_position*/
      4 && n !== (n = /*queue_position*/
      o[2] + 1 + "") && ce(i, n), a[0] & /*queue_size*/
      8 && ce(
        s,
        /*queue_size*/
        o[3]
      );
    },
    d(o) {
      o && (A(t), A(i), A(r), A(s), A(l));
    }
  };
}
function Tf(e) {
  let t, n = Vt(
    /*progress*/
    e[7]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = tr(Ki(e, n, r));
  return {
    c() {
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      t = ot();
    },
    m(r, s) {
      for (let l = 0; l < i.length; l += 1)
        i[l] && i[l].m(r, s);
      H(r, t, s);
    },
    p(r, s) {
      if (s[0] & /*progress*/
      128) {
        n = Vt(
          /*progress*/
          r[7]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const o = Ki(r, n, l);
          i[l] ? i[l].p(o, s) : (i[l] = tr(o), i[l].c(), i[l].m(t.parentNode, t));
        }
        for (; l < i.length; l += 1)
          i[l].d(1);
        i.length = n.length;
      }
    },
    d(r) {
      r && A(t), ss(i, r);
    }
  };
}
function er(e) {
  let t, n = (
    /*p*/
    e[38].unit + ""
  ), i, r, s = " ", l;
  function o(f, c) {
    return (
      /*p*/
      f[38].length != null ? Af : Bf
    );
  }
  let a = o(e), u = a(e);
  return {
    c() {
      u.c(), t = ye(), i = R(n), r = R(" | "), l = R(s);
    },
    m(f, c) {
      u.m(f, c), H(f, t, c), H(f, i, c), H(f, r, c), H(f, l, c);
    },
    p(f, c) {
      a === (a = o(f)) && u ? u.p(f, c) : (u.d(1), u = a(f), u && (u.c(), u.m(t.parentNode, t))), c[0] & /*progress*/
      128 && n !== (n = /*p*/
      f[38].unit + "") && ce(i, n);
    },
    d(f) {
      f && (A(t), A(i), A(r), A(l)), u.d(f);
    }
  };
}
function Bf(e) {
  let t = Xe(
    /*p*/
    e[38].index || 0
  ) + "", n;
  return {
    c() {
      n = R(t);
    },
    m(i, r) {
      H(i, n, r);
    },
    p(i, r) {
      r[0] & /*progress*/
      128 && t !== (t = Xe(
        /*p*/
        i[38].index || 0
      ) + "") && ce(n, t);
    },
    d(i) {
      i && A(n);
    }
  };
}
function Af(e) {
  let t = Xe(
    /*p*/
    e[38].index || 0
  ) + "", n, i, r = Xe(
    /*p*/
    e[38].length
  ) + "", s;
  return {
    c() {
      n = R(t), i = R("/"), s = R(r);
    },
    m(l, o) {
      H(l, n, o), H(l, i, o), H(l, s, o);
    },
    p(l, o) {
      o[0] & /*progress*/
      128 && t !== (t = Xe(
        /*p*/
        l[38].index || 0
      ) + "") && ce(n, t), o[0] & /*progress*/
      128 && r !== (r = Xe(
        /*p*/
        l[38].length
      ) + "") && ce(s, r);
    },
    d(l) {
      l && (A(n), A(i), A(s));
    }
  };
}
function tr(e) {
  let t, n = (
    /*p*/
    e[38].index != null && er(e)
  );
  return {
    c() {
      n && n.c(), t = ot();
    },
    m(i, r) {
      n && n.m(i, r), H(i, t, r);
    },
    p(i, r) {
      /*p*/
      i[38].index != null ? n ? n.p(i, r) : (n = er(i), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(i) {
      i && A(t), n && n.d(i);
    }
  };
}
function nr(e) {
  let t, n = (
    /*eta*/
    e[0] ? `/${/*formatted_eta*/
    e[19]}` : ""
  ), i, r;
  return {
    c() {
      t = R(
        /*formatted_timer*/
        e[20]
      ), i = R(n), r = R("s");
    },
    m(s, l) {
      H(s, t, l), H(s, i, l), H(s, r, l);
    },
    p(s, l) {
      l[0] & /*formatted_timer*/
      1048576 && ce(
        t,
        /*formatted_timer*/
        s[20]
      ), l[0] & /*eta, formatted_eta*/
      524289 && n !== (n = /*eta*/
      s[0] ? `/${/*formatted_eta*/
      s[19]}` : "") && ce(i, n);
    },
    d(s) {
      s && (A(t), A(i), A(r));
    }
  };
}
function Hf(e) {
  let t, n;
  return t = new lf({
    props: { margin: (
      /*variant*/
      e[8] === "default"
    ) }
  }), {
    c() {
      af(t.$$.fragment);
    },
    m(i, r) {
      df(t, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r[0] & /*variant*/
      256 && (s.margin = /*variant*/
      i[8] === "default"), t.$set(s);
    },
    i(i) {
      n || (it(t.$$.fragment, i), n = !0);
    },
    o(i) {
      rt(t.$$.fragment, i), n = !1;
    },
    d(i) {
      ff(t, i);
    }
  };
}
function Nf(e) {
  let t, n, i, r, s, l = `${/*last_progress_level*/
  e[15] * 100}%`, o = (
    /*progress*/
    e[7] != null && ir(e)
  );
  return {
    c() {
      t = Se("div"), n = Se("div"), o && o.c(), i = ye(), r = Se("div"), s = Se("div"), we(n, "class", "progress-level-inner svelte-1txqlrd"), we(s, "class", "progress-bar svelte-1txqlrd"), Ie(s, "width", l), we(r, "class", "progress-bar-wrap svelte-1txqlrd"), we(t, "class", "progress-level svelte-1txqlrd");
    },
    m(a, u) {
      H(a, t, u), Ge(t, n), o && o.m(n, null), Ge(t, i), Ge(t, r), Ge(r, s), e[30](s);
    },
    p(a, u) {
      /*progress*/
      a[7] != null ? o ? o.p(a, u) : (o = ir(a), o.c(), o.m(n, null)) : o && (o.d(1), o = null), u[0] & /*last_progress_level*/
      32768 && l !== (l = `${/*last_progress_level*/
      a[15] * 100}%`) && Ie(s, "width", l);
    },
    i: Zn,
    o: Zn,
    d(a) {
      a && A(t), o && o.d(), e[30](null);
    }
  };
}
function ir(e) {
  let t, n = Vt(
    /*progress*/
    e[7]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = ar(Yi(e, n, r));
  return {
    c() {
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      t = ot();
    },
    m(r, s) {
      for (let l = 0; l < i.length; l += 1)
        i[l] && i[l].m(r, s);
      H(r, t, s);
    },
    p(r, s) {
      if (s[0] & /*progress_level, progress*/
      16512) {
        n = Vt(
          /*progress*/
          r[7]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const o = Yi(r, n, l);
          i[l] ? i[l].p(o, s) : (i[l] = ar(o), i[l].c(), i[l].m(t.parentNode, t));
        }
        for (; l < i.length; l += 1)
          i[l].d(1);
        i.length = n.length;
      }
    },
    d(r) {
      r && A(t), ss(i, r);
    }
  };
}
function rr(e) {
  let t, n, i, r, s = (
    /*i*/
    e[40] !== 0 && Pf()
  ), l = (
    /*p*/
    e[38].desc != null && sr(e)
  ), o = (
    /*p*/
    e[38].desc != null && /*progress_level*/
    e[14] && /*progress_level*/
    e[14][
      /*i*/
      e[40]
    ] != null && lr()
  ), a = (
    /*progress_level*/
    e[14] != null && or(e)
  );
  return {
    c() {
      s && s.c(), t = ye(), l && l.c(), n = ye(), o && o.c(), i = ye(), a && a.c(), r = ot();
    },
    m(u, f) {
      s && s.m(u, f), H(u, t, f), l && l.m(u, f), H(u, n, f), o && o.m(u, f), H(u, i, f), a && a.m(u, f), H(u, r, f);
    },
    p(u, f) {
      /*p*/
      u[38].desc != null ? l ? l.p(u, f) : (l = sr(u), l.c(), l.m(n.parentNode, n)) : l && (l.d(1), l = null), /*p*/
      u[38].desc != null && /*progress_level*/
      u[14] && /*progress_level*/
      u[14][
        /*i*/
        u[40]
      ] != null ? o || (o = lr(), o.c(), o.m(i.parentNode, i)) : o && (o.d(1), o = null), /*progress_level*/
      u[14] != null ? a ? a.p(u, f) : (a = or(u), a.c(), a.m(r.parentNode, r)) : a && (a.d(1), a = null);
    },
    d(u) {
      u && (A(t), A(n), A(i), A(r)), s && s.d(u), l && l.d(u), o && o.d(u), a && a.d(u);
    }
  };
}
function Pf(e) {
  let t;
  return {
    c() {
      t = R(" /");
    },
    m(n, i) {
      H(n, t, i);
    },
    d(n) {
      n && A(t);
    }
  };
}
function sr(e) {
  let t = (
    /*p*/
    e[38].desc + ""
  ), n;
  return {
    c() {
      n = R(t);
    },
    m(i, r) {
      H(i, n, r);
    },
    p(i, r) {
      r[0] & /*progress*/
      128 && t !== (t = /*p*/
      i[38].desc + "") && ce(n, t);
    },
    d(i) {
      i && A(n);
    }
  };
}
function lr(e) {
  let t;
  return {
    c() {
      t = R("-");
    },
    m(n, i) {
      H(n, t, i);
    },
    d(n) {
      n && A(t);
    }
  };
}
function or(e) {
  let t = (100 * /*progress_level*/
  (e[14][
    /*i*/
    e[40]
  ] || 0)).toFixed(1) + "", n, i;
  return {
    c() {
      n = R(t), i = R("%");
    },
    m(r, s) {
      H(r, n, s), H(r, i, s);
    },
    p(r, s) {
      s[0] & /*progress_level*/
      16384 && t !== (t = (100 * /*progress_level*/
      (r[14][
        /*i*/
        r[40]
      ] || 0)).toFixed(1) + "") && ce(n, t);
    },
    d(r) {
      r && (A(n), A(i));
    }
  };
}
function ar(e) {
  let t, n = (
    /*p*/
    (e[38].desc != null || /*progress_level*/
    e[14] && /*progress_level*/
    e[14][
      /*i*/
      e[40]
    ] != null) && rr(e)
  );
  return {
    c() {
      n && n.c(), t = ot();
    },
    m(i, r) {
      n && n.m(i, r), H(i, t, r);
    },
    p(i, r) {
      /*p*/
      i[38].desc != null || /*progress_level*/
      i[14] && /*progress_level*/
      i[14][
        /*i*/
        i[40]
      ] != null ? n ? n.p(i, r) : (n = rr(i), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(i) {
      i && A(t), n && n.d(i);
    }
  };
}
function ur(e) {
  let t, n;
  return {
    c() {
      t = Se("p"), n = R(
        /*loading_text*/
        e[9]
      ), we(t, "class", "loading svelte-1txqlrd");
    },
    m(i, r) {
      H(i, t, r), Ge(t, n);
    },
    p(i, r) {
      r[0] & /*loading_text*/
      512 && ce(
        n,
        /*loading_text*/
        i[9]
      );
    },
    d(i) {
      i && A(t);
    }
  };
}
function kf(e) {
  let t, n, i, r, s;
  const l = [yf, wf], o = [];
  function a(u, f) {
    return (
      /*status*/
      u[4] === "pending" ? 0 : (
        /*status*/
        u[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(n = a(e)) && (i = o[n] = l[n](e)), {
    c() {
      t = Se("div"), i && i.c(), we(t, "class", r = "wrap " + /*variant*/
      e[8] + " " + /*show_progress*/
      e[6] + " svelte-1txqlrd"), fe(t, "hide", !/*status*/
      e[4] || /*status*/
      e[4] === "complete" || /*show_progress*/
      e[6] === "hidden"), fe(
        t,
        "translucent",
        /*variant*/
        e[8] === "center" && /*status*/
        (e[4] === "pending" || /*status*/
        e[4] === "error") || /*translucent*/
        e[11] || /*show_progress*/
        e[6] === "minimal"
      ), fe(
        t,
        "generating",
        /*status*/
        e[4] === "generating"
      ), fe(
        t,
        "border",
        /*border*/
        e[12]
      ), Ie(
        t,
        "position",
        /*absolute*/
        e[10] ? "absolute" : "static"
      ), Ie(
        t,
        "padding",
        /*absolute*/
        e[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(u, f) {
      H(u, t, f), ~n && o[n].m(t, null), e[31](t), s = !0;
    },
    p(u, f) {
      let c = n;
      n = a(u), n === c ? ~n && o[n].p(u, f) : (i && (ls(), rt(o[c], 1, 1, () => {
        o[c] = null;
      }), rs()), ~n ? (i = o[n], i ? i.p(u, f) : (i = o[n] = l[n](u), i.c()), it(i, 1), i.m(t, null)) : i = null), (!s || f[0] & /*variant, show_progress*/
      320 && r !== (r = "wrap " + /*variant*/
      u[8] + " " + /*show_progress*/
      u[6] + " svelte-1txqlrd")) && we(t, "class", r), (!s || f[0] & /*variant, show_progress, status, show_progress*/
      336) && fe(t, "hide", !/*status*/
      u[4] || /*status*/
      u[4] === "complete" || /*show_progress*/
      u[6] === "hidden"), (!s || f[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && fe(
        t,
        "translucent",
        /*variant*/
        u[8] === "center" && /*status*/
        (u[4] === "pending" || /*status*/
        u[4] === "error") || /*translucent*/
        u[11] || /*show_progress*/
        u[6] === "minimal"
      ), (!s || f[0] & /*variant, show_progress, status*/
      336) && fe(
        t,
        "generating",
        /*status*/
        u[4] === "generating"
      ), (!s || f[0] & /*variant, show_progress, border*/
      4416) && fe(
        t,
        "border",
        /*border*/
        u[12]
      ), f[0] & /*absolute*/
      1024 && Ie(
        t,
        "position",
        /*absolute*/
        u[10] ? "absolute" : "static"
      ), f[0] & /*absolute*/
      1024 && Ie(
        t,
        "padding",
        /*absolute*/
        u[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(u) {
      s || (it(i), s = !0);
    },
    o(u) {
      rt(i), s = !1;
    },
    d(u) {
      u && A(t), ~n && o[n].d(), e[31](null);
    }
  };
}
let Nt = [], kn = !1;
async function Cf(e, t = !0) {
  if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
    if (Nt.push(e), !kn)
      kn = !0;
    else
      return;
    await bf(), requestAnimationFrame(() => {
      let n = [0, 0];
      for (let i = 0; i < Nt.length; i++) {
        const s = Nt[i].getBoundingClientRect();
        (i === 0 || s.top + window.scrollY <= n[0]) && (n[0] = s.top + window.scrollY, n[1] = i);
      }
      window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), kn = !1, Nt = [];
    });
  }
}
function If(e, t, n) {
  let i, { $$slots: r = {}, $$scope: s } = t, { i18n: l } = t, { eta: o = null } = t, { queue: a = !1 } = t, { queue_position: u } = t, { queue_size: f } = t, { status: c } = t, { scroll_to_output: h = !1 } = t, { timer: _ = !0 } = t, { show_progress: d = "full" } = t, { message: b = null } = t, { progress: v = null } = t, { variant: E = "default" } = t, { loading_text: S = "Loading..." } = t, { absolute: g = !0 } = t, { translucent: y = !1 } = t, { border: m = !1 } = t, { autoscroll: X } = t, Z, J = !1, ie = 0, T = 0, Te = null, je = 0, re = null, N, L = null, Q = !0;
  const U = () => {
    n(25, ie = performance.now()), n(26, T = 0), J = !0, B();
  };
  function B() {
    requestAnimationFrame(() => {
      n(26, T = (performance.now() - ie) / 1e3), J && B();
    });
  }
  function q() {
    n(26, T = 0), J && (J = !1);
  }
  pf(() => {
    J && q();
  });
  let w = null;
  function O(p) {
    Ji[p ? "unshift" : "push"](() => {
      L = p, n(16, L), n(7, v), n(14, re), n(15, N);
    });
  }
  function F(p) {
    Ji[p ? "unshift" : "push"](() => {
      Z = p, n(13, Z);
    });
  }
  return e.$$set = (p) => {
    "i18n" in p && n(1, l = p.i18n), "eta" in p && n(0, o = p.eta), "queue" in p && n(21, a = p.queue), "queue_position" in p && n(2, u = p.queue_position), "queue_size" in p && n(3, f = p.queue_size), "status" in p && n(4, c = p.status), "scroll_to_output" in p && n(22, h = p.scroll_to_output), "timer" in p && n(5, _ = p.timer), "show_progress" in p && n(6, d = p.show_progress), "message" in p && n(23, b = p.message), "progress" in p && n(7, v = p.progress), "variant" in p && n(8, E = p.variant), "loading_text" in p && n(9, S = p.loading_text), "absolute" in p && n(10, g = p.absolute), "translucent" in p && n(11, y = p.translucent), "border" in p && n(12, m = p.border), "autoscroll" in p && n(24, X = p.autoscroll), "$$scope" in p && n(28, s = p.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*eta, old_eta, queue, timer_start*/
    169869313 && (o === null ? n(0, o = Te) : a && n(0, o = (performance.now() - ie) / 1e3 + o), o != null && (n(19, w = o.toFixed(1)), n(27, Te = o))), e.$$.dirty[0] & /*eta, timer_diff*/
    67108865 && n(17, je = o === null || o <= 0 || !T ? null : Math.min(T / o, 1)), e.$$.dirty[0] & /*progress*/
    128 && v != null && n(18, Q = !1), e.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (v != null ? n(14, re = v.map((p) => {
      if (p.index != null && p.length != null)
        return p.index / p.length;
      if (p.progress != null)
        return p.progress;
    })) : n(14, re = null), re ? (n(15, N = re[re.length - 1]), L && (N === 0 ? n(16, L.style.transition = "0", L) : n(16, L.style.transition = "150ms", L))) : n(15, N = void 0)), e.$$.dirty[0] & /*status*/
    16 && (c === "pending" ? U() : q()), e.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && Z && h && (c === "pending" || c === "complete") && Cf(Z, X), e.$$.dirty[0] & /*status, message*/
    8388624, e.$$.dirty[0] & /*timer_diff*/
    67108864 && n(20, i = T.toFixed(1));
  }, [
    o,
    l,
    u,
    f,
    c,
    _,
    d,
    v,
    E,
    S,
    g,
    y,
    m,
    Z,
    re,
    N,
    L,
    je,
    Q,
    w,
    i,
    a,
    h,
    b,
    X,
    ie,
    T,
    Te,
    s,
    r,
    O,
    F
  ];
}
class os extends of {
  constructor(t) {
    super(), _f(
      this,
      t,
      If,
      kf,
      mf,
      {
        i18n: 1,
        eta: 0,
        queue: 21,
        queue_position: 2,
        queue_size: 3,
        status: 4,
        scroll_to_output: 22,
        timer: 5,
        show_progress: 6,
        message: 23,
        progress: 7,
        variant: 8,
        loading_text: 9,
        absolute: 10,
        translucent: 11,
        border: 12,
        autoscroll: 24
      },
      null,
      [-1, -1]
    );
  }
}
const {
  SvelteComponent: Of,
  add_flush_callback: Lf,
  assign: Mf,
  bind: Rf,
  binding_callbacks: Df,
  create_component: zt,
  destroy_component: Xt,
  detach: Uf,
  flush: K,
  get_spread_object: Ff,
  get_spread_update: Gf,
  init: xf,
  insert: qf,
  mount_component: Wt,
  safe_not_equal: jf,
  space: Vf,
  transition_in: Zt,
  transition_out: Jt
} = window.__gradio__svelte__internal;
function zf(e) {
  let t, n;
  return t = new Zl({
    props: {
      i18n: (
        /*gradio*/
        e[13].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      zt(t.$$.fragment);
    },
    m(i, r) {
      Wt(t, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r & /*gradio*/
      8192 && (s.i18n = /*gradio*/
      i[13].i18n), t.$set(s);
    },
    i(i) {
      n || (Zt(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Jt(t.$$.fragment, i), n = !1;
    },
    d(i) {
      Xt(t, i);
    }
  };
}
function Xf(e) {
  let t, n, i, r, s;
  const l = [
    {
      autoscroll: (
        /*gradio*/
        e[13].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      e[13].i18n
    ) },
    /*loading_status*/
    e[11]
  ];
  let o = {};
  for (let f = 0; f < l.length; f += 1)
    o = Mf(o, l[f]);
  t = new os({ props: o });
  function a(f) {
    e[15](f);
  }
  let u = {
    root: (
      /*root*/
      e[12]
    ),
    label: (
      /*label*/
      e[4]
    ),
    show_label: (
      /*show_label*/
      e[5]
    ),
    $$slots: { default: [zf] },
    $$scope: { ctx: e }
  };
  return (
    /*value*/
    e[0] !== void 0 && (u.value = /*value*/
    e[0]), i = new Ju({ props: u }), Df.push(() => Rf(i, "value", a)), i.$on(
      "edit",
      /*edit_handler*/
      e[16]
    ), i.$on(
      "clear",
      /*clear_handler*/
      e[17]
    ), i.$on(
      "stream",
      /*stream_handler*/
      e[18]
    ), i.$on(
      "drag",
      /*drag_handler*/
      e[19]
    ), i.$on(
      "upload",
      /*upload_handler*/
      e[20]
    ), i.$on(
      "select",
      /*select_handler*/
      e[21]
    ), i.$on(
      "share",
      /*share_handler*/
      e[22]
    ), {
      c() {
        zt(t.$$.fragment), n = Vf(), zt(i.$$.fragment);
      },
      m(f, c) {
        Wt(t, f, c), qf(f, n, c), Wt(i, f, c), s = !0;
      },
      p(f, c) {
        const h = c & /*gradio, loading_status*/
        10240 ? Gf(l, [
          c & /*gradio*/
          8192 && {
            autoscroll: (
              /*gradio*/
              f[13].autoscroll
            )
          },
          c & /*gradio*/
          8192 && { i18n: (
            /*gradio*/
            f[13].i18n
          ) },
          c & /*loading_status*/
          2048 && Ff(
            /*loading_status*/
            f[11]
          )
        ]) : {};
        t.$set(h);
        const _ = {};
        c & /*root*/
        4096 && (_.root = /*root*/
        f[12]), c & /*label*/
        16 && (_.label = /*label*/
        f[4]), c & /*show_label*/
        32 && (_.show_label = /*show_label*/
        f[5]), c & /*$$scope, gradio*/
        8396800 && (_.$$scope = { dirty: c, ctx: f }), !r && c & /*value*/
        1 && (r = !0, _.value = /*value*/
        f[0], Lf(() => r = !1)), i.$set(_);
      },
      i(f) {
        s || (Zt(t.$$.fragment, f), Zt(i.$$.fragment, f), s = !0);
      },
      o(f) {
        Jt(t.$$.fragment, f), Jt(i.$$.fragment, f), s = !1;
      },
      d(f) {
        f && Uf(n), Xt(t, f), Xt(i, f);
      }
    }
  );
}
function Wf(e) {
  let t, n;
  return t = new mr({
    props: {
      visible: (
        /*visible*/
        e[3]
      ),
      variant: (
        /*value*/
        e[0] === null ? "dashed" : "solid"
      ),
      border_mode: (
        /*dragging*/
        e[14] ? "focus" : "base"
      ),
      padding: !1,
      elem_id: (
        /*elem_id*/
        e[1]
      ),
      elem_classes: (
        /*elem_classes*/
        e[2]
      ),
      height: (
        /*height*/
        e[6] || fr
      ),
      width: (
        /*width*/
        e[7]
      ),
      allow_overflow: !1,
      container: (
        /*container*/
        e[8]
      ),
      scale: (
        /*scale*/
        e[9]
      ),
      min_width: (
        /*min_width*/
        e[10]
      ),
      $$slots: { default: [Xf] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      zt(t.$$.fragment);
    },
    m(i, r) {
      Wt(t, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*visible*/
      8 && (s.visible = /*visible*/
      i[3]), r & /*value*/
      1 && (s.variant = /*value*/
      i[0] === null ? "dashed" : "solid"), r & /*dragging*/
      16384 && (s.border_mode = /*dragging*/
      i[14] ? "focus" : "base"), r & /*elem_id*/
      2 && (s.elem_id = /*elem_id*/
      i[1]), r & /*elem_classes*/
      4 && (s.elem_classes = /*elem_classes*/
      i[2]), r & /*height*/
      64 && (s.height = /*height*/
      i[6] || fr), r & /*width*/
      128 && (s.width = /*width*/
      i[7]), r & /*container*/
      256 && (s.container = /*container*/
      i[8]), r & /*scale*/
      512 && (s.scale = /*scale*/
      i[9]), r & /*min_width*/
      1024 && (s.min_width = /*min_width*/
      i[10]), r & /*$$scope, root, label, show_label, value, gradio, dragging, loading_status*/
      8419377 && (s.$$scope = { dirty: r, ctx: i }), t.$set(s);
    },
    i(i) {
      n || (Zt(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Jt(t.$$.fragment, i), n = !1;
    },
    d(i) {
      Xt(t, i);
    }
  };
}
const fr = 340;
function Zf(e, t, n) {
  let { elem_id: i = "" } = t, { elem_classes: r = [] } = t, { visible: s = !0 } = t, { value: l = [null, null] } = t, { label: o } = t, { show_label: a } = t, { height: u } = t, { width: f } = t, { container: c = !0 } = t, { scale: h = null } = t, { min_width: _ = void 0 } = t, { loading_status: d } = t, { root: b } = t, { gradio: v } = t, E;
  function S(T) {
    l = T, n(0, l);
  }
  const g = () => v.dispatch("edit"), y = () => v.dispatch("clear"), m = () => v.dispatch("stream"), X = ({ detail: T }) => n(14, E = T), Z = () => v.dispatch("upload"), J = ({ detail: T }) => v.dispatch("select", T), ie = ({ detail: T }) => v.dispatch("share", T);
  return e.$$set = (T) => {
    "elem_id" in T && n(1, i = T.elem_id), "elem_classes" in T && n(2, r = T.elem_classes), "visible" in T && n(3, s = T.visible), "value" in T && n(0, l = T.value), "label" in T && n(4, o = T.label), "show_label" in T && n(5, a = T.show_label), "height" in T && n(6, u = T.height), "width" in T && n(7, f = T.width), "container" in T && n(8, c = T.container), "scale" in T && n(9, h = T.scale), "min_width" in T && n(10, _ = T.min_width), "loading_status" in T && n(11, d = T.loading_status), "root" in T && n(12, b = T.root), "gradio" in T && n(13, v = T.gradio);
  }, e.$$.update = () => {
    e.$$.dirty & /*value*/
    1 && n(0, l = l || null), e.$$.dirty & /*value, gradio*/
    8193 && v.dispatch("change");
  }, [
    l,
    i,
    r,
    s,
    o,
    a,
    u,
    f,
    c,
    h,
    _,
    d,
    b,
    v,
    E,
    S,
    g,
    y,
    m,
    X,
    Z,
    J,
    ie
  ];
}
class Jf extends Of {
  constructor(t) {
    super(), xf(this, t, Zf, Wf, jf, {
      elem_id: 1,
      elem_classes: 2,
      visible: 3,
      value: 0,
      label: 4,
      show_label: 5,
      height: 6,
      width: 7,
      container: 8,
      scale: 9,
      min_width: 10,
      loading_status: 11,
      root: 12,
      gradio: 13
    });
  }
  get elem_id() {
    return this.$$.ctx[1];
  }
  set elem_id(t) {
    this.$$set({ elem_id: t }), K();
  }
  get elem_classes() {
    return this.$$.ctx[2];
  }
  set elem_classes(t) {
    this.$$set({ elem_classes: t }), K();
  }
  get visible() {
    return this.$$.ctx[3];
  }
  set visible(t) {
    this.$$set({ visible: t }), K();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(t) {
    this.$$set({ value: t }), K();
  }
  get label() {
    return this.$$.ctx[4];
  }
  set label(t) {
    this.$$set({ label: t }), K();
  }
  get show_label() {
    return this.$$.ctx[5];
  }
  set show_label(t) {
    this.$$set({ show_label: t }), K();
  }
  get height() {
    return this.$$.ctx[6];
  }
  set height(t) {
    this.$$set({ height: t }), K();
  }
  get width() {
    return this.$$.ctx[7];
  }
  set width(t) {
    this.$$set({ width: t }), K();
  }
  get container() {
    return this.$$.ctx[8];
  }
  set container(t) {
    this.$$set({ container: t }), K();
  }
  get scale() {
    return this.$$.ctx[9];
  }
  set scale(t) {
    this.$$set({ scale: t }), K();
  }
  get min_width() {
    return this.$$.ctx[10];
  }
  set min_width(t) {
    this.$$set({ min_width: t }), K();
  }
  get loading_status() {
    return this.$$.ctx[11];
  }
  set loading_status(t) {
    this.$$set({ loading_status: t }), K();
  }
  get root() {
    return this.$$.ctx[12];
  }
  set root(t) {
    this.$$set({ root: t }), K();
  }
  get gradio() {
    return this.$$.ctx[13];
  }
  set gradio(t) {
    this.$$set({ gradio: t }), K();
  }
}
const {
  SvelteComponent: Qf,
  add_flush_callback: Yf,
  attr: me,
  bind: Kf,
  binding_callbacks: $f,
  check_outros: ec,
  create_component: rn,
  destroy_component: sn,
  detach: Je,
  element: Jn,
  empty: tc,
  group_outros: nc,
  init: ic,
  insert: Qe,
  mount_component: ln,
  safe_not_equal: rc,
  set_style: cr,
  space: as,
  src_url_equal: Pt,
  transition_in: Ye,
  transition_out: Ke
} = window.__gradio__svelte__internal;
function sc(e) {
  let t, n, i, r;
  function s(o) {
    e[6](o);
  }
  let l = {
    $$slots: { default: [oc] },
    $$scope: { ctx: e }
  };
  return (
    /*position*/
    e[4] !== void 0 && (l.position = /*position*/
    e[4]), n = new hr({ props: l }), $f.push(() => Kf(n, "position", s)), {
      c() {
        t = Jn("div"), rn(n.$$.fragment), me(t, "class", "slider-wrap svelte-un3yq0");
      },
      m(o, a) {
        Qe(o, t, a), ln(n, t, null), r = !0;
      },
      p(o, a) {
        const u = {};
        a & /*$$scope, value, position*/
        145 && (u.$$scope = { dirty: a, ctx: o }), !i && a & /*position*/
        16 && (i = !0, u.position = /*position*/
        o[4], Yf(() => i = !1)), n.$set(u);
      },
      i(o) {
        r || (Ye(n.$$.fragment, o), r = !0);
      },
      o(o) {
        Ke(n.$$.fragment, o), r = !1;
      },
      d(o) {
        o && Je(t), sn(n);
      }
    }
  );
}
function lc(e) {
  let t, n;
  return t = new Sl({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [ac] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      rn(t.$$.fragment);
    },
    m(i, r) {
      ln(t, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r & /*$$scope*/
      128 && (s.$$scope = { dirty: r, ctx: i }), t.$set(s);
    },
    i(i) {
      n || (Ye(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Ke(t.$$.fragment, i), n = !1;
    },
    d(i) {
      sn(t, i);
    }
  };
}
function oc(e) {
  let t, n, i, r, s;
  return {
    c() {
      var l, o, a, u;
      t = Jn("img"), i = as(), r = Jn("img"), Pt(t.src, n = /*value*/
      (o = (l = e[0]) == null ? void 0 : l[0]) == null ? void 0 : o.url) || me(t, "src", n), me(t, "alt", ""), me(t, "loading", "lazy"), me(t, "class", "svelte-un3yq0"), me(r, "class", "fixed svelte-un3yq0"), Pt(r.src, s = /*value*/
      (u = (a = e[0]) == null ? void 0 : a[1]) == null ? void 0 : u.url) || me(r, "src", s), me(r, "alt", ""), me(r, "loading", "lazy"), cr(r, "clip-path", "inset(0 0 0 " + /*position*/
      e[4] * 100 + "%)");
    },
    m(l, o) {
      Qe(l, t, o), Qe(l, i, o), Qe(l, r, o);
    },
    p(l, o) {
      var a, u, f, c;
      o & /*value*/
      1 && !Pt(t.src, n = /*value*/
      (u = (a = l[0]) == null ? void 0 : a[0]) == null ? void 0 : u.url) && me(t, "src", n), o & /*value*/
      1 && !Pt(r.src, s = /*value*/
      (c = (f = l[0]) == null ? void 0 : f[1]) == null ? void 0 : c.url) && me(r, "src", s), o & /*position*/
      16 && cr(r, "clip-path", "inset(0 0 0 " + /*position*/
      l[4] * 100 + "%)");
    },
    d(l) {
      l && (Je(t), Je(i), Je(r));
    }
  };
}
function ac(e) {
  let t, n;
  return t = new ti({}), {
    c() {
      rn(t.$$.fragment);
    },
    m(i, r) {
      ln(t, i, r), n = !0;
    },
    i(i) {
      n || (Ye(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Ke(t.$$.fragment, i), n = !1;
    },
    d(i) {
      sn(t, i);
    }
  };
}
function uc(e) {
  let t, n, i, r, s, l;
  t = new gr({
    props: {
      show_label: (
        /*show_label*/
        e[2]
      ),
      Icon: ti,
      label: (
        /*label*/
        e[1] || /*i18n*/
        e[3]("image.image")
      )
    }
  });
  const o = [lc, sc], a = [];
  function u(f, c) {
    return (
      /*value*/
      f[0] === null || /*value*/
      f[0][0] === null || /*value*/
      f[0][1] === null ? 0 : 1
    );
  }
  return i = u(e), r = a[i] = o[i](e), {
    c() {
      rn(t.$$.fragment), n = as(), r.c(), s = tc();
    },
    m(f, c) {
      ln(t, f, c), Qe(f, n, c), a[i].m(f, c), Qe(f, s, c), l = !0;
    },
    p(f, [c]) {
      const h = {};
      c & /*show_label*/
      4 && (h.show_label = /*show_label*/
      f[2]), c & /*label, i18n*/
      10 && (h.label = /*label*/
      f[1] || /*i18n*/
      f[3]("image.image")), t.$set(h);
      let _ = i;
      i = u(f), i === _ ? a[i].p(f, c) : (nc(), Ke(a[_], 1, 1, () => {
        a[_] = null;
      }), ec(), r = a[i], r ? r.p(f, c) : (r = a[i] = o[i](f), r.c()), Ye(r, 1), r.m(s.parentNode, s));
    },
    i(f) {
      l || (Ye(t.$$.fragment, f), Ye(r), l = !0);
    },
    o(f) {
      Ke(t.$$.fragment, f), Ke(r), l = !1;
    },
    d(f) {
      f && (Je(n), Je(s)), sn(t, f), a[i].d(f);
    }
  };
}
function fc(e, t, n) {
  let { value: i = [null, null] } = t, { label: r = void 0 } = t, { show_label: s } = t, { root: l } = t, { i18n: o } = t, a = 0.5;
  function u(f) {
    a = f, n(4, a);
  }
  return e.$$set = (f) => {
    "value" in f && n(0, i = f.value), "label" in f && n(1, r = f.label), "show_label" in f && n(2, s = f.show_label), "root" in f && n(5, l = f.root), "i18n" in f && n(3, o = f.i18n);
  }, e.$$.update = () => {
    e.$$.dirty & /*value, root*/
    33 && n(0, i = ge(i, l, null));
  }, [i, r, s, o, a, l, u];
}
class cc extends Qf {
  constructor(t) {
    super(), ic(this, t, fc, uc, rc, {
      value: 0,
      label: 1,
      show_label: 2,
      root: 5,
      i18n: 3
    });
  }
}
const {
  SvelteComponent: hc,
  assign: _c,
  create_component: Qn,
  destroy_component: Yn,
  detach: dc,
  flush: $,
  get_spread_object: mc,
  get_spread_update: gc,
  init: bc,
  insert: pc,
  mount_component: Kn,
  safe_not_equal: vc,
  space: wc,
  transition_in: $n,
  transition_out: ei
} = window.__gradio__svelte__internal;
function yc(e) {
  let t, n, i, r;
  const s = [
    {
      autoscroll: (
        /*gradio*/
        e[13].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      e[13].i18n
    ) },
    /*loading_status*/
    e[12]
  ];
  let l = {};
  for (let o = 0; o < s.length; o += 1)
    l = _c(l, s[o]);
  return t = new os({ props: l }), i = new cc({
    props: {
      root: (
        /*root*/
        e[6]
      ),
      value: (
        /*value*/
        e[0]
      ),
      label: (
        /*label*/
        e[4]
      ),
      show_label: (
        /*show_label*/
        e[5]
      ),
      i18n: (
        /*gradio*/
        e[13].i18n
      )
    }
  }), i.$on(
    "select",
    /*select_handler*/
    e[15]
  ), i.$on(
    "share",
    /*share_handler*/
    e[16]
  ), i.$on(
    "error",
    /*error_handler*/
    e[17]
  ), {
    c() {
      Qn(t.$$.fragment), n = wc(), Qn(i.$$.fragment);
    },
    m(o, a) {
      Kn(t, o, a), pc(o, n, a), Kn(i, o, a), r = !0;
    },
    p(o, a) {
      const u = a & /*gradio, loading_status*/
      12288 ? gc(s, [
        a & /*gradio*/
        8192 && {
          autoscroll: (
            /*gradio*/
            o[13].autoscroll
          )
        },
        a & /*gradio*/
        8192 && { i18n: (
          /*gradio*/
          o[13].i18n
        ) },
        a & /*loading_status*/
        4096 && mc(
          /*loading_status*/
          o[12]
        )
      ]) : {};
      t.$set(u);
      const f = {};
      a & /*root*/
      64 && (f.root = /*root*/
      o[6]), a & /*value*/
      1 && (f.value = /*value*/
      o[0]), a & /*label*/
      16 && (f.label = /*label*/
      o[4]), a & /*show_label*/
      32 && (f.show_label = /*show_label*/
      o[5]), a & /*gradio*/
      8192 && (f.i18n = /*gradio*/
      o[13].i18n), i.$set(f);
    },
    i(o) {
      r || ($n(t.$$.fragment, o), $n(i.$$.fragment, o), r = !0);
    },
    o(o) {
      ei(t.$$.fragment, o), ei(i.$$.fragment, o), r = !1;
    },
    d(o) {
      o && dc(n), Yn(t, o), Yn(i, o);
    }
  };
}
function Ec(e) {
  let t, n;
  return t = new mr({
    props: {
      visible: (
        /*visible*/
        e[3]
      ),
      variant: "solid",
      border_mode: (
        /*dragging*/
        e[14] ? "focus" : "base"
      ),
      padding: !1,
      elem_id: (
        /*elem_id*/
        e[1]
      ),
      elem_classes: (
        /*elem_classes*/
        e[2]
      ),
      height: (
        /*height*/
        e[7] || void 0
      ),
      width: (
        /*width*/
        e[8]
      ),
      allow_overflow: !1,
      container: (
        /*container*/
        e[9]
      ),
      scale: (
        /*scale*/
        e[10]
      ),
      min_width: (
        /*min_width*/
        e[11]
      ),
      $$slots: { default: [yc] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Qn(t.$$.fragment);
    },
    m(i, r) {
      Kn(t, i, r), n = !0;
    },
    p(i, [r]) {
      const s = {};
      r & /*visible*/
      8 && (s.visible = /*visible*/
      i[3]), r & /*elem_id*/
      2 && (s.elem_id = /*elem_id*/
      i[1]), r & /*elem_classes*/
      4 && (s.elem_classes = /*elem_classes*/
      i[2]), r & /*height*/
      128 && (s.height = /*height*/
      i[7] || void 0), r & /*width*/
      256 && (s.width = /*width*/
      i[8]), r & /*container*/
      512 && (s.container = /*container*/
      i[9]), r & /*scale*/
      1024 && (s.scale = /*scale*/
      i[10]), r & /*min_width*/
      2048 && (s.min_width = /*min_width*/
      i[11]), r & /*$$scope, root, value, label, show_label, gradio, loading_status*/
      274545 && (s.$$scope = { dirty: r, ctx: i }), t.$set(s);
    },
    i(i) {
      n || ($n(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ei(t.$$.fragment, i), n = !1;
    },
    d(i) {
      Yn(t, i);
    }
  };
}
function Sc(e, t, n) {
  let { elem_id: i = "" } = t, { elem_classes: r = [] } = t, { visible: s = !0 } = t, { value: l = null } = t, { label: o } = t, { show_label: a } = t, { root: u } = t, { height: f } = t, { width: c } = t, { container: h = !0 } = t, { scale: _ = null } = t, { min_width: d = void 0 } = t, { loading_status: b } = t, { gradio: v } = t, E;
  const S = ({ detail: m }) => v.dispatch("select", m), g = ({ detail: m }) => v.dispatch("share", m), y = ({ detail: m }) => v.dispatch("error", m);
  return e.$$set = (m) => {
    "elem_id" in m && n(1, i = m.elem_id), "elem_classes" in m && n(2, r = m.elem_classes), "visible" in m && n(3, s = m.visible), "value" in m && n(0, l = m.value), "label" in m && n(4, o = m.label), "show_label" in m && n(5, a = m.show_label), "root" in m && n(6, u = m.root), "height" in m && n(7, f = m.height), "width" in m && n(8, c = m.width), "container" in m && n(9, h = m.container), "scale" in m && n(10, _ = m.scale), "min_width" in m && n(11, d = m.min_width), "loading_status" in m && n(12, b = m.loading_status), "gradio" in m && n(13, v = m.gradio);
  }, e.$$.update = () => {
    e.$$.dirty & /*value*/
    1 && n(0, l = l || null), e.$$.dirty & /*value, gradio*/
    8193 && v.dispatch("change");
  }, [
    l,
    i,
    r,
    s,
    o,
    a,
    u,
    f,
    c,
    h,
    _,
    d,
    b,
    v,
    E,
    S,
    g,
    y
  ];
}
class Tc extends hc {
  constructor(t) {
    super(), bc(this, t, Sc, Ec, vc, {
      elem_id: 1,
      elem_classes: 2,
      visible: 3,
      value: 0,
      label: 4,
      show_label: 5,
      root: 6,
      height: 7,
      width: 8,
      container: 9,
      scale: 10,
      min_width: 11,
      loading_status: 12,
      gradio: 13
    });
  }
  get elem_id() {
    return this.$$.ctx[1];
  }
  set elem_id(t) {
    this.$$set({ elem_id: t }), $();
  }
  get elem_classes() {
    return this.$$.ctx[2];
  }
  set elem_classes(t) {
    this.$$set({ elem_classes: t }), $();
  }
  get visible() {
    return this.$$.ctx[3];
  }
  set visible(t) {
    this.$$set({ visible: t }), $();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(t) {
    this.$$set({ value: t }), $();
  }
  get label() {
    return this.$$.ctx[4];
  }
  set label(t) {
    this.$$set({ label: t }), $();
  }
  get show_label() {
    return this.$$.ctx[5];
  }
  set show_label(t) {
    this.$$set({ show_label: t }), $();
  }
  get root() {
    return this.$$.ctx[6];
  }
  set root(t) {
    this.$$set({ root: t }), $();
  }
  get height() {
    return this.$$.ctx[7];
  }
  set height(t) {
    this.$$set({ height: t }), $();
  }
  get width() {
    return this.$$.ctx[8];
  }
  set width(t) {
    this.$$set({ width: t }), $();
  }
  get container() {
    return this.$$.ctx[9];
  }
  set container(t) {
    this.$$set({ container: t }), $();
  }
  get scale() {
    return this.$$.ctx[10];
  }
  set scale(t) {
    this.$$set({ scale: t }), $();
  }
  get min_width() {
    return this.$$.ctx[11];
  }
  set min_width(t) {
    this.$$set({ min_width: t }), $();
  }
  get loading_status() {
    return this.$$.ctx[12];
  }
  set loading_status(t) {
    this.$$set({ loading_status: t }), $();
  }
  get gradio() {
    return this.$$.ctx[13];
  }
  set gradio(t) {
    this.$$set({ gradio: t }), $();
  }
}
const {
  SvelteComponent: Bc,
  check_outros: Ac,
  create_component: us,
  destroy_component: fs,
  detach: Hc,
  empty: Nc,
  flush: ue,
  group_outros: Pc,
  init: kc,
  insert: Cc,
  mount_component: cs,
  safe_not_equal: Ic,
  transition_in: Qt,
  transition_out: Yt
} = window.__gradio__svelte__internal;
function Oc(e) {
  let t, n;
  return t = new Tc({
    props: {
      elem_id: (
        /*elem_id*/
        e[0]
      ),
      elem_classes: (
        /*elem_classes*/
        e[1]
      ),
      visible: (
        /*visible*/
        e[2]
      ),
      value: (
        /*value*/
        e[3]
      ),
      label: (
        /*label*/
        e[4]
      ),
      show_label: (
        /*show_label*/
        e[5]
      ),
      loading_status: (
        /*loading_status*/
        e[9]
      ),
      height: (
        /*height*/
        e[7]
      ),
      width: (
        /*width*/
        e[8]
      ),
      root: (
        /*root*/
        e[6]
      ),
      gradio: (
        /*gradio*/
        e[11]
      )
    }
  }), {
    c() {
      us(t.$$.fragment);
    },
    m(i, r) {
      cs(t, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r & /*elem_id*/
      1 && (s.elem_id = /*elem_id*/
      i[0]), r & /*elem_classes*/
      2 && (s.elem_classes = /*elem_classes*/
      i[1]), r & /*visible*/
      4 && (s.visible = /*visible*/
      i[2]), r & /*value*/
      8 && (s.value = /*value*/
      i[3]), r & /*label*/
      16 && (s.label = /*label*/
      i[4]), r & /*show_label*/
      32 && (s.show_label = /*show_label*/
      i[5]), r & /*loading_status*/
      512 && (s.loading_status = /*loading_status*/
      i[9]), r & /*height*/
      128 && (s.height = /*height*/
      i[7]), r & /*width*/
      256 && (s.width = /*width*/
      i[8]), r & /*root*/
      64 && (s.root = /*root*/
      i[6]), r & /*gradio*/
      2048 && (s.gradio = /*gradio*/
      i[11]), t.$set(s);
    },
    i(i) {
      n || (Qt(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Yt(t.$$.fragment, i), n = !1;
    },
    d(i) {
      fs(t, i);
    }
  };
}
function Lc(e) {
  let t, n;
  return t = new Jf({
    props: {
      elem_id: (
        /*elem_id*/
        e[0]
      ),
      elem_classes: (
        /*elem_classes*/
        e[1]
      ),
      visible: (
        /*visible*/
        e[2]
      ),
      value: (
        /*value*/
        e[3]
      ),
      label: (
        /*label*/
        e[4]
      ),
      show_label: (
        /*show_label*/
        e[5]
      ),
      loading_status: (
        /*loading_status*/
        e[9]
      ),
      height: (
        /*height*/
        e[7]
      ),
      width: (
        /*width*/
        e[8]
      ),
      root: (
        /*root*/
        e[6]
      ),
      gradio: (
        /*gradio*/
        e[11]
      )
    }
  }), {
    c() {
      us(t.$$.fragment);
    },
    m(i, r) {
      cs(t, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r & /*elem_id*/
      1 && (s.elem_id = /*elem_id*/
      i[0]), r & /*elem_classes*/
      2 && (s.elem_classes = /*elem_classes*/
      i[1]), r & /*visible*/
      4 && (s.visible = /*visible*/
      i[2]), r & /*value*/
      8 && (s.value = /*value*/
      i[3]), r & /*label*/
      16 && (s.label = /*label*/
      i[4]), r & /*show_label*/
      32 && (s.show_label = /*show_label*/
      i[5]), r & /*loading_status*/
      512 && (s.loading_status = /*loading_status*/
      i[9]), r & /*height*/
      128 && (s.height = /*height*/
      i[7]), r & /*width*/
      256 && (s.width = /*width*/
      i[8]), r & /*root*/
      64 && (s.root = /*root*/
      i[6]), r & /*gradio*/
      2048 && (s.gradio = /*gradio*/
      i[11]), t.$set(s);
    },
    i(i) {
      n || (Qt(t.$$.fragment, i), n = !0);
    },
    o(i) {
      Yt(t.$$.fragment, i), n = !1;
    },
    d(i) {
      fs(t, i);
    }
  };
}
function Mc(e) {
  let t, n, i, r;
  const s = [Lc, Oc], l = [];
  function o(a, u) {
    return (
      /*interactive*/
      a[10] ? 0 : 1
    );
  }
  return t = o(e), n = l[t] = s[t](e), {
    c() {
      n.c(), i = Nc();
    },
    m(a, u) {
      l[t].m(a, u), Cc(a, i, u), r = !0;
    },
    p(a, [u]) {
      let f = t;
      t = o(a), t === f ? l[t].p(a, u) : (Pc(), Yt(l[f], 1, 1, () => {
        l[f] = null;
      }), Ac(), n = l[t], n ? n.p(a, u) : (n = l[t] = s[t](a), n.c()), Qt(n, 1), n.m(i.parentNode, i));
    },
    i(a) {
      r || (Qt(n), r = !0);
    },
    o(a) {
      Yt(n), r = !1;
    },
    d(a) {
      a && Hc(i), l[t].d(a);
    }
  };
}
function Rc(e, t, n) {
  let { elem_id: i = "" } = t, { elem_classes: r = [] } = t, { visible: s = !0 } = t, { value: l = [null, null] } = t, { label: o } = t, { show_label: a } = t, { root: u } = t, { height: f } = t, { width: c } = t, { loading_status: h } = t, { interactive: _ } = t, { gradio: d } = t;
  return e.$$set = (b) => {
    "elem_id" in b && n(0, i = b.elem_id), "elem_classes" in b && n(1, r = b.elem_classes), "visible" in b && n(2, s = b.visible), "value" in b && n(3, l = b.value), "label" in b && n(4, o = b.label), "show_label" in b && n(5, a = b.show_label), "root" in b && n(6, u = b.root), "height" in b && n(7, f = b.height), "width" in b && n(8, c = b.width), "loading_status" in b && n(9, h = b.loading_status), "interactive" in b && n(10, _ = b.interactive), "gradio" in b && n(11, d = b.gradio);
  }, [
    i,
    r,
    s,
    l,
    o,
    a,
    u,
    f,
    c,
    h,
    _,
    d
  ];
}
class Vc extends Bc {
  constructor(t) {
    super(), kc(this, t, Rc, Mc, Ic, {
      elem_id: 0,
      elem_classes: 1,
      visible: 2,
      value: 3,
      label: 4,
      show_label: 5,
      root: 6,
      height: 7,
      width: 8,
      loading_status: 9,
      interactive: 10,
      gradio: 11
    });
  }
  get elem_id() {
    return this.$$.ctx[0];
  }
  set elem_id(t) {
    this.$$set({ elem_id: t }), ue();
  }
  get elem_classes() {
    return this.$$.ctx[1];
  }
  set elem_classes(t) {
    this.$$set({ elem_classes: t }), ue();
  }
  get visible() {
    return this.$$.ctx[2];
  }
  set visible(t) {
    this.$$set({ visible: t }), ue();
  }
  get value() {
    return this.$$.ctx[3];
  }
  set value(t) {
    this.$$set({ value: t }), ue();
  }
  get label() {
    return this.$$.ctx[4];
  }
  set label(t) {
    this.$$set({ label: t }), ue();
  }
  get show_label() {
    return this.$$.ctx[5];
  }
  set show_label(t) {
    this.$$set({ show_label: t }), ue();
  }
  get root() {
    return this.$$.ctx[6];
  }
  set root(t) {
    this.$$set({ root: t }), ue();
  }
  get height() {
    return this.$$.ctx[7];
  }
  set height(t) {
    this.$$set({ height: t }), ue();
  }
  get width() {
    return this.$$.ctx[8];
  }
  set width(t) {
    this.$$set({ width: t }), ue();
  }
  get loading_status() {
    return this.$$.ctx[9];
  }
  set loading_status(t) {
    this.$$set({ loading_status: t }), ue();
  }
  get interactive() {
    return this.$$.ctx[10];
  }
  set interactive(t) {
    this.$$set({ interactive: t }), ue();
  }
  get gradio() {
    return this.$$.ctx[11];
  }
  set gradio(t) {
    this.$$set({ gradio: t }), ue();
  }
}
export {
  Vc as default
};
