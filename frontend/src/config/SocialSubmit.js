import axios from "axios";

export async function handleSubmit(e, social,flag,setFlag) {
  e.preventDefault();
  console.log(social);
  try {
    await axios.post("http://localhost:8080/social", social);
    setFlag(!flag)
  } catch (e) {
    console.log(e.message);
  }
  e.target.reset();
}
