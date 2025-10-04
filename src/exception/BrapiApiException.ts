export class BrapiApiException extends Error{
    constructor (message:string){
        super(message)
        Object.setPrototypeOf(this, BrapiApiException.prototype)
    }
}