import listView from "../img/list-view.png";
import gridView from "../img/grid-view.png";

//js file
import selectors from "../js/selectors";

//json data
import jsonData from "../json/data.json";

const MiddleBar = () => {
  let { qs_a, add, remove, mk_arr, css } = selectors;
  let { skills } = jsonData;

  const toggleActiveBlk = (e, e1) => {
    const listView_ = (style) => {
      mk_arr(qs_a("[data-tiles-1]")).forEach((cl) => {
        css(cl, { width: style });
      });
    };

    if (e === 0) {
      listView_("100%");
    } else {
      listView_("230px");
    }

    mk_arr(qs_a(e1)[0].children).forEach(({}, i) => {
      if (e === i) {
        add(qs_a(e1)[0].children[e], "active-blk");
      } else {
        remove(qs_a(e1)[0].children[i], "active-blk");
      }
    });
  };

  const randomColor = () => {
    let color = ``;
    let colorsArr = ["6", "a", "b", "c", "d", "e", "f", "7", "8"];

    color = `#${colorsArr[Math.ceil(Math.random() * 8)]}${
      colorsArr[Math.ceil(Math.random() * 8)]
    }${colorsArr[Math.ceil(Math.random() * 8)]}${
      colorsArr[Math.ceil(Math.random() * 8)]
    }${colorsArr[Math.ceil(Math.random() * 8)]}${
      colorsArr[Math.ceil(Math.random() * 8)]
    }a1`;

    return color;
  };

  return (
    <div className="h-100% p-30px b-rds-40px bg-#fff">
      <div className="d-flx flx-x x-x-jc-sb">
        <div className="fs-1.3rem fw-600 cl-#1f1c2e">Projects</div>
        <div className="fs-1.3rem fw-600 cl-#1f1c2e">December, 12</div>
      </div>

      <div data-proj-amounts className="m-10px-0 d-flx flx-x x-x-jc-sb x-y-c">
        <div className="d-flx">
          <div className="m-0-20px-0-0">
            <h2 className="cl-#1f1c2e">45</h2>
            <p className="cl-#4a4a4a">
              In Progress <span>0</span>
            </p>
          </div>

          <div className="m-0-20px-0-0">
            <h2 className="cl-#1f1c2e">24</h2>
            <p className="cl-#4a4a4a">
              Upcoming <span>0</span>
            </p>
          </div>

          <div className="m-0-20px-0-0">
            <h2 className="cl-#1f1c2e">62</h2>
            <p className="cl-#4a4a4a">
              Total Projects <span>0</span>
            </p>
          </div>
        </div>

        <div className="view-mode d-flx">
          <div
            onClick={() => toggleActiveBlk(0, ".view-mode")}
            className=".content-c crs-p m-0-5px p-5px"
          >
            <img src={listView} alt={listView} className="w-24px" />
          </div>

          <div
            onClick={() => toggleActiveBlk(1, ".view-mode")}
            className=".content-c crs-p m-0-5px p-5px active-blk"
          >
            <img src={gridView} alt={gridView} className="w-24px" />
          </div>
        </div>
      </div>

      <div
        data-middle-mdl-3
        className="o-flw-x-h w-100% h-75% m-30px-0-0-0 d-flx flx-x x-y-s x-x-jc-sa flx-wrp"
      >
        {skills.map(({ name, keywords }) => {
          return keywords.map((key, i) => {
            let clr_ = randomColor();

            return (
              <div
                data-tiles-1
                key={i}
                className="w-230px m-10px-0 b-rds-20px p-15px d-flx flx-y"
                style={{ backgroundColor: clr_ }}
              >
                <p className="cl-#4a4a4a">December 10, 2020</p>
                <p className="tx-c fs-1.1rem fw-600 cl-#404040 m-20px-0">
                  {name}
                </p>
                <p className="m-10px-0 fw-600 cl-#212121">{key}</p>
                <hr className="m-5px-0 bg-#f00" />
                <p
                  className="tx-shd-1px-1px-1px-rgba(0,0,0,0.5) self-e tx-r bg-#ffffffa1 b-rds-20px p-5px-20px fs-0.8rem fw-600"
                  style={{ color: clr_.slice(0, clr_.length - 2) }}
                >
                  2 Years
                </p>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
};

export default MiddleBar;
