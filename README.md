This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest and recommended way to deploy this Next.js application is via [Vercel](https://vercel.com/), the creators of Next.js.

### Step-by-Step Deployment Guide

1. **Push your code to GitHub:**
   - Make sure your latest code is committed and pushed to a GitHub, GitLab, or Bitbucket repository.
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [Vercel.com](https://vercel.com/) and log in (or sign up).
   - Click the **"Add New..."** button and select **"Project"**.
   - Connect your GitHub/GitLab/Bitbucket account if you haven't already.
   - Find your repository in the list and click **"Import"**.

3. **Configure Project Setup:**
   - **Project Name:** Choose a name (e.g., `coceptual-studio`).
   - **Framework Preset:** Vercel should automatically detect **Next.js**.
   - **Root Directory:** If your Next.js app is in a subfolder (like `coceptual-exact`), click **"Edit"** next to Root Directory and select it. Otherwise, leave it as `./`.
   - **Environment Variables:** If you have any variables in a `.env` file (e.g., for analytics or contact forms), add them here.

4. **Deploy:**
   - Click the **"Deploy"** button.
   - Vercel will build the project and deploy it. This usually takes 1-2 minutes.
   - Once completed, you will get a live `your-project.vercel.app` URL!

### Custom Domain Setup (Optional)
If you have a custom domain for Coceptual Studio (e.g., `coceptualstudio.com`):
1. Go to your project dashboard on Vercel.
2. Navigate to **Settings** > **Domains**.
3. Enter your custom domain and follow the instructions to update your DNS records (adding the provided A or CNAME records to your domain registrar).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more detailed configurations.
