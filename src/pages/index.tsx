import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { ArrowBigDown } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const clientId = '8ynk5iozc6zhsjw8stk3z9a5a';
  const redirectUri = 'https://testing-ventia.vercel.app/';
  const responseType = 'code';
  const redirectOnError = true;

  const handleKnowAccount = async () => {
    setIsLoading(true);
    try {
      const queryData = {
        to,
        subject,
        message,
      };

      const response = await fetch('/api/sendemail', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(queryData),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const data = await response.json();
      console.log('Datos del webhook:', data);
    } catch (error) {
      console.error('Error:', error);
    }
    setIsLoading(false);
  };
  const handleLinkAccount = async () => {
    setIsLoading(true);
    try {
      const queryData = {
        to,
        subject,
        message,
      };

      const response = await fetch('/api/sendemail', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(queryData),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const data = await response.json();
      console.log('Datos del webhook:', data);
    } catch (error) {
      console.error('Error:', error);
    }
    setIsLoading(false);
  };

  const handleLinkEmail = async () => {
    const clientId = '8ynk5iozc6zhsjw8stk3z9a5a'
    const redirectUri = 'https://testing-ventia.vercel.app/'

    const result = await fetch(`https://api.nylas.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer 6iToeQOAkJjePIeFQh2CkGA5F6aXK4`,
        'Content-Type': 'application/json',
      },
      redirect: 'follow'
    }).then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >

      <Button onClick={handleLinkEmail}>
        Linkear Cuenta de Email
      </Button>
      {/* ------------------ */}
      <Input
        className='my-4'
        type="email"
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <Input
        className='my-4'
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <Textarea
        className='my-4'
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button onClick={handleKnowAccount} disabled={isLoading}>
        <ArrowBigDown className="mr-2 h-4 w-4" />
        Enviar Mail
      </Button>
    </main >
  );
}

