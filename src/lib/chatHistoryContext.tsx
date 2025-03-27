"use client";
import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from "react";
import { ChatHistory } from "./types";

interface ChatHistoryContextType {
    chatHistory: ChatHistory;
    setChatHistory: Dispatch<SetStateAction<ChatHistory>>;
}

const ChatHistoryContext = createContext<ChatHistoryContextType>({
    chatHistory: { messages: [] },
    setChatHistory: () => {},
});

export const ChatHistoryProvider = ({ children }: { children: ReactNode }) => {
    const [chatHistory, setChatHistory] = useState<ChatHistory>({
        messages: [],
    });

    return (
        <ChatHistoryContext.Provider value={{ chatHistory, setChatHistory }}>
            {children}
        </ChatHistoryContext.Provider>
    );
};

export const useChatHistory = (): ChatHistoryContextType => {
    const context = useContext(ChatHistoryContext);
    if (!context) {
        throw new Error(
            "useChatHistory must be used within a ChatHistoryProvider"
        );
    }
    return context;
};
