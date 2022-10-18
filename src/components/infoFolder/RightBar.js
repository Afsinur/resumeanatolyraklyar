//json data
import jsonData from "../json/data.json";

const RightBar = () => {
  let { achievements, projects, education } = jsonData;

  return (
    <div
      data-middle-container
      className="o-flw-x-h h-100% b-rds-40px bg-#fff p-30px"
    >
      <div data-middle-rt-w className="min-w-230px">
        <div className="fs-1.5rem fw-600 cl-#1f1c2e">Experience</div>

        {projects.map(({ link, company, date, summary, highlights }, i) => (
          <div key={i} className="m-10px-0-20px-0">
            <div className="fs-1.2rem fw-600 m-5px-0">
              <a className="tx-u cl-#303030" href={link}>
                {company}
              </a>
            </div>
            <div className="m-5px-0 cl-#888">{date}, 2020</div>
            <div className="m-5px-0 cl-#666">{summary}</div>
            <div className="m-10px-0 fw-600 cl-#363636">{highlights}</div>
          </div>
        ))}
      </div>

      <div>
        <div className="fs-1.5rem fw-600 cl-#1f1c2e">Education</div>

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
            <div key={i} className="m-10px-0">
              <div className="fs-1.2rem" style={{ color: institutionColor }}>
                {institutionFirstPart}
                {institutionSecondPart}
              </div>
              <div className="cl-#505050">{area}</div>
              <div className="cl-#303030 fw-600 m-10px-0-0-0">{studyType}</div>
              <div className="cl-#888">
                {startDate}, 2020 - {endDate}, 2020
              </div>
            </div>
          )
        )}
      </div>

      <div className="m-30px-0">
        <div className="fs-1.5rem fw-600 cl-#1f1c2e">Achievements</div>

        {achievements.map(({ link, head, desc }, i) => (
          <div key={i} className="m-10px-0">
            <div>
              <a className="tx-u cl-#303030 fw-600 fs-1.15rem" href={link}>
                {desc}
              </a>
            </div>
            <div className="cl-#787878">{head}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightBar;
