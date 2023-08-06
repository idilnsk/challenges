import "./EntryForm.css";
import Button from "../Button";
import Entry from "../Entry";
import { uid } from "uid";


export default function EntryForm({handleAddEntry}) {
  
  
    function handleSubmit(event){
      event.preventDefault();
      const formData= new FormData(event.target);
      const data={ id:uid(),motto:formData.get("motto"), notes:formData.get("notes"), date:new Date().toLocaleDateString("en-us", { dateStyle: "medium" })
    };

  
    
    event.target.reset();
  event.target.elements.notes.focus();
  console.log(data);
  handleAddEntry(data);
  }
  return (
    <form className="entry-form"  onSubmit={handleSubmit}>
      <h2 className="entry-form__title">New Entry</h2>
      <div className="entry-form__fields">
        <div className="entry-form__field">
          <label htmlFor="motto">Motto</label>
          <input type="text" name="motto" id="motto" />
        </div>
        <div className="entry-form__field">
          <label htmlFor="notes">Notes</label>
          <textarea name="notes" id="notes" rows="4" />
        </div>
        <div className="entry-form__button-wrapper">
          <Button type="submit">Create</Button>
        </div>
      </div>
    </form>
  );
}
