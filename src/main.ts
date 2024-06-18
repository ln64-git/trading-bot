// main.ts
import { runWorkflow } from "./utils/workflow";

function main() {
  const args = process.argv.slice(2); // Get the command-line arguments, excluding the node executable and script file

  if (args.length !== 1) {
    console.error('Usage: bun main.js <stock_symbol>');
    process.exit(1);
  }

  const symbol = args[0].toUpperCase(); // Convert the symbol to uppercase
  runWorkflow(symbol).catch(error => console.error('Error starting workflow:', error));
}

main()