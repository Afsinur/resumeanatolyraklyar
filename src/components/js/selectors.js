const qs_a = (sl) => document.querySelectorAll(sl);
const on = (sl, e, f) => sl.addEventListener(e, f);
const css = (el, obj) => Object.assign(el.style, obj);
const mk = (el) => document.createElement(el);
const append = (p, c) => p.appendChild(c);
const attr = (sl, n, v) => sl.setAttribute(n, v);
const rmv_attr = (sl, n, v) => sl.removeAttribute(n, v);
const add = (el, cls) => el.classList.add(cls);
const remove = (el, cls) => el.classList.remove(cls);
const mk_arr = (tmpArr) => Array.from(tmpArr);

export default {
  qs_a,
  on,
  css,
  mk,
  append,
  attr,
  rmv_attr,
  add,
  remove,
  mk_arr,
};
