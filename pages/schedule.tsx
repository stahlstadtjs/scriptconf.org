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
    title: "Coffee break powered by Dynatrace"
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
    title: "Dinner break powered by Mozilla"
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
    title: "Party powered by Netural"
  }
]

export default function() {
  return <>
    <Head><title>Script'19: Schedule</title></Head>
    <Navigation />
    <main className="about text">
      <div className="content">
        <h2>October 25th: Main confrence</h2>
        <Schedule talks={mainConference} />
      </div>
    </main>
    <Footer additional="white"></Footer>
  </>
}
