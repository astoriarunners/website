import dynamic from "next/dynamic";
import Header from "@/app/header";
import Footer from "@/app/footer";
import { Interval, IntervalThumb, Weekly, WeeklyThumb } from "@/images";
import '@/styles/style.css';
import '@/styles/fancybox.css';
import { RunArticle } from "./components/runArticle";
import Hero from "./components/hero";

export default function Home() {
  const Calendar = dynamic(() => import('./components/calendar/calendarData').then(c => c.CalendarData), {ssr: false});

  return (
    <>
        <Header/>
        <main className="page-content">
          <Hero/>
          <section id="schedule">
          <div className="article">
              <h1>Run with us this September</h1>
              <p>September ‘24 September is here! We’re embracing summer with a beach trip 🏖️ 😎 See you there! Note the change in days for intervals and long runs.
                #astoriarunners
              </p>
              <Calendar/>
          </div>

            <div className="container article">

                <RunArticle title="Weekly Evening Run" image={Weekly.default} imageThumb={WeeklyThumb.default} 
                description="Join us for a 5k run that starts and finishes at Astoria Park track. We have 3 pace groups and stop halfway to rest and socialize before heading back to the park."/>

                <RunArticle title="Interval Track Run" image={Interval.default} imageThumb={IntervalThumb.default}
                description="Join us for a 45-minute interval run at the Astoria Park track. We meet afterwards in the corner of the inner field to chat. (Feel free to join us and run however you want)"/>

            </div>{ /*end fourteenforty container */ }

          </section> { /* End Schedule */ }

          <section id="about-us">
            <div className="article">
              <h1>Who We Are</h1>
              <p>Astoria Runners is about building community through running. We organize weekly runs, group participation in organized races, and other activities. Started in 2016, we are a safe place for Astorians to come and have a bit of exersise and socialization. We see ourselves as a social group that runs.</p>
            </div>

          </section>

          <section id="faqs">
            <div className="article">
              <h1>FAQs</h1>
              <p><b>What day is the long run?</b> Weekend runs will switch from Saturday to Sunday every three months. Please check the current schedule at the top of the page.</p>
                <p><b>How fast do yall go?</b> Our pace is generally around 9:30-10:30 min miles. However, all levels of experience and all paces are welcome. We pause at the halfway point and make sure no one is left behind. Our weekend runs are 6-13 miles at a 9:30-10:30 pace, and pace varies based on the runners present. Meeting points throughout long run routes ensure folks can choose their own speed and stay with the group. Walking intervals are frequently employed at long runs.</p> 
              <p><b>Where do you meet?</b> We meet at the benches in front of the restrooms by the Astoria Park Track.</p>


              <div className="call-out">Running is fun and rewarding, but not without risk. By attending a run, you accept responsability for your actions, and discharge Astoria Runners of any liability for any injury that may occur.</div>
            </div>

          </section>
        </main>
        <Footer/>
    </>
  );
}
