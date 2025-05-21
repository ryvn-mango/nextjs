"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("/api/v1/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      const result = await response.json();
      setResponse(result.response);
      setPrompt("");
    } catch (error) {
      console.error("Error calling OpenAI:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">AI Text Generation</h1>

        <div className="space-y-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Prompt
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full px-3 py-2 border rounded min-h-[100px]"
                placeholder="Enter your prompt here..."
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            >
              {loading ? "Generating..." : "Generate Response"}
            </button>
          </form>

          {response && (
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Response:</h2>
              <div className="p-4 bg-gray-100 rounded whitespace-pre-wrap">
                {response}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
