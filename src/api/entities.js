// src/api/entities.js
// Stubs zodat de app kan builden zonder Base44 backend.

const ok = (data = null) => ({ ok: true, data });
const noopAsync = async () => ok();

// "Entity-stub" die alles accepteert: .list(), .get(), .create(), .update(), .delete(), enz.
const makeEntity = () =>
  new Proxy(noopAsync, {
    get: () => makeEntity(),                    // elke property geeft weer dezelfde proxy
    apply: () => Promise.resolve(ok()),         // elke call () geeft een veilige Promise terug
  });

// === Named exports waar je app om vraagt ===
// Voeg hier alle entiteiten toe die ergens met:
//   import { X } from '@/api/entities'
// geïmporteerd worden.

export const ContactBericht = makeEntity();

// Je kunt hier later meer stubs toevoegen als de build vraagt om extra exports, bv:
// export const Diensten = makeEntity();
// export const Testimonials = makeEntity();
// export const Users = makeEntity();

// === Eventuele generieke helpers (optioneel) ===
export const getEntities = async () => {
  console.warn("getEntities (stub) – hier zou je echte data ophalen.");
  return [];
};

export const getEntityById = async (id) => {
  console.warn("getEntityById (stub):", id);
  return { id, name: "Dummy entity" };
};
