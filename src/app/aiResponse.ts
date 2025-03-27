"use server"
import OpenAI from "openai";

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});

export async function evaluateMathEqn(mathEqn: string) {
    const response = await openai.responses.create({
        model: "gpt-4o-mini",
        input: [
            {
                role: "system",
                content:
                    "Evaluate the user equations like a calculator. Valid operations are add, subtract, multiply, divide, log, exponent, power, and trig functions. Any other valid operations result in error.",
            },
            {
                role: "user",
                content: `Evaluate ${mathEqn}`,
            },
        ],
        text: {
            format: {
                type: "json_schema",
                name: "calculator_answer",
                schema: {
                    type: "object",
                    properties: {
                        answer: {
                            type: "number",
                        },
                        errorMessage: {
                            type: "string",
                        },
                    },
                    required: ["answer", "errorMessage"],
                    additionalProperties: false,
                    strict: true,
                },
            },
        },
    });
    console.log("RESPONSE")
    console.log(response);
    return JSON.parse(response.output_text);
}
