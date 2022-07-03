import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-TabKSBLqhYTeEdgqPm8xCR1C",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Define the get route
export async function get() {
    const response = await openai.listEngines();
    return {
        statusCode: 200,
        body: response.data,
    };
}