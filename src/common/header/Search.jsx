import React from "react"
import logo from "../../components/assets/images/logo.svg"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { Appcontext } from "../../components/contextStore"
const Search = () => {

  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
const  {CartItem}=useContext(Appcontext)

console.log(localStorage.getItem('logger'));
  return (
    <>
      <section className='search'>
        <div>
        <div className='container c_flex'>
          <div className='logo width  me-10'>
            <img src={logo} alt='' />
          </div>

          <div className='search-box f_flex search-box-desktop'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>
          <div className='icon f_flex width2'>
         {/* Kiểm tra đã đăng nhập tài khoản chưa để render ra giao diên */}
          {localStorage.getItem('logger')==='true'? <div className="d_flex flex-column">
            <Link to='/home'>
            <i className='fa fa-user icon-circle'></i>
            </Link>
              <Link to='/home'>
                <p className="__text-logger">LOGGOUT</p>
              </Link>
            </div> :<div className="d_flex flex-column">
              <Link to='/home'>
                <p className="__text-logger">REGISTER</p>
              </Link>
              <Link to='/loggin'>
                <p className="__text-logger">SIGN IN</p>
              </Link>
            </div>  }
           

            
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
        </div>
        <div className='search-box f_flex search-box-mobile'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>
      </section>
    </>
  )
}

export default Search
