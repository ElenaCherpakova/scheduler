
export function getAppointmentsForDay(state, day) {
//there are no appointments on the given day, our days data will be empty.
  if (!state.days) {
    return [];
  }
  let filteredDay = state.days.filter(d => d.name === day)[0];
  if (!filteredDay) {
    return [];
  }
//comparing it's id matches the id of states.appointments 
  let result = [];
  for (const id of filteredDay.appointments) {
    const appointmentObj = state.appointments[id];
    result.push(appointmentObj);
  }
  return result;
}

