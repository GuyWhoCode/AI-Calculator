"use client";
import { useChatHistory } from "@/lib/chatHistoryContext";
import MathEqn from "./MathEqn";
import { useEffect } from "react";

export default function Home() {
    const { chatHistory } = useChatHistory();

    useEffect(() => {
        console.log(chatHistory);
    }, [chatHistory]);

    return (
            <section>
                <h1 className="text-scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
                    AI Calculator
                </h1>

                <div className="mt-4 bg-gray-200 p-8">
                    {chatHistory.messages.map((msg, index) => (
                        <div key={index} className={`mt-4 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                            <p className="scroll-m-20 text-xl tracking-tight">
                                <strong>{msg.user}:</strong> {msg.message}
                            </p>
                        </div>
                    ))}
                </div>

                <MathEqn />
            </section>
    );
}
