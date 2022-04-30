//tipo operation que contiene los valores add, multiply, divide, substract
type Operation = 'add' | 'multiply' | 'divide' | 'substract';
type Result = number;

const calculator = (a: number, b: number, op: Operation ): Result => {
   //operaciones
  if(op === 'add') return a + b;
  if(op === 'substract') return a - b;
  if(op === 'multiply') return a * b;
  if(op === 'divide') {
    if(b === 0) throw new Error("No se puede dividir por 0");
    return a / b;
  }

  throw new Error("Operacion no valida");
};

try {
  console.info(calculator(2, 4, 'add')); 
} catch (error) {
  console.info('Algo salió mal: ',error);
}