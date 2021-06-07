import {useState} from 'react';

const DEFAULT_DATA = {
    title: "",
    description: "",
    link: "",
    priority: "2",
    timeToFinish: 60
}

const ResourceForm = ({onFormSubmit, initialData}) => {

    const [form, setForm] = useState(initialData || DEFAULT_DATA);
    const resetForm = () => setForm(DEFAULT_DATA);

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const submitForm = () => {
        onFormSubmit(form);
    }

    return (
        <div className="resource-form box">
            
            <h1 className="title">{(form.id ? "Edit Resource" : "Add New Resource")}</h1>
            <form>
                <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                        <input 
                            className="input" 
                            type="text" 
                            onChange={handleChange}
                            name="title"
                            placeholder="Enter Title"
                            value={form.title} />
                    </div>
                    <p className="help">Enter a Title</p>
                </div>
                <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                        <textarea 
                            className="textarea"
                            onChange={handleChange}
                            name="description"
                            placeholder="Enter Description Here"
                            value={form.description}
                        ></textarea>
                    </div>
                    <p className="help">Enter a Description</p>
                </div>
                <div className="field">
                    <label className="label">Link</label>
                    <div className="control">
                        <input 
                            className="input" 
                            onChange={handleChange}
                            name="link"
                            type="text" 
                            placeholder="https://www.google.com"
                            value={form.link}
                        />
                    </div>
                    <p className="help">Enter a link</p>
                </div>
                <div className="field">
                    <label className="label">Priority</label>
                    <div className="control">
                        <div className="select" >
                            <select value={form.priority} onChange={handleChange} name="priority">
                                <option>Select dropdown</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>
                    <p className="help">Select Priority</p>
                </div>
                <div className="field">
                    <label className="label">Time to Finish</label>
                    <div className="control">
                        <input 
                            className="input" 
                            onChange={handleChange}
                            name="timeToFinish"
                            type="number" 
                            placeholder="60 (Time is in Minutes)" 
                            value={form.timeToFinish}
                        />
                    </div>
                    <p className="help">Estimated time to finish</p>
                </div>
                <div className="field is-grouped">
                    <div className="control">
                        <button 
                            type="button"
                            onClick={submitForm}
                            className="button is-link"
                        >Submit</button>
                    </div>
                    <div className="control">
                        <button onClick={resetForm} type="button" className="button is-link is-light">Reset</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ResourceForm;