import './Register.css';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [profession, setProfession] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [check, setCheck] = useState(false);
    const handleCheck = () => {
        setCheck(!check);
    }

    async function registerUser(event) {
        event.preventDefault();
        const response = await fetch('http://localhost:8080/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                profession,
                password,
                confirmpassword,
            })
        })
        const data = await response.json()

        if (data.status === 'password and confirmpassword should be same') {
            alert("password and confirmpassword should be same")
            navigate('/register')
        }else {
            navigate('/')
        }
    }

    return (
        <div className="registercontainer">
            <div className='registersignin'>
                <h1>Welcome Page<br />
                    <span className='second'>One line text</span><br />
                    <span className='third'> Will Be Here</span></h1>
                <p className='signin'>Sign in to continue access pages</p>
                <p className='smallpara'>Already Have An Account</p>
                <Link to={'/'}><button className='signinbtn'>Sign In</button></Link>
            </div>
            <div className='register'>
                <h1>Register</h1>
                <p>Register to continue access pages</p>
                <form onSubmit={registerUser}>
                <div className='inputs'>
                    <input type='text' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <div className='rline'>
                        <div className='inline'></div>
                        <div className='rinline'></div>
                    </div>
                    <input type='number' placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <input type='text' placeholder='Profession' value={profession} onChange={(e) => setProfession(e.target.value)} />
                    <br />
                    <div className='rline'>
                        <div className='inline'></div>
                        <div className='rinline'></div>
                    </div>
                    <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type='password' placeholder='Confirm Password' value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} />
                    <br />
                    <div className='rline'>
                        <div className='inline'></div>
                        <div className='rinline'></div>
                    </div>
                    </div>
                    <div>
                        <input onChange={handleCheck} type="checkbox" id="chckbox" />
                        <span className='chcktxt'>I agree to Terms & Condition receiving marketing and promotional materials</span>
                    </div>
                    {!check ? <h3>Agree Terms and Conditions</h3> : <input disabled={!check} id='btnregister' type='submit' value='Register' />}
                </form>
            </div>
        </div>
    );
}

export default Register;