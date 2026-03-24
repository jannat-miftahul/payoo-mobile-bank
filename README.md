# Payoo – Mobile Financial Service (MFS)

A lightweight, browser-based mobile banking simulation built with vanilla HTML, JavaScript, Tailwind CSS, and DaisyUI. The UI is rendered inside a phone mockup to mimic a real mobile app experience.

## Features

- **Login** – Authenticate with a mobile number and 4-digit PIN
- **Dashboard** – View available account balance at a glance
- **Add Money** – Deposit funds into the account (PIN-verified)
- **Cash Out** – Withdraw money from the account (PIN-verified)
- **Transaction History** – Browse a log of all past transactions

## Tech Stack

| Technology                                     | Purpose                      |
| ---------------------------------------------- | ---------------------------- |
| HTML5                                          | Page structure               |
| Vanilla JavaScript                             | App logic & DOM manipulation |
| [Tailwind CSS](https://tailwindcss.com/) (CDN) | Utility-first styling        |
| [DaisyUI](https://daisyui.com/) v4 (CDN)       | UI components & phone mockup |

## Project Structure

```
payoo-mobile-bank/
├── index.html
├── home.html
├── images/
└── js/
```

## Getting Started

No build step or server required — just open the files in a browser.

1. Clone the repository:
    ```bash
    git clone https://github.com/jannat-miftahul/payoo-mobile-bank.git
    cd payoo-mobile-bank
    ```
2. Open `index.html` in your browser.
3. Log in with the demo credentials:
    - **Mobile Number:** `0123456789`
    - **PIN:** `1234`
