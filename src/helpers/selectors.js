//Helper Functions:
//gets the appointments for a given day;
function getAppointmentsForDay(state, day) {
  let filteredDay = state.days.filter((d) => d.name === day)[0];
  if (!filteredDay) {
    return [];
  }
  let result = [];
  if (filteredDay.appointments.length > 0) {
    for (let id of filteredDay.appointments)
      result.push(state.appointments[id]);
  }
  return result;
}
//getInterview returns an object with the interviewer data;
//getInterview returns null if no interview is booked;
function getInterview(state, interview) {
  let interviewObj = state.interviewers;
  if (!interviewObj || !interview) {
    return null;
  }
  let result = {};
  for (let key of Object.keys(interviewObj)) {
    let interviewer = interviewObj[key];
    if (interviewer.id === interview.interviewer) {
      result["interviewer"] = interviewer;
      result["student"] = interview.student;
    }
  }
  return result;
}

export { getAppointmentsForDay, getInterview };
