
import pool from "./db/index.js";

(async () => {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("DB OK:", res.rows[0]);
  } catch (err) {
    console.error("DB FAIL:", err);
  }
})();
