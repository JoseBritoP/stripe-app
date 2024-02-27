"use client"
import { useState,useEffect} from 'react'

export default function PasswordChecker({password}:{password:string}) {
  const [strength, setStrength] = useState('Weak');
  const [bg, setBg] = useState('#B22222');

  useEffect(() => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[$#&!_]/.test(password);
    const hasMinLength = password.length >= 8;
    
    // Determinar la fortaleza de la contraseña
    if (hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && hasMinLength) {
      setStrength('Strong');
      setBg('#008000');
    } else if ((hasUpperCase || hasLowerCase || hasNumber || hasSpecialChar) && hasMinLength) {
      setStrength('Moderate');
      setBg('#FFA500');
    } else {
      setStrength('Weak');
      setBg('#B22222');
    }
  }, [password]);

  return (
    <div
      className={`p-1 rounded-lg mt-2 bg-[#FFF]`}
      style={{
        backgroundColor: bg,
      }}
    >
      <h4 className='text-white text-center font-medium'>
        {strength} Password
      </h4>
    </div>
  );
};