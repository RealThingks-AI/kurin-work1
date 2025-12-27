import { useState } from "react";
import { Button } from "@/components/ui/button";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
      return;
    }
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperator: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operator) {
      const result = calculate(previousValue, inputValue, operator);
      setDisplay(String(result));
      setPreviousValue(result);
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (left: number, right: number, op: string): number => {
    switch (op) {
      case "+":
        return left + right;
      case "-":
        return left - right;
      case "×":
        return left * right;
      case "÷":
        return right !== 0 ? left / right : 0;
      default:
        return right;
    }
  };

  const equals = () => {
    if (operator && previousValue !== null) {
      const inputValue = parseFloat(display);
      const result = calculate(previousValue, inputValue, operator);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperator(null);
      setWaitingForOperand(true);
    }
  };

  const buttons = [
    { label: "C", action: clear, variant: "secondary" as const },
    { label: "±", action: () => setDisplay(String(-parseFloat(display))), variant: "secondary" as const },
    { label: "%", action: () => setDisplay(String(parseFloat(display) / 100)), variant: "secondary" as const },
    { label: "÷", action: () => performOperation("÷"), variant: "operator" as const },
    { label: "7", action: () => inputDigit("7"), variant: "default" as const },
    { label: "8", action: () => inputDigit("8"), variant: "default" as const },
    { label: "9", action: () => inputDigit("9"), variant: "default" as const },
    { label: "×", action: () => performOperation("×"), variant: "operator" as const },
    { label: "4", action: () => inputDigit("4"), variant: "default" as const },
    { label: "5", action: () => inputDigit("5"), variant: "default" as const },
    { label: "6", action: () => inputDigit("6"), variant: "default" as const },
    { label: "-", action: () => performOperation("-"), variant: "operator" as const },
    { label: "1", action: () => inputDigit("1"), variant: "default" as const },
    { label: "2", action: () => inputDigit("2"), variant: "default" as const },
    { label: "3", action: () => inputDigit("3"), variant: "default" as const },
    { label: "+", action: () => performOperation("+"), variant: "operator" as const },
    { label: "0", action: () => inputDigit("0"), variant: "default" as const, span: true },
    { label: ".", action: inputDecimal, variant: "default" as const },
    { label: "=", action: equals, variant: "operator" as const },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-xs rounded-2xl bg-card p-4 shadow-2xl">
        {/* Display */}
        <div className="mb-4 rounded-lg bg-muted p-4 text-right">
          <div className="text-sm text-muted-foreground h-5">
            {previousValue !== null && operator ? `${previousValue} ${operator}` : ""}
          </div>
          <div className="text-4xl font-bold text-foreground truncate">
            {display}
          </div>
        </div>

        {/* Button Grid */}
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn, index) => (
            <Button
              key={index}
              onClick={btn.action}
              className={`h-16 text-xl font-semibold transition-all active:scale-95 ${
                btn.span ? "col-span-2" : ""
              } ${
                btn.variant === "operator"
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : btn.variant === "secondary"
                  ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {btn.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
