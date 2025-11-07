import React, { useState } from "react";

const ToDoAppOne = () => {
  const [userData, setUserData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData((prev) => [...prev, { id: userData.length + 1, ...formData }]);
    console.info(userData)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.info(`${name} : ${value}`)
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <main className="flex flex-col h-dvh p-1!">
        <section className="flex-1 grid place-items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 w-2/3 p-2!"
          >
            <div className="">
              <input
                type="text"
                className="border w-full px-2! h-10"
                // value={formData.name}
                name="name"
                placeholder="Enter a name"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <input
                type="email"
                className="border w-full px-2! h-10"
                // value={formData.email}
                name="email"
                placeholder="Enter a email"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <input
                type="tel"
                className="border w-full px-2! h-10"
                // value={formData.phone}
                name="phone"
                placeholder="Enter a number"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <input
                type="submit"
                className="border h-10 px-3! cursor-pointer"
                value="Submit"
              />
            </div>
          </form>
        </section>
        <section className="flex-1 overflow-y-scroll">
          <table className=" w-full">
            <tbody className="">
              {Array.from({ length: 30 }).map((list, idx) => (
                <tr>
                  <th className="p-2! mb-1! shadow-2xl">{idx + 1}</th>
                  <td className="p-2! mb-1! shadow-2xl">User name</td>
                  <td className="p-2! mb-1! shadow-2xl">
                    <button>Edit</button>
                  </td>
                  <td className="p-2! mb-1! shadow-2xl">
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
};

export default ToDoAppOne;
