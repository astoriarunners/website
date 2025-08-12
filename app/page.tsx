'use client';

import Header from "@/app/header";
import Footer from "@/app/footer";
import { Interval, IntervalThumb, PartyPace, RooseveltIsland, Weekly, WeeklyThumb } from "@/images";
import '@/styles/style.css';
import '@/styles/fancybox.css';
import { RunArticle } from "./components/runArticle";
import { MonthArticle } from "./models/article";
import Hero from "./components/hero";
import ARCalendar from "@/app/components/calendar/arCalendar";
import { getMonthContent } from "./api/contentAPI";
import { useState, useEffect } from "react";
export default function Home() {

  const [monthArticle, setMonthArticle] = useState<MonthArticle>({blurb: "", month: ""});

  async function fetchMonthArticle() {
    const tempMonthArticle = await getMonthContent();
    setMonthArticle(tempMonthArticle);
  }

  useEffect( () => {
    if(monthArticle.blurb == "" && monthArticle.month == "")
      fetchMonthArticle();
    }
  );

  return (
    <>
        <Header/>
        <main className="page-content">
          <Hero/>
          <section id="schedule">
          <div className="article">
              <h1>Run with us this {monthArticle.month}</h1>
              <p>{monthArticle.blurb}</p>
              <ARCalendar/>
          </div>

            <div className="container article">

                <RunArticle title="Weekly Evening Run" image={Weekly.default} imageThumb={WeeklyThumb.default} 
                description="Join us for a 5k run that starts and finishes at Astoria Park track. We have 3 pace groups and stop halfway to rest and socialize before heading back to the park."/>

                <RunArticle title="Interval Track Run" image={Interval.default} imageThumb={IntervalThumb.default}
                description="Join us for a 45-minute interval run at the Astoria Park track. We meet afterwards in the corner of the inner field to chat. (Feel free to join us and run however you want)"/>

                <RunArticle title="Weekend Long Run" image={RooseveltIsland.default} imageThumb={RooseveltIsland.default}
                description="Join us for our longer runs on the weekend! We mix up the route every weekend and explore nearby neighborhoods"/>
                
                <RunArticle title="Party Pace Walk/Run" image={PartyPace.default} imageThumb={PartyPace.default}
                description="Want to run with a group but not confident you'll find a comfortable pace? No problem! Join us for a fun walk/ run around the track! We're here to make sure everyone feels welcome getting into running!"/>

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
