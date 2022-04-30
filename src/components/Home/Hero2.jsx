import React from 'react';

function Hero2(props) {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="/images/DSCN9820.JPG"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              留給後代更好的道路交通環境
            </h1>
            <p className="mb-8 leading-relaxed">
              (一) 塑造親山親水的藍綠生活環境
            </p>
            <p className="mb-8 leading-relaxed">(二) 以綠色交通串接各項機能</p>
            <p className="mb-8 leading-relaxed">
              (三) 強化在地產業活動與創新動能
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero2;
