export class PolygonApiServiceException extends Error{
    constructor (message:string){
        super(message)
        Object.setPrototypeOf(this, PolygonApiServiceException.prototype)
    }
}