const addressModel = require('../models/addressModel')

const createAddress = async (req, res) => {
    const { name, mobileNo, pinCode, address } = req.body
    const Address = new addressModel({
        name: name,
        mobileNo: mobileNo,
        pinCode: pinCode,
        address: address
    })

    try {
        await Address.save()
        
        res.status(201).json(Address)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" })
    }
}

module.exports = { createAddress }