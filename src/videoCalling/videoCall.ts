export class VideoCall {
    private isVideoOn: boolean;

    constructor() {
        this.isVideoOn = false;
    }

    startVideoCall(): void {
        console.log("Video call started.");
        // Additional logic to initiate video call
    }

    endVideoCall(): void {
        console.log("Video call ended.");
        // Additional logic to end video call
    }

    toggleVideo(): void {
        this.isVideoOn = !this.isVideoOn;
        console.log(`Video is now ${this.isVideoOn ? 'on' : 'off'}.`);
        // Additional logic to toggle video
    }
}