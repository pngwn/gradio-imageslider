const {
  SvelteComponent: y,
  append: m,
  attr: n,
  detach: b,
  element: u,
  init: k,
  insert: p,
  noop: w,
  safe_not_equal: h,
  space: o,
  src_url_equal: v,
  toggle_class: f
} = window.__gradio__svelte__internal;
function q(a) {
  let e, l, _, g, i, c, s, d;
  return {
    c() {
      e = u("div"), l = u("img"), g = o(), i = u("img"), s = o(), d = u("span"), v(l.src, _ = /*samples_dir*/
      a[1] + /*value*/
      a[0][0]) || n(l, "src", _), n(l, "class", "svelte-l4wpk0"), v(i.src, c = /*samples_dir*/
      a[1] + /*value*/
      a[0][1]) || n(i, "src", c), n(i, "class", "svelte-l4wpk0"), n(d, "class", "svelte-l4wpk0"), n(e, "class", "wrap svelte-l4wpk0"), f(
        e,
        "table",
        /*type*/
        a[2] === "table"
      ), f(
        e,
        "gallery",
        /*type*/
        a[2] === "gallery"
      ), f(
        e,
        "selected",
        /*selected*/
        a[3]
      );
    },
    m(t, r) {
      p(t, e, r), m(e, l), m(e, g), m(e, i), m(e, s), m(e, d);
    },
    p(t, [r]) {
      r & /*samples_dir, value*/
      3 && !v(l.src, _ = /*samples_dir*/
      t[1] + /*value*/
      t[0][0]) && n(l, "src", _), r & /*samples_dir, value*/
      3 && !v(i.src, c = /*samples_dir*/
      t[1] + /*value*/
      t[0][1]) && n(i, "src", c), r & /*type*/
      4 && f(
        e,
        "table",
        /*type*/
        t[2] === "table"
      ), r & /*type*/
      4 && f(
        e,
        "gallery",
        /*type*/
        t[2] === "gallery"
      ), r & /*selected*/
      8 && f(
        e,
        "selected",
        /*selected*/
        t[3]
      );
    },
    i: w,
    o: w,
    d(t) {
      t && b(e);
    }
  };
}
function I(a, e, l) {
  let { value: _ } = e, { samples_dir: g } = e, { type: i } = e, { selected: c = !1 } = e;
  return a.$$set = (s) => {
    "value" in s && l(0, _ = s.value), "samples_dir" in s && l(1, g = s.samples_dir), "type" in s && l(2, i = s.type), "selected" in s && l(3, c = s.selected);
  }, [_, g, i, c];
}
class C extends y {
  constructor(e) {
    super(), k(this, e, I, q, h, {
      value: 0,
      samples_dir: 1,
      type: 2,
      selected: 3
    });
  }
}
export {
  C as default
};
