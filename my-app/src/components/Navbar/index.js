const Navbar =(props)=>{
    const {mode,onclickButton}=props
    const onClickToggle=()=>{
        onclickButton();
    }
    return(
    <nav className={`w-100 navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
        <a className="navbar-brand text-bold text-primary fs-1" href="#">eyew<span className="fst-italic text-success">AI</span>r<sub className="fs-5">wear Smart</sub></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div>
            <img classname="img-thumbnail" src="spets.jpg" alt="WearSmart" width="200" height="70"/>
        </div>
        <div className="form-check form-switch" onClick={onClickToggle}>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
            <label className={`form-check-label text-${props.color}`} htmlFor="flexSwitchCheckDefault" >{mode==="light"?"Dark Mode":'Light Mode'}</label>
        </div>
        </div>
    </nav>
    )
}

export default Navbar; 