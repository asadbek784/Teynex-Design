// ponytail: AI generation disabled — no external API key is used. Restore from git history to re-enable.
export async function POST() {
    return new Response(
        JSON.stringify({ error: 'AI code generation is disabled in this deployment.' }),
        { status: 503, headers: { 'Content-Type': 'application/json' } },
    );
}
