exports.port = process.argv[2] || process.env.PORT || 8080;
exports.dbUrl = 'mongodb+srv://odsadmin:odsadmin129@company.hnbpcgq.mongodb.net/db' || 'mongodb://localhost:27017/test';
// exports.dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/test';
exports.secret = process.env.JWT_SECRET || 'esta-es-la-api-burger-queen';
exports.adminEmail = process.env.ADMIN_EMAIL || 'scanas@cara.com';
exports.adminPassword = process.env.ADMIN_PASSWORD || 'pa$$All123';
