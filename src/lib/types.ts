export interface MessageContents {
    user: string;
    message: string;
}

export interface ChatHistory {
    messages: MessageContents[];
}