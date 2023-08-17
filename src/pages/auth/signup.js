import Form from "@/components/auth/form";

export default function SignUp () {
    const onSubmit = async(email, password)=>{
       console.log(email,password);
    }
    return <Form signin={false} onFormSubmit={onSubmit} />
};
