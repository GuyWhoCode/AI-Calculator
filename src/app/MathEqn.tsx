import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChatHistory } from "@/lib/chatHistoryContext";
import { useState } from "react";

export default function MathEqn() {
    const { setChatHistory } = useChatHistory();
    const [mathEqn, setMathEqn] = useState<string>("");

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
            />
            <Button
                variant="outline"
                size="lg"
                onClick={() => {
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
                }}
            >
                Submit
            </Button>
        </div>
    );
}
