// src/api/entities.js

// Dummy entity client in plaats van Base44
export const getEntities = async () => {
  console.warn("getEntities is een placeholder. Hier zou je echte data ophalen.");
  return [];
};

export const getEntityById = async (id) => {
  console.warn(`getEntityById(${id}) is een placeholder. Hier zou je een entity ophalen.`);
  return { id, name: "Dummy entity" };
};
