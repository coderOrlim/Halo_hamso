import './App.css';
import { useState, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import divStyles from "./Div.css";

function App() {
  const onChange = () => { }
  const onClick = () => { }
  return (
    <div className={divStyles.app_back}>
      <header>
        <img float = "left" className={divStyles.logo}></img>
        <p>함소</p>
        <p>온전히 떠나보낼 수 있도록</p>
      </header>

      <main className={divStyles.app_main}>

        <p>
          회원가입을 위해 정보를 입력해주세요.
        </p>

        <form action="">
          <label for="name">이름</label>
          <br></br>
          <Input id="name" type="text" onChange={onChange} placeholder_text="이름을 입력해주세요." />
          <br></br>

          <label for="tel">전화번호</label>
          <br></br>
          <Input id="tel" type="number" onChange={onChange} placeholder_text="010-XXXX-XXXX" />
          <Button onClick={onClick} text="인증요청" />
          <br></br>

          <label for="code">인증번호</label>
          <br></br>
          <Input id="code" type="number" onChange={onChange} placeholder_text="인증번호를 입력해주세요." />
          <Button onClick={onClick} text="인증확인" />
          <br></br>

          <label for="pswd">비밀번호</label>
          <br></br>
          <Input id="pswd" type="password" onChange={onChange} placeholder_text="··········" />
          <br></br>

          <label for="check_pswd">비밀번호 확인</label>
          <br></br>
          <Input id="check_pswd" type="password" onChange={onChange} placeholder_text="비밀번호를 한번 더 입력해주세요." />
          <br></br>

          <label for="relationship">유족과의 관계</label>
          <select id="relationship" name="relationship">
            <option value="father">아버지(父)</option>
            <option value="mother">어머니(母)</option>
            <option value="son">아들(子)</option>
            <option value="daughter">딸(女)</option>
          </select>
          <br></br>

          <Input onClick={onClick} type="submit" value="가입하기" />
        </form>
      </main>
    </div>
  );
}

export default App;
