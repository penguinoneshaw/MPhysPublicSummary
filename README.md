# Singing in a Warming Ocean
This is the public summary for my MPhys project, which looked at long term variations in a feature of oceans, the SOFAR channel. It takes the form of a terminal-style interface which students (aimed at roughly KS3/GCSE level) can interrogate at their own pace to investigate topics which interest them.

## Getting started — Development
This project requires node.js to bundle its styles and scripts. It is written using `xterm.js`.

Clone this repository and install its dependencies:

```bash
git clone https://github.com/penguinoneshaw/MPhysPublicSummary
cd MPhysPublicSummary
yarn install
```

The `public/index.html` file contains a `<script src='bundle.js'>` tag, which sources everything needed (including stylesheets) from the `src` folder.

`yarn run build` builds the application to `public/bundle.js`, along with a sourcemap file for debugging.

`yarn start` launches a server, using [serve](https://github.com/zeit/serve). Navigate to [localhost:3000](http://localhost:3000).

`yarn run watch` will continually rebuild the application as your source files change.

`yarn run dev` will run `npm start` and `npm run watch` in parallel.

## License

[MIT](LICENSE).
