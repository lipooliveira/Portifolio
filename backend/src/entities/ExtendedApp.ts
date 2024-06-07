import Express from "express";


export class ExtendedApp{
    public app: Express.Application;
    public port: number;

    constructor(port: number = 3000){
        this.app = Express();
        this.port = port;
    }

    public start(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}