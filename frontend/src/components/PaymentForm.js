import React, {useState} from "react";
import toast from "react-hot-toast";
import {BsFillCreditCard2BackFill} from 'react-icons/bs';
import {FcMoneyTransfer} from 'react-icons/fc';

const PaymentForm = () => {

    const [data, setData] = useState({
        name: "",
        number: "",
        code: ""
      });
    
      const handleOnChange = (e) => {
        const { name, value } = e.target;
    
        setData((preve) => {
          return {
            ...preve,
            [name]: value,
          };
        });
      };

    const paymentSubmit = async(e) => {
        e.preventDefault();
        const {name, code, number} = data;

        if(name && code && number) {
            toast.success("Payment Successfuly")
        }else{
            toast.error("Enter required Fields")
        }
    }

  return (
    
    <>
      <div className="min-w-screen h-auto bg-gray-200 flex items-center justify-center px-5 pb-10 pt-8 mt-5">
        <form onSubmit={paymentSubmit}>
            <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700">
                <div className="w-full pb-2">
                    <div className="bg-red-500 text-white overflow-hidden rounded-full w-12 h-12 -mt-10 mx-auto shadow-lg flex justify-center items-center">
                        <BsFillCreditCard2BackFill/>
                    </div>
                </div>
                <div className="m-1">
                    <h2 className="text-center font-bold text-sm uppercase">Payment Info</h2>
                </div>
                {/* Card type */}
                <div className="mb-1 flex -mx-1">
                    <div className="px-2">
                        <label for="type1" className="flex items-center cursor-pointer">
                            <input type="radio" className="form-radio h-3 w-3 text-indigo-500" name="type" id="card-name" checked/>
                            <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-5 ml-3"/>
                        </label>
                    </div>
                    <div className="px-2">
                        <label for="type1" className="flex items-center cursor-pointer">
                            <input type="radio" className="form-radio h-3 w-3 text-indigo-500" name="type" id="card-name"/>
                            <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" className="h-5 ml-3"/>
                        </label>
                    </div>
                </div>
                {/* card name */}
                <div className="mb-2 mt-3">
                    <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
                    <div>
                        <input onChange={handleOnChange} name="name" className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="" type="text"/>
                    </div>
                </div>
                {/* card number */}
                <div className="mb-2 mt-3">
                    <label className="font-bold text-sm mb-2 ml-1">Card number</label>
                    <div>
                        <input onChange={handleOnChange} name="number" className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text"/>
                    </div>
                </div>
                {/* exp date */}
                <div className="mb-3 -mx-2 flex items-end">
                    <div className="px-2 w-1/2">
                        <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
                        <div>
                            <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                <option value="01">01 - January</option>
                                <option value="02">02 - February</option>
                                <option value="03">03 - March</option>
                                <option value="04">04 - April</option>
                                <option value="05">05 - May</option>
                                <option value="06">06 - June</option>
                                <option value="07">07 - July</option>
                                <option value="08">08 - August</option>
                                <option value="09">09 - September</option>
                                <option value="10">10 - October</option>
                                <option value="11">11 - November</option>
                                <option value="12">12 - December</option>
                            </select>
                        </div>
                    </div>
                    <div className="px-2 w-1/2">
                        <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                        </select>
                    </div>
                </div>
                <div className="mb-10">
                    <label className="font-bold text-sm mb-2 ml-1">Security code</label>
                    <div>
                        <input onChange={handleOnChange} name="code" className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text"/>
                    </div>
                </div>
                <div>
                    <button type="submit" className="flex justify-center block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-green-500 text-white rounded-lg px-3 py-3 font-semibold">
                        <i className="m-2"><FcMoneyTransfer/> </i>
                        PAY NOW</button>
                </div>
            </div>
        </form>
      </div>
    </>
  );
};

export default PaymentForm;
