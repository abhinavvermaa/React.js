function Hello(){
  let number = 456;
  let myname = 'abhinav';
  let fullname = () => {
    return 'abhinav verma';
  }
  return <h3>{number} i am your master {fullname()}</h3>
}

export default Hello;