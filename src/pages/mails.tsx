import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { ArrowBigDown } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [emailsInfo, setEmailsInfo] = useState(null);

    const handleViewMessages = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/reademail', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify(),
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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/reademail`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Error en la solicitud GET');
                }

                const data = await response.json();
                setEmailsInfo(data);
                console.log('Datos de los emails:', data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
        >
            <Link href='/index'>Volver al inicio</Link>
            <h1 className='m-4 font-bold'>Estos son tus emails :</h1>

            {emailsInfo && (
                <div>
                    <h2>Respuesta del servidor:</h2>
                    <pre>{JSON.stringify(emailsInfo, null, 2)}</pre>
                </div>
            )}
        </main >
    );
}
