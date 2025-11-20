const testConfig = {
  staging: `https://st2016.inv.bg/`,
  dev1: `https://dev1-st2016.inv.bg/`,
  dev2: `https://dev2-st2016.inv.bg/`,
  dev3: `https://dev2-st2016.inv.bg/`,
  api: `https://api.inv.bg/v3/`,
};

// set default ENV value:
let ENV = 'staging';
// override ENV value if provided from command line
if (process.env.ENV) {
  ENV = process.env.ENV;
}
// check if provided ENV value is correct
if (!ENV || ![`staging`, `dev1`, `dev2`, `dev3`].includes(ENV)) {
  console.log(`Please provide a correct environment value, you provided: '${ENV}'`);
  process.exit();
}

// set default LANG value:
let LANG = 'bg';
// override LANG value if provided from command line
if (process.env.LANG && process.env.LANG !== 'en_US.UTF-8') {
  LANG = process.env.LANG;
}
// check if provided LANG value is correct
if (!LANG || ![`en`, `bg`].includes(LANG)) {
  console.log(`Please provide a correct language value, you provided: '${LANG}'`);
  process.exit();
}

// set default SLOWMO value:
let SLOWMO = 0;
// override SLOWMO value if provided from command line
if (process.env.SLOWMO) {
  SLOWMO = Number(process.env.SLOWMO);
}

console.log(`\nRunning tests with Params: \nenvironment: "${ENV}" \nlanguage: "${LANG}" \nslow motion: "${SLOWMO / 1000} sec." \n`);

export { ENV, LANG, SLOWMO, testConfig };
