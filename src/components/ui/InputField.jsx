export default function InputField({type="text", ...props}){
    return(
        <div>
            <input type={type} {...props}/>
        </div>
    )
}