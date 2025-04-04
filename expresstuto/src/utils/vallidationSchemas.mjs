export const createUserValidationSchema= {
    //feild i wanna validate
    username :{
        isLength :  {
            options:{
                min:5,
                max:32,
            },
            errorMessage: "Message must be atleast 5 char witrh ,ax of 32 char"
        },
        notEmpty: {
            errorMessage : "Username cannot be empty"
        },
        isString: {
            errorMessage: "Username should be in a string "
        },

    },
    displayName:{
        notEmpty:true,
    },
    
}