// src/api/baseClient.js
// Universele stub: elke (diep geneste) call geeft veilig { ok:true, data:null } terug.
const ok = (data = null) => ({ ok: true, data });
const noopAsync = async () => ok();

const deep = new Proxy(noopAsync, {
  get: () => deep,                    // elke property geeft weer de proxy
  apply: () => Promise.resolve(ok()), // elke call () resolved met ok()
});

export const base44 = new Proxy({}, { get: () => deep });

// Handige helpers als je code hiernaar vraagt:
export const isConnected = () => false;
export const getCurrentUser = async () => ok(null);
