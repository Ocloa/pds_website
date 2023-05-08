import styles from "./loginForm.module.css"
import * as Form from "@radix-ui/react-form"
import * as RadioGroup from "@radix-ui/react-radio-group"


export interface ILoginForm {}

const LoginForm: React.FC<ILoginForm> = () => {
  return (
    <Form.Root className={styles.FormRoot}>
        <Form.Field className={styles.FormField} name="email">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className={styles.FormLabel}>Email</Form.Label>
            <Form.Message className={styles.FormMessage} match="valueMissing">
            Пожалуйста введите email - адрес
            </Form.Message>
            <Form.Message className={styles.FormMessage} match="typeMismatch">
            Недействительный формат email - адреса
            </Form.Message>
        </div>
        <Form.Control asChild>
            <input className={styles.Input} type="email" required />
        </Form.Control>
        </Form.Field>
        <Form.Field className={styles.FormField} name="password">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Form.Label className={styles.FormLabel}>Password</Form.Label>
            <Form.Message className={styles.FormMessage} match="valueMissing">
            Пожалуйста введите пароль
            </Form.Message>
        </div>
        <Form.Control asChild>
            <input className = {styles.Input} type="password" required />
        </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
        <button className={styles.Button} style={{ marginTop: 10 }}>
            Log in
        </button>
        </Form.Submit>
    </Form.Root>
  );
};

export default LoginForm;