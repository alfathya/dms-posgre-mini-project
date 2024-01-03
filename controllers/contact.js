const ContactEntities = require('../entities/contacts');

class ContactController {
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
                message: 'Contact created success!',
                createdContact,
            })
        } catch (error) {
            next (error)
        }
    }
}

module.exports = ContactController;