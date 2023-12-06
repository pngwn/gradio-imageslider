const {
  SvelteComponent: li,
  append: Ze,
  attr: xe,
  binding_callbacks: Ct,
  create_slot: oi,
  detach: ai,
  element: We,
  get_all_dirty_from_scope: ui,
  get_slot_changes: fi,
  init: hi,
  insert: ci,
  listen: ye,
  run_all: _i,
  safe_not_equal: mi,
  set_style: Lt,
  space: di,
  toggle_class: Ot,
  transition_in: bi,
  transition_out: gi,
  update_slot_base: pi
} = window.__gradio__svelte__internal, { onMount: vi } = window.__gradio__svelte__internal;
function yi(e) {
  let t, n, i, r, s, o, l;
  const a = (
    /*#slots*/
    e[10].default
  ), u = oi(
    a,
    e,
    /*$$scope*/
    e[9],
    null
  );
  return {
    c() {
      t = We("div"), u && u.c(), n = di(), i = We("div"), r = We("div"), xe(r, "class", "inner svelte-klzkec"), xe(i, "class", "outer svelte-klzkec"), xe(i, "role", "none"), Lt(i, "transform", "translateX(" + /*px*/
      e[3] + "px)"), Ot(
        i,
        "disabled",
        /*disabled*/
        e[0]
      ), xe(t, "class", "wrap svelte-klzkec");
    },
    m(f, h) {
      ci(f, t, h), u && u.m(t, null), Ze(t, n), Ze(t, i), Ze(i, r), e[11](i), e[12](t), s = !0, o || (l = [
        ye(
          window,
          "resize",
          /*set_position*/
          e[7]
        ),
        ye(
          window,
          "mousemove",
          /*handle_mousemove*/
          e[6]
        ),
        ye(
          window,
          "mouseup",
          /*handle_mouseup*/
          e[5]
        ),
        ye(
          i,
          "mousedown",
          /*handle_mousedown*/
          e[4]
        ),
        ye(
          i,
          "mouseup",
          /*handle_mouseup*/
          e[5]
        )
      ], o = !0);
    },
    p(f, [h]) {
      u && u.p && (!s || h & /*$$scope*/
      512) && pi(
        u,
        a,
        f,
        /*$$scope*/
        f[9],
        s ? fi(
          a,
          /*$$scope*/
          f[9],
          h,
          null
        ) : ui(
          /*$$scope*/
          f[9]
        ),
        null
      ), (!s || h & /*px*/
      8) && Lt(i, "transform", "translateX(" + /*px*/
      f[3] + "px)"), (!s || h & /*disabled*/
      1) && Ot(
        i,
        "disabled",
        /*disabled*/
        f[0]
      );
    },
    i(f) {
      s || (bi(u, f), s = !0);
    },
    o(f) {
      gi(u, f), s = !1;
    },
    d(f) {
      f && ai(t), u && u.d(f), e[11](null), e[12](null), o = !1, _i(l);
    }
  };
}
function Ei(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
function wi(e, t) {
  const n = Math.pow(10, t);
  return Math.round((e + Number.EPSILON) * n) / n;
}
function Ti(e, t, n) {
  let { $$slots: i = {}, $$scope: r } = t, { position: s = 0.5 } = t, { disabled: o = !1 } = t, l = !1, a, u, f, h = 0, _ = 0;
  function m(c) {
    if (o)
      return;
    l = !0, f = a.getBoundingClientRect();
    const T = u.getBoundingClientRect();
    _ = c.clientX - T.left;
  }
  function d(c) {
    l = !1;
  }
  function B(c) {
    l && (n(3, h = Ei(c.clientX - _ - f.left, -10, f.width - 10)), n(8, s = wi((h + 10) / f.width, 5)));
  }
  function E() {
    f = a.getBoundingClientRect(), n(3, h = f.width * s - 10);
  }
  vi(E);
  function P(c) {
    Ct[c ? "unshift" : "push"](() => {
      u = c, n(2, u);
    });
  }
  function w(c) {
    Ct[c ? "unshift" : "push"](() => {
      a = c, n(1, a);
    });
  }
  return e.$$set = (c) => {
    "position" in c && n(8, s = c.position), "disabled" in c && n(0, o = c.disabled), "$$scope" in c && n(9, r = c.$$scope);
  }, [
    o,
    a,
    u,
    h,
    m,
    d,
    B,
    E,
    s,
    r,
    i,
    P,
    w
  ];
}
class Hi extends li {
  constructor(t) {
    super(), hi(this, t, Ti, yi, mi, { position: 8, disabled: 0 });
  }
}
const {
  SvelteComponent: Si,
  assign: Bi,
  create_slot: Ai,
  detach: xi,
  element: Pi,
  get_all_dirty_from_scope: Ni,
  get_slot_changes: Ii,
  get_spread_update: Ci,
  init: Li,
  insert: Oi,
  safe_not_equal: Mi,
  set_dynamic_element_data: Mt,
  set_style: M,
  toggle_class: q,
  transition_in: wn,
  transition_out: Tn,
  update_slot_base: Ri
} = window.__gradio__svelte__internal;
function ki(e) {
  let t, n, i;
  const r = (
    /*#slots*/
    e[17].default
  ), s = Ai(
    r,
    e,
    /*$$scope*/
    e[16],
    null
  );
  let o = [
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
  ], l = {};
  for (let a = 0; a < o.length; a += 1)
    l = Bi(l, o[a]);
  return {
    c() {
      t = Pi(
        /*tag*/
        e[14]
      ), s && s.c(), Mt(
        /*tag*/
        e[14]
      )(t, l), q(
        t,
        "hidden",
        /*visible*/
        e[10] === !1
      ), q(
        t,
        "padded",
        /*padding*/
        e[6]
      ), q(
        t,
        "border_focus",
        /*border_mode*/
        e[5] === "focus"
      ), q(t, "hide-container", !/*explicit_call*/
      e[8] && !/*container*/
      e[9]), M(t, "height", typeof /*height*/
      e[0] == "number" ? (
        /*height*/
        e[0] + "px"
      ) : void 0), M(t, "width", typeof /*width*/
      e[1] == "number" ? `calc(min(${/*width*/
      e[1]}px, 100%))` : void 0), M(
        t,
        "border-style",
        /*variant*/
        e[4]
      ), M(
        t,
        "overflow",
        /*allow_overflow*/
        e[11] ? "visible" : "hidden"
      ), M(
        t,
        "flex-grow",
        /*scale*/
        e[12]
      ), M(t, "min-width", `calc(min(${/*min_width*/
      e[13]}px, 100%))`), M(t, "border-width", "var(--block-border-width)");
    },
    m(a, u) {
      Oi(a, t, u), s && s.m(t, null), i = !0;
    },
    p(a, u) {
      s && s.p && (!i || u & /*$$scope*/
      65536) && Ri(
        s,
        r,
        a,
        /*$$scope*/
        a[16],
        i ? Ii(
          r,
          /*$$scope*/
          a[16],
          u,
          null
        ) : Ni(
          /*$$scope*/
          a[16]
        ),
        null
      ), Mt(
        /*tag*/
        a[14]
      )(t, l = Ci(o, [
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
      ])), q(
        t,
        "hidden",
        /*visible*/
        a[10] === !1
      ), q(
        t,
        "padded",
        /*padding*/
        a[6]
      ), q(
        t,
        "border_focus",
        /*border_mode*/
        a[5] === "focus"
      ), q(t, "hide-container", !/*explicit_call*/
      a[8] && !/*container*/
      a[9]), u & /*height*/
      1 && M(t, "height", typeof /*height*/
      a[0] == "number" ? (
        /*height*/
        a[0] + "px"
      ) : void 0), u & /*width*/
      2 && M(t, "width", typeof /*width*/
      a[1] == "number" ? `calc(min(${/*width*/
      a[1]}px, 100%))` : void 0), u & /*variant*/
      16 && M(
        t,
        "border-style",
        /*variant*/
        a[4]
      ), u & /*allow_overflow*/
      2048 && M(
        t,
        "overflow",
        /*allow_overflow*/
        a[11] ? "visible" : "hidden"
      ), u & /*scale*/
      4096 && M(
        t,
        "flex-grow",
        /*scale*/
        a[12]
      ), u & /*min_width*/
      8192 && M(t, "min-width", `calc(min(${/*min_width*/
      a[13]}px, 100%))`);
    },
    i(a) {
      i || (wn(s, a), i = !0);
    },
    o(a) {
      Tn(s, a), i = !1;
    },
    d(a) {
      a && xi(t), s && s.d(a);
    }
  };
}
function Ui(e) {
  let t, n = (
    /*tag*/
    e[14] && ki(e)
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
      t || (wn(n, i), t = !0);
    },
    o(i) {
      Tn(n, i), t = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function Di(e, t, n) {
  let { $$slots: i = {}, $$scope: r } = t, { height: s = void 0 } = t, { width: o = void 0 } = t, { elem_id: l = "" } = t, { elem_classes: a = [] } = t, { variant: u = "solid" } = t, { border_mode: f = "base" } = t, { padding: h = !0 } = t, { type: _ = "normal" } = t, { test_id: m = void 0 } = t, { explicit_call: d = !1 } = t, { container: B = !0 } = t, { visible: E = !0 } = t, { allow_overflow: P = !0 } = t, { scale: w = null } = t, { min_width: c = 0 } = t, T = _ === "fieldset" ? "fieldset" : "div";
  return e.$$set = (b) => {
    "height" in b && n(0, s = b.height), "width" in b && n(1, o = b.width), "elem_id" in b && n(2, l = b.elem_id), "elem_classes" in b && n(3, a = b.elem_classes), "variant" in b && n(4, u = b.variant), "border_mode" in b && n(5, f = b.border_mode), "padding" in b && n(6, h = b.padding), "type" in b && n(15, _ = b.type), "test_id" in b && n(7, m = b.test_id), "explicit_call" in b && n(8, d = b.explicit_call), "container" in b && n(9, B = b.container), "visible" in b && n(10, E = b.visible), "allow_overflow" in b && n(11, P = b.allow_overflow), "scale" in b && n(12, w = b.scale), "min_width" in b && n(13, c = b.min_width), "$$scope" in b && n(16, r = b.$$scope);
  }, [
    s,
    o,
    l,
    a,
    u,
    f,
    h,
    m,
    d,
    B,
    E,
    P,
    w,
    c,
    T,
    _,
    r,
    i
  ];
}
class Gi extends Si {
  constructor(t) {
    super(), Li(this, t, Di, Ui, Mi, {
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
  SvelteComponent: Fi,
  append: Qe,
  attr: Je,
  create_component: ji,
  destroy_component: Vi,
  detach: Xi,
  element: Rt,
  init: zi,
  insert: qi,
  mount_component: Zi,
  safe_not_equal: Wi,
  set_data: Qi,
  space: Ji,
  text: Yi,
  toggle_class: Z,
  transition_in: Ki,
  transition_out: $i
} = window.__gradio__svelte__internal;
function er(e) {
  let t, n, i, r, s, o;
  return i = new /*Icon*/
  e[1]({}), {
    c() {
      t = Rt("div"), n = Rt("span"), ji(i.$$.fragment), r = Ji(), s = Yi(
        /*label*/
        e[0]
      ), Je(n, "class", "svelte-juloz6"), Je(t, "data-testid", "block-label"), Je(t, "class", "svelte-juloz6"), Z(t, "hide", !/*show_label*/
      e[2]), Z(t, "sr-only", !/*show_label*/
      e[2]), Z(
        t,
        "float",
        /*float*/
        e[4]
      ), Z(
        t,
        "hide-label",
        /*disable*/
        e[3]
      );
    },
    m(l, a) {
      qi(l, t, a), Qe(t, n), Zi(i, n, null), Qe(t, r), Qe(t, s), o = !0;
    },
    p(l, [a]) {
      (!o || a & /*label*/
      1) && Qi(
        s,
        /*label*/
        l[0]
      ), (!o || a & /*show_label*/
      4) && Z(t, "hide", !/*show_label*/
      l[2]), (!o || a & /*show_label*/
      4) && Z(t, "sr-only", !/*show_label*/
      l[2]), (!o || a & /*float*/
      16) && Z(
        t,
        "float",
        /*float*/
        l[4]
      ), (!o || a & /*disable*/
      8) && Z(
        t,
        "hide-label",
        /*disable*/
        l[3]
      );
    },
    i(l) {
      o || (Ki(i.$$.fragment, l), o = !0);
    },
    o(l) {
      $i(i.$$.fragment, l), o = !1;
    },
    d(l) {
      l && Xi(t), Vi(i);
    }
  };
}
function tr(e, t, n) {
  let { label: i = null } = t, { Icon: r } = t, { show_label: s = !0 } = t, { disable: o = !1 } = t, { float: l = !0 } = t;
  return e.$$set = (a) => {
    "label" in a && n(0, i = a.label), "Icon" in a && n(1, r = a.Icon), "show_label" in a && n(2, s = a.show_label), "disable" in a && n(3, o = a.disable), "float" in a && n(4, l = a.float);
  }, [i, r, s, o, l];
}
class nr extends Fi {
  constructor(t) {
    super(), zi(this, t, tr, er, Wi, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: ir,
  append: rr,
  attr: kt,
  binding_callbacks: sr,
  create_slot: lr,
  detach: or,
  element: Ut,
  get_all_dirty_from_scope: ar,
  get_slot_changes: ur,
  init: fr,
  insert: hr,
  safe_not_equal: cr,
  toggle_class: W,
  transition_in: _r,
  transition_out: mr,
  update_slot_base: dr
} = window.__gradio__svelte__internal;
function br(e) {
  let t, n, i;
  const r = (
    /*#slots*/
    e[5].default
  ), s = lr(
    r,
    e,
    /*$$scope*/
    e[4],
    null
  );
  return {
    c() {
      t = Ut("div"), n = Ut("div"), s && s.c(), kt(n, "class", "icon svelte-1hk1nn0"), kt(t, "class", "empty svelte-1hk1nn0"), W(
        t,
        "small",
        /*size*/
        e[0] === "small"
      ), W(
        t,
        "large",
        /*size*/
        e[0] === "large"
      ), W(
        t,
        "unpadded_box",
        /*unpadded_box*/
        e[1]
      ), W(
        t,
        "small_parent",
        /*parent_height*/
        e[3]
      );
    },
    m(o, l) {
      hr(o, t, l), rr(t, n), s && s.m(n, null), e[6](t), i = !0;
    },
    p(o, [l]) {
      s && s.p && (!i || l & /*$$scope*/
      16) && dr(
        s,
        r,
        o,
        /*$$scope*/
        o[4],
        i ? ur(
          r,
          /*$$scope*/
          o[4],
          l,
          null
        ) : ar(
          /*$$scope*/
          o[4]
        ),
        null
      ), (!i || l & /*size*/
      1) && W(
        t,
        "small",
        /*size*/
        o[0] === "small"
      ), (!i || l & /*size*/
      1) && W(
        t,
        "large",
        /*size*/
        o[0] === "large"
      ), (!i || l & /*unpadded_box*/
      2) && W(
        t,
        "unpadded_box",
        /*unpadded_box*/
        o[1]
      ), (!i || l & /*parent_height*/
      8) && W(
        t,
        "small_parent",
        /*parent_height*/
        o[3]
      );
    },
    i(o) {
      i || (_r(s, o), i = !0);
    },
    o(o) {
      mr(s, o), i = !1;
    },
    d(o) {
      o && or(t), s && s.d(o), e[6](null);
    }
  };
}
function gr(e) {
  let t, n = e[0], i = 1;
  for (; i < e.length; ) {
    const r = e[i], s = e[i + 1];
    if (i += 2, (r === "optionalAccess" || r === "optionalCall") && n == null)
      return;
    r === "access" || r === "optionalAccess" ? (t = n, n = s(n)) : (r === "call" || r === "optionalCall") && (n = s((...o) => n.call(t, ...o)), t = void 0);
  }
  return n;
}
function pr(e, t, n) {
  let i, { $$slots: r = {}, $$scope: s } = t, { size: o = "small" } = t, { unpadded_box: l = !1 } = t, a;
  function u(h) {
    if (!h)
      return !1;
    const { height: _ } = h.getBoundingClientRect(), { height: m } = gr([
      h,
      "access",
      (d) => d.parentElement,
      "optionalAccess",
      (d) => d.getBoundingClientRect,
      "call",
      (d) => d()
    ]) || { height: _ };
    return _ > m + 2;
  }
  function f(h) {
    sr[h ? "unshift" : "push"](() => {
      a = h, n(2, a);
    });
  }
  return e.$$set = (h) => {
    "size" in h && n(0, o = h.size), "unpadded_box" in h && n(1, l = h.unpadded_box), "$$scope" in h && n(4, s = h.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*el*/
    4 && n(3, i = u(a));
  }, [o, l, a, i, s, r, f];
}
class vr extends ir {
  constructor(t) {
    super(), fr(this, t, pr, br, cr, { size: 0, unpadded_box: 1 });
  }
}
const {
  SvelteComponent: yr,
  append: Ye,
  attr: C,
  detach: Er,
  init: wr,
  insert: Tr,
  noop: Ke,
  safe_not_equal: Hr,
  svg_element: Pe
} = window.__gradio__svelte__internal;
function Sr(e) {
  let t, n, i, r;
  return {
    c() {
      t = Pe("svg"), n = Pe("rect"), i = Pe("circle"), r = Pe("polyline"), C(n, "x", "3"), C(n, "y", "3"), C(n, "width", "18"), C(n, "height", "18"), C(n, "rx", "2"), C(n, "ry", "2"), C(i, "cx", "8.5"), C(i, "cy", "8.5"), C(i, "r", "1.5"), C(r, "points", "21 15 16 10 5 21"), C(t, "xmlns", "http://www.w3.org/2000/svg"), C(t, "width", "100%"), C(t, "height", "100%"), C(t, "viewBox", "0 0 24 24"), C(t, "fill", "none"), C(t, "stroke", "currentColor"), C(t, "stroke-width", "1.5"), C(t, "stroke-linecap", "round"), C(t, "stroke-linejoin", "round"), C(t, "class", "feather feather-image");
    },
    m(s, o) {
      Tr(s, t, o), Ye(t, n), Ye(t, i), Ye(t, r);
    },
    p: Ke,
    i: Ke,
    o: Ke,
    d(s) {
      s && Er(t);
    }
  };
}
class Hn extends yr {
  constructor(t) {
    super(), wr(this, t, null, Sr, Hr, {});
  }
}
const Br = [
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
], Dt = {
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
Br.reduce(
  (e, { color: t, primary: n, secondary: i }) => ({
    ...e,
    [t]: {
      primary: Dt[t][n],
      secondary: Dt[t][i]
    }
  }),
  {}
);
function ee() {
}
function Ar(e) {
  return e();
}
function xr(e) {
  e.forEach(Ar);
}
function Pr(e) {
  return typeof e == "function";
}
function Nr(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Sn(e, ...t) {
  if (e == null) {
    for (const i of t)
      i(void 0);
    return ee;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Ir(e) {
  let t;
  return Sn(e, (n) => t = n)(), t;
}
const Bn = typeof window < "u";
let Gt = Bn ? () => window.performance.now() : () => Date.now(), An = Bn ? (e) => requestAnimationFrame(e) : ee;
const re = /* @__PURE__ */ new Set();
function xn(e) {
  re.forEach((t) => {
    t.c(e) || (re.delete(t), t.f());
  }), re.size !== 0 && An(xn);
}
function Cr(e) {
  let t;
  return re.size === 0 && An(xn), {
    promise: new Promise((n) => {
      re.add(t = { c: e, f: n });
    }),
    abort() {
      re.delete(t);
    }
  };
}
const ne = [];
function Lr(e, t) {
  return {
    subscribe: He(e, t).subscribe
  };
}
function He(e, t = ee) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function r(l) {
    if (Nr(e, l) && (e = l, n)) {
      const a = !ne.length;
      for (const u of i)
        u[1](), ne.push(u, e);
      if (a) {
        for (let u = 0; u < ne.length; u += 2)
          ne[u][0](ne[u + 1]);
        ne.length = 0;
      }
    }
  }
  function s(l) {
    r(l(e));
  }
  function o(l, a = ee) {
    const u = [l, a];
    return i.add(u), i.size === 1 && (n = t(r, s) || ee), l(e), () => {
      i.delete(u), i.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: s, subscribe: o };
}
function de(e, t, n) {
  const i = !Array.isArray(e), r = i ? [e] : e;
  if (!r.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const s = t.length < 2;
  return Lr(n, (o, l) => {
    let a = !1;
    const u = [];
    let f = 0, h = ee;
    const _ = () => {
      if (f)
        return;
      h();
      const d = t(i ? u[0] : u, o, l);
      s ? o(d) : h = Pr(d) ? d : ee;
    }, m = r.map(
      (d, B) => Sn(
        d,
        (E) => {
          u[B] = E, f &= ~(1 << B), a && _();
        },
        () => {
          f |= 1 << B;
        }
      )
    );
    return a = !0, _(), function() {
      xr(m), h(), a = !1;
    };
  });
}
function Ft(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function lt(e, t, n, i) {
  if (typeof n == "number" || Ft(n)) {
    const r = i - n, s = (n - t) / (e.dt || 1 / 60), o = e.opts.stiffness * r, l = e.opts.damping * s, a = (o - l) * e.inv_mass, u = (s + a) * e.dt;
    return Math.abs(u) < e.opts.precision && Math.abs(r) < e.opts.precision ? i : (e.settled = !1, Ft(n) ? new Date(n.getTime() + u) : n + u);
  } else {
    if (Array.isArray(n))
      return n.map(
        (r, s) => lt(e, t[s], n[s], i[s])
      );
    if (typeof n == "object") {
      const r = {};
      for (const s in n)
        r[s] = lt(e, t[s], n[s], i[s]);
      return r;
    } else
      throw new Error(`Cannot spring ${typeof n} values`);
  }
}
function jt(e, t = {}) {
  const n = He(e), { stiffness: i = 0.15, damping: r = 0.8, precision: s = 0.01 } = t;
  let o, l, a, u = e, f = e, h = 1, _ = 0, m = !1;
  function d(E, P = {}) {
    f = E;
    const w = a = {};
    return e == null || P.hard || B.stiffness >= 1 && B.damping >= 1 ? (m = !0, o = Gt(), u = E, n.set(e = f), Promise.resolve()) : (P.soft && (_ = 1 / ((P.soft === !0 ? 0.5 : +P.soft) * 60), h = 0), l || (o = Gt(), m = !1, l = Cr((c) => {
      if (m)
        return m = !1, l = null, !1;
      h = Math.min(h + _, 1);
      const T = {
        inv_mass: h,
        opts: B,
        settled: !0,
        dt: (c - o) * 60 / 1e3
      }, b = lt(T, u, e, f);
      return o = c, u = e, n.set(e = b), T.settled && (l = null), !T.settled;
    })), new Promise((c) => {
      l.promise.then(() => {
        w === a && c();
      });
    }));
  }
  const B = {
    set: d,
    update: (E, P) => d(E(f, e), P),
    subscribe: n.subscribe,
    stiffness: i,
    damping: r,
    precision: s
  };
  return B;
}
function Or(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Mr = function(t) {
  return Rr(t) && !kr(t);
};
function Rr(e) {
  return !!e && typeof e == "object";
}
function kr(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || Gr(e);
}
var Ur = typeof Symbol == "function" && Symbol.for, Dr = Ur ? Symbol.for("react.element") : 60103;
function Gr(e) {
  return e.$$typeof === Dr;
}
function Fr(e) {
  return Array.isArray(e) ? [] : {};
}
function we(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? ue(Fr(e), e, t) : e;
}
function jr(e, t, n) {
  return e.concat(t).map(function(i) {
    return we(i, n);
  });
}
function Vr(e, t) {
  if (!t.customMerge)
    return ue;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : ue;
}
function Xr(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function Vt(e) {
  return Object.keys(e).concat(Xr(e));
}
function Pn(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function zr(e, t) {
  return Pn(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function qr(e, t, n) {
  var i = {};
  return n.isMergeableObject(e) && Vt(e).forEach(function(r) {
    i[r] = we(e[r], n);
  }), Vt(t).forEach(function(r) {
    zr(e, r) || (Pn(e, r) && n.isMergeableObject(t[r]) ? i[r] = Vr(r, n)(e[r], t[r], n) : i[r] = we(t[r], n));
  }), i;
}
function ue(e, t, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || jr, n.isMergeableObject = n.isMergeableObject || Mr, n.cloneUnlessOtherwiseSpecified = we;
  var i = Array.isArray(t), r = Array.isArray(e), s = i === r;
  return s ? i ? n.arrayMerge(e, t, n) : qr(e, t, n) : we(t, n);
}
ue.all = function(t, n) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(i, r) {
    return ue(i, r, n);
  }, {});
};
var Zr = ue, Wr = Zr;
const Qr = /* @__PURE__ */ Or(Wr);
var ot = function(e, t) {
  return ot = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
    n.__proto__ = i;
  } || function(n, i) {
    for (var r in i)
      Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r]);
  }, ot(e, t);
};
function De(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  ot(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var x = function() {
  return x = Object.assign || function(t) {
    for (var n, i = 1, r = arguments.length; i < r; i++) {
      n = arguments[i];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, x.apply(this, arguments);
};
function $e(e, t, n) {
  if (n || arguments.length === 2)
    for (var i = 0, r = t.length, s; i < r; i++)
      (s || !(i in t)) && (s || (s = Array.prototype.slice.call(t, 0, i)), s[i] = t[i]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var H;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(H || (H = {}));
var N;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(N || (N = {}));
var fe;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(fe || (fe = {}));
function Xt(e) {
  return e.type === N.literal;
}
function Jr(e) {
  return e.type === N.argument;
}
function Nn(e) {
  return e.type === N.number;
}
function In(e) {
  return e.type === N.date;
}
function Cn(e) {
  return e.type === N.time;
}
function Ln(e) {
  return e.type === N.select;
}
function On(e) {
  return e.type === N.plural;
}
function Yr(e) {
  return e.type === N.pound;
}
function Mn(e) {
  return e.type === N.tag;
}
function Rn(e) {
  return !!(e && typeof e == "object" && e.type === fe.number);
}
function at(e) {
  return !!(e && typeof e == "object" && e.type === fe.dateTime);
}
var kn = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Kr = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function $r(e) {
  var t = {};
  return e.replace(Kr, function(n) {
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
var es = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function ts(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(es).filter(function(_) {
    return _.length > 0;
  }), n = [], i = 0, r = t; i < r.length; i++) {
    var s = r[i], o = s.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var l = o[0], a = o.slice(1), u = 0, f = a; u < f.length; u++) {
      var h = f[u];
      if (h.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: l, options: a });
  }
  return n;
}
function ns(e) {
  return e.replace(/^(.*?)-/, "");
}
var zt = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Un = /^(@+)?(\+|#+)?[rs]?$/g, is = /(\*)(0+)|(#+)(0+)|(0+)/g, Dn = /^(0+)$/;
function qt(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Un, function(n, i, r) {
    return typeof r != "string" ? (t.minimumSignificantDigits = i.length, t.maximumSignificantDigits = i.length) : r === "+" ? t.minimumSignificantDigits = i.length : i[0] === "#" ? t.maximumSignificantDigits = i.length : (t.minimumSignificantDigits = i.length, t.maximumSignificantDigits = i.length + (typeof r == "string" ? r.length : 0)), "";
  }), t;
}
function Gn(e) {
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
function rs(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Dn.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function Zt(e) {
  var t = {}, n = Gn(e);
  return n || t;
}
function ss(e) {
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
        t.style = "unit", t.unit = ns(r.options[0]);
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
        t = x(x(x({}, t), { notation: "scientific" }), r.options.reduce(function(a, u) {
          return x(x({}, a), Zt(u));
        }, {}));
        continue;
      case "engineering":
        t = x(x(x({}, t), { notation: "engineering" }), r.options.reduce(function(a, u) {
          return x(x({}, a), Zt(u));
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
        r.options[0].replace(is, function(a, u, f, h, _, m) {
          if (u)
            t.minimumIntegerDigits = f.length;
          else {
            if (h && _)
              throw new Error("We currently do not support maximum integer digits");
            if (m)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Dn.test(r.stem)) {
      t.minimumIntegerDigits = r.stem.length;
      continue;
    }
    if (zt.test(r.stem)) {
      if (r.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      r.stem.replace(zt, function(a, u, f, h, _, m) {
        return f === "*" ? t.minimumFractionDigits = u.length : h && h[0] === "#" ? t.maximumFractionDigits = h.length : _ && m ? (t.minimumFractionDigits = _.length, t.maximumFractionDigits = _.length + m.length) : (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length), "";
      });
      var s = r.options[0];
      s === "w" ? t = x(x({}, t), { trailingZeroDisplay: "stripIfInteger" }) : s && (t = x(x({}, t), qt(s)));
      continue;
    }
    if (Un.test(r.stem)) {
      t = x(x({}, t), qt(r.stem));
      continue;
    }
    var o = Gn(r.stem);
    o && (t = x(x({}, t), o));
    var l = rs(r.stem);
    l && (t = x(x({}, t), l));
  }
  return t;
}
var Ne = {
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
function ls(e, t) {
  for (var n = "", i = 0; i < e.length; i++) {
    var r = e.charAt(i);
    if (r === "j") {
      for (var s = 0; i + 1 < e.length && e.charAt(i + 1) === r; )
        s++, i++;
      var o = 1 + (s & 1), l = s < 2 ? 1 : 3 + (s >> 1), a = "a", u = os(t);
      for ((u == "H" || u == "k") && (l = 0); l-- > 0; )
        n += a;
      for (; o-- > 0; )
        n = u + n;
    } else
      r === "J" ? n += "H" : n += r;
  }
  return n;
}
function os(e) {
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
  var r = Ne[i || ""] || Ne[n || ""] || Ne["".concat(n, "-001")] || Ne["001"];
  return r[0];
}
var et, as = new RegExp("^".concat(kn.source, "*")), us = new RegExp("".concat(kn.source, "*$"));
function S(e, t) {
  return { start: e, end: t };
}
var fs = !!String.prototype.startsWith, hs = !!String.fromCodePoint, cs = !!Object.fromEntries, _s = !!String.prototype.codePointAt, ms = !!String.prototype.trimStart, ds = !!String.prototype.trimEnd, bs = !!Number.isSafeInteger, gs = bs ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, ut = !0;
try {
  var ps = jn("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  ut = ((et = ps.exec("a")) === null || et === void 0 ? void 0 : et[0]) === "a";
} catch {
  ut = !1;
}
var Wt = fs ? (
  // Native
  function(t, n, i) {
    return t.startsWith(n, i);
  }
) : (
  // For IE11
  function(t, n, i) {
    return t.slice(i, i + n.length) === n;
  }
), ft = hs ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    for (var i = "", r = t.length, s = 0, o; r > s; ) {
      if (o = t[s++], o > 1114111)
        throw RangeError(o + " is not a valid code point");
      i += o < 65536 ? String.fromCharCode(o) : String.fromCharCode(((o -= 65536) >> 10) + 55296, o % 1024 + 56320);
    }
    return i;
  }
), Qt = (
  // native
  cs ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, i = 0, r = t; i < r.length; i++) {
        var s = r[i], o = s[0], l = s[1];
        n[o] = l;
      }
      return n;
    }
  )
), Fn = _s ? (
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
), vs = ms ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(as, "");
  }
), ys = ds ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(us, "");
  }
);
function jn(e, t) {
  return new RegExp(e, t);
}
var ht;
if (ut) {
  var Jt = jn("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  ht = function(t, n) {
    var i;
    Jt.lastIndex = n;
    var r = Jt.exec(t);
    return (i = r[1]) !== null && i !== void 0 ? i : "";
  };
} else
  ht = function(t, n) {
    for (var i = []; ; ) {
      var r = Fn(t, n);
      if (r === void 0 || Vn(r) || Hs(r))
        break;
      i.push(r), n += r >= 65536 ? 2 : 1;
    }
    return ft.apply(void 0, i);
  };
var Es = (
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
          var o = this.parseArgument(t, i);
          if (o.err)
            return o;
          r.push(o.val);
        } else {
          if (s === 125 && t > 0)
            break;
          if (s === 35 && (n === "plural" || n === "selectordinal")) {
            var l = this.clonePosition();
            this.bump(), r.push({
              type: N.pound,
              location: S(l, this.clonePosition())
            });
          } else if (s === 60 && !this.ignoreTag && this.peek() === 47) {
            if (i)
              break;
            return this.error(H.UNMATCHED_CLOSING_TAG, S(this.clonePosition(), this.clonePosition()));
          } else if (s === 60 && !this.ignoreTag && ct(this.peek() || 0)) {
            var o = this.parseTag(t, n);
            if (o.err)
              return o;
            r.push(o.val);
          } else {
            var o = this.parseLiteral(t, n);
            if (o.err)
              return o;
            r.push(o.val);
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
            type: N.literal,
            value: "<".concat(r, "/>"),
            location: S(i, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var s = this.parseMessage(t + 1, n, !0);
        if (s.err)
          return s;
        var o = s.val, l = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !ct(this.char()))
            return this.error(H.INVALID_TAG, S(l, this.clonePosition()));
          var a = this.clonePosition(), u = this.parseTagName();
          return r !== u ? this.error(H.UNMATCHED_CLOSING_TAG, S(a, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: N.tag,
              value: r,
              children: o,
              location: S(i, this.clonePosition())
            },
            err: null
          } : this.error(H.INVALID_TAG, S(l, this.clonePosition())));
        } else
          return this.error(H.UNCLOSED_TAG, S(i, this.clonePosition()));
      } else
        return this.error(H.INVALID_TAG, S(i, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && Ts(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, n) {
      for (var i = this.clonePosition(), r = ""; ; ) {
        var s = this.tryParseQuote(n);
        if (s) {
          r += s;
          continue;
        }
        var o = this.tryParseUnquoted(t, n);
        if (o) {
          r += o;
          continue;
        }
        var l = this.tryParseLeftAngleBracket();
        if (l) {
          r += l;
          continue;
        }
        break;
      }
      var a = S(i, this.clonePosition());
      return {
        val: { type: N.literal, value: r, location: a },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !ws(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return ft.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var i = this.char();
      return i === 60 || i === 123 || i === 35 && (n === "plural" || n === "selectordinal") || i === 125 && t > 0 ? null : (this.bump(), ft(i));
    }, e.prototype.parseArgument = function(t, n) {
      var i = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(H.EXPECT_ARGUMENT_CLOSING_BRACE, S(i, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(H.EMPTY_ARGUMENT, S(i, this.clonePosition()));
      var r = this.parseIdentifierIfPossible().value;
      if (!r)
        return this.error(H.MALFORMED_ARGUMENT, S(i, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(H.EXPECT_ARGUMENT_CLOSING_BRACE, S(i, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: N.argument,
              // value does not include the opening and closing braces.
              value: r,
              location: S(i, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(H.EXPECT_ARGUMENT_CLOSING_BRACE, S(i, this.clonePosition())) : this.parseArgumentOptions(t, n, r, i);
        default:
          return this.error(H.MALFORMED_ARGUMENT, S(i, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), i = ht(this.message, n), r = n + i.length;
      this.bumpTo(r);
      var s = this.clonePosition(), o = S(t, s);
      return { value: i, location: o };
    }, e.prototype.parseArgumentOptions = function(t, n, i, r) {
      var s, o = this.clonePosition(), l = this.parseIdentifierIfPossible().value, a = this.clonePosition();
      switch (l) {
        case "":
          return this.error(H.EXPECT_ARGUMENT_TYPE, S(o, a));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var u = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var f = this.clonePosition(), h = this.parseSimpleArgStyleIfPossible();
            if (h.err)
              return h;
            var _ = ys(h.val);
            if (_.length === 0)
              return this.error(H.EXPECT_ARGUMENT_STYLE, S(this.clonePosition(), this.clonePosition()));
            var m = S(f, this.clonePosition());
            u = { style: _, styleLocation: m };
          }
          var d = this.tryParseArgumentClose(r);
          if (d.err)
            return d;
          var B = S(r, this.clonePosition());
          if (u && Wt(u == null ? void 0 : u.style, "::", 0)) {
            var E = vs(u.style.slice(2));
            if (l === "number") {
              var h = this.parseNumberSkeletonFromString(E, u.styleLocation);
              return h.err ? h : {
                val: { type: N.number, value: i, location: B, style: h.val },
                err: null
              };
            } else {
              if (E.length === 0)
                return this.error(H.EXPECT_DATE_TIME_SKELETON, B);
              var P = E;
              this.locale && (P = ls(E, this.locale));
              var _ = {
                type: fe.dateTime,
                pattern: P,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? $r(P) : {}
              }, w = l === "date" ? N.date : N.time;
              return {
                val: { type: w, value: i, location: B, style: _ },
                err: null
              };
            }
          }
          return {
            val: {
              type: l === "number" ? N.number : l === "date" ? N.date : N.time,
              value: i,
              location: B,
              style: (s = u == null ? void 0 : u.style) !== null && s !== void 0 ? s : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var c = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(H.EXPECT_SELECT_ARGUMENT_OPTIONS, S(c, x({}, c)));
          this.bumpSpace();
          var T = this.parseIdentifierIfPossible(), b = 0;
          if (l !== "select" && T.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(H.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, S(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var h = this.tryParseDecimalInteger(H.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, H.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (h.err)
              return h;
            this.bumpSpace(), T = this.parseIdentifierIfPossible(), b = h.val;
          }
          var F = this.tryParsePluralOrSelectOptions(t, l, n, T);
          if (F.err)
            return F;
          var d = this.tryParseArgumentClose(r);
          if (d.err)
            return d;
          var p = S(r, this.clonePosition());
          return l === "select" ? {
            val: {
              type: N.select,
              value: i,
              options: Qt(F.val),
              location: p
            },
            err: null
          } : {
            val: {
              type: N.plural,
              value: i,
              options: Qt(F.val),
              offset: b,
              pluralType: l === "plural" ? "cardinal" : "ordinal",
              location: p
            },
            err: null
          };
        }
        default:
          return this.error(H.INVALID_ARGUMENT_TYPE, S(o, a));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(H.EXPECT_ARGUMENT_CLOSING_BRACE, S(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var i = this.char();
        switch (i) {
          case 39: {
            this.bump();
            var r = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(H.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, S(r, this.clonePosition()));
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
        i = ts(t);
      } catch {
        return this.error(H.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: fe.number,
          tokens: i,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? ss(i) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, i, r) {
      for (var s, o = !1, l = [], a = /* @__PURE__ */ new Set(), u = r.value, f = r.location; ; ) {
        if (u.length === 0) {
          var h = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var _ = this.tryParseDecimalInteger(H.EXPECT_PLURAL_ARGUMENT_SELECTOR, H.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (_.err)
              return _;
            f = S(h, this.clonePosition()), u = this.message.slice(h.offset, this.offset());
          } else
            break;
        }
        if (a.has(u))
          return this.error(n === "select" ? H.DUPLICATE_SELECT_ARGUMENT_SELECTOR : H.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, f);
        u === "other" && (o = !0), this.bumpSpace();
        var m = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? H.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : H.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, S(this.clonePosition(), this.clonePosition()));
        var d = this.parseMessage(t + 1, n, i);
        if (d.err)
          return d;
        var B = this.tryParseArgumentClose(m);
        if (B.err)
          return B;
        l.push([
          u,
          {
            value: d.val,
            location: S(m, this.clonePosition())
          }
        ]), a.add(u), this.bumpSpace(), s = this.parseIdentifierIfPossible(), u = s.value, f = s.location;
      }
      return l.length === 0 ? this.error(n === "select" ? H.EXPECT_SELECT_ARGUMENT_SELECTOR : H.EXPECT_PLURAL_ARGUMENT_SELECTOR, S(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(H.MISSING_OTHER_CLAUSE, S(this.clonePosition(), this.clonePosition())) : { val: l, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, n) {
      var i = 1, r = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (i = -1);
      for (var s = !1, o = 0; !this.isEOF(); ) {
        var l = this.char();
        if (l >= 48 && l <= 57)
          s = !0, o = o * 10 + (l - 48), this.bump();
        else
          break;
      }
      var a = S(r, this.clonePosition());
      return s ? (o *= i, gs(o) ? { val: o, err: null } : this.error(n, a)) : this.error(t, a);
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
      var n = Fn(this.message, t);
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
      if (Wt(this.message, t, this.offset())) {
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
      for (; !this.isEOF() && Vn(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), i = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return i ?? null;
    }, e;
  }()
);
function ct(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function ws(e) {
  return ct(e) || e === 47;
}
function Ts(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Vn(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function Hs(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function _t(e) {
  e.forEach(function(t) {
    if (delete t.location, Ln(t) || On(t))
      for (var n in t.options)
        delete t.options[n].location, _t(t.options[n].value);
    else
      Nn(t) && Rn(t.style) || (In(t) || Cn(t)) && at(t.style) ? delete t.style.location : Mn(t) && _t(t.children);
  });
}
function Ss(e, t) {
  t === void 0 && (t = {}), t = x({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new Es(e, t).parse();
  if (n.err) {
    var i = SyntaxError(H[n.err.kind]);
    throw i.location = n.err.location, i.originalMessage = n.err.message, i;
  }
  return t != null && t.captureLocation || _t(n.val), n.val;
}
function tt(e, t) {
  var n = t && t.cache ? t.cache : Is, i = t && t.serializer ? t.serializer : Ns, r = t && t.strategy ? t.strategy : As;
  return r(e, {
    cache: n,
    serializer: i
  });
}
function Bs(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Xn(e, t, n, i) {
  var r = Bs(i) ? i : n(i), s = t.get(r);
  return typeof s > "u" && (s = e.call(this, i), t.set(r, s)), s;
}
function zn(e, t, n) {
  var i = Array.prototype.slice.call(arguments, 3), r = n(i), s = t.get(r);
  return typeof s > "u" && (s = e.apply(this, i), t.set(r, s)), s;
}
function Tt(e, t, n, i, r) {
  return n.bind(t, e, i, r);
}
function As(e, t) {
  var n = e.length === 1 ? Xn : zn;
  return Tt(e, this, n, t.cache.create(), t.serializer);
}
function xs(e, t) {
  return Tt(e, this, zn, t.cache.create(), t.serializer);
}
function Ps(e, t) {
  return Tt(e, this, Xn, t.cache.create(), t.serializer);
}
var Ns = function() {
  return JSON.stringify(arguments);
};
function Ht() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
Ht.prototype.get = function(e) {
  return this.cache[e];
};
Ht.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var Is = {
  create: function() {
    return new Ht();
  }
}, nt = {
  variadic: xs,
  monadic: Ps
}, he;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(he || (he = {}));
var Ge = (
  /** @class */
  function(e) {
    De(t, e);
    function t(n, i, r) {
      var s = e.call(this, n) || this;
      return s.code = i, s.originalMessage = r, s;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), Yt = (
  /** @class */
  function(e) {
    De(t, e);
    function t(n, i, r, s) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(i, '". Options are "').concat(Object.keys(r).join('", "'), '"'), he.INVALID_VALUE, s) || this;
    }
    return t;
  }(Ge)
), Cs = (
  /** @class */
  function(e) {
    De(t, e);
    function t(n, i, r) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(i), he.INVALID_VALUE, r) || this;
    }
    return t;
  }(Ge)
), Ls = (
  /** @class */
  function(e) {
    De(t, e);
    function t(n, i) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(i, '"'), he.MISSING_VALUE, i) || this;
    }
    return t;
  }(Ge)
), O;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(O || (O = {}));
function Os(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var i = t[t.length - 1];
    return !i || i.type !== O.literal || n.type !== O.literal ? t.push(n) : i.value += n.value, t;
  }, []);
}
function Ms(e) {
  return typeof e == "function";
}
function Oe(e, t, n, i, r, s, o) {
  if (e.length === 1 && Xt(e[0]))
    return [
      {
        type: O.literal,
        value: e[0].value
      }
    ];
  for (var l = [], a = 0, u = e; a < u.length; a++) {
    var f = u[a];
    if (Xt(f)) {
      l.push({
        type: O.literal,
        value: f.value
      });
      continue;
    }
    if (Yr(f)) {
      typeof s == "number" && l.push({
        type: O.literal,
        value: n.getNumberFormat(t).format(s)
      });
      continue;
    }
    var h = f.value;
    if (!(r && h in r))
      throw new Ls(h, o);
    var _ = r[h];
    if (Jr(f)) {
      (!_ || typeof _ == "string" || typeof _ == "number") && (_ = typeof _ == "string" || typeof _ == "number" ? String(_) : ""), l.push({
        type: typeof _ == "string" ? O.literal : O.object,
        value: _
      });
      continue;
    }
    if (In(f)) {
      var m = typeof f.style == "string" ? i.date[f.style] : at(f.style) ? f.style.parsedOptions : void 0;
      l.push({
        type: O.literal,
        value: n.getDateTimeFormat(t, m).format(_)
      });
      continue;
    }
    if (Cn(f)) {
      var m = typeof f.style == "string" ? i.time[f.style] : at(f.style) ? f.style.parsedOptions : i.time.medium;
      l.push({
        type: O.literal,
        value: n.getDateTimeFormat(t, m).format(_)
      });
      continue;
    }
    if (Nn(f)) {
      var m = typeof f.style == "string" ? i.number[f.style] : Rn(f.style) ? f.style.parsedOptions : void 0;
      m && m.scale && (_ = _ * (m.scale || 1)), l.push({
        type: O.literal,
        value: n.getNumberFormat(t, m).format(_)
      });
      continue;
    }
    if (Mn(f)) {
      var d = f.children, B = f.value, E = r[B];
      if (!Ms(E))
        throw new Cs(B, "function", o);
      var P = Oe(d, t, n, i, r, s), w = E(P.map(function(b) {
        return b.value;
      }));
      Array.isArray(w) || (w = [w]), l.push.apply(l, w.map(function(b) {
        return {
          type: typeof b == "string" ? O.literal : O.object,
          value: b
        };
      }));
    }
    if (Ln(f)) {
      var c = f.options[_] || f.options.other;
      if (!c)
        throw new Yt(f.value, _, Object.keys(f.options), o);
      l.push.apply(l, Oe(c.value, t, n, i, r));
      continue;
    }
    if (On(f)) {
      var c = f.options["=".concat(_)];
      if (!c) {
        if (!Intl.PluralRules)
          throw new Ge(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, he.MISSING_INTL_API, o);
        var T = n.getPluralRules(t, { type: f.pluralType }).select(_ - (f.offset || 0));
        c = f.options[T] || f.options.other;
      }
      if (!c)
        throw new Yt(f.value, _, Object.keys(f.options), o);
      l.push.apply(l, Oe(c.value, t, n, i, r, _ - (f.offset || 0)));
      continue;
    }
  }
  return Os(l);
}
function Rs(e, t) {
  return t ? x(x(x({}, e || {}), t || {}), Object.keys(e).reduce(function(n, i) {
    return n[i] = x(x({}, e[i]), t[i] || {}), n;
  }, {})) : e;
}
function ks(e, t) {
  return t ? Object.keys(e).reduce(function(n, i) {
    return n[i] = Rs(e[i], t[i]), n;
  }, x({}, e)) : e;
}
function it(e) {
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
function Us(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: tt(function() {
      for (var t, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((t = Intl.NumberFormat).bind.apply(t, $e([void 0], n, !1)))();
    }, {
      cache: it(e.number),
      strategy: nt.variadic
    }),
    getDateTimeFormat: tt(function() {
      for (var t, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, $e([void 0], n, !1)))();
    }, {
      cache: it(e.dateTime),
      strategy: nt.variadic
    }),
    getPluralRules: tt(function() {
      for (var t, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i];
      return new ((t = Intl.PluralRules).bind.apply(t, $e([void 0], n, !1)))();
    }, {
      cache: it(e.pluralRules),
      strategy: nt.variadic
    })
  };
}
var Ds = (
  /** @class */
  function() {
    function e(t, n, i, r) {
      var s = this;
      if (n === void 0 && (n = e.defaultLocale), this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(o) {
        var l = s.formatToParts(o);
        if (l.length === 1)
          return l[0].value;
        var a = l.reduce(function(u, f) {
          return !u.length || f.type !== O.literal || typeof u[u.length - 1] != "string" ? u.push(f.value) : u[u.length - 1] += f.value, u;
        }, []);
        return a.length <= 1 ? a[0] || "" : a;
      }, this.formatToParts = function(o) {
        return Oe(s.ast, s.locales, s.formatters, s.formats, o, void 0, s.message);
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
      this.formats = ks(e.formats, i), this.formatters = r && r.formatters || Us(this.formatterCache);
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
    }, e.__parse = Ss, e.formats = {
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
function Gs(e, t) {
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
const Q = {}, Fs = (e, t, n) => n && (t in Q || (Q[t] = {}), e in Q[t] || (Q[t][e] = n), n), qn = (e, t) => {
  if (t == null)
    return;
  if (t in Q && e in Q[t])
    return Q[t][e];
  const n = Fe(t);
  for (let i = 0; i < n.length; i++) {
    const r = n[i], s = Vs(r, e);
    if (s)
      return Fs(e, t, s);
  }
};
let St;
const Se = He({});
function js(e) {
  return St[e] || null;
}
function Zn(e) {
  return e in St;
}
function Vs(e, t) {
  if (!Zn(e))
    return null;
  const n = js(e);
  return Gs(n, t);
}
function Xs(e) {
  if (e == null)
    return;
  const t = Fe(e);
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    if (Zn(i))
      return i;
  }
}
function zs(e, ...t) {
  delete Q[e], Se.update((n) => (n[e] = Qr.all([n[e] || {}, ...t]), n));
}
de(
  [Se],
  ([e]) => Object.keys(e)
);
Se.subscribe((e) => St = e);
const Me = {};
function qs(e, t) {
  Me[e].delete(t), Me[e].size === 0 && delete Me[e];
}
function Wn(e) {
  return Me[e];
}
function Zs(e) {
  return Fe(e).map((t) => {
    const n = Wn(t);
    return [t, n ? [...n] : []];
  }).filter(([, t]) => t.length > 0);
}
function mt(e) {
  return e == null ? !1 : Fe(e).some(
    (t) => {
      var n;
      return (n = Wn(t)) == null ? void 0 : n.size;
    }
  );
}
function Ws(e, t) {
  return Promise.all(
    t.map((i) => (qs(e, i), i().then((r) => r.default || r)))
  ).then((i) => zs(e, ...i));
}
const Ee = {};
function Qn(e) {
  if (!mt(e))
    return e in Ee ? Ee[e] : Promise.resolve();
  const t = Zs(e);
  return Ee[e] = Promise.all(
    t.map(
      ([n, i]) => Ws(n, i)
    )
  ).then(() => {
    if (mt(e))
      return Qn(e);
    delete Ee[e];
  }), Ee[e];
}
const Qs = {
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
}, Js = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Qs,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, Ys = Js;
function ce() {
  return Ys;
}
const rt = He(!1);
var Ks = Object.defineProperty, $s = Object.defineProperties, el = Object.getOwnPropertyDescriptors, Kt = Object.getOwnPropertySymbols, tl = Object.prototype.hasOwnProperty, nl = Object.prototype.propertyIsEnumerable, $t = (e, t, n) => t in e ? Ks(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, il = (e, t) => {
  for (var n in t || (t = {}))
    tl.call(t, n) && $t(e, n, t[n]);
  if (Kt)
    for (var n of Kt(t))
      nl.call(t, n) && $t(e, n, t[n]);
  return e;
}, rl = (e, t) => $s(e, el(t));
let dt;
const Re = He(null);
function en(e) {
  return e.split("-").map((t, n, i) => i.slice(0, n + 1).join("-")).reverse();
}
function Fe(e, t = ce().fallbackLocale) {
  const n = en(e);
  return t ? [.../* @__PURE__ */ new Set([...n, ...en(t)])] : n;
}
function te() {
  return dt ?? void 0;
}
Re.subscribe((e) => {
  dt = e ?? void 0, typeof window < "u" && e != null && document.documentElement.setAttribute("lang", e);
});
const sl = (e) => {
  if (e && Xs(e) && mt(e)) {
    const { loadingDelay: t } = ce();
    let n;
    return typeof window < "u" && te() != null && t ? n = window.setTimeout(
      () => rt.set(!0),
      t
    ) : rt.set(!0), Qn(e).then(() => {
      Re.set(e);
    }).finally(() => {
      clearTimeout(n), rt.set(!1);
    });
  }
  return Re.set(e);
}, Be = rl(il({}, Re), {
  set: sl
}), je = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (i) => {
    const r = JSON.stringify(i);
    return r in t ? t[r] : t[r] = e(i);
  };
};
var ll = Object.defineProperty, ke = Object.getOwnPropertySymbols, Jn = Object.prototype.hasOwnProperty, Yn = Object.prototype.propertyIsEnumerable, tn = (e, t, n) => t in e ? ll(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Bt = (e, t) => {
  for (var n in t || (t = {}))
    Jn.call(t, n) && tn(e, n, t[n]);
  if (ke)
    for (var n of ke(t))
      Yn.call(t, n) && tn(e, n, t[n]);
  return e;
}, be = (e, t) => {
  var n = {};
  for (var i in e)
    Jn.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && ke)
    for (var i of ke(e))
      t.indexOf(i) < 0 && Yn.call(e, i) && (n[i] = e[i]);
  return n;
};
const Te = (e, t) => {
  const { formats: n } = ce();
  if (e in n && t in n[e])
    return n[e][t];
  throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
}, ol = je(
  (e) => {
    var t = e, { locale: n, format: i } = t, r = be(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return i && (r = Te("number", i)), new Intl.NumberFormat(n, r);
  }
), al = je(
  (e) => {
    var t = e, { locale: n, format: i } = t, r = be(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return i ? r = Te("date", i) : Object.keys(r).length === 0 && (r = Te("date", "short")), new Intl.DateTimeFormat(n, r);
  }
), ul = je(
  (e) => {
    var t = e, { locale: n, format: i } = t, r = be(t, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return i ? r = Te("time", i) : Object.keys(r).length === 0 && (r = Te("time", "short")), new Intl.DateTimeFormat(n, r);
  }
), fl = (e = {}) => {
  var t = e, {
    locale: n = te()
  } = t, i = be(t, [
    "locale"
  ]);
  return ol(Bt({ locale: n }, i));
}, hl = (e = {}) => {
  var t = e, {
    locale: n = te()
  } = t, i = be(t, [
    "locale"
  ]);
  return al(Bt({ locale: n }, i));
}, cl = (e = {}) => {
  var t = e, {
    locale: n = te()
  } = t, i = be(t, [
    "locale"
  ]);
  return ul(Bt({ locale: n }, i));
}, _l = je(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (e, t = te()) => new Ds(e, t, ce().formats, {
    ignoreTag: ce().ignoreTag
  })
), ml = (e, t = {}) => {
  var n, i, r, s;
  let o = t;
  typeof e == "object" && (o = e, e = o.id);
  const {
    values: l,
    locale: a = te(),
    default: u
  } = o;
  if (a == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let f = qn(e, a);
  if (!f)
    f = (s = (r = (i = (n = ce()).handleMissingMessage) == null ? void 0 : i.call(n, { locale: a, id: e, defaultValue: u })) != null ? r : u) != null ? s : e;
  else if (typeof f != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof f}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), f;
  if (!l)
    return f;
  let h = f;
  try {
    h = _l(f, a).format(l);
  } catch (_) {
    _ instanceof Error && console.warn(
      `[svelte-i18n] Message "${e}" has syntax error:`,
      _.message
    );
  }
  return h;
}, dl = (e, t) => cl(t).format(e), bl = (e, t) => hl(t).format(e), gl = (e, t) => fl(t).format(e), pl = (e, t = te()) => qn(e, t), vl = de([Be, Se], () => ml);
de([Be], () => dl);
de([Be], () => bl);
de([Be], () => gl);
de([Be, Se], () => pl);
Ir(vl);
function Kn(e, t, n) {
  if (e == null)
    return null;
  if (typeof e == "string")
    return {
      name: "file_data",
      data: e
    };
  if (Array.isArray(e)) {
    const i = [];
    for (const r of e)
      r === null ? i.push(null) : i.push(Kn(r, t, n));
    return i;
  } else
    e.is_file ? e.data = El(e.name, t, n) : e.is_stream && (n == null ? e.data = t + "/stream/" + e.name : e.data = "/proxy=" + n + "stream/" + e.name);
  return e;
}
function yl(e) {
  try {
    const t = new URL(e);
    return t.protocol === "http:" || t.protocol === "https:";
  } catch {
    return !1;
  }
}
function El(e, t, n) {
  return e == null ? n ? `/proxy=${n}file=` : `${t}/file=` : yl(e) ? e : n ? `/proxy=${n}file=${e}` : `${t}/file=${e}`;
}
new Intl.Collator(0, { numeric: 1 }).compare;
const {
  SvelteComponent: wl,
  add_flush_callback: Tl,
  attr: G,
  bind: Hl,
  binding_callbacks: Sl,
  check_outros: Bl,
  create_component: Ve,
  destroy_component: Xe,
  detach: se,
  element: bt,
  empty: Al,
  group_outros: xl,
  init: Pl,
  insert: le,
  mount_component: ze,
  safe_not_equal: Nl,
  set_style: nn,
  space: $n,
  src_url_equal: Ie,
  transition_in: oe,
  transition_out: ae
} = window.__gradio__svelte__internal, { createEventDispatcher: Il } = window.__gradio__svelte__internal;
function Cl(e) {
  let t, n, i, r;
  function s(l) {
    e[7](l);
  }
  let o = {
    $$slots: { default: [Ol] },
    $$scope: { ctx: e }
  };
  return (
    /*position*/
    e[4] !== void 0 && (o.position = /*position*/
    e[4]), n = new Hi({ props: o }), Sl.push(() => Hl(n, "position", s)), {
      c() {
        t = bt("div"), Ve(n.$$.fragment), G(t, "class", "slider-wrap svelte-gce7fj");
      },
      m(l, a) {
        le(l, t, a), ze(n, t, null), r = !0;
      },
      p(l, a) {
        const u = {};
        a & /*$$scope, value_, position*/
        1048 && (u.$$scope = { dirty: a, ctx: l }), !i && a & /*position*/
        16 && (i = !0, u.position = /*position*/
        l[4], Tl(() => i = !1)), n.$set(u);
      },
      i(l) {
        r || (oe(n.$$.fragment, l), r = !0);
      },
      o(l) {
        ae(n.$$.fragment, l), r = !1;
      },
      d(l) {
        l && se(t), Xe(n);
      }
    }
  );
}
function Ll(e) {
  let t, n;
  return t = new vr({
    props: {
      unpadded_box: !0,
      size: "large",
      $$slots: { default: [Ml] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Ve(t.$$.fragment);
    },
    m(i, r) {
      ze(t, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r & /*$$scope*/
      1024 && (s.$$scope = { dirty: r, ctx: i }), t.$set(s);
    },
    i(i) {
      n || (oe(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ae(t.$$.fragment, i), n = !1;
    },
    d(i) {
      Xe(t, i);
    }
  };
}
function Ol(e) {
  let t, n, i, r, s;
  return {
    c() {
      var o, l;
      t = bt("img"), i = $n(), r = bt("img"), Ie(t.src, n = /*value_*/
      (o = e[3]) == null ? void 0 : o[0].data) || G(t, "src", n), G(t, "alt", ""), G(t, "loading", "lazy"), G(t, "class", "svelte-gce7fj"), G(r, "class", "fixed svelte-gce7fj"), Ie(r.src, s = /*value_*/
      (l = e[3]) == null ? void 0 : l[1].data) || G(r, "src", s), G(r, "alt", ""), G(r, "loading", "lazy"), nn(r, "clip-path", "inset(0 0 0 " + /*position*/
      e[4] * 100 + "%)");
    },
    m(o, l) {
      le(o, t, l), le(o, i, l), le(o, r, l);
    },
    p(o, l) {
      var a, u;
      l & /*value_*/
      8 && !Ie(t.src, n = /*value_*/
      (a = o[3]) == null ? void 0 : a[0].data) && G(t, "src", n), l & /*value_*/
      8 && !Ie(r.src, s = /*value_*/
      (u = o[3]) == null ? void 0 : u[1].data) && G(r, "src", s), l & /*position*/
      16 && nn(r, "clip-path", "inset(0 0 0 " + /*position*/
      o[4] * 100 + "%)");
    },
    d(o) {
      o && (se(t), se(i), se(r));
    }
  };
}
function Ml(e) {
  let t, n;
  return t = new Hn({}), {
    c() {
      Ve(t.$$.fragment);
    },
    m(i, r) {
      ze(t, i, r), n = !0;
    },
    i(i) {
      n || (oe(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ae(t.$$.fragment, i), n = !1;
    },
    d(i) {
      Xe(t, i);
    }
  };
}
function Rl(e) {
  let t, n, i, r, s, o;
  t = new nr({
    props: {
      show_label: (
        /*show_label*/
        e[1]
      ),
      Icon: Hn,
      label: (
        /*label*/
        e[0] || /*i18n*/
        e[2]("image.image")
      )
    }
  });
  const l = [Ll, Cl], a = [];
  function u(f, h) {
    return (
      /*value_*/
      f[3] === null ? 0 : 1
    );
  }
  return i = u(e), r = a[i] = l[i](e), {
    c() {
      Ve(t.$$.fragment), n = $n(), r.c(), s = Al();
    },
    m(f, h) {
      ze(t, f, h), le(f, n, h), a[i].m(f, h), le(f, s, h), o = !0;
    },
    p(f, [h]) {
      const _ = {};
      h & /*show_label*/
      2 && (_.show_label = /*show_label*/
      f[1]), h & /*label, i18n*/
      5 && (_.label = /*label*/
      f[0] || /*i18n*/
      f[2]("image.image")), t.$set(_);
      let m = i;
      i = u(f), i === m ? a[i].p(f, h) : (xl(), ae(a[m], 1, 1, () => {
        a[m] = null;
      }), Bl(), r = a[i], r ? r.p(f, h) : (r = a[i] = l[i](f), r.c()), oe(r, 1), r.m(s.parentNode, s));
    },
    i(f) {
      o || (oe(t.$$.fragment, f), oe(r), o = !0);
    },
    o(f) {
      ae(t.$$.fragment, f), ae(r), o = !1;
    },
    d(f) {
      f && (se(n), se(s)), Xe(t, f), a[i].d(f);
    }
  };
}
function kl(e, t, n) {
  let { value: i = [null, null] } = t, r = [null, null], { label: s = void 0 } = t, { show_label: o } = t, { root: l } = t, { i18n: a } = t;
  Il();
  let u = 0.5;
  function f(h) {
    u = h, n(4, u);
  }
  return e.$$set = (h) => {
    "value" in h && n(5, i = h.value), "label" in h && n(0, s = h.label), "show_label" in h && n(1, o = h.show_label), "root" in h && n(6, l = h.root), "i18n" in h && n(2, a = h.i18n);
  }, e.$$.update = () => {
    e.$$.dirty & /*value, value_, root*/
    104 && i !== r && (n(3, r = i), Kn(r, l, null)), e.$$.dirty & /*value_*/
    8 && console.log("static:", r);
  }, [
    s,
    o,
    a,
    r,
    u,
    i,
    l,
    f
  ];
}
class Ul extends wl {
  constructor(t) {
    super(), Pl(this, t, kl, Rl, Nl, {
      value: 5,
      label: 0,
      show_label: 1,
      root: 6,
      i18n: 2
    });
  }
}
function ie(e) {
  let t = ["", "k", "M", "G", "T", "P", "E", "Z"], n = 0;
  for (; e > 1e3 && n < t.length - 1; )
    e /= 1e3, n++;
  let i = t[n];
  return (Number.isInteger(e) ? e : e.toFixed(1)) + i;
}
const {
  SvelteComponent: Dl,
  append: U,
  attr: A,
  component_subscribe: rn,
  detach: Gl,
  element: Fl,
  init: jl,
  insert: Vl,
  noop: sn,
  safe_not_equal: Xl,
  set_style: Ce,
  svg_element: D,
  toggle_class: ln
} = window.__gradio__svelte__internal, { onMount: zl } = window.__gradio__svelte__internal;
function ql(e) {
  let t, n, i, r, s, o, l, a, u, f, h, _;
  return {
    c() {
      t = Fl("div"), n = D("svg"), i = D("g"), r = D("path"), s = D("path"), o = D("path"), l = D("path"), a = D("g"), u = D("path"), f = D("path"), h = D("path"), _ = D("path"), A(r, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), A(r, "fill", "#FF7C00"), A(r, "fill-opacity", "0.4"), A(r, "class", "svelte-43sxxs"), A(s, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), A(s, "fill", "#FF7C00"), A(s, "class", "svelte-43sxxs"), A(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), A(o, "fill", "#FF7C00"), A(o, "fill-opacity", "0.4"), A(o, "class", "svelte-43sxxs"), A(l, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), A(l, "fill", "#FF7C00"), A(l, "class", "svelte-43sxxs"), Ce(i, "transform", "translate(" + /*$top*/
      e[1][0] + "px, " + /*$top*/
      e[1][1] + "px)"), A(u, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), A(u, "fill", "#FF7C00"), A(u, "fill-opacity", "0.4"), A(u, "class", "svelte-43sxxs"), A(f, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), A(f, "fill", "#FF7C00"), A(f, "class", "svelte-43sxxs"), A(h, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), A(h, "fill", "#FF7C00"), A(h, "fill-opacity", "0.4"), A(h, "class", "svelte-43sxxs"), A(_, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), A(_, "fill", "#FF7C00"), A(_, "class", "svelte-43sxxs"), Ce(a, "transform", "translate(" + /*$bottom*/
      e[2][0] + "px, " + /*$bottom*/
      e[2][1] + "px)"), A(n, "viewBox", "-1200 -1200 3000 3000"), A(n, "fill", "none"), A(n, "xmlns", "http://www.w3.org/2000/svg"), A(n, "class", "svelte-43sxxs"), A(t, "class", "svelte-43sxxs"), ln(
        t,
        "margin",
        /*margin*/
        e[0]
      );
    },
    m(m, d) {
      Vl(m, t, d), U(t, n), U(n, i), U(i, r), U(i, s), U(i, o), U(i, l), U(n, a), U(a, u), U(a, f), U(a, h), U(a, _);
    },
    p(m, [d]) {
      d & /*$top*/
      2 && Ce(i, "transform", "translate(" + /*$top*/
      m[1][0] + "px, " + /*$top*/
      m[1][1] + "px)"), d & /*$bottom*/
      4 && Ce(a, "transform", "translate(" + /*$bottom*/
      m[2][0] + "px, " + /*$bottom*/
      m[2][1] + "px)"), d & /*margin*/
      1 && ln(
        t,
        "margin",
        /*margin*/
        m[0]
      );
    },
    i: sn,
    o: sn,
    d(m) {
      m && Gl(t);
    }
  };
}
function Zl(e, t, n) {
  let i, r, { margin: s = !0 } = t;
  const o = jt([0, 0]);
  rn(e, o, (_) => n(1, i = _));
  const l = jt([0, 0]);
  rn(e, l, (_) => n(2, r = _));
  let a;
  async function u() {
    await Promise.all([o.set([125, 140]), l.set([-125, -140])]), await Promise.all([o.set([-125, 140]), l.set([125, -140])]), await Promise.all([o.set([-125, 0]), l.set([125, -0])]), await Promise.all([o.set([125, 0]), l.set([-125, 0])]);
  }
  async function f() {
    await u(), a || f();
  }
  async function h() {
    await Promise.all([o.set([125, 0]), l.set([-125, 0])]), f();
  }
  return zl(() => (h(), () => a = !0)), e.$$set = (_) => {
    "margin" in _ && n(0, s = _.margin);
  }, [s, i, r, o, l];
}
class Wl extends Dl {
  constructor(t) {
    super(), jl(this, t, Zl, ql, Xl, { margin: 0 });
  }
}
const {
  SvelteComponent: Ql,
  append: $,
  attr: j,
  binding_callbacks: on,
  check_outros: ei,
  create_component: Jl,
  create_slot: Yl,
  destroy_component: Kl,
  destroy_each: ti,
  detach: v,
  element: X,
  empty: ge,
  ensure_array_like: Ue,
  get_all_dirty_from_scope: $l,
  get_slot_changes: eo,
  group_outros: ni,
  init: to,
  insert: y,
  mount_component: no,
  noop: gt,
  safe_not_equal: io,
  set_data: k,
  set_style: J,
  space: V,
  text: I,
  toggle_class: R,
  transition_in: _e,
  transition_out: me,
  update_slot_base: ro
} = window.__gradio__svelte__internal, { tick: so } = window.__gradio__svelte__internal, { onDestroy: lo } = window.__gradio__svelte__internal, oo = (e) => ({}), an = (e) => ({});
function un(e, t, n) {
  const i = e.slice();
  return i[38] = t[n], i[40] = n, i;
}
function fn(e, t, n) {
  const i = e.slice();
  return i[38] = t[n], i;
}
function ao(e) {
  let t, n = (
    /*i18n*/
    e[1]("common.error") + ""
  ), i, r, s;
  const o = (
    /*#slots*/
    e[29].error
  ), l = Yl(
    o,
    e,
    /*$$scope*/
    e[28],
    an
  );
  return {
    c() {
      t = X("span"), i = I(n), r = V(), l && l.c(), j(t, "class", "error svelte-14miwb5");
    },
    m(a, u) {
      y(a, t, u), $(t, i), y(a, r, u), l && l.m(a, u), s = !0;
    },
    p(a, u) {
      (!s || u[0] & /*i18n*/
      2) && n !== (n = /*i18n*/
      a[1]("common.error") + "") && k(i, n), l && l.p && (!s || u[0] & /*$$scope*/
      268435456) && ro(
        l,
        o,
        a,
        /*$$scope*/
        a[28],
        s ? eo(
          o,
          /*$$scope*/
          a[28],
          u,
          oo
        ) : $l(
          /*$$scope*/
          a[28]
        ),
        an
      );
    },
    i(a) {
      s || (_e(l, a), s = !0);
    },
    o(a) {
      me(l, a), s = !1;
    },
    d(a) {
      a && (v(t), v(r)), l && l.d(a);
    }
  };
}
function uo(e) {
  let t, n, i, r, s, o, l, a, u, f = (
    /*variant*/
    e[8] === "default" && /*show_eta_bar*/
    e[18] && /*show_progress*/
    e[6] === "full" && hn(e)
  );
  function h(c, T) {
    if (
      /*progress*/
      c[7]
    )
      return co;
    if (
      /*queue_position*/
      c[2] !== null && /*queue_size*/
      c[3] !== void 0 && /*queue_position*/
      c[2] >= 0
    )
      return ho;
    if (
      /*queue_position*/
      c[2] === 0
    )
      return fo;
  }
  let _ = h(e), m = _ && _(e), d = (
    /*timer*/
    e[5] && mn(e)
  );
  const B = [go, bo], E = [];
  function P(c, T) {
    return (
      /*last_progress_level*/
      c[15] != null ? 0 : (
        /*show_progress*/
        c[6] === "full" ? 1 : -1
      )
    );
  }
  ~(s = P(e)) && (o = E[s] = B[s](e));
  let w = !/*timer*/
  e[5] && En(e);
  return {
    c() {
      f && f.c(), t = V(), n = X("div"), m && m.c(), i = V(), d && d.c(), r = V(), o && o.c(), l = V(), w && w.c(), a = ge(), j(n, "class", "progress-text svelte-14miwb5"), R(
        n,
        "meta-text-center",
        /*variant*/
        e[8] === "center"
      ), R(
        n,
        "meta-text",
        /*variant*/
        e[8] === "default"
      );
    },
    m(c, T) {
      f && f.m(c, T), y(c, t, T), y(c, n, T), m && m.m(n, null), $(n, i), d && d.m(n, null), y(c, r, T), ~s && E[s].m(c, T), y(c, l, T), w && w.m(c, T), y(c, a, T), u = !0;
    },
    p(c, T) {
      /*variant*/
      c[8] === "default" && /*show_eta_bar*/
      c[18] && /*show_progress*/
      c[6] === "full" ? f ? f.p(c, T) : (f = hn(c), f.c(), f.m(t.parentNode, t)) : f && (f.d(1), f = null), _ === (_ = h(c)) && m ? m.p(c, T) : (m && m.d(1), m = _ && _(c), m && (m.c(), m.m(n, i))), /*timer*/
      c[5] ? d ? d.p(c, T) : (d = mn(c), d.c(), d.m(n, null)) : d && (d.d(1), d = null), (!u || T[0] & /*variant*/
      256) && R(
        n,
        "meta-text-center",
        /*variant*/
        c[8] === "center"
      ), (!u || T[0] & /*variant*/
      256) && R(
        n,
        "meta-text",
        /*variant*/
        c[8] === "default"
      );
      let b = s;
      s = P(c), s === b ? ~s && E[s].p(c, T) : (o && (ni(), me(E[b], 1, 1, () => {
        E[b] = null;
      }), ei()), ~s ? (o = E[s], o ? o.p(c, T) : (o = E[s] = B[s](c), o.c()), _e(o, 1), o.m(l.parentNode, l)) : o = null), /*timer*/
      c[5] ? w && (w.d(1), w = null) : w ? w.p(c, T) : (w = En(c), w.c(), w.m(a.parentNode, a));
    },
    i(c) {
      u || (_e(o), u = !0);
    },
    o(c) {
      me(o), u = !1;
    },
    d(c) {
      c && (v(t), v(n), v(r), v(l), v(a)), f && f.d(c), m && m.d(), d && d.d(), ~s && E[s].d(c), w && w.d(c);
    }
  };
}
function hn(e) {
  let t, n = `translateX(${/*eta_level*/
  (e[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      t = X("div"), j(t, "class", "eta-bar svelte-14miwb5"), J(t, "transform", n);
    },
    m(i, r) {
      y(i, t, r);
    },
    p(i, r) {
      r[0] & /*eta_level*/
      131072 && n !== (n = `translateX(${/*eta_level*/
      (i[17] || 0) * 100 - 100}%)`) && J(t, "transform", n);
    },
    d(i) {
      i && v(t);
    }
  };
}
function fo(e) {
  let t;
  return {
    c() {
      t = I("processing |");
    },
    m(n, i) {
      y(n, t, i);
    },
    p: gt,
    d(n) {
      n && v(t);
    }
  };
}
function ho(e) {
  let t, n = (
    /*queue_position*/
    e[2] + 1 + ""
  ), i, r, s, o;
  return {
    c() {
      t = I("queue: "), i = I(n), r = I("/"), s = I(
        /*queue_size*/
        e[3]
      ), o = I(" |");
    },
    m(l, a) {
      y(l, t, a), y(l, i, a), y(l, r, a), y(l, s, a), y(l, o, a);
    },
    p(l, a) {
      a[0] & /*queue_position*/
      4 && n !== (n = /*queue_position*/
      l[2] + 1 + "") && k(i, n), a[0] & /*queue_size*/
      8 && k(
        s,
        /*queue_size*/
        l[3]
      );
    },
    d(l) {
      l && (v(t), v(i), v(r), v(s), v(o));
    }
  };
}
function co(e) {
  let t, n = Ue(
    /*progress*/
    e[7]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = _n(fn(e, n, r));
  return {
    c() {
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      t = ge();
    },
    m(r, s) {
      for (let o = 0; o < i.length; o += 1)
        i[o] && i[o].m(r, s);
      y(r, t, s);
    },
    p(r, s) {
      if (s[0] & /*progress*/
      128) {
        n = Ue(
          /*progress*/
          r[7]
        );
        let o;
        for (o = 0; o < n.length; o += 1) {
          const l = fn(r, n, o);
          i[o] ? i[o].p(l, s) : (i[o] = _n(l), i[o].c(), i[o].m(t.parentNode, t));
        }
        for (; o < i.length; o += 1)
          i[o].d(1);
        i.length = n.length;
      }
    },
    d(r) {
      r && v(t), ti(i, r);
    }
  };
}
function cn(e) {
  let t, n = (
    /*p*/
    e[38].unit + ""
  ), i, r, s = " ", o;
  function l(f, h) {
    return (
      /*p*/
      f[38].length != null ? mo : _o
    );
  }
  let a = l(e), u = a(e);
  return {
    c() {
      u.c(), t = V(), i = I(n), r = I(" | "), o = I(s);
    },
    m(f, h) {
      u.m(f, h), y(f, t, h), y(f, i, h), y(f, r, h), y(f, o, h);
    },
    p(f, h) {
      a === (a = l(f)) && u ? u.p(f, h) : (u.d(1), u = a(f), u && (u.c(), u.m(t.parentNode, t))), h[0] & /*progress*/
      128 && n !== (n = /*p*/
      f[38].unit + "") && k(i, n);
    },
    d(f) {
      f && (v(t), v(i), v(r), v(o)), u.d(f);
    }
  };
}
function _o(e) {
  let t = ie(
    /*p*/
    e[38].index || 0
  ) + "", n;
  return {
    c() {
      n = I(t);
    },
    m(i, r) {
      y(i, n, r);
    },
    p(i, r) {
      r[0] & /*progress*/
      128 && t !== (t = ie(
        /*p*/
        i[38].index || 0
      ) + "") && k(n, t);
    },
    d(i) {
      i && v(n);
    }
  };
}
function mo(e) {
  let t = ie(
    /*p*/
    e[38].index || 0
  ) + "", n, i, r = ie(
    /*p*/
    e[38].length
  ) + "", s;
  return {
    c() {
      n = I(t), i = I("/"), s = I(r);
    },
    m(o, l) {
      y(o, n, l), y(o, i, l), y(o, s, l);
    },
    p(o, l) {
      l[0] & /*progress*/
      128 && t !== (t = ie(
        /*p*/
        o[38].index || 0
      ) + "") && k(n, t), l[0] & /*progress*/
      128 && r !== (r = ie(
        /*p*/
        o[38].length
      ) + "") && k(s, r);
    },
    d(o) {
      o && (v(n), v(i), v(s));
    }
  };
}
function _n(e) {
  let t, n = (
    /*p*/
    e[38].index != null && cn(e)
  );
  return {
    c() {
      n && n.c(), t = ge();
    },
    m(i, r) {
      n && n.m(i, r), y(i, t, r);
    },
    p(i, r) {
      /*p*/
      i[38].index != null ? n ? n.p(i, r) : (n = cn(i), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(i) {
      i && v(t), n && n.d(i);
    }
  };
}
function mn(e) {
  let t, n = (
    /*eta*/
    e[0] ? `/${/*formatted_eta*/
    e[19]}` : ""
  ), i, r;
  return {
    c() {
      t = I(
        /*formatted_timer*/
        e[20]
      ), i = I(n), r = I("s");
    },
    m(s, o) {
      y(s, t, o), y(s, i, o), y(s, r, o);
    },
    p(s, o) {
      o[0] & /*formatted_timer*/
      1048576 && k(
        t,
        /*formatted_timer*/
        s[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && n !== (n = /*eta*/
      s[0] ? `/${/*formatted_eta*/
      s[19]}` : "") && k(i, n);
    },
    d(s) {
      s && (v(t), v(i), v(r));
    }
  };
}
function bo(e) {
  let t, n;
  return t = new Wl({
    props: { margin: (
      /*variant*/
      e[8] === "default"
    ) }
  }), {
    c() {
      Jl(t.$$.fragment);
    },
    m(i, r) {
      no(t, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r[0] & /*variant*/
      256 && (s.margin = /*variant*/
      i[8] === "default"), t.$set(s);
    },
    i(i) {
      n || (_e(t.$$.fragment, i), n = !0);
    },
    o(i) {
      me(t.$$.fragment, i), n = !1;
    },
    d(i) {
      Kl(t, i);
    }
  };
}
function go(e) {
  let t, n, i, r, s, o = `${/*last_progress_level*/
  e[15] * 100}%`, l = (
    /*progress*/
    e[7] != null && dn(e)
  );
  return {
    c() {
      t = X("div"), n = X("div"), l && l.c(), i = V(), r = X("div"), s = X("div"), j(n, "class", "progress-level-inner svelte-14miwb5"), j(s, "class", "progress-bar svelte-14miwb5"), J(s, "width", o), j(r, "class", "progress-bar-wrap svelte-14miwb5"), j(t, "class", "progress-level svelte-14miwb5");
    },
    m(a, u) {
      y(a, t, u), $(t, n), l && l.m(n, null), $(t, i), $(t, r), $(r, s), e[30](s);
    },
    p(a, u) {
      /*progress*/
      a[7] != null ? l ? l.p(a, u) : (l = dn(a), l.c(), l.m(n, null)) : l && (l.d(1), l = null), u[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      a[15] * 100}%`) && J(s, "width", o);
    },
    i: gt,
    o: gt,
    d(a) {
      a && v(t), l && l.d(), e[30](null);
    }
  };
}
function dn(e) {
  let t, n = Ue(
    /*progress*/
    e[7]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = yn(un(e, n, r));
  return {
    c() {
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      t = ge();
    },
    m(r, s) {
      for (let o = 0; o < i.length; o += 1)
        i[o] && i[o].m(r, s);
      y(r, t, s);
    },
    p(r, s) {
      if (s[0] & /*progress_level, progress*/
      16512) {
        n = Ue(
          /*progress*/
          r[7]
        );
        let o;
        for (o = 0; o < n.length; o += 1) {
          const l = un(r, n, o);
          i[o] ? i[o].p(l, s) : (i[o] = yn(l), i[o].c(), i[o].m(t.parentNode, t));
        }
        for (; o < i.length; o += 1)
          i[o].d(1);
        i.length = n.length;
      }
    },
    d(r) {
      r && v(t), ti(i, r);
    }
  };
}
function bn(e) {
  let t, n, i, r, s = (
    /*i*/
    e[40] !== 0 && po()
  ), o = (
    /*p*/
    e[38].desc != null && gn(e)
  ), l = (
    /*p*/
    e[38].desc != null && /*progress_level*/
    e[14] && /*progress_level*/
    e[14][
      /*i*/
      e[40]
    ] != null && pn()
  ), a = (
    /*progress_level*/
    e[14] != null && vn(e)
  );
  return {
    c() {
      s && s.c(), t = V(), o && o.c(), n = V(), l && l.c(), i = V(), a && a.c(), r = ge();
    },
    m(u, f) {
      s && s.m(u, f), y(u, t, f), o && o.m(u, f), y(u, n, f), l && l.m(u, f), y(u, i, f), a && a.m(u, f), y(u, r, f);
    },
    p(u, f) {
      /*p*/
      u[38].desc != null ? o ? o.p(u, f) : (o = gn(u), o.c(), o.m(n.parentNode, n)) : o && (o.d(1), o = null), /*p*/
      u[38].desc != null && /*progress_level*/
      u[14] && /*progress_level*/
      u[14][
        /*i*/
        u[40]
      ] != null ? l || (l = pn(), l.c(), l.m(i.parentNode, i)) : l && (l.d(1), l = null), /*progress_level*/
      u[14] != null ? a ? a.p(u, f) : (a = vn(u), a.c(), a.m(r.parentNode, r)) : a && (a.d(1), a = null);
    },
    d(u) {
      u && (v(t), v(n), v(i), v(r)), s && s.d(u), o && o.d(u), l && l.d(u), a && a.d(u);
    }
  };
}
function po(e) {
  let t;
  return {
    c() {
      t = I(" /");
    },
    m(n, i) {
      y(n, t, i);
    },
    d(n) {
      n && v(t);
    }
  };
}
function gn(e) {
  let t = (
    /*p*/
    e[38].desc + ""
  ), n;
  return {
    c() {
      n = I(t);
    },
    m(i, r) {
      y(i, n, r);
    },
    p(i, r) {
      r[0] & /*progress*/
      128 && t !== (t = /*p*/
      i[38].desc + "") && k(n, t);
    },
    d(i) {
      i && v(n);
    }
  };
}
function pn(e) {
  let t;
  return {
    c() {
      t = I("-");
    },
    m(n, i) {
      y(n, t, i);
    },
    d(n) {
      n && v(t);
    }
  };
}
function vn(e) {
  let t = (100 * /*progress_level*/
  (e[14][
    /*i*/
    e[40]
  ] || 0)).toFixed(1) + "", n, i;
  return {
    c() {
      n = I(t), i = I("%");
    },
    m(r, s) {
      y(r, n, s), y(r, i, s);
    },
    p(r, s) {
      s[0] & /*progress_level*/
      16384 && t !== (t = (100 * /*progress_level*/
      (r[14][
        /*i*/
        r[40]
      ] || 0)).toFixed(1) + "") && k(n, t);
    },
    d(r) {
      r && (v(n), v(i));
    }
  };
}
function yn(e) {
  let t, n = (
    /*p*/
    (e[38].desc != null || /*progress_level*/
    e[14] && /*progress_level*/
    e[14][
      /*i*/
      e[40]
    ] != null) && bn(e)
  );
  return {
    c() {
      n && n.c(), t = ge();
    },
    m(i, r) {
      n && n.m(i, r), y(i, t, r);
    },
    p(i, r) {
      /*p*/
      i[38].desc != null || /*progress_level*/
      i[14] && /*progress_level*/
      i[14][
        /*i*/
        i[40]
      ] != null ? n ? n.p(i, r) : (n = bn(i), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(i) {
      i && v(t), n && n.d(i);
    }
  };
}
function En(e) {
  let t, n;
  return {
    c() {
      t = X("p"), n = I(
        /*loading_text*/
        e[9]
      ), j(t, "class", "loading svelte-14miwb5");
    },
    m(i, r) {
      y(i, t, r), $(t, n);
    },
    p(i, r) {
      r[0] & /*loading_text*/
      512 && k(
        n,
        /*loading_text*/
        i[9]
      );
    },
    d(i) {
      i && v(t);
    }
  };
}
function vo(e) {
  let t, n, i, r, s;
  const o = [uo, ao], l = [];
  function a(u, f) {
    return (
      /*status*/
      u[4] === "pending" ? 0 : (
        /*status*/
        u[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(n = a(e)) && (i = l[n] = o[n](e)), {
    c() {
      t = X("div"), i && i.c(), j(t, "class", r = "wrap " + /*variant*/
      e[8] + " " + /*show_progress*/
      e[6] + " svelte-14miwb5"), R(t, "hide", !/*status*/
      e[4] || /*status*/
      e[4] === "complete" || /*show_progress*/
      e[6] === "hidden"), R(
        t,
        "translucent",
        /*variant*/
        e[8] === "center" && /*status*/
        (e[4] === "pending" || /*status*/
        e[4] === "error") || /*translucent*/
        e[11] || /*show_progress*/
        e[6] === "minimal"
      ), R(
        t,
        "generating",
        /*status*/
        e[4] === "generating"
      ), R(
        t,
        "border",
        /*border*/
        e[12]
      ), J(
        t,
        "position",
        /*absolute*/
        e[10] ? "absolute" : "static"
      ), J(
        t,
        "padding",
        /*absolute*/
        e[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(u, f) {
      y(u, t, f), ~n && l[n].m(t, null), e[31](t), s = !0;
    },
    p(u, f) {
      let h = n;
      n = a(u), n === h ? ~n && l[n].p(u, f) : (i && (ni(), me(l[h], 1, 1, () => {
        l[h] = null;
      }), ei()), ~n ? (i = l[n], i ? i.p(u, f) : (i = l[n] = o[n](u), i.c()), _e(i, 1), i.m(t, null)) : i = null), (!s || f[0] & /*variant, show_progress*/
      320 && r !== (r = "wrap " + /*variant*/
      u[8] + " " + /*show_progress*/
      u[6] + " svelte-14miwb5")) && j(t, "class", r), (!s || f[0] & /*variant, show_progress, status, show_progress*/
      336) && R(t, "hide", !/*status*/
      u[4] || /*status*/
      u[4] === "complete" || /*show_progress*/
      u[6] === "hidden"), (!s || f[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && R(
        t,
        "translucent",
        /*variant*/
        u[8] === "center" && /*status*/
        (u[4] === "pending" || /*status*/
        u[4] === "error") || /*translucent*/
        u[11] || /*show_progress*/
        u[6] === "minimal"
      ), (!s || f[0] & /*variant, show_progress, status*/
      336) && R(
        t,
        "generating",
        /*status*/
        u[4] === "generating"
      ), (!s || f[0] & /*variant, show_progress, border*/
      4416) && R(
        t,
        "border",
        /*border*/
        u[12]
      ), f[0] & /*absolute*/
      1024 && J(
        t,
        "position",
        /*absolute*/
        u[10] ? "absolute" : "static"
      ), f[0] & /*absolute*/
      1024 && J(
        t,
        "padding",
        /*absolute*/
        u[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(u) {
      s || (_e(i), s = !0);
    },
    o(u) {
      me(i), s = !1;
    },
    d(u) {
      u && v(t), ~n && l[n].d(), e[31](null);
    }
  };
}
let Le = [], st = !1;
async function yo(e, t = !0) {
  if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
    if (Le.push(e), !st)
      st = !0;
    else
      return;
    await so(), requestAnimationFrame(() => {
      let n = [0, 0];
      for (let i = 0; i < Le.length; i++) {
        const s = Le[i].getBoundingClientRect();
        (i === 0 || s.top + window.scrollY <= n[0]) && (n[0] = s.top + window.scrollY, n[1] = i);
      }
      window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), st = !1, Le = [];
    });
  }
}
function Eo(e, t, n) {
  let i, { $$slots: r = {}, $$scope: s } = t, { i18n: o } = t, { eta: l = null } = t, { queue: a = !1 } = t, { queue_position: u } = t, { queue_size: f } = t, { status: h } = t, { scroll_to_output: _ = !1 } = t, { timer: m = !0 } = t, { show_progress: d = "full" } = t, { message: B = null } = t, { progress: E = null } = t, { variant: P = "default" } = t, { loading_text: w = "Loading..." } = t, { absolute: c = !0 } = t, { translucent: T = !1 } = t, { border: b = !1 } = t, { autoscroll: F } = t, p, pe = !1, Ae = 0, Y = 0, qe = null, At = 0, K = null, ve, z = null, xt = !0;
  const ii = () => {
    n(25, Ae = performance.now()), n(26, Y = 0), pe = !0, Pt();
  };
  function Pt() {
    requestAnimationFrame(() => {
      n(26, Y = (performance.now() - Ae) / 1e3), pe && Pt();
    });
  }
  function Nt() {
    n(26, Y = 0), pe && (pe = !1);
  }
  lo(() => {
    pe && Nt();
  });
  let It = null;
  function ri(g) {
    on[g ? "unshift" : "push"](() => {
      z = g, n(16, z), n(7, E), n(14, K), n(15, ve);
    });
  }
  function si(g) {
    on[g ? "unshift" : "push"](() => {
      p = g, n(13, p);
    });
  }
  return e.$$set = (g) => {
    "i18n" in g && n(1, o = g.i18n), "eta" in g && n(0, l = g.eta), "queue" in g && n(21, a = g.queue), "queue_position" in g && n(2, u = g.queue_position), "queue_size" in g && n(3, f = g.queue_size), "status" in g && n(4, h = g.status), "scroll_to_output" in g && n(22, _ = g.scroll_to_output), "timer" in g && n(5, m = g.timer), "show_progress" in g && n(6, d = g.show_progress), "message" in g && n(23, B = g.message), "progress" in g && n(7, E = g.progress), "variant" in g && n(8, P = g.variant), "loading_text" in g && n(9, w = g.loading_text), "absolute" in g && n(10, c = g.absolute), "translucent" in g && n(11, T = g.translucent), "border" in g && n(12, b = g.border), "autoscroll" in g && n(24, F = g.autoscroll), "$$scope" in g && n(28, s = g.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*eta, old_eta, queue, timer_start*/
    169869313 && (l === null ? n(0, l = qe) : a && n(0, l = (performance.now() - Ae) / 1e3 + l), l != null && (n(19, It = l.toFixed(1)), n(27, qe = l))), e.$$.dirty[0] & /*eta, timer_diff*/
    67108865 && n(17, At = l === null || l <= 0 || !Y ? null : Math.min(Y / l, 1)), e.$$.dirty[0] & /*progress*/
    128 && E != null && n(18, xt = !1), e.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (E != null ? n(14, K = E.map((g) => {
      if (g.index != null && g.length != null)
        return g.index / g.length;
      if (g.progress != null)
        return g.progress;
    })) : n(14, K = null), K ? (n(15, ve = K[K.length - 1]), z && (ve === 0 ? n(16, z.style.transition = "0", z) : n(16, z.style.transition = "150ms", z))) : n(15, ve = void 0)), e.$$.dirty[0] & /*status*/
    16 && (h === "pending" ? ii() : Nt()), e.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && p && _ && (h === "pending" || h === "complete") && yo(p, F), e.$$.dirty[0] & /*status, message*/
    8388624, e.$$.dirty[0] & /*timer_diff*/
    67108864 && n(20, i = Y.toFixed(1));
  }, [
    l,
    o,
    u,
    f,
    h,
    m,
    d,
    E,
    P,
    w,
    c,
    T,
    b,
    p,
    K,
    ve,
    z,
    At,
    xt,
    It,
    i,
    a,
    _,
    B,
    F,
    Ae,
    Y,
    qe,
    s,
    r,
    ri,
    si
  ];
}
class wo extends Ql {
  constructor(t) {
    super(), to(
      this,
      t,
      Eo,
      vo,
      io,
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
  SvelteComponent: To,
  assign: Ho,
  create_component: pt,
  destroy_component: vt,
  detach: So,
  flush: L,
  get_spread_object: Bo,
  get_spread_update: Ao,
  init: xo,
  insert: Po,
  mount_component: yt,
  safe_not_equal: No,
  space: Io,
  transition_in: Et,
  transition_out: wt
} = window.__gradio__svelte__internal;
function Co(e) {
  let t, n, i, r;
  const s = [
    {
      autoscroll: (
        /*gradio*/
        e[15].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      e[15].i18n
    ) },
    /*loading_status*/
    e[13]
  ];
  let o = {};
  for (let l = 0; l < s.length; l += 1)
    o = Ho(o, s[l]);
  return t = new wo({ props: o }), i = new Ul({
    props: {
      root: (
        /*root*/
        e[7]
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
      show_download_button: (
        /*show_download_button*/
        e[6]
      ),
      show_share_button: (
        /*show_share_button*/
        e[14]
      ),
      i18n: (
        /*gradio*/
        e[15].i18n
      )
    }
  }), i.$on(
    "select",
    /*select_handler*/
    e[17]
  ), i.$on(
    "share",
    /*share_handler*/
    e[18]
  ), i.$on(
    "error",
    /*error_handler*/
    e[19]
  ), {
    c() {
      pt(t.$$.fragment), n = Io(), pt(i.$$.fragment);
    },
    m(l, a) {
      yt(t, l, a), Po(l, n, a), yt(i, l, a), r = !0;
    },
    p(l, a) {
      const u = a & /*gradio, loading_status*/
      40960 ? Ao(s, [
        a & /*gradio*/
        32768 && {
          autoscroll: (
            /*gradio*/
            l[15].autoscroll
          )
        },
        a & /*gradio*/
        32768 && { i18n: (
          /*gradio*/
          l[15].i18n
        ) },
        a & /*loading_status*/
        8192 && Bo(
          /*loading_status*/
          l[13]
        )
      ]) : {};
      t.$set(u);
      const f = {};
      a & /*root*/
      128 && (f.root = /*root*/
      l[7]), a & /*value*/
      1 && (f.value = /*value*/
      l[0]), a & /*label*/
      16 && (f.label = /*label*/
      l[4]), a & /*show_label*/
      32 && (f.show_label = /*show_label*/
      l[5]), a & /*show_download_button*/
      64 && (f.show_download_button = /*show_download_button*/
      l[6]), a & /*show_share_button*/
      16384 && (f.show_share_button = /*show_share_button*/
      l[14]), a & /*gradio*/
      32768 && (f.i18n = /*gradio*/
      l[15].i18n), i.$set(f);
    },
    i(l) {
      r || (Et(t.$$.fragment, l), Et(i.$$.fragment, l), r = !0);
    },
    o(l) {
      wt(t.$$.fragment, l), wt(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && So(n), vt(t, l), vt(i, l);
    }
  };
}
function Lo(e) {
  let t, n;
  return t = new Gi({
    props: {
      visible: (
        /*visible*/
        e[3]
      ),
      variant: "solid",
      border_mode: (
        /*dragging*/
        e[16] ? "focus" : "base"
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
        e[8] || void 0
      ),
      width: (
        /*width*/
        e[9]
      ),
      allow_overflow: !1,
      container: (
        /*container*/
        e[10]
      ),
      scale: (
        /*scale*/
        e[11]
      ),
      min_width: (
        /*min_width*/
        e[12]
      ),
      $$slots: { default: [Co] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      pt(t.$$.fragment);
    },
    m(i, r) {
      yt(t, i, r), n = !0;
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
      256 && (s.height = /*height*/
      i[8] || void 0), r & /*width*/
      512 && (s.width = /*width*/
      i[9]), r & /*container*/
      1024 && (s.container = /*container*/
      i[10]), r & /*scale*/
      2048 && (s.scale = /*scale*/
      i[11]), r & /*min_width*/
      4096 && (s.min_width = /*min_width*/
      i[12]), r & /*$$scope, root, value, label, show_label, show_download_button, show_share_button, gradio, loading_status*/
      1106161 && (s.$$scope = { dirty: r, ctx: i }), t.$set(s);
    },
    i(i) {
      n || (Et(t.$$.fragment, i), n = !0);
    },
    o(i) {
      wt(t.$$.fragment, i), n = !1;
    },
    d(i) {
      vt(t, i);
    }
  };
}
function Oo(e, t, n) {
  let { elem_id: i = "" } = t, { elem_classes: r = [] } = t, { visible: s = !0 } = t, { value: o = null } = t, { label: l } = t, { show_label: a } = t, { show_download_button: u } = t, { root: f } = t, { height: h } = t, { width: _ } = t, { container: m = !0 } = t, { scale: d = null } = t, { min_width: B = void 0 } = t, { loading_status: E } = t, { show_share_button: P = !1 } = t, { gradio: w } = t, c;
  const T = ({ detail: p }) => w.dispatch("select", p), b = ({ detail: p }) => w.dispatch("share", p), F = ({ detail: p }) => w.dispatch("error", p);
  return e.$$set = (p) => {
    "elem_id" in p && n(1, i = p.elem_id), "elem_classes" in p && n(2, r = p.elem_classes), "visible" in p && n(3, s = p.visible), "value" in p && n(0, o = p.value), "label" in p && n(4, l = p.label), "show_label" in p && n(5, a = p.show_label), "show_download_button" in p && n(6, u = p.show_download_button), "root" in p && n(7, f = p.root), "height" in p && n(8, h = p.height), "width" in p && n(9, _ = p.width), "container" in p && n(10, m = p.container), "scale" in p && n(11, d = p.scale), "min_width" in p && n(12, B = p.min_width), "loading_status" in p && n(13, E = p.loading_status), "show_share_button" in p && n(14, P = p.show_share_button), "gradio" in p && n(15, w = p.gradio);
  }, e.$$.update = () => {
    e.$$.dirty & /*value*/
    1 && n(0, o = o || null), e.$$.dirty & /*value, gradio*/
    32769 && w.dispatch("change");
  }, [
    o,
    i,
    r,
    s,
    l,
    a,
    u,
    f,
    h,
    _,
    m,
    d,
    B,
    E,
    P,
    w,
    c,
    T,
    b,
    F
  ];
}
class Mo extends To {
  constructor(t) {
    super(), xo(this, t, Oo, Lo, No, {
      elem_id: 1,
      elem_classes: 2,
      visible: 3,
      value: 0,
      label: 4,
      show_label: 5,
      show_download_button: 6,
      root: 7,
      height: 8,
      width: 9,
      container: 10,
      scale: 11,
      min_width: 12,
      loading_status: 13,
      show_share_button: 14,
      gradio: 15
    });
  }
  get elem_id() {
    return this.$$.ctx[1];
  }
  set elem_id(t) {
    this.$$set({ elem_id: t }), L();
  }
  get elem_classes() {
    return this.$$.ctx[2];
  }
  set elem_classes(t) {
    this.$$set({ elem_classes: t }), L();
  }
  get visible() {
    return this.$$.ctx[3];
  }
  set visible(t) {
    this.$$set({ visible: t }), L();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(t) {
    this.$$set({ value: t }), L();
  }
  get label() {
    return this.$$.ctx[4];
  }
  set label(t) {
    this.$$set({ label: t }), L();
  }
  get show_label() {
    return this.$$.ctx[5];
  }
  set show_label(t) {
    this.$$set({ show_label: t }), L();
  }
  get show_download_button() {
    return this.$$.ctx[6];
  }
  set show_download_button(t) {
    this.$$set({ show_download_button: t }), L();
  }
  get root() {
    return this.$$.ctx[7];
  }
  set root(t) {
    this.$$set({ root: t }), L();
  }
  get height() {
    return this.$$.ctx[8];
  }
  set height(t) {
    this.$$set({ height: t }), L();
  }
  get width() {
    return this.$$.ctx[9];
  }
  set width(t) {
    this.$$set({ width: t }), L();
  }
  get container() {
    return this.$$.ctx[10];
  }
  set container(t) {
    this.$$set({ container: t }), L();
  }
  get scale() {
    return this.$$.ctx[11];
  }
  set scale(t) {
    this.$$set({ scale: t }), L();
  }
  get min_width() {
    return this.$$.ctx[12];
  }
  set min_width(t) {
    this.$$set({ min_width: t }), L();
  }
  get loading_status() {
    return this.$$.ctx[13];
  }
  set loading_status(t) {
    this.$$set({ loading_status: t }), L();
  }
  get show_share_button() {
    return this.$$.ctx[14];
  }
  set show_share_button(t) {
    this.$$set({ show_share_button: t }), L();
  }
  get gradio() {
    return this.$$.ctx[15];
  }
  set gradio(t) {
    this.$$set({ gradio: t }), L();
  }
}
export {
  Mo as default
};
