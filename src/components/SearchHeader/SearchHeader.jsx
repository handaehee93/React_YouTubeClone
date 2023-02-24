import React, {useEffect, useState} from 'react'
import {BsYoutube, BsSearch} from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styles from './SearchHeader.module.css'

export default function SearchHeader() {
  const navigate = useNavigate()
  const [text, setText] = useState('')
  const {keyword} = useParams()

  useEffect(() => (
    setText(keyword || '')
  ), [keyword])
  
  const handleChange = (e) => {
    setText(e.target.value)
  }
  // form태그가 onSubmit이 되면 입력한 텍스트의 경로로 이동하는 코드 작성
  const handleSubmit = (e) => {
    e.preventDefault()
    setText('')
    navigate(`/videos/${text}`)
  }
  return (
    <header className={styles.searchheader}>
      <Link to='/' className={styles.logo}>
        <BsYoutube className={styles.icon}/>
        <h1>YouTube</h1>
      </Link>
      {/* form태그에 onSubmit 이벤트를 걸어주면 form태그에 안의 input에서 엔터를 치거나, 버튼을 클릭시 onSubmit안의 함수가 실행이 된다. */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder='Search...' value={text} onChange={handleChange} />
        <button><BsSearch /></button>
      </form>
    </header>
  )
}
