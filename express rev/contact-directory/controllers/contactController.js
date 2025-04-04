//importing express async handler
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");


//copying from contactController
//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async(req,res)=>{
    const contacts = await Contact.find({user_id: req.user.id})
    res.status(200).json(contacts);
})


//@desc Create new contact
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async(req,res)=>{
    console.log("The request body is:", req.body)
    const {name, email , phoneno} = req.body;
    if (!name||!email||!phoneno){
        res.status(400);
        throw new Error ("All feilds are mandatory ");
    }
    const contact = await Contact.create({
        name,
        email,
        phoneno,
        user_id : req.user.id
    })

    res.status(201).json(contact);
})


//@desc Update contact
//@route PUT /api/contacts/:id
//@access private
const updateContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403)
        throw new Error("User dont have permission to update other user's contact");
    }
    
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,  
        req.body,       
        { new: true }   
    );
    
    res.status(200).json(updatedContact)
})


//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }

    if(contact.user_id.toString() !== req.user.id){
        res.status(403)
        throw new Error("User dont have permission to update other user's contact"); 
    }
    await contact.deleteOne();
    res.status(200).json(contact)
})


//@desc Get contact
//@route GET /api/contacts/:id
//@access private
const getContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }
    
    res.status(200).json(contact)
})

module.exports = { getContacts, createContact, updateContact, deleteContact, getContact }
