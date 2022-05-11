import { useState } from "react";
import { signInAuthUserWithEmailAndPw, signInWithGooglePopup } from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import './sign-in-form.scss';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();

    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInAuthUserWithEmailAndPw(email, password);
            resetFormFields();
        } catch (err) {
            switch (err.code) {
                case "auth/wrong-password":
                    alert('incorrect password');
                    break;
                case "auth/user-not-found":
                    alert('user not found');
                    break;
                default:
                    console.log(err);
            }

        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <div className='sign-up-container'>
            <h2>Already have an account? </h2>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />

                <div className='buttons-container'>
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
                </div>

            </form>
        </div>
    )
}

export default SignInForm;
