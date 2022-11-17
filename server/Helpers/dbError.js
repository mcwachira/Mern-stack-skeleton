const getUniqueErrorMessage = (error) => {
    let output
    try{
        let fieldName= error.message.substring(error.message.lastINdexOf('.$') + 2, 
        error.message.lastIndexOf('_1'))
        output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + 'already exists'
    }catch(ex){
        output = 'Unique field already exists'
    }
    return output
}





const getErrorMessage = (error) => {
    let message = '';
    if(error.code){

        switch (error.code){
            case 11000:
                case 11001:
                    message= getUniqueErrorMessage(error)
                    break
                    default:
                        message='Something went wrong'
        }
    }else{
        for(let errorName in error.errors){
            if(error.errors[errorName].message)
                message = error.errors[errorName].message
        }
    }

    return message
}



export default {getErrorMessage}