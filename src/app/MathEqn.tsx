import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChatHistory } from "@/lib/chatHistoryContext";
import { useState } from "react";
import { evaluateMathEqn } from "./aiResponse";

export default function MathEqn() {
    const { setChatHistory } = useChatHistory();
    const [mathEqn, setMathEqn] = useState<string>("");

    const submitMathEqn = async () => {
        if (!mathEqn) return;

        setChatHistory(prev => ({
            messages: [
                ...prev.messages,
                {
                    user: "User",
                    message: mathEqn,
                },
            ],
        }));
        setMathEqn("");

        const answerResponse = await evaluateMathEqn(mathEqn);
        setChatHistory(prev => ({
            messages: [
                ...prev.messages,
                {
                    user: "AI",
                    message:
                        answerResponse.answer || answerResponse.errorMessage,
                },
            ],
        }));
    };

    return (
        <div className="flex flex-row items-center">
            <Input
                type="text"
                placeholder="Type math equation here"
                onChange={e => {
                    setMathEqn(e.target.value);
                }}
                value={mathEqn}
                autoFocus
                onKeyDown={e => {
                    if (e.key === "Enter") {
                        submitMathEqn();
                    }
                }}
            />
            <Button variant="outline" size="lg" onClick={submitMathEqn}>
                Submit
            </Button>
        </div>
    );
}
