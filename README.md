# SHADOW DOM AUTOMATION

This repository provides a comparison of Selenium, Cypress, and Playwright for handling Shadow DOM elements.

## Python Selenium

Pre-requisites: Python 3.11

Navigate to `py-selenium` directory

```bash
cd py-selenium
```

Create and Activate virtual environment

```bash
python -m venv .venv
source .venv/bin/activate
```

Install from `requirement.txt`

```bash
pip install -r requirements.txt
```

Execute the test

```bash
python main.py
```

### Javascript Cypress

Pre-requisites: NodeJS

Navigate to `js-cypress` directory

```bash
cd js-cypress
```

Install dependencies

```bash
npm install
```

Run Cypress Tests

```bash
npx cypress run
```

### Javascript Playwright

Navigate to `js-playwright` directory

```bash
cd js-playwright
```

Install dependencies

```bash
npm install
```

Run Playwright Test

```bash
node tests/index.js
```
