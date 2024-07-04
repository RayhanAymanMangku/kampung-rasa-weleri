const customerModel = require("../../models/customer");

async function addCustomer(req, res) {
  try {
    const { namaCustomer, kontakCustomer } = req.body;
    const newCustomer = await customerModel.addCustomer(
      namaCustomer,
      kontakCustomer
    );
    res.json(newCustomer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getCustomers(req, res) {
  try {
    const customers = await customerModel.getCustomers();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getCustomerById(namaCustomer, kontakCustomer) {
  let customer = await knex("customer")
    .select("idCustomer")
    .where({ namaCustomer, kontakCustomer })
    .first();

  if (!customer) {
    const [newCustomer] = await knex("customer").insert(
      { namaCustomer, kontakCustomer },
      ["idCustomer"]
    );
    customer = newCustomer;
  }

  return customer.idCustomer;
}

async function deleteCustomer(req, res) {
  try {
    const { idCustomer } = req.params;
    const deletedCustomer = await customerModel.deleteCustomer(idCustomer);
    res.json(deletedCustomer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  addCustomer,
  getCustomers,
  getCustomerById,
  deleteCustomer,
};
