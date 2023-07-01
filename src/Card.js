function Card(props){
    // console.log(props);
    // console.log(props.title);
    const {image, title, description} = props;  //Object Destructuring
  
    function clickHandler(e){
      // console.log(title);
      console.log(e);
      console.log(e.target);  //button tag
    }
    return (
      <section className='card'>
        <img 
          onMouseOver={() => console.log("I just Hovered!")}
          src={image}  
          alt="card-image"/>
        <h1 style={{ marginTop: "1rem" }}>{title}</h1>
        {/* <Description/> */}
        <p>{description}</p>
        <button onClick={clickHandler}>Click Me</button>
      </section>
    );
  
    // function Description(){
    //   return <p style={{ marginTop: "0.5rem" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    // }
  }

  export default Card;