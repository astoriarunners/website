import Image from "next/image";
import Header from "./header";
import Footer from "./footer";
import ARLogo from "../images/ar-logo-white.svg";
import Hero from "../images/homepage-hero.jpg";
import Interval from "../images/interval.png";
import IntervalThumb from "../images/interval-thumb.png";
import Weekly from "../images/weekly.png";
import WeeklyThumb from "../images/weekly-thumb.png";
import '../styles/style.css';
import '../styles/fancybox.css';

export default function Home() {
  return (
    <>
      <body>
        <Header/>
        <main className="page-content">
          <div className="hero" style={{ backgroundImage: `url(${Hero.src})`, backgroundPosition: "middle" }}>
              <Image src={ARLogo} alt="" width={0} height={0}/>
              <span><b>Come run and hang with the happiest run club in NYC.</b></span>
              <span>Our group runs, rides bikes, reads books, and generally has a good time.</span>
          </div>{ /*End hero */ }

          <section id="schedule">
          <div className="article">
              <h1>Run with us this July</h1>
              <p>July ‘24 schedule is here! We’re embracing summer with a beach trip 🏖️ 😎 See you there! Note the change in days for intervals and long runs.
                #astoriarunners
              </p>

                {/*<a className="img-modal" rel="tm" href="schedules/july-24.png" title="July Schedule">
                  <Image src="schedules/july-24-thumb.png" alt="July Schedule"/>
                </a>*/}

            <div id="ar-schedule">
              <div className="row">
                <span className="date">
                  <span className="day">Wed</span>
                  <span className="day-number">03</span>
                </span>
                <span className="time">
                  <span className="time-number">8</span>
                  <span className="ampm">pm</span>
                </span>
                <span className="run">
                  <span className="heading">Weekly Evening Run</span>
                  <span className="description">Around Astoria Park</span>
                </span>
                <span className="distance">
                  <span className="distance-number">3</span>
                  <span className="unit">m</span>
                </span>
              </div>
              <div className="row">
                <span className="date">
                  <span className="day">Fri</span>
                  <span className="day-number">05</span>
                </span>
                <span className="time">
                  <span className="time-number">7:30</span>
                  <span className="ampm">am</span>
                </span>
                <span className="run">
                  <span className="heading">Morning Interval Run</span>
                  <span className="description">Astoria Park Track</span>
                </span>
                <span className="distance">
                  <span className="distance-number">5x400</span>
                  <span className="unit"></span>
                </span>
              </div>
              <div className="row">
                <span className="date">
                  <span className="day">Sun</span>
                  <span className="day-number">07</span>
                </span>
                <span className="time">
                  <span className="time-number">7:30</span>
                  <span className="ampm">am</span>
                </span>
                <span className="run">
                  <span className="heading">Special Long Run / Beach Day 🏖️  😎</span>
                  <span className="description">Astoria to Brighton BEACH!</span>
                </span>
                <span className="distance">
                  <span className="distance-number">17</span>
                  <span className="unit">m</span>
                </span>
              </div>
              <div className="row">
                <span className="date">
                  <span className="day">Wed</span>
                  <span className="day-number">10</span>
                </span>
                <span className="time">
                  <span className="time-number">7</span>
                  <span className="ampm">pm</span>
                </span>
                <span className="run">
                  <span className="heading">Special Monthly Run / Brewery Meetup 🍺</span>
                  <span className="description">Astoria Park to SingleCut</span>
                </span>
                <span className="distance">
                  <span className="distance-number">3</span>
                  <span className="unit">m</span>
                </span>
              </div>
              <div className="row">
                <span className="date">
                  <span className="day">Fri</span>
                  <span className="day-number">12</span>
                </span>
                <span className="time">
                  <span className="time-number">7:30</span>
                  <span className="ampm">am</span>
                </span>
                <span className="run">
                  <span className="heading">Morning Interval Run</span>
                  <span className="description">Astoria Park Track</span>
                </span>
                <span className="distance">
                  <span className="distance-number">5x400</span>
                  <span className="unit"></span>
                </span>
              </div>
              <div className="row">
                <span className="date">
                  <span className="day">Sun</span>
                  <span className="day-number">14</span>
                </span>
                <span className="time">
                  <span className="time-number">7:30</span>
                  <span className="ampm">am</span>
                </span>
                <span className="run">
                  <span className="heading">Long Run</span>
                  <span className="description">Ditmars/Steinway</span>
                </span>
                <span className="distance">
                  <span className="distance-number">6</span>
                  <span className="unit">m</span>
                </span>
              </div>
              <div className="row">
                <span className="date">
                  <span className="day">Wed</span>
                  <span className="day-number">17</span>
                </span>
                <span className="time">
                  <span className="time-number">8</span>
                  <span className="ampm">pm</span>
                </span>
                <span className="run">
                  <span className="heading">Weekly Evening Run</span>
                  <span className="description">Around Astoria Park</span>
                </span>
                <span className="distance">
                  <span className="distance-number">3</span>
                  <span className="unit">m</span>
                </span>
              </div>
              <div className="row">
                <span className="date">
                  <span className="day">Fri</span>
                  <span className="day-number">19</span>
                </span>
                <span className="time">
                  <span className="time-number">7:30</span>
                  <span className="ampm">am</span>
                </span>
                <span className="run">
                  <span className="heading">Morning Interval Run</span>
                  <span className="description">Astoria Park Track</span>
                </span>
                <span className="distance">
                  <span className="distance-number">5x400</span>
                  <span className="unit"></span>
                </span>
              </div>
              <div className="row">
                <span className="date">
                  <span className="day">Sun</span>
                  <span className="day-number">21</span>
                </span>
                <span className="time">
                  <span className="time-number">7:30</span>
                  <span className="ampm">am</span>
                </span>
                <span className="run">
                  <span className="heading">Long Run / Coffee ☕</span>
                  <span className="description">Double Queensboro 10k + Partners Coffee</span>
                </span>
                <span className="distance">
                  <span className="distance-number">6</span>
                  <span className="unit">m</span>
                </span>
              </div>
              <div className="row">
                <span className="date">
                  <span className="day">Wed</span>
                  <span className="day-number">24</span>
                </span>
                <span className="time">
                  <span className="time-number">8</span>
                  <span className="ampm">pm</span>
                </span>
                <span className="run">
                  <span className="heading">Weekly Evening Run</span>
                  <span className="description">Around Astoria Park</span>
                </span>
                <span className="distance">
                  <span className="distance-number">3</span>
                  <span className="unit">m</span>
                </span>
              </div>
              <div className="row">
                <span className="date">
                  <span className="day">Thu</span>
                  <span className="day-number">25</span>
                </span>
                <span className="time">
                  <span className="time-number">7</span>
                  <span className="ampm">pm</span>
                </span>
                <span className="run">
                  <span className="heading">Special Monthly Run / Brewery Meetup 🍺</span>
                  <span className="description">Astoria Park to Focal Point Beer Co.</span>
                </span>
                <span className="distance">
                  <span className="distance-number">4</span>
                  <span className="unit">m</span>
                </span>
              </div>
              <div className="row">
                <span className="date">
                  <span className="day">Fri</span>
                  <span className="day-number">26</span>
                </span>
                <span className="time">
                  <span className="time-number">7:30</span>
                  <span className="ampm">am</span>
                </span>
                <span className="run">
                  <span className="heading">Morning Interval Run</span>
                  <span className="description">Astoria Park Track</span>
                </span>
                <span className="distance">
                  <span className="distance-number">5x400</span>
                  <span className="unit"></span>
                </span>
              </div>
              <div className="row">
                <span className="date">
                  <span className="day">Sun</span>
                  <span className="day-number">28</span>
                </span>
                <span className="time">
                  <span className="time-number">7:30</span>
                  <span className="ampm">am</span>
                </span>
                <span className="run">
                  <span className="heading">Long Run / Coffee ☕</span>
                  <span className="description">Randalls' Island South + Under Pressure Coffee</span>
                </span>
                <span className="distance">
                  <span className="distance-number">6</span>
                  <span className="unit">m</span>
                </span>
              </div>
              <div className="row">
                <span className="date">
                  <span className="day">Wed</span>
                  <span className="day-number">31</span>
                </span>
                <span className="time">
                  <span className="time-number">8</span>
                  <span className="ampm">pm</span>
                </span>
                <span className="run">
                  <span className="heading">Weekly Evening Run</span>
                  <span className="description">Around Astoria Park</span>
                </span>
                <span className="distance">
                  <span className="distance-number">3</span>
                  <span className="unit">m</span>
                </span>
              </div>
            </div> { /* End ar-Schedule */ }

            </div>{ /* end article */ }

            <div className=" container article">

              <div className="half">
                <h2>Weekly Evening Run</h2>
                <p>Join us for a 5k run that starts and finishes at Astoria Park track. We have 3 pace groups and stop halfway to rest and socialize before heading back to the park.</p>
                <a className="img-modal" rel="tm" href={Weekly.src} title="">
                  <Image className="maps" src={WeeklyThumb} alt="" width={328} height={0}/>
                </a>
              </div>

              <div className="half">
                <h2>Interval Track Run</h2>
                <p>Join us for a 45-minute interval run at the Astoria Park track. We meet afterwards in the corner of the inner field to chat. (Feel free to join us and run however you want)</p>
                <a className="img-modal" rel="tm" href={Interval.src} title="">
                  <Image className="maps" src={IntervalThumb} alt="" width={328} height={0}/>
                </a>
              </div>

            </div>{ /*end fourteenforty container */ }

          </section> { /* End Schedule */ }

          <section id="about-us">
            <div className="article">
              <h1>Who We Are</h1>
              <p>Astoria Runners is about building community through running. We organize weekly runs, group participation in organized races, and other activities. Started in 2016, we are a safe place for Astorians to come and have a bit of exersise and socialization. We see ourselves as a social group that runs.</p>
            </div> { /* End Article */ }

          </section>

          <section id="faqs">
            <div className="article">
              <h1>FAQs</h1>
              <p><b>What day is the long run?</b> Weekend runs will switch from Saturday to Sunday every three months. Please check the current schedule at the top of the page.</p>
                <p><b>How fast do yall go?</b>Our pace is generally around 9:30-10:30 min miles. However, all levels of experience and all paces are welcome. We pause at the halfway point and make sure no one is left behind. Our weekend runs are 6-13 miles at a 9:30-10:30 pace, and pace varies based on the runners present. Meeting points throughout long run routes ensure folks can choose their own speed and stay with the group. Walking intervals are frequently employed at long runs.</p> 
              <p><b>Where do you meet?</b> We meet at the benches in front of the restrooms by the Astoria Park Track.</p>


              <div className="call-out">Running is fun and rewarding, but not without risk. By attending a run, you accept responsability for your actions, and discharge Astoria Runners of any liability for any injury that may occur.</div>
            </div>{ /*End Article */}

          </section>
        </main>
        <Footer/>
      </body>
    </>
  );
}
