const {
  SvelteComponent: $r,
  append: Nt,
  attr: et,
  binding_callbacks: un,
  create_slot: ei,
  detach: ti,
  element: Pt,
  get_all_dirty_from_scope: ni,
  get_slot_changes: ri,
  init: ii,
  insert: si,
  listen: je,
  run_all: oi,
  safe_not_equal: ai,
  set_style: fn,
  space: li,
  toggle_class: cn,
  transition_in: ui,
  transition_out: fi,
  update_slot_base: ci
} = window.__gradio__svelte__internal, { onMount: hi } = window.__gradio__svelte__internal;
function _i(e) {
  let t, n, r, i, s, o, a;
  const u = (
    /*#slots*/
    e[10].default
  ), l = ei(
    u,
    e,
    /*$$scope*/
    e[9],
    null
  );
  return {
    c() {
      t = Pt("div"), l && l.c(), n = li(), r = Pt("div"), i = Pt("div"), et(i, "class", "inner svelte-klzkec"), et(r, "class", "outer svelte-klzkec"), et(r, "role", "none"), fn(r, "transform", "translateX(" + /*px*/
      e[3] + "px)"), cn(
        r,
        "disabled",
        /*disabled*/
        e[0]
      ), et(t, "class", "wrap svelte-klzkec");
    },
    m(f, c) {
      si(f, t, c), l && l.m(t, null), Nt(t, n), Nt(t, r), Nt(r, i), e[11](r), e[12](t), s = !0, o || (a = [
        je(
          window,
          "resize",
          /*set_position*/
          e[7]
        ),
        je(
          window,
          "mousemove",
          /*handle_mousemove*/
          e[6]
        ),
        je(
          window,
          "mouseup",
          /*handle_mouseup*/
          e[5]
        ),
        je(
          r,
          "mousedown",
          /*handle_mousedown*/
          e[4]
        ),
        je(
          r,
          "mouseup",
          /*handle_mouseup*/
          e[5]
        )
      ], o = !0);
    },
    p(f, [c]) {
      l && l.p && (!s || c & /*$$scope*/
      512) && ci(
        l,
        u,
        f,
        /*$$scope*/
        f[9],
        s ? ri(
          u,
          /*$$scope*/
          f[9],
          c,
          null
        ) : ni(
          /*$$scope*/
          f[9]
        ),
        null
      ), (!s || c & /*px*/
      8) && fn(r, "transform", "translateX(" + /*px*/
      f[3] + "px)"), (!s || c & /*disabled*/
      1) && cn(
        r,
        "disabled",
        /*disabled*/
        f[0]
      );
    },
    i(f) {
      s || (ui(l, f), s = !0);
    },
    o(f) {
      fi(l, f), s = !1;
    },
    d(f) {
      f && ti(t), l && l.d(f), e[11](null), e[12](null), o = !1, oi(a);
    }
  };
}
function di(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
function mi(e, t) {
  const n = Math.pow(10, t);
  return Math.round((e + Number.EPSILON) * n) / n;
}
function gi(e, t, n) {
  let { $$slots: r = {}, $$scope: i } = t, { position: s = 0.5 } = t, { disabled: o = !1 } = t, a = !1, u, l, f, c = 0, h = 0;
  function d(_) {
    if (o)
      return;
    a = !0, f = u.getBoundingClientRect();
    const E = l.getBoundingClientRect();
    h = _.clientX - E.left;
  }
  function m(_) {
    a = !1;
  }
  function p(_) {
    a && (n(3, c = di(_.clientX - h - f.left, -10, f.width - 10)), n(8, s = mi((c + 10) / f.width, 5)));
  }
  function y() {
    f = u.getBoundingClientRect(), n(3, c = f.width * s - 10);
  }
  hi(y);
  function S(_) {
    un[_ ? "unshift" : "push"](() => {
      l = _, n(2, l);
    });
  }
  function H(_) {
    un[_ ? "unshift" : "push"](() => {
      u = _, n(1, u);
    });
  }
  return e.$$set = (_) => {
    "position" in _ && n(8, s = _.position), "disabled" in _ && n(0, o = _.disabled), "$$scope" in _ && n(9, i = _.$$scope);
  }, [
    o,
    u,
    l,
    c,
    d,
    m,
    p,
    y,
    s,
    i,
    r,
    S,
    H
  ];
}
class pi extends $r {
  constructor(t) {
    super(), ii(this, t, gi, _i, ai, { position: 8, disabled: 0 });
  }
}
const {
  SvelteComponent: bi,
  assign: yi,
  create_slot: vi,
  detach: wi,
  element: Ei,
  get_all_dirty_from_scope: Si,
  get_slot_changes: Ti,
  get_spread_update: Bi,
  init: Ai,
  insert: Hi,
  safe_not_equal: Ni,
  set_dynamic_element_data: hn,
  set_style: Q,
  toggle_class: ge,
  transition_in: fr,
  transition_out: cr,
  update_slot_base: Pi
} = window.__gradio__svelte__internal;
function Ii(e) {
  let t, n, r;
  const i = (
    /*#slots*/
    e[17].default
  ), s = vi(
    i,
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
  ], a = {};
  for (let u = 0; u < o.length; u += 1)
    a = yi(a, o[u]);
  return {
    c() {
      t = Ei(
        /*tag*/
        e[14]
      ), s && s.c(), hn(
        /*tag*/
        e[14]
      )(t, a), ge(
        t,
        "hidden",
        /*visible*/
        e[10] === !1
      ), ge(
        t,
        "padded",
        /*padding*/
        e[6]
      ), ge(
        t,
        "border_focus",
        /*border_mode*/
        e[5] === "focus"
      ), ge(t, "hide-container", !/*explicit_call*/
      e[8] && !/*container*/
      e[9]), Q(t, "height", typeof /*height*/
      e[0] == "number" ? (
        /*height*/
        e[0] + "px"
      ) : void 0), Q(t, "width", typeof /*width*/
      e[1] == "number" ? `calc(min(${/*width*/
      e[1]}px, 100%))` : void 0), Q(
        t,
        "border-style",
        /*variant*/
        e[4]
      ), Q(
        t,
        "overflow",
        /*allow_overflow*/
        e[11] ? "visible" : "hidden"
      ), Q(
        t,
        "flex-grow",
        /*scale*/
        e[12]
      ), Q(t, "min-width", `calc(min(${/*min_width*/
      e[13]}px, 100%))`), Q(t, "border-width", "var(--block-border-width)");
    },
    m(u, l) {
      Hi(u, t, l), s && s.m(t, null), r = !0;
    },
    p(u, l) {
      s && s.p && (!r || l & /*$$scope*/
      65536) && Pi(
        s,
        i,
        u,
        /*$$scope*/
        u[16],
        r ? Ti(
          i,
          /*$$scope*/
          u[16],
          l,
          null
        ) : Si(
          /*$$scope*/
          u[16]
        ),
        null
      ), hn(
        /*tag*/
        u[14]
      )(t, a = Bi(o, [
        (!r || l & /*test_id*/
        128) && { "data-testid": (
          /*test_id*/
          u[7]
        ) },
        (!r || l & /*elem_id*/
        4) && { id: (
          /*elem_id*/
          u[2]
        ) },
        (!r || l & /*elem_classes*/
        8 && n !== (n = "block " + /*elem_classes*/
        u[3].join(" ") + " svelte-1t38q2d")) && { class: n }
      ])), ge(
        t,
        "hidden",
        /*visible*/
        u[10] === !1
      ), ge(
        t,
        "padded",
        /*padding*/
        u[6]
      ), ge(
        t,
        "border_focus",
        /*border_mode*/
        u[5] === "focus"
      ), ge(t, "hide-container", !/*explicit_call*/
      u[8] && !/*container*/
      u[9]), l & /*height*/
      1 && Q(t, "height", typeof /*height*/
      u[0] == "number" ? (
        /*height*/
        u[0] + "px"
      ) : void 0), l & /*width*/
      2 && Q(t, "width", typeof /*width*/
      u[1] == "number" ? `calc(min(${/*width*/
      u[1]}px, 100%))` : void 0), l & /*variant*/
      16 && Q(
        t,
        "border-style",
        /*variant*/
        u[4]
      ), l & /*allow_overflow*/
      2048 && Q(
        t,
        "overflow",
        /*allow_overflow*/
        u[11] ? "visible" : "hidden"
      ), l & /*scale*/
      4096 && Q(
        t,
        "flex-grow",
        /*scale*/
        u[12]
      ), l & /*min_width*/
      8192 && Q(t, "min-width", `calc(min(${/*min_width*/
      u[13]}px, 100%))`);
    },
    i(u) {
      r || (fr(s, u), r = !0);
    },
    o(u) {
      cr(s, u), r = !1;
    },
    d(u) {
      u && wi(t), s && s.d(u);
    }
  };
}
function Ci(e) {
  let t, n = (
    /*tag*/
    e[14] && Ii(e)
  );
  return {
    c() {
      n && n.c();
    },
    m(r, i) {
      n && n.m(r, i), t = !0;
    },
    p(r, [i]) {
      /*tag*/
      r[14] && n.p(r, i);
    },
    i(r) {
      t || (fr(n, r), t = !0);
    },
    o(r) {
      cr(n, r), t = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function Oi(e, t, n) {
  let { $$slots: r = {}, $$scope: i } = t, { height: s = void 0 } = t, { width: o = void 0 } = t, { elem_id: a = "" } = t, { elem_classes: u = [] } = t, { variant: l = "solid" } = t, { border_mode: f = "base" } = t, { padding: c = !0 } = t, { type: h = "normal" } = t, { test_id: d = void 0 } = t, { explicit_call: m = !1 } = t, { container: p = !0 } = t, { visible: y = !0 } = t, { allow_overflow: S = !0 } = t, { scale: H = null } = t, { min_width: _ = 0 } = t, E = h === "fieldset" ? "fieldset" : "div";
  return e.$$set = (b) => {
    "height" in b && n(0, s = b.height), "width" in b && n(1, o = b.width), "elem_id" in b && n(2, a = b.elem_id), "elem_classes" in b && n(3, u = b.elem_classes), "variant" in b && n(4, l = b.variant), "border_mode" in b && n(5, f = b.border_mode), "padding" in b && n(6, c = b.padding), "type" in b && n(15, h = b.type), "test_id" in b && n(7, d = b.test_id), "explicit_call" in b && n(8, m = b.explicit_call), "container" in b && n(9, p = b.container), "visible" in b && n(10, y = b.visible), "allow_overflow" in b && n(11, S = b.allow_overflow), "scale" in b && n(12, H = b.scale), "min_width" in b && n(13, _ = b.min_width), "$$scope" in b && n(16, i = b.$$scope);
  }, [
    s,
    o,
    a,
    u,
    l,
    f,
    c,
    d,
    m,
    p,
    y,
    S,
    H,
    _,
    E,
    h,
    i,
    r
  ];
}
class Li extends bi {
  constructor(t) {
    super(), Ai(this, t, Oi, Ci, Ni, {
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
  SvelteComponent: xi,
  append: It,
  attr: Ct,
  create_component: Mi,
  destroy_component: ki,
  detach: Ri,
  element: _n,
  init: Di,
  insert: Ui,
  mount_component: Fi,
  safe_not_equal: Gi,
  set_data: ji,
  space: qi,
  text: Vi,
  toggle_class: pe,
  transition_in: zi,
  transition_out: Xi
} = window.__gradio__svelte__internal;
function Zi(e) {
  let t, n, r, i, s, o;
  return r = new /*Icon*/
  e[1]({}), {
    c() {
      t = _n("div"), n = _n("span"), Mi(r.$$.fragment), i = qi(), s = Vi(
        /*label*/
        e[0]
      ), Ct(n, "class", "svelte-juloz6"), Ct(t, "data-testid", "block-label"), Ct(t, "class", "svelte-juloz6"), pe(t, "hide", !/*show_label*/
      e[2]), pe(t, "sr-only", !/*show_label*/
      e[2]), pe(
        t,
        "float",
        /*float*/
        e[4]
      ), pe(
        t,
        "hide-label",
        /*disable*/
        e[3]
      );
    },
    m(a, u) {
      Ui(a, t, u), It(t, n), Fi(r, n, null), It(t, i), It(t, s), o = !0;
    },
    p(a, [u]) {
      (!o || u & /*label*/
      1) && ji(
        s,
        /*label*/
        a[0]
      ), (!o || u & /*show_label*/
      4) && pe(t, "hide", !/*show_label*/
      a[2]), (!o || u & /*show_label*/
      4) && pe(t, "sr-only", !/*show_label*/
      a[2]), (!o || u & /*float*/
      16) && pe(
        t,
        "float",
        /*float*/
        a[4]
      ), (!o || u & /*disable*/
      8) && pe(
        t,
        "hide-label",
        /*disable*/
        a[3]
      );
    },
    i(a) {
      o || (zi(r.$$.fragment, a), o = !0);
    },
    o(a) {
      Xi(r.$$.fragment, a), o = !1;
    },
    d(a) {
      a && Ri(t), ki(r);
    }
  };
}
function Wi(e, t, n) {
  let { label: r = null } = t, { Icon: i } = t, { show_label: s = !0 } = t, { disable: o = !1 } = t, { float: a = !0 } = t;
  return e.$$set = (u) => {
    "label" in u && n(0, r = u.label), "Icon" in u && n(1, i = u.Icon), "show_label" in u && n(2, s = u.show_label), "disable" in u && n(3, o = u.disable), "float" in u && n(4, a = u.float);
  }, [r, i, s, o, a];
}
class Ji extends xi {
  constructor(t) {
    super(), Di(this, t, Wi, Zi, Gi, {
      label: 0,
      Icon: 1,
      show_label: 2,
      disable: 3,
      float: 4
    });
  }
}
const {
  SvelteComponent: Qi,
  append: Ot,
  attr: F,
  detach: Yi,
  init: Ki,
  insert: $i,
  noop: Lt,
  safe_not_equal: es,
  svg_element: tt
} = window.__gradio__svelte__internal;
function ts(e) {
  let t, n, r, i;
  return {
    c() {
      t = tt("svg"), n = tt("rect"), r = tt("circle"), i = tt("polyline"), F(n, "x", "3"), F(n, "y", "3"), F(n, "width", "18"), F(n, "height", "18"), F(n, "rx", "2"), F(n, "ry", "2"), F(r, "cx", "8.5"), F(r, "cy", "8.5"), F(r, "r", "1.5"), F(i, "points", "21 15 16 10 5 21"), F(t, "xmlns", "http://www.w3.org/2000/svg"), F(t, "width", "100%"), F(t, "height", "100%"), F(t, "viewBox", "0 0 24 24"), F(t, "fill", "none"), F(t, "stroke", "currentColor"), F(t, "stroke-width", "1.5"), F(t, "stroke-linecap", "round"), F(t, "stroke-linejoin", "round"), F(t, "class", "feather feather-image");
    },
    m(s, o) {
      $i(s, t, o), Ot(t, n), Ot(t, r), Ot(t, i);
    },
    p: Lt,
    i: Lt,
    o: Lt,
    d(s) {
      s && Yi(t);
    }
  };
}
class ns extends Qi {
  constructor(t) {
    super(), Ki(this, t, null, ts, es, {});
  }
}
const rs = [
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
], dn = {
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
rs.reduce(
  (e, { color: t, primary: n, secondary: r }) => ({
    ...e,
    [t]: {
      primary: dn[t][n],
      secondary: dn[t][r]
    }
  }),
  {}
);
function Be() {
}
function is(e) {
  return e();
}
function ss(e) {
  e.forEach(is);
}
function os(e) {
  return typeof e == "function";
}
function as(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function hr(e, ...t) {
  if (e == null) {
    for (const r of t)
      r(void 0);
    return Be;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function ls(e) {
  let t;
  return hr(e, (n) => t = n)(), t;
}
const _r = typeof window < "u";
let mn = _r ? () => window.performance.now() : () => Date.now(), dr = _r ? (e) => requestAnimationFrame(e) : Be;
const Ce = /* @__PURE__ */ new Set();
function mr(e) {
  Ce.forEach((t) => {
    t.c(e) || (Ce.delete(t), t.f());
  }), Ce.size !== 0 && dr(mr);
}
function us(e) {
  let t;
  return Ce.size === 0 && dr(mr), {
    promise: new Promise((n) => {
      Ce.add(t = { c: e, f: n });
    }),
    abort() {
      Ce.delete(t);
    }
  };
}
const He = [];
function fs(e, t) {
  return {
    subscribe: Qe(e, t).subscribe
  };
}
function Qe(e, t = Be) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function i(a) {
    if (as(e, a) && (e = a, n)) {
      const u = !He.length;
      for (const l of r)
        l[1](), He.push(l, e);
      if (u) {
        for (let l = 0; l < He.length; l += 2)
          He[l][0](He[l + 1]);
        He.length = 0;
      }
    }
  }
  function s(a) {
    i(a(e));
  }
  function o(a, u = Be) {
    const l = [a, u];
    return r.add(l), r.size === 1 && (n = t(i, s) || Be), a(e), () => {
      r.delete(l), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: s, subscribe: o };
}
function De(e, t, n) {
  const r = !Array.isArray(e), i = r ? [e] : e;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const s = t.length < 2;
  return fs(n, (o, a) => {
    let u = !1;
    const l = [];
    let f = 0, c = Be;
    const h = () => {
      if (f)
        return;
      c();
      const m = t(r ? l[0] : l, o, a);
      s ? o(m) : c = os(m) ? m : Be;
    }, d = i.map(
      (m, p) => hr(
        m,
        (y) => {
          l[p] = y, f &= ~(1 << p), u && h();
        },
        () => {
          f |= 1 << p;
        }
      )
    );
    return u = !0, h(), function() {
      ss(d), c(), u = !1;
    };
  });
}
function gn(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function zt(e, t, n, r) {
  if (typeof n == "number" || gn(n)) {
    const i = r - n, s = (n - t) / (e.dt || 1 / 60), o = e.opts.stiffness * i, a = e.opts.damping * s, u = (o - a) * e.inv_mass, l = (s + u) * e.dt;
    return Math.abs(l) < e.opts.precision && Math.abs(i) < e.opts.precision ? r : (e.settled = !1, gn(n) ? new Date(n.getTime() + l) : n + l);
  } else {
    if (Array.isArray(n))
      return n.map(
        (i, s) => zt(e, t[s], n[s], r[s])
      );
    if (typeof n == "object") {
      const i = {};
      for (const s in n)
        i[s] = zt(e, t[s], n[s], r[s]);
      return i;
    } else
      throw new Error(`Cannot spring ${typeof n} values`);
  }
}
function pn(e, t = {}) {
  const n = Qe(e), { stiffness: r = 0.15, damping: i = 0.8, precision: s = 0.01 } = t;
  let o, a, u, l = e, f = e, c = 1, h = 0, d = !1;
  function m(y, S = {}) {
    f = y;
    const H = u = {};
    return e == null || S.hard || p.stiffness >= 1 && p.damping >= 1 ? (d = !0, o = mn(), l = y, n.set(e = f), Promise.resolve()) : (S.soft && (h = 1 / ((S.soft === !0 ? 0.5 : +S.soft) * 60), c = 0), a || (o = mn(), d = !1, a = us((_) => {
      if (d)
        return d = !1, a = null, !1;
      c = Math.min(c + h, 1);
      const E = {
        inv_mass: c,
        opts: p,
        settled: !0,
        dt: (_ - o) * 60 / 1e3
      }, b = zt(E, l, e, f);
      return o = _, l = e, n.set(e = b), E.settled && (a = null), !E.settled;
    })), new Promise((_) => {
      a.promise.then(() => {
        H === u && _();
      });
    }));
  }
  const p = {
    set: m,
    update: (y, S) => m(y(f, e), S),
    subscribe: n.subscribe,
    stiffness: r,
    damping: i,
    precision: s
  };
  return p;
}
function cs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hs = function(t) {
  return _s(t) && !ds(t);
};
function _s(e) {
  return !!e && typeof e == "object";
}
function ds(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || ps(e);
}
var ms = typeof Symbol == "function" && Symbol.for, gs = ms ? Symbol.for("react.element") : 60103;
function ps(e) {
  return e.$$typeof === gs;
}
function bs(e) {
  return Array.isArray(e) ? [] : {};
}
function Xe(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? Oe(bs(e), e, t) : e;
}
function ys(e, t, n) {
  return e.concat(t).map(function(r) {
    return Xe(r, n);
  });
}
function vs(e, t) {
  if (!t.customMerge)
    return Oe;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : Oe;
}
function ws(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function bn(e) {
  return Object.keys(e).concat(ws(e));
}
function gr(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Es(e, t) {
  return gr(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function Ss(e, t, n) {
  var r = {};
  return n.isMergeableObject(e) && bn(e).forEach(function(i) {
    r[i] = Xe(e[i], n);
  }), bn(t).forEach(function(i) {
    Es(e, i) || (gr(e, i) && n.isMergeableObject(t[i]) ? r[i] = vs(i, n)(e[i], t[i], n) : r[i] = Xe(t[i], n));
  }), r;
}
function Oe(e, t, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || ys, n.isMergeableObject = n.isMergeableObject || hs, n.cloneUnlessOtherwiseSpecified = Xe;
  var r = Array.isArray(t), i = Array.isArray(e), s = r === i;
  return s ? r ? n.arrayMerge(e, t, n) : Ss(e, t, n) : Xe(t, n);
}
Oe.all = function(t, n) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(r, i) {
    return Oe(r, i, n);
  }, {});
};
var Ts = Oe, Bs = Ts;
const As = /* @__PURE__ */ cs(Bs);
var Xt = function(e, t) {
  return Xt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r)
      Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Xt(e, t);
};
function wt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Xt(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var L = function() {
  return L = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var s in n)
        Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, L.apply(this, arguments);
};
function xt(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, s; r < i; r++)
      (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var N;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(N || (N = {}));
var M;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(M || (M = {}));
var Le;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(Le || (Le = {}));
function yn(e) {
  return e.type === M.literal;
}
function Hs(e) {
  return e.type === M.argument;
}
function pr(e) {
  return e.type === M.number;
}
function br(e) {
  return e.type === M.date;
}
function yr(e) {
  return e.type === M.time;
}
function vr(e) {
  return e.type === M.select;
}
function wr(e) {
  return e.type === M.plural;
}
function Ns(e) {
  return e.type === M.pound;
}
function Er(e) {
  return e.type === M.tag;
}
function Sr(e) {
  return !!(e && typeof e == "object" && e.type === Le.number);
}
function Zt(e) {
  return !!(e && typeof e == "object" && e.type === Le.dateTime);
}
var Tr = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Ps = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Is(e) {
  var t = {};
  return e.replace(Ps, function(n) {
    var r = n.length;
    switch (n[0]) {
      case "G":
        t.era = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "y":
        t.year = r === 2 ? "2-digit" : "numeric";
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
        t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        t.day = ["numeric", "2-digit"][r - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        t.weekday = r === 4 ? "short" : r === 5 ? "narrow" : "short";
        break;
      case "e":
        if (r < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "c":
        if (r < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        t.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "a":
        t.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "H":
        t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "K":
        t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "k":
        t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        t.minute = ["numeric", "2-digit"][r - 1];
        break;
      case "s":
        t.second = ["numeric", "2-digit"][r - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        t.timeZoneName = r < 4 ? "short" : "long";
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
var Cs = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Os(e) {
  if (e.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var t = e.split(Cs).filter(function(h) {
    return h.length > 0;
  }), n = [], r = 0, i = t; r < i.length; r++) {
    var s = i[r], o = s.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var a = o[0], u = o.slice(1), l = 0, f = u; l < f.length; l++) {
      var c = f[l];
      if (c.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: a, options: u });
  }
  return n;
}
function Ls(e) {
  return e.replace(/^(.*?)-/, "");
}
var vn = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Br = /^(@+)?(\+|#+)?[rs]?$/g, xs = /(\*)(0+)|(#+)(0+)|(0+)/g, Ar = /^(0+)$/;
function wn(e) {
  var t = {};
  return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Br, function(n, r, i) {
    return typeof i != "string" ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : i === "+" ? t.minimumSignificantDigits = r.length : r[0] === "#" ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), t;
}
function Hr(e) {
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
function Ms(e) {
  var t;
  if (e[0] === "E" && e[1] === "E" ? (t = {
    notation: "engineering"
  }, e = e.slice(2)) : e[0] === "E" && (t = {
    notation: "scientific"
  }, e = e.slice(1)), t) {
    var n = e.slice(0, 2);
    if (n === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : n === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !Ar.test(e))
      throw new Error("Malformed concise eng/scientific notation");
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function En(e) {
  var t = {}, n = Hr(e);
  return n || t;
}
function ks(e) {
  for (var t = {}, n = 0, r = e; n < r.length; n++) {
    var i = r[n];
    switch (i.stem) {
      case "percent":
      case "%":
        t.style = "percent";
        continue;
      case "%x100":
        t.style = "percent", t.scale = 100;
        continue;
      case "currency":
        t.style = "currency", t.currency = i.options[0];
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
        t.style = "unit", t.unit = Ls(i.options[0]);
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
        t = L(L(L({}, t), { notation: "scientific" }), i.options.reduce(function(u, l) {
          return L(L({}, u), En(l));
        }, {}));
        continue;
      case "engineering":
        t = L(L(L({}, t), { notation: "engineering" }), i.options.reduce(function(u, l) {
          return L(L({}, u), En(l));
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
        t.scale = parseFloat(i.options[0]);
        continue;
      case "integer-width":
        if (i.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        i.options[0].replace(xs, function(u, l, f, c, h, d) {
          if (l)
            t.minimumIntegerDigits = f.length;
          else {
            if (c && h)
              throw new Error("We currently do not support maximum integer digits");
            if (d)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Ar.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (vn.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(vn, function(u, l, f, c, h, d) {
        return f === "*" ? t.minimumFractionDigits = l.length : c && c[0] === "#" ? t.maximumFractionDigits = c.length : h && d ? (t.minimumFractionDigits = h.length, t.maximumFractionDigits = h.length + d.length) : (t.minimumFractionDigits = l.length, t.maximumFractionDigits = l.length), "";
      });
      var s = i.options[0];
      s === "w" ? t = L(L({}, t), { trailingZeroDisplay: "stripIfInteger" }) : s && (t = L(L({}, t), wn(s)));
      continue;
    }
    if (Br.test(i.stem)) {
      t = L(L({}, t), wn(i.stem));
      continue;
    }
    var o = Hr(i.stem);
    o && (t = L(L({}, t), o));
    var a = Ms(i.stem);
    a && (t = L(L({}, t), a));
  }
  return t;
}
var nt = {
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
function Rs(e, t) {
  for (var n = "", r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === "j") {
      for (var s = 0; r + 1 < e.length && e.charAt(r + 1) === i; )
        s++, r++;
      var o = 1 + (s & 1), a = s < 2 ? 1 : 3 + (s >> 1), u = "a", l = Ds(t);
      for ((l == "H" || l == "k") && (a = 0); a-- > 0; )
        n += u;
      for (; o-- > 0; )
        n = l + n;
    } else
      i === "J" ? n += "H" : n += i;
  }
  return n;
}
function Ds(e) {
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
  var n = e.language, r;
  n !== "root" && (r = e.maximize().region);
  var i = nt[r || ""] || nt[n || ""] || nt["".concat(n, "-001")] || nt["001"];
  return i[0];
}
var Mt, Us = new RegExp("^".concat(Tr.source, "*")), Fs = new RegExp("".concat(Tr.source, "*$"));
function C(e, t) {
  return { start: e, end: t };
}
var Gs = !!String.prototype.startsWith, js = !!String.fromCodePoint, qs = !!Object.fromEntries, Vs = !!String.prototype.codePointAt, zs = !!String.prototype.trimStart, Xs = !!String.prototype.trimEnd, Zs = !!Number.isSafeInteger, Ws = Zs ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, Wt = !0;
try {
  var Js = Pr("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Wt = ((Mt = Js.exec("a")) === null || Mt === void 0 ? void 0 : Mt[0]) === "a";
} catch {
  Wt = !1;
}
var Sn = Gs ? (
  // Native
  function(t, n, r) {
    return t.startsWith(n, r);
  }
) : (
  // For IE11
  function(t, n, r) {
    return t.slice(r, r + n.length) === n;
  }
), Jt = js ? String.fromCodePoint : (
  // IE11
  function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    for (var r = "", i = t.length, s = 0, o; i > s; ) {
      if (o = t[s++], o > 1114111)
        throw RangeError(o + " is not a valid code point");
      r += o < 65536 ? String.fromCharCode(o) : String.fromCharCode(((o -= 65536) >> 10) + 55296, o % 1024 + 56320);
    }
    return r;
  }
), Tn = (
  // native
  qs ? Object.fromEntries : (
    // Ponyfill
    function(t) {
      for (var n = {}, r = 0, i = t; r < i.length; r++) {
        var s = i[r], o = s[0], a = s[1];
        n[o] = a;
      }
      return n;
    }
  )
), Nr = Vs ? (
  // Native
  function(t, n) {
    return t.codePointAt(n);
  }
) : (
  // IE 11
  function(t, n) {
    var r = t.length;
    if (!(n < 0 || n >= r)) {
      var i = t.charCodeAt(n), s;
      return i < 55296 || i > 56319 || n + 1 === r || (s = t.charCodeAt(n + 1)) < 56320 || s > 57343 ? i : (i - 55296 << 10) + (s - 56320) + 65536;
    }
  }
), Qs = zs ? (
  // Native
  function(t) {
    return t.trimStart();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Us, "");
  }
), Ys = Xs ? (
  // Native
  function(t) {
    return t.trimEnd();
  }
) : (
  // Ponyfill
  function(t) {
    return t.replace(Fs, "");
  }
);
function Pr(e, t) {
  return new RegExp(e, t);
}
var Qt;
if (Wt) {
  var Bn = Pr("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Qt = function(t, n) {
    var r;
    Bn.lastIndex = n;
    var i = Bn.exec(t);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  Qt = function(t, n) {
    for (var r = []; ; ) {
      var i = Nr(t, n);
      if (i === void 0 || Ir(i) || to(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return Jt.apply(void 0, r);
  };
var Ks = (
  /** @class */
  function() {
    function e(t, n) {
      n === void 0 && (n = {}), this.message = t, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return e.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, e.prototype.parseMessage = function(t, n, r) {
      for (var i = []; !this.isEOF(); ) {
        var s = this.char();
        if (s === 123) {
          var o = this.parseArgument(t, r);
          if (o.err)
            return o;
          i.push(o.val);
        } else {
          if (s === 125 && t > 0)
            break;
          if (s === 35 && (n === "plural" || n === "selectordinal")) {
            var a = this.clonePosition();
            this.bump(), i.push({
              type: M.pound,
              location: C(a, this.clonePosition())
            });
          } else if (s === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(N.UNMATCHED_CLOSING_TAG, C(this.clonePosition(), this.clonePosition()));
          } else if (s === 60 && !this.ignoreTag && Yt(this.peek() || 0)) {
            var o = this.parseTag(t, n);
            if (o.err)
              return o;
            i.push(o.val);
          } else {
            var o = this.parseLiteral(t, n);
            if (o.err)
              return o;
            i.push(o.val);
          }
        }
      }
      return { val: i, err: null };
    }, e.prototype.parseTag = function(t, n) {
      var r = this.clonePosition();
      this.bump();
      var i = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: M.literal,
            value: "<".concat(i, "/>"),
            location: C(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var s = this.parseMessage(t + 1, n, !0);
        if (s.err)
          return s;
        var o = s.val, a = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Yt(this.char()))
            return this.error(N.INVALID_TAG, C(a, this.clonePosition()));
          var u = this.clonePosition(), l = this.parseTagName();
          return i !== l ? this.error(N.UNMATCHED_CLOSING_TAG, C(u, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: M.tag,
              value: i,
              children: o,
              location: C(r, this.clonePosition())
            },
            err: null
          } : this.error(N.INVALID_TAG, C(a, this.clonePosition())));
        } else
          return this.error(N.UNCLOSED_TAG, C(r, this.clonePosition()));
      } else
        return this.error(N.INVALID_TAG, C(r, this.clonePosition()));
    }, e.prototype.parseTagName = function() {
      var t = this.offset();
      for (this.bump(); !this.isEOF() && eo(this.char()); )
        this.bump();
      return this.message.slice(t, this.offset());
    }, e.prototype.parseLiteral = function(t, n) {
      for (var r = this.clonePosition(), i = ""; ; ) {
        var s = this.tryParseQuote(n);
        if (s) {
          i += s;
          continue;
        }
        var o = this.tryParseUnquoted(t, n);
        if (o) {
          i += o;
          continue;
        }
        var a = this.tryParseLeftAngleBracket();
        if (a) {
          i += a;
          continue;
        }
        break;
      }
      var u = C(r, this.clonePosition());
      return {
        val: { type: M.literal, value: i, location: u },
        err: null
      };
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !$s(this.peek() || 0)) ? (this.bump(), "<") : null;
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
        var r = this.char();
        if (r === 39)
          if (this.peek() === 39)
            n.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          n.push(r);
        this.bump();
      }
      return Jt.apply(void 0, n);
    }, e.prototype.tryParseUnquoted = function(t, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && t > 0 ? null : (this.bump(), Jt(r));
    }, e.prototype.parseArgument = function(t, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(N.EXPECT_ARGUMENT_CLOSING_BRACE, C(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(N.EMPTY_ARGUMENT, C(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(N.MALFORMED_ARGUMENT, C(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(N.EXPECT_ARGUMENT_CLOSING_BRACE, C(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: M.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: C(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(N.EXPECT_ARGUMENT_CLOSING_BRACE, C(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
          return this.error(N.MALFORMED_ARGUMENT, C(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = Qt(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var s = this.clonePosition(), o = C(t, s);
      return { value: r, location: o };
    }, e.prototype.parseArgumentOptions = function(t, n, r, i) {
      var s, o = this.clonePosition(), a = this.parseIdentifierIfPossible().value, u = this.clonePosition();
      switch (a) {
        case "":
          return this.error(N.EXPECT_ARGUMENT_TYPE, C(o, u));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var l = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var f = this.clonePosition(), c = this.parseSimpleArgStyleIfPossible();
            if (c.err)
              return c;
            var h = Ys(c.val);
            if (h.length === 0)
              return this.error(N.EXPECT_ARGUMENT_STYLE, C(this.clonePosition(), this.clonePosition()));
            var d = C(f, this.clonePosition());
            l = { style: h, styleLocation: d };
          }
          var m = this.tryParseArgumentClose(i);
          if (m.err)
            return m;
          var p = C(i, this.clonePosition());
          if (l && Sn(l == null ? void 0 : l.style, "::", 0)) {
            var y = Qs(l.style.slice(2));
            if (a === "number") {
              var c = this.parseNumberSkeletonFromString(y, l.styleLocation);
              return c.err ? c : {
                val: { type: M.number, value: r, location: p, style: c.val },
                err: null
              };
            } else {
              if (y.length === 0)
                return this.error(N.EXPECT_DATE_TIME_SKELETON, p);
              var S = y;
              this.locale && (S = Rs(y, this.locale));
              var h = {
                type: Le.dateTime,
                pattern: S,
                location: l.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Is(S) : {}
              }, H = a === "date" ? M.date : M.time;
              return {
                val: { type: H, value: r, location: p, style: h },
                err: null
              };
            }
          }
          return {
            val: {
              type: a === "number" ? M.number : a === "date" ? M.date : M.time,
              value: r,
              location: p,
              style: (s = l == null ? void 0 : l.style) !== null && s !== void 0 ? s : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var _ = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(N.EXPECT_SELECT_ARGUMENT_OPTIONS, C(_, L({}, _)));
          this.bumpSpace();
          var E = this.parseIdentifierIfPossible(), b = 0;
          if (a !== "select" && E.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(N.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, C(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var c = this.tryParseDecimalInteger(N.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, N.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (c.err)
              return c;
            this.bumpSpace(), E = this.parseIdentifierIfPossible(), b = c.val;
          }
          var V = this.tryParsePluralOrSelectOptions(t, a, n, E);
          if (V.err)
            return V;
          var m = this.tryParseArgumentClose(i);
          if (m.err)
            return m;
          var G = C(i, this.clonePosition());
          return a === "select" ? {
            val: {
              type: M.select,
              value: r,
              options: Tn(V.val),
              location: G
            },
            err: null
          } : {
            val: {
              type: M.plural,
              value: r,
              options: Tn(V.val),
              offset: b,
              pluralType: a === "plural" ? "cardinal" : "ordinal",
              location: G
            },
            err: null
          };
        }
        default:
          return this.error(N.INVALID_ARGUMENT_TYPE, C(o, u));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(N.EXPECT_ARGUMENT_CLOSING_BRACE, C(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(N.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, C(i, this.clonePosition()));
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
      var r = [];
      try {
        r = Os(t);
      } catch {
        return this.error(N.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Le.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? ks(r) : {}
        },
        err: null
      };
    }, e.prototype.tryParsePluralOrSelectOptions = function(t, n, r, i) {
      for (var s, o = !1, a = [], u = /* @__PURE__ */ new Set(), l = i.value, f = i.location; ; ) {
        if (l.length === 0) {
          var c = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var h = this.tryParseDecimalInteger(N.EXPECT_PLURAL_ARGUMENT_SELECTOR, N.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (h.err)
              return h;
            f = C(c, this.clonePosition()), l = this.message.slice(c.offset, this.offset());
          } else
            break;
        }
        if (u.has(l))
          return this.error(n === "select" ? N.DUPLICATE_SELECT_ARGUMENT_SELECTOR : N.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, f);
        l === "other" && (o = !0), this.bumpSpace();
        var d = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? N.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : N.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, C(this.clonePosition(), this.clonePosition()));
        var m = this.parseMessage(t + 1, n, r);
        if (m.err)
          return m;
        var p = this.tryParseArgumentClose(d);
        if (p.err)
          return p;
        a.push([
          l,
          {
            value: m.val,
            location: C(d, this.clonePosition())
          }
        ]), u.add(l), this.bumpSpace(), s = this.parseIdentifierIfPossible(), l = s.value, f = s.location;
      }
      return a.length === 0 ? this.error(n === "select" ? N.EXPECT_SELECT_ARGUMENT_SELECTOR : N.EXPECT_PLURAL_ARGUMENT_SELECTOR, C(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(N.MISSING_OTHER_CLAUSE, C(this.clonePosition(), this.clonePosition())) : { val: a, err: null };
    }, e.prototype.tryParseDecimalInteger = function(t, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var s = !1, o = 0; !this.isEOF(); ) {
        var a = this.char();
        if (a >= 48 && a <= 57)
          s = !0, o = o * 10 + (a - 48), this.bump();
        else
          break;
      }
      var u = C(i, this.clonePosition());
      return s ? (o *= r, Ws(o) ? { val: o, err: null } : this.error(n, u)) : this.error(t, u);
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
      var n = Nr(this.message, t);
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
      if (Sn(this.message, t, this.offset())) {
        for (var n = 0; n < t.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, e.prototype.bumpUntil = function(t) {
      var n = this.offset(), r = this.message.indexOf(t, n);
      return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
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
      for (; !this.isEOF() && Ir(this.char()); )
        this.bump();
    }, e.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var t = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (t >= 65536 ? 2 : 1));
      return r ?? null;
    }, e;
  }()
);
function Yt(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function $s(e) {
  return Yt(e) || e === 47;
}
function eo(e) {
  return e === 45 || e === 46 || e >= 48 && e <= 57 || e === 95 || e >= 97 && e <= 122 || e >= 65 && e <= 90 || e == 183 || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039;
}
function Ir(e) {
  return e >= 9 && e <= 13 || e === 32 || e === 133 || e >= 8206 && e <= 8207 || e === 8232 || e === 8233;
}
function to(e) {
  return e >= 33 && e <= 35 || e === 36 || e >= 37 && e <= 39 || e === 40 || e === 41 || e === 42 || e === 43 || e === 44 || e === 45 || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || e === 91 || e === 92 || e === 93 || e === 94 || e === 96 || e === 123 || e === 124 || e === 125 || e === 126 || e === 161 || e >= 162 && e <= 165 || e === 166 || e === 167 || e === 169 || e === 171 || e === 172 || e === 174 || e === 176 || e === 177 || e === 182 || e === 187 || e === 191 || e === 215 || e === 247 || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || e === 8216 || e === 8217 || e === 8218 || e >= 8219 && e <= 8220 || e === 8221 || e === 8222 || e === 8223 || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || e === 8249 || e === 8250 || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || e === 8260 || e === 8261 || e === 8262 || e >= 8263 && e <= 8273 || e === 8274 || e === 8275 || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || e === 8608 || e >= 8609 && e <= 8610 || e === 8611 || e >= 8612 && e <= 8613 || e === 8614 || e >= 8615 && e <= 8621 || e === 8622 || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || e === 8658 || e === 8659 || e === 8660 || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || e === 8968 || e === 8969 || e === 8970 || e === 8971 || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || e === 9001 || e === 9002 || e >= 9003 && e <= 9083 || e === 9084 || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || e === 9655 || e >= 9656 && e <= 9664 || e === 9665 || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || e === 9839 || e >= 9840 && e <= 10087 || e === 10088 || e === 10089 || e === 10090 || e === 10091 || e === 10092 || e === 10093 || e === 10094 || e === 10095 || e === 10096 || e === 10097 || e === 10098 || e === 10099 || e === 10100 || e === 10101 || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || e === 10181 || e === 10182 || e >= 10183 && e <= 10213 || e === 10214 || e === 10215 || e === 10216 || e === 10217 || e === 10218 || e === 10219 || e === 10220 || e === 10221 || e === 10222 || e === 10223 || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || e === 10627 || e === 10628 || e === 10629 || e === 10630 || e === 10631 || e === 10632 || e === 10633 || e === 10634 || e === 10635 || e === 10636 || e === 10637 || e === 10638 || e === 10639 || e === 10640 || e === 10641 || e === 10642 || e === 10643 || e === 10644 || e === 10645 || e === 10646 || e === 10647 || e === 10648 || e >= 10649 && e <= 10711 || e === 10712 || e === 10713 || e === 10714 || e === 10715 || e >= 10716 && e <= 10747 || e === 10748 || e === 10749 || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || e === 11158 || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || e === 11778 || e === 11779 || e === 11780 || e === 11781 || e >= 11782 && e <= 11784 || e === 11785 || e === 11786 || e === 11787 || e === 11788 || e === 11789 || e >= 11790 && e <= 11798 || e === 11799 || e >= 11800 && e <= 11801 || e === 11802 || e === 11803 || e === 11804 || e === 11805 || e >= 11806 && e <= 11807 || e === 11808 || e === 11809 || e === 11810 || e === 11811 || e === 11812 || e === 11813 || e === 11814 || e === 11815 || e === 11816 || e === 11817 || e >= 11818 && e <= 11822 || e === 11823 || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || e === 11840 || e === 11841 || e === 11842 || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || e === 11858 || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || e === 12296 || e === 12297 || e === 12298 || e === 12299 || e === 12300 || e === 12301 || e === 12302 || e === 12303 || e === 12304 || e === 12305 || e >= 12306 && e <= 12307 || e === 12308 || e === 12309 || e === 12310 || e === 12311 || e === 12312 || e === 12313 || e === 12314 || e === 12315 || e === 12316 || e === 12317 || e >= 12318 && e <= 12319 || e === 12320 || e === 12336 || e === 64830 || e === 64831 || e >= 65093 && e <= 65094;
}
function Kt(e) {
  e.forEach(function(t) {
    if (delete t.location, vr(t) || wr(t))
      for (var n in t.options)
        delete t.options[n].location, Kt(t.options[n].value);
    else
      pr(t) && Sr(t.style) || (br(t) || yr(t)) && Zt(t.style) ? delete t.style.location : Er(t) && Kt(t.children);
  });
}
function no(e, t) {
  t === void 0 && (t = {}), t = L({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t);
  var n = new Ks(e, t).parse();
  if (n.err) {
    var r = SyntaxError(N[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || Kt(n.val), n.val;
}
function kt(e, t) {
  var n = t && t.cache ? t.cache : lo, r = t && t.serializer ? t.serializer : ao, i = t && t.strategy ? t.strategy : io;
  return i(e, {
    cache: n,
    serializer: r
  });
}
function ro(e) {
  return e == null || typeof e == "number" || typeof e == "boolean";
}
function Cr(e, t, n, r) {
  var i = ro(r) ? r : n(r), s = t.get(i);
  return typeof s > "u" && (s = e.call(this, r), t.set(i, s)), s;
}
function Or(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), s = t.get(i);
  return typeof s > "u" && (s = e.apply(this, r), t.set(i, s)), s;
}
function sn(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function io(e, t) {
  var n = e.length === 1 ? Cr : Or;
  return sn(e, this, n, t.cache.create(), t.serializer);
}
function so(e, t) {
  return sn(e, this, Or, t.cache.create(), t.serializer);
}
function oo(e, t) {
  return sn(e, this, Cr, t.cache.create(), t.serializer);
}
var ao = function() {
  return JSON.stringify(arguments);
};
function on() {
  this.cache = /* @__PURE__ */ Object.create(null);
}
on.prototype.get = function(e) {
  return this.cache[e];
};
on.prototype.set = function(e, t) {
  this.cache[e] = t;
};
var lo = {
  create: function() {
    return new on();
  }
}, Rt = {
  variadic: so,
  monadic: oo
}, xe;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(xe || (xe = {}));
var Et = (
  /** @class */
  function(e) {
    wt(t, e);
    function t(n, r, i) {
      var s = e.call(this, n) || this;
      return s.code = r, s.originalMessage = i, s;
    }
    return t.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, t;
  }(Error)
), An = (
  /** @class */
  function(e) {
    wt(t, e);
    function t(n, r, i, s) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), xe.INVALID_VALUE, s) || this;
    }
    return t;
  }(Et)
), uo = (
  /** @class */
  function(e) {
    wt(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), xe.INVALID_VALUE, i) || this;
    }
    return t;
  }(Et)
), fo = (
  /** @class */
  function(e) {
    wt(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), xe.MISSING_VALUE, r) || this;
    }
    return t;
  }(Et)
), X;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(X || (X = {}));
function co(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== X.literal || n.type !== X.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function ho(e) {
  return typeof e == "function";
}
function ot(e, t, n, r, i, s, o) {
  if (e.length === 1 && yn(e[0]))
    return [
      {
        type: X.literal,
        value: e[0].value
      }
    ];
  for (var a = [], u = 0, l = e; u < l.length; u++) {
    var f = l[u];
    if (yn(f)) {
      a.push({
        type: X.literal,
        value: f.value
      });
      continue;
    }
    if (Ns(f)) {
      typeof s == "number" && a.push({
        type: X.literal,
        value: n.getNumberFormat(t).format(s)
      });
      continue;
    }
    var c = f.value;
    if (!(i && c in i))
      throw new fo(c, o);
    var h = i[c];
    if (Hs(f)) {
      (!h || typeof h == "string" || typeof h == "number") && (h = typeof h == "string" || typeof h == "number" ? String(h) : ""), a.push({
        type: typeof h == "string" ? X.literal : X.object,
        value: h
      });
      continue;
    }
    if (br(f)) {
      var d = typeof f.style == "string" ? r.date[f.style] : Zt(f.style) ? f.style.parsedOptions : void 0;
      a.push({
        type: X.literal,
        value: n.getDateTimeFormat(t, d).format(h)
      });
      continue;
    }
    if (yr(f)) {
      var d = typeof f.style == "string" ? r.time[f.style] : Zt(f.style) ? f.style.parsedOptions : r.time.medium;
      a.push({
        type: X.literal,
        value: n.getDateTimeFormat(t, d).format(h)
      });
      continue;
    }
    if (pr(f)) {
      var d = typeof f.style == "string" ? r.number[f.style] : Sr(f.style) ? f.style.parsedOptions : void 0;
      d && d.scale && (h = h * (d.scale || 1)), a.push({
        type: X.literal,
        value: n.getNumberFormat(t, d).format(h)
      });
      continue;
    }
    if (Er(f)) {
      var m = f.children, p = f.value, y = i[p];
      if (!ho(y))
        throw new uo(p, "function", o);
      var S = ot(m, t, n, r, i, s), H = y(S.map(function(b) {
        return b.value;
      }));
      Array.isArray(H) || (H = [H]), a.push.apply(a, H.map(function(b) {
        return {
          type: typeof b == "string" ? X.literal : X.object,
          value: b
        };
      }));
    }
    if (vr(f)) {
      var _ = f.options[h] || f.options.other;
      if (!_)
        throw new An(f.value, h, Object.keys(f.options), o);
      a.push.apply(a, ot(_.value, t, n, r, i));
      continue;
    }
    if (wr(f)) {
      var _ = f.options["=".concat(h)];
      if (!_) {
        if (!Intl.PluralRules)
          throw new Et(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, xe.MISSING_INTL_API, o);
        var E = n.getPluralRules(t, { type: f.pluralType }).select(h - (f.offset || 0));
        _ = f.options[E] || f.options.other;
      }
      if (!_)
        throw new An(f.value, h, Object.keys(f.options), o);
      a.push.apply(a, ot(_.value, t, n, r, i, h - (f.offset || 0)));
      continue;
    }
  }
  return co(a);
}
function _o(e, t) {
  return t ? L(L(L({}, e || {}), t || {}), Object.keys(e).reduce(function(n, r) {
    return n[r] = L(L({}, e[r]), t[r] || {}), n;
  }, {})) : e;
}
function mo(e, t) {
  return t ? Object.keys(e).reduce(function(n, r) {
    return n[r] = _o(e[r], t[r]), n;
  }, L({}, e)) : e;
}
function Dt(e) {
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
function go(e) {
  return e === void 0 && (e = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: kt(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, xt([void 0], n, !1)))();
    }, {
      cache: Dt(e.number),
      strategy: Rt.variadic
    }),
    getDateTimeFormat: kt(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, xt([void 0], n, !1)))();
    }, {
      cache: Dt(e.dateTime),
      strategy: Rt.variadic
    }),
    getPluralRules: kt(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, xt([void 0], n, !1)))();
    }, {
      cache: Dt(e.pluralRules),
      strategy: Rt.variadic
    })
  };
}
var po = (
  /** @class */
  function() {
    function e(t, n, r, i) {
      var s = this;
      if (n === void 0 && (n = e.defaultLocale), this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(o) {
        var a = s.formatToParts(o);
        if (a.length === 1)
          return a[0].value;
        var u = a.reduce(function(l, f) {
          return !l.length || f.type !== X.literal || typeof l[l.length - 1] != "string" ? l.push(f.value) : l[l.length - 1] += f.value, l;
        }, []);
        return u.length <= 1 ? u[0] || "" : u;
      }, this.formatToParts = function(o) {
        return ot(s.ast, s.locales, s.formatters, s.formats, o, void 0, s.message);
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
          ignoreTag: i == null ? void 0 : i.ignoreTag,
          locale: this.resolvedLocale
        });
      } else
        this.ast = t;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = mo(e.formats, r), this.formatters = i && i.formatters || go(this.formatterCache);
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
    }, e.__parse = no, e.formats = {
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
function bo(e, t) {
  if (t == null)
    return;
  if (t in e)
    return e[t];
  const n = t.split(".");
  let r = e;
  for (let i = 0; i < n.length; i++)
    if (typeof r == "object") {
      if (i > 0) {
        const s = n.slice(i, n.length).join(".");
        if (s in r) {
          r = r[s];
          break;
        }
      }
      r = r[n[i]];
    } else
      r = void 0;
  return r;
}
const ye = {}, yo = (e, t, n) => n && (t in ye || (ye[t] = {}), e in ye[t] || (ye[t][e] = n), n), Lr = (e, t) => {
  if (t == null)
    return;
  if (t in ye && e in ye[t])
    return ye[t][e];
  const n = St(t);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], s = wo(i, e);
    if (s)
      return yo(e, t, s);
  }
};
let an;
const Ye = Qe({});
function vo(e) {
  return an[e] || null;
}
function xr(e) {
  return e in an;
}
function wo(e, t) {
  if (!xr(e))
    return null;
  const n = vo(e);
  return bo(n, t);
}
function Eo(e) {
  if (e == null)
    return;
  const t = St(e);
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (xr(r))
      return r;
  }
}
function So(e, ...t) {
  delete ye[e], Ye.update((n) => (n[e] = As.all([n[e] || {}, ...t]), n));
}
De(
  [Ye],
  ([e]) => Object.keys(e)
);
Ye.subscribe((e) => an = e);
const at = {};
function To(e, t) {
  at[e].delete(t), at[e].size === 0 && delete at[e];
}
function Mr(e) {
  return at[e];
}
function Bo(e) {
  return St(e).map((t) => {
    const n = Mr(t);
    return [t, n ? [...n] : []];
  }).filter(([, t]) => t.length > 0);
}
function $t(e) {
  return e == null ? !1 : St(e).some(
    (t) => {
      var n;
      return (n = Mr(t)) == null ? void 0 : n.size;
    }
  );
}
function Ao(e, t) {
  return Promise.all(
    t.map((r) => (To(e, r), r().then((i) => i.default || i)))
  ).then((r) => So(e, ...r));
}
const qe = {};
function kr(e) {
  if (!$t(e))
    return e in qe ? qe[e] : Promise.resolve();
  const t = Bo(e);
  return qe[e] = Promise.all(
    t.map(
      ([n, r]) => Ao(n, r)
    )
  ).then(() => {
    if ($t(e))
      return kr(e);
    delete qe[e];
  }), qe[e];
}
const Ho = {
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
}, No = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Ho,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, Po = No;
function Me() {
  return Po;
}
const Ut = Qe(!1);
var Io = Object.defineProperty, Co = Object.defineProperties, Oo = Object.getOwnPropertyDescriptors, Hn = Object.getOwnPropertySymbols, Lo = Object.prototype.hasOwnProperty, xo = Object.prototype.propertyIsEnumerable, Nn = (e, t, n) => t in e ? Io(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Mo = (e, t) => {
  for (var n in t || (t = {}))
    Lo.call(t, n) && Nn(e, n, t[n]);
  if (Hn)
    for (var n of Hn(t))
      xo.call(t, n) && Nn(e, n, t[n]);
  return e;
}, ko = (e, t) => Co(e, Oo(t));
let en;
const lt = Qe(null);
function Pn(e) {
  return e.split("-").map((t, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function St(e, t = Me().fallbackLocale) {
  const n = Pn(e);
  return t ? [.../* @__PURE__ */ new Set([...n, ...Pn(t)])] : n;
}
function Ae() {
  return en ?? void 0;
}
lt.subscribe((e) => {
  en = e ?? void 0, typeof window < "u" && e != null && document.documentElement.setAttribute("lang", e);
});
const Ro = (e) => {
  if (e && Eo(e) && $t(e)) {
    const { loadingDelay: t } = Me();
    let n;
    return typeof window < "u" && Ae() != null && t ? n = window.setTimeout(
      () => Ut.set(!0),
      t
    ) : Ut.set(!0), kr(e).then(() => {
      lt.set(e);
    }).finally(() => {
      clearTimeout(n), Ut.set(!1);
    });
  }
  return lt.set(e);
}, Ke = ko(Mo({}, lt), {
  set: Ro
}), Tt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in t ? t[i] : t[i] = e(r);
  };
};
var Do = Object.defineProperty, ut = Object.getOwnPropertySymbols, Rr = Object.prototype.hasOwnProperty, Dr = Object.prototype.propertyIsEnumerable, In = (e, t, n) => t in e ? Do(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ln = (e, t) => {
  for (var n in t || (t = {}))
    Rr.call(t, n) && In(e, n, t[n]);
  if (ut)
    for (var n of ut(t))
      Dr.call(t, n) && In(e, n, t[n]);
  return e;
}, Ue = (e, t) => {
  var n = {};
  for (var r in e)
    Rr.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && ut)
    for (var r of ut(e))
      t.indexOf(r) < 0 && Dr.call(e, r) && (n[r] = e[r]);
  return n;
};
const Ze = (e, t) => {
  const { formats: n } = Me();
  if (e in n && t in n[e])
    return n[e][t];
  throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
}, Uo = Tt(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = Ue(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = Ze("number", r)), new Intl.NumberFormat(n, i);
  }
), Fo = Tt(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = Ue(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = Ze("date", r) : Object.keys(i).length === 0 && (i = Ze("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), Go = Tt(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = Ue(t, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = Ze("time", r) : Object.keys(i).length === 0 && (i = Ze("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), jo = (e = {}) => {
  var t = e, {
    locale: n = Ae()
  } = t, r = Ue(t, [
    "locale"
  ]);
  return Uo(ln({ locale: n }, r));
}, qo = (e = {}) => {
  var t = e, {
    locale: n = Ae()
  } = t, r = Ue(t, [
    "locale"
  ]);
  return Fo(ln({ locale: n }, r));
}, Vo = (e = {}) => {
  var t = e, {
    locale: n = Ae()
  } = t, r = Ue(t, [
    "locale"
  ]);
  return Go(ln({ locale: n }, r));
}, zo = Tt(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (e, t = Ae()) => new po(e, t, Me().formats, {
    ignoreTag: Me().ignoreTag
  })
), Xo = (e, t = {}) => {
  var n, r, i, s;
  let o = t;
  typeof e == "object" && (o = e, e = o.id);
  const {
    values: a,
    locale: u = Ae(),
    default: l
  } = o;
  if (u == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let f = Lr(e, u);
  if (!f)
    f = (s = (i = (r = (n = Me()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: u, id: e, defaultValue: l })) != null ? i : l) != null ? s : e;
  else if (typeof f != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof f}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), f;
  if (!a)
    return f;
  let c = f;
  try {
    c = zo(f, u).format(a);
  } catch (h) {
    h instanceof Error && console.warn(
      `[svelte-i18n] Message "${e}" has syntax error:`,
      h.message
    );
  }
  return c;
}, Zo = (e, t) => Vo(t).format(e), Wo = (e, t) => qo(t).format(e), Jo = (e, t) => jo(t).format(e), Qo = (e, t = Ae()) => Lr(e, t), Yo = De([Ke, Ye], () => Xo);
De([Ke], () => Zo);
De([Ke], () => Wo);
De([Ke], () => Jo);
De([Ke, Ye], () => Qo);
ls(Yo);
const {
  SvelteComponent: Ko,
  append: be,
  attr: Cn,
  detach: $o,
  element: On,
  init: ea,
  insert: ta,
  noop: Ln,
  safe_not_equal: na,
  set_data: Ft,
  space: xn,
  text: Ve
} = window.__gradio__svelte__internal;
function ra(e) {
  let t, n = (
    /*i18n*/
    e[1](
      /*defs*/
      e[2][
        /*type*/
        e[0]
      ]
    ) + ""
  ), r, i, s, o, a = (
    /*i18n*/
    e[1]("common.or") + ""
  ), u, l, f, c = (
    /*i18n*/
    e[1]("upload_text.click_to_upload") + ""
  ), h;
  return {
    c() {
      t = On("div"), r = Ve(n), i = xn(), s = On("span"), o = Ve("- "), u = Ve(a), l = Ve(" -"), f = xn(), h = Ve(c), Cn(s, "class", "or svelte-8ytugg"), Cn(t, "class", "wrap svelte-8ytugg");
    },
    m(d, m) {
      ta(d, t, m), be(t, r), be(t, i), be(t, s), be(s, o), be(s, u), be(s, l), be(t, f), be(t, h);
    },
    p(d, [m]) {
      m & /*i18n, type*/
      3 && n !== (n = /*i18n*/
      d[1](
        /*defs*/
        d[2][
          /*type*/
          d[0]
        ]
      ) + "") && Ft(r, n), m & /*i18n*/
      2 && a !== (a = /*i18n*/
      d[1]("common.or") + "") && Ft(u, a), m & /*i18n*/
      2 && c !== (c = /*i18n*/
      d[1]("upload_text.click_to_upload") + "") && Ft(h, c);
    },
    i: Ln,
    o: Ln,
    d(d) {
      d && $o(t);
    }
  };
}
function ia(e, t, n) {
  let { type: r = "file" } = t, { i18n: i } = t;
  const s = {
    image: "upload_text.drop_image",
    video: "upload_text.drop_video",
    audio: "upload_text.drop_audio",
    file: "upload_text.drop_file",
    csv: "upload_text.drop_csv"
  };
  return e.$$set = (o) => {
    "type" in o && n(0, r = o.type), "i18n" in o && n(1, i = o.i18n);
  }, [r, i, s];
}
class sa extends Ko {
  constructor(t) {
    super(), ea(this, t, ia, ra, na, { type: 0, i18n: 1 });
  }
}
function Pe(e, t, n) {
  if (e == null)
    return null;
  if (typeof e == "string")
    return {
      name: "file_data",
      data: e
    };
  if (Array.isArray(e)) {
    const r = [];
    for (const i of e)
      i === null ? r.push(null) : r.push(Pe(i, t, n));
    return r;
  } else
    e.is_file ? e.data = aa(e.name, t, n) : e.is_stream && (n == null ? e.data = t + "/stream/" + e.name : e.data = "/proxy=" + n + "stream/" + e.name);
  return e;
}
function oa(e) {
  try {
    const t = new URL(e);
    return t.protocol === "http:" || t.protocol === "https:";
  } catch {
    return !1;
  }
}
function aa(e, t, n) {
  return e == null ? n ? `/proxy=${n}file=` : `${t}/file=` : oa(e) ? e : n ? `/proxy=${n}file=${e}` : `${t}/file=${e}`;
}
const la = (e) => {
  const t = new FileReader();
  return t.readAsDataURL(e), new Promise((n) => {
    t.onloadend = () => {
      n(t.result);
    };
  });
};
var Gt = new Intl.Collator(0, { numeric: 1 }).compare;
function Mn(e, t, n) {
  return e = e.split("."), t = t.split("."), Gt(e[0], t[0]) || Gt(e[1], t[1]) || (t[2] = t.slice(2).join("."), n = /[.-]/.test(e[2] = e.slice(2).join(".")), n == /[.-]/.test(t[2]) ? Gt(e[2], t[2]) : n ? -1 : 1);
}
function jt(e) {
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
  }
  return {
    ws_protocol: "wss",
    http_protocol: "https:",
    host: e
  };
}
const Ur = /^[^\/]*\/[^\/]*$/, ua = /.*hf\.space\/{0,1}$/;
async function fa(e, t) {
  const n = {};
  t && (n.Authorization = `Bearer ${t}`);
  const r = e.trim();
  if (Ur.test(r))
    try {
      const i = await fetch(
        `https://huggingface.co/api/spaces/${r}/host`,
        { headers: n }
      );
      if (i.status !== 200)
        throw new Error("Space metadata could not be loaded.");
      const s = (await i.json()).host;
      return {
        space_id: e,
        ...jt(s)
      };
    } catch (i) {
      throw new Error("Space metadata could not be loaded." + i.message);
    }
  if (ua.test(r)) {
    const { ws_protocol: i, http_protocol: s, host: o } = jt(r);
    return {
      space_id: o.replace(".hf.space", ""),
      ws_protocol: i,
      http_protocol: s,
      host: o
    };
  }
  return {
    space_id: !1,
    ...jt(r)
  };
}
function ca(e) {
  let t = {};
  return e.forEach(({ api_name: n }, r) => {
    n && (t[n] = r);
  }), t;
}
const ha = /^(?=[^]*\b[dD]iscussions{0,1}\b)(?=[^]*\b[dD]isabled\b)[^]*$/;
async function kn(e) {
  try {
    const n = (await fetch(
      `https://huggingface.co/api/spaces/${e}/discussions`,
      {
        method: "HEAD"
      }
    )).headers.get("x-error-message");
    return !(n && ha.test(n));
  } catch {
    return !1;
  }
}
const _a = "This application is too busy. Keep trying!", rt = "Connection errored out.";
let Fr;
function da(e) {
  return { post_data: t, upload_files: n, client: r, handle_blob: i };
  async function t(s, o, a) {
    const u = { "Content-Type": "application/json" };
    a && (u.Authorization = `Bearer ${a}`);
    try {
      var l = await e(s, {
        method: "POST",
        body: JSON.stringify(o),
        headers: u
      });
    } catch {
      return [{ error: rt }, 500];
    }
    return [await l.json(), l.status];
  }
  async function n(s, o, a) {
    const u = {};
    a && (u.Authorization = `Bearer ${a}`);
    const l = 1e3, f = [];
    for (let h = 0; h < o.length; h += l) {
      const d = o.slice(h, h + l), m = new FormData();
      d.forEach((y) => {
        m.append("files", y);
      });
      try {
        var c = await e(`${s}/upload`, {
          method: "POST",
          body: m,
          headers: u
        });
      } catch {
        return { error: rt };
      }
      const p = await c.json();
      f.push(...p);
    }
    return { files: f };
  }
  async function r(s, o = { normalise_files: !0 }) {
    return new Promise(async (a) => {
      const { status_callback: u, hf_token: l, normalise_files: f } = o, c = {
        predict: se,
        submit: Z,
        view_api: T
        // duplicate
      }, h = f ?? !0;
      if (typeof window > "u" || !("WebSocket" in window)) {
        const P = await import("./wrapper-6f348d45-492a1cb9.mjs");
        Fr = (await import("./__vite-browser-external-2447137e.mjs")).Blob, global.WebSocket = P.WebSocket;
      }
      const { ws_protocol: d, http_protocol: m, host: p, space_id: y } = await fa(s, l), S = Math.random().toString(36).substring(2), H = {};
      let _, E = {}, b = !1;
      l && y && (b = await pa(y, l));
      async function V(P) {
        if (_ = P, E = ca((P == null ? void 0 : P.dependencies) || []), _.auth_required)
          return {
            config: _,
            ...c
          };
        try {
          G = await T(_);
        } catch (k) {
          console.error(`Could not get api details: ${k.message}`);
        }
        return {
          config: _,
          ...c
        };
      }
      let G;
      async function te(P) {
        if (u && u(P), P.status === "running")
          try {
            _ = await Fn(
              e,
              `${m}//${p}`,
              l
            );
            const k = await V(_);
            a(k);
          } catch (k) {
            console.error(k), u && u({
              status: "error",
              message: "Could not load this space.",
              load_status: "error",
              detail: "NOT_FOUND"
            });
          }
      }
      try {
        _ = await Fn(
          e,
          `${m}//${p}`,
          l
        );
        const P = await V(_);
        a(P);
      } catch (P) {
        console.error(P), y ? nn(
          y,
          Ur.test(y) ? "space_name" : "subdomain",
          te
        ) : u && u({
          status: "error",
          message: "Could not load this space.",
          load_status: "error",
          detail: "NOT_FOUND"
        });
      }
      function se(P, k, g) {
        let v = !1, U = !1, I;
        if (typeof P == "number")
          I = _.dependencies[P];
        else {
          const x = P.replace(/^\//, "");
          I = _.dependencies[E[x]];
        }
        if (I.types.continuous)
          throw new Error(
            "Cannot call predict on this function as it may run forever. Use submit instead"
          );
        return new Promise((x, de) => {
          const Y = Z(P, k, g);
          let oe;
          Y.on("data", (D) => {
            U && (Y.destroy(), x(D)), v = !0, oe = D;
          }).on("status", (D) => {
            D.stage === "error" && de(D), D.stage === "complete" && (U = !0, Y.destroy(), v && x(oe));
          });
        });
      }
      function Z(P, k, g) {
        let v, U;
        if (typeof P == "number")
          v = P, U = G.unnamed_endpoints[v];
        else {
          const j = P.replace(/^\//, "");
          v = E[j], U = G.named_endpoints[P.trim()];
        }
        if (typeof v != "number")
          throw new Error(
            "There is no endpoint matching that name of fn_index matching that number."
          );
        let I;
        const x = typeof P == "number" ? "/predict" : P;
        let de, Y = !1;
        const oe = {};
        i(
          `${m}//${p + _.path}`,
          k,
          U,
          l
        ).then((j) => {
          if (de = { data: j || [], event_data: g, fn_index: v }, ya(v, _))
            D({
              type: "status",
              endpoint: x,
              stage: "pending",
              queue: !1,
              fn_index: v,
              time: /* @__PURE__ */ new Date()
            }), t(
              `${m}//${p + _.path}/run${x.startsWith("/") ? x : `/${x}`}`,
              {
                ...de,
                session_hash: S
              },
              l
            ).then(([q, W]) => {
              const J = h ? Rn(
                q.data,
                U,
                _.root,
                _.root_url
              ) : q.data;
              W == 200 ? (D({
                type: "data",
                endpoint: x,
                fn_index: v,
                data: J,
                time: /* @__PURE__ */ new Date()
              }), D({
                type: "status",
                endpoint: x,
                fn_index: v,
                stage: "complete",
                eta: q.average_duration,
                queue: !1,
                time: /* @__PURE__ */ new Date()
              })) : D({
                type: "status",
                stage: "error",
                endpoint: x,
                fn_index: v,
                message: q.error,
                queue: !1,
                time: /* @__PURE__ */ new Date()
              });
            }).catch((q) => {
              D({
                type: "status",
                stage: "error",
                message: q.message,
                endpoint: x,
                fn_index: v,
                queue: !1,
                time: /* @__PURE__ */ new Date()
              });
            });
          else {
            D({
              type: "status",
              stage: "pending",
              queue: !0,
              endpoint: x,
              fn_index: v,
              time: /* @__PURE__ */ new Date()
            });
            let q = new URL(`${d}://${p}${_.path}
							/queue/join`);
            b && q.searchParams.set("__sign", b), I = new WebSocket(q), I.onclose = (W) => {
              W.wasClean || D({
                type: "status",
                stage: "error",
                broken: !0,
                message: rt,
                queue: !0,
                endpoint: x,
                fn_index: v,
                time: /* @__PURE__ */ new Date()
              });
            }, I.onmessage = function(W) {
              const J = JSON.parse(W.data), { type: me, status: ce, data: Ge } = va(
                J,
                H[v]
              );
              if (me === "update" && ce && !Y)
                D({
                  type: "status",
                  endpoint: x,
                  fn_index: v,
                  time: /* @__PURE__ */ new Date(),
                  ...ce
                }), ce.stage === "error" && I.close();
              else if (me === "hash") {
                I.send(JSON.stringify({ fn_index: v, session_hash: S }));
                return;
              } else
                me === "data" ? I.send(JSON.stringify({ ...de, session_hash: S })) : me === "complete" ? Y = ce : me === "log" ? D({
                  type: "log",
                  log: Ge.log,
                  level: Ge.level,
                  endpoint: x,
                  fn_index: v
                }) : me === "generating" && D({
                  type: "status",
                  time: /* @__PURE__ */ new Date(),
                  ...ce,
                  stage: ce == null ? void 0 : ce.stage,
                  queue: !0,
                  endpoint: x,
                  fn_index: v
                });
              Ge && (D({
                type: "data",
                time: /* @__PURE__ */ new Date(),
                data: h ? Rn(
                  Ge.data,
                  U,
                  _.root,
                  _.root_url
                ) : Ge.data,
                endpoint: x,
                fn_index: v
              }), Y && (D({
                type: "status",
                time: /* @__PURE__ */ new Date(),
                ...Y,
                stage: ce == null ? void 0 : ce.stage,
                queue: !0,
                endpoint: x,
                fn_index: v
              }), I.close()));
            }, Mn(_.version || "2.0.0", "3.6") < 0 && addEventListener(
              "open",
              () => I.send(JSON.stringify({ hash: S }))
            );
          }
        });
        function D(j) {
          const W = oe[j.type] || [];
          W == null || W.forEach((J) => J(j));
        }
        function w(j, q) {
          const W = oe, J = W[j] || [];
          return W[j] = J, J == null || J.push(q), { on: w, off: $e, cancel: At, destroy: Ht };
        }
        function $e(j, q) {
          const W = oe;
          let J = W[j] || [];
          return J = J == null ? void 0 : J.filter((me) => me !== q), W[j] = J, { on: w, off: $e, cancel: At, destroy: Ht };
        }
        async function At() {
          const j = {
            stage: "complete",
            queue: !1,
            time: /* @__PURE__ */ new Date()
          };
          Y = j, D({
            ...j,
            type: "status",
            endpoint: x,
            fn_index: v
          }), I && I.readyState === 0 ? I.addEventListener("open", () => {
            I.close();
          }) : I.close();
          try {
            await e(
              `${m}//${p + _.path}/reset`,
              {
                headers: { "Content-Type": "application/json" },
                method: "POST",
                body: JSON.stringify({ fn_index: v, session_hash: S })
              }
            );
          } catch {
            console.warn(
              "The `/reset` endpoint could not be called. Subsequent endpoint results may be unreliable."
            );
          }
        }
        function Ht() {
          for (const j in oe)
            oe[j].forEach((q) => {
              $e(j, q);
            });
        }
        return {
          on: w,
          off: $e,
          cancel: At,
          destroy: Ht
        };
      }
      async function T(P) {
        if (G)
          return G;
        const k = { "Content-Type": "application/json" };
        l && (k.Authorization = `Bearer ${l}`);
        let g;
        if (Mn(P.version || "2.0.0", "3.30") < 0 ? g = await e(
          "https://gradio-space-api-fetcher-v2.hf.space/api",
          {
            method: "POST",
            body: JSON.stringify({
              serialize: !1,
              config: JSON.stringify(P)
            }),
            headers: k
          }
        ) : g = await e(`${P.root}/info`, {
          headers: k
        }), !g.ok)
          throw new Error(rt);
        let v = await g.json();
        return "api" in v && (v = v.api), v.named_endpoints["/predict"] && !v.unnamed_endpoints[0] && (v.unnamed_endpoints[0] = v.named_endpoints["/predict"]), ga(v, P, E);
      }
    });
  }
  async function i(s, o, a, u) {
    const l = await tn(
      o,
      void 0,
      [],
      !0,
      a
    );
    return Promise.all(
      l.map(async ({ path: f, blob: c, data: h, type: d }) => {
        if (c) {
          const m = (await n(s, [c], u)).files[0];
          return { path: f, file_url: m, type: d };
        }
        return { path: f, base64: h, type: d };
      })
    ).then((f) => (f.forEach(({ path: c, file_url: h, base64: d, type: m }) => {
      if (d)
        qt(o, d, c);
      else if (m === "Gallery")
        qt(o, h, c);
      else if (h) {
        const p = {
          is_file: !0,
          name: `${h}`,
          data: null
          // orig_name: "file.csv"
        };
        qt(o, p, c);
      }
    }), o));
  }
}
const { post_data: nu, upload_files: ma, client: ru, handle_blob: iu } = da(fetch);
function Rn(e, t, n, r) {
  return e.map((i, s) => {
    var o, a, u, l;
    return ((a = (o = t == null ? void 0 : t.returns) == null ? void 0 : o[s]) == null ? void 0 : a.component) === "File" ? ze(i, n, r) : ((l = (u = t == null ? void 0 : t.returns) == null ? void 0 : u[s]) == null ? void 0 : l.component) === "Gallery" ? i.map((f) => Array.isArray(f) ? [ze(f[0], n, r), f[1]] : [ze(f, n, r), null]) : typeof i == "object" && (i != null && i.is_file) ? ze(i, n, r) : i;
  });
}
function ze(e, t, n) {
  if (e == null)
    return null;
  if (typeof e == "string")
    return {
      name: "file_data",
      data: e
    };
  if (Array.isArray(e)) {
    const r = [];
    for (const i of e)
      i === null ? r.push(null) : r.push(ze(i, t, n));
    return r;
  } else
    e.is_file && (n ? e.data = "/proxy=" + n + "file=" + e.name : e.data = t + "/file=" + e.name);
  return e;
}
function Dn(e, t, n, r) {
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
    return r === "parameter" ? "Blob | File | Buffer" : "string";
  if (n === "FileSerializable")
    return (e == null ? void 0 : e.type) === "array" ? r === "parameter" ? "(Blob | File | Buffer)[]" : "{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}[]" : r === "parameter" ? "Blob | File | Buffer" : "{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}";
  if (n === "GallerySerializable")
    return r === "parameter" ? "[(Blob | File | Buffer), (string | null)][]" : "[{ name: string; data: string; size?: number; is_file?: boolean; orig_name?: string}, (string | null))][]";
}
function Un(e, t) {
  return t === "GallerySerializable" ? "array of [file, label] tuples" : t === "ListStringSerializable" ? "array of strings" : t === "FileSerializable" ? "array of files or single file" : e.description;
}
function ga(e, t, n) {
  const r = {
    named_endpoints: {},
    unnamed_endpoints: {}
  };
  for (const i in e) {
    const s = e[i];
    for (const o in s) {
      const a = t.dependencies[o] ? o : n[o.replace("/", "")], u = s[o];
      r[i][o] = {}, r[i][o].parameters = {}, r[i][o].returns = {}, r[i][o].type = t.dependencies[a].types, r[i][o].parameters = u.parameters.map(
        ({ label: l, component: f, type: c, serializer: h }) => ({
          label: l,
          component: f,
          type: Dn(c, f, h, "parameter"),
          description: Un(c, h)
        })
      ), r[i][o].returns = u.returns.map(
        ({ label: l, component: f, type: c, serializer: h }) => ({
          label: l,
          component: f,
          type: Dn(c, f, h, "return"),
          description: Un(c, h)
        })
      );
    }
  }
  return r;
}
async function pa(e, t) {
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
function qt(e, t, n) {
  for (; n.length > 1; )
    e = e[n.shift()];
  e[n.shift()] = t;
}
async function tn(e, t = void 0, n = [], r = !1, i = void 0) {
  if (Array.isArray(e)) {
    let s = [];
    return await Promise.all(
      e.map(async (o, a) => {
        var u;
        let l = n.slice();
        l.push(a);
        const f = await tn(
          e[a],
          r ? ((u = i == null ? void 0 : i.parameters[a]) == null ? void 0 : u.component) || void 0 : t,
          l,
          !1,
          i
        );
        s = s.concat(f);
      })
    ), s;
  } else if (globalThis.Buffer && e instanceof globalThis.Buffer) {
    const s = t === "Image";
    return [
      {
        path: n,
        blob: s ? !1 : new Fr([e]),
        data: s ? `${e.toString("base64")}` : !1,
        type: t
      }
    ];
  } else if (e instanceof Blob || typeof window < "u" && e instanceof File) {
    if (t === "Image") {
      let s;
      if (typeof window < "u")
        s = await ba(e);
      else {
        const o = await e.arrayBuffer();
        s = Buffer.from(o).toString("base64");
      }
      return [{ path: n, data: s, type: t, blob: !1 }];
    }
    return [{ path: n, blob: e, type: t, data: !1 }];
  } else if (typeof e == "object") {
    let s = [];
    for (let o in e)
      if (e.hasOwnProperty(o)) {
        let a = n.slice();
        a.push(o), s = s.concat(
          await tn(
            e[o],
            void 0,
            a,
            !1,
            i
          )
        );
      }
    return s;
  }
  return [];
}
function ba(e) {
  return new Promise((t, n) => {
    const r = new FileReader();
    r.onloadend = () => t(r.result), r.readAsDataURL(e);
  });
}
function ya(e, t) {
  var n, r, i, s;
  return !(((r = (n = t == null ? void 0 : t.dependencies) == null ? void 0 : n[e]) == null ? void 0 : r.queue) === null ? t.enable_queue : (s = (i = t == null ? void 0 : t.dependencies) == null ? void 0 : i[e]) != null && s.queue) || !1;
}
async function Fn(e, t, n) {
  const r = {};
  if (n && (r.Authorization = `Bearer ${n}`), typeof window < "u" && window.gradio_config && location.origin !== "http://localhost:9876" && !window.gradio_config.dev_mode) {
    const i = window.gradio_config.root, s = window.gradio_config;
    return s.root = t + s.root, { ...s, path: i };
  } else if (t) {
    let i = await e(`${t}/config`, {
      headers: r
    });
    if (i.status === 200) {
      const s = await i.json();
      return s.path = s.path ?? "", s.root = t, s;
    }
    throw new Error("Could not get config.");
  }
  throw new Error("No config or app endpoint found");
}
async function nn(e, t, n) {
  let r = t === "subdomain" ? `https://huggingface.co/api/spaces/by-subdomain/${e}` : `https://huggingface.co/api/spaces/${e}`, i, s;
  try {
    if (i = await fetch(r), s = i.status, s !== 200)
      throw new Error();
    i = await i.json();
  } catch {
    n({
      status: "error",
      load_status: "error",
      message: "Could not get space status",
      detail: "NOT_FOUND"
    });
    return;
  }
  if (!i || s !== 200)
    return;
  const {
    runtime: { stage: o },
    id: a
  } = i;
  switch (o) {
    case "STOPPED":
    case "SLEEPING":
      n({
        status: "sleeping",
        load_status: "pending",
        message: "Space is asleep. Waking it up...",
        detail: o
      }), setTimeout(() => {
        nn(e, t, n);
      }, 1e3);
      break;
    case "PAUSED":
      n({
        status: "paused",
        load_status: "error",
        message: "This space has been paused by the author. If you would like to try this demo, consider duplicating the space.",
        detail: o,
        discussions_enabled: await kn(a)
      });
      break;
    case "RUNNING":
    case "RUNNING_BUILDING":
      n({
        status: "running",
        load_status: "complete",
        message: "",
        detail: o
      });
      break;
    case "BUILDING":
      n({
        status: "building",
        load_status: "pending",
        message: "Space is building...",
        detail: o
      }), setTimeout(() => {
        nn(e, t, n);
      }, 1e3);
      break;
    default:
      n({
        status: "space_error",
        load_status: "error",
        message: "This space is experiencing an issue.",
        detail: o,
        discussions_enabled: await kn(a)
      });
      break;
  }
}
function va(e, t) {
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
          message: _a,
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
const {
  SvelteComponent: wa,
  append: Gn,
  attr: he,
  binding_callbacks: Ea,
  bubble: we,
  create_slot: Sa,
  detach: Ta,
  element: jn,
  get_all_dirty_from_scope: Ba,
  get_slot_changes: Aa,
  init: Ha,
  insert: Na,
  listen: K,
  prevent_default: Ee,
  run_all: Pa,
  safe_not_equal: Ia,
  space: Ca,
  stop_propagation: Se,
  toggle_class: Ne,
  transition_in: Oa,
  transition_out: La,
  update_slot_base: xa
} = window.__gradio__svelte__internal, { createEventDispatcher: Ma, tick: ka, getContext: Ra } = window.__gradio__svelte__internal;
function Da(e) {
  let t, n, r, i, s, o, a, u, l;
  const f = (
    /*#slots*/
    e[14].default
  ), c = Sa(
    f,
    e,
    /*$$scope*/
    e[13],
    null
  );
  return {
    c() {
      t = jn("div"), c && c.c(), n = Ca(), r = jn("input"), he(r, "type", "file"), he(
        r,
        "accept",
        /*filetype*/
        e[0]
      ), r.multiple = i = /*file_count*/
      e[4] === "multiple" || void 0, he(r, "webkitdirectory", s = /*file_count*/
      e[4] === "directory" || void 0), he(r, "mozdirectory", o = /*file_count*/
      e[4] === "directory" || void 0), he(r, "class", "svelte-1h87ywf"), he(t, "class", "svelte-1h87ywf"), Ne(
        t,
        "center",
        /*center*/
        e[2]
      ), Ne(
        t,
        "boundedheight",
        /*boundedheight*/
        e[1]
      ), Ne(
        t,
        "flex",
        /*flex*/
        e[3]
      );
    },
    m(h, d) {
      Na(h, t, d), c && c.m(t, null), Gn(t, n), Gn(t, r), e[22](r), a = !0, u || (l = [
        K(
          r,
          "change",
          /*loadFilesFromUpload*/
          e[8]
        ),
        K(t, "drag", Se(Ee(
          /*drag_handler*/
          e[15]
        ))),
        K(t, "dragstart", Se(Ee(
          /*dragstart_handler*/
          e[16]
        ))),
        K(t, "dragend", Se(Ee(
          /*dragend_handler*/
          e[17]
        ))),
        K(t, "dragover", Se(Ee(
          /*dragover_handler*/
          e[18]
        ))),
        K(t, "dragenter", Se(Ee(
          /*dragenter_handler*/
          e[19]
        ))),
        K(t, "dragleave", Se(Ee(
          /*dragleave_handler*/
          e[20]
        ))),
        K(t, "drop", Se(Ee(
          /*drop_handler*/
          e[21]
        ))),
        K(
          t,
          "click",
          /*openFileUpload*/
          e[7]
        ),
        K(
          t,
          "drop",
          /*loadFilesFromDrop*/
          e[9]
        ),
        K(
          t,
          "dragenter",
          /*updateDragging*/
          e[6]
        ),
        K(
          t,
          "dragleave",
          /*updateDragging*/
          e[6]
        )
      ], u = !0);
    },
    p(h, [d]) {
      c && c.p && (!a || d & /*$$scope*/
      8192) && xa(
        c,
        f,
        h,
        /*$$scope*/
        h[13],
        a ? Aa(
          f,
          /*$$scope*/
          h[13],
          d,
          null
        ) : Ba(
          /*$$scope*/
          h[13]
        ),
        null
      ), (!a || d & /*filetype*/
      1) && he(
        r,
        "accept",
        /*filetype*/
        h[0]
      ), (!a || d & /*file_count*/
      16 && i !== (i = /*file_count*/
      h[4] === "multiple" || void 0)) && (r.multiple = i), (!a || d & /*file_count*/
      16 && s !== (s = /*file_count*/
      h[4] === "directory" || void 0)) && he(r, "webkitdirectory", s), (!a || d & /*file_count*/
      16 && o !== (o = /*file_count*/
      h[4] === "directory" || void 0)) && he(r, "mozdirectory", o), (!a || d & /*center*/
      4) && Ne(
        t,
        "center",
        /*center*/
        h[2]
      ), (!a || d & /*boundedheight*/
      2) && Ne(
        t,
        "boundedheight",
        /*boundedheight*/
        h[1]
      ), (!a || d & /*flex*/
      8) && Ne(
        t,
        "flex",
        /*flex*/
        h[3]
      );
    },
    i(h) {
      a || (Oa(c, h), a = !0);
    },
    o(h) {
      La(c, h), a = !1;
    },
    d(h) {
      h && Ta(t), c && c.d(h), e[22](null), u = !1, Pa(l);
    }
  };
}
function Ua(e, t) {
  return e ?? t();
}
function Fa(e) {
  let t, n = e[0], r = 1;
  for (; r < e.length; ) {
    const i = e[r], s = e[r + 1];
    if (r += 2, (i === "optionalAccess" || i === "optionalCall") && n == null)
      return;
    i === "access" || i === "optionalAccess" ? (t = n, n = s(n)) : (i === "call" || i === "optionalCall") && (n = s((...o) => n.call(t, ...o)), t = void 0);
  }
  return n;
}
function Ga(e, t, n) {
  let { $$slots: r = {}, $$scope: i } = t;
  const s = Ua(Ra("upload_files"), () => ma);
  let { filetype: o = null } = t, { dragging: a = !1 } = t, { boundedheight: u = !0 } = t, { center: l = !0 } = t, { flex: f = !0 } = t, { file_count: c = "single" } = t, { disable_click: h = !1 } = t, { root: d } = t, m;
  const p = Ma();
  function y() {
    n(10, a = !a);
  }
  function S() {
    h || (n(5, m.value = "", m), m.click());
  }
  async function H(g) {
    await ka();
    let v = (Array.isArray(g) ? g : [g]).map((U) => U.blob);
    await s(d, v).then(async (U) => {
      U.error ? (Array.isArray(g) ? g : [g]).forEach(async (I, x) => {
        I.data = await la(I.blob), I.blob = void 0;
      }) : (Array.isArray(g) ? g : [g]).forEach((I, x) => {
        U.files && (I.orig_name = I.name, I.name = U.files[x], I.is_file = !0, I.blob = void 0, Pe(I, d, null));
      });
    }), p("load", c === "single" ? g[0] : g);
  }
  async function _(g) {
    let v = Array.from(g);
    if (g.length) {
      c === "single" && (v = [g[0]]);
      var U = [];
      v.forEach((I, x) => {
        U[x] = {
          name: I.name,
          size: I.size,
          data: "",
          blob: I
        };
      }), await H(U);
    }
  }
  async function E(g) {
    const v = g.target;
    v.files && await _(v.files);
  }
  async function b(g) {
    n(10, a = !1), Fa([g, "access", (v) => v.dataTransfer, "optionalAccess", (v) => v.files]) && await _(g.dataTransfer.files);
  }
  function V(g) {
    we.call(this, e, g);
  }
  function G(g) {
    we.call(this, e, g);
  }
  function te(g) {
    we.call(this, e, g);
  }
  function se(g) {
    we.call(this, e, g);
  }
  function Z(g) {
    we.call(this, e, g);
  }
  function T(g) {
    we.call(this, e, g);
  }
  function P(g) {
    we.call(this, e, g);
  }
  function k(g) {
    Ea[g ? "unshift" : "push"](() => {
      m = g, n(5, m);
    });
  }
  return e.$$set = (g) => {
    "filetype" in g && n(0, o = g.filetype), "dragging" in g && n(10, a = g.dragging), "boundedheight" in g && n(1, u = g.boundedheight), "center" in g && n(2, l = g.center), "flex" in g && n(3, f = g.flex), "file_count" in g && n(4, c = g.file_count), "disable_click" in g && n(11, h = g.disable_click), "root" in g && n(12, d = g.root), "$$scope" in g && n(13, i = g.$$scope);
  }, [
    o,
    u,
    l,
    f,
    c,
    m,
    y,
    S,
    E,
    b,
    a,
    h,
    d,
    i,
    r,
    V,
    G,
    te,
    se,
    Z,
    T,
    P,
    k
  ];
}
class Gr extends wa {
  constructor(t) {
    super(), Ha(this, t, Ga, Da, Ia, {
      filetype: 0,
      dragging: 10,
      boundedheight: 1,
      center: 2,
      flex: 3,
      file_count: 4,
      disable_click: 11,
      root: 12
    });
  }
}
const {
  SvelteComponent: ja,
  add_flush_callback: jr,
  append: qa,
  attr: ie,
  bind: qr,
  binding_callbacks: Vr,
  check_outros: qn,
  create_component: ft,
  create_slot: zr,
  destroy_component: ct,
  detach: We,
  element: Bt,
  get_all_dirty_from_scope: Xr,
  get_slot_changes: Zr,
  group_outros: Vn,
  init: Va,
  insert: Je,
  mount_component: ht,
  noop: _t,
  safe_not_equal: za,
  space: Wr,
  src_url_equal: dt,
  transition_in: ae,
  transition_out: le,
  update_slot_base: Jr
} = window.__gradio__svelte__internal, { createEventDispatcher: Xa, tick: su, onMount: ou } = window.__gradio__svelte__internal;
function Za(e) {
  let t, n;
  return {
    c() {
      t = Bt("img"), dt(t.src, n = /*value_*/
      e[4][0].data) || ie(t, "src", n), ie(t, "alt", ""), ie(t, "class", "svelte-1s3r0d8");
    },
    m(r, i) {
      Je(r, t, i);
    },
    p(r, i) {
      i & /*value_*/
      16 && !dt(t.src, n = /*value_*/
      r[4][0].data) && ie(t, "src", n);
    },
    i: _t,
    o: _t,
    d(r) {
      r && We(t);
    }
  };
}
function Wa(e) {
  var o;
  let t, n, r;
  function i(a) {
    e[10](a);
  }
  let s = {
    filetype: "image/*",
    disable_click: !!/*value*/
    ((o = e[0]) != null && o[0]),
    root: (
      /*root*/
      e[3]
    ),
    file_count: "multiple",
    $$slots: { default: [Ja] },
    $$scope: { ctx: e }
  };
  return (
    /*dragging*/
    e[5] !== void 0 && (s.dragging = /*dragging*/
    e[5]), t = new Gr({ props: s }), Vr.push(() => qr(t, "dragging", i)), t.$on(
      "load",
      /*load_handler*/
      e[11]
    ), {
      c() {
        ft(t.$$.fragment);
      },
      m(a, u) {
        ht(t, a, u), r = !0;
      },
      p(a, u) {
        var f;
        const l = {};
        u & /*value*/
        1 && (l.disable_click = !!/*value*/
        ((f = a[0]) != null && f[0])), u & /*root*/
        8 && (l.root = /*root*/
        a[3]), u & /*$$scope*/
        16384 && (l.$$scope = { dirty: u, ctx: a }), !n && u & /*dragging*/
        32 && (n = !0, l.dragging = /*dragging*/
        a[5], jr(() => n = !1)), t.$set(l);
      },
      i(a) {
        r || (ae(t.$$.fragment, a), r = !0);
      },
      o(a) {
        le(t.$$.fragment, a), r = !1;
      },
      d(a) {
        ct(t, a);
      }
    }
  );
}
function Ja(e) {
  let t;
  const n = (
    /*#slots*/
    e[9].default
  ), r = zr(
    n,
    e,
    /*$$scope*/
    e[14],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(i, s) {
      r && r.m(i, s), t = !0;
    },
    p(i, s) {
      r && r.p && (!t || s & /*$$scope*/
      16384) && Jr(
        r,
        n,
        i,
        /*$$scope*/
        i[14],
        t ? Zr(
          n,
          /*$$scope*/
          i[14],
          s,
          null
        ) : Xr(
          /*$$scope*/
          i[14]
        ),
        null
      );
    },
    i(i) {
      t || (ae(r, i), t = !0);
    },
    o(i) {
      le(r, i), t = !1;
    },
    d(i) {
      r && r.d(i);
    }
  };
}
function Qa(e) {
  let t, n;
  return {
    c() {
      t = Bt("img"), dt(t.src, n = /*value_*/
      e[4][1].data) || ie(t, "src", n), ie(t, "alt", ""), ie(t, "class", "svelte-1s3r0d8");
    },
    m(r, i) {
      Je(r, t, i);
    },
    p(r, i) {
      i & /*value_*/
      16 && !dt(t.src, n = /*value_*/
      r[4][1].data) && ie(t, "src", n);
    },
    i: _t,
    o: _t,
    d(r) {
      r && We(t);
    }
  };
}
function Ya(e) {
  var o;
  let t, n, r;
  function i(a) {
    e[12](a);
  }
  let s = {
    filetype: "image/*",
    disable_click: !!/*value*/
    ((o = e[0]) != null && o[1]),
    root: (
      /*root*/
      e[3]
    ),
    file_count: "multiple",
    $$slots: { default: [Ka] },
    $$scope: { ctx: e }
  };
  return (
    /*dragging*/
    e[5] !== void 0 && (s.dragging = /*dragging*/
    e[5]), t = new Gr({ props: s }), Vr.push(() => qr(t, "dragging", i)), t.$on(
      "load",
      /*load_handler_1*/
      e[13]
    ), {
      c() {
        ft(t.$$.fragment);
      },
      m(a, u) {
        ht(t, a, u), r = !0;
      },
      p(a, u) {
        var f;
        const l = {};
        u & /*value*/
        1 && (l.disable_click = !!/*value*/
        ((f = a[0]) != null && f[1])), u & /*root*/
        8 && (l.root = /*root*/
        a[3]), u & /*$$scope*/
        16384 && (l.$$scope = { dirty: u, ctx: a }), !n && u & /*dragging*/
        32 && (n = !0, l.dragging = /*dragging*/
        a[5], jr(() => n = !1)), t.$set(l);
      },
      i(a) {
        r || (ae(t.$$.fragment, a), r = !0);
      },
      o(a) {
        le(t.$$.fragment, a), r = !1;
      },
      d(a) {
        ct(t, a);
      }
    }
  );
}
function Ka(e) {
  let t;
  const n = (
    /*#slots*/
    e[9].default
  ), r = zr(
    n,
    e,
    /*$$scope*/
    e[14],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(i, s) {
      r && r.m(i, s), t = !0;
    },
    p(i, s) {
      r && r.p && (!t || s & /*$$scope*/
      16384) && Jr(
        r,
        n,
        i,
        /*$$scope*/
        i[14],
        t ? Zr(
          n,
          /*$$scope*/
          i[14],
          s,
          null
        ) : Xr(
          /*$$scope*/
          i[14]
        ),
        null
      );
    },
    i(i) {
      t || (ae(r, i), t = !0);
    },
    o(i) {
      le(r, i), t = !1;
    },
    d(i) {
      r && r.d(i);
    }
  };
}
function $a(e) {
  let t, n, r, i, s, o, a;
  const u = [Wa, Za], l = [];
  function f(m, p) {
    return (
      /*value_*/
      m[4][0] ? 1 : 0
    );
  }
  n = f(e), r = l[n] = u[n](e);
  const c = [Ya, Qa], h = [];
  function d(m, p) {
    return (
      /*value_*/
      m[4][1] ? 1 : 0
    );
  }
  return s = d(e), o = h[s] = c[s](e), {
    c() {
      t = Bt("div"), r.c(), i = Wr(), o.c(), ie(t, "class", "upload-wrap svelte-1s3r0d8");
    },
    m(m, p) {
      Je(m, t, p), l[n].m(t, null), qa(t, i), h[s].m(t, null), a = !0;
    },
    p(m, p) {
      let y = n;
      n = f(m), n === y ? l[n].p(m, p) : (Vn(), le(l[y], 1, 1, () => {
        l[y] = null;
      }), qn(), r = l[n], r ? r.p(m, p) : (r = l[n] = u[n](m), r.c()), ae(r, 1), r.m(t, i));
      let S = s;
      s = d(m), s === S ? h[s].p(m, p) : (Vn(), le(h[S], 1, 1, () => {
        h[S] = null;
      }), qn(), o = h[s], o ? o.p(m, p) : (o = h[s] = c[s](m), o.c()), ae(o, 1), o.m(t, null));
    },
    i(m) {
      a || (ae(r), ae(o), a = !0);
    },
    o(m) {
      le(r), le(o), a = !1;
    },
    d(m) {
      m && We(t), l[n].d(), h[s].d();
    }
  };
}
function el(e) {
  let t, n, r, i, s;
  return t = new Ji({
    props: {
      show_label: (
        /*show_label*/
        e[2]
      ),
      Icon: ns,
      label: (
        /*label*/
        e[1] || "Image"
      )
    }
  }), i = new pi({
    props: {
      position: 0.5,
      disabled: !0,
      $$slots: { default: [$a] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      ft(t.$$.fragment), n = Wr(), r = Bt("div"), ft(i.$$.fragment), ie(r, "data-testid", "image"), ie(r, "class", "image-container svelte-1s3r0d8");
    },
    m(o, a) {
      ht(t, o, a), Je(o, n, a), Je(o, r, a), ht(i, r, null), s = !0;
    },
    p(o, [a]) {
      const u = {};
      a & /*show_label*/
      4 && (u.show_label = /*show_label*/
      o[2]), a & /*label*/
      2 && (u.label = /*label*/
      o[1] || "Image"), t.$set(u);
      const l = {};
      a & /*$$scope, value, root, dragging, value_*/
      16441 && (l.$$scope = { dirty: a, ctx: o }), i.$set(l);
    },
    i(o) {
      s || (ae(t.$$.fragment, o), ae(i.$$.fragment, o), s = !0);
    },
    o(o) {
      le(t.$$.fragment, o), le(i.$$.fragment, o), s = !1;
    },
    d(o) {
      o && (We(n), We(r)), ct(t, o), ct(i);
    }
  };
}
function tl(e, t, n) {
  let { $$slots: r = {}, $$scope: i } = t, { value: s } = t, { label: o = void 0 } = t, { show_label: a } = t, { pending: u = !1 } = t, { root: l } = t, { i18n: f } = t, c = [null, null];
  function h({ detail: _ }, E) {
    _.length > 1 ? (n(4, c[0] = Pe(_[0], l, null), c), n(4, c[1] = Pe(_[1], l, null), c)) : n(4, c[E] = Pe(_[0], l, null), c), d("upload", s[E]);
  }
  const d = Xa();
  let m = !1;
  function p(_) {
    m = _, n(5, m);
  }
  const y = (_) => h(_, 0);
  function S(_) {
    m = _, n(5, m);
  }
  const H = (_) => h(_, 1);
  return e.$$set = (_) => {
    "value" in _ && n(0, s = _.value), "label" in _ && n(1, o = _.label), "show_label" in _ && n(2, a = _.show_label), "pending" in _ && n(7, u = _.pending), "root" in _ && n(3, l = _.root), "i18n" in _ && n(8, f = _.i18n), "$$scope" in _ && n(14, i = _.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*value, value_, root*/
    25 && s !== c && (n(4, c = s), Pe(c, l, null)), e.$$.dirty & /*dragging*/
    32 && d("drag", m), e.$$.dirty & /*value*/
    1 && console.log("interactive", s);
  }, [
    s,
    o,
    a,
    l,
    c,
    m,
    h,
    u,
    f,
    r,
    p,
    y,
    S,
    H,
    i
  ];
}
class nl extends ja {
  constructor(t) {
    super(), Va(this, t, tl, el, za, {
      value: 0,
      label: 1,
      show_label: 2,
      pending: 7,
      root: 3,
      i18n: 8
    });
  }
}
function Ie(e) {
  let t = ["", "k", "M", "G", "T", "P", "E", "Z"], n = 0;
  for (; e > 1e3 && n < t.length - 1; )
    e /= 1e3, n++;
  let r = t[n];
  return (Number.isInteger(e) ? e : e.toFixed(1)) + r;
}
const {
  SvelteComponent: rl,
  append: ne,
  attr: O,
  component_subscribe: zn,
  detach: il,
  element: sl,
  init: ol,
  insert: al,
  noop: Xn,
  safe_not_equal: ll,
  set_style: it,
  svg_element: re,
  toggle_class: Zn
} = window.__gradio__svelte__internal, { onMount: ul } = window.__gradio__svelte__internal;
function fl(e) {
  let t, n, r, i, s, o, a, u, l, f, c, h;
  return {
    c() {
      t = sl("div"), n = re("svg"), r = re("g"), i = re("path"), s = re("path"), o = re("path"), a = re("path"), u = re("g"), l = re("path"), f = re("path"), c = re("path"), h = re("path"), O(i, "d", "M255.926 0.754768L509.702 139.936V221.027L255.926 81.8465V0.754768Z"), O(i, "fill", "#FF7C00"), O(i, "fill-opacity", "0.4"), O(i, "class", "svelte-43sxxs"), O(s, "d", "M509.69 139.936L254.981 279.641V361.255L509.69 221.55V139.936Z"), O(s, "fill", "#FF7C00"), O(s, "class", "svelte-43sxxs"), O(o, "d", "M0.250138 139.937L254.981 279.641V361.255L0.250138 221.55V139.937Z"), O(o, "fill", "#FF7C00"), O(o, "fill-opacity", "0.4"), O(o, "class", "svelte-43sxxs"), O(a, "d", "M255.923 0.232622L0.236328 139.936V221.55L255.923 81.8469V0.232622Z"), O(a, "fill", "#FF7C00"), O(a, "class", "svelte-43sxxs"), it(r, "transform", "translate(" + /*$top*/
      e[1][0] + "px, " + /*$top*/
      e[1][1] + "px)"), O(l, "d", "M255.926 141.5L509.702 280.681V361.773L255.926 222.592V141.5Z"), O(l, "fill", "#FF7C00"), O(l, "fill-opacity", "0.4"), O(l, "class", "svelte-43sxxs"), O(f, "d", "M509.69 280.679L254.981 420.384V501.998L509.69 362.293V280.679Z"), O(f, "fill", "#FF7C00"), O(f, "class", "svelte-43sxxs"), O(c, "d", "M0.250138 280.681L254.981 420.386V502L0.250138 362.295V280.681Z"), O(c, "fill", "#FF7C00"), O(c, "fill-opacity", "0.4"), O(c, "class", "svelte-43sxxs"), O(h, "d", "M255.923 140.977L0.236328 280.68V362.294L255.923 222.591V140.977Z"), O(h, "fill", "#FF7C00"), O(h, "class", "svelte-43sxxs"), it(u, "transform", "translate(" + /*$bottom*/
      e[2][0] + "px, " + /*$bottom*/
      e[2][1] + "px)"), O(n, "viewBox", "-1200 -1200 3000 3000"), O(n, "fill", "none"), O(n, "xmlns", "http://www.w3.org/2000/svg"), O(n, "class", "svelte-43sxxs"), O(t, "class", "svelte-43sxxs"), Zn(
        t,
        "margin",
        /*margin*/
        e[0]
      );
    },
    m(d, m) {
      al(d, t, m), ne(t, n), ne(n, r), ne(r, i), ne(r, s), ne(r, o), ne(r, a), ne(n, u), ne(u, l), ne(u, f), ne(u, c), ne(u, h);
    },
    p(d, [m]) {
      m & /*$top*/
      2 && it(r, "transform", "translate(" + /*$top*/
      d[1][0] + "px, " + /*$top*/
      d[1][1] + "px)"), m & /*$bottom*/
      4 && it(u, "transform", "translate(" + /*$bottom*/
      d[2][0] + "px, " + /*$bottom*/
      d[2][1] + "px)"), m & /*margin*/
      1 && Zn(
        t,
        "margin",
        /*margin*/
        d[0]
      );
    },
    i: Xn,
    o: Xn,
    d(d) {
      d && il(t);
    }
  };
}
function cl(e, t, n) {
  let r, i, { margin: s = !0 } = t;
  const o = pn([0, 0]);
  zn(e, o, (h) => n(1, r = h));
  const a = pn([0, 0]);
  zn(e, a, (h) => n(2, i = h));
  let u;
  async function l() {
    await Promise.all([o.set([125, 140]), a.set([-125, -140])]), await Promise.all([o.set([-125, 140]), a.set([125, -140])]), await Promise.all([o.set([-125, 0]), a.set([125, -0])]), await Promise.all([o.set([125, 0]), a.set([-125, 0])]);
  }
  async function f() {
    await l(), u || f();
  }
  async function c() {
    await Promise.all([o.set([125, 0]), a.set([-125, 0])]), f();
  }
  return ul(() => (c(), () => u = !0)), e.$$set = (h) => {
    "margin" in h && n(0, s = h.margin);
  }, [s, r, i, o, a];
}
class hl extends rl {
  constructor(t) {
    super(), ol(this, t, cl, fl, ll, { margin: 0 });
  }
}
const {
  SvelteComponent: _l,
  append: Te,
  attr: ue,
  binding_callbacks: Wn,
  check_outros: Qr,
  create_component: dl,
  create_slot: ml,
  destroy_component: gl,
  destroy_each: Yr,
  detach: B,
  element: _e,
  empty: Fe,
  ensure_array_like: mt,
  get_all_dirty_from_scope: pl,
  get_slot_changes: bl,
  group_outros: Kr,
  init: yl,
  insert: A,
  mount_component: vl,
  noop: rn,
  safe_not_equal: wl,
  set_data: ee,
  set_style: ve,
  space: fe,
  text: R,
  toggle_class: $,
  transition_in: ke,
  transition_out: Re,
  update_slot_base: El
} = window.__gradio__svelte__internal, { tick: Sl } = window.__gradio__svelte__internal, { onDestroy: Tl } = window.__gradio__svelte__internal, Bl = (e) => ({}), Jn = (e) => ({});
function Qn(e, t, n) {
  const r = e.slice();
  return r[38] = t[n], r[40] = n, r;
}
function Yn(e, t, n) {
  const r = e.slice();
  return r[38] = t[n], r;
}
function Al(e) {
  let t, n = (
    /*i18n*/
    e[1]("common.error") + ""
  ), r, i, s;
  const o = (
    /*#slots*/
    e[29].error
  ), a = ml(
    o,
    e,
    /*$$scope*/
    e[28],
    Jn
  );
  return {
    c() {
      t = _e("span"), r = R(n), i = fe(), a && a.c(), ue(t, "class", "error svelte-14miwb5");
    },
    m(u, l) {
      A(u, t, l), Te(t, r), A(u, i, l), a && a.m(u, l), s = !0;
    },
    p(u, l) {
      (!s || l[0] & /*i18n*/
      2) && n !== (n = /*i18n*/
      u[1]("common.error") + "") && ee(r, n), a && a.p && (!s || l[0] & /*$$scope*/
      268435456) && El(
        a,
        o,
        u,
        /*$$scope*/
        u[28],
        s ? bl(
          o,
          /*$$scope*/
          u[28],
          l,
          Bl
        ) : pl(
          /*$$scope*/
          u[28]
        ),
        Jn
      );
    },
    i(u) {
      s || (ke(a, u), s = !0);
    },
    o(u) {
      Re(a, u), s = !1;
    },
    d(u) {
      u && (B(t), B(i)), a && a.d(u);
    }
  };
}
function Hl(e) {
  let t, n, r, i, s, o, a, u, l, f = (
    /*variant*/
    e[8] === "default" && /*show_eta_bar*/
    e[18] && /*show_progress*/
    e[6] === "full" && Kn(e)
  );
  function c(_, E) {
    if (
      /*progress*/
      _[7]
    )
      return Il;
    if (
      /*queue_position*/
      _[2] !== null && /*queue_size*/
      _[3] !== void 0 && /*queue_position*/
      _[2] >= 0
    )
      return Pl;
    if (
      /*queue_position*/
      _[2] === 0
    )
      return Nl;
  }
  let h = c(e), d = h && h(e), m = (
    /*timer*/
    e[5] && tr(e)
  );
  const p = [xl, Ll], y = [];
  function S(_, E) {
    return (
      /*last_progress_level*/
      _[15] != null ? 0 : (
        /*show_progress*/
        _[6] === "full" ? 1 : -1
      )
    );
  }
  ~(s = S(e)) && (o = y[s] = p[s](e));
  let H = !/*timer*/
  e[5] && lr(e);
  return {
    c() {
      f && f.c(), t = fe(), n = _e("div"), d && d.c(), r = fe(), m && m.c(), i = fe(), o && o.c(), a = fe(), H && H.c(), u = Fe(), ue(n, "class", "progress-text svelte-14miwb5"), $(
        n,
        "meta-text-center",
        /*variant*/
        e[8] === "center"
      ), $(
        n,
        "meta-text",
        /*variant*/
        e[8] === "default"
      );
    },
    m(_, E) {
      f && f.m(_, E), A(_, t, E), A(_, n, E), d && d.m(n, null), Te(n, r), m && m.m(n, null), A(_, i, E), ~s && y[s].m(_, E), A(_, a, E), H && H.m(_, E), A(_, u, E), l = !0;
    },
    p(_, E) {
      /*variant*/
      _[8] === "default" && /*show_eta_bar*/
      _[18] && /*show_progress*/
      _[6] === "full" ? f ? f.p(_, E) : (f = Kn(_), f.c(), f.m(t.parentNode, t)) : f && (f.d(1), f = null), h === (h = c(_)) && d ? d.p(_, E) : (d && d.d(1), d = h && h(_), d && (d.c(), d.m(n, r))), /*timer*/
      _[5] ? m ? m.p(_, E) : (m = tr(_), m.c(), m.m(n, null)) : m && (m.d(1), m = null), (!l || E[0] & /*variant*/
      256) && $(
        n,
        "meta-text-center",
        /*variant*/
        _[8] === "center"
      ), (!l || E[0] & /*variant*/
      256) && $(
        n,
        "meta-text",
        /*variant*/
        _[8] === "default"
      );
      let b = s;
      s = S(_), s === b ? ~s && y[s].p(_, E) : (o && (Kr(), Re(y[b], 1, 1, () => {
        y[b] = null;
      }), Qr()), ~s ? (o = y[s], o ? o.p(_, E) : (o = y[s] = p[s](_), o.c()), ke(o, 1), o.m(a.parentNode, a)) : o = null), /*timer*/
      _[5] ? H && (H.d(1), H = null) : H ? H.p(_, E) : (H = lr(_), H.c(), H.m(u.parentNode, u));
    },
    i(_) {
      l || (ke(o), l = !0);
    },
    o(_) {
      Re(o), l = !1;
    },
    d(_) {
      _ && (B(t), B(n), B(i), B(a), B(u)), f && f.d(_), d && d.d(), m && m.d(), ~s && y[s].d(_), H && H.d(_);
    }
  };
}
function Kn(e) {
  let t, n = `translateX(${/*eta_level*/
  (e[17] || 0) * 100 - 100}%)`;
  return {
    c() {
      t = _e("div"), ue(t, "class", "eta-bar svelte-14miwb5"), ve(t, "transform", n);
    },
    m(r, i) {
      A(r, t, i);
    },
    p(r, i) {
      i[0] & /*eta_level*/
      131072 && n !== (n = `translateX(${/*eta_level*/
      (r[17] || 0) * 100 - 100}%)`) && ve(t, "transform", n);
    },
    d(r) {
      r && B(t);
    }
  };
}
function Nl(e) {
  let t;
  return {
    c() {
      t = R("processing |");
    },
    m(n, r) {
      A(n, t, r);
    },
    p: rn,
    d(n) {
      n && B(t);
    }
  };
}
function Pl(e) {
  let t, n = (
    /*queue_position*/
    e[2] + 1 + ""
  ), r, i, s, o;
  return {
    c() {
      t = R("queue: "), r = R(n), i = R("/"), s = R(
        /*queue_size*/
        e[3]
      ), o = R(" |");
    },
    m(a, u) {
      A(a, t, u), A(a, r, u), A(a, i, u), A(a, s, u), A(a, o, u);
    },
    p(a, u) {
      u[0] & /*queue_position*/
      4 && n !== (n = /*queue_position*/
      a[2] + 1 + "") && ee(r, n), u[0] & /*queue_size*/
      8 && ee(
        s,
        /*queue_size*/
        a[3]
      );
    },
    d(a) {
      a && (B(t), B(r), B(i), B(s), B(o));
    }
  };
}
function Il(e) {
  let t, n = mt(
    /*progress*/
    e[7]
  ), r = [];
  for (let i = 0; i < n.length; i += 1)
    r[i] = er(Yn(e, n, i));
  return {
    c() {
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      t = Fe();
    },
    m(i, s) {
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(i, s);
      A(i, t, s);
    },
    p(i, s) {
      if (s[0] & /*progress*/
      128) {
        n = mt(
          /*progress*/
          i[7]
        );
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = Yn(i, n, o);
          r[o] ? r[o].p(a, s) : (r[o] = er(a), r[o].c(), r[o].m(t.parentNode, t));
        }
        for (; o < r.length; o += 1)
          r[o].d(1);
        r.length = n.length;
      }
    },
    d(i) {
      i && B(t), Yr(r, i);
    }
  };
}
function $n(e) {
  let t, n = (
    /*p*/
    e[38].unit + ""
  ), r, i, s = " ", o;
  function a(f, c) {
    return (
      /*p*/
      f[38].length != null ? Ol : Cl
    );
  }
  let u = a(e), l = u(e);
  return {
    c() {
      l.c(), t = fe(), r = R(n), i = R(" | "), o = R(s);
    },
    m(f, c) {
      l.m(f, c), A(f, t, c), A(f, r, c), A(f, i, c), A(f, o, c);
    },
    p(f, c) {
      u === (u = a(f)) && l ? l.p(f, c) : (l.d(1), l = u(f), l && (l.c(), l.m(t.parentNode, t))), c[0] & /*progress*/
      128 && n !== (n = /*p*/
      f[38].unit + "") && ee(r, n);
    },
    d(f) {
      f && (B(t), B(r), B(i), B(o)), l.d(f);
    }
  };
}
function Cl(e) {
  let t = Ie(
    /*p*/
    e[38].index || 0
  ) + "", n;
  return {
    c() {
      n = R(t);
    },
    m(r, i) {
      A(r, n, i);
    },
    p(r, i) {
      i[0] & /*progress*/
      128 && t !== (t = Ie(
        /*p*/
        r[38].index || 0
      ) + "") && ee(n, t);
    },
    d(r) {
      r && B(n);
    }
  };
}
function Ol(e) {
  let t = Ie(
    /*p*/
    e[38].index || 0
  ) + "", n, r, i = Ie(
    /*p*/
    e[38].length
  ) + "", s;
  return {
    c() {
      n = R(t), r = R("/"), s = R(i);
    },
    m(o, a) {
      A(o, n, a), A(o, r, a), A(o, s, a);
    },
    p(o, a) {
      a[0] & /*progress*/
      128 && t !== (t = Ie(
        /*p*/
        o[38].index || 0
      ) + "") && ee(n, t), a[0] & /*progress*/
      128 && i !== (i = Ie(
        /*p*/
        o[38].length
      ) + "") && ee(s, i);
    },
    d(o) {
      o && (B(n), B(r), B(s));
    }
  };
}
function er(e) {
  let t, n = (
    /*p*/
    e[38].index != null && $n(e)
  );
  return {
    c() {
      n && n.c(), t = Fe();
    },
    m(r, i) {
      n && n.m(r, i), A(r, t, i);
    },
    p(r, i) {
      /*p*/
      r[38].index != null ? n ? n.p(r, i) : (n = $n(r), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(r) {
      r && B(t), n && n.d(r);
    }
  };
}
function tr(e) {
  let t, n = (
    /*eta*/
    e[0] ? `/${/*formatted_eta*/
    e[19]}` : ""
  ), r, i;
  return {
    c() {
      t = R(
        /*formatted_timer*/
        e[20]
      ), r = R(n), i = R("s");
    },
    m(s, o) {
      A(s, t, o), A(s, r, o), A(s, i, o);
    },
    p(s, o) {
      o[0] & /*formatted_timer*/
      1048576 && ee(
        t,
        /*formatted_timer*/
        s[20]
      ), o[0] & /*eta, formatted_eta*/
      524289 && n !== (n = /*eta*/
      s[0] ? `/${/*formatted_eta*/
      s[19]}` : "") && ee(r, n);
    },
    d(s) {
      s && (B(t), B(r), B(i));
    }
  };
}
function Ll(e) {
  let t, n;
  return t = new hl({
    props: { margin: (
      /*variant*/
      e[8] === "default"
    ) }
  }), {
    c() {
      dl(t.$$.fragment);
    },
    m(r, i) {
      vl(t, r, i), n = !0;
    },
    p(r, i) {
      const s = {};
      i[0] & /*variant*/
      256 && (s.margin = /*variant*/
      r[8] === "default"), t.$set(s);
    },
    i(r) {
      n || (ke(t.$$.fragment, r), n = !0);
    },
    o(r) {
      Re(t.$$.fragment, r), n = !1;
    },
    d(r) {
      gl(t, r);
    }
  };
}
function xl(e) {
  let t, n, r, i, s, o = `${/*last_progress_level*/
  e[15] * 100}%`, a = (
    /*progress*/
    e[7] != null && nr(e)
  );
  return {
    c() {
      t = _e("div"), n = _e("div"), a && a.c(), r = fe(), i = _e("div"), s = _e("div"), ue(n, "class", "progress-level-inner svelte-14miwb5"), ue(s, "class", "progress-bar svelte-14miwb5"), ve(s, "width", o), ue(i, "class", "progress-bar-wrap svelte-14miwb5"), ue(t, "class", "progress-level svelte-14miwb5");
    },
    m(u, l) {
      A(u, t, l), Te(t, n), a && a.m(n, null), Te(t, r), Te(t, i), Te(i, s), e[30](s);
    },
    p(u, l) {
      /*progress*/
      u[7] != null ? a ? a.p(u, l) : (a = nr(u), a.c(), a.m(n, null)) : a && (a.d(1), a = null), l[0] & /*last_progress_level*/
      32768 && o !== (o = `${/*last_progress_level*/
      u[15] * 100}%`) && ve(s, "width", o);
    },
    i: rn,
    o: rn,
    d(u) {
      u && B(t), a && a.d(), e[30](null);
    }
  };
}
function nr(e) {
  let t, n = mt(
    /*progress*/
    e[7]
  ), r = [];
  for (let i = 0; i < n.length; i += 1)
    r[i] = ar(Qn(e, n, i));
  return {
    c() {
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
      t = Fe();
    },
    m(i, s) {
      for (let o = 0; o < r.length; o += 1)
        r[o] && r[o].m(i, s);
      A(i, t, s);
    },
    p(i, s) {
      if (s[0] & /*progress_level, progress*/
      16512) {
        n = mt(
          /*progress*/
          i[7]
        );
        let o;
        for (o = 0; o < n.length; o += 1) {
          const a = Qn(i, n, o);
          r[o] ? r[o].p(a, s) : (r[o] = ar(a), r[o].c(), r[o].m(t.parentNode, t));
        }
        for (; o < r.length; o += 1)
          r[o].d(1);
        r.length = n.length;
      }
    },
    d(i) {
      i && B(t), Yr(r, i);
    }
  };
}
function rr(e) {
  let t, n, r, i, s = (
    /*i*/
    e[40] !== 0 && Ml()
  ), o = (
    /*p*/
    e[38].desc != null && ir(e)
  ), a = (
    /*p*/
    e[38].desc != null && /*progress_level*/
    e[14] && /*progress_level*/
    e[14][
      /*i*/
      e[40]
    ] != null && sr()
  ), u = (
    /*progress_level*/
    e[14] != null && or(e)
  );
  return {
    c() {
      s && s.c(), t = fe(), o && o.c(), n = fe(), a && a.c(), r = fe(), u && u.c(), i = Fe();
    },
    m(l, f) {
      s && s.m(l, f), A(l, t, f), o && o.m(l, f), A(l, n, f), a && a.m(l, f), A(l, r, f), u && u.m(l, f), A(l, i, f);
    },
    p(l, f) {
      /*p*/
      l[38].desc != null ? o ? o.p(l, f) : (o = ir(l), o.c(), o.m(n.parentNode, n)) : o && (o.d(1), o = null), /*p*/
      l[38].desc != null && /*progress_level*/
      l[14] && /*progress_level*/
      l[14][
        /*i*/
        l[40]
      ] != null ? a || (a = sr(), a.c(), a.m(r.parentNode, r)) : a && (a.d(1), a = null), /*progress_level*/
      l[14] != null ? u ? u.p(l, f) : (u = or(l), u.c(), u.m(i.parentNode, i)) : u && (u.d(1), u = null);
    },
    d(l) {
      l && (B(t), B(n), B(r), B(i)), s && s.d(l), o && o.d(l), a && a.d(l), u && u.d(l);
    }
  };
}
function Ml(e) {
  let t;
  return {
    c() {
      t = R(" /");
    },
    m(n, r) {
      A(n, t, r);
    },
    d(n) {
      n && B(t);
    }
  };
}
function ir(e) {
  let t = (
    /*p*/
    e[38].desc + ""
  ), n;
  return {
    c() {
      n = R(t);
    },
    m(r, i) {
      A(r, n, i);
    },
    p(r, i) {
      i[0] & /*progress*/
      128 && t !== (t = /*p*/
      r[38].desc + "") && ee(n, t);
    },
    d(r) {
      r && B(n);
    }
  };
}
function sr(e) {
  let t;
  return {
    c() {
      t = R("-");
    },
    m(n, r) {
      A(n, t, r);
    },
    d(n) {
      n && B(t);
    }
  };
}
function or(e) {
  let t = (100 * /*progress_level*/
  (e[14][
    /*i*/
    e[40]
  ] || 0)).toFixed(1) + "", n, r;
  return {
    c() {
      n = R(t), r = R("%");
    },
    m(i, s) {
      A(i, n, s), A(i, r, s);
    },
    p(i, s) {
      s[0] & /*progress_level*/
      16384 && t !== (t = (100 * /*progress_level*/
      (i[14][
        /*i*/
        i[40]
      ] || 0)).toFixed(1) + "") && ee(n, t);
    },
    d(i) {
      i && (B(n), B(r));
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
      n && n.c(), t = Fe();
    },
    m(r, i) {
      n && n.m(r, i), A(r, t, i);
    },
    p(r, i) {
      /*p*/
      r[38].desc != null || /*progress_level*/
      r[14] && /*progress_level*/
      r[14][
        /*i*/
        r[40]
      ] != null ? n ? n.p(r, i) : (n = rr(r), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(r) {
      r && B(t), n && n.d(r);
    }
  };
}
function lr(e) {
  let t, n;
  return {
    c() {
      t = _e("p"), n = R(
        /*loading_text*/
        e[9]
      ), ue(t, "class", "loading svelte-14miwb5");
    },
    m(r, i) {
      A(r, t, i), Te(t, n);
    },
    p(r, i) {
      i[0] & /*loading_text*/
      512 && ee(
        n,
        /*loading_text*/
        r[9]
      );
    },
    d(r) {
      r && B(t);
    }
  };
}
function kl(e) {
  let t, n, r, i, s;
  const o = [Hl, Al], a = [];
  function u(l, f) {
    return (
      /*status*/
      l[4] === "pending" ? 0 : (
        /*status*/
        l[4] === "error" ? 1 : -1
      )
    );
  }
  return ~(n = u(e)) && (r = a[n] = o[n](e)), {
    c() {
      t = _e("div"), r && r.c(), ue(t, "class", i = "wrap " + /*variant*/
      e[8] + " " + /*show_progress*/
      e[6] + " svelte-14miwb5"), $(t, "hide", !/*status*/
      e[4] || /*status*/
      e[4] === "complete" || /*show_progress*/
      e[6] === "hidden"), $(
        t,
        "translucent",
        /*variant*/
        e[8] === "center" && /*status*/
        (e[4] === "pending" || /*status*/
        e[4] === "error") || /*translucent*/
        e[11] || /*show_progress*/
        e[6] === "minimal"
      ), $(
        t,
        "generating",
        /*status*/
        e[4] === "generating"
      ), $(
        t,
        "border",
        /*border*/
        e[12]
      ), ve(
        t,
        "position",
        /*absolute*/
        e[10] ? "absolute" : "static"
      ), ve(
        t,
        "padding",
        /*absolute*/
        e[10] ? "0" : "var(--size-8) 0"
      );
    },
    m(l, f) {
      A(l, t, f), ~n && a[n].m(t, null), e[31](t), s = !0;
    },
    p(l, f) {
      let c = n;
      n = u(l), n === c ? ~n && a[n].p(l, f) : (r && (Kr(), Re(a[c], 1, 1, () => {
        a[c] = null;
      }), Qr()), ~n ? (r = a[n], r ? r.p(l, f) : (r = a[n] = o[n](l), r.c()), ke(r, 1), r.m(t, null)) : r = null), (!s || f[0] & /*variant, show_progress*/
      320 && i !== (i = "wrap " + /*variant*/
      l[8] + " " + /*show_progress*/
      l[6] + " svelte-14miwb5")) && ue(t, "class", i), (!s || f[0] & /*variant, show_progress, status, show_progress*/
      336) && $(t, "hide", !/*status*/
      l[4] || /*status*/
      l[4] === "complete" || /*show_progress*/
      l[6] === "hidden"), (!s || f[0] & /*variant, show_progress, variant, status, translucent, show_progress*/
      2384) && $(
        t,
        "translucent",
        /*variant*/
        l[8] === "center" && /*status*/
        (l[4] === "pending" || /*status*/
        l[4] === "error") || /*translucent*/
        l[11] || /*show_progress*/
        l[6] === "minimal"
      ), (!s || f[0] & /*variant, show_progress, status*/
      336) && $(
        t,
        "generating",
        /*status*/
        l[4] === "generating"
      ), (!s || f[0] & /*variant, show_progress, border*/
      4416) && $(
        t,
        "border",
        /*border*/
        l[12]
      ), f[0] & /*absolute*/
      1024 && ve(
        t,
        "position",
        /*absolute*/
        l[10] ? "absolute" : "static"
      ), f[0] & /*absolute*/
      1024 && ve(
        t,
        "padding",
        /*absolute*/
        l[10] ? "0" : "var(--size-8) 0"
      );
    },
    i(l) {
      s || (ke(r), s = !0);
    },
    o(l) {
      Re(r), s = !1;
    },
    d(l) {
      l && B(t), ~n && a[n].d(), e[31](null);
    }
  };
}
let st = [], Vt = !1;
async function Rl(e, t = !0) {
  if (!(window.__gradio_mode__ === "website" || window.__gradio_mode__ !== "app" && t !== !0)) {
    if (st.push(e), !Vt)
      Vt = !0;
    else
      return;
    await Sl(), requestAnimationFrame(() => {
      let n = [0, 0];
      for (let r = 0; r < st.length; r++) {
        const s = st[r].getBoundingClientRect();
        (r === 0 || s.top + window.scrollY <= n[0]) && (n[0] = s.top + window.scrollY, n[1] = r);
      }
      window.scrollTo({ top: n[0] - 20, behavior: "smooth" }), Vt = !1, st = [];
    });
  }
}
function Dl(e, t, n) {
  let r, { $$slots: i = {}, $$scope: s } = t, { i18n: o } = t, { eta: a = null } = t, { queue: u = !1 } = t, { queue_position: l } = t, { queue_size: f } = t, { status: c } = t, { scroll_to_output: h = !1 } = t, { timer: d = !0 } = t, { show_progress: m = "full" } = t, { message: p = null } = t, { progress: y = null } = t, { variant: S = "default" } = t, { loading_text: H = "Loading..." } = t, { absolute: _ = !0 } = t, { translucent: E = !1 } = t, { border: b = !1 } = t, { autoscroll: V } = t, G, te = !1, se = 0, Z = 0, T = null, P = 0, k = null, g, v = null, U = !0;
  const I = () => {
    n(25, se = performance.now()), n(26, Z = 0), te = !0, x();
  };
  function x() {
    requestAnimationFrame(() => {
      n(26, Z = (performance.now() - se) / 1e3), te && x();
    });
  }
  function de() {
    n(26, Z = 0), te && (te = !1);
  }
  Tl(() => {
    te && de();
  });
  let Y = null;
  function oe(w) {
    Wn[w ? "unshift" : "push"](() => {
      v = w, n(16, v), n(7, y), n(14, k), n(15, g);
    });
  }
  function D(w) {
    Wn[w ? "unshift" : "push"](() => {
      G = w, n(13, G);
    });
  }
  return e.$$set = (w) => {
    "i18n" in w && n(1, o = w.i18n), "eta" in w && n(0, a = w.eta), "queue" in w && n(21, u = w.queue), "queue_position" in w && n(2, l = w.queue_position), "queue_size" in w && n(3, f = w.queue_size), "status" in w && n(4, c = w.status), "scroll_to_output" in w && n(22, h = w.scroll_to_output), "timer" in w && n(5, d = w.timer), "show_progress" in w && n(6, m = w.show_progress), "message" in w && n(23, p = w.message), "progress" in w && n(7, y = w.progress), "variant" in w && n(8, S = w.variant), "loading_text" in w && n(9, H = w.loading_text), "absolute" in w && n(10, _ = w.absolute), "translucent" in w && n(11, E = w.translucent), "border" in w && n(12, b = w.border), "autoscroll" in w && n(24, V = w.autoscroll), "$$scope" in w && n(28, s = w.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*eta, old_eta, queue, timer_start*/
    169869313 && (a === null ? n(0, a = T) : u && n(0, a = (performance.now() - se) / 1e3 + a), a != null && (n(19, Y = a.toFixed(1)), n(27, T = a))), e.$$.dirty[0] & /*eta, timer_diff*/
    67108865 && n(17, P = a === null || a <= 0 || !Z ? null : Math.min(Z / a, 1)), e.$$.dirty[0] & /*progress*/
    128 && y != null && n(18, U = !1), e.$$.dirty[0] & /*progress, progress_level, progress_bar, last_progress_level*/
    114816 && (y != null ? n(14, k = y.map((w) => {
      if (w.index != null && w.length != null)
        return w.index / w.length;
      if (w.progress != null)
        return w.progress;
    })) : n(14, k = null), k ? (n(15, g = k[k.length - 1]), v && (g === 0 ? n(16, v.style.transition = "0", v) : n(16, v.style.transition = "150ms", v))) : n(15, g = void 0)), e.$$.dirty[0] & /*status*/
    16 && (c === "pending" ? I() : de()), e.$$.dirty[0] & /*el, scroll_to_output, status, autoscroll*/
    20979728 && G && h && (c === "pending" || c === "complete") && Rl(G, V), e.$$.dirty[0] & /*status, message*/
    8388624, e.$$.dirty[0] & /*timer_diff*/
    67108864 && n(20, r = Z.toFixed(1));
  }, [
    a,
    o,
    l,
    f,
    c,
    d,
    m,
    y,
    S,
    H,
    _,
    E,
    b,
    G,
    k,
    g,
    v,
    P,
    U,
    Y,
    r,
    u,
    h,
    p,
    V,
    se,
    Z,
    T,
    s,
    i,
    oe,
    D
  ];
}
class Ul extends _l {
  constructor(t) {
    super(), yl(
      this,
      t,
      Dl,
      kl,
      wl,
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
  SvelteComponent: Fl,
  add_flush_callback: Gl,
  assign: jl,
  bind: ql,
  binding_callbacks: Vl,
  create_component: gt,
  destroy_component: pt,
  detach: zl,
  flush: z,
  get_spread_object: Xl,
  get_spread_update: Zl,
  init: Wl,
  insert: Jl,
  mount_component: bt,
  safe_not_equal: Ql,
  space: Yl,
  transition_in: yt,
  transition_out: vt
} = window.__gradio__svelte__internal;
function Kl(e) {
  let t, n;
  return t = new sa({
    props: {
      i18n: (
        /*gradio*/
        e[14].i18n
      ),
      type: "image"
    }
  }), {
    c() {
      gt(t.$$.fragment);
    },
    m(r, i) {
      bt(t, r, i), n = !0;
    },
    p(r, i) {
      const s = {};
      i & /*gradio*/
      16384 && (s.i18n = /*gradio*/
      r[14].i18n), t.$set(s);
    },
    i(r) {
      n || (yt(t.$$.fragment, r), n = !0);
    },
    o(r) {
      vt(t.$$.fragment, r), n = !1;
    },
    d(r) {
      pt(t, r);
    }
  };
}
function $l(e) {
  let t, n, r, i, s;
  const o = [
    {
      autoscroll: (
        /*gradio*/
        e[14].autoscroll
      )
    },
    { i18n: (
      /*gradio*/
      e[14].i18n
    ) },
    /*loading_status*/
    e[12]
  ];
  let a = {};
  for (let f = 0; f < o.length; f += 1)
    a = jl(a, o[f]);
  t = new Ul({ props: a });
  function u(f) {
    e[16](f);
  }
  let l = {
    root: (
      /*root*/
      e[13]
    ),
    label: (
      /*label*/
      e[4]
    ),
    show_label: (
      /*show_label*/
      e[5]
    ),
    pending: (
      /*pending*/
      e[6]
    ),
    i18n: (
      /*gradio*/
      e[14].i18n
    ),
    $$slots: { default: [Kl] },
    $$scope: { ctx: e }
  };
  return (
    /*value*/
    e[0] !== void 0 && (l.value = /*value*/
    e[0]), r = new nl({ props: l }), Vl.push(() => ql(r, "value", u)), r.$on(
      "edit",
      /*edit_handler*/
      e[17]
    ), r.$on(
      "clear",
      /*clear_handler*/
      e[18]
    ), r.$on(
      "stream",
      /*stream_handler*/
      e[19]
    ), r.$on(
      "drag",
      /*drag_handler*/
      e[20]
    ), r.$on(
      "upload",
      /*upload_handler*/
      e[21]
    ), r.$on(
      "select",
      /*select_handler*/
      e[22]
    ), r.$on(
      "share",
      /*share_handler*/
      e[23]
    ), {
      c() {
        gt(t.$$.fragment), n = Yl(), gt(r.$$.fragment);
      },
      m(f, c) {
        bt(t, f, c), Jl(f, n, c), bt(r, f, c), s = !0;
      },
      p(f, c) {
        const h = c & /*gradio, loading_status*/
        20480 ? Zl(o, [
          c & /*gradio*/
          16384 && {
            autoscroll: (
              /*gradio*/
              f[14].autoscroll
            )
          },
          c & /*gradio*/
          16384 && { i18n: (
            /*gradio*/
            f[14].i18n
          ) },
          c & /*loading_status*/
          4096 && Xl(
            /*loading_status*/
            f[12]
          )
        ]) : {};
        t.$set(h);
        const d = {};
        c & /*root*/
        8192 && (d.root = /*root*/
        f[13]), c & /*label*/
        16 && (d.label = /*label*/
        f[4]), c & /*show_label*/
        32 && (d.show_label = /*show_label*/
        f[5]), c & /*pending*/
        64 && (d.pending = /*pending*/
        f[6]), c & /*gradio*/
        16384 && (d.i18n = /*gradio*/
        f[14].i18n), c & /*$$scope, gradio*/
        16793600 && (d.$$scope = { dirty: c, ctx: f }), !i && c & /*value*/
        1 && (i = !0, d.value = /*value*/
        f[0], Gl(() => i = !1)), r.$set(d);
      },
      i(f) {
        s || (yt(t.$$.fragment, f), yt(r.$$.fragment, f), s = !0);
      },
      o(f) {
        vt(t.$$.fragment, f), vt(r.$$.fragment, f), s = !1;
      },
      d(f) {
        f && zl(n), pt(t, f), pt(r, f);
      }
    }
  );
}
function eu(e) {
  let t, n;
  return t = new Li({
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
        e[15] ? "focus" : "base"
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
        e[7] || ur
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
      $$slots: { default: [$l] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      gt(t.$$.fragment);
    },
    m(r, i) {
      bt(t, r, i), n = !0;
    },
    p(r, [i]) {
      const s = {};
      i & /*visible*/
      8 && (s.visible = /*visible*/
      r[3]), i & /*value*/
      1 && (s.variant = /*value*/
      r[0] === null ? "dashed" : "solid"), i & /*dragging*/
      32768 && (s.border_mode = /*dragging*/
      r[15] ? "focus" : "base"), i & /*elem_id*/
      2 && (s.elem_id = /*elem_id*/
      r[1]), i & /*elem_classes*/
      4 && (s.elem_classes = /*elem_classes*/
      r[2]), i & /*height*/
      128 && (s.height = /*height*/
      r[7] || ur), i & /*width*/
      256 && (s.width = /*width*/
      r[8]), i & /*container*/
      512 && (s.container = /*container*/
      r[9]), i & /*scale*/
      1024 && (s.scale = /*scale*/
      r[10]), i & /*min_width*/
      2048 && (s.min_width = /*min_width*/
      r[11]), i & /*$$scope, root, label, show_label, pending, gradio, value, dragging, loading_status*/
      16838769 && (s.$$scope = { dirty: i, ctx: r }), t.$set(s);
    },
    i(r) {
      n || (yt(t.$$.fragment, r), n = !0);
    },
    o(r) {
      vt(t.$$.fragment, r), n = !1;
    },
    d(r) {
      pt(t, r);
    }
  };
}
const ur = 340;
function tu(e, t, n) {
  let { elem_id: r = "" } = t, { elem_classes: i = [] } = t, { visible: s = !0 } = t, { value: o = [null, null] } = t, { label: a } = t, { show_label: u } = t, { pending: l } = t, { height: f } = t, { width: c } = t, { container: h = !0 } = t, { scale: d = null } = t, { min_width: m = void 0 } = t, { loading_status: p } = t, { root: y } = t, { gradio: S } = t, H;
  function _(T) {
    o = T, n(0, o);
  }
  const E = () => S.dispatch("edit"), b = () => S.dispatch("clear"), V = () => S.dispatch("stream"), G = ({ detail: T }) => n(15, H = T), te = () => S.dispatch("upload"), se = ({ detail: T }) => S.dispatch("select", T), Z = ({ detail: T }) => S.dispatch("share", T);
  return e.$$set = (T) => {
    "elem_id" in T && n(1, r = T.elem_id), "elem_classes" in T && n(2, i = T.elem_classes), "visible" in T && n(3, s = T.visible), "value" in T && n(0, o = T.value), "label" in T && n(4, a = T.label), "show_label" in T && n(5, u = T.show_label), "pending" in T && n(6, l = T.pending), "height" in T && n(7, f = T.height), "width" in T && n(8, c = T.width), "container" in T && n(9, h = T.container), "scale" in T && n(10, d = T.scale), "min_width" in T && n(11, m = T.min_width), "loading_status" in T && n(12, p = T.loading_status), "root" in T && n(13, y = T.root), "gradio" in T && n(14, S = T.gradio);
  }, e.$$.update = () => {
    e.$$.dirty & /*value*/
    1 && n(0, o = o || null), e.$$.dirty & /*value, gradio*/
    16385 && S.dispatch("change");
  }, [
    o,
    r,
    i,
    s,
    a,
    u,
    l,
    f,
    c,
    h,
    d,
    m,
    p,
    y,
    S,
    H,
    _,
    E,
    b,
    V,
    G,
    te,
    se,
    Z
  ];
}
class au extends Fl {
  constructor(t) {
    super(), Wl(this, t, tu, eu, Ql, {
      elem_id: 1,
      elem_classes: 2,
      visible: 3,
      value: 0,
      label: 4,
      show_label: 5,
      pending: 6,
      height: 7,
      width: 8,
      container: 9,
      scale: 10,
      min_width: 11,
      loading_status: 12,
      root: 13,
      gradio: 14
    });
  }
  get elem_id() {
    return this.$$.ctx[1];
  }
  set elem_id(t) {
    this.$$set({ elem_id: t }), z();
  }
  get elem_classes() {
    return this.$$.ctx[2];
  }
  set elem_classes(t) {
    this.$$set({ elem_classes: t }), z();
  }
  get visible() {
    return this.$$.ctx[3];
  }
  set visible(t) {
    this.$$set({ visible: t }), z();
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(t) {
    this.$$set({ value: t }), z();
  }
  get label() {
    return this.$$.ctx[4];
  }
  set label(t) {
    this.$$set({ label: t }), z();
  }
  get show_label() {
    return this.$$.ctx[5];
  }
  set show_label(t) {
    this.$$set({ show_label: t }), z();
  }
  get pending() {
    return this.$$.ctx[6];
  }
  set pending(t) {
    this.$$set({ pending: t }), z();
  }
  get height() {
    return this.$$.ctx[7];
  }
  set height(t) {
    this.$$set({ height: t }), z();
  }
  get width() {
    return this.$$.ctx[8];
  }
  set width(t) {
    this.$$set({ width: t }), z();
  }
  get container() {
    return this.$$.ctx[9];
  }
  set container(t) {
    this.$$set({ container: t }), z();
  }
  get scale() {
    return this.$$.ctx[10];
  }
  set scale(t) {
    this.$$set({ scale: t }), z();
  }
  get min_width() {
    return this.$$.ctx[11];
  }
  set min_width(t) {
    this.$$set({ min_width: t }), z();
  }
  get loading_status() {
    return this.$$.ctx[12];
  }
  set loading_status(t) {
    this.$$set({ loading_status: t }), z();
  }
  get root() {
    return this.$$.ctx[13];
  }
  set root(t) {
    this.$$set({ root: t }), z();
  }
  get gradio() {
    return this.$$.ctx[14];
  }
  set gradio(t) {
    this.$$set({ gradio: t }), z();
  }
}
export {
  au as default
};
