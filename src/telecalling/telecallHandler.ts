export class TelecallHandler {
    onCallStarted(callId: string) {
        console.log(`Call started with ID: ${callId}`);
        // Additional logic for when a call starts
    }

    onCallEnded(callId: string) {
        console.log(`Call ended with ID: ${callId}`);
        // Additional logic for when a call ends
    }

    onCallReceived(callId: string, callerId: string) {
        console.log(`Incoming call from ${callerId} with ID: ${callId}`);
        // Additional logic for handling an incoming call
    }
}