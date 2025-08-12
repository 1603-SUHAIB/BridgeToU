module.exports = async function (context, req) {
  context.log('CreateAppointment function processed a request.');

  const appointment = req.body;

  if (!appointment || !appointment.name || !appointment.date) {
    context.res = {
      status: 400,
      body: "Please provide name and date in the request body"
    };
    return;
  }

  // Here, save appointment to DB — for demo, just return it back
  context.res = {
    status: 201,
    body: { message: "Appointment created", appointment },
    headers: {
      "Content-Type": "application/json"
    }
  };
};
