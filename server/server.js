// npm csomagok importálása
require('dotenv').config();
const express = require('express');

// route-ok importálása
const mainRoutes = require('./routes/mainRoutes');

// app szerver létrehozása, beállítása a .env állományban eltárolt értékkel
// a .env állományt csak a fejlesztés során használjuk, a .gitignore mappában hivatkozunk rá
// a .env-ben lévő beállítások helyett a szolgáltató webszerver (production server) a sajátjait fogja használni
const app = express();
const PORT = process.env.PORT || 3500;

// route-ok (weboldalak) beállítása
app.use('/', mainRoutes);

// a létrehozott szerver folyamatosan figyeli a böngészőből jövő kéréseket (request) a beállított portszámon
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
