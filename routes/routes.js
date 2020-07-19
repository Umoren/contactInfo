'use strict'

module.exports = (app) => {
    let contact = require('../controller/contact');

    app.route('/contact')
        .get(contact.allContacts)
        .post(contact.addContact)

    app.route('/contact/:contactId')
        .get(contact.singleContact)
        .patch(contact.updateContact)
        .put(contact.updateContact)
        .delete(contact.deleteContact)
}