import React,{useRef,useState} from 'react'
import {Form,Button,Card,Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link} from 'react-router-dom'

const ForgotPassword = () => {

    

    const emailRef = useRef()
    
    
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
    const [message,setMessage] = useState('')

const {resetPassword} = useAuth()

const handleSubmit = async (e) => {
 e.preventDefault()

 

 try{
     setMessage('')
     setError('')
     setLoading(true)
    await resetPassword(emailRef.current.value)
     setMessage('Check your inbox for further instruction')
 }
 catch{
     setError('Failed to reset password')
 }
 setLoading(false)
}

    return (
       <>
       <Card>
       <Card.Body>
           <h2 className="mb-4 text-center">Password Reset</h2>
           
           {error && <Alert variant='danger'>{error}</Alert>}
           {message && <Alert variant='success'>{message}</Alert>}
       <Form onSubmit={handleSubmit}>
           <Form.Group id='email'>
            <Form.Label>
                Email
            </Form.Label>
            <Form.Control type='email' ref={emailRef} required/>
           </Form.Group>
          
          
           <Button className='w-100' type='submit' disabled = {loading}>Reset Password</Button>
       </Form>
        <div className='w-100 text-center mt-3'>
            <Link to='/Login'>Login</Link>
       </div>
       </Card.Body>

       </Card>
       <div className='w-100 text-center mt-2'>
           Need an account ? <Link to='/signup'>Sign Up</Link>
       </div>
       </>
    )
}

export default ForgotPassword
