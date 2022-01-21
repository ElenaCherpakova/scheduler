export default function getAppointmentsForDay(state, day) {
  //there are no appointments on the given day, our days data will be empty.

  let filteredDay = state.days.filter((d) => d.name === day)[0];
  if (!filteredDay) {
    return [];
  }
  //comparing it's id matches the id of states.appointments
  let result = [];
  if (filteredDay.appointments.length > 0) {
    for (let id of filteredDay.appointments)
      result.push(state.appointments[id]);
  }
  return result;
}
