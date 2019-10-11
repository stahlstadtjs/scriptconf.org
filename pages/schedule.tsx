import { Footer } from "../components/workshop-site/Footer";
import Head from "next/head";
import { Navigation } from "../components/2019-bold/Navigation";
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
      name: "Lisi Linhart",
      url: "/lisi",
      image: "/static/assets/images/lisi.jpg",
      title: "Practical Web Animation"
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
      name: "Samuel Snopko",
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

const workshops = [
  {
    time: "08:30",
    title: "Doors and registration 📝"
  },{
    time: "09:00",
    title: "Kick-off"
  },{
    time: "10:30",
    title: "Coffee break ☕️"
  },{
    time: "11:00",
    title: "Workshop part 2"
  },{
    time: "12:30",
    title: "Lunch break 🍜"
  },{
    time: "13:30",
    title: "Workshop part 3"
  },{
    time: "15:00",
    title: "Coffee Break ️☕️"
  },{
    time: "15:30",
    title: "Workshop part 4"
  },{
    time: "17:00",
    title: "End of workshop"
  },
]

export default function() {
  return <>
    <Head><title>Script'19: Schedule</title></Head>
    <Navigation />
    <main className="about text">
      <div className="content">
        <p>
          Check out the schedule for our three event parts:
        </p>
        <ul>
          <li><a href="#workshops">Workshops</a></li>
          <li><a href="#warmup">Warm-up event</a></li>
          <li><a href="#conference">Conference</a></li>
        </ul>
        <h2 id="workshops">October 24th: Workshops</h2>
        <p>
          Workshop locations will be disclosed to the audience. All three workshops follow the following timetable:
        </p>
        <Schedule tight={true} talks={workshops} />
        <h2 id="warmup">October 24th: Warm-up event</h2>
        <p>
          The free warm-up event <strong>JAMstack JAM session</strong> is powered by <a href="https://storyblok.com" rel="noopener">Storyblok.</a> Get <a href="https://ti.to/scriptconf/scriptconf-2019">tickets</a>
        </p>
        <Schedule talks={warmupevent} />
        <h2 id="conference">October 25th: Main conference</h2>
        <p>
          This is the schedule for our main event:
        </p>
        <Schedule talks={mainConference} />
      </div>
    </main>
    <Footer additional="white"></Footer>
  </>
}
