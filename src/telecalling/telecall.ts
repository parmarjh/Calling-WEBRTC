export class Telecall {
    private activeCall: boolean;

    constructor() {
        this.activeCall = false;
    }

    initiateCall(callee: string): void {
        if (!this.activeCall) {
            console.log(`Initiating call to ${callee}...`);
            this.activeCall = true;
            // Additional logic to start the call
        } else {
            console.log("A call is already in progress.");
        }
    }

    endCall(): void {
        if (this.activeCall) {
            console.log("Ending the call...");
            this.activeCall = false;
            // Additional logic to end the call
        } else {
            console.log("No active call to end.");
        }
    }

    handleIncomingCall(caller: string): void {
        if (!this.activeCall) {
            console.log(`Incoming call from ${caller}.`);
            // Logic to accept the call
            this.activeCall = true;
        } else {
            console.log("Currently on a call. Cannot accept another call.");
        }
    }
}