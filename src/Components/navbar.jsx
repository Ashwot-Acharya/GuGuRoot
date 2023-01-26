

function Navbar() {
  
    return (
      <div >
        <div> 
          <h1 className=" title no-und"> GuGu Root </h1>
          <h2 className="title">Find your laptop</h2>
        </div>
        <div className="nav-bar">
        <div >
            <a href="/" className="no-und strg"> <span class="material-symbols-outlined">
Home
</span> </a>
        </div>
        <div>
            <a href="/add" className="no-und strg"><span class="material-symbols-outlined">
Add Laptop
</span></a>
        </div>
        </div>
        
    </div>
    )
  }
  
  export default Navbar
  