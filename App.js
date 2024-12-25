import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Calculator Button Component
const CalculatorButton = ({ value, onPress, style }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={styles.buttonText}>{value}</Text>
  </TouchableOpacity>
);

// Calculator Display Component
const CalculatorDisplay = ({ value }) => (
  <View style={styles.display}>
    <Text style={styles.displayText}>{value}</Text>
  </View>
);

// Main App Component
const App = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstOperand, setFirstOperand] = useState(null);

  const handleButtonClick = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      clear();
    } else if (['+', '-', '*', '/'].includes(value)) {
      setOperator(value);
      setFirstOperand(parseFloat(displayValue));
      setDisplayValue('0');
    } else {
      setDisplayValue(displayValue === '0' ? value : displayValue + value);
    }
  };

  const calculateResult = () => {
    const secondOperand = parseFloat(displayValue);
    let result;

    switch (operator) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
      case '/':
        result = firstOperand / secondOperand;
        break;
      default:
        return;
    }

    setDisplayValue(result.toString());
    setOperator(null);
    setFirstOperand(null);
  };

  const clear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstOperand(null);
  };

  return (
    <View style={styles.container}>
      <CalculatorDisplay value={displayValue} />
      <View style={styles.buttonRow}>
        <CalculatorButton value="1" onPress={() => handleButtonClick('1')} />
        <CalculatorButton value="2" onPress={() => handleButtonClick('2')} />
        <CalculatorButton value="3" onPress={() => handleButtonClick('3')} />
        <CalculatorButton value="+" onPress={() => handleButtonClick('+')} />
      </View>
      <View style={styles.buttonRow}>
        <CalculatorButton value="4" onPress={() => handleButtonClick('4')} />
        <CalculatorButton value="5" onPress={() => handleButtonClick('5')} />
        <CalculatorButton value="6" onPress={() => handleButtonClick('6')} />
        <CalculatorButton value="-" onPress={() => handleButtonClick('-')} />
      </View>
      <View style={styles.buttonRow}>
        <CalculatorButton value="7" onPress={() => handleButtonClick('7')} />
        <CalculatorButton value="8" onPress={() => handleButtonClick('8')} />
        <CalculatorButton value="9" onPress={() => handleButtonClick('9')} />
        <CalculatorButton value="*" onPress={() => handleButtonClick('*')} />
      </View>
      <View style={styles.buttonRow}>
        <CalculatorButton value="0" onPress={() => handleButtonClick('0')} />
        <CalculatorButton value="." onPress={() => handleButtonClick('.')} />
        <CalculatorButton
          value="="
          onPress={() => handleButtonClick('=')}
          style={styles.greenButton}
        />
        <CalculatorButton value="/" onPress={() => handleButtonClick('/')} />
      </View>
      <View style={styles.buttonRow}>
        <CalculatorButton value="C" onPress={() => handleButtonClick('C')} />
      </View>

      {/* Bottom Footer Text */}
      <Text style={styles.footer}>Calc by SairamVempati</Text>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between', // Ensures content fills the space
  },
  display: {
    flex: 2,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  displayText: {
    fontSize: 48,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  greenButton: {
    backgroundColor: '#32CD32', // Green color for "=" button
    borderColor: '#228B22', // Darker green border
  },
  buttonText: {
    fontSize: 24,
    color: '#000',
  },
  buttonRow: {
    flexDirection: 'row',
  },
  footer: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    paddingBottom: 20,
  },
});

export default App;
