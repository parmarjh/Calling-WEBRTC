export class VideoCallHandler {
    onVideoCallStarted(callId: string): void {
        console.log(`Video call started with ID: ${callId}`);
        // Additional logic for handling video call start
    }

    onVideoCallEnded(callId: string): void {
        console.log(`Video call ended with ID: ${callId}`);
        // Additional logic for handling video call end
    }

    onVideoCallReceived(callId: string, callerId: string): void {
        console.log(`Incoming video call from ${callerId} with ID: ${callId}`);
        // Additional logic for handling incoming video call
    }
}