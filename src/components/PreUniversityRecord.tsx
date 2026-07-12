import {
  preUniversityAchievements,
  preUniversityArchivePeriod,
  preUniversityPhotoEvidence,
} from "../content";

export function PreUniversityRecord() {
  const [grade10, grade11, grade12, regionalFirst, nationalFinal, aprilOlympiad] = preUniversityAchievements;

  return (
    <section className="foundation-section foundation-archive-section" aria-labelledby="foundation-title">
      <div className="foundation-main">
        <div className="foundation-heading">
          <div>
            <p className="foundation-indexline">02 / PRE-UNIVERSITY RECORD · {preUniversityArchivePeriod}</p>
            <p className="foundation-kicker">Informatics competition record</p>
            <h2 id="foundation-title">A record built before university.</h2>
          </div>
          <p>
            The competition record that shaped the algorithmic discipline behind my current work
            at HCMUS.
          </p>
        </div>

        <div className="foundation-archive">
          <div className="foundation-photo-diptych" aria-label="Competition archive photographs">
            <figure>
              <img
                src={preUniversityPhotoEvidence[0].src}
                alt="Student competition delegation standing at the entrance of a specialist high school"
                width="1800"
                height="1350"
                decoding="async"
              />
              <figcaption>
                <span>{preUniversityPhotoEvidence[0].label}</span>
                <p>{preUniversityPhotoEvidence[0].description}</p>
              </figcaption>
            </figure>
            <figure>
              <img
                src={preUniversityPhotoEvidence[1].src}
                alt="Student Informatics delegation at the 28th Traditional April 30 Olympiad in Vũng Tàu"
                width="1800"
                height="1350"
                decoding="async"
              />
              <figcaption>
                <span>{preUniversityPhotoEvidence[1].label}</span>
                <p>{preUniversityPhotoEvidence[1].description}</p>
              </figcaption>
            </figure>
          </div>

          <div className="foundation-record-ledger">
            <article className="foundation-progression">
              <div className="foundation-card-topline">
                <span>01 / PROGRESSION</span>
                <span>{preUniversityArchivePeriod}</span>
              </div>
              <p className="foundation-card-kicker">Provincial selection examination</p>
              <h3>Three years of steady progression.</h3>
              <ol className="foundation-years">
                {[grade10, grade11, grade12].map((achievement) => (
                  <li key={achievement.context}>
                    <span>{achievement.context.replace("Informatics · ", "")}</span>
                    <strong>{achievement.award}</strong>
                    <small>Informatics</small>
                  </li>
                ))}
              </ol>
            </article>

            <article className="foundation-feature">
              <div className="foundation-card-topline">
                <span>02 / NATIONAL YOUTH INFORMATICS</span>
                <span>2024</span>
              </div>
              <p className="foundation-card-kicker">The 30th National Young Informatics Contest</p>
              <p className="foundation-feature-award">{regionalFirst.award}</p>
              <h3>Central Region · Table C2</h3>
              <p className="foundation-feature-summary">
                Advanced to the national finals as Ninh Thuận’s sole representative in the C2 division.
              </p>
              {regionalFirst.href ? (
                <a className="foundation-source" href={regionalFirst.href} target="_blank" rel="noreferrer">
                  Read official announcement <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </article>
          </div>

          <div className="foundation-proof-strip" aria-label="Additional verified distinctions">
            <article>
              <span>03 / NATIONAL FINALS · 2024</span>
              <p>The 30th National Young Informatics Contest</p>
              <strong>{nationalFinal.award}</strong>
            </article>
            <article>
              <span>04 / OLYMPIAD · 2024</span>
              <p>The 28th Traditional April 30 Olympiad · Informatics</p>
              <strong>{aprilOlympiad.award}</strong>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
