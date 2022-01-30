import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState((prevState) => ({ ...prevState, day }));

  function updateSpots(increment) {
    const day = state.days.find((d) => d.name === state.day);
    const newDay = { ...day, spots: day.spots + increment };
    return state.days.map((d) => (d.name === state.day ? newDay : d));
  }

  // Adding a new interview and sending request to the server
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
    };

    const editingInterview = appointment.interview !== null;
    appointment.interview = { ...interview };
    let days = [...state.days];

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .put(`/api/appointments/${id}`, appointment)
      .then((response) => {
        console.log(response);

        if (!editingInterview) {
          days = updateSpots(-1);
        }
        setState((prevState) => ({ ...prevState, appointments, days }));
      })
  }
  //deleting interview and sending request to the server
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.delete(`/api/appointments/${id}`).then((response) => {
      console.log(response);
      const days = updateSpots(1);
      setState((prevState) => ({ ...prevState, appointments, days }));
    });
  }

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ])
      .then((all) => {
        const [days, appointments, interviewers] = all;
        setState((prev) => ({
          ...prev,
          days: days.data,
          appointments: appointments.data,
          interviewers: interviewers.data,
        }));
      })
      .catch((err) => console.log(err.message));
  }, []);

  return { state, setDay, bookInterview, cancelInterview };
}
