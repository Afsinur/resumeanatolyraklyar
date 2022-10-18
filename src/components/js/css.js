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

//! for css class based

//! width = w-
//! height = h-
//! background-color = bg-
//! padding = p-
//! margin = m-
//! color = cl-
//! font-size = fs-
//! font-weight = fw-
//! border-radius = b-rds-
//! border = br-

//! top = t-
//! right = r-
//! bottom = b-
//! left = l-
//! box-shadow = bx-shd-
//! text-shadow = tx-shd-

const cssJs = () => {
  for (let i = 0; i < document.getElementsByTagName("*").length; i++) {
    const el = document.getElementsByTagName("*")[i];

    //width
    let mtc = "w-";
    let arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        css(el, { width: splt[1] });
      }
    }

    //height
    mtc = "h-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        css(el, { height: splt[1] });
      }
    }

    //border-radius
    mtc = "b-rds-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        css(el, { "border-radius": splt[1] });
      }
    }

    //border
    mtc = "br-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);
        let sprt = splt[1].split("-");

        if (sprt.length === 1) {
          css(el, { border: `${sprt[0]}` });
        } else if (sprt.length === 3) {
          css(el, { border: `${sprt[0]} ${sprt[1]} ${sprt[2]}` });
        }
      }
    }

    //background-color
    mtc = "bg-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        css(el, { "background-color": splt[1] });
      }
    }

    //color
    mtc = "cl-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        css(el, { color: splt[1] });
      }
    }

    //font-size
    mtc = "fs-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        css(el, { "font-size": splt[1] });
      }
    }

    //font-weight
    mtc = "fw-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        css(el, { "font-weight": splt[1] });
      }
    }

    //padding
    mtc = "p-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);
        let sprt = splt[1].split("-");

        if (sprt.length === 1) {
          css(el, {
            padding: `${sprt[0]} `,
          });
        } else if (sprt.length === 2) {
          css(el, {
            padding: `${sprt[0]} ${sprt[1]}`,
          });
        } else if (sprt.length === 4) {
          css(el, {
            padding: `${sprt[0]} ${sprt[1]} ${sprt[2]} ${sprt[3]}`,
          });
        }
      }
    }

    //margin
    mtc = "m-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);
        let sprt = splt[1].split("-");

        if (sprt.length === 1) {
          css(el, {
            margin: `${sprt[0]} `,
          });
        } else if (sprt.length === 2) {
          css(el, {
            margin: `${sprt[0]} ${sprt[1]}`,
          });
        } else if (sprt.length === 4) {
          css(el, {
            margin: `${sprt[0]} ${sprt[1]} ${sprt[2]} ${sprt[3]}`,
          });
        }
      }
    }

    //top
    mtc = "t-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        css(el, { top: splt[1] });
      }
    }

    //right
    mtc = "r-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        css(el, { right: splt[1] });
      }
    }

    //bottom
    mtc = "b-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        css(el, { bottom: splt[1] });
      }
    }

    //left
    mtc = "l-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        css(el, { left: splt[1] });
      }
    }

    //box-shadow
    mtc = "bx-shd-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);
        let sprt = splt[1].split("-");

        css(el, {
          "box-shadow": ` ${sprt[0]} ${sprt[1]} ${sprt[2]} ${sprt[3]} ${sprt[4]} `,
        });
      }
    }

    //text-shadow
    mtc = "tx-shd-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);
        let sprt = splt[1].split("-");

        css(el, {
          "text-shadow": ` ${sprt[0]} ${sprt[1]} ${sprt[2]} ${sprt[3]}`,
        });
      }
    }

    //min-w-
    mtc = "min-w-";
    arr = mk_arr(el.classList);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(mtc) >= 0) {
        let splt = arr[i].split(mtc);

        css(el, {
          "min-width": splt[1],
        });
      }
    }
  }
};

export default cssJs;
