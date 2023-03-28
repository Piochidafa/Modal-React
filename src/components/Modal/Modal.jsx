
import './Modal.css'


export const Modal = ({taberto, funcao}) => {


    if(taberto){        
        return(         
            <div className="Modal"> 
                  <div className='Content'>
                   <h1>Modal</h1>
                   <button onClick={funcao} className='ModalButton'>Click to Close</button>
                 </div>
            </div>
        )
    }else{
        return null;
    }
}