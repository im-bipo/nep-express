import React from 'react'

const Vender = () => {
  return (
 <>
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">  Vender Registration Form</h2>

      <form>
        <div className="mb-4">
          <label htmlFor="citizenshipCard" className="block text-gray-700">
            Pan Number
          </label>
          <input
            type="text"
            name="citizenshipCard"
            id="citizenshipCard"
            className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your citizenship card "
          />
        </div>
        <div className="mb-4">
          <label htmlFor="citizenshipCard" className="block text-gray-700">
            Pan Card
          </label>
          <input
            type="file"
            name="citizenshipCard"
            id="citizenshipCard"
            className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your citizenship card number "
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
 </>
  )
}

export default Vender