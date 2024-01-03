class ContactEntities {
    static getAll = async (pool) => {
        try {
            const allContacts = await pool.query(`SELECT * FROM contacts`);
            return allContacts.rows;
        } catch (error) {
            throw error
        }
    }
    static createContact = async (pool, payload) => {
        try {
            const uniqueEmail = await this.isUniqueEmail(pool, payload.email);
            console.log(uniqueEmail)
            if (!uniqueEmail.unique) {
              return {
                message: 'contact exist',
                id: uniqueEmail.Id,
              }
            }

            const { email, fullname, postal_code, unit_number, address, contact_type, id_type, id_number, phone, organisation_name, departement } = payload;
            const result = await pool.query(
              `INSERT INTO contacts (email, fullname, postal_code, unit_number, address, contact_type, id_type, id_number, phone, organisation_name, departement) 
              VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id`,
              [
                email,
                fullname,
                postal_code,
                unit_number,
                address,
                contact_type,
                id_type,
                id_number,
                phone,
                organisation_name,
                departement,
              ]
            );

            const newContact = result.rows[0];

            return {
                message: 'Create contact success!',
                newContact,
            }
        } catch (error) {
            throw error
        }
    }
    static isUniqueEmail = async (pool, email) => {
        try {
            const contact = await pool.query(`SELECT id, email, fullname FROM contacts WHERE email = '${email}'`)

            return {
              unique: !contact.rows[0],
              Id: contact?.rows[0]?.id,
            };
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ContactEntities;