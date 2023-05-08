import styles from "./signupForm.module.css"
import * as RadioGroup from "@radix-ui/react-radio-group"
import * as Form from "@radix-ui/react-form"

export interface ISignupForm {}

const SignupForm: React.FC<ISignupForm> = () => {
    return (
        <Form.Root className={styles.FormRoot}>
        <RadioGroup.Root className={styles.RadioGroupRout} defaultValue="student" aria-label="View density">
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <RadioGroup.Item className={styles.RadioGroupItem}  value="student" id="r1">
            <RadioGroup.Indicator className={styles.RadioGroupIndicator}  />
            </RadioGroup.Item>
            <label className={styles.Label}  htmlFor="r1">
            Student
            </label>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <RadioGroup.Item className={styles.RadioGroupItem}  value="supervisor" id="r2">
            <RadioGroup.Indicator className={styles.RadioGroupIndicator}  />
            </RadioGroup.Item>
            <label className={styles.Label}  htmlFor="r2">
            Supervisor
            </label>
        </div>
        </RadioGroup.Root>
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
    )
}

export default SignupForm;