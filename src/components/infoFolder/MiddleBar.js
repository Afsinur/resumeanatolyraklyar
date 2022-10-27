import ReactTooltip from "react-tooltip";

import listView from "../img/list-view.png";
import gridView from "../img/grid-view.png";

//img
import dot3 from "../img/dot3.png";

//js file
import selectors from "../js/selectors";

//json data
import jsonData from "../json/data.json";

const MiddleBar = () => {
  let { qs_a, add, remove, mk_arr, css } = selectors;
  let { skills } = jsonData;
  let prgs_1 = skills[0]["in-progress"];
  let prgs_2 = skills[1]["in-progress"];
  let bg_colorsArr = [
    "#fee4cb",
    "#e9e7fd",
    "#dbf6fd",
    "#ffd3e2",
    "#c8f7dc",
    "#d5deff",
    "#fee4cb",
    "#e9e7fd",
    "#dbf6fd",
    "#ffd3e2",
    "#c8f7dc",
    "#d5deff",
    "#fee4cb",
    "#e9e7fd",
    "#dbf6fd",
    "#ffd3e2",
    "#c8f7dc",
    "#d5deff",
    "#fee4cb",
    "#e9e7fd",
    "#dbf6fd",
    "#ffd3e2",
    "#c8f7dc",
  ];
  let colorArr = [
    "#ff942e",
    "#4f3ff0",
    "#096c86",
    "#df3670",
    "#34c471",
    "#4067f9",
    "#ff942e",
    "#4f3ff0",
    "#096c86",
    "#df3670",
    "#34c471",
    "#4067f9",
    "#ff942e",
    "#4f3ff0",
    "#096c86",
    "#df3670",
    "#34c471",
    "#4067f9",
    "#ff942e",
    "#4f3ff0",
    "#096c86",
    "#df3670",
    "#34c471",
  ];

  const toggleActiveBlk = (e, e1) => {
    const listView_ = (style) => {
      mk_arr(qs_a("[data-tiles-1]")).forEach((cl) => {
        css(cl, { width: style });
      });
    };

    if (e === 0) {
      listView_("100%");

      //data-d-n
      mk_arr(qs_a("[data-d-n]")).forEach((cl) => {
        add(cl, "d-n");
      });

      //data-reArrange
      mk_arr(qs_a("[data-reArrange]")).forEach((cl) => {
        remove(cl, "d-n");
      });
    } else {
      listView_("32%");

      //data-d-n
      mk_arr(qs_a("[data-d-n]")).forEach((cl) => {
        remove(cl, "d-n");
      });

      //data-reArrange
      mk_arr(qs_a("[data-reArrange]")).forEach((cl) => {
        add(cl, "d-n");
      });
    }

    /*mk_arr(qs_a(e1)[0].children).forEach(({}, i) => {
      if (e === i) {
        add(qs_a(e1)[0].children[e], "active-blk");
      } else {
        remove(qs_a(e1)[0].children[i], "active-blk");
      }
    });*/
  };

  return (
    <div data-res-middle className="h-100% p-30px b-rds-40px bg-#fff">
      <div className="d-flx flx-x x-x-jc-sb">
        <div className="fs-1.45rem fw-600 cl-#1f1c2e">Projects</div>
        <div className="fs-1.45rem fw-600 cl-#1f1c2e">December, 12</div>
      </div>

      <div data-proj-amounts className="m-30px-0 d-flx flx-x x-x-jc-sb x-y-c">
        <div className="d-flx">
          <div className="m-0-20px-0-0">
            <h2 className="fw-700 fs-24px cl-#1f1c2e">{skills.length}</h2>
            <p className="fs-14px cl-#4a4a4acc">
              Total Projects <span>{skills.length}</span>
            </p>
          </div>
        </div>

        <div className="view-mode d-flx">
          <div
            data-tip="list-view"
            data-for="views"
            onClick={() => toggleActiveBlk(0, ".view-mode")}
            className="b-rds-10px content-c crs-p m-0-5px p-8px bg-#000"
          >
            <img src={listView} alt={listView} className="w-20px" />
          </div>

          <div
            data-tip="grid-view"
            data-for="views"
            onClick={() => toggleActiveBlk(1, ".view-mode")}
            className="b-rds-10px content-c crs-p m-0-5px p-8px bg-#000"
          >
            <img src={gridView} alt={gridView} className="w-20px" />
          </div>
        </div>
      </div>

      <div
        data-middle-mdl-3
        className="o-flw-x-h w-100% h-78% m-30px-0-0-0 d-flx flx-x x-y-s x-x-jc-sa flx-wrp"
      >
        {skills.map(({ name, keywords: key, progress }, i) => {
          let clr_bg = bg_colorsArr[i];
          let clr_ = colorArr[i];

          return (
            <div
              data-tiles-1
              key={i}
              className="o-flw-h ps-r w-32% m-5px-0 b-rds-30px p-15px d-flx flx-y"
              style={{ backgroundColor: clr_bg }}
            >
              <p data-d-n className="w-100% cl-#4a4a4a99">
                <span className="fs-14px">December 10, 2020</span>

                <span className="ps-a t-0 r-0 p-15px">
                  <img src={dot3} alt={dot3} />
                </span>
              </p>

              <p data-d-n className="tx-c fs-1rem fw-600 cl-#00000099 m-20px-0">
                {name}
              </p>

              <p data-d-n className="m-2px-0 fw-600 cl-#212121 fs-14px">
                {key}
              </p>

              <p data-d-n className="h-4px w-100% m-5px-0-10px-0">
                <div className="h-100% w-100% bg-#fff o-flw-h b-rds-30px">
                  <div
                    className="h-100%"
                    style={{
                      backgroundColor: clr_,
                      width: `${progress}%`,
                    }}
                  ></div>
                </div>

                <div className="w-100% tx-r fs-14px fw-700 m-2px-0-0-0">{`${progress}%`}</div>
              </p>

              <hr
                data-d-n
                className="m-5px-0 bg-rgba(255,255,255,0.6) br-1px h-1px w-100% ps-a b-50px"
              />

              <p
                data-d-n
                className="fs-12px self-e tx-r bg-#ffffffa1 b-rds-20px p-2px-20px fw-700 m-35px-0-0-0"
                style={{ color: clr_ }}
              >
                2 Years
              </p>

              <div className="d-n d-flx flx-x x-x-s w-100%" data-reArrange>
                <span className="ps-a t-0 r-0 p-15px">
                  <img src={dot3} alt={dot3} />
                </span>

                <div className="m-0-25px-0-0">
                  <p className="fs-1rem fw-600 cl-#00000099 m-5px-0">{name}</p>

                  <p className="w-100% cl-#4a4a4a99">
                    <span className="fs-14px">December 10, 2020</span>
                  </p>
                </div>

                <div className="d-flx flx-y y-x-c y-y-c">
                  <p className="fw-600 cl-#212121 fs-14px">{key}</p>

                  <p className="h-4px w-15vw m-5px-0-10px-0">
                    <div className="h-100% w-100% bg-#fff o-flw-h b-rds-30px">
                      <div
                        className="h-100%"
                        style={{
                          backgroundColor: clr_,
                          width: `${progress}%`,
                        }}
                      ></div>
                    </div>

                    <div className="w-100% tx-r fs-14px fw-700 m-2px-0-0-0">{`${progress}%`}</div>
                  </p>
                </div>

                <p
                  data-reArrange-res
                  className="fs-12px bg-#ffffffa1 b-rds-20px p-5px-20px fw-700 m-20px-0-0-0 ps-a b-10px r-30px"
                  style={{ color: clr_ }}
                >
                  2 Years
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <ReactTooltip id="views" />
    </div>
  );
};

export default MiddleBar;
