import pandas

data = pandas.read_csv('empdata.csv')
print(data)

salary = data['salary']
print(salary)
print(salary.min())
print(salary.max())

fname = data['fname']
print(fname)


emp105 = data[data.emp_id == 105]
print(emp105)

maxsalary = salary.max()
empmax =data[data.salary ==maxsalary]
print(empmax)


salary = data['salary']
print(f"total salary {salary.sum()}")
totalsal = salary.sum()
ppl = len(salary)

avg = totalsal/ppl
print(f"average salary {avg}")

id103 = data[data.emp_id == 103]
fullname = id103.fname +" "+ id103.lname
print(fullname)


# sham = data[data.fname =='Sham']
# sham.salary = 80000
# print(sham)

data.loc[data.emp_id == 102,'salary'] = 80000
print(data)


leena = data.index[data.emp_id ==107].to_list()[0]
data = data.drop(leena)
print(data)


data = data.sort_values(by=['salary'])
print(data)


data['bonus'] = data.salary * 0.1
print(data)

data.to_csv('empdatamodified.csv')

data.drop(['bonus'], axis=1, inplace=True)
print(data)


