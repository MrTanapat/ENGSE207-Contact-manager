const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const contactController = require('../controllers/contactController');

router.get('/', contactController.getAllContacts);
router.post('/', contactController.createContact);
=======
const ctrl = require('../controllers/contactController');

router.get('/', ctrl.getAllContacts);
router.post('/', ctrl.createContact);
router.delete('/:id', ctrl.deleteContact);
>>>>>>> e54552b0155dd60a87b974303e632de509b74548

module.exports = router;
