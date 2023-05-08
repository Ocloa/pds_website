import next from "next/types";
import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import SignupForm from '../../components/forms/signup/signupForm';

export default function Signup() {
    return (
        <div>
        <SignupForm/>
        <Link href="/login"> Войти в аккаунт </Link>
        </div>
    )
  }