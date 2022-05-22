const Toggle = () => {

    
    
    const [show, setShow] = React.useState(true)


    return (
        <>
            <div className="container">
                <h1 className="head">Toggle between two component</h1>
                {
                    show?<Compo1/>:<Compo2 />
                }
               
                <button className="btn" onClick={()=>setShow(!show)}>Toggle Component</button>

                
            </div>
            
        </>
    )
}