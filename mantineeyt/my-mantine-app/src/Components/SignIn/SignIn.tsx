// SignIn.tsx
import { useState } from 'react';
import {
  TextInput,
  PasswordInput,
  Checkbox,
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
import './SignIn.css';

interface SignInForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

export default function SignIn() {
  const [loading, setLoading] = useState(false);

  const form = useForm<SignInForm>({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 6 ? 'Password must be at least 6, 1 special character, 1 capital letter and 1 number' : null),
    },
  });

  const handleSubmit = async (values: SignInForm) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(values);
    } catch (error) {
      console.error('Sign in error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="signin-container">
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
          <Text size="xl" fw={500} className="signin-title">
            Sign In
          </Text>
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack gap="md">
              <TextInput
                required
                label="Email"
                placeholder="your@email.com"
                {...form.getInputProps('email')}
                classNames={{
                  input: 'input-field',
                }}
              />
              <PasswordInput
                required
                label="Password"
                placeholder="Your password"
                {...form.getInputProps('password')}
                classNames={{
                  input: 'input-field',
                }}
              />
              <Group justify="space-between" mt="xs">
                <Checkbox
                  label="Remember me?"
                  {...form.getInputProps('rememberMe', { type: 'checkbox' })}
                  classNames={{
                    input: 'checkbox-input',
                  }}
                />
                <Anchor component="button" type="button" className="forgot-password">
                  Forgot password?
                </Anchor>
              </Group>
              <Button
                fullWidth
                type="submit"
                loading={loading}
                className="signin-button"
              >
                Sign In
              </Button>
            </Stack>
          </form>
          <Text ta="center" mt="md">
            {"Don't have an account? "}
            <Anchor href="/login" className="login-link">
              Sign Up
            </Anchor>
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}