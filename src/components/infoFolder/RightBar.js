//json data
import jsonData from "../json/data.json";

//js file
import selectors from "../js/selectors";

//img files
import star from "../img/star.png";
import fillStar from "../img/fill-star.png";

const RightBar = () => {
  let { achievements, work, education } = jsonData;
  let { qs_a, add, remove, mk_arr } = selectors;

  const alters = (e) => {
    mk_arr(qs_a("[data-highlight]")).forEach((cl, i) => {
      if (e === i) {
        add(cl, "tx-u");
      } else {
        remove(cl, "tx-u");
      }
    });

    mk_arr(qs_a("[data-alters]")).forEach((cl, i) => {
      if (e === i) {
        remove(cl, "d-n");
      } else {
        add(cl, "d-n");
      }
    });
  };

  const fillStarF = () => {
    mk_arr(qs_a("[data-fill-star]")).forEach((cl, i) => {
      if (cl.dataset.fillStar === "true") {
        cl.src = fillStar;
      } else {
        cl.src = star;
      }
    });
  };

  const month_ = (e) => {
    let month = "";
    let month_names = {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December",
    };

    return (month = month_names[e]);
  };

  return (
    <div
      data-middle-container
      className="o-flw-x-h h-100% b-rds-40px bg-#fff p-30px-0px w-100%"
    >
      <div data-middle-rt-w className="min-w-230px w-100%">
        <div className="d-flx flx-x x-x-c x-y-c m-0-0-30px-0">
          <div
            data-highlight
            className="fs-1vw m-0-5px fw-600 cl-#1f1c2e tx-u crs-p"
            onClick={() => {
              alters(0);
            }}
          >
            Experience
          </div>

          <div
            data-highlight
            className="fs-1vw m-0-5px fw-600 cl-#1f1c2e crs-p"
            onClick={() => {
              alters(1);
            }}
          >
            Education
          </div>

          <div
            data-highlight
            className="fs-1vw m-0-5px fw-600 cl-#1f1c2e crs-p"
            onClick={() => {
              alters(2);
            }}
          >
            Achievements
          </div>
        </div>

        <div data-alters>
          {work.map(({ company, start, end, summary, highlights }, i) => (
            <div key={i} className="p-16px">
              <div className="w-100% fs-16px fw-600 p-5px-0-30px-0 d-flx flx-x x-x-jc-sb x-y-s">
                <span className="cl-#303030dd mx-w-80%">{company}</span>

                <img
                  data-fill-star="false"
                  onClick={(e) => {
                    if (e.target.dataset.fillStar === "false") {
                      e.target.dataset.fillStar = "true";
                    } else {
                      e.target.dataset.fillStar = "false";
                    }

                    fillStarF();
                  }}
                  src={star}
                  alt={star}
                />
              </div>

              <div className="m-10px-0 cl-#888888cc w-100% tx-r fs-14px">
                {`${month_(Number(start.month))}, ${
                  start.year <= 22 ? `20${start.year}` : `19${start.year}`
                }`}
                {` - `}
                {`${month_(Number(end.month))}, ${
                  end.year <= 22 ? `20${end.year}` : `19${end.year}`
                }`}
              </div>

              <div className="m-5px-0 cl-#717171cc fs-14px">{summary}</div>

              <div className="m-10px-0 fw-600 cl-#363636cc fs-14px">
                {highlights}
              </div>
            </div>
          ))}
        </div>

        <div data-alters className="d-n">
          {education.map(
            (
              {
                institutionFirstPart,
                institutionSecondPart,
                institutionColor,
                area,
                studyType,
                startDate,
                endDate,
              },
              i
            ) => (
              <div key={i} className="p-16px">
                <div className="cl-#303030 fw-600 d-flx flx-x x-x-jc-sb x-y-c">
                  <span className="fs-16px cl-#303030dd">{studyType}</span>

                  <img
                    data-fill-star="false"
                    onClick={(e) => {
                      if (e.target.dataset.fillStar === "false") {
                        e.target.dataset.fillStar = "true";
                      } else {
                        e.target.dataset.fillStar = "false";
                      }

                      fillStarF();
                    }}
                    src={star}
                    alt={star}
                  />
                </div>

                <div className="cl-#888888cc tx-r m-10px-0 fs-14px">
                  {`${month_(Number(startDate.split("/")[0]))}, ${
                    startDate.split("/")[1] <= 22
                      ? `20${startDate.split("/")[1]}`
                      : `19${startDate.split("/")[1]}`
                  }`}
                  {` - `}
                  {`${month_(Number(endDate.split("/")[0]))}, ${
                    endDate.split("/")[1] <= 22
                      ? `20${endDate.split("/")[1]}`
                      : `19${endDate.split("/")[1]}`
                  }`}
                </div>

                <div
                  className="m-5px-0 cl-#717171cc fs-14px"
                  style={{ color: institutionColor }}
                >
                  {institutionFirstPart}
                  {institutionSecondPart}
                </div>

                <div className="m-10px-0 fw-600 cl-#363636cc fs-14px">
                  {area}
                </div>
              </div>
            )
          )}
        </div>

        <div data-alters className="d-n">
          {achievements.map(({ link, head, desc }, i) => (
            <div key={i} className="p-16px">
              <div className="d-flx flx-x x-x-jc-sb x-y-c">
                <a className="tx-n cl-#303030dd fw-600 fs-16px" href={link}>
                  {desc}
                </a>

                <img
                  data-fill-star="false"
                  onClick={(e) => {
                    if (e.target.dataset.fillStar === "false") {
                      e.target.dataset.fillStar = "true";
                    } else {
                      e.target.dataset.fillStar = "false";
                    }

                    fillStarF();
                  }}
                  src={star}
                  alt={star}
                />
              </div>
              <div className="cl-#717171dd fs-14px">{head}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
