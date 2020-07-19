'use strict';
const mongoose = require('mongoose');
const Contact = mongoose.model('Contact');


// View all contacts
exports.allContacts = function (req, res)  {
    Contact.find().exec().then(result => {
        res.status(200).json(result)
    })
    .catch(err => res.status(500).json(err))
};

// Add Contacts
exports.addContact = (req, res) => {
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.name,
        email: req.body.phone,
        message: req.body.message
    });

    newContact.save((err, contact) => {
        err ? res.status(500).json({error: 'Something went wrong'}) : res.status(200).json(contact)
    })
}

// Single contact

exports.singleContact = (req, res) => {
    Contact.findById(req.params.contactId, (err, task) => {
        err ? res.send(err) : res.json(task)
    });
}

// Delete Contact

exports.deleteContact = (req, res) => {
    let id = req.params.contactId;

    Contact.deleteOne({
        _id: id
    }).then(result => {
        res.status(200).json(result)
    }).catch(err => {
        res.status(500).json({error: err})
    })
};

// Update Contact

exports.updateContact = (req, res) => {
    Contact.findById(req.params.contactId, (err, contact) => {
        if (err) 
            res.send(err);
        let updatedContact = new Contact({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone: req.body.name,
            email: req.body.phone,
            message: req.body.message
        });

        updatedContact.save((err, contact) => {
            err ? res.status(500).json({
                error: 'Something went wrong'
            }) : res.status(200).json({
                contact,
                message: 'Contact info updated'
            }) 

        })
    })
}
