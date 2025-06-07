
export default function Navbar() {
  
  return (
    <div className="text-3xl navbar bg-primary">
      <div className="flex-1">
        <img src="https://www.renewableenergymarketing.net/wp-content/uploads/2019/02/Skip-Hire-REM-Waste-Transparent-logo.png" alt="" width="80"/>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-secondary">
            a
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
          </div>
        </div>
      </div>
    </div>
  )
}