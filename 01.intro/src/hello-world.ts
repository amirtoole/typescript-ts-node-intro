export class HelloWorld {

    constructor(private name: string) {
    }

    sayHello(): string {
        return `Hello ${this.name}`;
    }
}
