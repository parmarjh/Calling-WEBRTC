export class MixCall {
    private calls: Array<any>;

    constructor() {
        this.calls = [];
    }

    mixCalls() {
        // Logic to mix different types of calls
    }

    addCall(call: any) {
        this.calls.push(call);
        // Additional logic for adding a call
    }

    removeCall(callId: string) {
        this.calls = this.calls.filter(call => call.id !== callId);
        // Additional logic for removing a call
    }
}