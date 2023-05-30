import React, {useEffect, useState} from 'react'
import {BsYoutube, BsSearch} from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom'


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
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
      <Link to='/' className='flex items-center'>
        {/* 로고의 색을 tailwind에서 제공하는 색이 아닌 내가 원하는 색으로 하고 싶다면 tailwind.config파일에 가서 color를 지정을해서 아래와 같이 사용하며 된다. */}
        <BsYoutube className='text-4xl text-logo'/>
        <h1 className='font-bold ml-2 text-3xl'>YouTube</h1>
      </Link>
      {/* form태그에 onSubmit 이벤트를 걸어주면 form태그에 안의 input에서 엔터를 치거나, 버튼을 클릭시 onSubmit안의 함수가 실행이 된다. */}
      <form className='w-full flex justify-center' onSubmit={handleSubmit}>
        <input className='w-7/12 p-2 outline-none bg-black text-gray-50' type="text" placeholder='Search...' value={text} onChange={handleChange} />
        <button className='bg-zinc-600 px-4'><BsSearch /></button>
      </form>
    </header>
  )
}

