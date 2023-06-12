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

          <div className='icon f_flex width'>
          <Link to='/home'>
            <i className='fa fa-user icon-circle'></i>
            </Link>
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
