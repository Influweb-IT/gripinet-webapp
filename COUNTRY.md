# Gripiradar: country notes

Owned by this repo: `copier update` never touches this file. Write here what is specific to this
app, for whoever maintains it next. The shared setup is in [README.md](README.md).

Template pinned at **v0.3.0** (`.copier-answers.yml`): kit `^0.1.0` (0.1.2), case-web-app-core
2.7.8, case-web-ui 1.15.1. Update with `copier update --trust --vcs-ref <tag>`.

## Languages

`et` (default), `ru`, `en` (fallback). Date locales in `src/index.tsx`: `et`, `ru`, `enGB`.
The kit's default texts (unsubscribe pages) exist only in `en`/`it`: `et`/`ru` fall back to `en`.

## Pages and integrations

- `/results`: kit `iframeEmbed` extension embedding the HIV lab dashboard
  `https://hivlab.github.io/gripiradar/#{lang}` (auto-resize: the page must load
  `@iframe-resizer/child` v5). Replaces the former `ResultsIFrame` component.
- Third parties in `nginx/snippets/csp.conf`: reCAPTCHA and `https://hivlab.github.io`.
- Extra pages (markdown): `/info`, `/survey-data`, `/study-consent`; study extension info on `/home`.

## Country code

- `src/index.scss` + `src/theme/`: Gripiradar colour scheme on top of the case-web-ui helpers.
- No country extensions.

## Deploy

- Built on GitLab (`.gitlab-ci.yml`, kaniko template of gitlab.hpc.ut.ee); the generated
  `.github/workflows/docker-image.yml` is not used.
- Image: unprivileged nginx, **port 8080**, uid 101 (was port 80 before the template migration).
- Env: `.env` (production values). Staging differences, if any, go in `.env.staging`
  (`--build-arg ENV_FILE=.env.staging`).
- Dev server: `yarn start` proxies `/api` to https://staging.gripiradar.ut.ee.
