//ESTE ARQUIVO DEVE FICAR ANTES DE TODAS AS PAGES NA PASTA SRC

import { NextResponse } from 'next/server';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export function middleware(request) {
    // Verifique se o usuário está autenticado (por exemplo, verificando se um cookie de autenticação está presente)
    const loggedIn = request.cookies.get('loggedIn')

    //Pega a URL de login
    const signInURL = new URL('/login', request.url);
    const profileURL = new URL('/profile', request.url);

    //User deslogado
    if (!loggedIn) {
        //para evitar looping, pois mesmo se não houver o token ele vai ficar redirecionando pra ca
        //Então caso já esteja na rota login sem o token, prossiga com o código e renderize a página.
        //NextResponse
        if (request.nextUrl.pathname === '/login') {
            
            return NextResponse.next()
            
        }
        toast.error('You must be loggedIn')
        return NextResponse.redirect(signInURL);
    }

    //User Logado

    if (loggedIn) {
       
        //Evita looping
        if (request.nextUrl.pathname === '/profile') {
           
            return NextResponse.next();
        }
        
        return NextResponse.redirect(profileURL);
    }


    // Se a solicitação for para a rota de login e o usuário estiver autenticado, redirecione-o para a página de per
}

export const config = {
    //Rotas no qual o middleware irá atuar
    matcher: ['/login', '/profile']
}
