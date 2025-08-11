module.exports = async function (context, req) {
    context.log('HTTP trigger function processed a request.');

    if (req.method === 'POST') {
        const appointment = req.body;
        // Save to Cosmos DB (to be added later)
        context.res = {
            status: 201,
            body: { message: "Appointment created", appointment }
        };
    } else if (req.method === 'GET') {
        // Fetch from Cosmos DB (to be added later)
        context.res = {
            status: 200,
            body: [{ id: 1, student: "John Doe", date: "2025-08-11" }]
        };
    } else {
        context.res = {
            status: 405,
            body: "Method not allowed"
        };
    }
};
