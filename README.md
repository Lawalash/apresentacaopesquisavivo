<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1YK3VS-L9IRapTlvnLblP9WiM94e0Cwoi

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to Netlify

1. Commit and push this project to a Git repository provider (GitHub, GitLab, etc.).
2. In Netlify, create a new site from your repository and set:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Add an environment variable in Netlify > Site configuration > Environment variables:
   - `GEMINI_API_KEY` with your Gemini API key value.
4. Trigger a deploy. The included [`netlify.toml`](netlify.toml) also configures SPA redirects so client-side routes resolve correctly.
