import React from 'react'

const AddCoffee = () => {

  const hundleCoffeeAdd = e => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;

    const result = {name, quantity, supplier, taste, category, details}
    console.log(result);
    

  }
  return (
    <div className='flex flex-col bg-[#F4F3F0] max-w-[1240px] m-auto p-16'>
        <h2 className='text-2xl font-bold text-center'>Add New Coffee</h2>
        <p className='max-w-[760px] text-center m-auto mt-2'>It is a long established fact that a reader will be distraceted 
          by the readable content of a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a more-or-less 
          normal distribution of letters, as opposed to using Content here.</p>
        <form onSubmit={hundleCoffeeAdd}>
          <div className='flex gap-4 mt-8'>
            <div className='form-control w-full md:w-1/2'>
              <label className='label'>
                <span className='label-text font-semibold'>Coffee Name</span>
              </label>
              <label className='input-group w-full'>
                  <input type="text" name='name' placeholder='Enter coffee name' className='input w-full'/>
              </label>
            </div>
            <div className='form-control w-full md:w-1/2'>
              <label className='label'>
                <span className='label-text font-semibold'>Available Quantity</span>
              </label>
              <label className='input-group'>
                  <input type="number" name='quantity' placeholder='Available Quantity' className='input w-full'/>
              </label>
            </div>
          </div>
          <div className='flex gap-4 mt-8'>
            <div className='form-control md:w-1/2'>
              <label className='label'>
                <span className='label-text font-semibold'>Supplier</span>
              </label>
              <label className='input-group w-full'>
                  <input type="text" name='supplier' placeholder='Enter coffee supplier' className='input w-full'/>
              </label>
            </div>
            <div className='form-control md:w-1/2'>
              <label className='label'>
                <span className='label-text font-semibold'>Taste</span>
              </label>
              <label className='input-group'>
                  <input type="text" name='taste' placeholder='Enter coffee taste' className='input w-full'/>
              </label>
            </div>
          </div>
          <div className='flex gap-4 mt-8'>
            <div className='form-control md:w-1/2'>
              <label className='label'>
                <span className='label-text font-semibold'>Category</span>
              </label>
              <label className='input-group w-full'>
                  <input type="text" name='category' placeholder='Enter coffee category' className='input w-full'/>
              </label>
            </div>
            <div className='form-control md:w-1/2'>
              <label className='label'>
                <span className='label-text font-semibold'>Details</span>
              </label>
              <label className='input-group'>
                  <input type="text" name='details' placeholder='Enter coffee details' className='input w-full'/>
              </label>
            </div>
          </div>
          <div className='form-control'>
              <label className='label'>
                <span className='label-text font-semibold'>Photo</span>
              </label>
              <label className='input-group'>
                  <input type="text" name='details' placeholder='Photo Url' className='input w-full'/>
              </label>
            </div>
         
          <input className="btn btn-block mt-6 bg-[#D2B48C] border border-zinc-900" type="submit" value='Add Coffee' />
        </form>
    </div>
  )
}

export default AddCoffee