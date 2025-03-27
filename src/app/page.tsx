"use client";
import { useChatHistory } from "@/lib/chatHistoryContext";
import MathEqn from "./MathEqn";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
    const { chatHistory } = useChatHistory();

    return (
        <section>
            <h1 className="text-scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
                AI Calculator
            </h1>

            <div className="mt-4 bg-gray-300 p-8 rounded-lg min-h-[400px]">
                {chatHistory.messages.map((msg, index) =>
                    msg.user == "User" ? (
                        <div className="flex justify-end mb-4" key={index}>
                            <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                                {msg.message}
                            </div>
                            <Avatar>
                                <AvatarImage
                                    src="./avatar.png"
                                    alt="User avatar"
                                />
                                <AvatarFallback>AN</AvatarFallback>
                            </Avatar>
                        </div>
                    ) : (
                        <div className="flex justify-start mb-4" key={index}>
                            <Avatar>
                                <AvatarImage
                                    src="./openai.png"
                                    alt="User avatar"
                                />
                                <AvatarFallback>AI</AvatarFallback>
                            </Avatar>
                            <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                                {msg.message}
                            </div>
                        </div>
                    )
                )}
            </div>

            <MathEqn />
        </section>
    );
}
