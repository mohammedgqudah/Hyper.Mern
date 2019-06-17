const Joi = require('joi');

const { SAMPLE } = require('./template.validators');
// const {  } = require('../../db/models/model.js')

const InvalidBody = {next: false};

// e.g 

// const SAMPLE = async (req, res) => {
//     let schema = SAMPLE;
//     let { value, error, } = Joi.validate(req.body, schema);
//     if (error) res.send({ ...InvalidBody, list: value.details });
//     else {
//         try {
//             /* Async code */
//         } catch (error) {
//             console.log(error);
//             res.send({ next: false, server: true, error });
//         }
//     }
// };