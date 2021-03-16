const db = require("../../data/db-config.js");

const getAll = () => {
  return db("accounts"); // DO YOUR MAGIC
};

const getById = (id) => {
  return db("accounts").where("id", id).first();
};

const create = async (account) => {
  const [id] = await db("accounts").insert(account, ["id", "name", "budget"]);
  return getById(id);
};

const updateById = async (id, account) => {
  await db("accounts").where("id", id).update(account);
  return getById(id); // DO YOUR MAGIC
};

const deleteById = async (id) => {
  const toBeChopped = await getById(id);
  await db("accounts").where("id", id).del();
  return toBeChopped; // DO YOUR MAGIC
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
