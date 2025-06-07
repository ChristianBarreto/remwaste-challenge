import { useCart } from '../../../context/cartContext';
import IconCart from '../../atoms/IconCart';
import IconTrash from '../../atoms/IconTrash';

export default function Navbar() {
  const {cart, dispatch} = useCart();

  return (
    <div className="text-3xl navbar bg-primary">
      <div className="flex-1">
        <img src="https://www.renewableenergymarketing.net/wp-content/uploads/2019/02/Skip-Hire-REM-Waste-Transparent-logo.png" alt="" width="80"/>
      </div>
    
      <div className="flex-none mr-8">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost bg-secondary">
            3/6 - Choose your skip
          </div>
          <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
            <div className="card-body">
              <div className='w-full flex gap-4'>
                <p>1- Postcode</p>
                <input type="checkbox" defaultChecked className="checkbox checkbox-primary checkbox-xs" />
              </div>
              <div className='w-full flex gap-4'>
                <p>2- Waste type</p>
                <input type="checkbox" defaultChecked className="checkbox checkbox-primary checkbox-xs" />
              </div>
              <div className='w-full flex gap-4'>
                <p className='font-bold'>3- Select skip</p>
              </div>
              <div className='w-full flex gap-4'>
                <p className='text-gray-400'>4- Permit check</p>
              </div>
              <div className='w-full flex gap-4'>
                <p className='text-gray-400'>5- Choose date</p>
              </div>
              <div className='w-full flex gap-4'>
                <p className='text-gray-400'>6- Payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-secondary">
            <div className="indicator">
              <IconCart />
              <span className="badge badge-sm indicator-item bg-red-500 text-white">{cart?.items?.length}</span>
            </div>
          </div>
          <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
            <div className="card-body">
              <span className="text-lg font-bold">{cart?.items.length} Items</span>
              {cart?.items.map((item: any) => (
                <div key={item.id} className="text-gray-400 flex justify-between">
                  {item.size} Yards - &#163;{item.price_before_vat}
                  <span className='cursor-pointer' onClick={() => dispatch({type: 'remove', skip: item})}>
                    <IconTrash />
                  </span>
                </div>
              ))}
              <span className="text-primary">
                Subtotal: &#163;{cart.total.toFixed(2)}
              </span>
              <button className='btn btn-primary' disabled={!cart.items.length}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}