const multiplicator = (a: number, b: number, printText: string) => {
  console.info(printText, a * b);
};

//multiplicator(2, 4, "Multipliet numbers 2 and 4, the result is: ");

//Process.argv
const parseArguments = (argv): Array<number> => {
  if(argv.length !== 4) throw new Error("Wrong number of arguments");

  const firstNumber = Number(argv[2]);
  const secondNumber = Number(argv[3]);
  if(!isNaN(firstNumber) && !isNaN(secondNumber)){
    return [
      firstNumber,
      secondNumber,
    ]
  }
  throw new Error("Provider values were not numbers!");
};

//console.info(process.argv);
const cleanArguments = parseArguments(process.argv);
const a: number = Number(cleanArguments[0]);
const b: number = Number(cleanArguments[1]);
multiplicator(a, b, `Multipliet numbers ${a} and ${b}, the result is: `);