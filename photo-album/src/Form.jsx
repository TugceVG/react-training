import { useState } from 'react';
import FormInput from './FormInput';

export default function Form() {
    const [form, setForm] = useState({
        username: "",
        title: "",
        company: "",
        comment: ""
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            label: "Username",
        },
        {
            id: 2,
            name: "title",
            type: "text",
            placeholder: "Title",
            label: "Title",
        },
        {
            id: 3,
            name: "company",
            type: "text",
            placeholder: "Company",
            label: "Company",
        },
        {
            id: 4,
            name: "comment",
            type: "text",
            placeholder: "Comment",
            label: "Comment",
        }
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(Object.fromEntries(data.entries()));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        name={input.name}
                        placeholder={input.placeholder}
                    />
                ))}
                <button>Send</button>
            </form>
        </div>
    )
}
