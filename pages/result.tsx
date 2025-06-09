// File: pages/result.tsx
import { useEffect, useState } from 'react';

export default function Result() {
  const [summary, setSummary] = useState<{ legal: string; plain: string } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('verdict_summary');
    if (stored) {
      setSummary(JSON.parse(stored));
    }
  }, []);

  if (!summary) {
    return (
      <main className="min-h-screen flex items-center justify-center text-gray-700 dark:text-white">
        <p>No summary found. Please go back and generate one.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-10 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">🧾 Summary</h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">📘 Legal Summary</h2>
          <p className="whitespace-pre-line bg-zinc-50 dark:bg-zinc-800 p-4 rounded-xl border dark:border-zinc-700">
            {summary.legal}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">💬 Plain English Summary</h2>
          <p className="whitespace-pre-line bg-zinc-50 dark:bg-zinc-800 p-4 rounded-xl border dark:border-zinc-700">
            {summary.plain}
          </p>
        </div>
      </div>
    </main>
  );
}
