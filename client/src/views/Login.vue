<template>
	<div class="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
		<div class="sm:mx-auto sm:w-full sm:max-w-sm">
			<img class="mx-auto h-20 w-auto" :src="Logo" alt="Your Company" />
			<h2
				class="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-white">
				Login to your account
			</h2>
		</div>

		<div class="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
			<Form
				@submit="loginSubmit"
				:validation-schema="loginSchema"
				v-slot="{ errors }"
				class="space-y-6">
				<div>
					<label
						for="email"
						class="block text-sm font-medium leading-6 text-white"
						>Email address</label
					>
					<Field
						name="email"
						type="text"
						class="block w-full rounded-md border-0 outline-none p-3.5 bg-primaryInputBg text-white shadow-sm ring-1 ring-inset ring-primaryInputOutline placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
					<div class="mt-2">{{ errors.email }}</div>
				</div>

				<div>
					<div class="flex items-center justify-between">
						<label
							for="password"
							class="block text-sm font-medium leading-6 text-white"
							>Password</label
						>
						<div class="text-sm">
							<a
								href="#"
								class="font-semibold text-primary hover:text-primaryHover"
								>Forgot password?</a
							>
						</div>
					</div>
					<div class="mt-2">
						<Field
							name="password"
							type="password"
							class="block w-full rounded-md border-0 outline-none p-3.5 bg-primaryInputBg text-white shadow-sm ring-1 ring-inset ring-primaryInputOutline placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />
					</div>
					<div class="mt-2">{{ errors.password }}</div>
				</div>

				<div>
					<button
						type="submit"
						class="flex w-full justify-center rounded-md bg-primary px-3 py-3.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
						Login
					</button>
				</div>
			</Form>

			<p class="mt-6 text-center text-sm text-white">
				Don't have an account?
				<a
					@click="redirect('register')"
					class="font-semibold leading-6 text-primary hover:text-primaryHover hover:cursor-pointer"
					>Create One</a
				>
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Login } from '@/types/authTypes';
import { Form, Field } from 'vee-validate';
import { redirect } from '@/helpers/util.js';
import AuthService from '@/services/authService';
import { loginSchema } from '@/validations/authValidations';

import Logo from '@/assets/images/logo.png';

async function loginSubmit(values: Login) {
	const login = await AuthService.login({
		email: values.email,
		password: values.password
	} as Login);

	redirect('');
}
</script>

<style lang="css" scoped></style>
