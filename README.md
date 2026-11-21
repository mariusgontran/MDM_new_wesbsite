# MDM Communication

Static website design prepared for client review. Built with HTML, CSS and vanilla JavaScript; no build step or package installation is required.

## Preview locally

From this folder, run:

```sh
python -m http.server 8081 --bind 127.0.0.1
```

Open http://127.0.0.1:8081/ in a browser.

## GitHub and client preview

Upload the contents of this folder as the repository root. For GitHub Pages, configure deployment from the root of the chosen branch. The site uses relative asset paths, so it can also run from a project repository URL. Publishing is a separate step; this cleanup does not upload or publish anything.

## Project structure

- `index.html` — website content and metadata
- `css/styles.css` — base styles and typography
- `css/refinements.css` — layout, frosted surfaces and responsive refinements
- `css/hero-map.css` — map hero and primary button styles
- `js/app.js` — navigation and current enquiry handling
- `assets/` — images, service icons and brand logos used by the site

## Review status

The enquiry form submits to Web3Forms using the business-supplied public access key. JavaScript shows sending, success and error feedback without leaving the page; without JavaScript, the form uses Web3Forms’ hosted success page. It includes a hidden spam-trap field. The access key is intentionally public, not a server secret. Verify delivery to the intended business inbox before launch; no live enquiry was sent during integration checks.

The site loads Lato, Open Sans and JetBrains Mono through Google Fonts, and Font Awesome through a CDN. The hero headline uses Georgia. These external resources require internet access. The Melbourne map was supplied for this design; service icons and brand logos were retained from the existing project.

The page includes the business contact details and registration information supplied for the review. Confirm final content and asset usage rights with the business before public launch.
