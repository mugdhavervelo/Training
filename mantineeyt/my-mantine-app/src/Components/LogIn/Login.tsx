import { useState } from 'react';
import { 
  TextInput, 
  PasswordInput, 
  Button, 
  Text, 
  Container, 
  Stack, 
  Group, 
  Anchor, 
  Image,
  Box
} from '@mantine/core';
import { useForm } from '@mantine/form';
import './Login.css';

interface SignUpForm {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Login() {  // Fix function name    {
  const [loading, setLoading] = useState(false);

  const form = useForm<SignUpForm>({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: {
      fullName: (value) => (value.trim().length > 0 ? null : 'Full name is required'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => 
        value.length >= 6 && /[A-Z]/.test(value) && /[0-9]/.test(value) && /[^A-Za-z0-9]/.test(value)
          ? null
          : 'Password must be at least 6 characters, 1 special character, 1 capital letter, and 1 number',
      confirmPassword: (value, values) => 
        value === values.password ? null : 'Passwords do not match',
    },
  });

  const handleSubmit = async (values: SignUpForm) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(values);
    } catch (error) {
      console.error('Sign up error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="signup-container">
      <Container size={420}>
        <Stack gap="lg">
          <div className="logo-container">
            <Image
              src="/vocare-logo.png"
              alt="VoCare Logo"
              w={280}
              fit="contain"
            />
            <Text className="tagline">
              HEALTH MONITORING MADE SIMPLE
            </Text>
          </div>

          <Text size="xl" fw={500} className="signup-title">
            Join Us Now
          </Text>

          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack gap="md">
              <TextInput
                required
                label="Full Name"
                placeholder="Your full name"
                {...form.getInputProps('fullName')}
              />
              
              <TextInput
                required
                label="Email"
                placeholder="your@email.com"
                {...form.getInputProps('email')}
              />

              <PasswordInput
                required
                label="Password"
                placeholder="Your password"
                {...form.getInputProps('password')}
              />

              <PasswordInput
                required
                label="Confirm Password"
                placeholder="Re-type your password"
                {...form.getInputProps('confirmPassword')}
              />

              <Button
                fullWidth
                type="submit"
                loading={loading}
                className="signup-button"
              >
                Sign Up
              </Button>
            </Stack>
          </form>

          <Text ta="center" mt="md">
            Already have an account?{' '}
            <Anchor component="button" type="button" className="signin-link">
              Sign In
            </Anchor>
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
