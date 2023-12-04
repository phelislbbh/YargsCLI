## Prerequisites

- **Node.js**: Ensure Node.js is installed on your system.
- **Dependencies**: Install all necessary dependencies by navigating to the project's root directory and running either `npm install` or `yarn install`.

## Running the Application

### Building the Application

- **Compile Code**: Before running the app, you need to compile the TypeScript code to JavaScript. Execute `yarn build` or `npm run build`. This will generate the necessary JavaScript files in the `dist` directory.

### 1. Run & Query the Web API

- **Start the API**: Launch the API by running `yarn api` or `npm run api`. The server will start on port 8080.

- **API Endpoints**: Use tools like Postman or your web browser to query the following endpoints:
  - **Ongoing Trials**: `http://localhost:8080/trials/ongoing`
  - **Trials by Country**: `http://localhost:8080/trials/country/FR` (Replace `FR` with the desired country code, case-insensitive)
  - **Trials by Sponsor**: `http://localhost:8080/trials/sponsor/Sanofi` (Replace `Sanofi` with the desired sponsor name, case-insensitive)

### 2. Using the Command-Line Interface (CLI)

- **CLI Commands**: Execute various CLI commands and optionally direct output to a file. Files are provided for testing, change if desired.

  - **A. Ongoing Trials**:

    - `yarn cli trials all`
    - To save output to a file: `yarn cli trials all --output "./output/all.txt"`

  - **B. Trials by Country (e.g., FR)**:

    - `yarn cli trials country FR`
    - To save output: `yarn cli trials country FR --output "./output/country.txt"`

  - **C. Trials by Sponsor (e.g., Sanofi)**:
    - `yarn cli trials sponsor Sanofi`
    - To save output: `yarn cli trials sponsor Sanofi --output "./output/sponsor.txt"`

#### Output Format

- **Formatted Output Examples**:
  - `yarn cli trials country FR`:
    ```
    [
      "Olaparib + Sapacitabine in BRCA Mutant Breast Cancer, France",
      "Topical Calcipotriene Treatment for Breast Cancer Immunoprevention, France"
    ]
    ```
  - `yarn cli trials sponsor Sanofi`:
    ```json
    [
      {
        "name": "Olaparib + Sapacitabine in BRCA Mutant Breast Cancer",
        "sponsor": "Sanofi",
        "start_date": "2019-01-01",
        "end_date": "2025-08-01"
      },
      {
        "name": "Topical Calcipotriene Treatment for Breast Cancer Immunoprevention",
        "sponsor": "Sanofi",
        "start_date": "2018-03-20",
        "end_date": "2032-09-10"
      }
    ]
    ```

### 3. Running Tests

- **All Tests**: Run `yarn test` or `npm run test` to execute all tests.
- **API Integration Tests**: For API-specific tests, use `yarn test:api` or `npm run test:api`.
- **CLI Integration Tests**: For CLI-specific tests, use `yarn test:cli` or `npm run test:cli`.

### Development Mode

- **Development Server**: During development, use `yarn dev` or `npm run dev` to build and start the API automatically.

### Notes

- Ensure your terminal or command prompt is located at the project root when executing these commands.
- The output paths provided in the CLI commands (e.g., `./output/all.txt`) are relative to the project root. Ensure these directories exist or adjust the paths according to your project structure.

## Architecture and Design Choices

In developing the Customer Success Team App, we prioritized domain complexity, reliability, usability, scalability, and maintainability. These considerations influenced our architectural and design decisions.

### CLI with YARGS:

For the CLI, we chose YARGS for its advanced features, including complex argument parsing, conditional logic, and robust error handling, ensuring a scalable and user-friendly interface.

### Domain-Driven Design (DDD):

To address the health sector's specific complexities, we adopted a Domain-Driven Design approach. This aligns the development closely with domain needs, facilitating effective management of intricate domain logic.

### Clean Architecture for Scalability:

We integrated Clean Architecture principles to enhance scalability and maintainability. This approach segregates complex business logic from external interfaces, supporting adaptable and scalable code.

### Overall Strategy:

Combining DDD with Clean Architecture provides a solid foundation for a scalable, maintainable application that meets the evolving demands of the health domain.
