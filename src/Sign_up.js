import './Sign_up.css';
import { useState, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import divStyles from "./Div.css";
import axios from 'axios'

function Sign_up() {

  const SERVERURL = "http://52.79.207.32:9999/member/list";
  const DUPLURL='http://52.79.207.32:9999/auth/duplicate?loginId=join';

  const [memberList, setMemberList] = useState();

  const fetchData = () => {
    axios.get(SERVERURL).then((response) => { setMemberList(response.data) })
  }
  useEffect(() => { fetchData(); }, []);


  const onChange = (event) => event.target.value; //return없이 반환값 쓸려면 {}넣으면 안 됨
  const onClick = () => {}

  
  const [duplMessage,setDuplMessage] = useState("");
  const onClick_ID = async (event) => {
    event.preventDefault(); 
    const loginId=event.target.ID.value;
    
    const response = await axios.get(DUPLURL, { loginId })
    const responseData=response.data;

    if(responseData.message){
    setDuplMessage("사용 가능한 ID입니다"); 
    }
    else{
    setDuplMessage("중복사용된 ID입니다");
    }
  }


  const onSubmit = async (event) => {
    event.preventDefault(); 
    const loginId=event.target.ID.value;
    const name=event.target.name.value;
    const phoneNo=event.target.phoneNo.value;
    const email=event.target.email.value;

    const response = await axios.post(SERVERURL, { loginId, name, phoneNo, email })
  }



  const [allChecked, setAllChecked] = useState(false);
  const [checkboxes, setCheckboxes] = useState([
    {
      id: 1, label: "[필수] 함소 이용약관",
      div: "(예시) 함소 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 함소 서비스의 이용과 관련하여 함소 서비스를 제공하는 함소와 이를 이용하는 함소 서비스 회원(이하 회원) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 함소소 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다."
    },
    {
      id: 2, label: "[선택] 함소 이용약관",
      div: "(예시) 함소 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 함소 서비스의 이용과 관련하여 함소 서비스를 제공하는 함소와 이를 이용하는 함소 서비스 회원(이하 회원) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 함소소 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다."
    },
  ]);

  const handleAllChecked = event => {
    setAllChecked(event.target.checked);
    setCheckboxes(
      checkboxes.map(checkbox => ({
        ...checkbox,
        checked: event.target.checked
      }))
    );
  };

  const handleCheckboxChecked = (event, id) => {
    setCheckboxes(
      checkboxes.map(checkbox =>
        checkbox.id === id ? { ...checkbox, checked: event.target.checked } : checkbox
      )
    );
    if (!event.target.checked) {
      setAllChecked(false);
    } else {
      const otherCheckboxes = checkboxes.filter(checkbox => checkbox.id !== id);

      if (otherCheckboxes.every(checkbox => checkbox.checked)) {
        setAllChecked(true);
      }
    }
  };

  console.log()

  return (
    <div className={divStyles.sign_up_back}>
      <header>
        <img className={divStyles.logo}></img>
        <p className='Sign_up_font_hamso'>함소</p>
        <p className='Sign_up_font1'>온전히 떠나보낼 수 있도록,</p>
      </header>

      <main className="Sign_up-main">

        <div className="Sign_up-tag0">
          <p className="Sign_up_font0">
            회원가입을 위해 정보를 입력해주세요.
          </p>
        </div>

        <form onSubmit={onSubmit}>

          <form onSubmit={onClick_ID}>
            <label htmlFor="ID" className='Sign_up_font1'>아이디</label>
            <br></br>
            <Input id="ID" name = "ID" type="text" onChange={onChange} placeholder_text="아이디를 입력해주세요."
              className='Sign_up-input2' />
            <Button type="submit" text="중복확인" className='Sign_up-button1' />
            <br></br>
            <div className='Sign_up-button1_dupl'>{duplMessage}</div>
          </form>

          <label htmlFor="pswd" className='Sign_up_font1'>비밀번호</label>
          <br></br>
          <Input id="pswd" name = "pswd" type="password" onChange={onChange} placeholder_text="··········"
            className='Sign_up-input1' />
          <br></br>

          <label htmlFor="check_pswd" className='Sign_up_font1'>비밀번호 확인</label>
          <br></br>
          <Input id="check_pswd" type="password" onChange={onChange}
            placeholder_text="비밀번호를 한번 더 입력해주세요."
            className='Sign_up-input1' />
          <br></br>

          <label htmlFor="name" name="name" className='Sign_up_font1'>이름</label>
          <br></br>
          <Input id="name" type="text" onChange={onChange} placeholder_text="이름을 입력해주세요."
            className='Sign_up-input1' />
          <br></br>


          <label htmlFor="relationship" className='Sign_up_font1'>생년월일<br></br></label>
          <select id="relationship" name="relationship" className='Sign_up-input3'>
            <option value="father" >아버지(父)</option>
            <option value="mother">어머니(母)</option>
            <option value="son">아들(子)</option>
            <option value="daughter">딸(女)</option>
          </select>
          <br></br>

          <label htmlFor="email" name="email" className='Sign_up_font1'>이메일</label>
          <br></br>
          <Input id="email" type="email" onChange={onChange} placeholder_text="이메일을 입력해주세요."
            className='Sign_up-input1' />
          <br></br>


          <label htmlFor="tel" className='Sign_up_font1'>전화번호</label>
          <br></br>
          <Input id="tel" type="number" name = "phoneNo" onChange={onChange} placeholder_text="010-XXXX-XXXX"
            className='Sign_up-input2' />
          <Button onClick={onClick} text="인증요청" className='Sign_up-button1' />
          <br></br>

          <label htmlFor="code" className='Sign_up_font1'>인증번호</label>
          <br></br>
          <Input id="code" type="number" onChange={onChange} placeholder_text="인증번호를 입력해주세요."
            className='Sign_up-input2' />
          <Button onClick={onClick} text="인증확인" className='Sign_up-button1' />
          <br></br>


          <label htmlFor="code" className="Sign_up_font0">
            <Input id="code" type="checkbox" checked={allChecked} onChange={handleAllChecked} />
            전체 동의하기</label>
          <div className='Sign_up-terms_all'>
            (예시)실명 인증된 아이디로 가입, 위치기반서비스 이용약관(선택),
            이벤트 · 혜택 정보 수신(선택)동의를 포함합니다
          </div>


          {/* {checkboxes.map(checkbox => (
        <div key={checkbox.id}>
          <label>
            <input
              type="checkbox"
              checked={checkbox.checked || false}
              onChange={event => handleCheckboxChecked(event, checkbox.id)}
            />
            {checkbox.label}
          </label>
        </div>
      ))} */}


          {checkboxes.map(checkbox => (
            <div key={checkbox.id}>
              <label>
                <Input type="checkbox" checked={checkbox.checked || false}
                  onChange={event => handleCheckboxChecked(event, checkbox.id)}
                />
                {checkbox.label}
              </label>
              <br></br>
              <div className="Sign_up-terms">
                {checkbox.div}
              </div>
            </div>
          ))}


          <Button onClick={onSubmit} text="가입하기" className='Sign_up-button2' />

        </form>
      </main>
    </div>
  )
};


export default Sign_up;
