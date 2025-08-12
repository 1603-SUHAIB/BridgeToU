const sql = require('mssql');

const config = {
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  server: process.env.SQL_SERVER,
  database: process.env.SQL_DATABASE,
  options: {
    encrypt: true
  }
};

module.exports = async function (context, req) {
  context.log('GetAvailability request received.');

  const counselorType = req.query.counselorType;
  const date = req.query.date;

  if (!counselorType || !date) {
    context.res = {
      status: 400,
      body: "Please provide 'counselorType' and 'date' as query parameters."
    };
    return;
  }

  try {
    await sql.connect(config);

    const result = await sql.query`
      SELECT s.SlotId, c.Name AS CounselorName, c.CounselorType, s.SlotDate, s.StartTime, s.EndTime
      FROM Counselors c
      JOIN AvailabilitySlots s ON c.CounselorId = s.CounselorId
      WHERE c.CounselorType = ${counselorType}
        AND s.SlotDate = ${date}
        AND s.IsBooked = 0
      ORDER BY s.StartTime`;

    context.res = {
      status: 200,
      body: result.recordset
    };

  } catch (err) {
    context.log.error('Database query error:', err);
    context.res = {
      status: 500,
      body: "Error fetching availability."
    };
  } finally {
    await sql.close();
  }
};
