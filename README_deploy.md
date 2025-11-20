ParkIT static demo — deploy notes
--------------------------------

Files:
- index.html
- styles.css
- assets/* (images)

Deploy to Vercel
1. Create a GitHub repo and push these files to the repo root.
2. In Vercel: New Project → Import from GitHub → select repo.
3. For a static site, Vercel usually auto-detects. If not:
   - Build Command: leave empty
   - Output Directory: root (leave blank) or "/"
4. Deploy — Vercel will give you a public URL.

Upload ZIP directly (alternative)
- Compress the whole folder into parkit_demo.zip
- In Vercel: New Project → Import → Upload ZIP
