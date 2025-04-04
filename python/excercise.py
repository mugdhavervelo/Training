op = ''
result = 0  # Initialize result as None


while op != 'n':
   if(result!=0):
       num1 = result
       num2 = int(input("Enter a number: "))
   else:  # First time or after reset
       num1 = int(input("Enter first number: "))
       num2 = int(input("Enter second number: "))


   operator = input("Enter operator (+, -, *, /): ")


   if operator == "+":
       result = num1 + num2
   elif operator == "-":
       result = num1 - num2
   elif operator == "*":
       result = num1 * num2
   elif operator == "/":
       if num2 == 0:
           print("Error: Division by zero is not allowed!")
           continue  # Skip to next loop iteration
       result = num1 / num2
   else:
       print("Invalid operator! Please enter +, -, *, or /")
       continue  # Skip and ask for input again


   print("The result is:", result)


   # Ask user if they want to continue with the result
   op = input(f"Continue the operation with {result}? (y/n): ").lower()

