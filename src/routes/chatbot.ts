import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-TabKSBLqhYTeEdgqPm8xCR1C",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();

// Define the get route
export function get() {
    return {
        statusCode: 200,
        body: response.data,
    };
}