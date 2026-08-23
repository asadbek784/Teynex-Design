# Teynex AI integration

1. Store your deployed Design API base URL in your Teynex backend.
2. Search:
   `GET {BASE_URL}/api/search?q=premium dark ai chat&limit=10`
3. Select a result.
4. Fetch the exact file from its `content_url`.
5. Send only that file (or the minimal set of related files) to your AI model.
6. Keep the API key server-side; never expose `TEYNEX_API_KEY` in browser code.
7. For edits larger than a normal JSON request, use Vercel Blob or another persistent object store rather than a Vercel Function request/response.

This architecture keeps the 6,000+ source files out of the model context until they are actually needed.
