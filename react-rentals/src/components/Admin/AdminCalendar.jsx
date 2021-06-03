import styled from "styled-components";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/cs";
require("react-big-calendar/lib/css/react-big-calendar.css");

const localizer = momentLocalizer(moment);

const StyledAdminCalendar = styled.div`
  width: 90%;
  padding: 5%;
  border-radius: 1.5rem;
  -webkit-box-shadow: 0 8px 20px 0px #d1d1d1;
  box-shadow: 0 8px 20px 0px #d1d1d1;

  background-color: white;
  aspect-ratio: 16/9;
  text-align: center;

  img {
    width: 100%;
    max-width: 100%;
    max-height: 100%;
  }

  @media (max-width: 1280px) {
    aspect-ratio: unset;
    height: 50vh;
  }
`;

const messages = {
  allDay: "Celý den",
  previous: "<",
  next: ">",
  today: "Dnes",
  month: "Měsíc",
  week: "Týden",
  day: "Den",
  agenda: "Agenda",
  date: "Datum",
  time: "Čas",
  event: "Událost",
  showMore: (total) => `+ Zobrazit další (${total})`,
};

const AdminCalendar = (props) => {
  return (
    <>
      <StyledAdminCalendar>
        <Calendar
          messages={messages}
          localizer={localizer}
          events={[]}
          startAccessor="start"
          endAccessor="end"
        />
      </StyledAdminCalendar>
    </>
  );
};

export default AdminCalendar;
