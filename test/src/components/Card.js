import React from 'react'

export default function Card() {
  return (
    <div>
          <div>
                <div className="card" style={{ "width": "18rem", margin:"2rem"}}>
                    <img src="https://images.hdqwalls.com/download/chocolate-dessert-pastry-cake-5k-yw-1920x1080.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Pastry</h5>
                        <p className="card-text">Cake and Back</p>
                         <div className='container w-100'>
                               <select  className='m-2 h-100 bg-success rounded'>
                                      {Array.from(Array(6),(e,i)=>{
                                         return(
                                            <option key={i+1} value={i+1}>{i+1}</option>
                                         )
                                        })}
                                </select> 
                                <select  className='m-2 h-100 bg-success rounded'>
                                    <option value="half">Half</option>
                                    <option value="full">Full</option>
                                </select>
                                <div className='d-inline h-100 fs-5'>
                                    Total price
                                </div>
                         </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
