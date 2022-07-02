'use strict'

module.exports = (app) => {
    let contact = require('../controller/contact');

    app.route('/contacts')
        .get(contact.allContacts)
        .post(contact.addContact)

    app.route('/contacts/:contactId')
        .get(contact.singleContact)
        .patch(contact.updateContact)
        .put(contact.updateContact)
        .delete(contact.deleteContact)
}