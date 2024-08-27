
## Prerequisites

- Node.js installed on your machine.

## How to Run

1. **Clone the repository** or download the code to your local machine.

2. **Navigate to the project directory**:

    ```bash
    cd project-folder
    ```

3. **Start the server**:

    ```bash
    node server.js
    ```

4. **Open your browser and visit**:

    - Home: `http://127.0.0.1:3000/`
    - About: `http://127.0.0.1:3000/about`
    - Contact: `http://127.0.0.1:3000/contact`
    - Error (for any other path): `http://127.0.0.1:3000/unknown`

## How It Works

- The server listens on `http://127.0.0.1:3000`.
- Depending on the URL path, the server will serve one of the HTML files:
  - `/` serves `Home.html`
  - `/about` serves `About.html`
  - `/contact` serves `Contact.html`
  - Any other URL serves `Error.html` with a `404` status code.

