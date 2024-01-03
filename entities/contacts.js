class ContactEntities {
    static createContact = async (pool, payload) => {
        try {
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

            return newContact;
        } catch (error) {
            throw error
        }
    }
}

module.exports = ContactEntities;