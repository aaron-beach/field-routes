import { Formik, Field } from 'formik';
import styled from 'styled-components';
import Button from '../Button';

const SignUp = () => {
	const Form = styled.form`
		background-color: white;
		box-shadow: 0px 24px 32px #00000014;
		display: grid;
		flex-direction: column;
		gap: 28px 16px;
		grid-template-columns: 1fr 1fr;
		height: 496px;
		margin: 80px;
		padding: 40px;
		width: 656px;
		#position-select,
		.checkbox-options {
			grid-column: 1 / span 2;
		}
		.checkbox-options {
			text-align: center;
		}
		input,
		select {
			border: 1px solid #d0d0d0;
			color: #a2a2a2;
			font-size: 16px;
			padding: 0 16px;
		}
		option {
			color: #a2a2a2;
		}
	`;
	return (
		<>
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					companyName: '',
					phone: '',
				}}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 500));
					alert(JSON.stringify(values, null, 2));
				}}>
				<Form>
					<label htmlFor='firstName' hidden>
						First Name
					</label>
					<Field id='firstName' name='firstName' placeholder='First Name' />

					<label htmlFor='lastName' hidden>
						Last Name
					</label>
					<Field id='lastName' name='lastName' placeholder='Last Name' />

					<label htmlFor='company' hidden>
						Company Name
					</label>
					<Field id='company' name='company' placeholder='Company Name' />

					<label htmlFor='email' hidden>
						Email
					</label>
					<Field
						id='email'
						name='email'
						placeholder='jane@acme.com'
						type='email'
					/>

					<label htmlFor='phone' hidden>
						Phone
					</label>
					<Field id='phone' name='phone' placeholder='Phone' />

					<label htmlFor='industry-select' hidden>
						Industry
					</label>
					<select name='industry' id='industry-select'>
						<option value=''>Industry</option>
						<option value='web-development'>Dog</option>
						<option value='janitorial'>Cat</option>
					</select>

					<label htmlFor='position-select' hidden>
						Position
					</label>

					<select name='position' id='position-select'>
						<option value=''>Position Applying For</option>
						<option value='front-end'>Front-end Web Developer</option>
						<option value='full-stack'>Full-stack Developer</option>
					</select>

					<div
						role='group'
						aria-labelledby='checkbox-group'
						className='checkbox-options'>
						<span id='checkbox-group'>
							Are you located in the United States?
						</span>
						<label>
							Yes
							<Field type='checkbox' name='checked' value='Yes' />
						</label>
						<label>
							No
							<Field type='checkbox' name='checked' value='No' />
						</label>
					</div>

					<Button name='Send Info' variant='large' type='submit'>
						Submit
					</Button>
				</Form>
			</Formik>
		</>
	);
};

export default SignUp;
