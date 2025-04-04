import pandas
import matplotlib.pyplot as plt


data = pandas.read_csv('empdata.csv')
plt.plot(data.emp_id, data.salary)

plt.xlabel('emp_id')
plt.ylabel('salary')
plt.show()


plt.plot(data.emp_id, data.salary)
plt.show()


plt.scatter(data.emp_id, data.salary)
plt.show()