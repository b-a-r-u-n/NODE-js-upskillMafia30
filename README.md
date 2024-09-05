
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
   ![Screenshot 2024-09-05 132231](https://github.com/user-attachments/assets/dfdd96c6-b59d-4ddf-8bbf-924b68fb3384)

  - `/about` serves `About.html`
   ![Screenshot 2024-09-05 132253](https://github.com/user-attachments/assets/b8f6c715-aeda-4338-a02b-2be6bae867e4)

  - `/contact` serves `Contact.html`
   ![Screenshot 2024-09-05 132307](https://github.com/user-attachments/assets/a07f704b-e919-497d-9094-0d7f1d3073fb)

  - Any other URL serves `Error.html` with a `404` status code.
   ![Screenshot 2024-09-05 132320](https://github.com/user-attachments/assets/3a23508a-05bd-42bc-928c-e63cf0e4ff05)

