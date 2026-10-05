# HOM — Hispanic Opportunities in Medicine

A premium, responsive, GitHub Pages-ready website for Hispanic Opportunities in Medicine.

## What is included

- `index.html` — full one-page website
- `style.css` — responsive visual system and animations
- `script.js` — mobile menu, scroll progress, reveal effects, role switcher
- `assets/hom-logo.png` — uploaded HOM logo
- `assets/favicon.png` — site favicon
- `CNAME` — prepared for `www.homnonprofit.org`
- `.nojekyll` — GitHub Pages compatibility marker

## Publish on GitHub Pages

1. Create a **Public** GitHub repository, for example `HOM-Website`.
2. Upload every file/folder from this project into the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Save.
7. Wait for GitHub to finish the deployment.

## Custom domain

The included `CNAME` file is set to:

www.homnonprofit.org

To use it, in GitHub go to **Settings → Pages → Custom domain** and make sure the domain appears there.

Your domain registrar's DNS records also need to point the domain to GitHub Pages. GitHub's Pages settings will tell you exactly which DNS records to use.

If you want to publish only at the free `github.io` address for now, delete the `CNAME` file before publishing.

## Easy customization

Search the files for:
- `Hispanic Opportunities in Medicine`
- `hello@homnonprofit.org`
- `@hom.nonprofit`

You can replace the placeholder copy and contact information without changing the layout.

## No paid dependencies

The site uses plain HTML, CSS, and JavaScript. Google Fonts are loaded from Google's public CDN for the typeface. The site itself does not require a framework, npm, or paid hosting.
