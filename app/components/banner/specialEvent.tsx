import Link from "next/link";
import {ShoreRoadGradient} from "@/images/index";

interface EventProps{
  eventName: string;
  eventDescription: string;
  eventLink: string;
  eventDate: string;
}

export default function SpecialEvent(event: EventProps) {
  const dateString = new Date(`${event.eventDate}T16:00:00Z`).toLocaleDateString();
  const formattedDate = dateString.split("/").slice(0,2).join("/");
  return <section className="banner banner-wide" style={{ backgroundImage: `url(${ShoreRoadGradient.default.src})`}}>
  <div className="banner-body">
    <h4 className="banner-title">Special event: {event.eventName}</h4>
    <p className="banner-desc">{event.eventDescription} on {formattedDate}</p>
  </div>
  <Link href={event.eventLink} target="_blank" className="banner-btn header-button">See Event on Meetup</Link>
</section>
}
