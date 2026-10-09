import profilePhoto from "../assets/Elisha.png";

function About() {
  return (
    <main>
      <section>
        <div className="wrap profile">
          <img className="avatar" src={profilePhoto} alt="Elisha Tabual" />
          <div>
            <h1>Hi, I'm Elisha.</h1>
            <p>
              I'm Elisha N. Tabual, a third-year BSIT student at Angeles
              University Foundation (section BSIT-3B) and I specialize in
              IT Infrastructure.
            </p>
            <p>
              I am 21 years old who was born on March 15, 2005 here in
              Angeles City, Pampanga. I have an older sister and I have
              two cute cats.
            </p>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2>What I'm into</h2>
          <p>
            I am just a simple girl who likes to play volleyball, watch anime and kdrama, 
            and play musical instruments. I also like to spend time with my family and friends, 
            and I love kids. My love for children grew stronger as I started to be more involved 
            in my church's children outreach ministry. I also enjoy taking care of animals, 
            especially cats and dogs.
          </p>
          <ul className="tags">
            <li>Cats</li>
            <li>Dogs</li>
            <li>Volleyball</li>
            <li>Anime & Kdrama</li>
            <li>Kids</li>
            <li>Instruments & Music</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>My school journey</h2>
          <ol className="steps">
            <li>
              <strong>
                Claro M. Recto Information and Communication Technology High
                School
              </strong>
              Junior High School
            </li>
            <li>
              <strong>Angeles City Science High School</strong>
              Senior High School
            </li>
            <li>
              <strong>Angeles University Foundation</strong>
              Bachelor of Science in Information Technology, now in 3rd year
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}

export default About;