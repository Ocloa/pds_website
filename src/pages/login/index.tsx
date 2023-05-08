import next from "next/types";
import Link from "next/link";
import Head from "next/head";
import LoginForm from '../../components/forms/login/loginForm';

export default function Login() {
    return (
        <div>
        <LoginForm>
            <Link href="/signup"> Создать аккаунт </Link>
        </LoginForm>

        </div>
    )
  }