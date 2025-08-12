module.exports = async function (context, req) {
  context.log('GetAppointments function processed a request.');

  // Example: static list for demo
  const appointments = [
    { id: 1, name: "Alice", date: "2025-08-15" },
    { id: 2, name: "Bob", date: "2025-08-20" }
  ];

  context.res = {
    status: 200,
    body: appointments,
    headers: {
      "Content-Type": "application/json"
    }
  };
};
