export class MixCallHandler {
    private activeCalls: Array<any>;

    constructor() {
        this.activeCalls = [];
    }

    onMixCallStarted(call: any) {
        this.activeCalls.push(call);
        console.log('Mixed call started:', call);
    }

    onMixCallEnded(call: any) {
        this.activeCalls = this.activeCalls.filter(c => c !== call);
        console.log('Mixed call ended:', call);
    }

    onMixCallReceived(call: any) {
        console.log('Received mixed call:', call);
        // Logic to handle the received mixed call
    }

    getActiveCalls() {
        return this.activeCalls;
    }
}