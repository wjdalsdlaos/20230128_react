import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostEdit() {
  const [inputs, setInputs] = useState({
    title: "",
    body: "",
    author: "관리자",
  });

  const navigate = useNavigate(); //함수 내부에서 링크를 변경할 때 사용.
  const handleInputs = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    const { data } = await axios.post("http://localhost:5000/posts", inputs);
    navigate("/post/" + data.id);
  };
  return (
    <div>
      <input type="text" name="title" onChange={handleInputs} />
      <input type="text" name="body" onChange={handleInputs} />
      <button onClick={handleSubmit}>등록</button>
    </div>
  );
}

export default PostEdit;
