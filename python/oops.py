class employee:
    def __init__(self, name, age, dept, salary):
        self.name = name
        self.age = age
        self.dept = dept
        self.salary = salary

    def display(self):
       print(f"name: {self.name}")
       print(f"age: {self.age}")
       print(f"dept: {self.dept}")
       print(f"salary: {self.salary}")

    def deptchange(self, new_dept):
        self.dept = new_dept
        print(f"changed to {new_dept}")




emp1 = employee("Mugdha", 21, 'IT', 20000)
emp2 = employee("Jim", 21, 'IT', 20000)

emp1.display()
emp1.deptchange("HR")
emp1.display()
emp2.display()
