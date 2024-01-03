const ContactEntities = require('../entities/contacts');

class ContactController {
    static getAll = async (req, res, next) => {
        try {
            const allDatas = await ContactEntities.getAll(req.pool);

            res.status(200).json(allDatas);
        } catch (error) {
            next (error)
        }
    }
    static createContact = async (req, res, next) => {
        try {
            const payload = {
              email: req.body.email,
              fullname: req.body.fullname,
              postal_code: req.body.postal_code,
              unit_number: req.body.unit_number,
              address: req.body.address,
              contact_type: req.body.contact_type,
              id_type: req.body.id_type,
              id_number: req.body.id_number,
              phone: req.body.phone,
              organisation_name: req.body.organisation_name,
              departement: req.body.departement,
            };

            const createdContact = await ContactEntities.createContact(req.pool, payload);

            res.status(201).json({
                createdContact,
            })
        } catch (error) {
            next (error)
        }
    }
}

module.exports = ContactController;