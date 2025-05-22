# SQL Playground with Natural Language Query Support

A modern web application that allows you to explore a bike store database using both direct SQL queries and natural language. This project demonstrates how to use AI to translate plain English queries into SQL.

## Features

- **Dual Query Modes**: Write SQL directly or describe what you want in plain English
- **In-Browser SQLite**: All database operations run locally in your browser for privacy and performance
- **Interactive Schema Viewer**: Easily explore database tables, columns, and relationships
- **AI-Powered Translation**: Uses OpenAI's GPT-4o to convert natural language to SQL
- **Bike Store Sample Database**: Pre-loaded with sample data for exploration

## Sample Use Cases

- Write direct SQL queries like `SELECT * FROM customers LIMIT 10`
- Ask natural language questions like "Show me the 5 most expensive bikes" or "Which store has the most inventory?"
- Learn SQL by seeing how your natural language queries translate to SQL code

## Tech Stack

- **Framework**: Next.js 15 with React 19
- **Database**: SQL.js (SQLite compiled to WebAssembly)
- **AI Integration**: OpenAI API via AI SDK
- **UI Components**: Custom components with Radix UI primitives
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.17.0 or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nl2sql-generator.git
   cd nl2sql-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   ```

3. Create a `.env.local` file with your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Database Schema

The application includes a pre-loaded bike store database with the following tables:

- **brands**: Bicycle manufacturers
- **categories**: Product categories
- **products**: Bicycle products with prices
- **customers**: Customer information
- **stores**: Store locations
- **staffs**: Store employees
- **orders**: Customer orders
- **order_items**: Items within orders
- **stocks**: Product inventory by store

## Usage

1. Choose your query mode: SQL or Plain Text
2. Enter your query or question
3. Click "Run Query" to execute
4. View results in the table below

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- SQL.js for in-browser SQLite functionality
- OpenAI for natural language processing