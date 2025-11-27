export function errorMessage(statusCode){
    let msg=''
    switch(statusCode){
        case 400:
            msg='The request is malformed or invalid '
            break
        case 401:
            msg='Authentication is required, or the provided credentials are invalid '
            break
        case 403:
            msg='The client is authenticated but lacks permission to perform the requested operation.'
            break
        case 404:
            msg='The requested resource does not exist on the server'
            break    
    }
    return msg
}
