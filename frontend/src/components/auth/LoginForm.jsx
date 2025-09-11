import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import Button from '../common/Button'
import Input from '../common/Input'

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [serverError, setServerError] = useState('')
  const { login, loading } = useAuth()

  const onSubmit = async (data) => {
    const result = await login(data)
    if (result.success) {
      // Login successful, redirect handled by AuthContext
    } else {
      setServerError(result.error)
    }
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-6">Login to Pacepal</h2>
      
      {serverError && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md">
          {serverError}
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          error={errors.email?.message}
        />
        
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          {...register('password', { 
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters'
            }
          })}
          error={errors.password?.message}
        />
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>
          
          <div className="text-sm">
            <a href="#" className="font-medium text-primary hover:text-primary-dark">
              Forgot password?
            </a>
          </div>
        </div>
        
        <Button
          type="submit"
          variant="primary"
          size="md"
          className="w-full"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="font-medium text-primary hover:text-primary-dark">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginForm