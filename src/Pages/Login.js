import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Box, Button, Container } from '@mui/material'
import logo from '../Assets/Images/Overpower-Vertical-Web-150px.png'



export default function Login() {

    const getDomainInfo = async () => {

        const [loading, setLoading] = useState(false);
        try {
            setLoading(true); // Set loading before sending API request
            const res = await axios.get('api/search/', {
                params: { keyword },
            });
            const response = res; // Response received
            setLoading(false); // Stop loading
        } catch (error) {
            setLoading(false); // Stop loading in case of error
            console.error(error);
        }
    };

    const {
        register,
        handleSubmit,
        loading,
        formState: { errors }
    } = useForm()

    const navigate = useNavigate()

    const onSubmit = async (values) => {
        console.log(values)
        navigate('/dashboard')
    }

    return (
        <div className='login'>
            <Container component='main' maxWidth='xs'>
                <Box className='box'>
                    <img src={logo} alt={logo} />
                    <Box
                        component='form'
                        className='form'
                        onClick={handleSubmit(onSubmit)}
                    >
                        <h1>Please Fill to Sign In</h1>
                        <div className='login-input'>
                            <input
                                placeholder='Email'
                                {...register('email', {
                                    required: 'Must enter your email',
                                    pattern: {
                                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                        message: 'Please enter a valid email'
                                    }
                                })}
                            />
                        </div>
                        {errors.email && <p className='error'>{errors.email.message}</p>}
                        <div className='login-input'>
                            <input
                                type='password'
                                placeholder='Password'
                                {...register('password', {
                                    required: 'Please enter a your password'
                                })}
                            />
                        </div>
                        {errors.password && errors.password.type === 'required' && (
                            <p className='error'>Password is required.</p>
                        )}
                        <Button type='submit' fullWidth variant='contained'>
                            {loading ? <>Loading..</> : <> Login</>}

                        </Button>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}
