import React,{useRef,useState} from 'react'
import {Form,Button,Card,Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link,useHistory} from 'react-router-dom'

const UpdateProfile = () => {

    const history = useHistory()

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)

const {currentUser,updateEmail,updatePassword} = useAuth()

const handleSubmit = e => {
 e.preventDefault()
 setLoading(true)
 setError('')

 if(passwordRef.current.value !== passwordConfirmRef.current.value){
   return setError('Password does not match')
 }

 const promises = []
 if(emailRef.current.value !== currentUser.email){
     promises.push(updateEmail(emailRef.current.value))
 }
 if(passwordRef.current.value){
     promises.push(updatePassword(passwordRef.current.value))
 }

 Promise.all(promises).then(()=>{
     history.push('/firebase-auth')
 }).catch(()=>{
     return setError('Failed to update account')
 }).finally(()=>{
     return setLoading(false)
 })
     
 

}

    return (
       <>
       <Card>
       <Card.Body>
           <h2 className="mb-4 text-center">Update Profile</h2>
           
           {error && <Alert variant='danger'>{error}</Alert>}
       <Form onSubmit={handleSubmit}>
           <Form.Group id='email'>
            <Form.Label>
                Email
            </Form.Label>
            <Form.Control type='email' ref={emailRef}  defaultValue={currentUser.email}/>
           </Form.Group>
           <Form.Group id='password'>
            <Form.Label>
                Password
            </Form.Label>
            <Form.Control type='password' ref={passwordRef}  placeholder='Leave blank to keep the same'/>
           </Form.Group>
           <Form.Group id='password-confirm'>
            <Form.Label>
                Password Confirmation
            </Form.Label>
            <Form.Control type='password' ref={passwordConfirmRef} required placeholder='Leave blank to keep the same'/>
           </Form.Group>
           <Button className='w-100' type='submit' disabled = {loading}>Update</Button>
       </Form>
       </Card.Body>

       </Card>
       <div className='w-100 text-center mt-2'>
            <Link to='/firebase-auth'>Cancel</Link>
       </div>
       </>
    )
}

export default UpdateProfile
