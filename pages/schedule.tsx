import Head from "next/head";
import { Navigation } from "../components/2019-bold/Navigation";
import { Footer } from "../components/workshop-site/Footer";
import { Schedule } from "../components/2019-bold/Schedule";

const mainConference = [
  {
    time: "11:45",
    title: "Doors & Registration"
  },
  {
    time: "12:45",
    title: "Opening"
  },
  {
    time: "12:45",
    speaker: {
      name: "Vitaly Friedman",
      url: "/vitaly",
      image: "/static/assets/images/vitaly.jpg",
      title: "Designing and Building With Privacy In Mind"
    }
  },
  {
    time: "13:40",
    speaker: {
      name: "Emma Wedekind",
      url: "/emma",
      image: "/static/assets/images/emma.jpg",
      title: "Foundations of Design systems"
    }
  },
  {
    time: "14:20",
    speaker: {
      name: "Dylan Schiemann",
      url: "/dylan",
      image: "/static/assets/images/dylan.jpg",
      title: "tbd"
    }
  },
  {
    time: "14:50",
    title: "Coffee break powered by <a href='https://dynatrace.com' rel='noopener'>Dynatrace</a>"
  },
  {
    time: "16:30",
    speaker: {
      name: "Anna Henningsen",
      url: "/anna",
      image: "/static/assets/images/anna.jpg",
      title: "Node.js feature livecoding"
    }
  },
  {
    time: "17:10",
    speaker: {
      name: "Harry Roberts",
      url: "/harry",
      image: "/static/assets/images/harry.jpg",
      title: "More Than You Ever Wanted to Know About Resource Hints"
    }
  },
  {
    time: "17:50",
    speaker: {
      name: "Marvin Hagemeister",
      url: "/marvin",
      image: "/static/assets/images/marvin.jpg",
      title: "The art of removing code "
    }
  },
  {
    time: "18:30",
    title: "Dinner break powered by <a href='https://mozilla.com' rel='noopener'>Mozilla</a>"
  },
  {
    time: "19:30",
    speaker: {
      name: "Jen Looper",
      url: "/jen",
      image: "/static/assets/images/jen.jpg",
      title: "WineUp: Machine Learning, Mobile Apps, Wine, Cheese, and You"
    }
  },
  {
    time: "20:10",
    speaker: {
      name: "Jo Franchetti",
      url: "/jo",
      image: "/static/assets/images/jo.jpg",
      title: "Tweet My Wedding Dress"
    }
  },
  {
    time: "20:40",
    title: "Party powered by <a href='https://netural.com' rel='noopener'>Netural</a>"
  }
]

const warmupevent = [
  {
    time: "18:00",
    title: "Doors & Registration"
  },
  {
    time: "18:30",
    title: "Opening"
  },
  {
    time: "18:45",
    speaker: {
      name: "Vanessa Böhner",
      url: "/vanessa",
      image: "/static/assets/images/vanessa.jpg",
      title: "Accidentally JAMStack"
    }
  },
  {
    time: "19:15",
    speaker: {
      name: "Samuel Snoko",
      url: "/samuel",
      image: "/static/assets/images/samuel.jpg",
      title: "tbd"
    }
  },
  {
    time: "19:45",
    title: "Dinner and drinks"
  },
  {
    time: "20:15",
    speaker: {
      name: "Matthew Sweeney",
      url: "/matthew",
      image: "/static/assets/images/matthew.jpg",
      title: "JAMstack on ZEIT"
    }
  },
  {
    time: "20:45",
    speaker: {
      name: "Alexandre Chopin",
      url: "/alexandre",
      image: "/static/assets/images/alexandre.jpg",
      title: "Full static generation with NuxtJS"
    }
  },
  {
    time: "21:15",
    title: "Drinks and social hour"
  },
]

export default function() {
  return <>
    <Head><title>Script'19: Schedule</title></Head>
    <Navigation />
    <main className="about text">
      <div className="content">
        <h2>October 24th: Warm-up event</h2>
        <p>
          The free warm-up event <strong>JAMstack JAM session</strong> is powered by <a href="https://storyblok.com" rel="noopener">Storyblok.</a> Get <a href="https://ti.to/scriptconf/scriptconf-2019">tickets</a>
        </p>
        <Schedule talks={warmupevent} />
        <h2>October 25th: Main conference</h2>
        <p>
          This is the schedule for our main event:
        </p>
        <Schedule talks={mainConference} />
      </div>
    </main>
    <Footer additional="white"></Footer>
  </>
}
