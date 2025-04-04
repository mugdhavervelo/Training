import React from 'react';
import { Button, Checkbox, TextInput, PasswordInput, Anchor } from '@mantine/core';
import { useForm } from '@mantine/form';
import './SignIn.css';
 // Ensure this file exists

function SignIn() {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length >= 6 ? null : 'Password must be at least 6 characters long'),
    },
  });

  return (
    <div className="signin-container">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <h2>Sign In</h2>
        <TextInput label="Email" placeholder="your@email.com" {...form.getInputProps('email')} />
        <PasswordInput label="Password" placeholder="Enter your password" {...form.getInputProps('password')} />
        
        <div>
          <Checkbox label="Remember me" {...form.getInputProps('rememberMe', { type: 'checkbox' })} />
          <Anchor href="#">Forgot password?</Anchor>
        </div>

        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
}

export default SignIn; // Make sure this is the last line
