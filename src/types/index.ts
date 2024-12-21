export interface CallType {
    id: string;
    callerId: string;
    receiverId: string;
    startTime: Date;
    endTime?: Date;
    status: 'active' | 'ended' | 'missed';
}

export interface MessageType {
    id: string;
    senderId: string;
    receiverId: string;
    content: string;
    timestamp: Date;
}

export interface VideoCallType extends CallType {
    videoEnabled: boolean;
    resolution: '720p' | '1080p' | '4K';
}