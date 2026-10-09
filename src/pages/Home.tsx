function Home() {
  return (
    <main>
      <section className="hero">
        <div className="wrap">
          <div>
            <h1>Every learner deserves a full school bag.</h1>
            <p>
              Mga Munting Kamay is a non-profit that gives school supplies and small
              scholarships to public school students in Central Luzon, so no
              child has to skip class over a missing notebook or a lack of fare. It also 
              helps children be guided in their spiritual journey through the study of 
              the Bible and other Christian books.
            </p>
            <a className="btn" href="#give">Donate now</a>
            <a className="btn alt" href="#programs">See our programs</a>
          </div>
          <svg
            viewBox="0 0 200 200"
            role="img"
            aria-label="A pencil resting on an open notebook"
          >
            <rect x="20" y="70" width="160" height="100" rx="8" fill="#fff" stroke="#14304a" strokeWidth="5" />
            <line x1="100" y1="70" x2="100" y2="170" stroke="#14304a" strokeWidth="4" />
            <g stroke="#2f8f6b" strokeWidth="3" strokeLinecap="round">
              <line x1="35" y1="95" x2="85" y2="95" />
              <line x1="35" y1="115" x2="85" y2="115" />
              <line x1="35" y1="135" x2="85" y2="135" />
              <line x1="115" y1="95" x2="165" y2="95" />
              <line x1="115" y1="115" x2="165" y2="115" />
              <line x1="115" y1="135" x2="150" y2="135" />
            </g>
            <g transform="rotate(-35 100 60)">
              <rect x="40" y="48" width="110" height="22" fill="#f2c230" stroke="#14304a" strokeWidth="4" />
              <polygon points="150,48 178,59 150,70" fill="#f5deb3" stroke="#14304a" strokeWidth="4" />
              <rect x="40" y="48" width="16" height="22" fill="#e58a8a" stroke="#14304a" strokeWidth="4" />
            </g>
          </svg>
        </div>
      </section>

      <section id="programs">
        <div className="wrap">
          <h2>What we give</h2>
          <p>Three simple programs, each aimed at a real reason students fall behind.</p>
          <div className="grid">
            <div className="card">
              <h3>Bag Ready</h3>
              <p>
                A bag with notebooks, mini notebooks with daily verses, pens, pencils, a ruler and crayons,
                handed out before every school year opens.
              </p>
            </div>
            <div className="card">
              <h3>Aral Fund</h3>
              <p>
                A small yearly scholarship that covers projects, printing fees
                and daily transportation for students in need.
              </p>
            </div>
            <div className="card">
              <h3>Spiritual Study Corner</h3>
              <p>
                A shelf of donated books, along with bibles and a quiet table for homework inside
                partner barangay halls and churches.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2>How your donation reaches a student</h2>
          <ol className="steps">
            <li>
              <strong>You give</strong>
              Donate money, spiritual books, and school supplies through any channel below.
            </li>
            <li>
              <strong>We pack and match</strong>
              Volunteers sort supplies and match them to students nominated by
              their teachers.
            </li>
            <li>
              <strong>We hand it over</strong>
              Bags and scholarships are given in person at school, and every
              donor gets a photo update.
            </li>
          </ol>
        </div>
      </section>

      <section id="give">
        <div className="wrap">
          <h2>Ways to give</h2>
          <div className="grid">
            <div className="card">
              <h3>Give money</h3>
              <p>
                Any amount helps. Message us to receive our donation details
                and an official receipt.
              </p>
            </div>
            <div className="card">
              <h3>Give supplies</h3>
              <p>
                Bring new notebooks, pens and bags to our drop-off point, or
                ask us to pick up bulk donations.
              </p>
            </div>
            <div className="card">
              <h3>Give time</h3>
              <p>
                Join our weekend packing sessions and help get bags ready for
                distribution day.
              </p>
            </div>
            <div className="card">
              <h3>Give testimony</h3>
              <p>
                Share your story of how our God have impacted your life or the lives of others.
              </p>
            </div>
          </div>
          <p style={{ marginTop: "1.5rem" }}>
            Questions? Email <a href="mailto:hello@muntingkamay.org">hello@muntingkamay.org</a>.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;