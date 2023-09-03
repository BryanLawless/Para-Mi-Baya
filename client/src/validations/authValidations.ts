import { Login, Register } from '@/types/authTypes';
import { ObjectSchema, object, string } from 'yup';

export const loginSchema: ObjectSchema<Login> = object({
	email: string().required('Email is required'),
	password: string().required('Password is required')
});

export const registerSchema: ObjectSchema<Register> = object({
	email: string().required('Email is required'),
	username: string().required('Username is required'),
	password: string().required('Password is required'),
	confirmPassword: string().required('Confirm password is required')
});
