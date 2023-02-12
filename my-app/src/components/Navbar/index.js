const Navbar =(props)=>{
    const {mode,onclickButton,active}=props
    const onClickToggle=()=>{
        onclickButton();
    }
    return(
        <nav class={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div class="container-fluid">
          <a class="navbar-brand text-primary fs-3" href="#">Home<span className="text-success">Sweets</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                  Laddos
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Besan</a></li>
                  <li><a class="dropdown-item" href="#">Rava Laddo</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Many more...</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                  Healthy
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Panjeeri Laddo</a></li>
                  <li><a class="dropdown-item" href="#">Protien Laddo</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Many more...</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                  Traditional
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Semya Payasam</a></li>
                  <li><a class="dropdown-item" href="#">Undarallu</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Many more...</a></li>
                </ul>
              </li>
            </ul>
            <div className="form-check form-switch" onClick={onClickToggle}>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
            <label className={`form-check-label text-${props.color}`} htmlFor="flexSwitchCheckDefault" >{mode==="light"?"Dark Mode":'Light Mode'}</label>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar; 

