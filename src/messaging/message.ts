export class Message {
    constructor(private sender: string, private recipient: string, private content: string) {}

    sendMessage(): void {
        console.log(`Message sent from ${this.sender} to ${this.recipient}: ${this.content}`);
    }

    receiveMessage(): void {
        console.log(`Message received by ${this.recipient}: ${this.content}`);
    }

    deleteMessage(): void {
        console.log(`Message deleted by ${this.sender}`);
    }
}