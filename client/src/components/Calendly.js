import { InlineWidget, useCalendlyEventListener } from "react-calendly";

function Calendly() {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
  });

  return (
    <div className="calendar">
      <InlineWidget url="https://calendly.com/megmeyers/tutorial-session" />;
    </div>
  );
}
export default Calendly;
