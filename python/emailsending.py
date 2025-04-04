import smtplib

hostname = 'smtp.gmail.com'
email = 'mugdhadzope@gmail.com'
password = 'txtozenlwjlvjhgo'

with smtplib.SMTP(host = hostname) as connection:
    connection.starttls()
    connection.login(user = email, password = password)
    connection.sendmail(
        from_addr = email,
        to_addrs= email,
        msg= f'Subject : Test email \n\n Hi Mugdha this is a test email \n\n Regards, \n Mugdha'
    )

